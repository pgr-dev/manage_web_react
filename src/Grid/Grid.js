import React, {Component} from 'react';
import './css/Grid.css'

import Nav from './Nav'
import Aside from './Aside'
import Section from './Section'

class Grid extends Component{
    constructor(){
        super();
        this.state = {
            nav_selector: "1",
            aside_selector:"11"
        };

        this.setStateNav=this.setStateNav.bind(this);
        this.setStateAside=this.setStateAside.bind(this);
    }


    setStateNav(data){
        this.setState({
            nav_selector:data
        });
        this.setState({
            aside_selector:data+"1"
        });
    }
    setStateAside(data){
        this.setState({
            aside_selector:data
        });
    }


    render(){
        console.log('nav : ', this.state.nav_selector);
        console.log('aside', this.state.aside_selector);
        return (
            <div className = "body_wrapper">
                <div className = "nav_wrapper">
                    <Nav
                        nav_selector={this.state.nav_selector}
                        setStateNav={this.setStateNav}
                        ></Nav>
                </div>
                <div className = "container_wrapper">
                    <div className="aside_wrapper">
                        <Aside
                            nav_selector={this.state.nav_selector}
                            aside_selector={this.state.aside_selector}
            
                            setStateAside={this.setStateAside}
                        ></Aside>
                    </div>
                    <div className="section_wrapper">
                       <Section
                            nav_selector={this.state.nav_selector}
                            aside_selector={this.state.aside_selector}
                            ></Section>
                    </div>
                </div>

            </div>
        )
    }


}

export default Grid;