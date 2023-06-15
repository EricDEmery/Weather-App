# Weather App #

## INFO ##

    In this project we are tasked with creating a weather app that will display weather data pulled from an API based off of a user inputted zip code.

    Some Functions should be ASYNC

    App should be able to:
     pull data from the API provided
     Catch any errors with user inout
     return data pulled from API

## Process ##

    Design initial page layout
    Style with Bootstrap
    Write inital Functional JS Code
    Write code for API Data


## INIT ##

const  data =
(Initial data returned from API, technically different depending on location but it will always be pulled the same way)

const  input =
(User input (Zip Code))

## BEGIN ##

Fetch(){
IF Event (User inputs zip code)
 FETCH (Pulls information from API)
}

CATCH (Catches any errors) {
    (ex: Zipcode is more than 5 digits)
    RETURN Error Message
}

## END ##

Render() {
    IF fetch()
    RETURN Data
}