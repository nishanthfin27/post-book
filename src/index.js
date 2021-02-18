import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './store/configureStore'

const store = configureStore()
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))