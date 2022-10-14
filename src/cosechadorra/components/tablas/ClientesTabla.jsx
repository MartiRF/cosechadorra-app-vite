import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const clienteDatos = {
    estado:'completo',// completo, pendiente, incompleto
    fecha:'19/11/21',
    hectareas:2,
    lugar:'San lucas',
    nombre:'Juanito Martinez',
    telefono:13241234,
}

const gastoDato = {
    descripcion:'Diseal 7lts',
    fecha:'18/11/21',
    monto:'$10,000',
    tipo:'combustible', //combustible, refacion, sueldos, otros
}
const entradaDato = {
    descripcion:'Cliente',
    fecha:'18/11/21',
    monto:'$10,000',
    tipo:'cliente'//cliente, otro 
}

const rows = [clienteDatos, clienteDatos, clienteDatos];

export const ClientesTabla = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Clientes</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Lugar</TableCell>
            <TableCell align="right">telefono</TableCell>
            <TableCell align="right">H</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.estado}</TableCell>
              <TableCell align="right">{row.fecha}</TableCell>
              <TableCell align="right">{row.lugar}</TableCell>
              <TableCell align="right">{row.telefono}</TableCell>
              <TableCell align="right">{row.hectareas}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}