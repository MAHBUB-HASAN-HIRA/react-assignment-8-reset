import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Post.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 380,
    margin:'0 auto 20px auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    marginLeft: 'auto',
    textDecoration:'none'
  },
  card_content:{
      textAlign:'start'
  },
  card_action:{
    margin: '10px 0'
  }

}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

    const {title, body, id} = props.postData;
  const convertToUpperCase = string => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`https://picsum.photos/600/300?random=${id}`}
        title={title}
      />
      <CardContent className={clsx(classes.card_content)}>
        <h4>{id}. {title && convertToUpperCase(title)}</h4>
        <Typography variant="body2" color="textSecondary" component="p">
          {body && convertToUpperCase(body)}
        </Typography>
      </CardContent>
      <CardActions className={clsx(classes.card_action)} disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Link className={clsx(classes.expand)} to={`/postdetail/${id}`}>
            <Button  variant="contained" color="primary">
                View Details
            </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
