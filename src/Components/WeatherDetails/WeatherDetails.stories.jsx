import React from 'react'
import WeatherDetails from './WeatherDetails'
import  'typeface-roboto'

export default {
    title: "WeatherDetails",
    component: WeatherDetails
}

export const WeatherDetailsExample = () => (<WeatherDetails humidity={10} wind={15} />)
