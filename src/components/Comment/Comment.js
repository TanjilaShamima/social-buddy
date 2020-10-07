import { Avatar, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Comment.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

const Comment = (props) => {
    const comment = props.comment;
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(user => setUser(user.results[0]));
    },[])

    console.log(user);

    const classes = useStyles();
    return (
        <div className="comment">
            <div className="left">
                <Avatar alt="Remy Sharp" src={user.picture?.thumbnail} className={classes.large} />
            </div>
            <div className="right">
                <h5>{user.name?.title +' '+ user.name?.first +' '+ user.name?.last}</h5>
                <p>
                    <small>{comment.email}</small>
                </p>
                <p>{comment.body}</p>
            </div>
            
        </div>
    );
};

export default Comment;