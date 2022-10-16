import React from "react";

import { ThemeProvider } from '@mui/material/styles';

import MainContainer from "@components/MainContainer/MainContainer";
import { THEME } from "@shared/styles/StyledMaterialUI";

export default function App() {
  return <ThemeProvider theme={THEME}><MainContainer /></ThemeProvider>;
}