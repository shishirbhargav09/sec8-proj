import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

function UsersList({userlist}) {
  return (
    <div>
        {
            userlist.map((listItem) => {
                return <Container key={uuidv4()}>{listItem.name} ({listItem.age}) years old </Container>
            })
        }
    </div>
  )
}

export default UsersList
const Container = styled.div`

margin: 1rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  background-color: #fff;
  border-radius: 10px;


`