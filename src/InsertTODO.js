import React, { useState, useContext } from "react";
import { insertToDB } from "./PouchDB";
import { GlobalInfoVar } from "./GlobalInfo";
import TODOList from "./TODOLIST";

const InsertToDo = () => {
  const [inputlist, setInputlist] = useState("");
  const data = useContext(GlobalInfoVar);
  const itemEvent = (e) => {
    setInputlist(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = {
      task: inputlist,
      isDone: false,
    };
    const responseID = await insertToDB(newTodo);
    newTodo.id = responseID?.id;
    setInputlist("");
    const ret = await data?.getToDBFun();
    console.log("ret coming ", ret);
  };

  return (
    <div className="">
      <h1 className=" text-center text-3xl font-bold py-4 mr-5">
        TODO WITH CONTEXT API
      </h1>
      <form onSubmit={handleSubmit} name="myForm">
        <input
          name="myTodo"
          type="text"
          required={React}
          placeholder="Add Tasks"
          value={inputlist}
          onChange={itemEvent}
          className="border border-black py-1 px-2 "
        />
        <button
          type="submit"
          name="myForm"
          className="ml-5 border-black bg-slate-700 px-3 py-1 text-white"
        >
          Add
        </button>
      </form>
      <TODOList />
    </div>
  );
};

export default InsertToDo;
