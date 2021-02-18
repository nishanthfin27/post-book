
//action generator for posting the articles
export const startPostData = (data) => {
    return {
        type: 'POST_DATA',
        payload: data
    }
}


