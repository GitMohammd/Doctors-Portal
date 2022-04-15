import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import UseAuth from '../../../Context/Context/UseAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const {token} = UseAuth();
    const [success, setSuccess] = useState(false);
    const handleFormSubmit = e => {
      const user = {email}
        const url = `https://fierce-dusk-81451.herokuapp.com/user/admin`;
      fetch(url, { 
        method: "PUT",
      headers:  {
        'authorization': `Bearer ${token}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(user),
      })
      .then(res => res.json())
      .then(data => {
        setSuccess(true);
        setEmail('')
        console.log(data)})
      e.preventDefault();
    }
    const handleOnBlur = e => {
        setEmail(e.target.value)
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleFormSubmit}>
            <TextField 
            sx={{ width:'50%'}}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             onBlur={handleOnBlur}
             label="email"
             variant="standard" />
             <Button 
             type="submit"
             variant="contained">
                 Submit
            </Button>
             </form>
             {success && (
                    <Alert severity="success">Make Admin successfully</Alert>
                  )}
             


        </div>
    );
};

export default MakeAdmin;