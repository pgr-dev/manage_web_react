import React, {Component, Fragment} from 'react'

import './css/Section.css'
import './css/Register.css'
import * as example from '../JSonSample/Register.json'
/* Register.json : GET restaurants+ reviewer */

import * as detail from '../JSonSample/RegisterDetail.json'
/* Register.json : GET restaurants+ reviewer */

class Register extends Component{
    state = {
        register_selector: "0"
    }
    setStateRegister = (e)=>{
        this.setState({
            register_selector:e.target.value
        });
    }
    createRegisterList = () => {
        var i=0;
        const tables = example["restaurants"].map((item)=>{
            return(<tr className="RegisterTableRow" number={++i} value={item["id"]}>
                <td>{item["name"]}</td>
                <td>{item["reviewer"]}</td>
                <td>{item["date"]}</td>
            </tr>);

        });
        return tables;
    }

    createRegisterDetailList = () => {
        if(this.state==="0") return(<div></div>)
        else{
            return(
                <table className = "SignTable_unchange">
                <tr><td>주소</td><td>{detail["address"]}</td></tr>
                <tr><td>층</td><td>{detail["floor"]}</td></tr>
                <tr><td>음식점 이름</td><td>{detail["name"]}</td></tr>
                <tr><td>지점이름</td><td>{detail["branch_name"]}</td></tr>
                <tr><td>리뷰유형</td><td>{detail["possible_review_type"]}</td></tr>
                <tr><td>{""}</td></tr>
                <tr><td>등록자</td><td>{detail["reviewer"]}</td></tr>
                <tr><td>등록일시</td><td>{detail["register_time"]}</td></tr>
            </table>
        );}
    }






    render(){
        return(
            <Fragment>
            <div className = "section1">
            <span><h2>등록 확인 대기목록</h2><button>내 리뷰</button></span>
                <table className="ListTable">
                    <thead>
                        <th>음식점 이름</th>
                        <th>등록자</th>
                        <th>등록일시</th>
                    </thead>
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
                    <table className = "SignTable_change">
                        <tr>
                            <td>대분류</td>
                            <td>0</td>
                        </tr>
                        <tr> <td></td></tr>
                        <tr>
                            <td>소분류</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>거절사유</td>
                            <td>0</td>
                        </tr>
                    </table>
                    <span>
                        <button>등록허가</button>
                        <button>등록거절</button>
                    </span>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default Register;