import {Card, CardTitle, Row, Col, CardBody, CardText, Container, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import base_url from './../service/serviceapi';
import { toast } from 'react-toastify';

const Blog = ({blogId, blog, update}) => {
    const deleteblog = () => {
        axios.delete(`${base_url}/delete/${blogId}`).then(response => {
            toast.info("!! Blog " + blog.title + " Deleted Successfully");
            update(blogId)
        }).catch(error => {
            toast.error("Something went wrong on the server upon deletion" + JSON.stringify(error.message));
        })
    }

    console.log("current log is " + JSON.stringify(blog));
    return (
        <Card body inverse color="info">
            <CardBody>
                <CardTitle className="font-weight-bold">
                    {blog.title}
                </CardTitle>
                <CardText>{blog.content}</CardText>
                <Container>
                    <Link className="btn btn-primary" to={{pathname: `/updateblog/${blog.blogId}`, param:`${blog.blogId}`}}>
                        Edit
                    </Link>
                    <Button color="danger" onClick={() =>
                        {
                            deleteblog(blog.blogId);
                        }
                    }>
                        Delete
                    </Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Blog;