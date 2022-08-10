export function Boton( {actividad, texto} ) {
	return (
	<div>
	<button onClick={actividad}>{texto}</button>
	</div>
	
	)
	
}