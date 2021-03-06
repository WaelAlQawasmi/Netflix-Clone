import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

import axios from 'axios';
import {useRef} from 'react';

function Modalo({ cardInfo, show, handleClose }) {

    const commentInputRef = useRef("");

     console.log(cardInfo);

    const addToFav = async () => {
        let comment = commentInputRef.current.value;
        let fav = { title: cardInfo.title, overview: cardInfo.sourceUrl }

        await axios.post(`https://movie-wael.herokuapp.com/addMovie`, fav)
            .then(() => {
                console.log("Done :) ");
            }).catch((err) => {
                console.log(err);
            });

    }

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <h3>{cardInfo.title}</h3>
                    <img style={{ height: "10vh" }} alt="" src={cardInfo.sourceUrl} />
                    <div>
                        <label htmlFor="op">Write Your Opinion</label>
                           <input ref={commentInputRef} placeholder="Write Your Opinion" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary"
                     onClick={()=>{
                        addToFav();
                        handleClose();
                     }}
                    > Add To Favorite </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modalo;