import {Card, CardBody, Button, CardTitle, Row, Col, Input, Container} from 'reactstrap';
import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import base_url from './../service/serviceapi';
import { toast } from 'react-toastify';
const AddBlog = () => {
    const[blog, setBlog] = useState({});

    const postData = (blog) => {
        console.log("blog in postdata is " + JSON.stringify(blog));
        axios.post(`${base_url}/create`, blog, {headers:{
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods': 'POST',
             'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(response => {
            toast.success("Created blog with " + blog.id + "successfully");
        }).catch(error => {
            if (error.message) {
                toast.error("Server error : with message " + JSON.stringify(error.message));
            }
        })
    } 

    const handleForm= (param) => {
        postData(blog)
        param.preventDefault();
    }
    console.log("passed here in addblog00");
    return (
        <Card>
            <CardBody>
                <form onSubmit={handleForm}>
                    <CardTitle className="display-2">
                        New Blog
                    </CardTitle>
                    <Input placeholder="Enter the Blog Title here." onChange={(e) => setBlog({...blog, title:e.target.value})}>
                        <br/>
                    </Input>

                    <Input type="textarea" rows="10"
                    placeholder="Enter the Blog Content here." onChange={(e) => setBlog({...blog, content:e.target.value})}>
                        <br/>
                    </Input>
                    <Container>
                        <Button type="submit" color="success" style={{marginRight:15+"px"}}>
                            Post Blog
                        </Button>
                        <Button type="reset" color="warning">
                            Clear
                        </Button>
                    </Container>
                </form>
            </CardBody>
        </Card>
    )
}

export default AddBlog