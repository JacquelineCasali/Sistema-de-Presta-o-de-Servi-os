import React from 'react'
// data
import Datepicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
const SelectionRange={
    StartDate: new Date(2023,7,17),
    endDate: new Date(2023,7,17),
    key:'selection'
}
function Agenda() {
    return (
    <div>
 
      <Datepicker ranges={[SelectionRange]} />
    </div>
  )
}
export default Agenda;