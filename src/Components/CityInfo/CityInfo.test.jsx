import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo'

test("CityInfo render", async() => {
    const city = "Bogotá"
    const countryCode = "Colombia"

    const{ findAllByRole } = render(<CityInfo city={city} country = {countryCode} />)

    const cityCountryComponents = await findAllByRole("heading")


    expect(cityCountryComponents[0]).toHaveTextContent(city, countryCode)
    

})
