import {Card, CardBody, Button, CardTitle, Row, Col, Input, Container} from 'reactstrap';
import React from 'react';
const AddBlog = () => {
    console.log("passed here in addblog00");
    return (
        <Card>
            <CardBody>
                <form onSubmit="#">
                    <CardTitle className="display-2">
                        New Blog
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

export default AddBlog