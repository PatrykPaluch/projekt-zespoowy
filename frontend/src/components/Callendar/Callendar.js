import React, {useEffect, useState} from 'react'
import CardCallendar from './CardCallendar';
import HeaderDays from './HeaderDays'
import Hours from './Hours'
import './callendar.css';
import {Api} from "../../apiHandler/apiHandler";

// TODO add useState and prepare useEffect

const Callendar = (props) => {

    const [timetable1,setTimetable] = useState({
        timetable:[]
    });

    const [user,setUser] = useState({
        id: '',
        role: '',
        name: '',
        surname: '',
        pesel:  '',
        address: '',
        dateOfBirth: '',
        phoneNumber: '',
        photo: '',
        class: ''
    });

    const [classs, setClass] = useState({
        className: '',
        classId: ''
    });

    function getUser () {
        Api.me().then(response => {
            if(response.status === 200){
                setUser({
                    id: response.data.id,
                    role: response.data.role.id,
                    name:response.data.name,
                    surname:response.data.surname,
                    pesel:  response.data.pesel,
                    address: response.data.address,
                    dateOfBirth: response.data.birthDate,
                    phoneNumber: response.data.phone
                })
            }
        })
        
    }

    function getStudent (id) {
        Api.getStudent(id).then(response => {
            if(response.status === 200){
                setClass({
                    className: response.data.class.name,
                    classId: response.data.class.id
                })
            }
        })
    }



    function getTimetable (id) {
        Api.getTimetableForClass(id).then(res => {
            if(res.status === 200){
                console.log(res.data.list);
                setTimetable({...timetable1,timetable:res.data.list})
            }

        })
    }

    useEffect(() =>{
        // getUser();
        // if(user.role===1){
            // getStudent (user.id);
            getTimetable(3);

        // }
    }, []);

    // useEffect(()=>{
    //     // if(props.role === 1){
    //         Api.getTimetableForClass(props.class).then(res => {
    //             if(res.status === 200){
    //                 console.log(res.data.list);
    //                 setTimetable({...timetable1,timetable:res.data.list})
    //             }

    //         })
    //     // }
    // },[])

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
            {/* <h1>{classs?.className}</h1> */}
            <h1>{timetable1?.timetable[0]}</h1>
            <div className='callendar-inner'>
                <Hours/>
                {colorForSubject(timetable1?.timetable)}
                {timetable1?.timetable.map(card => 
                    <CardCallendar 
                        key={card.id}
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
