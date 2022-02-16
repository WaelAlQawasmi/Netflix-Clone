
import { Button, Container, Row, Card, Col } from 'react-bootstrap';

function Movie(ele) {
    let url="https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+ele.sourceUrl; 
    return (
       



           
               
                




                   <>
            <Card className='div-card'>
                <Card.Img className='div-card-img' variant="top" src={url} />
                <Card.Body>
                    <Card.Title className='div-card-title'>{ele.title}  {ele.original_name}</Card.Title>
                    <Card.Link className='div-card-link'>
                        
                    </Card.Link>
                    <div>
                        <Button className='div-card-button' variant="primary"
                            onClick={() => {
                                ele.setCardInfo(ele)
                                ele.setShow(true);
                            }}>Add To Favorite</Button>
                    </div>
                </Card.Body>
            </Card>



        </>
    );
}





export default Movie;