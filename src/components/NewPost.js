import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import MDEditor from '@uiw/react-md-editor';
import { startPostData } from '../actions/posts-action'
import { startShowFalse } from '../actions/startToggleShow';


const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    width: 50%;
    border: 3px solid black;
    padding: 10px;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`


const NewPost = (props) => {
    const dispatch = useDispatch()

    //local state variables
    const [id, setId] = useState(uuidv4())
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    //function to handle form input change
    const handleInputChange = (e) => {
        const attr = e.target.name 

        if(attr === 'title'){
            setTitle(e.target.value)
        } else if(attr === 'body'){
            setBody(e.target.value)
        }
    }

    //function to validate the input fields of the form
    const runValidations = () => {
         //title
         if(title.trim().length === 0) {
            errors.title = 'title of article cannot be blank'
        }

        //body
        if(body.trim().length === 0){
            errors.body = 'content of article cannot be blank'
        }
    }

    //function to the handle form submit
    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(Object.keys(errors).length === 0){
            setFormErrors({})

            const formData = {
                id: id,
                title: title,
                body: body
            }
    
            dispatch(startPostData(formData))

            setId(uuidv4())
            setTitle('')
            setBody('')

            dispatch(startShowFalse())

        } else {
            console.log('form errors', errors)
            setFormErrors(errors)
        }

    }

    return (
        <StyledDiv>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='title'
                    value={title}
                    onChange={handleInputChange}
                    name='title'
                /><br />
                 {formErrors.title && <span style={{color:'red'}}> { formErrors.title } </span>}<br /><br />
                <MDEditor
                    value={body}
                    onChange={setBody}
                    name='body'
                />
                 {formErrors.body && <span style={{color:'red'}}> { formErrors.body } </span>}<br /><br />

                <Button type='submit'>publish</Button>
            </form>
        </StyledDiv>
    )
}

export default NewPost
