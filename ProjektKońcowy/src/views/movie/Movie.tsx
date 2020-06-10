import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel';
import movieService, { IMoviesProps, IMovieResponse } from '../../services/movies.service';
import { useParams } from "react-router-dom";



const Movie = () => {

    const [info, setInfo] = React.useState<IMovieResponse | null>(null);
    const {id}=useParams<{id: string}>();
    
    React.useEffect(() => {
        movieService.searchById(id).then(resp => {
          if (resp) {
            setInfo(resp);  
          }
        });
      }, []);

    return (
        <div>
            <NavPanel />
            
            

        </div>
    );
};

export default Movie;