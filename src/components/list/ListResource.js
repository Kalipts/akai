import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as resourceActions from "../../redux/actions/resourceAction";

const ListResource = (props) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    setResources(props.resources);
  }, [props]);

  const handleDelete = (id) => {
    props.actions.deleteResouce(id);

    console.log("id: ", id);
  };

  const handleUpdate = (resource) => {
    console.log("update: ", resource);
    props.actions.updateResource(resource);
  };

  const style = {
    width: "30%",
  };

  const listTask = () => {
    return (
      <table style={style} className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource) => {
            return (
              <tr key={resource.id}>
                <td>
                  <input
                    onChange={(event) => {
                      setResources(
                        resources.map((item) => {
                          if (item.id === resource.id) {
                            console.log(event.target.value);
                            return { ...item, name: event.target.value };
                          }
                          return item;
                        })
                      );
                    }}
                    value={resource.name}
                  />
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(resource.id);
                    }}
                  >
                    delete
                  </button>
                </td>
                <td>
                  <button onClick={() => handleUpdate(resource)}>Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
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
