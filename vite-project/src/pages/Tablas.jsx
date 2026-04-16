import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tablas = () => {
  return (
    <div>
    <h1>Contenido principal</h1>
      
       const createTable = ( nombre, apellido, edad ) => {
          return { nombre, apellido, edad };
       }

        const rows = [
          createTable('Francisco Miguel', 'Soberanes Franco', 21),
          createTable('Jesus Daniel', 'Jimenez Guerrero', 21),
          createTable('Zarek de jesus', 'Rodriguez Gonzales', 22),
          createTable('Angel Santiago', 'Salazar segura', 22),
          createTable('Carlos eduardo', 'Osuna Osuna', 21),
        ];

        const App = () => {
          const [count, setCount] = useState(0)

          /* Asignar valor maximo y minimo al contador */
          useEffect(() => {
            if( count > 10 ){
              alert('Contador valor maximo');
              setCount((count) => count = 10);
            } 
            if ( count < 0 ) {
              alert('Contador valor minumo');
              setCount((count) => count = 0);
            }
          }, [count])

          return (
            <>
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
            onClick={() => setCount((count) => count + 1)}
            >
            Aumentar valor
            </button>
            <button
            className="counter"
            onClick={() => setCount((count) => count - 1)}
            >
            Disminuir valor
            </button>

            <button
            className="counter"
            >
            Valor contador {count}
            </button>

            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Apellido;(g)</TableCell>
            <TableCell align="right">Edad;(g)</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
              <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row">
              {row.nombre}
              </TableCell>
              <TableCell align="right">{row.apellido}</TableCell>
              <TableCell align="right">{row.edad}</TableCell>
              </TableRow>
            ))}
            </TableBody>
            </Table>
            </TableContainer>
            </section>

            <div className="ticks"></div>

            <section id="next-steps">
            <div id="docs">
            <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
            </svg>
            <h2>Documentation</h2>
            <p>Your questions, answered</p>
            <ul>
            <li>
            <a href="https://vite.dev/" target="_blank">
            <img className="logo" src={viteLogo} alt="" />
            Explore Vite
            </a>
            </li>
            <li>
            <a href="https://react.dev/" target="_blank">
            <img className="button-icon" src={reactLogo} alt="" />
            Learn more
            </a>
            </li>
            </ul>
            </div>
            <div id="social">
            <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
            </svg>
            <h2>Connect with us</h2>
            <p>Join the Vite community</p>
            <ul>
            <li>
            <a href="https://github.com/vitejs/vite" target="_blank">
            <svg
            className="button-icon"
            role="presentation"
            aria-hidden="true"
            >
            <use href="/icons.svg#github-icon"></use>
            </svg>
            GitHub
            </a>
            </li>
            <li>
            <a href="https://chat.vite.dev/" target="_blank">
            <svg
            className="button-icon"
            role="presentation"
            aria-hidden="true"
            >
            <use href="/icons.svg#discord-icon"></use>
            </svg>
            Discord
            </a>
            </li>
            <li>
            <a href="https://x.com/vite_js" target="_blank">
            <svg
            className="button-icon"
            role="presentation"
            aria-hidden="true"
            >
            <use href="/icons.svg#x-icon"></use>
            </svg>
            X.com
            </a>
            </li>
            <li>
            <a href="https://bsky.app/profile/vite.dev" target="_blank">
            <svg
            className="button-icon"
            role="presentation"
            aria-hidden="true"
            >
            <use href="/icons.svg#bluesky-icon"></use>
            </svg>
            Bluesky
            </a>
            </li>
            </ul>
            </div>
            </section>

            <div className="ticks"></div>
            <section id="spacer"></section>
            </>
          )
        }
      }
    </div>
  );
}

export default Tablas;
