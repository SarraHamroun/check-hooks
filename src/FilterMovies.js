import React from 'react'
import Form from 'react-bootstrap/Form';
import { InputGroup } from "react-bootstrap";


const FilterMovies = ({inputSearch, setInputSearch, newRate, setNewRate}) => {
return (
    <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">
    </InputGroup.Text>
    <Form.Control
    placeholder="Search Movie by Title ..." type='text'
    value={inputSearch}
    onChange={(e) => setInputSearch(e.target.value)}
    />
    <Form.Control
    placeholder="Search Movie by Rate ..." type='number' max={5}
    onChange={(e) => setNewRate(e.target.value)}
    />
</InputGroup>


)
}

export default FilterMovies