import React from 'react'

export class Editor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {submitDisabled: false}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({submitDisabled: true})
  }

  render() {
    return (
      <form>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" />

        <label htmlFor="content">Content</label>
        <input id="content" name="content" type="text" />

        <label htmlFor="tags">Tags</label>
        <input id="tags" name="tags" type="text" />

        <button
          type="submit"
          value="Submit"
          onClick={this.handleSubmit}
          disabled={this.state.submitDisabled}
        >
          Submit
        </button>
      </form>
    )
  }
}
