// these should normally be in your jest setupTestFrameworkScriptFile
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

// 🐨 you're gonna need these
import React from 'react'
import {render} from 'react-testing-library'
import {Editor} from '../post-editor'

test('renders a form with title, content, tags, and a submit button', () => {
  const {getByText, getByLabelText} = render(<Editor />)
  expect(getByLabelText(/title/i)).toBeInTheDocument()
  expect(getByLabelText(/content/i)).toBeInTheDocument()
  expect(getByLabelText(/tags/i)).toBeInTheDocument()
  expect(getByText(/submit/i)).toBeInTheDocument()
})
