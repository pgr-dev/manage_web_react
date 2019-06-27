import React, {Component, Fragment} from 'react'

import './css/Section.css'
import './css/Register.css'
import * as example from '../JSonSample/Register.json'
/* Register.json : GET restaurants+ reviewer */

import * as detail from '../JSonSample/RegisterDetail.json'
/* Register.json : GET restaurants+ reviewer */

class Register extends Component{
    constructor(){
        super();
        this.state = {
            register_selector: "0",
            input_big:null,
            input_small:null,
            input_reject:null
        };

        this.setStateRegister=this.setStateRegister.bind(this);
        this.createRegisterList=this.createRegisterList.bind(this);
        this.createRegisterDetailList=this.createRegisterDetailList.bind(this);

    }

    setStateRegister(e){
        this.setState({
            register_selector:e.target.value
        });
    }
    createRegisterList(){
        var i=0;
        const tables = example["restaurants"].map((item)=>{
            return(<tr className="RegisterTableRow"  key={i} number={++i} value={item["id"]}>
                <td>{item["name"]}</td>
                <td>{item["reviewer"]}</td>
                <td>{item["date"]}</td>
            </tr>);

        });
        return tables;
    }

    createRegisterDetailList(){
        if(this.state==="0") return(<div></div>)
        else{
            return(
                <table className = "SignTable_unchange">
                    <tbody>
                <tr><td>주소</td><td>{detail["address"]}</td></tr>
                <tr><td>층</td><td>{detail["floor"]}</td></tr>
                <tr><td>음식점 이름</td><td>{detail["name"]}</td></tr>
                <tr><td>지점이름</td><td>{detail["branch_name"]}</td></tr>
                <tr><td>리뷰유형</td><td>{detail["possible_review_type"]}</td></tr>
                <tr><td>{""}</td></tr>
                <tr><td>등록자</td><td>{detail["reviewer"]}</td></tr>
                <tr><td>등록일시</td><td>{detail["register_time"]}</td></tr>
                </tbody>
            </table>
        );}
    }


    onChangeBig = (event)=>{this.setState({input_big:event.target.value});}
    onChangeSmall = (event)=>{this.setState({input_small:event.target.value});}
    onChangeReject = (event)=>{this.setState({input_reject:event.target.value});}

    onChangePer =()=>{
        console.log('input_big : ',this.state.input_big);
        console.log('input_small : ',this.state.input_small);
        console.log('input_reject : ',this.state.input_reject);
    }

    createRegisterPostList=()=>{
        return(
        <Fragment>

            <form >
                <table className = "SignTable_change">
                    <tbody>
                        <tr><td>대분류</td><td>
                            <input type="text" onChange={this.onChangeBig} value={this.input_big}/></td></tr>
                        <tr><td>소분류</td><td>
                            <input type="text" onChange={this.onChangeSmall} value={this.input_small}/></td></tr>
                        <tr><td>거절사유</td><td>
                            <input type="text" onChange={this.onChangeReject} value = {this.input_reject}/></td></tr>
                    </tbody>
                    </table>
            </form>
            
            <span>
                <button onClick={this.onChangePer}>등록허가</button>
                <button>등록거절</button>
            </span>
        </Fragment>
        );
    }


    render(){
        return(
            <Fragment>
            <div className = "section1">
            <span><h2>등록 확인 대기목록</h2><button>내 리뷰</button></span>
                <table className="ListTable">
                    <thead><tr>
                        <th>음식점 이름</th>
                        <th>등록자</th>
                        <th>등록일시</th>
                    </tr></thead>
                    <tbody>
                        {this.createRegisterList()}
                    </tbody>
                </table>
            </div>
            <div className = "section2">

                <div className= "Sign_wrapper">
                    <a className = "Sign_linker" href="#">
                    <img src = "http://www.shinailbo.co.kr/news/photo/201905/1169770_438401_2311.jpg"
                        width="400px" height="300px" alt="사진없음"/>
                    </a>
                </div>

                <div className = "SignTable_wrapper">
                    {this.createRegisterDetailList()}
                    {this.createRegisterPostList()}
                </div>
            </div>
            </Fragment>
        );
    }
}

export default Register;