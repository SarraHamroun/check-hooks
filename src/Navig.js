import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navig() {
return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">description</Nav.Link>
            <Nav.Link href="#pricing">trailer</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    </>
);
}

export default Navig;