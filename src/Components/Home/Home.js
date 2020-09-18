import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Home.css'

const Home = () => {

    const [postData, setPostData] = useState([])

useEffect(() =>{
  const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
    .then(res => res.json())
    .then(data => setPostData(data))
    .catch(error => console.log(error));
}, [])

    return (
         <div className='post_container'>
            { 
                postData.length > 1 &&
                postData.map( postData => <Post key={postData.id} postData={postData} />)
            }
        </div>
    );
};

export default Home;