import React, { Fragment,useState,useEffect} from "react";
import { MDBBtn,MDBCol, MDBFormInline, MDBIcon,MDBInput} from "mdbreact";
import {firebase} from '../../firebase'
import { MDBContainer, MDBAlert } from 'mdbreact';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

const List = props => {
   

    

    const [d_id , updateids] = useState([]);
    const [d_data , updatedata] = useState([]);
    const key =[];
    const files=[];
    const remove = (num) => {

        firebase.firestore().collection("Projects").doc(props.pid).collection("List").doc(d_id[num]).delete().then(function() {
            alert("deleted")
        }).catch(function(error) {
            alert("Error removing document: ", error);
        });

    }

    
   firebase.firestore().collection("Projects").doc(props.pid).collection("List").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
            key.push(doc.id);
            files.push(doc.data());
        });
      
        if(d_id.length != key.length){updateids(key); updatedata(files);}
    });

    console.log(d_id);
    console.log(d_data);

      
    return (
    <div id="list">

       

        <br></br>
        
    {d_data.map((object, i) => 
    
    /////////////////////
    <div>
   
  <Accordion defaultActiveKey="0" style={{marginLeft : 330}}>
    <Card>
    <Card.Header>{object.Name}</Card.Header>
   <Card.Body  style={{textAlign : 'left'}}>
    File Name : {object.File}<br></br>
    Line no : {object.Line}<br></br>
    Priority : {object.Priority}<br></br>
    Code Snippet : <br></br>{object.Code}
           
    </Card.Body>
    <Card.Footer className="text-muted"><Button variant="danger" onClick={()=>remove(i)}>Remove BUG</Button></Card.Footer>
    </Card><br></br>
  </Accordion>

  </div>
  
    //////////////
    
    )}
   
        
        
       
    </div>
    );
}

export default List;