import React from "react";

import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    LineSeries,
    VerticalGridLines,
} from 'react-vis';

import '@node_modules/react-vis/dist/style.css';
import CustomAxisLabel from "./CustomAxisLabel";
import { PlotTitleGrid, TableGrid } from "@shared/styles/StyledMaterialUI";
import { StyledBorders } from "@shared/styles/StyledMaterialUI";

export default function App(props) {

    const data = [];
    for (let iData = 0; iData < props.response.length; iData++) {
        data.push({ x: props.response[iData].y, y: props.response[iData].x })
    }

    return (
        <TableGrid>
            <PlotTitleGrid>
                {`Historical comparison of 1 ${props.baseCurrency.label} to 1 ${props.currencyToCompare.label} (GMT +00:00)`}
            </PlotTitleGrid>
            <XYPlot
                xType="time"
                width={1300}
                height={300}
                margin={{ left: 100 }}
            >
                <HorizontalGridLines />
                <VerticalGridLines />
                <StyledBorders />
                <XAxis />
                <YAxis />
                <CustomAxisLabel title={'Date'} xAxis />
                <CustomAxisLabel title={'Exchange rate [-]'} />
                <LineSeries
                    data={data} />
            </XYPlot>
        </TableGrid>
    )
}
