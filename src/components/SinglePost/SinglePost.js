import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './SinglePost.css';

const useStyles = makeStyles({
    root: {
      width:  '50%',
      margin : '20px auto',
      boxShadow : '0px 7px 10px lightgray',
      borderRadius : '10px', 
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    media: {
        backgroundSize : 'cover',
        height: 240,

      }
  });


const SinglePost = () => {
    const {id} = useParams();
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const [post, setPost] = useState({});

    const [comments, setComments] = useState([]);

    

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setPost(data));

        fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
        .then(res => res.json())
        .then(value => setComments(value));

        

    }, [id]);



    // console.log(users);
  
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia
                className={classes.media}
                image={`https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80`}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                    {post.title}
                    </Typography>
                    {/* <Typography className={classes.pos} color="textSecondary">
                    adjective
                    </Typography> */}
                    <Typography variant="body2" component="p">
                    {post.body}
                
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
            <div className="comments">
                <h4 style={{marginLeft: '20px'}}>Comments</h4>
                {
                    comments.map((comment) => <Comment key={comment.id} comment={comment}></Comment>)
                 }
            </div>

            
        </div>
        
    );
};

export default SinglePost;