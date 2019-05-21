// 🐨 you're going to need to use React to create react elements, so import react
// 🐨 we're going to render the FavoriteNumber component with ReactDOM so you'll need to import react-dom
// 🐨 Here's your component:
import 'jest-dom/extend-expect'
import React from 'react'
import ReactDOM from 'react-dom'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  expect(div.querySelector('input')).toHaveAttribute('type', 'number')
  expect(div.querySelector('label')).toHaveTextContent('Favorite Number')
})
