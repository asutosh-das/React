import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-dev-runtime.js"

import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href:  'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }

const anotheruser = "chai aur react"

const anotherElement = (
    <a href="https://google.com" target='_blank'>Click me to visit Google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me to visit GOOGLE',
    anotheruser
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
