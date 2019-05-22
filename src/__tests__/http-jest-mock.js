// these should normally be in your jest setupTestFrameworkScriptFile
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

// 0⃣ 🐨 you're going to need these
import React from 'react'
import {render, fireEvent, wait} from 'react-testing-library'
import {GreetingLoader} from '../greeting-loader-01-mocking'

// our component makes an HTTP request when you click on the load button.
// we don't want it to do this for various reasons, so instead we'll mock
// the module responsible for making that HTTP call to have it return
// a fake version of what we want it to return.
// 4⃣ 🐨 use jest.mock to mock the '../api' module and return a fake `loadGreeting`:
const mockLoadGreeting = jest.fn(subject =>
  Promise.resolve({data: {greeting: `Hi ${subject}`}}),
)

// 👀 notice this as an async test:
test('loads greetings on click', async () => {
  const {getByText, getByLabelText} = render(
    <GreetingLoader loadGreeting={mockLoadGreeting} />,
  )
  const input = getByLabelText(/name/i)
  const button = getByText(/load/i)
  input.value = 'Michael'
  fireEvent.click(button)
  expect(mockLoadGreeting).toHaveBeenCalledTimes(1)
  expect(mockLoadGreeting).toHaveBeenCalledWith('Michael')
  await wait(() => expect(getByText(/hi michael/i)).toBeInTheDocument())
})
