import React, { useEffect, useState } from 'react'
import Card from '../Card'
import axios from 'axios'
import moment from 'moment'
import { BarLoader } from 'react-spinners'
import './CardList.css'

const sortByPrice = (item1, item2) => {
  return item1 - item2
}

const CardList = () => {
  const [flightData, setFlightData] = useState([])

  const makeGetRequest = () => {
    axios
      .get('/flightEDtoLN')
      .then(response => {
        const sortedDirectFlight = response.data.directFlight
          .sort(sortByPrice)
          .slice(0, 10)
        const sortedReturnFlight = response.data.returnFlight
          .sort(sortByPrice)
          .slice(0, 10)
        setFlightData(
          sortedDirectFlight.map((obj, idx) => ({
            returnFlight: sortedReturnFlight[idx],
            flight: obj,
          })),
        )
      })
      .catch(console.error)
  }

  useEffect(() => makeGetRequest(), [])

  window.flight = flightData

  return flightData.length === 0 ? (
    <div className="load-spinner-wrapper">
      <div className="load-spinner">
        <BarLoader />
      </div>
    </div>
  ) : (
    <div className="bkp-itineraries">
      {flightData.map((item, idx) => (
        <Card
          key={idx}
          travelDuration={item.flight.travelTime}
          cityFrom={item.flight.cityFrom}
          aTime={moment(item.flight.arriveTime * 1000)
            .local()
            .format('H:mm')}
          dTime={moment(item.flight.departureTime * 1000)
            .local()
            .format('H:mm')}
          cityTo={item.flight.cityTo}
          price={item.flight.price}
          returnDTime={moment(item.returnFlight.departureTime * 1000)
            .local()
            .format('H:mm')}
          returnATime={moment(item.returnFlight.arriveTime * 1000)
            .local()
            .format('H:mm')}
          returnTravelDuration={item.returnFlight.travelTime}
          returnCityFrom={item.returnFlight.cityFrom}
          returnCityTo={item.returnFlight.cityTo}
          returnPrice={item.returnFlight.price}
        />
      ))}
    </div>
  )
}

export default CardList
