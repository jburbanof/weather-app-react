import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'


const CityInfo =({city, countryCode}) => {
    return (
        <>
            <Typography display="inline" variant="h4">{city}  {countryCode}</Typography>
               
            
        </>
    )
}

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    countryCode: PropTypes.string
}

export default CityInfo
