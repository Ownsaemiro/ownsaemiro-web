import { useState, useEffect, useTransition} from "react";
import { Routes, Route, Link } from "react-router-dom";
import '../css/StartPage.css';

function Signup(){
  return (
    <div>

      <TitleRectangle/>
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