import React from 'react'

export function Editor(_props) {
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" />

      <label htmlFor="content">Content</label>
      <input id="content" name="content" type="text" />

      <label htmlFor="tags">Tags</label>
      <input id="tags" name="tags" type="text" />

      <label htmlFor="submit">Submit</label>
      <input id="submit" type="submit" value="Submit" />
    </form>
  )
}
