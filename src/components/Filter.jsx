import * as React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Typography } from '@mui/material';
import BasicTable from "../components/Table";
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
      } else {
        setItems([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
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
      <Autocomplete
        options={uniqueUserData}
        getOptionLabel={(option) => option.tenthPassingYear}
        filterOptions={filterOptions}
        sx={{ width: 300 }}
        onChange={(event, newValue) => setChoice(newValue)} 
        renderInput={(params) => <TextField {...params} label="Tenth Passing Year" />}
      />
      {
        userData.length > 0 ? (
          <BasicTable rows={userData} />
        ) : <BasicTable rows={items} />
      }
    </>
  );
}
