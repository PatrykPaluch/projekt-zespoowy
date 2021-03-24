import ClassRegisterStudentNav from "../../components/ClassRegisterStudentNav";
import "./GradesStudent.css";
import GradesRow from "../../components/GradesRow";

const GradesStudent = () => {
    const oceny = [["angielski", [1, 2, 3]], ["chemia", [3, 2, 1]]];
    return (
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
                    {/*{oceny.forEach(subject => {*/}
                    {/*    <GradesRow name={subject[0]} grades=subject{[1]}/>*/}
                    {/*})}*/}
                    <GradesRow/>
                    <GradesRow/>
                    <GradesRow/>

                </div>
            </div>
        </div>
    );
};

export default GradesStudent;
