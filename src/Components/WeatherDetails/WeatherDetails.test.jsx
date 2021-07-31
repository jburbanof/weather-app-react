import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails'

test("WeatherDetails render", async () => {

    const { findByText } = render(<WeatherDetails humidity={10} wind={15}/>)

    const humidity = await findByText(/10/)
    const wind = await findByText(/15/)


    expect(humidity).toHaveTextContent('Humidity:10%')
    expect(wind).toHaveTextContent('Wind:15 km/h')
  

})