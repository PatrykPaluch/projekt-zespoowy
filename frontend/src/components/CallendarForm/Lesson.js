import React,{useState} from 'react'

import '../CallendarForm.css';

const Lesson = (props) => {
    const uniqueSubjects = [];
    props.subjectsTeachers.forEach(
        (el) =>{
            !uniqueSubjects.includes(el.subject) && uniqueSubjects.push(el.subject);
        }
    );
    const [subjectState, setSubject] = useState("");
    const [hourState, setHour] = useState(7);
    return (
        <div className="lesson-form">
            <p> Od: </p>
                <select id="hours" onClick={(e)=>setHour(e.target.value)}>
                    {props.hours.map((hour)=>
                        <option value={hour} >
                            {(""+hour).padStart(2,'0')+":00"}
                        </option>
                    )}
                </select>
                <p> Do: </p>
                <input placeholder={(""+hourState).padStart(2,'0')+":45"} disabled/>
                <p> Przedmiot: </p>
                <select onChange={(e) =>setSubject(e.target.value)}>
                    {uniqueSubjects.map((sub)=>
                        <option value={sub}>
                            {sub}
                        </option>
                    )}
                </select>
                <p> Nauczyciel: </p>
                <select>
                    {props.subjectsTeachers.filter(
                        (st) =>{
                            
                            return st.subject === subjectState;
                        }
                    ).map((t)=>
                        <option id={t.teacher}>
                            {t.teacher}
                        </option>
                    )}
                </select>
        </div>
    )
}

export default Lesson
