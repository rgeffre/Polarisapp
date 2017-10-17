import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

//Rendering navbar and buttons
  //configuring auth to display different buttons depending user being logged in

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
        <div>
          <Navbar fluid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Polaris Preparedness</a>
              </Navbar.Brand>
              <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'home')}
              >
                Home
              </Button>

              <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.goTo.bind(this, 'resource')}
              >
                Resource
              </Button>
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'blog')}
              >
                Blog
              </Button>

              {
                !isAuthenticated() && (
                    <Button
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={this.login.bind(this)}
                    >
                      Log In
                    </Button>
                )
              }

              {
                isAuthenticated() && (
                    <Button
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={this.goTo.bind(this, 'profile')}
                    >
                      Profile
                    </Button>
                )
              }
              {
                isAuthenticated() && (
                    <Button
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={this.goTo.bind(this, 'emergencyform')}
                    >
                      EmergencyForm
                    </Button>
                )
              }
              {
                isAuthenticated() && (
                    <Button
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={this.goTo.bind(this, 'emergencymap')}
                    >
                      EmergencyMap</Button>
                )
              }

              {
                isAuthenticated() && (
                    <Button
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={this.goTo.bind(this, 'ping')}
                    >
                      Ping
                    </Button>
                )
              }
              {
                isAuthenticated() &&  (
                    <Button
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={this.logout.bind(this)}
                    >
                      Log Out
                    </Button>
                )
              }
            </Navbar.Header>
          </Navbar>
        </div>
    );
  }
}

export default App;