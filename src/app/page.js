"use client"

import {useState} from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import UserModal from'../components/modal/Modal'

export default function Home() {

  const [Input,SetInput] = useState({
    Name:"",
    Email:"",
    Address:"",
  });
  const [user,addUser] = useState([]);

  console.log(user)

  return (
   <div>
    <Grid
      container
      direction="row"
      justifyContent="right"
      alignItems="center"
      sx={{ px: 5 }}
    >
      <Stack spacing={2} direction="row" sx={{ mt: 5 }}>


        <UserModal Input={Input} SetInput={SetInput} user={user} addUser={addUser} />

      </Stack>
    </Grid>
    
   </div>
  )
}
