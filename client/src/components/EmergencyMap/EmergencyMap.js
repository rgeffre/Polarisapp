import React from 'react';
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
                    category: "none",
                    specifics: "none"
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
                    category: "medical",
                    specifics: "insulin"
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
                    category: "medical assistance",
                    specifics: "tree limb fell on family member"
                }
            },
            {
                position: {
                    lat: 37.77,
                    lng: -122.45
                },
                name: "David1",
                safe: "",
                needs: {
                    category: "food",
                    specifics: "only 1 day's supply left"
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
                    category: "childcare",
                    specifics: "running out of baby formula"
                }
            }
        ]
    }

    getPipColor = (needs) => {
        switch (needs) {
            case "none" || "unknown":
                console.log("Needs = None")
                return "./pips/ltblue-dot.png"
                break;

            case "medical assistance":
                return "./pips/red-dot.png"
                break;

            case "medical":
                return "./pips/orange-dot.png"
                break;

            case "childcare":
                return "./pips/yellow-dot.png"
                break;

            case "food":
                return "./pips/green-dot.png"
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

    render = () => {
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
                        url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
                        
                    }}
                //icon = {getPipColor(location.needs.category)}
                />)

        return (
            <Map
                google={this.props.google}
                zoom={12}
                initialCenter={this.state.locations[0].position}
            >

                {markers}

                <InfoWindow onClose={this.onInfoWindowClose} marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div className="infoWindow">
                        <h1>Name: {this.state.selectedPlace.name}</h1>
                        <h2>Emergency Status: {this.state.selectedPlace.eCategory} - {this.state.selectedPlace.eSpecifics}</h2>
                        <h3>Location(Lat/Lon): {this.state.selectedPlace.lat}&deg;, {this.state.selectedPlace.lng}&deg;</h3>
                    </div>
                </InfoWindow>

            </Map>


        )
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyApz8tuOvqnvFFyonTrlaDeY4cu9oP54L0")
})(EmergencyMap)