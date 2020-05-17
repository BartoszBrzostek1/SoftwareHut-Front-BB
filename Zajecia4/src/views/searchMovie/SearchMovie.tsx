import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import movieService, { IMoviesProps } from '../../services/movies.service';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  table: {
    minWidth: '650px',
    background: 'lightblue'
    
  }
});



const SearchMovie = () => {
  const classes = useStyles();
  const [movies, setMovies] = React.useState<IMoviesProps | null>(null);
  const [movieToSearch, setMovieToSearch] = React.useState('');

  React.useEffect(() => {
    movieService.searchByName(movieToSearch).then(resp => {
      if (resp) {
        setMovies(resp);
      }
    });

    movieService.searchById('tt0848228');
  }, [movieToSearch]);


  return (
    <div style={{textAlign:'center'}}>
      
      <NavPanel/>
      
      <div style={{padding: '20px 20px 20px 20px'}}>
      <input
        
        placeholder="Enter movie name"
        
        onChange={event => setMovieToSearch(event.target.value)}
      />
      </div>
      

      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableBody>
            {!!movies?.movies.length &&
            movies?.movies.map(movie => (
              <TableRow key={movie.id}>
                <TableCell align="center">
                <div style={{border: '5px solid black', width: '500px', margin: 'auto auto'}}>
                <h2>{movie.title}</h2>
                <p>{movie.year}</p>
                
                  <img src={movie.poster}
                       alt={movie.title}/>
                </div>
                </TableCell>
                
              </TableRow>
            ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SearchMovie;
