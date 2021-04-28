import React,{useState} from 'react'
import '../CallendarForm.css';
import Lesson from "./Lesson"
const Day = (props) => {
    let hours=[7,8,9,10,11,12,13,14,15,16,17,18];
    const [count,setCount] = useState([]);
    return (
        <div className="callendar-form-day">
            <div className="label">{props.name} - liczba zajęć: {count.length}</div>
            {count.map((e,i)=>
                i<12?<Lesson subjectsTeachers={props.subjectsTeachers} hours={hours}/>:<p>Osiągnięto maksymalną ilosć zajęć</p>
            )}
            {/* //TODO  zablokuj dodawanie po 12*/}
            <div className="day-button" onClick={() => setCount(prevCountArray =>([...prevCountArray,1]))} >Dodaj kolejne zajęcia</div>
            {/* <div className="day-button">Zaakceptuj zajęcia </div> */}
        </div>
        
    )
}

export default Day
