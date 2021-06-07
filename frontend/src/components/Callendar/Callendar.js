import React, {useEffect, useState} from 'react'
import CardCallendar from './CardCallendar';
import HeaderDays from './HeaderDays'
import Hours from './Hours'
import './callendar.css';
import {Api} from "../../apiHandler/apiHandler";

// TODO add useState and prepare useEffect

const Callendar = () => {

    const [currentUser,setCurrentUser] = useState({});
    const [timetable1,setTimetable] = useState({
        timetable:[]
    });

    useEffect(()=>{
        Api.me().then(response => {
            if(response.status === 200){
                if(response.data.role.id===1){
                    // Api.getStudent(response.data.id).then(res =>{
                    //     if(res.status === 200){
                    //         try{
                    //             console.log(res.data.studentClass.timetable)
                    //             setCurrentUser(res.data);
                    //             setTimetable({...timetable1,timetable:res.data.studentClass.timetable})
                    //         }
                    //         catch(error ){
                    //             alert(error)
                    //         }
                    //     }
                    // })
                }
                else if(response.data.role.id===2){
                    Api.getTeacher(response.data.id).then(res =>{
                        if(res.status === 200){
                            setCurrentUser(res.data);
                            // setTimetable({...timetable1,timetable:res.data.studentClass.timetable})
                        }
                    })
                }
            }
        })
        .catch(error =>
            alert(error)
        );

    },[]);

    let colorPool=[];

let colorForSubject = (cardCall)=>{
    let subject;
    let subjects = [];
    let num = 20;
    cardCall.forEach(x => 
        {
            subject= x.subject.name;
            !subjects.includes(subject) && subjects.push(subject) && colorPool.push({subject: subject, color: 'hsl('+num+', 100%, 80%)'}) && num >= 360 ? num = 0 : num+=40

    } )
}

let getColorForSubject=(subject)=>{
    return colorPool.filter(x => { return x.subject === subject})[0].color;

}


    return (
    <div className='callendar'>
        {/* {console.log(currentUser)} */}
        {/* {console.log(timetable1?.timetable)} */}
            <HeaderDays/>
            <div className='callendar-inner'>
                <Hours/>
                {/* {colorForSubject(timetable?.timetable)}
                {timetable1?.timetable.map(card => 
                    <CardCallendar 
                        dayOfWeek={card.dayOfWeek}
                        subject={card.subject.name}
                        time={card.time}
                        teacher={card.teacher.name+" "+card.teacher.surname}
                        class={currentUser.studentClass.name}
                        color= {getColorForSubject(card.subject.name)}
                        role={currentUser.role.id}
                        />
                )} */}
            </div> 
    </div>
        
    )
}

export default Callendar
