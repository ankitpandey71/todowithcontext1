import React, { memo } from "react";
import PropTypes from "prop-types";
import { removeToDB } from "./PouchDB";

const TodoListItem = ({ task, taskId, getToDBFun }) => {
  // console.log("TodoListItem", todoIndex);
  const removeTodo = async () => {
    // const newTodo = itemsList.filter((item) => item.id !== taskId);
    // setItemsList(newTodo);
    await removeToDB(taskId);
    await getToDBFun();
  };

  return (
    <div className="space-y-5 flex space-x-5 items-center">
      <div className="items-center">
        <li className="mt-3">{task}</li>
      </div>
      <div className=" space-x-5 space-y-2">
        <button type="button" onClick={removeTodo}>
          X
        </button>
      </div>
    </div>
  );
};

export default memo(TodoListItem);

TodoListItem.propTypes = {
  task: PropTypes.string,
  taskId: PropTypes.string,
  getToDBFun: PropTypes.func,
};

TodoListItem.defaultProps = {
  task: "sample task",
  taskId: "no id",
  getToDBFun: () => {},
};
