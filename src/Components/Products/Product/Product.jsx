import React from "react";
import {Card , CardMedia,CardContent,CardActions,Typography} from "@material-ui/core";
import useStyles from './styles';
import {ic_edit} from 'react-icons-kit/md/ic_edit';
import {ic_delete_outline} from 'react-icons-kit/md/ic_delete_outline';
import { Icon } from 'react-icons-kit';

const Product = ({product,categoryId,userId}) => {
    const classes=useStyles();
return (
  
  (categoryId>0 ? product.category==categoryId:(userId>0 ? product.user==userId:true)) && <Card className={classes.root} >
    <CardMedia className={classes.media} image={product.image} title={product.name} />
    <CardContent>
      <div className={classes.cardContent}>
        <Typography variant="h5" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {product.price}
        </Typography>
      </div>
      <Typography variant="body2" color="textSecondary" className={classes.desc}>
        {product.description}
      </Typography>
    </CardContent>
    <CardActions disableSpacing className={classes.CardActions}>
      <button className={classes.button}>
   <Icon icon={ic_edit} size={20} className={classes.Icon} />
   </button>
   <button className={classes.button}>
   <Icon icon={ic_delete_outline} size={20} className={classes.Icon}/>
   </button>
   <div style={{marginLeft:"100px", color:"gray"}}>
   Quantity : {product.quantity}
   </div>
    </CardActions>
  </Card>
);
};

export default Product;
