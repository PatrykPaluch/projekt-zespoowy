import React from 'react'
import swal from 'sweetalert';

const CardCallendar = (props) => {
    
    let calcHour = (hour) =>{
        let hourNumber =hour.split(':')[0];
        hourNumber[0]==='0' && hourNumber.replace('0','');
        let rowNumber = (hourNumber-7)*4 +1;
        return rowNumber
    };

    let columnCheck= (day) =>{
        switch (day){
            case "Monday" :
                return 2;
            case "Tuesday" :
                return 3;
            case "Wednesday" :
                return 4;
            case "Thursday" :
                return 5;
            case "Friday" :
                return 6;
            default:
                console.log("Wrong day name!");
                break;
        }
    };

    let handleTimetablePreview = () =>{
        swal( {
            icon:'info',
            text:"Przedmiot: "+props.subject+
                "\n\nGodzina: "+props.time+" - "+props.time.split(':')[0]+":45"+
                "\n\nNauczyciel: "+props.teacher+
                "\n\nKlasa: "+props.class,
        })
    }
    

    return (
        <div className='card-callendar' onClick={handleTimetablePreview} style={{
            gridColumnStart:columnCheck(props.dayOfWeek), backgroundColor: props.color, gridRowStart: calcHour(props.time), gridRowEnd: calcHour(props.time)+3}}>
            <h5>{props.subject}</h5>
            <h6>{props.time} - {props.time.split(':')[0]}:45</h6>
            {props.role === 1 || props.role ===3 ? <h6>{props.teacher}</h6> : <h6>{props.class}</h6>}
            
        </div>
    )
}

export default CardCallendar
