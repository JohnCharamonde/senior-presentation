import React from 'react';
import CalendarRowItem from './calendarRowItem.jsx';

function CalendarRow(props) {
  console.log('this is props.handleCalendarRowItemClick', props.handleCalendarRowItemClick)
  return (
    <tr>
      {props.row.map(item =>
        < CalendarRowItem item={item} days={props.days} handleCalendarRowItemClick={props.handleCalendarRowItemClick}/>
      )}
    </tr>
  )
}

export default CalendarRow;