import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {
    const [post, setPost] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data => setPost(data));

    }, [])
    // console.log(post);

    return (
        <div className="d-flex flex-wrap justify-content-center align-self-left">
           
            
            {
                post.map(post => <Posts post={post}></Posts>)
            }
           
            
        </div>
    );
};

export default Home;