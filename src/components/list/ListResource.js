import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as resourceActions from "../../redux/actions/resourceAction";

const ListResource = (props) => {

  const [name, setName] = useState('');

  const handleChange = (event) => {
      setName(event.target.value);
  }

  const handleDelete = (id) => {
    props.actions.deleteResouce(id);
  };

  const handleUpdate = (resource) => {
    props.actions.updateResource(resource);
  };

  const listTask = () => {
    return (
      <table class="table">
        <tr>
          <th>Task</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          {props.resources.map((resouce) => {
            return (
              <tr>
                <td key={resouce.id}>
                  <input onChange={handleChange}  value={resouce.name} />
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(resouce.id);
                    }}
                  >
                    delete
                  </button>
                </td>
                <td>
                  <button onClick={() => handleUpdate(resouce)}>Update</button>
                </td>
              </tr>
            );
          })}
        </tr>
      </table>
    );
  };

  return <div>{listTask()}</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(ListResource);
