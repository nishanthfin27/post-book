import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`

const Search = (props) => {
    //object destructuring
   const { term, handleChange, setTerm } = props 

   //function to clear the search input field
   const handleClear = () => {
    setTerm('')
}

    return (
        <StyledDiv>
            <i class="fa fa-search"></i>
            <input 
                type='text'
                value={term}
                onChange={handleChange}
                setTerm={setTerm}
                placeholder='search by title or content'
            />
            <Button onClick={() => {
                handleClear()
            }}>Clear</Button>
        </StyledDiv>
    )
}

export default Search
