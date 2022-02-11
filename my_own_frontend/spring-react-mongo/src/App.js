import logo from './logo.svg';
import './App.css';
import {Card, CardTitle, Row, Col,} from 'reactstrap';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from './components/Menu.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AllBlog from './components/AllBlog.js';
import AddBlog from './components/AddBlog.js';
import UpdateBlog from './components/UpdateBlog.js';
function App() {
  console.log("hey");
  return (
    <div className="App">
      <Card body inverse style={{backgroundColor: '#333', borderolor: '#333'}}>
        <ToastContainer/>
        

        
        <Router>
          
          <CardTitle className="display-2">
            Arlan's Blog
          </CardTitle>
        <Row>
          <Col>
              <Menu/>
          </Col>
        </Row>
        <Row>
            <Col>
              <Routes>
                <Route exact path="/" element={<AllBlog/>} />
                
                <Route path="/addblog" element={<AddBlog/>}/>
                <Route path="/updateblog/:index" element={<UpdateBlog/>}/>
                
              </Routes>
            </Col>
        </Row>
        
        </Router>
        
      </Card>
    </div>
  );
}

export default App;
