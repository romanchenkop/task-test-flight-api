import React from 'react'
import './Card.css'

const Card = ({
    dTime,
    aTime,
    cityFrom, 
    cityTo, 
    price, 
    travelDuration, 
    returnTravelDuration, 
    returnCityFrom, 
    returnCityTo,
    returnPrice,
    returnDTime,
    returnATime,
  }) => {
    return (
      <div className="card bkp-itinerary">
      <div className="card-body it-card-body">
      <table className="leg-table">
      <colgroup>
        <col width="30" />
        <col width="50" />
        <col width="35" />
        <col width="50" />
      </colgroup>
      <tbody>
        <tr>
          <td className="leg-logo-td" rowSpan={2}>
            <img className="leg-airline-logo" src="https://logos.skyscnr.com/images/airlines/favicon/EZ.png" alt="E" />
          </td>
          <td>{dTime}</td>
          <td className="leg-arrow" rowSpan={2}>&nbsp;&#10140;&nbsp;</td>
          <td>{aTime}</td>
          <td className="leg-last-col leg-duration">
            {travelDuration}
          </td>
        </tr>
        <tr>
          <td className="leg-place-code">{cityFrom}</td>
          <td className="leg-place-code">{cityTo}</td>  
          <td className="leg-last-col leg-direct">Direct</td> 
        </tr>
      </tbody>
    </table>
    <div className="container">
        <div className="row">
          <div className="col it-price-col">{` €${price}`}</div>
          <div className="col it-select-col">
            <button type="button" className="btn btn-sm it-select-btn">Select</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Card


 


// const Leg: React.FC<LegProps> = (props: LegProps) => (
//   <table className="leg-table">
//     <colgroup
//       <col width="30" />
//       <col width="50" />
//       <col width="35" />
//       <col width="50" />
//     </colgroup>
//     <tbody>
//       <tr>
//         <td className="leg-logo-td" rowSpan={2}>
//           <img className="leg-airline-logo" src="https://logos.skyscnr.com/images/airlines/favicon/EZ.png" alt="E" />
//         </td>
//         <td>{moment(props.departureDate).format('HH:mm')}</td>
//         <td className="leg-arrow" rowSpan={2}>&nbsp;&#10140;&nbsp;</td>
//         <td>{moment(props.arrivalDate).format('HH:mm')}</td>
//         <td className="leg-last-col leg-duration">
//           {`${Math.floor(props.duration / 60)}h ${props.duration % 60}`}
//         </td>
//       </tr>
//       <tr>
//         <td className="leg-place-code">{props.originStationCode}</td>
//         <td className="leg-place-code">{props.destinationStationCode}</td>
//         {props.stopsCount === 0 && <td className="leg-last-col leg-direct">Direct</td>}
//         {props.stopsCount > 0 && <td className="leg-last-col leg-indirect">{props.stopsCount} stops</td>}
//       </tr>
//     </tbody>
//   </table>
// )


