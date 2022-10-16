import React from "react";

import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import HomeIcon from "@mui/icons-material/Home";
import DataThresholdingRoundedIcon from "@mui/icons-material/DataThresholdingRounded";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";

export const APP_TITTLE = "Currency Exchange Rates";

export const CONTACT_OPTIONS = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/dominik-jedlinski",
    imageTitle: "LINKEDIN_JPG.jpg",
  },
  {
    title: "Mail",
    href: "mailto:djedlinski@gmail.com",
    imageTitle: "MAIL_JPG.jpg",
  },
];

export const DRAWER_WIDTH = 300;
export const DECIMAL_PLACES = 3;

export const CONTACT_TITLE = "Contact with developer using:";
export const ERROR_MESSAGE = "There was a data exchange error. Pease try again later";
export const HISTORICAL_DATA_TITLE = "Review historical rates of the most popular currencies:";
export const CURRENT_DATA_TITLE = "Review up to date currency rates:";
export const CURRENT_BASE_LABEL = "Select amount to exchange and base currency ";
export const CURRENT_BASE_TOOLTIP = "Provided value should be a number separated by point decimal separator. Up to two decimal places are allowed.";
export const CURRENT_QUOTE_LABEL = "Select few currencies or leave field empty to check all rates:";
export const HIST_BASE_LABEL = "Select base currency";
export const HIST_QUOTE_LABEL = "Select currency to compare";
export const HIST_DATA_LABEL = "Display data from";

export const MENU_ITEMS = [
  { mainTitle: "Current Data", description: "Click here to check the most recent exchange rates", href: "/currentData", imageTitle: "CURRENT_JPG.jpg" },
  { mainTitle: "Historical Data", description: "Click here to check former currency exchange rates", href: "/historicalData", imageTitle: "HISTORY_JPG.jpg" },
  { mainTitle: "Wallet", description: "Use wallet to store history of your transactions", href: "/customerWallet", imageTitle: "WALLET_JPG.jpg" },
]

export const NUMERIC_INPUT_PATTERN = `^[1-9]{1}\\d*(\\.\\d{1,2})?$|^0(\\.\\d{1,2})?$`

export const SIDE_BAR_MAIN_LIST = [
  { title: "Main Menu", link: "/", element: <HomeIcon /> },
  {
    title: "Current Data",
    link: "/currentData",
    element: <DataThresholdingRoundedIcon />,
  },
  {
    title: "Historical Data",
    link: "/historicalData",
    element: <HistoryRoundedIcon />,
  },
  {
    title: "Wallet",
    link: "/customerWallet",
    element: <AccountBalanceWalletRoundedIcon />,
  },
];

export const SIDE_BAR_AUXILIARY_LIST = [
  { title: "Contact", link: "/contact", element: <ContactMailRoundedIcon /> },
];

export const OUTPUT_SIZE = "compact";

export const TIME_INTERVALS = [
  { value: "1min", label: "1 min" },
  { value: "5min", label: "5 min" },
  { value: "15min", label: "15 min" },
  { value: "30min", label: "30 min" },
  { value: "60min", label: "60 min" },
];

export const HISTORY_TIMESPAN_RANGES = [
  { label: 'Yesterday', value: '1' },
  { label: 'Last 7 days', value: '7' },
  { label: 'Last 30 days', value: '30' },
  { label: 'Last 100 days', value: '100' },
  { label: 'Last year', value: '366' },
]


export const POPULAR_SYMBOLS = [
  "USD",
  "JPY",
  "CYP",
  "CZK",
  "DKK",
  "EEK",
  "GBP",
  "HUF",
  "LTL",
  "LVL",
  "MTL",
  "PLN",
  "ROL",
  "SEK",
  "SIT",
  "SKK",
  "CHF",
  "ISK",
  "NOK",
  "TRL",
  "AUD",
  "CAD",
  "HKD",
  "KRW",
  "NZD",
  "SGD",
  "ZAR",
  "EUR",
];