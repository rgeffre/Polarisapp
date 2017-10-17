import React, { Component } from "react";
import API from "../../../utils/API";
import Col from "../../../components/Grid/Col";
import Row from "../../../components/Grid/Row";
import Container from "../../../components/Grid/Container";
import Input from "../../../components/Form/Input";
import "./Tornado.css";
import InputModal from "../../../components/Modal/inputModal";

class Tornado extends Component {

    state = {
        tornado: [],
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
            API.saveTornado({
                title: this.state.title,
                author: this.state.author,
                link: this.state.link,
                body: this.state.body
            }).then(res => this.loadDrone())
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
                            <h1 className="pageHeader">Tornado Prep</h1>
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
                                    <h3 className="panel-title">Tornados</h3>
                                </div>
                                <div className="panel-body scroll">
                                    <table style={{ width: "100%", borderBottom: 'solid' }}>
                                        <tr>
                                            <th>
                                                <div>
                                                    Tornado Preparedness at Work by OSHA
                                                <button className="btn btn-default btn-primary" style={{ marginLeft: "500px" }}>Save</button>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td><a href="https://www.osha.gov/dts/weather/tornado/preparedness.html" target="_blank">https://www.osha.gov/dts/weather/tornado/preparedness.html</a></td>
                                        </tr>
                                        <tr>
                                            <td>The following steps are recommended to help ensure the safety of personnel if a tornado occurs:
                                    Develop a system for knowing who is in the building in the event of an emergency.
                                    Establish an alarm system to warn workers.
                                    Test systems frequently.
                                    Develop plans to communicate warnings to personnel with disabilities or who do not speak English.
                                    Account for workers, visitors, and customers as they arrive in the shelter.
                                    Use a prepared roster or checklist.
                                    Take a head count.
                                    Assign specific duties to workers in advance; create checklists for each specific responsibility. Designate and train workers alternates in case the assigned person is not there or is injured.
                                    </td>
                                        </tr>
                                    </table>
                                    <table style={{ width: "100%", borderBottom: 'solid' }}>
                                        <tr>
                                            <th>
                                                <div>
                                                    What to Do During a Tornado Watch by Joe Smith
                                                    <button className="btn btn-default btn-primary" style={{ marginTop: '2px', marginLeft: "440px" }}>Save</button>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td><a href="https://www.illinois.gov/ready/hazards/Pages/Tornadoes.aspx" target="_blank">https://www.illinois.gov/ready/hazards/Pages/Tornadoes.aspx</a></td>
                                        </tr>
                                        <tr>
                                            <td>1. Listen to a battery-powered NOAA Weather Radio or your local radio or television stations for updated information.
                                        2. Be alert to rapidly-changing weather conditions. Watch for signs of a possible tornado.
                                        3. Know where your family members are. Use this opportunity to review your Family Emergency Plan. Even if a tornado does not strike, there is still the likelihood of severe weather conditions.</td>
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

export default Tornado;