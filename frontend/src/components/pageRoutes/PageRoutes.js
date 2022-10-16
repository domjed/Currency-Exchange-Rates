import React from "react";

import { Route, Routes } from "react-router-dom";

import Contact from "../contact/Contact";
import CurrentData from "../currentData/CurrentData";
import CustomerWallet from "../customerWallet/CustomerWallet";
import Error from "../error/Error";
import HistoricalData from "../historicalData/HistoricalData";
import MainMenu from "../mainMenu/MainMenu";

export default function PageRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<MainMenu />} />
      <Route exact path="/currentData" element={<CurrentData />} />
      <Route exact path="/customerWallet" element={<CustomerWallet />} />
      <Route exact path="/historicalData" element={<HistoricalData />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route element={<Error />} />
    </Routes>
  );
}
