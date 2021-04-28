import React from 'react';
import ClassRegisterTeacherNav from "../../components/ClassRegister/ClassRegisterTeacherNav";
import TeacherRow from "../../components/ClassRegister/TeacherRow";


const GradesTeacher = () => {
    const uczniowie = [["Maciek", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Polski'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Chemia'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Kasia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'WF'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'informatyka'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Maciek", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Polski'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Chemia'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Kasia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'WF'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'informatyka'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Maciek", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Polski'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Chemia'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Kasia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'WF'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'informatyka'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Maciek", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Polski'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Chemia'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Kasia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'WF'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'informatyka'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Maciek", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Polski'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Chemia'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Kasia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'WF'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'informatyka'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Maciek", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Polski'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Chemia'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Kasia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'WF'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'informatyka'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Maciek", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Polski'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Chemia'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Kasia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'WF'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'informatyka'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Maciek", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Polski'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Chemia'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Kasia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'WF'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'informatyka'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Maciek", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Polski'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Chemia'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Kasia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'WF'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'informatyka'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Maciek", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Polski'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Chemia'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]], ["Kasia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'WF'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'informatyka'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian', 'Angielski']]]];
    return (
        <div className="content">
            <ClassRegisterTeacherNav/>
            <div className="margin-grades">
                <div className="grades-content">
                    <div className="period">
                        <div className="period1">
                            okres1
                            <button>
                            </button>
                        </div>
                        <div className="period2">
                            okres2
                            <button>
                            </button>
                        </div>
                    </div>

                    <div className="grades">
                        {uczniowie.map((u, i) => {
                            console.log("Entered");
                            // Return the element. Also pass key
                            return (<TeacherRow oceny={u} key={i}/>)
                        })}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default GradesTeacher;
