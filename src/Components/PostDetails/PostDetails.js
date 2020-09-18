import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CommentIcon from '@material-ui/icons/Comment';
import { useParams } from 'react-router-dom';
import Comments  from '../Comments/Comments';
import './PostDetails.css'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin:'80px auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    cursor:'pointer',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cart_content:{
    textAlign:'start',
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
};

//custom fetch api with id and then show title and body text and get postId
const {postId} = useParams()
const [postData, setPostData] = useState([])

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPostData(data))
    }, []);

    const {id, title, body} = postData;

const convertToUpperCase = string => string.charAt(0).toUpperCase() + string.slice(1);

  return (
 
            <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={`https://picsum.photos/600/300?random=${id}`}
              title={title}
            />
            <CardContent className={classes.cart_content}>
              <h3>{id}. {title && convertToUpperCase(title)}</h3>
              <Typography variant="body2" color="textSecondary" component="p">
                {body && convertToUpperCase(body)}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <CommentIcon
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                title="Comment"
              >
                <ExpandMoreIcon />
              </CommentIcon>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Comments/>
              </CardContent>
            </Collapse>
          </Card>

  );
}
