import React, { Component } from "react";
import {GoogleApiWrapper, Map, Marker } from 'google-maps-react'

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map zoom={13} google={this.props.google} className="google-maps"
            initialCenter={{lat: 41.16466, lng: -8.620057}}>
          <Marker position={{lat: 41.16466, lng: -8.620057}}/>
   
          {/*<InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>*/}
        </Map>
      )
    }
  }
  export default GoogleApiWrapper({
    apiKey: ('AIzaSyBcKL6DQi4YDMDjLbYOxP5BgnepdGcJBg4')
  })(MapContainer)