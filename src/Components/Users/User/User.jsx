import React from "react";
import {Card ,CardContent,CardActions,Typography} from "@material-ui/core";
import useStyles from './styles';
import {ic_edit} from 'react-icons-kit/md/ic_edit';
import {ic_delete_outline} from 'react-icons-kit/md/ic_delete_outline';
import { Icon } from 'react-icons-kit';
import products from "../../products";

const User = ({user}) => {
    const classes=useStyles();
    const number = products.filter(pro=>pro.user==user.id).length;
return (
    
  <Card className={classes.root}>
    <CardContent>
      <div className={classes.cardContent}>
        <Typography variant="h5" gutterBottom style={{fontFamily:"cursive"}}>
          {user.name}
        </Typography>
        <Typography variant="h6" gutterBottom style={{fontFamily:"cursive"}}>
           ({number})
        </Typography>
      </div>
    </CardContent>
    <CardActions disableSpacing className={classes.CardActions}>
      <button className={classes.button}>
   <Icon icon={ic_edit} size={20} className={classes.Icon} />
   </button>
   <button className={classes.button}>
   <Icon icon={ic_delete_outline} size={20} className={classes.IconDelete}/>
   </button>
    </CardActions>
  </Card>
   
);
};

export default User;
