// import React, { useState } from "react";
// import DatePicker from "react-datepicker"; 
// import "react-datepicker/dist/react-datepicker.css"

// export default function DataeTime() {
  
  
//   const [selectedDate, setselectedDate] = useState(null);


//   const dateFormatAux = (date) => {
//     var d = new Date(date),
//       month = '' + (d.getMonth() + 1),
//       day = '' + d.getDate(),
//       year = d.getFullYear();

//     if (month.length < 2)
//       month = '0' + month;
//     if (day.length < 2) 
//       day = '0' + day;
    
//     return [year, month, day].join('-');
//   }

//   const dateFormat = (date) => {

//     console.log(new Date(date));

//     let formatYearMonthDay = dateFormatAux(date);
//     //console.log(formatYearMonthDay);

//     let formatISO8601 = new Date(date).toISOString();
//     //console.log(formatISO8601);

//     return [formatYearMonthDay, formatISO8601];
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let birthDateYMD, birthDateISO8601;

//     if (selectedDate != null)
//       [birthDateYMD, birthDateISO8601] = dateFormat(selectedDate);


//     let formData = {
    
//       birthDate: selectedDate,
//       birthDateFmtYMD: birthDateYMD,
//       birthDateFmtISO8601: birthDateISO8601,
//     };

//     console.log(formData);
//   }

//   return (
   
//         <DatePicker 
//           selected={selectedDate} 
//           onChange={date => setselectedDate(date)}
//           showTimeSelect
//           dateFormat="dd/MM/yyyy"
//           className="form-field"
//           id="birthDate"
//           placeholderText="Birthdate"
//           //minDate={new Date()}
//         />
     
 
//   );
// }