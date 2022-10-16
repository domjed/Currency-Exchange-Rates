import React, { useEffect, useState } from "react";

import { DataGrid } from '@mui/x-data-grid';
import { CurrencyTableGrid } from "@shared/styles/StyledMaterialUI.js";

const columns = [
  {
    field: 'currencySymbol',
    headerName: 'Currency Symbol',
    headerClassName: 'tableHeaderClass',
    width: 200
  },
  {
    field: 'currencyName',
    headerName: 'Currency Name',
    headerClassName: 'tableHeaderClass',
    width: 400
  },
  {
    field: 'ratio',
    headerName: 'Ratio',
    headerClassName: 'tableHeaderClass',
    type: 'number',
    width: 180,
  },
];

function createSingleRowContent(id, currencySymbol, currencyName, ratio) {
  return {
    id,
    currencySymbol,
    currencyName,
    ratio,
  };
}

const createRowsContent = (response, options) => {
  let allRows = [];
  let singleRow = {};

  for (let iResponse = 0; iResponse < response.length; iResponse++) {
    singleRow.id = iResponse;
    singleRow.symbol = response[iResponse][0];
    singleRow.rate = response[iResponse][1];
    singleRow.name = options.find(option => option.value === singleRow.symbol).description;
    allRows.push(createSingleRowContent(singleRow.id, singleRow.symbol, singleRow.name, singleRow.rate))
  }
  return allRows
}

export default function CurrentDataOutput(props) {
  const [rows, setRows] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const hadlePageSizeChange = (e) => { setPageSize(e) };

  useEffect(() => {
    const rows = createRowsContent(props.response, props.options)
    setRows(rows)
  }, [props])

  return (
    <CurrencyTableGrid>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        checkboxSelection
        rowsPerPageOptions={[5, 10, 25, 50]}
        onPageSizeChange={hadlePageSizeChange}
        autoHeight
      />
    </CurrencyTableGrid>
  );
}