# Digital Solutions Project Documentation

## Data Used
| Data Type | Description |
| --------- | ----------- |
| eCO2 (ppm) | equivalent CO2, an indication of the concentration of CO2 that would cause the same level of radiative forcing as a given type and concentration of greenhouse gas. |
| eVTOC (ppb) |  equivalent total volatile organic compounds and is a measurement of the total amount of any emitted gasses coming from toxins and chemicals. |
| Air Pressure | 300m a.s.l. [hPa] |
| Temperature | °C |
| Humidity | [%H] |


## How the data is accessed
The thingspeak API is queried for one month of data at a time. All of the start and end dates are received from a serverless function and stored in a Power BI table. Power BI uses this table to make multiple queries to retrieve all of the data. This is the URL to the serverless function that fetches the query parameters.

> https://isnt-collin-varisco-cgi-awesome.netlify.app/.netlify/functions/serverless
