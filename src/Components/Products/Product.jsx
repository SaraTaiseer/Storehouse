import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
import products from "../products";
import { Icon } from "react-icons-kit";
import {plus} from 'react-icons-kit/fa/plus';
const Products = (props) =>{
  React.useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const classes = useStyles();
  var category=0;
  if(props.match!=undefined){
      category=props.match.params.category;
  }

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
    THE PRODUCTS
    </p>
       <button style={{width:"200px",marginLeft:"20px" ,fontSize:"20px",fontFamily:"cursive",cursor:"pointer",}}>
        <Icon icon={plus} size={20} style={{marginRight:"5px"}} />
       Create Product
   </button>
        </div>
      <main className={classes.content} >
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} categoryId={category}/>
            </Grid>
          ))}
        </Grid>
      </main>
      </>
    );
}

export default Products;