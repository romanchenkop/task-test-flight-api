const express = require('express')
const app = express()
const port = 3060
const axios = require('axios')
const moment = require('moment')

const getFlight = () => {
  try {
    const today = moment().isoWeekday()
    const departureDate =
      today < 1 ? moment().isoWeekday(1) : moment().add(1, 'weeks')
    return axios.get(
      `https://api.skypicker.com/flights?flyFrom=EDI&to=LGW&dateFrom=${moment(
        departureDate,
      ).format('DD/MM/YYYY')}&dateTo=${moment(departureDate).format(
        'DD/MM/YYYY',
      )}&partner=picky`,
    )
  } catch (e) {
    console.log(e)
  }
}

const getReturnFlight = () => {
  try {
    const today = moment().isoWeekday()
    const departureDate =
      today < 2 ? moment().isoWeekday(2) : moment().add(1, 'weeks')
    return axios.get(
      `https://api.skypicker.com/flights?flyFrom=LGW&to=EDI&dateFrom=${moment(
        departureDate,
      ).format('DD/MM/YYYY')}&dateTo=${moment(departureDate).format(
        'DD/MM/YYYY',
      )}&partner=picky`,
    )
  } catch (e) {
    console.log(e)
  }
}

const mapFlight = request =>
  request()
    .then(response => {
      const returnFlightToFront = response.data.data
        .filter(obj => !obj.has_airport_change)
        .map(obj => ({
          countryFrom: obj.countryFrom.name,
          countryTo: obj.countryTo.name,
          price: obj.price,
          departureTime: obj.dTime,
          arriveTime: obj.aTime,
          travelTime: obj.fly_duration,
          cityFrom: obj.cityFrom,
          cityTo: obj.cityTo,
        }))
      return returnFlightToFront
    })
    .catch(e => console.log(e))

app.get('/flightEDtoLN', async (req, res) => {
  try {
    const returnFlight = await mapFlight(getFlight)
    const directFlight = await mapFlight(getReturnFlight)
    const data = {
      directFlight,
      returnFlight,
    }
    res.send(data)
  } catch (e) {
    console.log(e)
  }
})

app.listen(port, () => console.log(`listening on ${port} port`))
