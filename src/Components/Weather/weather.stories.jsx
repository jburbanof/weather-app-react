import React from 'react'
import Weather from './Weather'
import  'typeface-roboto'

export default {
    title: "Weather",
    component: Weather
}

export const WeatherExample = () => (<Weather temperature="10" state="clouds"/>)
