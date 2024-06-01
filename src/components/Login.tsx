import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../css/StartPage.css';
import logo from '../assets/logo_login.svg';

function LogIn() {
  const [isSeller, setIsSeller] = useState(true);
  const [isManager, setIsManager] = useState(false);
  const [saveID, setSaveID] = useState("");
  const [savePW, setSavePW] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    // 여기에 실제 로그인 로직 추가 (API 호출 등)
    if (isSeller) { // 판매자 로그인
      if (saveID === "1234" && savePW === "1234") {
        alert("판매자 로그인 성공");
        navigate('/mainpage');
      } else {
        alert("아이디 또는 비밀번호가 올바르지 않습니다.");
      }
    } else if (isManager) { // 관리자 로그인
      if (saveID === "managerID" && savePW === "managerPW") {
        alert("관리자 로그인 성공");
        // navigate('/mainpage');
      } else {
        alert("아이디 또는 비밀번호가 올바르지 않습니다.");
      }
    } else {
      alert("로그인 유형을 선택해주세요.");
    }
  };

  return (
    <div className="login">
      <div>
        <div style={{display:"flex"}}>
          <img src={logo} alt="로고 출력 실패" style={{marginBottom:"30px", color:"#576FD7"}}/>
          <div style={{ marginLeft: "auto", marginTop:"10px"}}>
            {/* 판매자 선택 버튼 */}
            <button
              className={`type-select ${isSeller ? 'select-active' : ''}`}
              style={{marginBottom:"5px"}}
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
              className={`type-select ${isManager ? 'select-active' : ''}`}
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
        <form onSubmit={handleLogin}>
          <div>
            <div className="label">아이디</div>
            <input type="text" name="ID" className="login-text" value={saveID}
              onChange={(e)=>{ setSaveID(e.target.value); }}/>
          </div>
          <div style={{ marginTop: "25px" }}>
            <div className="label">비밀번호</div>
            <input type="password" name="PW" className="login-text" value={savePW}
              onChange={(e)=>{ setSavePW(e.target.value); }}/>
          </div>
          <p><input type="submit" value="로그인" className="login-button" /></p>
        </form>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:"20px"}}>
          <button className="signup-button right-align" onClick={()=>{navigate('/signup')}}>회원가입</button> 
          |
          <button className="signup-button left-align" onClick={()=>{navigate('/findPW')}}>비밀번호 찾기</button> 
        </div>
      </div>
    </div>
  );
}

export default LogIn;