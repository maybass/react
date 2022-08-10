import logo from './logo.svg';
import './App.css';
import { Header } from './componentes/Header'
import { Opiniones } from './componentes/Opiniones'
import { Cajitas } from './componentes/Cajitas'
import { Footer } from './componentes/Footer'
import movies from './movies.json'
import { Movies } from './componentes/Movies'
import { Boton } from './componentes/Boton'

function App() {
	const reiniciar = ()=> {
		
		console.log('usted a reiniciado un boton')
	}
	
	const aumentar = ()=> {
		console.log('usted ha aumentado')
	}
	
  return (
    <div className="App">
    <Header />
	<Opiniones 
	nombre="Agos"
	edad="34"
	apodo="Koki"
	/>
	<Opiniones 
	nombre="Osito"
	edad="2"
	apodo="Kito Koka"
	/>
	<Cajitas />
	<Footer />
	<Movies />
	<Boton 
	texto="Reiniciar"
	actividad={reiniciar}
	/>
	<Boton 
	texto="Aumentar"
	actividad={aumentar}
	/>
    </div>
  );
}

export default App;