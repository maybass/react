import movies from '../movies.json'

export function Movies() {
	
	return (
	<div>
	{movies.map((movie,i)=> {
		return (
		<li key={'movie_' + i}>{movie.name}</li>
		
		)
		
	})}
	</div>
	
	
	);
	
	
}