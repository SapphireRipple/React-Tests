import PropTypes from 'prop-types'
function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.bool,
    age: PropTypes.bool,
    isStudent: PropTypes.bool,
    
}

export default Student