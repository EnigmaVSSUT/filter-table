import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Stack } from '@mui/material';


export default function BasicTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>Picture</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>Full Name</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>Email Id</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>Address</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>Contact Number</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>10th Passing Year</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>12th Passing Year</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>Aadhar</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>10th Certificate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">
                <img
                  src={row.picurl}
                  alt={row.fullName}
                  height={'50px'}
                  className="w-16 h-16 rounded-full object-cover"
                /></TableCell>
              <TableCell align="center">{row.fullName}</TableCell>
              <TableCell align="center">{row.emailid}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.contactNumbers}</TableCell>
              <TableCell align="center">{row.tenthPassingYear}</TableCell>
              <TableCell align="center">{row.twelfthPassingYear || "N/A"}</TableCell>
              <TableCell align="center" >
                <a
                  href={row.aadhaarurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download = 'aadhaar.pdf'
                  style={{
                    textDecoration: 'none',
                    color: '#1976d2',
                  }}
                >
                  <Stack direction={'row'} justifyContent={'center'}> Download <FileDownloadIcon fontSize="small" style={{ marginLeft: 4 }} /></Stack>
                </a>
              </TableCell>
              <TableCell align="center" >
                <a
                  href={row.tenthCertificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download = 'tenthCertificate.pdf'
                  style={{
                    textDecoration: 'none',
                    color: '#1976d2',
                  }}
                >
                  <Stack direction={'row'} justifyContent={'center'}> Download <FileDownloadIcon fontSize="small" style={{ marginLeft: 4 }} /></Stack>
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}