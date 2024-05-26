import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const DataTable: React.FC = () => {
  const rows = [
    {
      id: 1,
      신청자명: "핫소스",
      아이디: "hotsss",
      공연명: "핫소스유니버스팝업스토어",
      신청일: "2024-04-20",
      공연일: "2024-05-10~12",
      승인상태: "승인 대기",
    },
    {
      id: 2,
      신청자명: "핫소스",
      아이디: "hotsss",
      공연명: "핫소스유니버스팝업스토어",
      신청일: "2024-04-20",
      공연일: "2024-05-10~12",
      승인상태: "승인 대기",
    },
    {
      id: 3,
      신청자명: "핫소스",
      아이디: "hotsss",
      공연명: "핫소스유니버스팝업스토어",
      신청일: "2024-04-20",
      공연일: "2024-05-10~12",
      승인상태: "승인 거절",
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox disabled/>
            </TableCell>
            <TableCell>신청자명</TableCell>
            <TableCell>아이디</TableCell>
            <TableCell>공연명</TableCell>
            <TableCell>신청일</TableCell>
            <TableCell>공연일</TableCell>
            <TableCell>승인상태</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{row.신청자명}</TableCell>
              <TableCell>{row.아이디}</TableCell>
              <TableCell>{row.공연명}</TableCell>
              <TableCell>{row.신청일}</TableCell>
              <TableCell>{row.공연일}</TableCell>
              <TableCell>{row.승인상태}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
