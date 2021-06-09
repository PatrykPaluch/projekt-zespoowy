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
    const [child,setChild] = useState({});

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


    
        function getChild() {
            Api.children().then(response => {
                if(response.status === 200){
                    setChild(response.data.list[0]);
                    console.log(response.data.list[0].id)
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

    function getTimetableTeacher (id) {
        Api.getTimetableForTeacher(id).then(res => {
            if(res.status === 200){
                console.log(res.data.list);
                setTimetable({...timetable1,timetable:res.data.list})
            }

        })
    }


    useEffect(() =>{
        console.log(user.role);
        getUser();
        switch(user.role){
            
            case 1:
                getStudent (user.id);
                getTimetable(classs.classId);
                break;
            case 2:
                getTimetableTeacher(user.id);
                break;
            case 3:
                console.log(child.id)
                getChild (user.id);
                getStudent (child.id);
                getTimetable(classs.classId);
                break;
            default:
                console.log(`Wrong role id ${user.role}`)
        }

    }, [user?.role,user?.id,child?.id,classs?.classId]);

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
    <h4> {child.name !== undefined && "Plan zajęć dla:" +child.name+" "+child.surname }</h4>
       
            <HeaderDays/>

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
                        class={card.classes.name}
                        color= {getColorForSubject(card.teacherSubject.subject.name)}
                        role={user?.role}
                        />
                )}
            </div> 
    </div>
        
    )
}

export default Callendar
