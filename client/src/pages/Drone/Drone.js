import React, { Component } from "react";
import API from "../../utils/API";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import Input from "../../components/Form/Input";
import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem";
import { Link } from "react-router-dom";
import "./Drone.css";
import InputModal from "../../components/Modal/inputModal";


class Drone extends Component {

    state = {
        drone: [],
        name: "",
        zipCode: "",
        phoneNumber: "",
        comment: "",
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.zipCode && this.state.phoneNumber && this.state.comment) {
            API.saveDrone({
                name: this.state.name,
                zipCode: this.state.zipCode,
                phoneNumber: this.state.phoneNumber,
                comment: this.state.comment
            }).then(res => this.loadDrones())
                .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-4">
                            <h1 className="pageHeader">Drones</h1>
                        </Col>
                        <Col size="md-7" />
                    </Row>
                    <br /><br />

                    <div className="wrapper">
                        <InputModal>
                            <h2 className="pageHeader">
                                Add Your Drone
                            </h2>
                            <form>
                                <Input
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    placeholder="Name (required)"
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
                                <textarea
                                    style={{ width: "500px", height: "175px" }}
                                    name="comment"
                                    value={this.state.comment}
                                    onChange={this.handleInputChange}
                                    placeholder="Comment (required)"
                                />
                                <div style={{ textAlign: "right" }}>
                                    <button style={{ marginRight: "5px" }} onChange={this.handleInputChange} onClick={this.handleFormSubmit} className="blueBtn">Submit</button>
                                    <button className="blueBtn" onClick={this.closeModal}>Close</button>
                                </div>
                            </form>
                        </InputModal>
                    </div>
                    <br />
                    <Row>
                        <Col size="md-2" />
                        <Col size="md-8">
                            <div className="panel panel-default panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Drones</h3>
                                </div>
                                <div className="panel-body scroll blackText">
                                    <table style={{ width: "100%", borderBottom: 'solid' }}>
                                        <tr>
                                            <th>Joe Smith</th>
                                        </tr>
                                        <tr>
                                            <td>77004</td>
                                        </tr>
                                        <tr>
                                            <td>(555) 555-5555</td>
                                        </tr>
                                        <tr>
                                            <td>Custom built delivery drone available for disaster relief in greater Houston area.
                                        Capable of carrying 10 lbs, flight time of approx. 1 hour.</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </Col>
                        <Col size="md-2" />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Drone;