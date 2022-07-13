import React from "react" ;

const Input = (props) => {
    return <div>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                id={props.name}
                name={props.name}
                type="text"
                className="form-control"
                value={props.value}
                onChange={props.handleChange}
            />
        </div>

}

export default Input