import React, {useEffect, useState} from 'react'
import CardCallendar from './CardCallendar';
import HeaderDays from './HeaderDays'
import Hours from './Hours'
import './callendar.css';
import {Api} from "../../apiHandler/apiHandler";

// TODO add useState and prepare useEffect

const Callendar = (props) => {

    const [currentUser,setCurrentUser] = useState({});  
    const [classs,setClass] = useState({});
    const [timetable1,setTimetable] = useState({
        timetable:[]
    });

    // useEffect(()=>{
    //     Api.me().then(response => {
    //         if(response.status === 200){
    //             // setCurrentUser(response.data);  
    //             if(props.role===1){
    //                 Api.getStudent(props.id).then(response =>{
    //                     if(response.status === 200){
    //                         try{
    //                             console.log(res.data.studentClass.timetable)
    //                             setCurrentUser(res.data);
    //                             setClass(res.data.studentClass);
    //                         }
    //                         catch(error ){
    //                             alert(error)
    //                         }
    //                     }
    //                 })
    //             }
    //             else if(response.data.role.id===2){
    //                 Api.getTeacher(response.data.id).then(res =>{
    //                     if(res.status === 200){
    //                         setCurrentUser(res.data);
    //                         // setTimetable({...timetable1,timetable:res.data.studentClass.timetable})
    //                     }
    //                 })
    //             }
    //         }                       
    //     })
    //     .catch(error =>
    //         alert(error)
    //     );

    // },[]);

    useEffect(()=>{
        // if(props.role === 1){
            Api.getTimetableForClass(3).then(res => {
                if(res.status === 200){
                    console.log(res.data.list);
                    setTimetable({...timetable1,timetable:res.data.list})
                }

            })
        // }
    },[])

    let colorPool=[];

let colorForSubject = (cardCall)=>{
    let subject;
    let subjects = [];
    let num = 20;
    cardCall.forEach(x => 
        {
            subject= x.teacherSubject.subject.name;
            !subjects.includes(subject) && subjects.push(subject) && colorPool.push({subject: subject, color: 'hsl('+num+', 100%, 80%)'}) && num >= 360 ? num = 0 : num+=40

    } )
}

let getColorForSubject=(subject)=>{
    return colorPool.filter(x => { return x.subject === subject})[0].color;

}


    return (
    <div className='callendar'>
            <HeaderDays/>
            <div className='callendar-inner'>
                <Hours/>
                {colorForSubject(timetable1?.timetable)}
                {timetable1?.timetable.map(card => 
                    <CardCallendar 
                        dayOfWeek={card.dayOfWeek}
                        subject={card.teacherSubject.subject.name}
                        time={card.time}
                        teacher={card.teacherSubject.teacher.name+" "+card.teacherSubject.teacher.surname}
                        class={"pierwsza"}
                        color= {getColorForSubject(card.teacherSubject.subject.name)}
                        // role={props.role.id}
                        />
                )}
            </div> 
    </div>
        
    )
}

export default Callendar
