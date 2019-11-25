# zf
A nodeJS client for the Zenefits REST APIs. 



https://developers.zenefits.com/docs/getting-started

## Pre-requisites:
1. Register with Zenefits platform with below details to get OAuth tokens.
   * URL of the application.
   * Callback URL to be called after successful OAuth negotiation. 
2. If developing custom integration, get the token by following instructions [here](https://help.zenefits.com/Integrated_Apps/Creating_Custom_Integrations_with_Zenefits/How_do_I_set_up_a_custom_integration%3F/) and get the token from [here] (https://secure.zenefits.com/dashboard/#/company-profile/custom-integrations). 

## Supported APIs
  * Companies: List of all companies registered with ZF. 
  * Employees: Employees within a company. 
  * Employments: All the employments/positions held by an employee in a company. 
