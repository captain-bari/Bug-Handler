import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {firebase} from '../../firebase'
import { MDBBadge, MDBContainer } from "mdbreact";
import { MDBBtn } from "mdbreact";
import { MDBInputGroup } from "mdbreact";
import List from './list';



const Project= props => {

    const add = () => {
        var pname = document.getElementById("pname").value;
        var line = document.getElementById("line").value;
        var file = document.getElementById("file").value;
        var code = document.getElementById("code").value;
        var priority = document.getElementById("priority").value;
        const db = firebase.firestore();
        db.settings({
        timestampsInSnapshots: true
                    });
        db.collection("Projects")
        .doc(props.pid).collection("List").add({
            Name : pname, Line : line , File : file , Code : code, Priority : priority
        }).then(doc => {alert("Bug added")}).catch((err) => {alert(err.message);});
    }

    return (
        <div>
            
            <Card className="text-center" style={{marginLeft : 330 , width : "1000px"}}>
            <Card.Body>
            <Card.Title>Project ID : <MDBBadge color="light">{props.pid} </MDBBadge></Card.Title>
            <Card.Text>
                <MDBContainer>
                <MDBInputGroup material containerClassName="mb-3 mt-0"  hint="Bug Title" id="pname"/>
                <MDBInputGroup material containerClassName="mb-3 mt-0"  hint="Bug at Line" id="line"/>
                <MDBInputGroup material containerClassName="mb-3 mt-0"  hint="File Name" id="file"/>
                <MDBInputGroup
                        material
                        className="mb-0"
                        hint="Code Snippet"
                        type="textarea" id="code"/>
                 <MDBInputGroup material containerClassName="mb-3 mt-0"  hint="Priority" id="priority"/>
                       
                </MDBContainer>
            </Card.Text>
            <MDBBtn rounded outline color="success" onClick={add}>Add Bug</MDBBtn>
               
            </Card.Body>
            <Card.Footer className="text-muted"> <Button variant="warning" onClick ={() => props.fun()}>Exit Project</Button><Button variant="danger">Delete Project</Button></Card.Footer>
            </Card>
            <br></br><br></br>
            <List pid={props.pid}/>

        </div>
    );
}

export default Project;