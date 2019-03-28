import React from "react";
import {Grid, Header, Image, Card, Button, Icon} from "semantic-ui-react"
import axios from 'axios';
import {Link} from 'react-router-dom';
import ExploreFriends from "./ExploreFriends";
import MyPosts from './MyPosts';

class Home extends React.Component {

  render() {
    return (
        <Grid columns="three" style={{marginTop: "30px"}}>
          <Grid.Row >
            <Grid.Column color="violet">
              User.image
          </Grid.Column>

          <Grid.Column color="purple">
          <ul>
         <li>User.name</li>
         </ul>
        </Grid.Column>

         <Grid.Column  color="olive">Banner Photo
     </Grid.Column>

      </Grid.Row>
          <Grid columns="four" divided>
        
        <Grid.Row>
           <Grid.Column color="blue">
             Top Friend 1
          </Grid.Column>

          <Grid.Column color="blue">
           Top Friend 2
        </Grid.Column>

           <Grid.Column color="blue">
             Top Friend 3
           </Grid.Column>

           <Grid.Column color="blue">
             Top Friend 4
           </Grid.Column>

          </Grid.Row>
          <Grid.Row>
            <Grid.Column color="blue">
             Top Friend 5
           </Grid.Column>

           <Grid.Column color="blue">
             Top Friend 6
           </Grid.Column>

            <Grid.Column color="blue">
             Top Friend 7
           </Grid.Column>

          <Grid.Column color="blue">
            Top Friend 8
         </Grid.Column>

        
         </Grid.Row>
       </Grid>
       <Grid.Column>
          <MyPosts />   
       </Grid.Column>

       <Grid.Column>
       <ExploreFriends />
       </Grid.Column>
       
    </Grid>
    )
  }
}

export default Home;
