# Currency Exchange Rates

## Prerequisites

This project requires NodeJS (version 8 or later) and Yarn.
[Node](http://nodejs.org/) and [Yarn](https://yarnpkg.com/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v
8.3.0
$ node -v
v16.13.1
```

## Table of contents
* [Prerequisites](#prerequisites)
* [General info](#general-info)
* [Technologies](#technologies)
* [Installation](#installation)
* [Contributing](#contributing)

## General info
The scope of the app is to help with management of currency wallet. The user has an ability to check current rates from over 100 countries. Additionally it is possibe to check price of Bitcoin cryptocurrency as well as the most popular investment materias such as Gold or Silver. Selected by the user rates are provided is the table which is intuitive in use. To get best investment decision it is possible to scope historical data. Due to API limitations historical data is limited to almost 30 the most popular currencies. Results for different time period are provided in a lucid plot. Another useful feature is possibility of saving currency transactions in database and management of currency wallet. Note: this feature is yet to be developed and will be added at later stage. Possible symbols to choose, current and historical data are provided by connection with external API which documentation may be found at: https://exchangerate.host. To make it work HTTP client called Axios was utilized.

## Technologies
Project is created with:
* JS/React v17.0.1
* HTML5/CSS3
* [react-vis](https://uber.github.io/react-vis/)
* [mui](https://mui.com/)

## Installation

**BEFORE YOU INSTALL:** please read the [Prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/domjed/Currency-Exchange-Rates.git
$ cd frontend
```
To install and set up the library, run:

```sh
$ npm install
```

Or if you prefer using Yarn:

```sh
$ yarn add
```

Start the project with npm:

```sh
$ npm start
```
Or using yarn

```sh
$ yarn start
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).