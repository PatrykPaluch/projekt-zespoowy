import "./GradesRow.css"

const GradesRow = (props) => {
    function isOne(grade) {
        return grade > 1 ? grade +', ' : <span style={{color: 'red'}}> {grade},  </span> ;
    }

    return (
        <div className="content-gr">
            <div className="subject-name-gr">
                {props.oceny[0]}:
            </div>
            <div className="grades-gr">
                {props.oceny[1].map(grade => {
                        return isOne(grade)
                    }
                )}
            </div>

        </div>
    );
};

export default GradesRow;
