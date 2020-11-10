import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__fi">
        <p>ไทย</p>
      </div>
      <div className="footer__bg">

        <div className="footer__dv">
          <p>โฆษณา</p>
          <p>ธุรกิจ</p>
          <p>เกี่ยวกับ</p>
          <p>วิธีการทำงานของ Search</p>
        </div>

        <div className="footer__bt">
          <p>ความเป็นส่วนตัว</p>
          <p>ข้อกำหนด</p>
          <p>การตั้งค่า</p>
          <p>ใช้ Google.com</p>
        </div>

      </div>
    </div>
  );
}

export default Footer;
