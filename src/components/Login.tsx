import { useState, useEffect, useTransition} from "react";
import { Routes, Route, Link } from "react-router-dom";
// import Signup from './Signup';
import '../css/StartPage.css';
import logo from '../assets/logo_login.svg';

function LogIn() {
  const [isSeller, setIsSeller] = useState(true);
  const [isManager, setIsManager] = useState(false);
  const [saveID, setSaveID] = useState("");
  const [savePW, setSavePW] = useState("");

  return (
    <div className="login">
      <div>
        <div style={{display:"flex"}}>
          <img src={logo} alt="로고 출력 실패" style={{alignSelf:"flex-start", marginBottom:"30px", color:"#576FD7"}}/>
          <div style={{ marginLeft: "auto", marginTop:"5px"}}>
            {/* 판매자 선택 버튼 */}
            <button
              className={`type-select ${isSeller ? 'seller-active' : ''}`}
              onClick={() => {
                setIsSeller(!isSeller);
                setIsManager(false);
                setSaveID("");
                setSavePW("");
              }}
            >
              판매자로 로그인
            </button><br/>

            {/* 관리자 선택 버튼 */}
            <button
              className={`type-select ${isManager ? 'seller-active' : ''}`}
              onClick={() => {
                setIsManager(!isManager);
                setIsSeller(false);
                setSaveID("");
                setSavePW("");
              }}
            >
              관리자로 로그인
            </button>
          </div>
        </div>
        
        {/* ID, PW 입력 Form */}
        <form>
          <div>
            <div style={{color: "#999"}}>아이디</div>
            <input type="text" name="ID" className="login-text" value={saveID}
              onChange={(e)=>{ setSaveID(e.target.value); }}/>
          </div>
          <div style={{ marginTop: "25px" }}>
            <div style={{color: "#999"}}>비밀번호</div>
            <input type="password" name="PW" className="login-text" value={savePW}
              onChange={(e)=>{ setSavePW(e.target.value); }}/>
          </div>
          <p><input type="submit" value="로그인" className="login-button" /></p>
        </form>

        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <button className="signup right-align">회원가입</button> | <button className="signup left-align">비밀번호 찾기</button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;