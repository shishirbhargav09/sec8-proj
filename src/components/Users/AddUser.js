import React from "react";
import styled from "styled-components";
function AddUser() {
  const addHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={addHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" />
        <button type="submit">Add User</button>
      </form>
    </Container>
  );
}

export default AddUser;

const Container = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

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
  .button {
    font: inherit;
    border: 1px solid #4f005f;
    background: #4f005f;
    color: white;
    padding: 0.25rem 1rem;
    cursor: pointer;
  }

  button {
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
