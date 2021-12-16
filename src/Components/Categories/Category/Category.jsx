import React from "react";
import {Card , CardMedia,CardContent,CardActions,Typography} from "@material-ui/core";
import useStyles from './styles';
import {ic_edit} from 'react-icons-kit/md/ic_edit';
import {ic_delete_outline} from 'react-icons-kit/md/ic_delete_outline';
import { Icon } from 'react-icons-kit';
import products from "../../products";
import { Link } from "react-router-dom";

const Category = ({category}) => {
    const classes=useStyles();
const number = products.filter(pro=>pro.category==category.id).length;
return ( 
  <Card className={classes.root}>
      <Link to={`/products/${category.id}`}  style={{ textDecoration: 'none' }}>
    <CardMedia className={classes.media} image={category.image} title={category.name} />
    <CardContent>
      <div className={classes.cardContent}>
        <Typography variant="h5" gutterBottom>
          {category.name}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {number}
        </Typography>
      </div>
    </CardContent>
    </Link>
    <CardActions disableSpacing className={classes.CardActions}>
      <button className={classes.button}>
   <Icon icon={ic_edit} size={20} className={classes.Icon} />
   </button>
   <button className={classes.button}>
   <Icon icon={ic_delete_outline} size={20} className={classes.Icon}/>
   </button>
    </CardActions>
  </Card>
   
);
};

export default Category;
