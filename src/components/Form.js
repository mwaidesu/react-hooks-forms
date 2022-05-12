import React from "react";

const Form = (props) => {
  return (
    <div>
      <form>
        <input type="text" onChange={props.handleFirstNameChange} value={props.firstName} />
        <input type="text" onChange={props.handleLastNameChange} value={props.lastName} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
