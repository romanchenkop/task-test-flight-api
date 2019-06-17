import React, { useEffect, useState } from 'react'
import Card from '../Card'
import axios from 'axios'

const sortByPrice = (item1, item2) => {
    return item1 - item2;
}       

const CardList = () => {
    const [flightData, setFlightData] = useState([])

     const makeGetRequest = () => {
        axios.get('/flightEDtoLN')
            .then((response) => {
                const sortedDirectFlight = response.data.directFlight.sort(sortByPrice).slice(0, 10)
                const sortedReturnFlight = response.data.returnFlight.sort(sortByPrice).slice(0, 10)
                setFlightData(sortedDirectFlight
                    .map((obj, idx) => ({returnFlight: sortedReturnFlight[idx], flight: obj })))
            })
            .catch(console.error);
  }

  window.flight = flightData;
  useEffect(() => makeGetRequest(), [])
  
    return(
        <div className="bkp-itineraries">
            {flightData
                .map((item, idx) => 
                    <Card
                        key={idx}
                        returnDTime={item.returnFlight.departureTime}
                        returnATime={item.returnFlight.arriveTime}
                        returnTravelDuration={item.returnFlight.travelTime}
                        returnCityFrom={item.returnFlight.cityFrom} 
                        returnCityTo={item.returnFlight.cityTo} 
                        returnPrice={item.returnFlight.price}
                        travelDuration={item.flight.travelTime}
                        cityFrom={item.flight.cityFrom}
                        aTime={item.flight.arriveTime}
                        dTime={item.flight.departureTime}
                        cityTo={item.flight.cityTo}
                        price={item.flight.price}
                         />)}  
        </div>
    )
}

export default CardList;
