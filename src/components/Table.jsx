import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>fullName</TableCell>
            <TableCell align="right">address</TableCell>
            <TableCell align="right">tenthPassingYear</TableCell>
            <TableCell align="right">twelfthPassingYear</TableCell>
            <TableCell align="right">twelfthSpecialisation</TableCell>
            <TableCell align="right">diplomaSpecialisation</TableCell>
            <TableCell align="right">additionalSkills</TableCell>
            <TableCell align="right">tenthCertificateUrl</TableCell>
            <TableCell align="right">twelfthCertificateUrl</TableCell>
            <TableCell align="right">contactNumbers</TableCell>
            <TableCell align="right">aadhaarnumber</TableCell>
            <TableCell align="right">emailid</TableCell>
            <TableCell align="right">picurl</TableCell>
            <TableCell align="right">aadhaarurl</TableCell>
            <TableCell align="right">jobDetails</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.address}
              </TableCell>
              <TableCell align="right">{row.tenthPassingYear}</TableCell>
              <TableCell align="right">{row.twelfthPassingYear}</TableCell>
              <TableCell align="right">{row.twelfthSpecialisation}</TableCell>
              <TableCell align="right">{row.diplomaSpecialisation}</TableCell>
              <TableCell align="right">{row.additionalSkills}</TableCell>
              <TableCell align="right">{row.tenthCertificateUrl}</TableCell>
              <TableCell align="right">{row.twelfthCertificateUrl}</TableCell>
              <TableCell align="right">{row.contactNumbers}</TableCell>
              <TableCell align="right">{row.aadhaarnumber}</TableCell>
              <TableCell align="right">{row.emailid}</TableCell>
              <TableCell align="right">{row.picurl}</TableCell>
              <TableCell align="right">{row.aadhaarurl}</TableCell>
              <TableCell align="right">{row.jobDetails}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}