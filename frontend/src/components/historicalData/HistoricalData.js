import React, { useEffect, useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { Grid } from "@mui/material";
import Select from "react-select";

import { getSymbols, checkHistoricalRates } from "@api/CurrencyRates";
import {
  ERROR_MESSAGE,
  HISTORY_TIMESPAN_RANGES,
  HISTORICAL_DATA_TITLE,
  HIST_BASE_LABEL,
  HIST_QUOTE_LABEL,
  HIST_DATA_LABEL,
}
  from "@shared/Constants";
import { StyledTextField, PageTitle, PageTitleGrid } from "@shared/styles/StyledMaterialUI";
import { HistDataInputGrid } from "./components/HistDataInputGrid";
import { SingleInputGrid } from "./components/SingleInputGrid";
import { StyledLabel, StyledErrorMessage } from "@shared/styles/StyledComponents";
import HistoricalDataPlot from "./components/HistoricalDataPlot";

export default function HistoricalData() {

  const [options, setOptions] = useState([]);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState([]);
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(true);

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors }
  } = useForm();

  const watchBaseCurrency = watch("baseCurrency");
  const watchCurrencyToCompare = watch("currencyToCompare");

  const shouldFetchAllSymbols = false;
  useEffect(() => {
    getSymbols(shouldFetchAllSymbols).then((data) => {
      if (data.length > 0) { setOptions(data); setIsError(false); setIsSendButtonDisabled(false) }
      else { setIsError(true); setIsSendButtonDisabled(true) }
    });
  }, []);

  const onSubmit = (userInput) => {
    checkHistoricalRates(userInput).then((data) => {
      if (data.length > 0) { setResponse(data); setIsError(false) }
      else { setIsError(true) }
    })
  };

  return (
    <Grid>

      <PageTitleGrid>
        <PageTitle>{HISTORICAL_DATA_TITLE}</PageTitle>
      </PageTitleGrid>

      <HistDataInputGrid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SingleInputGrid >
            <StyledLabel>{HIST_BASE_LABEL}</StyledLabel>
            <Controller
              name="baseCurrency"
              id="baseCurrency"
              control={control}
              rules={{ required: "Base currency field is required." }}
              render={({ field: { ref, ...field } }) => (
                <Select {...field} options={options} id="selectBaseCurrency" inputRef={ref} />
              )}
            />
            <ErrorMessage errors={errors} name="baseCurrency" render={({ message }) =>
              <StyledErrorMessage >{message}</StyledErrorMessage>}
            />
          </SingleInputGrid>

          <SingleInputGrid >
            <StyledLabel> {HIST_QUOTE_LABEL}</StyledLabel>
            <Controller
              name="currencyToCompare"
              id="currencyToCompare"
              rules={{ required: "Currency to compare field is required" }}
              control={control}
              render={({ field: { ref, ...field } }) => (
                <Select {...field}
                  options={options}
                  id="selectCurrencyToCompare"
                  inputRef={ref}
                />
              )}
            />
            <ErrorMessage errors={errors} name="currencyToCompare" render={({ message }) =>
              <StyledErrorMessage >{message}</StyledErrorMessage>} />
          </SingleInputGrid>

          <SingleInputGrid >
            <StyledLabel>{HIST_DATA_LABEL}</StyledLabel>
            <Controller
              name="timespan"
              id="timespan"
              rules={{ required: "Time period is required" }}
              control={control}
              render={({ field: { ref, ...field } }) => (
                <Select {...field}
                  options={HISTORY_TIMESPAN_RANGES}
                  id="timespanToCheck"
                  inputRef={ref}

                />
              )}
            />
            <ErrorMessage errors={errors} name="timespan" render={({ message }) =>
              <StyledErrorMessage >{message}</StyledErrorMessage>}
            />
          </SingleInputGrid>

          <StyledTextField type="submit" value="Check rates" size="small" margin="dense" disabled={isSendButtonDisabled} />
        </form >
      </HistDataInputGrid >

      {isError && <StyledErrorMessage>{ERROR_MESSAGE} </StyledErrorMessage>}
      {response.length > 0 &&
        < HistoricalDataPlot response={response} baseCurrency={watchBaseCurrency} currencyToCompare={watchCurrencyToCompare} />}
    </Grid>
  );
}