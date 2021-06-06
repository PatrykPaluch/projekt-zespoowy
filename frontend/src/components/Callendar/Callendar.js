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
                    Api.getStudent(response.data.id).then(res =>{
                        if(res.status === 200){
                            setCurrentUser(res.data);
                            // setTimetable({...timetable1,timetable:res.data.studentClass.timetable})
                        }
                    })
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
    let user = {
        Role:{
            id:1
        }
    }
    let timetable =[{
        dayOfWeek: "Monday",
        time:"08:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Monday",
        time:"09:00",
        TeacherSubject:{
            Subject:{
                name:"Matematyka"
            },
            User:{
                name:"Karol",
                surname:"Markowski"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Monday",
        time:"10:00",
        TeacherSubject:{
            Subject:{
                name:"Matematyka"
            },
            User:{
                name:"Karol",
                surname:"Markowski"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Monday",
        time:"11:00",
        TeacherSubject:{
            Subject:{
                name:"Historia"
            },
            User:{
                name:"Aleksandra",
                surname:"Mak"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Monday",
        time:"12:00",
        TeacherSubject:{
            Subject:{
                name:"Biologia"
            },
            User:{
                name:"Hanna",
                surname:"Kos"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Monday",
        time:"13:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Monday",
        time:"14:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },

    {
        dayOfWeek: "Tuesday",
        time:"09:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Tuesday",
        time:"10:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Tuesday",
        time:"11:00",
            TeacherSubject:{
                Subject:{
                    name:"Matematyka"
                },
                User:{
                    name:"Karol",
                    surname:"Markowski"
                },
            },
            Class:{
                name:"Klasa 1"
            }
    },
    {
        dayOfWeek: "Tuesday",
        time:"12:00",
        TeacherSubject:{
            Subject:{
                name:"Język Angielski"
            },
            User:{
                name:"Marek",
                surname:"Sikora"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Tuesday",
        time:"13:00",
        TeacherSubject:{
            Subject:{
                name:"Biologia"
            },
            User:{
                name:"Hanna",
                surname:"Kos"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Tuesday",
        time:"14:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Tuesday",
        time:"15:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Wednesday",
        time:"07:00",
        TeacherSubject:{
            Subject:{
                name:"Historia"
            },
            User:{
                name:"Aleksandra",
                surname:"Mak"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Wednesday",
        time:"08:00",
        TeacherSubject:{
            Subject:{
                name:"Matematyka"
            },
            User:{
                name:"Karol",
                surname:"Markowski"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    }
    ,

    {
        dayOfWeek: "Wednesday",
        time:"09:00",
        TeacherSubject:{
            Subject:{
                name:"Biologia"
            },
            User:{
                name:"Hanna",
                surname:"Kos"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Wednesday",
        time:"10:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Wednesday",
        time:"11:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Wednesday",
        time:"12:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Wednesday",
        time:"13:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Thursday",
        time:"10:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Thursday",
        time:"11:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    }
    ,
    {
        dayOfWeek: "Thursday",
        time:"12:00",
        TeacherSubject:{
            Subject:{
                name:"Matematyka"
            },
            User:{
                name:"Karol",
                surname:"Markowski"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Thursday",
        time:"13:00",
        TeacherSubject:{
            Subject:{
                name:"Matematyka"
            },
            User:{
                name:"Karol",
                surname:"Markowski"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Friday",
        time:"09:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Friday",
        time:"10:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Friday",
        time:"11:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Friday",
        time:"12:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
    {
        dayOfWeek: "Friday",
        time:"13:00",
        TeacherSubject:{
            Subject:{
                name:"Język Polski"
            },
            User:{
                name:"Anna",
                surname:"Kowal"
            },
        },
        Class:{
            name:"Klasa 1"
        }
    },
   
];

let colorForSubject = (cardCall)=>{
    let subject;
    let subjects = [];
    let num = 20;
    cardCall.forEach(x => 
        {
            subject= x.TeacherSubject.Subject.name;
            !subjects.includes(subject) && subjects.push(subject) && colorPool.push({subject: subject, color: 'hsl('+num+', 100%, 80%)'}) && num >= 360 ? num = 0 : num+=40

    } )
}

let getColorForSubject=(subject)=>{
    return colorPool.filter(x => { return x.subject === subject})[0].color;

}



let getTimetable = ()=>{

}

    return (
    <div className='callendar'>
        {console.log(timetable1?.timetable)}
            <HeaderDays/>
            <div className='callendar-inner'>
                <Hours/>
                {colorForSubject(timetable)}
                {timetable.map(card => 
                    <CardCallendar 
                        dayOfWeek={card.dayOfWeek}
                        subject={card.TeacherSubject.Subject.name}
                        time={card.time}
                        teacher={card.TeacherSubject.User.name+" "+card.TeacherSubject.User.surname}
                        class={card.Class.name}
                        color= {getColorForSubject(card.TeacherSubject.Subject.name)}
                        role={user.Role.id}
                        />
                )}
            </div> 
    </div>
        
    )
}

export default Callendar
