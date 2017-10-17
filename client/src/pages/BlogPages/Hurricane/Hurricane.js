import React, { Component } from "react";
import API from "../../../utils/API";
import Col from "../../../components/Grid/Col";
import Row from "../../../components/Grid/Row";
import Container from "../../../components/Grid/Container";
import Input from "../../../components/Form/Input";
import List from "../../../components/List/List";
import ListItem from "../../../components/List/ListItem";
import { Link } from "react-router-dom";
import "./Hurricane.css";
import InputModal from "../../../components/Modal/inputModal";

class Hurricane extends Component {

    state = {
        hurricane: [],
        title: "",
        author: "",
        link: "",
        body: "",
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author && this.state.body) {
            API.saveHurricane({
                title: this.state.title,
                author: this.state.author,
                link: this.state.link,
                body: this.state.body
            }).then(res => this.loadHurricanes())
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
                            <h1 className="pageHeader">Hurricane Prep</h1>
                        </Col>
                        <Col size="md-7" />
                    </Row>

                    <br /> <br />

                    <div className="wrapper">
                        <InputModal>
                            <h2 className="whiteText" style={{ textAlign: "center" }}>
                                Add a Blog Post
                            </h2>
                            <form>
                                <Input
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    placeholder="Title (required)"
                                />
                                <Input
                                    name="author"
                                    value={this.state.author}
                                    onChange={this.handleInputChange}
                                    placeholder="Author (required)"
                                />
                                <Input
                                    name="link"
                                    value={this.state.link}
                                    onChange={this.handleInputChange}
                                    placeholder="Link"
                                />
                                <textarea
                                    style={{ width: "500px", height: "175px" }}
                                    name="body"
                                    value={this.state.body}
                                    onChange={this.handleInputChange}
                                    placeholder="Add Your Post (required)"
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
                                    <h3 className="panel-title">Hurricanes</h3>
                                </div>
                                <div className="panel-body scroll blackText">
                                    <table style={{ width: "100%", borderBottom: 'solid' }}>
                                        <tr>
                                            <th>Know Your (Evacuation) Zone by Brian Martin
                                    <button className="btn btn-default btn-primary" style={{ marginLeft: "456px" }}>Save</button>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td><a href="https://blog.mass.gov/blog/safety/hurricane-preparedness-be-ready-before-the-storm/" target="_blank">https://blog.mass.gov/blog/safety/hurricane-preparedness-be-ready-before-the-storm/</a></td>
                                        </tr>
                                        <tr>
                                            <td>Coastal communities and areas around rivers and waterways that connect
                                         to the ocean have designated hurricane evacuation zones — Zone A, Zone B, and Zone C —
                                          based on their risk for storm surge flooding associated with tropical storms or hurricanes.
                                           Local or state officials will use the hurricane evacuation zones to call for people living,
                                            working, or vacationing in these areas to evacuate in the event of a tropical storm or
                                             hurricane.  If you know your zone, you and your family will be better prepared to
                                              evacuate.</td>
                                        </tr>
                                    </table>
                                    <table style={{ width: "100%", borderBottom: 'solid' }}>
                                        <tr>
                                            <th>REPAIR AND MAINTENANCE by Ken Jorgustin
                                    <button className="btn btn-default btn-primary" style={{ marginTop: '2px', marginLeft: "450px" }}>Save</button>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td><a href="http://modernsurvivalblog.com/weather-preparedness/a-hurricane-preparedness-list/" target="_blank">http://modernsurvivalblog.com/weather-preparedness/a-hurricane-preparedness-list/</a></td>
                                        </tr>
                                        <tr>
                                            <td>Plywood: Nailing plywood over windows is still the best option for protecting the inside of your house.
                                     Sand bags: If you live in a low area, especially, use sand bags to dispel water.
                                    Bring outside furniture indoors: Move patio furniture and pool toys into the garage.
                                    Turn off utilities if you leave: Before evacuating, shut off power, propane gas and water, but leave on natural gas unless told to do so by authorities.
                                    A licensed professional is the only one who can turn it back on.</td>
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

export default Hurricane;
