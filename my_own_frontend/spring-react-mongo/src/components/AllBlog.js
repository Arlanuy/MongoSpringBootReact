import {Card, CardTitle, Row, Col,} from 'reactstrap';
import React, { useEffect } from 'react';
import Blog from './Blog.js'
import { useState } from 'react';
import axios from 'axios';
import base_url from './../service/serviceapi';
import { toast } from 'react-toastify';

const AllBlog = () => {

    const [blogs, setBlogs] = useState([
        
    ])
    console.log("blogs are " + JSON.stringify(blogs));

    useEffect(() => {
        getAllBlogsFromServer();
    }, [])

    const updateBlogs = (blogId) => {
        setBlogs(blogs.filter((blog) => blog.id !== blogId
        ));
        console.logs("filtered blogs are " + JSON.stringify(blogs));
    }

    const getAllBlogsFromServer = () => {
        axios.get(`${base_url}/all`).then(response => {
            console.log(response.data);
            setBlogs(response.data);
            toast.success("All blogs loaded from server!!");
        }).catch( error=> {
            console.log("error encountered");
            toast.error("Something went wrong on Server we are loaded");
        }
            )
    }

    return (
        [
        
        <Card body inverse color="info">
            <CardTitle className="display-2">
                All Blogs
            </CardTitle>
            {
                blogs.length>0?
                    blogs.map((blog) => {
                        console.log("passed blog with content of " + JSON.stringify(blog) );
                        return <Blog key={blog.blogId} blogId={blog.blogId} blog={blog}  update={updateBlogs}/>
                    })
                    :"No blogs available to Show"
            }
        </Card>
        ]
    )
}

export default AllBlog