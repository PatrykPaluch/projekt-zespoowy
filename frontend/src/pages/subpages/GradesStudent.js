import ClassRegisterStudentNav from "../../components/ClassRegisterStudentNav";
import "./GradesStudent.css";
import GradesRow from "../../components/GradesRow";
import Navbar from "../../components/Navbar";

const GradesStudent = () => {
    const oceny = [["angielski", [1, 2, 3,1]], ["chemia", [3, 2, 1]]];
    return (
        <>
        <Navbar/>
        <div className="content">
            <ClassRegisterStudentNav/>
            <div className="margin-grades">
                <div className="grades-content">
                    <div className="period">
                        <button>
                            okres1
                        </button>
                        <button>
                            okres2
                        </button>
                    </div>

                    <div className="grades">
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>
                        <GradesRow oceny={oceny[0]}/>

                    </div>

                </div>
            </div>
        </div>
    </>
    );
};

export default GradesStudent;
