import React from 'react'
import MDEditor from '@uiw/react-md-editor';
import styled from 'styled-components'

const StyledDiv = styled.div`
    margin: auto;
    width: 50%;
    border: 3px solid black;
    padding: 10px;
`
const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const PostItem = (props) => {
    //object destructuring
    const {title, body} = props 

    return (
        <StyledDiv>
            <Title>{ title }</Title>
            <MDEditor.Markdown source={body} />
        </StyledDiv>
    )
}

export default PostItem
