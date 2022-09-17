import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {PlayerContext} from '../context/context'

export default function ShowPlayer() {

  const [players]=React.useContext(PlayerContext)
  console.log(players);

// const players=provider.props.value[0]

  return (
    <TableContainer component={Paper} sx={{maxWidth: "900px",margin:"20px auto",boxShadow:"0px 0px 10px gray",borderRadius:"10px"}}>
      <h1 style={{textAlign:"center"}}>Cricket players</h1>
      
      <Table sx={{margin:"20px auto" }} aria-label="caption table">

        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:"bold"}}>ID</TableCell>
            <TableCell style={{fontWeight:"bold"}}>Player Name</TableCell>
            <TableCell style={{fontWeight:"bold"}}align="center">Player Country</TableCell>
            <TableCell style={{fontWeight:"bold"}}align="center">Total Matches Played</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {players.map((player) => (
            <TableRow key={player.id}>
              <TableCell component="th" scope="row">
                {player.id}
              </TableCell>
              <TableCell >{player.playerName}</TableCell>
              <TableCell align="center">{player.playerCountry}</TableCell>
              <TableCell align="center">{player.totalMatches}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
