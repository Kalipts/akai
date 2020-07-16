import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as resourceActions from "../../redux/actions/resourceAction";

const AddResource = (props) => {
  let name = useRef();
  const [id, setId] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const resource = {
      id: id,
      name: name.current.value,
    };
    setId(id + 1);
    console.log(resource);
    props.actions.createResource(resource);
  };

  return (
    <div>
      <h1>List</h1>
      <form onSubmit={handleSubmit}>
        <input ref={name} required type="text" placeholder="Enter task" />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    resources: state.resources,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(resourceActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddResource);
