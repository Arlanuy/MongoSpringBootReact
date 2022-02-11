import {Card, CardBody, Button, CardTitle, Row, Col, Input, Container} from 'reactstrap';
import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';
import base_url from './../service/serviceapi';
import { toast } from 'react-toastify';
import {useParams} from 'react-router-dom';

function UpdateBlog(props) {
    const [blog, setBlog] = useState({})
    const params = useParams();
    console.log("this  param is " + JSON.stringify(params));
    //load data from server by Id
    const getBlogFromServerById = () => {
        axios.get(`${base_url}/id/${params.index}`).then(response => {
            toast.success("Got to fetch first from the server the data with response of " + JSON.stringify(response));
            console.log(" This response of " + JSON.stringify(response));
            setBlog({...blog, title: response.data.title, content: response.data.content});
        }).catch(error => {
            toast.error("Failed to fetch first from the server");
        })
    }

    useEffect(() => {
        getBlogFromServerById();
    }, [])

    //posts data to server
    const putData = (blog) => { 
        axios.put(`${base_url}/update/`, blog).then(response => {
            toast.success("Updated blog with " + blog.id + "successfully");
        }).catch(error => {
            if (error.message) {
                toast.error("Server error : with message " + JSON.stringify(error.message));
            }
            })

    }
    
    const handleForm= (param) => {
        putData(blog)
        param.preventDefault();
    }

    return (
        <Card>
            <CardBody>
                <form onSubmit={handleForm}>
                    <CardTitle className="display-2">
                        Update Blog
                    </CardTitle>
                    <Input placeholder="Enter the Blog Title here." value={blog.title} onChange={param=> {
                        setBlog({...blog, title: param.target.value});
                    }}>
                        <br/>
                    </Input>

                    <Input type="textarea" rows="10"
                    placeholder="Enter the Blog Content here." value={blog.content} onChange={param=> {
                        setBlog({...blog, content: param.target.value});
                    }}>
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

export default UpdateBlog;