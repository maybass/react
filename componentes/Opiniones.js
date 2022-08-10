export function Opiniones( { nombre , edad , apodo } ) {
	
	return (
	<div className="contenedor-opiniones">
	<ul className="lista-opiniones">
	<li className="item-opiniones">{nombre}</li>
	<li className="item-opiniones">{edad}</li>
	<li className="item-opiniones">{apodo}</li>
	</ul>
	</div>
	);
	
	
}