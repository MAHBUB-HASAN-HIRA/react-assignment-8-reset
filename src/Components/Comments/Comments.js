import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import './Comments.css'

const Comments = () => {
    const {postId} = useParams()

//get dynamic comments from dynamic post Id
const [comments, setComments] = useState([])
    useEffect(()=>{
        const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(commentsUrl)
        .then(res => res.json())
        .then(data => setComments(data))
        .catch(error => console.log(error));
    }, []);

    const convertToUpperCase = string => string.charAt(0).toUpperCase() + string.slice(1);

    return (
        <div>
            {
                comments.map(comment =>
                    <div className='comment_container'>
                        <div className='comments_details'>
                            <Avatar className='avatar' src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`}/>                             
                            <div className='div2'>
                                <h4>{convertToUpperCase(comment.name)}</h4>
                                <p>{comment.email}</p>
                            </div>
                        </div>                          
                        <p>{comment.body}</p>
                    </div>)
            }
        </div>
    );
};

export default Comments;