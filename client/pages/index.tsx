import { Container } from "@mui/material"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Router from 'next/router'
import { useEffect } from "react";

import CronDetails from "../components/cron/CronDetails"

export default function Index() {
  const token = null

  useEffect(() => {
    if (!token) Router.push('./login')
  }, [token])

  if (!token) return null

  return <Home />
}

function Home() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Cronker
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="xl">
        <CronDetails />
      </Container>
    </>
  )
}
