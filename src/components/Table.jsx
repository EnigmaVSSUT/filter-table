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
            <TableCell align="right">picurl</TableCell>
            <TableCell align="right">fullName</TableCell>
            <TableCell align="right">emailid</TableCell>
            <TableCell align="right">address</TableCell>
            <TableCell align="right">contactNumbers</TableCell>
            <TableCell align="right">tenthPassingYear</TableCell>
            <TableCell align="right">twelfthPassingYear</TableCell>
            <TableCell align="right">aadhaarurl</TableCell>
            <TableCell align="right">tenthCertificateUrl</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">
                <img 
                src={row.picurl} 
                alt={row.fullName}
                height={'100px'} 
                className="w-16 h-16 rounded-full object-cover"
              /></TableCell>
              <TableCell align="right">{row.fullName}</TableCell>
              <TableCell align="right">{row.emailid}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.contactNumbers}</TableCell>
              <TableCell align="right">{row.tenthPassingYear}</TableCell>
              <TableCell align="right">{row.twelfthPassingYear || "N/A"}</TableCell>
              <TableCell align="right"><a
                href={row.aadhaarurl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Aadhaar Document
              </a>
              </TableCell>
              <TableCell align="right">
                <a
                href={row.tenthCertificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                10th Certificate
              </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}