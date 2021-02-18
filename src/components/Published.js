import React from 'react'
import { useSelector, useDisptach } from 'react-redux'
import styled from 'styled-components'
import PostItem from './PostItem'


const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`

const StyledDiv1 = styled.div`
    height: 500px;
    width: 800px;
    overflow: scroll;
`

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const Published = (props) => {
    //object destructuring
    const { posts } = props

    return (
        <StyledDiv>
            {posts.length === 0 ? (
                <Title>
                    <h2>No articles found...</h2>
                    <h2>Click New Post button to your left top corner to publish your article..</h2>
                </Title>
            ) : (
                <div>
                    <h1>No of articles - { posts.length }</h1>
                    <StyledDiv1>
                        {posts.map((post) => {
                            return <PostItem 
                                        key={post.id}
                                        {...post}
                            />
                        })}
                    </StyledDiv1>
                </div>
            )}
        </StyledDiv>
    )
}

export default Published
