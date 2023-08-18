


import * as ReactDom from "react-dom"
import React from 'react'
import {TimePickerComponent} from "@syncfusion/ej2-react-calendars"
import '../styles/teste.css';


// data
// import Datepicker from "react-datepicker"
// import "react-datepicker/dist/react-datepicker.css";
// const SelectionRange={
//     StartDate: new Date(2023,7,17),
//     endDate: new Date(2023,7,17),
//     key:'selection'
// }
function Agenda() {
    return (
    <div className='control-pane default'>
 <div className='control-section'>
  <div className='timepicker-control-section'>
<TimePickerComponent/>
 </div>
 </div>
    </div>
  )
}
export default Agenda;