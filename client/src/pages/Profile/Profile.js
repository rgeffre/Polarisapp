import React, { Component } from "react";
import API from "../../utils/API";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import Input from "../../components/Form/Input";
import "./Profile.css";
import InputModal from "../../components/Modal/inputModal";


//Creating profile page

class Profile extends Component {
  state = {
    name: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    email: ""
  };

  //Setting up form input

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.loadUser();
  }

//Loading user profile and getting auth tokens
  loadUser() {
    const { auth } = this.props;

    API.getProfile(auth.getAccessToken())
      .then(res => this.setState({ ...res.data }))
      .catch(err => console.log(err));
  }


  //Setting up form submission with auth

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.name &&
      this.state.address &&
      this.state.city &&
      this.state.state &&
      this.state.zipCode &&
      this.state.phoneNumber &&
      this.state.email
    ) {
      const { auth } = this.props;

      API.saveProfile(auth.getAccessToken(), {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode,
        phoneNumber: this.state.phoneNumber,
        email: this.state.email
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

//Rendering the form

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="md-1" />
            <Col size="md-4">
              <h1 className="pageHeader">My Profile</h1>
            </Col>
            <Col size="md-7" />
          </Row>
          <br />
          <Row>
            <div className="wrapper">
              <strong>
                <p className="blackText">
                  Welcome to your profile page. You are able to update your user
                  information, review your saved posts, and accesss your
                  emergency status form.
                </p>
              </strong>
            </div>
          </Row>

          <br />
          <br />

          <Row>
            <Col size="md-5">
              <div className="panel panel-default panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">My Posts</h3>
                </div>
                <div className="panel-body scroll">Panel content</div>
              </div>
            </Col>
            <Col size="md-2">
              <div className="wrapper">
                <InputModal>
                  <h2 className="whiteText">Add/Update User Information</h2>
                  <Input
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    placeholder="Name (required)"
                  />
                  <Input
                    name="address"
                    value={this.state.address}
                    onChange={this.handleInputChange}
                    placeholder="Address (required)"
                  />
                  <Input
                    name="city"
                    value={this.state.city}
                    onChange={this.handleInputChange}
                    placeholder="City (required)"
                  />
                  <Input
                    name="state"
                    value={this.state.state}
                    onChange={this.handleInputChange}
                    placeholder="State (required)"
                  />
                  <Input
                    name="zipCode"
                    value={this.state.zipCode}
                    onChange={this.handleInputChange}
                    placeholder="Zip Code (required)"
                  />
                  <Input
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={this.handleInputChange}
                    placeholder="Phone Number (required)"
                  />
                  <Input
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    placeholder="Email (required)"
                  />
                  <div style={{ textAlign: "right" }}>
                    <button
                      style={{ marginRight: "5px" }}
                      onClick={this.handleFormSubmit}
                      className="blueBtn"
                    >
                      Submit
                    </button>
                    <button className="blueBtn" onClick={this.closeModal}>
                      Close
                    </button>
                  </div>
                </InputModal>
              </div>
              <div>
                <h4>{this.state.name}</h4>
                <h4>{this.state.address}</h4>
                <h4>{this.state.city}</h4>
                <h4>{this.state.state}</h4>
                <h4>{this.state.zipCode}</h4>
                <h4>{this.state.phoneNumber}</h4>
                <h4>{this.state.email}</h4>
              </div>
            </Col>
            <Col size="md-5">
              <div className="panel panel-default panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Favorites</h3>
                </div>
                <div className="panel-body scroll">Panel content</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
