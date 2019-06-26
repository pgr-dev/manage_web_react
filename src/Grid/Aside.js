import React, {Component} from 'react'
import './css/Aside.css'

const aside_informations_list = {
    "1":[
        {id:"11", name:'등록 확인 대기목록'},
        {id:"12", name:'컨펌 대기목록'},
        {id:"13", name:'추가 조사 대기목록'}, 
    ],
    "2":[
        {id:"21", name:"개발중"}
    ]
}

class Aside extends Component{
    setAside = (e) =>{
        this.props.setStateAside(e.target.value);
    }

    aside_elements_generate=(e)=>{
        const aside_elements = aside_informations_list[this.props.nav_selector].map((item)=>{
            if(item.id===this.props.aside_selector)  // 문자로 전송되기 때문에 숫자로 변환 필요.
              {return <button className="aside_item button active" key={item.id} value={item.id} onClick={this.setAside}>{item.name}</button>}
            else
            {return <button className="aside_item button" key={item.id} value={item.id} onClick={this.setAside}>{item.name}</button>}
            });

        return aside_elements;
    }

    render(){
        return (
            <div className="Aside">
                {this.aside_elements_generate()}
            </div>
        );
    }
}
export default Aside;