import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'

test("Forecast render", async () => {

    const { findByText } = render(<ForecastItem hour={10} state="clear" temperature={23} weekDay="Monday" />)

    const day = await findByText("Monday")
    const temp = await findByText(/23/)
    const hour = await findByText("10:00h")

    expect(day).toHaveTextContent('Monday')
    expect(temp).toHaveTextContent('23°C')
    expect(hour).toHaveTextContent('10:00h')

})