import React, { Component } from "react";
import API from "../../../utils/API";
import Col from "../../../components/Grid/Col";
import Row from "../../../components/Grid/Row";
import Container from "../../../components/Grid/Container";
import Input from "../../../components/Form/Input";
import "./Wildfire.css";
import InputModal from "../../../components/Modal/inputModal";

class Wildfire extends Component {

    state = {
        Wildfire: [],
        title: "",
        author: "",
        link: "",
        body: "",
    }

    componentDidMount() {
        this.loadWildfire();
    }

    loadWildfire = () => {
        API.getWildfire()
            .then(res =>
                this.setState({ Wildfire: res.data, title: "", author: "", link: "", body: "" })
            ).catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author && this.state.body) {
            API.saveWildfire({
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
                            <h1 className="pageHeader">Wildfire Prep</h1>
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
                                    <h3 className="panel-title">Wildfires</h3>
                                </div>
                                <div className="panel-body scroll">
                                    Panel content
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

export default Wildfire;