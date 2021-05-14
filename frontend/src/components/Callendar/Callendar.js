import React from 'react'
import CardCallendar from './CardCallendar';
import HeaderDays from './HeaderDays'
import Hours from './Hours'
import './callendar.css';

// TODO add useState and prepare useEffect

const Callendar = () => {
    let colorPool=[];
    let cardCallExample =[{
        dayOfWeek: "Monday",
        time:"08:00",
        subject:"Język Polski"
    },
    {
        dayOfWeek: "Monday",
        time:"09:00",
        subject:"Język Angielski"
    },
    {
        dayOfWeek: "Monday",
        time:"10:00",
        subject:"Matematyka"
    },
    {
        dayOfWeek: "Monday",
        time:"11:00",
        subject:"Matematyka"
    },
    {
        dayOfWeek: "Monday",
        time:"12:00",
        subject:"Historia"
    },
    {
        dayOfWeek: "Monday",
        time:"13:00",
        subject:"WOS"
    },
    {
        dayOfWeek: "Monday",
        time:"14:00",
        subject:"W-F"
    },

    {
        dayOfWeek: "Tuesday",
        time:"09:00",
        subject:"Matematyka"
    },
    {
        dayOfWeek: "Tuesday",
        time:"10:00",
        subject:"Język Polski"
    },
    {
        dayOfWeek: "Tuesday",
        time:"11:00",
        subject:"Język Polski"
    },
    {
        dayOfWeek: "Tuesday",
        time:"12:00",
        subject:"EDB"
    },
    {
        dayOfWeek: "Tuesday",
        time:"13:00",
        subject:"Fizyka"
    },
    {
        dayOfWeek: "Tuesday",
        time:"14:00",
        subject:"Chemia"
    },
    {
        dayOfWeek: "Tuesday",
        time:"15:00",
        subject:"W-F"
    },
    {
        dayOfWeek: "Wednesday",
        time:"07:00",
        subject:"Matematyka"
    },
    {
        dayOfWeek: "Wednesday",
        time:"08:00",
        subject:"Język Polski"
    }
    ,

    {
        dayOfWeek: "Wednesday",
        time:"09:00",
        subject:"Informatyka"
    },
    {
        dayOfWeek: "Wednesday",
        time:"10:00",
        subject:"Język Polski"
    },
    {
        dayOfWeek: "Wednesday",
        time:"11:00",
        subject:"Język Polski"
    },
    {
        dayOfWeek: "Wednesday",
        time:"12:00",
        subject:"Historia"
    },
    {
        dayOfWeek: "Wednesday",
        time:"13:00",
        subject:"Fizyka"
    },
    {
        dayOfWeek: "Thursday",
        time:"10:00",
        subject:"Matematyka"
    },
    {
        dayOfWeek: "Thursday",
        time:"11:00",
        subject:"Język Polski"
    }
    ,
    {
        dayOfWeek: "Thursday",
        time:"12:00",
        subject:"EDB"
    },
    {
        dayOfWeek: "Thursday",
        time:"13:00",
        subject:"Fizyka"
    },
    {
        dayOfWeek: "Wednesday",
        time:"07:00",
        subject:"Matematyka"
    },
    {
        dayOfWeek: "Wednesday",
        time:"08:00",
        subject:"Język Polski"
    }
    ,

    {
        dayOfWeek: "Friday",
        time:"09:00",
        subject:"Informatyka"
    },
    {
        dayOfWeek: "Friday",
        time:"10:00",
        subject:"Godzina Wychowawcza"
    },
    {
        dayOfWeek: "Friday",
        time:"11:00",
        subject:"Matematyka"
    },
    {
        dayOfWeek: "Friday",
        time:"12:00",
        subject:"Język Polski"
    },
    {
        dayOfWeek: "Friday",
        time:"13:00",
        subject:"Chemia"
    },
   
];

let colorForSubject = (cardCall)=>{
    let subjects = [];
    let num = 20;
    cardCall.forEach(x => 
        {!subjects.includes(x.subject) && subjects.push(x.subject) && colorPool.push({subject: x.subject, color: 'hsl('+num+', 100%, 80%)'}) && num >= 360 ? num = 0 : num+=40

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
                {colorForSubject(cardCallExample)}
                {cardCallExample.map(card => 
                    <CardCallendar dayOfWeek={card.dayOfWeek} subject={card.subject} time={card.time} color= {getColorForSubject(card.subject)}/>
                )}
            </div> 
    </div>
        
    )
}

export default Callendar
