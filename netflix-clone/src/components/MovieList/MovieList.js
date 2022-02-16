
import { Button, Container, Row, Card, Col } from 'react-bootstrap';
import Movie from '../Movie/Movie';
import { useState, useEffect } from 'react';
import Modalo from '../Movie/Modalo';
function MovieList(props) {
    const [cardInfo, setCardInfo] = useState({});
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);

    return (
        <>
      
        <Container className='div-container'>
        <Row md={3}>
            {
                props.data.length && props.data.map((ele) => {
                    let url="https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+ele.backdrop_path; 
               return(

               
                <Movie setShow={setShow}  setCardInfo={setCardInfo} title={ele.title} original_name={ele.original_name}  sourceUrl={url} />
                
                       
                   
               ) })
               
            }
        </Row>
    </Container>
    <Modalo cardInfo={cardInfo} show={show} handleClose={handleClose} />
    </>);
  }
  
  
  
  
  
  export default MovieList;