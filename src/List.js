import React, { Component } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';

class List extends Component {
	render(){
		return(
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {this.props.places.map((place) => (
                    <Menu.Item key={place.key} className="lists">
                        {place.title}
                    </Menu.Item>
			    ))}
            </Menu>
		)
	}
}

export default List
