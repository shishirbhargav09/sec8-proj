import React, { useState } from "react";
import styled from "styled-components";
import ErrorModal from "./ErrorModal";
function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const addHandler = (e) => {
    e.preventDefault();
    if(username.trim().length===0 || Number(age)<0 || age.length===0){
      setError({
        message: "Please Enter Valid Details"
      })
      return
    }
    console.log(username, age);
    // console.log(username.length);
    props.onAdduser(username,age);
    setAge('')
    setUsername('')

  };
  const errorHandler = () => { 
    setError()
   }

  return (
   <>
  {error && <ErrorModal msg={error.message} onConfirm={errorHandler} />}
   <Container>
      <form onSubmit={addHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" 
        value={age} onChange={(e) => {
            setAge(e.target.value);
          }} />
        <button type="submit">Add User</button>
      </form>
    </Container></>
  );
}

export default AddUser;

const Container = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  background-color: #fff;
  border-radius: 10px;
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
    &:focus {
      outline: none;
      border-color: #4f005f;
    }
  }
  button {
    font: inherit;
    border: 1px solid #4f005f;
    background: #4f005f;
    color: white;
    padding: 0.25rem 1rem;
    cursor: pointer;

    &:active {
      background: #741188;
      border-color: #741188;
    }
    &:hover,
    &:focus {
      outline: none;
    }
  }
`;
