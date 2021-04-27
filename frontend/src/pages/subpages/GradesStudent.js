import ClassRegisterStudentNav from "../../components/ClassRegisterStudentNav";
import "./GradesStudent.css";
import GradesRow from "../../components/GradesRow";
import Navbar from "../../components/Navbar";

const GradesStudent = () => {
    const oceny = [["Polski", [1, 2, 3, 1]], ["Chemia", [3, 2, 1]],["Polski", [1, 2, 3, 1]], ["Chemia", [3, 2, 1]],["Polski", [1, 2, 3, 1]], ["Chemia", [3, 2, 1]],["Polski", [1, 2, 3, 1]], ["Chemia", [3, 2, 1]],["Polski", [1, 2, 3, 1]], ["Chemia", [3, 2, 1]],["Polski", [1, 2, 3, 1]], ["Chemia", [3, 2, 1]],["Polski", [1, 2, 3, 1]], ["Chemia", [3, 2, 1]],["Polski", [1, 2, 3, 1]], ["Chemia", [3, 2, 1]],["Polski", [1, 2, 3, 1]], ["Chemia", [3, 2, 1]],["Polski", [1, 2, 3, 1]], ["Chemia", [3, 2, 1]],["Polski", [1, 2, 3, 1]], ["Chemia", [3, 2, 1]],["Polski", [1, 2, 3, 1]], ["Chemia", [3, 2, 1]]];
    return (
        <>
        <Navbar/>
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
    </>
    );
};

export default GradesStudent;
