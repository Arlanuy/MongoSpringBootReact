import {Card, CardTitle, Row, Col, CardBody, CardText, Container, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import React from 'react';

const Blog = ({blog}) => {
    console.log("current log is " + JSON.stringify(blog));
    return (
        <Card body inverse color="info">
            <CardBody>
                <CardTitle className="font-weight-bold">
                    {blog.title}
                </CardTitle>
                <CardText>{blog.content}</CardText>
                <Container>
                    <Link className="btn btn-primary" to="/update">
                        Edit
                    </Link>
                    <Button>
                        Delete
                    </Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Blog;