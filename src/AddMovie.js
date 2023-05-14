import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddMovie({add}) {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [title, setTitle] = useState('');
const [description, setDescription] = useState("");
const [rate, setRate] = useState(0);
const [posterUrl, setPosterUrl] = useState("");

const handleTitle = (e) => {
    setTitle(e.target.value);
}
const handledes = (e) => {
    setDescription(e.target.value);
}
const handleRate = (e) => {
    setRate(e.target.value);
}

const handlePoster = (e) => {
    setPosterUrl(e.target.value);
}
const handleAdd = () => {
    const newMovie = { id: Math.random, title, description, rate, posterUrl, trailer: '' };
    add(newMovie);
    handleClose();
}

return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Add New Movie
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
                type="text"
                placeholder="Title"
                autoFocus onChange={handleTitle} 
            />
            </Form.Group>
            

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            <Form.Control
                type="text"
                placeholder="Description"
                autoFocus onChange={handledes} 
            />
            </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Rate</Form.Label>
            <Form.Control
                type="number"
                placeholder="Rate"
                autoFocus onChange={handleRate} 
            />

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>posterUrl</Form.Label>
            <Form.Control
                type="text"
                placeholder="Poster Url"
                autoFocus onChange={handlePoster} 
            />
            </Form.Group>
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            CLOSE
        </Button>
        <Button variant="primary" onClick={handleAdd}>
            ADD
        </Button>
        </Modal.Footer>
    </Modal>
    </>
);
}

export default AddMovie;