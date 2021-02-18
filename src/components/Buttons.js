import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { startShowFalse, startShowTrue } from '../actions/startToggleShow'

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const Buttons = (props) => {

    //using useDispatch hook to dispatch an action to the reducer
    const dispatch = useDispatch()

    //function to dispatch an action to the reducer
    const showForm = () => {
        dispatch(startShowTrue())
    }

    //function to dispatch an action to the reducer
    const showPublished = () => {
        dispatch(startShowFalse())
    }

    return (
        <StyledDiv>
            <Button onClick={() => {
                showForm()
            }}> New Post </Button>
            <Button onClick={() => {
                showPublished()
            }}> Published </Button>
        </StyledDiv>
    )
}

export default Buttons
