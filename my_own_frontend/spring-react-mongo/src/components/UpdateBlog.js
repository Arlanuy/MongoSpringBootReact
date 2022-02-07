import {Card, CardBody, Button, CardTitle, Row, Col, Input, Container} from 'reactstrap';
import React from 'react';
const UpdateBlog = () =>{
    return (
        <Card>
            <CardBody>
                <form onSubmit="#">
                    <CardTitle className="display-2">
                        Update Blog
                    </CardTitle>
                    <Input placeholder="Enter the Blog Title here." onChange="#">
                        <br/>
                    </Input>

                    <Input type="textarea" rows="10"
                    placeholder="Enter the Blog Content here." onChange="#">
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