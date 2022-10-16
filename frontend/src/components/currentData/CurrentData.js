import React, { useEffect, useState } from "react";

import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import { OutlinedInput, Grid, Tooltip } from "@mui/material/";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { getSymbols, checkLatestRates } from "@api/CurrencyRates";
import {
  CURRENT_BASE_LABEL,
  CURRENT_QUOTE_LABEL,
  CURRENT_DATA_TITLE,
  CURRENT_BASE_TOOLTIP,
  ERROR_MESSAGE,
  NUMERIC_INPUT_PATTERN,
} from "@shared/Constants";
import { StyledLabel, StyledErrorMessage } from "@shared/styles/StyledComponents.js";
import {
  StyledTextField,
  PageTitle,
  PageTitleGrid,
} from "@shared/styles/StyledMaterialUI.js";

import { ComponentsGroup } from "./components/ComponentsGroup.js";
import { CurrentDataInputGrid } from "./components/CurrentDataInputGrid.js";
import { BaseCurrencyGrid } from "./components/BaseCurrencyGrid.js";
import { QuoteCurrencyGrid } from "./components/QuoteCurrencyGrid.js";
import { MultipleSelectGrid } from "./components/MultipleSelectGrid.js";
import CurrentDataTable from "./components/CurrentDataTable";

export default function CurrentData() {
  const [userData, setUserData] = useState(null);
  const [options, setOptions] = useState([]);
  const [response, setResponse] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(true);

  const {
    handleSubmit,
    control,
  } = useForm();

  const shouldFetchAllSymbols = true;
  useEffect(() => {
    getSymbols(shouldFetchAllSymbols).then((data) => {
      if (data.length > 0) { setOptions(data); setIsError(false); setIsSendButtonDisabled(false) }
      else { setIsError(true); setIsSendButtonDisabled(true) }
    });
  }, []);

  const onSubmit = (userInput) => {
    setUserData(userInput);
    let symbolsToCheck;
    if (userInput.currenciesToCompare.length === 0) {
      symbolsToCheck = options.map((item) => item.value);
    }
    else {
      symbolsToCheck = userInput.currenciesToCompare.map((item) => item.value);
    }
    symbolsToCheck = symbolsToCheck.toString().replace(`/+/g, ''`);
    checkLatestRates(userInput, symbolsToCheck).then((data) => {
      if (data.length > 0) { setResponse(data); setIsError(false) }
      else { setIsError(true) }
    })
  }

  return (
    <Grid>

      <PageTitleGrid>
        <PageTitle>{CURRENT_DATA_TITLE}</PageTitle>
      </PageTitleGrid>

      <CurrentDataInputGrid>
        < form onSubmit={handleSubmit(onSubmit)}>

          <ComponentsGroup>
            <StyledLabel>{CURRENT_BASE_LABEL}
              <Tooltip title={CURRENT_BASE_TOOLTIP}>
                <HelpOutlineIcon />
              </Tooltip>
            </StyledLabel>
            <Controller
              name="baseCurrencyValue"
              id="baseCurrencyValue"
              control={control}
              render={({
                field: { onChange, onBlur }
              }) => (
                <OutlinedInput
                  id="baseCurrencyValueInput"
                  required={true}
                  onBlur={onBlur}
                  onChange={onChange}
                  defaultValue={1}
                  inputProps={{
                    style: { textAlign: 'right', width: "50px" },
                    pattern: NUMERIC_INPUT_PATTERN,
                  }}
                />
              )}
            />

            <BaseCurrencyGrid>
              <Controller
                name="baseCurrency"
                id="baseCurrency"
                control={control}
                defaultValue={{ description: "Euro", label: "EUR: Euro", value: "EUR" }}
                render={({ field: { ref, ...field } }) => <Select {...field} options={options} inputRef={ref} />}
              />
            </BaseCurrencyGrid>
          </ComponentsGroup>

          <QuoteCurrencyGrid>
            <StyledLabel>{CURRENT_QUOTE_LABEL}</StyledLabel>
            <MultipleSelectGrid>
              <Controller
                name="currenciesToCompare"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <Select {...field} options={options} isMulti />
                )}
              />
            </MultipleSelectGrid>
          </QuoteCurrencyGrid>
          <StyledTextField type="submit" value="Check rates" size="small" margin="dense" disabled={isSendButtonDisabled} />
        </form >
      </CurrentDataInputGrid >

      {isError && <StyledErrorMessage>{ERROR_MESSAGE} </StyledErrorMessage>}
      {response.length > 0 && <CurrentDataTable response={response} options={options} userData={userData} />}

    </Grid>
  );
}