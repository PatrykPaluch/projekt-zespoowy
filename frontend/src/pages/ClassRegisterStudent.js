import Navbar from "../components/Navbar";
import React, {useEffect, useState} from 'react'
import GradesRow from "../components/ClassRegister/GradesRow";
import "./Grades.css";
import {Api} from "../apiHandler/apiHandler";

const ClassRegisterStudent = () => {

    const oceny = [["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]]];
    
    const [timetable1,setTimetable] = useState({
        timetable:[]
    });

    const [studentGrades,setStudentGrades] = useState({
        grades:[]
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

    
        function getChild() {
            Api.children().then(response => {
                if(response.status === 200){
                    setChild(response.data.list[0]);
                    console.log(response.data.list[0].id)
                }
            })
        }


    function getGradesForStudent (id) {
        Api.getGradesForStudent(id).then(res => {
            if(res.status === 200){
                console.log(res.data.studentGrades);
                setStudentGrades({...studentGrades,grades:res.data.studentGrades})
            }

        })
    }

    


    useEffect(() =>{
        console.log(user.role);
        getUser();
        switch(user.role){
            
            case 1:
                console.log(user.role);

                getGradesForStudent(user.id);
                break;

            case 3:

                getChild (user.id);
                getGradesForStudent(child.id);
                break;
            default:
                console.log(`Wrong role id ${user.role}`)
        }

    }, [user?.role,user?.id,child?.id]);
    
    return (
        <>
            <Navbar/>
            <div className="content">
                <div className="grades-content-student">
                    <div className="period">
                        <div className="period1">
                            okres1
                            <button>
                            </button>
                        </div>
                        <div className="period1">
                            okres2
                            <button>
                            </button>
                        </div>
                    </div>

                    <div className="grades">
                        {studentGrades?.grades.map((e,i) => {
                            console.log("Entered");
                            // Return the element. Also pass key
                            // console.log(e.grades);
                            return (<GradesRow 
                                subject={e.subject.name} 
                                grades={e?.grades} 
                                key={i}
                                teacher={e.teacher}
                                />)
                        })}

                    </div>
                </div>
            </div>
        </>)
};

export default ClassRegisterStudent;

