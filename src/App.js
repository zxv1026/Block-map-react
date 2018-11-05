import React, { Component } from 'react';
import './App.css';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import { Layout, Icon } from 'antd';
import 'antd/dist/antd.css';
import List from './List'
import MapContainer from './MapContainer'
const { Header, Content, Sider } = Layout;

class App extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        places:[
            {key:'place0',title:'杭州市人民政府',location:{lat:30.2743848,lng:120.1553389}},
            {key:'place1',title:'西湖风景区',location:{lat:30.2248842,lng:120.0957525}},
            {key:'place2',title:'西溪湿地公园',location:{lat:30.268996,lng:120.0670349}},
            {key:'place3',title:'武林银泰百货',location:{lat:30.2682717,lng:120.1638917}},
            {key:'place4',title:'南山路文化艺术休闲特色街',location:{lat:30.2365945,lng:120.1585018}},
            {key:'place5',title:'奥体博览中心主体育场',location:{lat:30.227117,lng:120.2278136}},
            {key:'place6',title:'阿里巴巴杭州总部',location:{lat:30.18963,lng:120.190216}},
            {key:'place7',title:'杭州动物园',location:{lat:30.21950399999999,lng:120.130941}},
            {key:'place8',title:'京杭大运河广场',location:{lat:30.317547,lng:120.142420}},
            {key:'place9',title:'杭州半山国家森林公园',location:{lat:30.362593,lng:120.187658}}
        ],
        query: '',
    }

    toggle = () => {
        this.setState({
        collapsed: !this.state.collapsed,
        })
    }

    updateQuery(query) {
        this.setState({ query: query.trim() })
    }

    clearQuery = (query) => {
        this.setState({ query: '' })
    }

    render() {
        const { places, query } = this.state

        let showingContacts
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingContacts = places.filter((place) => match.test(place.title))
        } else {
            showingContacts = places
        }

        showingContacts.sort(sortBy('title'))

        return (
        <Layout>
            <Sider
                trigger={null}
                collapsed={this.state.collapsed}
            >
                <div id="searchBox">
                    <input
                        id="address"
                        type="text" 
                        value={query}
                        placeholder="Station location"
                        onChange={(event)=>this.updateQuery(event.target.value)}/>
                </div>

                {showingContacts.length !== places.length && (
                    <div className='showing-contacts'>
                        <span>Now showing {showingContacts.length} of {places.length} total</span>
                        <button onClick={this.clearQuery}>Show all</button>
                    </div>
                )}

                <List 
                    places={showingContacts}
                />
            </Sider>
            <Layout>
                <Header style={{ background: '#000', padding: 0 }}>
                    <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                            style={{cursor: 'pointer'}}
                        />
                    </span>
                    <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>Block map</span>
                </Header>
                
                <MapContainer
                    places={showingContacts}
                />
                
            </Layout>
        </Layout>
        )
    }
}

export default App;
