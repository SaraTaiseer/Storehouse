import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import User from "./User/User";
import users from '../users';
import { Icon } from "react-icons-kit";
import {userPlus} from 'react-icons-kit/icomoon/userPlus'

const Users = () =>{
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
        display:"grid",
      }}>
    <p>
    THE USERS
    </p> 
   <button style={{width:"200px",marginLeft:"20px" ,fontSize:"20px",fontFamily:"cursive",marginTop:"-40px",cursor:"pointer",}}>
        <Icon icon={userPlus} size={20} style={{marginRight:"5px"}} />
       Create User
   </button>
        </div>
      <main className={classes.content} >
        <div className={classes.toolbar} />
        <Grid>
          {users.map((user) => (
            <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
              <User user={user} />
             </Grid>
          ))}
        </Grid>
      </main>
      </>
    );
}

export default Users;