import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import Category from "./Category/Category";
import categories from '../categories';
import { Icon } from "react-icons-kit";
import {plus} from 'react-icons-kit/fa/plus';
const Categories = () =>{
    React.useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const classes = useStyles();
    return (
      <>
        <div style={{
        fontSize: "50px",
        fontFamily: "cursive",
        textAlign:"center",
        paddingTop:"40px",
        color: "#128f8b",
      }}>
    <p>
    THE CATEGORIES
    </p>
    <button style={{width:"200px",marginLeft:"20px" ,fontSize:"20px",fontFamily:"cursive",cursor:"pointer",}}>
        <Icon icon={plus} size={20} style={{marginRight:"5px"}} />
       Create Category
   </button>
        </div>
      <main className={classes.content} >
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {categories.map((category) => (
            <Grid item key={category.id} xs={12} sm={6} md={4} lg={3}>
              <Category category={category} />
            </Grid>
          ))}
        </Grid>
      </main>
      </>
    );
}

export default Categories;