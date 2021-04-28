import "./GradesRow.css"
import Grade from "./Grade";

const GradesRow = (props) => {

    return (
        <div className="content-gr">
            <div className="subject-name-gr">
                {props.oceny[0]}:
            </div>
            <div className="grades-gr">
                {props.oceny[1].map((grade, i) => {
                        return <Grade key={i} subject={props.oceny[0]} grade={grade}/>
                    }
                )}
            </div>
        </div>
    );
};

export default GradesRow;
