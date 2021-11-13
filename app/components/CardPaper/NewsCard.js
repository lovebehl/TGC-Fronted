import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import styles from './cardStyle-jss';

function NewsCard(props) {
  const {
    classes,
    children,
    title,
    onClickButton,
    image,
    ...rest
  } = props;
  return (
    <Card className={classes.cardMedia} {...rest}>
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent>
        {children}
      </CardContent>
      <CardActions>
        <Button size="large" color="primary" onClick={onClickButton}>
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClickButton: PropTypes.func.isRequired,
};

export default withStyles(styles)(NewsCard);
