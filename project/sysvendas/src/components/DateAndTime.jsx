import moment from 'moment';
import "../styles/components/time.sass"
const DateAndTime = () => {

    let currentDate = moment().format('Do MMMM YYYY');
    let time = moment().format("HH:mm");

  return(
      <div className="time d-block justify-content-end">
          <p>{currentDate}</p>
          <h1 className="text-end">{time}</h1>
      </div>
  )
}
export default DateAndTime;