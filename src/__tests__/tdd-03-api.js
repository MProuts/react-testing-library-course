// these should normally be in your jest setupTestFrameworkScriptFile
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import {savePost as mockSavePost} from '../api'
import {Editor} from '../post-editor'

jest.mock('../api', () => ({savePost: jest.fn(() => Promise.resolve())}))

afterEach(() => {
  mockSavePost.mockClear()
})

test('renders a form with title, content, tags, and a submit button', () => {
  const {getByLabelText, getByText} = render(<Editor user={{id: 2}} />)

  const title = getByLabelText(/title/i)
  title.value = 'foo'

  const content = getByLabelText(/content/i)
  content.value = 'loris'

  const tags = getByLabelText(/tags/i)
  tags.value = 'fantasy,mystery,fiction'

  const submitButton = getByText(/submit/i)

  fireEvent.click(submitButton)

  expect(submitButton).toBeDisabled()

  expect(mockSavePost).toHaveBeenCalledTimes(1)
  const expected = expect.objectContaining({
    title: 'foo',
    content: 'loris',
    tags: ['fantasy', 'mystery', 'fiction'],
    authorId: 2,
  })
  expect(mockSavePost).toHaveBeenCalledWith(expected)
})
