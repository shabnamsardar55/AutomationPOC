import React, { useState } from 'react';
import "./../styles/Table.css";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



function createData(name, status, userDomain, defaultStatus, lastUpdated, updatedBy , actions) {
  return { name, status, userDomain, defaultStatus, lastUpdated, updatedBy , actions};
}

const rows = [
  createData('CORP','Active','CORP',' ','10/15/2018 11:28:00 PM', 'Steve, Bipin Domy',' ' ),
  createData('Local Computer','Active','USXXLETTEJL1C',' ','10/15/2018 11:28:00 PM', 'Thomas, Abin',' ' ),
  createData('Incident Management LDAP','Inactive','EMC',' ','10/15/2018 11:28:00 PM', 'S, Karthika',' ' ),
  createData('Admin Dashboard LDAP','Failed','CORP',' ','10/15/2018 11:28:00 PM', 'Steve, Bipin Domy',' ' ),
  createData('Incident Management LDAP','Completed','USXXLETTEJL1C',' ','10/15/2018 11:28:00 PM', 'Thomas, Abin',' ' ),
  createData('Business Impact analysis LDAP','Cancelled','USXXLETTEJL1C',' ','10/15/2018 11:28:00 PM', 'S, Karthika',' ' ),
  createData('Incident Management LDAP','Queued','CORP',' ','10/15/2018 11:28:00 PM', 'George, Adam',' ' ),
];


  

export default function table() {
    return (
        <TableContainer>
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell align="right">SYNC STATUS</TableCell>
            <TableCell align="right">USER'S DOMAIN</TableCell>
            <TableCell align="right">DEFAULT</TableCell>
            <TableCell align="right">LAST UPDATED</TableCell>
            <TableCell align="right">UPDATED BY</TableCell>
            <TableCell align="right">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.userDomain}</TableCell>
              <TableCell align="right">{row.defaultStatus}</TableCell>
              <TableCell align="right">{row.lastUpdated}</TableCell>
              <TableCell align="right">{row.updatedBy}</TableCell>
              <TableCell align="right">{row.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      );
}
