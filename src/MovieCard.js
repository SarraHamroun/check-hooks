import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react';


function MovieCard({movie}) {
return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.posterUrl} />
    <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text> {movie.description}</Card.Text>
        <Card.Text> Rating: {movie.rate}</Card.Text>
        <ReactStars value={movie.rate} edit={false} size={25}/>
        <Button variant="primary">Description</Button>
        <Button variant="primary">trailer</Button>

    </Card.Body>
    </Card>
)
;
}

export default MovieCard;