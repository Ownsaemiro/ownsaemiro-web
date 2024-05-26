import React, { useState } from "react";
import "../../css/MainPage.css";
import EventModal from "./EventModal";

const sampleData = [
  {
    id: 1,
    applicant: "핫소스",
    username: "hotsss",
    eventName: "핫소스유니버스탑업스토어",
    requestDate: "2024-04-20",
    eventDate: "2024-05-10~12",
    status: "승인 대기",
  },
  {
    id: 2,
    applicant: "핫소스",
    username: "hotsss",
    eventName: "핫소스유니버스탑업스토어",
    requestDate: "2024-04-20",
    eventDate: "2024-05-10~12",
    status: "승인 거절",
  },
  {
    id: 3,
    applicant: "핫소스",
    username: "hotsss",
    eventName: "핫소스유니버스탑업스토어",
    requestDate: "2024-04-20",
    eventDate: "2024-05-10~12",
    status: "승인 허가",
  },
  {
    id: 4,
    applicant: "핫소스",
    username: "hotsss",
    eventName: "핫소스유니버스탑업스토어",
    requestDate: "2024-04-20",
    eventDate: "2024-05-10~12",
    status: "승인 허가",
  },
  {
    id: 5,
    applicant: "핫소스",
    username: "hotsss",
    eventName: "핫소스유니버스탑업스토어",
    requestDate: "2024-04-20",
    eventDate: "2024-05-10~12",
    status: "승인 거절",
  },
  {
    id: 6,
    applicant: "핫소스",
    username: "hotsss",
    eventName: "핫소스유니버스탑업스토어",
    requestDate: "2024-04-20",
    eventDate: "2024-05-10~12",
    status: "승인 대기",
  },
  {
    id: 7,
    applicant: "핫소스",
    username: "hotsss",
    eventName: "핫소스유니버스탑업스토어",
    requestDate: "2024-04-20",
    eventDate: "2024-05-10~12",
    status: "승인 대기",
  },
  {
    id: 8,
    applicant: "핫소스",
    username: "hotsss",
    eventName: "핫소스유니버스탑업스토어",
    requestDate: "2024-04-20",
    eventDate: "2024-05-10~12",
    status: "승인 대기",
  },
];

function EventRequestList() {
  const [data, setData] = useState(sampleData);
  const [selectedStatus, setSelectedStatus] = useState("전체");
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<
    (typeof sampleData)[0] | null
  >(null);

  const filteredData =
    selectedStatus === "전체"
      ? data
      : data.filter((item) => item.status === selectedStatus);

  const handleOpen = (item: (typeof sampleData)[0]) => {
    console.log("Opening modal for item:", item);
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <main className="main-content">
      <h1 style={{ color: "#555" }}>행사 등록 요청 목록</h1>
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
              승인 상태
            </div>
            <select
              value={selectedStatus}
              style={{ border: "2px solid #E5E5E5", borderRadius: "5px" }}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="전체">전체</option>
              <option value="승인 대기">승인 대기</option>
              <option value="승인 허가">승인 허가</option>
              <option value="승인 거절">승인 거절</option>
            </select>
          </div>
        </div>
        <div className="table-header">
          <button className="btn approve">승인</button>
          <button className="btn reject">승인 거절</button>
        </div>
      </div>
      <table style={{ borderRadius: "5px" }}>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>신청자명</th>
            <th>아이디</th>
            <th>공연명</th>
            <th>신청일</th>
            <th>공연일</th>
            <th>승인 상태</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr
              key={item.id}
              onClick={() => handleOpen(item)}
              style={{ cursor: "pointer" }}
            >
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.applicant}</td>
              <td>{item.username}</td>
              <td>{item.eventName}</td>
              <td>{item.requestDate}</td>
              <td>{item.eventDate}</td>
              <td
                className={
                  item.status === "승인 거절"
                    ? "rejected"
                    : item.status === "승인 허가"
                    ? "approved"
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

export default EventRequestList;