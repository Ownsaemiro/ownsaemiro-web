import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo_main.svg';
import register from '../assets/logo_register.svg';
import ban from '../assets/logo_ban.svg';
import declare from '../assets/logo_declare.svg';
import logout from '../assets/logo_logout.svg';

import '../css/MainPage.css';

const sampleData = [
  { id: 1, applicant: '핫소스', username: 'hotsss', eventName: '핫소스유니버스탑업스토어', requestDate: '2024-04-20', eventDate: '2024-05-10~12', status: '승인 대기' },
  { id: 2, applicant: '핫소스', username: 'hotsss', eventName: '핫소스유니버스탑업스토어', requestDate: '2024-04-20', eventDate: '2024-05-10~12', status: '승인 거절' },
  { id: 3, applicant: '핫소스', username: 'hotsss', eventName: '핫소스유니버스탑업스토어', requestDate: '2024-04-20', eventDate: '2024-05-10~12', status: '승인 허가' },
  { id: 4, applicant: '핫소스', username: 'hotsss', eventName: '핫소스유니버스탑업스토어', requestDate: '2024-04-20', eventDate: '2024-05-10~12', status: '승인 허가' },
  { id: 5, applicant: '핫소스', username: 'hotsss', eventName: '핫소스유니버스탑업스토어', requestDate: '2024-04-20', eventDate: '2024-05-10~12', status: '승인 거절' },
  { id: 6, applicant: '핫소스', username: 'hotsss', eventName: '핫소스유니버스탑업스토어', requestDate: '2024-04-20', eventDate: '2024-05-10~12', status: '승인 대기' },
  { id: 7, applicant: '핫소스', username: 'hotsss', eventName: '핫소스유니버스탑업스토어', requestDate: '2024-04-20', eventDate: '2024-05-10~12', status: '승인 대기' },
  { id: 8, applicant: '핫소스', username: 'hotsss', eventName: '핫소스유니버스탑업스토어', requestDate: '2024-04-20', eventDate: '2024-05-10~12', status: '승인 대기' },
];

function MainPage(){
  return(
    <div className="container">
      <Manager/>
    </div>
  )
}

export default MainPage;

function Manager() {
  const [data, setData] = useState(sampleData);
  const [isRegister, setIsRegister] = useState(true); // 행사 등록 요청 목록 useState
  const [isBan, setIsBan] = useState(false); // 사용자 정지 목록 useState
  const [isDeclare, setIsDeclare] = useState(false); // 사용자 신고 목록 useState
  const [selectedStatus, setSelectedStatus] = useState('전체');

  const navigate = useNavigate();

  // const handleApprove = (id: React.ChangeEvent<HTMLInputElement>) => {
  //   setData(data.map(item => item.id === id ? { ...item, status: '승인 허가' } : item));
  // };

  // const handleReject = (id: React.ChangeEvent<HTMLInputElement>) => {
  //   setData(data.map(item => item.id === id ? { ...item, status: '승인 거절' } : item));
  // };

  const filteredData = selectedStatus === '전체' ? data : data.filter(item => item.status === selectedStatus);

  return (
    <>
      <aside className="sidebar">
        <img src={logo} alt="로고 출력 실패" style={{width:"60px", height:"60px", margin:"10px 10px 80px 10px"}}/>
        <div>
          <div className={`menu-select ${isRegister?'active':''}`}
          onClick={
            () => {
              setIsRegister(true);
              setIsBan(false);
              setIsDeclare(false);
            }
          }>
            <img src={register} alt="등록 사진 실패" className="menu-image"/>
            <div className="menu-item">행사 등록 요청 목록</div>
          </div>
          <div className={`menu-select ${isBan?'active':''}`}
          onClick={
            () => {
              setIsRegister(false);
              setIsBan(true);
              setIsDeclare(false);
            }
          }>
            <img src={ban} alt="정지 사진 실패" className="menu-image"/>
            <div className="menu-item">사용자 정지 목록</div>
          </div>
          <div className={`menu-select ${isDeclare?'active':''}`} 
          onClick={
            () => {
              setIsRegister(false);
              setIsBan(false);
              setIsDeclare(true);
            }
          }>
            <img src={declare} alt="신고 사진 실패" className="menu-image"/>
            <div className="menu-item">사용자 신고 목록</div>
          </div>
        </div>
        <div className="user">
          <span className="username">관리자 님</span>
          <img src={logout} alt="로그아웃 사진 실패" className="logout-button" 
          onClick={() => {
            if(confirm("로그아웃 하시겠습니까?")){
              navigate('/');
            }
          }}/>
        </div>
      </aside>
      <main className="main-content">
        <h1 style={{color:"#555"}}>행사 등록 요청 목록</h1>
        <div className="filter">
          <div className="filter-item">
            <div style={{color: "#999", fontWeight: "bold", marginBottom:"5px"}}>검색</div>
            <input type="text" style={{border:"2px solid #E5E5E5", borderRadius:"5px"}}/>
          </div>
          <div className="filter-item">
            <div style={{color: "#999", fontWeight: "bold", marginBottom:"5px"}}>승인 상태</div>
            <select value={selectedStatus} style={{border:"2px solid #E5E5E5", borderRadius:"5px"}}
            onChange={(e) => setSelectedStatus(e.target.value)}>
              <option value="전체">전체</option>
              <option value="승인 대기">승인 대기</option>
              <option value="승인 허가">승인 허가</option>
              <option value="승인 거절">승인 거절</option>
            </select>
          </div>
        </div>
        <table style={{borderRadius:"5px"}}>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>신청자명</th>
              <th>아이디</th>
              <th>공연명</th>
              <th>신청일</th>
              <th>공연일</th>
              <th>승인 상태</th>
              {/* <th>승인</th>
              <th>승인 거절</th> */}
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <tr key={item.id}>
                <td><input type="checkbox" /></td>
                <td>{item.applicant}</td>
                <td>{item.username}</td>
                <td>{item.eventName}</td>
                <td>{item.requestDate}</td>
                <td>{item.eventDate}</td>
                <td className={item.status === '승인 거절' ? 'rejected' : item.status === '승인 허가' ? 'approved' : ''}>{item.status}</td>
                {/* <td><button onClick={() => handleApprove(item.id)}>승인</button></td>
                <td><button onClick={() => handleReject(item.id)}>승인 거절</button></td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button>&lt;</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>...</button>
          <button>10</button>
          <button>&gt;</button>
        </div>
      </main>
    </>
  )
}

function Seller() {
  return (
    <>
    </>
  )
}