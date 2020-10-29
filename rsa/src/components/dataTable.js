import React, { useState } from 'react';
import "./../styles/Table.css";
import { makeStyles, withStyles, theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import { green } from '@material-ui/core/colors';
import { yellow } from '@material-ui/core/colors';


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

const StyledTableRow = withStyles(() =>
  createStyles({
    root: {
      '&:nth-of-type(even)': {
        backgroundColor: "#f9fbe7",
      },
    },
  }),
)(TableRow);

  

export default function table() {
   
    return (
        <TableContainer>
      <Table className="table" size="small">
        <TableHead>
          <TableRow style={{borderBottom: "2px solid #9e9e9e" }}>
            <TableCell align="left">NAME
            <Tooltip align="right" title="Filter list">
                <IconButton aria-label="filter list">
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
              <span className="line"/>
            </TableCell>
            <TableCell align="left">SYNC STATUS
              <Tooltip align="right" title="Filter list">
                <IconButton aria-label="filter list">
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
              <span className="line"/>
            </TableCell>
            <TableCell align="left">USER'S DOMAIN
            <Tooltip align="right" title="Filter list">
                <IconButton aria-label="filter list">
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
              <span className="line"/>
            </TableCell>
            <TableCell align="left">DEFAULT
            <Tooltip align="right" title="Filter list">
                <IconButton aria-label="filter list">
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
              <span className="line"/>
            </TableCell>
            <TableCell align="left">LAST UPDATED
            <Tooltip align="right" title="Filter list">
                <IconButton aria-label="filter list">
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
              <span className="line"/>
            </TableCell>
            <TableCell align="left">UPDATED BY
            <Tooltip align="right" title="Filter list">
                <IconButton aria-label="filter list">
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
              <span className="line"/>
            </TableCell>
            <TableCell align="right">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody  className="Row">
          {rows.map((row) => (
            <StyledTableRow key={row.name} style={{color:"#ffffff"}}>
              <TableCell component="th" scope="row" style={{color:"#80aaff"}}>
                {row.name}
              </TableCell>
              <TableCell align="left" 
              style={row.status!=="Active" && row.status!=="Inactive" ? {color:"#80aaff"} : {color:"#000000"}}>
              {row.status}{row.status==="Failed" ? <ErrorIcon color='error' style={{float:"right"}}/> : null}
              {row.status==="Completed" ? <CheckCircleIcon style={{float:"right" , color: green[600]}}/> : null}
              {row.status==="Cancelled" ? <WarningIcon color='warning' style={{float:"right", color: yellow[800]}}/> : null}
              {row.status==="Queued" ? <WatchLaterIcon color='primary' style={{float:"right"}}/> : null}
              </TableCell>
              <TableCell align="left">{row.userDomain}</TableCell>
              <TableCell align="left">{row.defaultStatus}</TableCell>
              <TableCell align="left">{row.lastUpdated}</TableCell>
              <TableCell align="left">{row.updatedBy}</TableCell>
              <TableCell align="left"><Tooltip title="More">
                <IconButton aria-label="more">
                <MoreHorizIcon color='primary'/>
                </IconButton>
              </Tooltip></TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      );
}
