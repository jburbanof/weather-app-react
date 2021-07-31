import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const WeatherDetails = ({humidity, wind}) => {
    return (
        <Grid container item justifyContent="center" alignItems="center" direction="column">
            <Typography >Humidity:{humidity}%</Typography>
            <Typography>Wind:{wind} km/h</Typography>
        </Grid>
    )
}

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
}

export default WeatherDetails
