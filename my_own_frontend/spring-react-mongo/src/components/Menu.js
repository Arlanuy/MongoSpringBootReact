import React from 'react';
import {ListGroup, Row, Col, Container} from 'reactstrap';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <ListGroup>
            <Container>
                <Row>
                    <Col>
                        <Link to="/" className="list-group-item" style={{backgroundColor:"gray", color:"white"}}>Home</Link>
                        <br/>
                        <Link to="/addblog" className="list-group-item" style={{backgroundColor:"gray", color:"white"}}>Add a Blog</Link>
                        <br/>
                        <Link to="/updateblog" className="list-group-item" style={{backgroundColor:"gray", color:"white"}}>Update a Blog</Link>
                        <br/>
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </ListGroup>
    )
}

export default Menu;