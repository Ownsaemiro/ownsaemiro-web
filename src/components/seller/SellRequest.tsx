import React, { useState } from "react";
import plus from "../../assets/logo_plus.svg";
import "../../css/MainPage.css";
import { SellHistoryData } from "./Data/SellHistoryData";

function SellRequest() {
  const [data, setData] = useState(SellHistoryData);
  const [selectedStatus, setSelectedStatus] = useState("전체");

  const filteredData =
    selectedStatus === "전체"
      ? data
      : data.filter((item) => item.status === selectedStatus);

  return (
    <main className="main-content">
      <h1 style={{ color: "#555" }}>판매 이력</h1>
      <div className="filter-table-header">
        <div className="filter">
          <div className="filter-item">
            <div
              style={{ color: "#999", fontWeight: "bold", marginBottom: "5px" }}
            >
              검색
            </div>
            <input
              type="text"
              style={{ border: "2px solid #E5E5E5", borderRadius: "5px" }}
            />
          </div>
          <div className="filter-item">
            <div
              style={{ color: "#999", fontWeight: "bold", marginBottom: "5px" }}
            >
              상태
            </div>
            <select
              value={selectedStatus}
              style={{ border: "2px solid #E5E5E5", borderRadius: "5px" }}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="전체">전체</option>
              <option value="승인 대기">승인 대기</option>
              <option value="승인 완료">승인 완료</option>
              <option value="승인 거절">승인 거절</option>
            </select>
          </div>
        </div>
        <div className="table-header">
          <button className="btn approve">
            <img
              src={plus}
              alt="plus icon"
              style={{ width: "16px", height: "16px", marginRight: "8px" }}
            />
            작성 하기
          </button>
          <button className="btn reject">요청 취소</button>
        </div>
      </div>
      <table style={{ borderRadius: "5px" }}>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>공연명</th>
            <th>신청자명</th>
            <th>신청일</th>
            <th>공연일</th>
            <th>좌석 수</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.eventName}</td>
              <td>{item.applicant}</td>
              <td>{item.requestDate}</td>
              <td>{item.eventDate}</td>
              <td>{item.seatstatus}</td>
              <td
                className={
                  item.status === "승인 대기"
                    ? "stanby"
                    : item.status === "승인 완료"
                    ? "approved"
                    : item.status === "승인 거절"
                    ? "rejected"
                    : ""
                }
              >
                {item.status}
              </td>
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
  );
}

export default SellRequest;
