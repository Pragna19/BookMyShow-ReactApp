import  Container  from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import {useState} from "react"
import axios from "axios";
import Swal from "sweetalert2";

function Register() {
    const [userName, setUserName]= useState("");
    const [emailAddress, setEmailAddress]= useState("");
    const [password, setPassword]= useState("");

    function clearInput(){
      setUserName("");
      setPassword("");
      setEmailAddress("");
    }

    async function UserPost(){
      //console.log(emailAddress, password,userName);
      const userDetails = {
        "username": userName,
        "email": emailAddress,
        "password": password
      }
      //console.log(userDetails);
      const response = await axios.post("http://localhost:5000/user-register",userDetails).then(()=>{Swal.fire({
        title: '<strong>Submitted!</strong>',
        icon: 'success',
        showCloseButton: true,
      });
        clearInput()})
      .catch((err)=>Swal.fire({
        title: '<strong>ERROR</strong>',
        icon: 'error',
        showCloseButton: true,
      }));
      //console.log(response);
      Swal.fire({
       
      })
     
    }

  return (
    <div>
        <Container style={{padding:"8%"}}>
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>User name</Form.Label>
            <Form.Control value={userName} onChange={(e)=> setUserName(e.target.value)} placeholder="Enter user name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={emailAddress} onChange={(e)=> setEmailAddress(e.target.value)} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" onClick={UserPost}>
            Submit
            </Button>
        </Form> 
        </Container>
    </div>
  );
}

export default Register;