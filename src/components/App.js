import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Buttons from './Buttons'
import NewPost from './NewPost'
import Published from './Published'
import Search from './Search'

const App = (props) => {
    //local state variable for search input field
    const [term, setTerm] = useState('')

    //get the show and posts property values from the redux store
    const show = useSelector(state => state.show)
    const posts = useSelector(state => state.posts)
    
    //function to read the values typed in the search input field
    const handleChange = (e) => {
       setTerm(e.target.value)
    }

    //function to filter the posts based on the input strings of the search input field
    const filteredPost = () => {
        const result = posts.filter((post) => {
            return post.title.toLowerCase().includes(term) || post.body.toLowerCase().includes(term)
        })
        return result
    }

    return (
        <div>
            <Search 
                term={term}
                handleChange={handleChange}
                setTerm={setTerm}
            />
            <Buttons /><br /><br />
            {show ? (
                <NewPost />
            ) : (
                <Published 
                    posts={filteredPost()}
                />
            )} 
        </div>
    )
}

export default App
