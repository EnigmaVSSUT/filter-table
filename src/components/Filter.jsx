import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { users } from '../../data';
import BasicTable from "../components/Table"

const uniqueUserData = Array.from(
  new Map(users.map(user => [user.jobDetails, user])).values()
);

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.jobDetails,
});


export default function Filter() {
  const [choice, setChoice] = useState("");
  const userData = users.filter(user => user.jobDetails === choice)
  return (
    <>
      <Autocomplete
        options={uniqueUserData}
        getOptionLabel={(option) => option.jobDetails}
        filterOptions={filterOptions}
        sx={{ width: 300 }}
        onChange={(event) => setChoice(event.target.textContent)}
        renderInput={(params) => <TextField {...params} label="Custom filter" />}
      />
      {
        userData.length > 0 && (
          <BasicTable rows={userData} />
        )
      }
    </>
  );
}
