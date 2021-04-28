import React, {useState} from 'react';
import Grade from "./Grade";
import swal from 'sweetalert';
import './TeacherRow.css'

const TeacherRow = (props) => {
    const [grade, setGrade] = useState(0);
    const [type, setType] = useState('');


    function handleAddGrade() {

        swal(`Dodaje ocene dla ${props.oceny[0]}`, {
            content: "input",
        })
            .then((value) => {
                if (value>6 || value<0){
                    throw "ocena musi być z przedziału od 1 do 6";
                }
                setGrade(value);
                swal(`za co`, {
                    content: "input",
                }).then(value1 => {
                    setType(value1);
                    swal(`dodano ocene ${value} dla ${props.oceny[0]} za ${value1}`)
                });
            })
            .catch(e=>{
                swal(`${e}`)
            })
        ;


    }

    return (
        <div>
            <div className="content-gr">
                <div className="subject-name-gr">
                    <div className='name' onClick={handleAddGrade}>{props.oceny[0]}</div>
                    :
                </div>
                <div className="grades-gr">
                    {props.oceny[1].map((grade, i) => {
                            return <Grade key={i} subject={props.oceny[0]} grade={grade}/>
                        }
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeacherRow;
