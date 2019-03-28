import React from 'react';
import {Grid, Header, Image, Card, Button, Icon} from "semantic-ui-react";
import axios from 'axios';
import {Link} from 'react-router-dom';

class ExploreFriends extends React.Component {
state = {friends: []};random

downVote = (id) => {
  let { friends, } = this.state;
  this.setState({ friends: friends.filter( f => f.id !== id), });
}

upVote = (id) => {
  let {friends, } = this.state;
  axios.put(`/api/users/${id}`)
  .then( () => this.setState({ friends: friends.filter( f => f.id !== id ), }) )
}

componentDidMount() {
  axios.get(`/api/users`)
  .then( res => this.setState({ friends: res.data, }))
}

sample = () => {
  const { friends, } = this.state;
  if(friends.length) {
    const index = Math.floor(Math.random() * friends.length);
    return friends[index];
  } else {
    return null;
  }
}

render() {
  const friend = this.sample(); 

  if (friend) {
    return (
      <div>
        <br />
        <Header as='h1'>Find New Friends</Header>
        <br />
        <Card key={friend.id}>
        <Image src={friend.avatar} />
        <Card.Content>
          <Card.Header>
            {friend.name}
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
        <Button color="red" icon basic onClick={ () => this.downVote(friend.id)}>
        <Icon name="thumbs down" />
        </Button>
        <Button color="green" icon basic onClick={ () => this.upVote(friend.id)}>
        <Icon name="thumbs up" />
        </Button>
        </Card.Content>
        </Card>
        <Link to="/my_friends">
        <Button color="blue">My Friends</Button>
        </Link>
        </div>
    )
  } else {
    return <Header textAlign="center">No More Friends!</Header>
  }
}
}

export default ExploreFriends;