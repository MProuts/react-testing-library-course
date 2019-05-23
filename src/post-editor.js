import React from 'react'
import {savePost} from './api'

export class Editor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      submitDisabled: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const target = e.target
    const {title, content, tags} = target.elements

    this.setState({submitDisabled: true})

    savePost({
      title: title.value,
      content: content.value,
      tags: tags.value.split(','),
      authorId: this.props.user.id,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" />

        <label htmlFor="content">Content</label>
        <input id="content" name="content" type="text" />

        <label htmlFor="tags">Tags</label>
        <input id="tags" name="tags" type="text" />

        <button disabled={this.state.submitDisabled}>Submit</button>
      </form>
    )
  }
}

Editor.defaultProps = {
  user: {id: 0},
}
