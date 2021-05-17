import Navbar from "../components/Navbar";
import GradesRow from "../components/ClassRegister/GradesRow";
import "./Grades.css";

const ClassRegisterStudent = () => {

    const oceny = [["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Polski", [[1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]], ["Chemia", [[3, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [2, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian'], [1, '1:12:2020', 'Mariusz Walczyk', 'sprawdzian']]]];
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
                        {oceny.map((ocena, i) => {
                            console.log("Entered");
                            // Return the element. Also pass key
                            return (<GradesRow oceny={ocena} key={i}/>)
                        })}

                    </div>
                </div>
            </div>
        </>)
};

export default ClassRegisterStudent;

