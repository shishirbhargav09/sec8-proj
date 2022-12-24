import React from 'react'
import styled from 'styled-components'

function ErrorModal(props) {
  return (
    <div>
   <Backdrop onClick={props.onConfirm} />
   <Modal>
        <h2>Title</h2>
        <p>{props.msg}</p>
        <button onClick={props.onConfirm}>okay</button>
        
   </Modal>
        
    </div>
  )
}

export default ErrorModal

const Modal = styled.div`
position: fixed;
  top: 30vh;
  left: 10%;
  /* right: 10%; */
  width: 80%;
  /* max-width: 1000px; */
  z-index: 100;
  padding: 0.5rem;
  overflow: hidden;
  background-color: wheat;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
`
const Backdrop = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
  `