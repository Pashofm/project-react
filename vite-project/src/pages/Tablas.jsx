import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import '../App.css'

// MUI
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

/* Helpers */
const createTable = (nombre, apellido, edad) => {
  return { nombre, apellido, edad }
}

/* Data Table */
const rows = [
  createTable('Francisco Miguel', 'Soberanes Franco', 21),
  createTable('Jesus Daniel', 'Jimenez Guerrero', 21),
  createTable('Zarek de Jesus', 'Rodriguez Gonzales', 22),
  createTable('Angel Santiago', 'Salazar Segura', 22),
  createTable('Carlos Eduardo', 'Osuna Osuna', 21),
]

function Tablas() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 10) {
      alert('Contador valor máximo')
      setCount(10)
    }

    if (count < 0) {
      alert('Contador valor mínimo')
      setCount(0)
    }
  }, [count])

  return (
    <div>
      <h1>Contenido principal</h1>

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>

        <button 
          className="counter"
          onClick={() => setCount(count + 1)}
        >
          Aumentar valor
        </button>

        <button 
          className="counter"
          onClick={() => setCount(count - 1)}
        >
          Disminuir valor
        </button>

        <button
          className="counter"
        >
          Valor contador {count}
        </button>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} arial-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="right">Apellido</TableCell>
                <TableCell align="right">Edad</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row, index) => (
                <TableRow 
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0} }}
                >
                  <TableCell component="th" scope="row">
                    {row.nombre}
                  </TableCell>
                  <TableCell align="right">
                    {row.apellido}
                  </TableCell>
                  <TableCell align="right">
                    {row.edad}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </div>
  )
}

export default Tablas
