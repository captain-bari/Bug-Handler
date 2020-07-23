import React, { Fragment,useState} from "react";
import { MDBBtn,MDBCol, MDBFormInline, MDBIcon,MDBInput,MDBContainer   } from "mdbreact";
import {firebase} from '../../firebase'
import Project from './Project'


const Dashbord = props => {

  const [pid , setpid] = useState(false);

    const pidfalse = () => {setpid(false);}
    const create = () => {
        const db = firebase.firestore();
        db.settings({
        timestampsInSnapshots: true
                    });
        const userRef = db.collection("Projects").add({
        fullname: "hello",
        email: 10
        }).then((u) => {
          
          console.log(u.path.slice(9));
          setpid(u.path.slice(9));
          const db = firebase.firestore();
          db.collection("Projects")
        .doc(u.path.slice(9)).collection("List").add({
          fullname: "hello",
          email: 10
          });
        
        
        }).catch((err) => {alert(err.message);});

       
    }

    const open = () => {
        var code = document.getElementById("opencode").value;
        const db = firebase.firestore();
        db.settings({
        timestampsInSnapshots: true
                    });
       /* db.collection("Projects")
        .get()
        .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());;
        console.log(data); 
        });
        */


        db.collection("Projects")
        .doc(code)
        .get()
        .then(doc => {
            const data = doc.data();
            console.log(data);
            
            if(data)
            setpid(code);
            else
              alert("Project with this ID doesnt exist")
        }).catch((err) => {alert(err.message);});
        
    }

    return (
        <div>{ !pid ? (
        <Fragment >
        <br></br><br></br>
        <MDBBtn rounded outline onClick={create}>Create New Project</MDBBtn>
       <br></br>
       <MDBCol md="6">
                  <MDBFormInline className="md-form" style={{marginLeft : 540}}>
                    <MDBIcon icon="search" />
                    <input id="opencode" className="form-control form-control-ml ml-5 w-85 " type="text" placeholder="Input Project Code" aria-label="Search" />
                  </MDBFormInline>
                </MDBCol>
        <MDBBtn rounded outline color="info" onClick={open}>Open</MDBBtn>
        </Fragment>) : (<Project pid={pid} fun = {pidfalse}/>)}
        </div>
    );
}

export default Dashbord;