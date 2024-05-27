import React, { useState } from "react";
import "../../css/MainPage.css";

const sampleReportedUserData = [
  {
    id: 1,
    applicant: "핫소스",
    username: "hotsss",
    reportID: "asd123",
    reportDate: "2024-04-20",
    reportReason:
      "신고 내용 블랑브라링바바비이라리릴라라이라리릴라라이라리릴라라이라리릴라라ㅣ리",
  },
  {
    id: 2,
    applicant: "핫소스",
    username: "hotsss",
    reportID: "asd123",
    reportDate: "2024-04-20",
    reportReason:
      "신고 내용 블랑브라링바바비이라리릴라라이라리릴라라이라리릴라라이라리릴라라ㅣ리",
  },
  {
    id: 3,
    applicant: "핫소스",
    username: "hotsss",
    reportID: "asd123",
    reportDate: "2024-04-20",
    reportReason:
      "신고 내용 블랑브라링바바비이라리릴라라이라리릴라라이라리릴라라이라리릴라라ㅣ리",
  },
  {
    id: 4,
    applicant: "핫소스",
    username: "hotsss",
    reportID: "asd123",
    reportDate: "2024-04-20",
    reportReason:
      "신고 내용 블랑브라링바바비이라리릴라라이라리릴라라이라리릴라라이라리릴라라ㅣ리",
  },
  {
    id: 5,
    applicant: "핫소스",
    username: "hotsss",
    reportID: "asd123",
    reportDate: "2024-04-20",
    reportReason:
      "신고 내용 블랑브라링바바비이라리릴라라이라리릴라라이라리릴라라이라리릴라라ㅣ리",
  },
  {
    id: 6,
    applicant: "핫소스",
    username: "hotsss",
    reportID: "asd123",
    reportDate: "2024-04-20",
    reportReason:
      "신고 내용 블랑브라링바바비이라리릴라라이라리릴라라이라리릴라라이라리릴라라ㅣ리",
  },
  {
    id: 7,
    applicant: "핫소스",
    username: "hotsss",
    reportID: "asd123",
    reportDate: "2024-04-20",
    reportReason:
      "신고 내용 블랑브라링바바비이라리릴라라이라리릴라라이라리릴라라이라리릴라라ㅣ리",
  },
];

function ReportedUserList() {
  const [data, setData] = useState(sampleReportedUserData);

  return (
    <main className="main-content">
      <h1 style={{ color: "#555" }}>사용자 신고 목록</h1>
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
        </div>
        <div className="table-header">
          <button className="btn approve">사용자 정지</button>
          <button className="btn reject">삭제 하기</button>
        </div>
      </div>
      <table style={{ borderRadius: "5px" }}>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>사용자명</th>
            <th>아이디</th>
            <th>신고자 ID</th>
            <th>신고 날짜</th>
            <th>신고 내용</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              onClick={(e) => e.stopPropagation()}
              style={{ cursor: "pointer" }}
            >
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.applicant}</td>
              <td>{item.username}</td>
              <td>{item.reportID}</td>
              <td>{item.reportDate}</td>
              <td>{item.reportReason}</td>
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

export default ReportedUserList;
