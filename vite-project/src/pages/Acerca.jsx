import '../styles/Acerca.css';
import NestedList from '../components/NestedList';

function Acerca() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="title">
          Acerca de mí
        </h1>

        <div className="card">
          <p>
            <span className="label">
              Nombre:
            </span> Francisco Miguel Soberanes Franco
          </p>
        </div>

        <div className="card">
          <p>
            <span className="label">
              Carrera:
            </span> Licenciatura en informatica
          </p>
        </div>

        <div className="card">
          <p>
            <span className="label">
              Descripción <br /><br />
            </span> 
            Soy estudiando interesado en el aprendizaje de linux, el desarrollo web y desarrollo en inteligencia artificial. Me gustan muchos las computadoras y entender todo lo relacionado a ellas, junto con la programación, que busco aprender las tecnologías nuevas. Además de esto me gustan los videojuegos y realizar ejercicio o deporte en mi día a dia, además que me gusta aprender idiomas y leer algún que otro libro.
          </p>
        </div>

        <div className="container">
          <NestedList />
        </div>

        <div className="container">
          <img className="image" 
            src="https://images.unsplash.com/photo-1709429862860-630eb66fcf5e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGF0byUyMGJsYW5jb3xlbnwwfHwwfHx8MA%3D%3D" 
            alt="Foto de perfil"
          />
        </div>

      </div>
    </div>
  );
}

export default Acerca;
