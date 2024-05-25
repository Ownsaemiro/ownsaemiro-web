import { useState, useEffect, useTransition, lazy} from "react";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Signup from './components/Signup';
import FindPW from './components/FindPW';
import './css/StartPage.css';
import logo from './assets/logo_main.svg';
import LogIn from './components/Login';
// Vite는 참조할 때 절대경로로 입력해야함
// 환경변수 : VITE_API_KEY = ''로 사용
// npm run-script dev

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true); // 버튼 클릭 시 상태를 업데이트
  };

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", height:"100vh", backgroundColor:"#E2E9F0"}}>
            {
            showForm ? (
                <LogIn/>
              ) : (
                <div>
                  <TitleContainer/>
                  <button className="start-button" onClick={handleButtonClick}>시작하기</button>
                  <img src={logo} alt="로고 출력 실패" style={{width: "30vw", height: "30vh", position:"absolute", top:"200px", right:"10%"}}/>
                </div>
              )
            }
            <TitleRectangle/>
          </div>
        }/>
        <Route path="signup" element={
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", height:"100vh", backgroundColor:"#E2E9F0"}}>
            <Signup/>
            <TitleRectangle/>
          </div>
        }/>
        <Route path="findPW" element={
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", height:"100vh", backgroundColor:"#E2E9F0"}}>
            <FindPW/>
            <TitleRectangle/>
          </div>
        }/>
      </Routes>
    </>
  );
}

function TitleContainer(){
  return (
    <div className="title-container">
      <div className="title" style={{fontSize:"1.7vw", marginLeft:"0.5vw"}}>안심 거래 플랫폼</div>
      <div style={{display:"flex", alignItems:"end"}}>
        <div className="title" style={{fontSize:"5vw", margin:"0px"}}>온새미로</div>
        <div className="title" style={{fontSize:"1.5vw", marginLeft:"15px", marginBottom:"5px"}}>OWNSAEMIRO</div>
      </div>
    </div>
  )
}

function TitleRectangle() {
  return (
    <div>
      {/* 왼쪽 위에서 오른쪽 아래로 내려가는 도형 */}
      <div className="title-rectangle13"></div>
      {/* 왼쪽 아래에서 오른쪽 위로 올라가는 도형 */} 
      <div className="title-rectangle24"></div>
    </div>
  );
};

export default App;
