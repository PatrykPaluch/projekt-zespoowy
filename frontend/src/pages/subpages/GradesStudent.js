import ClassRegisterStudentNav from "../../components/ClassRegister/ClassRegisterStudentNav";
import "./Grades.css";
import GradesRow from "../../components/ClassRegister/GradesRow";

const GradesStudent = () => {
    const oceny = [["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]]];
    return (
        <div className="content">
            <ClassRegisterStudentNav/>
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
                        {oceny.map((ocena, i) => {
                            console.log("Entered");
                            // Return the element. Also pass key
                            return (<GradesRow oceny={ocena} key={i}/>)
                        })}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default GradesStudent;
