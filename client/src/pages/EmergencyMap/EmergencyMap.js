import React from 'react';
import API from "../../utils/API";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import Input from "../../components/Form/Input";
import "./EmergencyMap.css";
import InputModal from "../../components/Modal/inputModal";
import { Map, InfoWindow, Marker, GoogleApiWrapper, google } from 'google-maps-react';

export class EmergencyMap extends React.Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        locations: [
            {
                position: {
                    lat: 37.77,
                    lng: -122.4
                },
                name: "Michael",
                safe: "safe",
                needs: {
                    category: "None",
                    specifics: "Checked in as safe"
                }
            },
            {
                position: {
                    lat: 37.79,
                    lng: -122.389
                },
                name: "Renee",
                safe: "",
                needs: {
                    category: "Medical",
                    specifics: "Need insulin - fridge is broken, can't keep cool"
                }
            },
            {
                position: {
                    lat: 37.73,
                    lng: -122.42
                },
                name: "Brian",
                safe: "",
                needs: {
                    category: "Medical Assistance",
                    specifics: "tree limb fell on family member"
                }
            },
            {
                position: {
                    lat: 37.77,
                    lng: -122.45
                },
                name: "David H.",
                safe: "",
                needs: {
                    category: "Food",
                    specifics: "Only 1 day's supply left"
                },
            },
            {
                position: {
                    lat: 37.77,
                    lng: -122.49
                },
                name: "David",
                safe: "",
                needs: {
                    category: "Childcare",
                    specifics: "Running out of baby formula"
                }
            }
        ]
    }

    getPipColor = (needs) => {
        switch (needs) {
            case "None" || "unknown":
                console.log("Needs = None")
                return "https://maps.google.com/mapfiles/ms/icons/ltblue-dot.png"
                break;

            case "Medical Assistance":
                return "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
                break;

            case "Medical":
                return "https://maps.google.com/mapfiles/ms/icons/orange-dot.png"
                break;

            case "Childcare":
                return "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
                break;

            case "Food":
                return "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
                break;
        }
    }

    // componentDidMount () {
    //     API.getEmergencyData()
    //     .then(res => console.log(res))
    // Replace console.log with this.setState({
    //     locations: res.data.locations
    // })
    //}

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    render() {
        const markers = this.state.locations.map(
            location =>
                <Marker
                    onClick={this.onMarkerClick}
                    key={location.name}
                    name={location.name}
                    position={location.position}
                    safe={location.safe}
                    eCategory={location.needs.category}
                    eSpecifics={location.needs.specifics}
                    lat={location.position.lat}
                    lng={location.position.lng}
                    icon={{
                        url: this.getPipColor(location.needs.category)
                        //url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png"

                    }}
                //icon = {getPipColor(location.needs.category)}
                />)

        let mapStyle = {
            height: "500px",
            padding: '15px',
            marginBottom: '40px',
            border: "#666666 7px solid",
            borderRadius: "15px 30px"
        }
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-4">
                            <h1 className="pageHeader">Emergency Map</h1>
                        </Col>
                        <Col size="md-7" />
                    </Row>
                    <br /> <br /> <br />
                    <Row>
                        <Col size="md-2" />
                        <Col size="md-8">
                            <div id="emergencyMap">
                                <Map
                                    google={this.props.google}
                                    zoom={12}
                                    initialCenter={this.state.locations[0].position}
                                    style={mapStyle}
                                >

                                    {markers}

                                    <InfoWindow onClose={this.onInfoWindowClose} marker={this.state.activeMarker}
                                        visible={this.state.showingInfoWindow}>
                                        <div className="infoWindow">
                                            <h1 className="infoWindowText">Name: {this.state.selectedPlace.name}</h1>
                                            <h2 className="infoWindowText">Emergency Status: {this.state.selectedPlace.eCategory} </h2>
                                            <h3 className="infoWindowText">Comments: {this.state.selectedPlace.eSpecifics}</h3>
                                            <h4 className="infoWindowText">Location(Lat/Lon): {this.state.selectedPlace.lat}&deg;, {this.state.selectedPlace.lng}&deg;</h4>
                                        </div>
                                    </InfoWindow>

                                </Map>
                            </div>
                        </Col>
                        <Col size="md-2" />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyApz8tuOvqnvFFyonTrlaDeY4cu9oP54L0")
})(EmergencyMap)


