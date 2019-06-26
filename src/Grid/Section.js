import React, {Component} from 'react'

import Register from '../Section/Register'
import Confirm from '../Section/Confirm'
import Injection from '../Section/Injection'
class Section extends Component{
    render(){
        if(this.props.nav_selector==="1")
        {
            switch(this.props.aside_selector){
                case "11":return(<Register></Register>);
                case "12":return(<Confirm></Confirm>);
                case "13":return(<Injection></Injection>)
                default : return(<InPreparation></InPreparation>);
            }
        }
        else{
            return(<InPreparation></InPreparation>);
        }
    }
}
export default Section;


class InPreparation extends Component{

    render(){
        return (
            <h3> 준비중 </h3>
        );
    }
}