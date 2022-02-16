import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';
import MovieList from '../MovieList/MovieList';
import './Home.css'
// import SearchBox from './searchbox/SearchBox';
// import Modalo from './modal/Modalo';

function Home() {
    const [data, setData] = useState([]);
 

    // console.log(process.env.REACT_APP_BASE_URL);
    const getAllRecipes = async () => {
        // await // here the thing that will happen (fetching from API or getting from database )
        // return await axios.get(`${process.env.REACT_APP_BASE_URL}/recipes`)
        return await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=37ddc7081e348bf246a42f3be2b3dfd0&language=en-US`)
            .then(result => {
                console.log(result.data.results);
                return result.data.results;
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        void (async () => {
            let data = await getAllRecipes();
            setData(data);
        })();
    }, []);

    // setData( getAllRecipes());


    return (
        <>
            {/* <SearchBox setData={setData} /> */}
            <Container>
            <Col  md={50}>
           <MovieList  data={data}/>
           </Col>
            </Container>
          
            {
                // <Modalo cardInfo={cardInfo} show={show} handleClose={handleClose} />
            }
            {
                !data.length && <div><h2>No Such Results, Please try again later</h2></div>
            }
        </>
    )
}

export default Home;