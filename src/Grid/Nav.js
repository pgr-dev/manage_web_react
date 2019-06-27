import React, {Component,Fragment} from 'react';
import './css/Nav.css'
const nav_informations = [
    {id:"1", name:'Editor'},
    {id:"2", name:'준비중'}];

class Nav extends Component{
    constructor(){
        super();
        this.setNav=this.setNav.bind(this);
    }

    setNav(e)
    {
        this.props.setStateNav(e.target.value);
    }

    render(){
        const nav_elements = nav_informations.map((item)=>{
            if(item.id===this.props.nav_selector)// to check active element
                {return <button className="nav_item button active"
                 key={item.id} value={item.id} onClick={this.setNav}>
                 {item.name}</button>   }
            else
            {return <button className="nav_item button"
             key={item.id} value={item.id} onClick={this.setNav}>
             {item.name}</button>   }
        });
        

        return(
            <Fragment>
            <div className="general_nav">
                {nav_elements}
            </div>
            <div className = "mypage">
                <button className="nav_item button" key="0" value="0" >myPage</button>
            </div>
            </Fragment>
        )
    }
}
export default Nav;