import React, {components, useEffect,useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
import {firebase} from '../firebase'

const FormPage = () => {

  useEffect(() => {
      //firebase.auth().signOut().then(() => {/*console.log('Signed Out');*/}).catch(e=>{console.error('Sign Out Error', e);});
  }, [])

  const authlogin = () => {
    var email = document.getElementById("loginemail").value;
    var password = document.getElementById("loginpassword").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then((u) => {console.log(u);}).catch((err) => {alert(err.message);});
    
    
    }

    const authsignup = () => {

      var email = document.getElementById("loginemail").value;
      var password = document.getElementById("loginpassword").value;
      firebase.auth().createUserWithEmailAndPassword(email, password).then((u) => { firebase.auth().signInWithEmailAndPassword(email, password).then((u) => {/*console.log(u);*/}).catch((err) => {alert(err.message);});}).catch((err) => {alert(err.message);});

    }
    const authforgot = () => {

      var email = document.getElementById("loginemail").value;
      firebase.auth().sendPasswordResetEmail(email).then((u) => {alert("Email sent")}).catch((err) => {alert(err.message);});

    }


  return (<center>
    <MDBContainer className="mx-auto">
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <div className="header pt-3 peach-gradient">
              <MDBRow className="d-flex justify-content-center">
                <h3 className="white-text mb-3 pt-3 font-weight-bold">
                  Log in
                </h3>
              </MDBRow>
              
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Your email" group type="text" validate id="loginemail" />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                id="loginpassword"
                containerClass="mb-0"
              />
              <p className="font-small grey-text d-flex justify-content-end">
                Forgot
                <a
                  onClick={authforgot}
                  href="#!"
                  className="dark-grey-text ml-1 font-weight-bold"
                >
                  Password?
                </a>
              </p>
              <MDBRow className="d-flex align-items-center mb-4 mt-5">
                <MDBCol md="5" className="d-flex align-items-start">
                  <div className="text-center">
                    <MDBBtn
                      onClick={authlogin}
                      color="grey"
                      rounded
                      type="button"
                      className="z-depth-1a"
                    >
                      Log in
                    </MDBBtn>
                  </div>
                </MDBCol>
                <MDBCol md="7" className="d-flex justify-content-end">
                  <p className="font-small grey-text mt-3">
                    Don't have an account?
                    <a
                      onClick={authsignup}
                      href="#!"
                      className="dark-grey-text ml-1 font-weight-bold"
                    >
                      Sign up
                    </a>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer></center>
  );
};

export default FormPage;