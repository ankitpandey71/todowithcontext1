import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { GlobalInfoVar } from "./GlobalInfo";

// eslint-disable-next-line react/prop-types
const TODOList = () => {
  const data = useContext(GlobalInfoVar);

  return (
    <div>
      <ul className="ml-5">
        {data?.itemsList.map((itemvalue, index) => (
          <TodoListItem
            task={itemvalue.doc.task}
            taskId={itemvalue.id}
            key={itemvalue.id}
            getToDBFun={data?.getToDBFun}
            todoIndex={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default TODOList;
