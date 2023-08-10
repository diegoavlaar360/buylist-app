import { Box, Typography, Button} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginComponent = () => {

    const navigate = useNavigate();
    const onClickLogin = () =>{
        navigate('buylist')
    }

  return (
    <>
        <Box>
            <Typography variant='h2'>
                Login
            </Typography>
        </Box>
        <Box>
            <Button onClick={onClickLogin}>
                Login
            </Button>
        </Box>
    </>
  )
}