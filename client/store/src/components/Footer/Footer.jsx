import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            reprehenderit maiores error aliquid quaerat corrupti tempore
            similique incidunt porro vel? Expedita reiciendis, laudantium
            officia natus omnis quisquam adipisci dolor odio.
          </span>
        </div>
        <div className="item">
          <h1>Contats</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            velit! Molestiae ipsa veritatis at aperiam doloremque veniam magnam
            adipisci placeat debitis, voluptatem laudantium vero, tempora
            ducimus dignissimos, tempore aspernatur labore.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Moostore</span>
          <span className="copyright">
            {" "}
            &copy; Copyright 2024. All Rights Reserved .
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="pay" />
        </div>
      </div>
    </div>
  );
}
