import React from 'react';
import axios from 'axios';
import {AuthConsumer} from '../providers/AuthProvider'
import PostForm from './PostForm';

class MyPosts extends React.Component {
  state = {posts: [], }

  componentDidMount = () => {
    const {auth: {user} } = this.props
    axios.get(`/api/users/${user.id}/posts`)
    .then(res => this.setState({ posts: res.data, }))
  }
render() {
  return (
    <>
    <PostForm />
    <br />
    This is where all my posts will be.
    </>
  )
}
}

export class ConnectedMyPosts extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth =>
        <MyPosts { ...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
      }
    }

export default ConnectedMyPosts