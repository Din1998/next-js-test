"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


import Modal from'../components/modal/Modal'

export default function Home() {
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
        <Modal />
      </Stack>
    </Grid>
    
   </div>
  )
}
