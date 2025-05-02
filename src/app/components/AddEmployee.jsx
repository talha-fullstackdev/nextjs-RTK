"use client";
import React, { useRef } from "react";
import { add } from "../reduxtoolkit/slice";
import { useDispatch } from "react-redux";
const AddEmployee = () => {
  const nameRef = useRef();
  const dispatch = useDispatch();
  const handleAdd = () => {
    let name = nameRef.current.value;
    if (!name) {
      return alert("fill the input!");
    }
    if (name.length < 5) {
      return alert("input must be five characters long!");
    }

    dispatch(add(name));
    nameRef.current.value = " ";
    return alert("data has been uploaded");
  };
  return (
    <div>
      <input ref={nameRef} type="text" placeholder="add employee data" />
      <button onClick={handleAdd}>add</button>
    </div>
  );
};

export default AddEmployee;
////////////////