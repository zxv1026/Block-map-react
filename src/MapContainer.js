import React, { Component } from 'react';
import { Map , GoogleApiWrapper } from 'google-maps-react'

export class Container extends Component {

	render(){

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
                }}>
            </Map>
		)
	} 
}

export default GoogleApiWrapper({
	apiKey:'AIzaSyDUpWe96YFHRBHwOPik8IltqN3KruNfvTA'
})(Container)
