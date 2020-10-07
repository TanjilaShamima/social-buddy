import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.css';

const Posts = (props) => {
    const post = props.post;
    console.log(post);

    return (
        <div className="post">
            <h2>Post No : {post.id}</h2>
            <h3><Link to={"/post/"+post.id}>{post.title}</Link></h3>
            <p>{post.body}</p>
            <Button id="see-more-button" variant="contained" color="secondary">
                <Link to={"/post/"+post.id}>See more</Link>
            </Button>            
            
        </div>
    );
};

export default Posts;



