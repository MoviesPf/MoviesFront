import { useSelector, useDispatch } from 'react-redux';
import { getProgramsByGenre } from './actions';

const Genders = () => {
  const dispatch = useDispatch();
  const programs = useSelector((state) => state.filterPrograms); // Usamos el estado filterPrograms para mostrar los programas filtrados
  const allGenres = useSelector((state) => state.programs); // Usamos el estado programs para obtener todos los géneros disponibles

  const handleGenreClick = (genreName) => {
    dispatch(getProgramsByGenre(genreName));
  };

  const handleShowAll = () => {
    // Para mostrar todos los programas sin filtrar, puedes llamar a la acción con un valor nulo o vacío.
    dispatch(getProgramsByGenre('')); // Esto podría variar según cómo esté configurada tu API en el backend.
  };

  return (
    <div>
      <h1>Géneros</h1>
      <div>
        <button onClick={handleShowAll}>Mostrar Todos</button>
        {allGenres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => handleGenreClick(genre.name)}
          >
            {genre.name}
          </button>
        ))}
      </div>

      <h2>Programas</h2>
      <div>
        {programs.map((program) => (
          <div key={program.id}>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genders;


const genders = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]