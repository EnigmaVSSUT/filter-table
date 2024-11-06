import * as React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import BasicTable from "../components/Table";
import { Typography } from '@mui/material';
import { database } from '../../firebase'; 
import { ref, onValue } from 'firebase/database';

export default function Filter() {
  const [choice, setChoice] = useState(null); 
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemsRef = ref(database, 'users');
    const unsubscribe = onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const itemsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key]
        }));
        setItems(itemsArray);
        console.log(itemsArray);
      } else {
        setItems([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Box sx={{ height: '100vh' , width: '100vw' , display: 'flex' , justifyContent: 'center' , alignItems: 'center' }}>
    <CircularProgress />
  </Box>;
  }

  const uniqueUserData = Array.from(
    new Map(items.map(user => [user.tenthPassingYear, user])).values()
  );

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.tenthPassingYear,
  });

  const userData = choice
    ? items.filter(user => user.tenthPassingYear === choice.tenthPassingYear)
    : [];

  return (
    <>
    <Typography variant='h1' sx={{textAlign: 'center' , fontWeight: 'bold' ,  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }}}>APPLICATION FILTER PAGE</Typography>
      <Autocomplete
        options={uniqueUserData}
        getOptionLabel={(option) => option.tenthPassingYear}
        filterOptions={filterOptions}
        sx={{ width: 300 , marginBlock: '1rem'}}
        onChange={(event, newValue) => setChoice(newValue)} 
        renderInput={(params) => <TextField {...params} label="10th Passing Year" />}
      />
      {
        userData.length > 0 ? (
          <BasicTable rows={userData} />
        ) : <BasicTable rows={items} />
      }
    </>
  );
}
