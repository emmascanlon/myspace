import React from 'react';
import {Form, Button} from "semantic-ui-react";

class PostForm extends React.Component {
  state = {title: "", body: "", image: "", link: ""}

  handleSubmit = () => {
  }

  handleChange = () => {
  }

render () {
  const {title, body, image, link} = this.state
    return (
      <>
      <Form>
      <input 
      name="title"
      placeholder="Title"
      value={title}
      onChange={this.handleChange}
      required/>
      <input 
      name="body"
      placeholder="Body"
      value={body}
      onChange={this.handleChange}
      />
      <input 
      name="image"
      label="Image"
      placeholder="Copy image address here"
      value={image}
      onChange={this.handleChange}
      />
      <input name="link"
      label="Link"
      placeholder="Copy link url here"
      value={link}
      onChange={this.handleChange} 
      />
      <Button onClick={this.handleSubmit}>Post</Button>
      </Form>
      </>
    )
  }
}

export default PostForm;