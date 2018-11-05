import React, { Component } from 'react';
import { Map , Marker , GoogleApiWrapper } from 'google-maps-react'

export class Container extends Component {

	render(){
        const { places } = this.props

        var bounds = new this.props.google.maps.LatLngBounds();
        for (var i = 0; i < places.length; i++) {
            bounds.extend(places[i].location);
        }

		if(!this.props.loaded){
			return <div className="loading">Loading...</div>
		}

		return(
            <Map
                google={this.props.google}
                zoom={12}
                initialCenter={{
                    lat: 30.2743848,
                    lng: 120.1553389
                }}
                bounds={bounds}>
                {places.map((place) =>( 
	            	<Marker	
	            		key={place.key}
	            		title={place.title}
                        position={place.location}
	            	/>
	            ))}
            </Map>
		)
	} 
}

export default GoogleApiWrapper({
	apiKey:'AIzaSyDUpWe96YFHRBHwOPik8IltqN3KruNfvTA'
})(Container)
