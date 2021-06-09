import "./GradesRow.css"
import Grade from "./Grade";

const GradesRow = (props) => {

    return (
        <div className="content-gr">
            <div className="subject-name-gr">
                {props.subject}:
            </div>
            <div className="grades-gr">
                {console.log(props.grades)}
                {props.grades.map((grade, i) => {
                        return <Grade 
                        key={i} 
                        subject={props.subject} 
                        grade={grade.grade}
                        description={grade.description}
                        date={grade.date}
                        teacher={props.teacher.name+" "+props.teacher.surname}
                        />
                    }
                )}
            </div>
        </div>
    );
};

export default GradesRow;
