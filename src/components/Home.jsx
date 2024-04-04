import React from "react";
import "./Home.scss";
import illustration from "../assets/img/home-illustration.png";
import ticket from "../assets/img/ticket.png";

function Home() {
  return (
    <div className="home-container">
      <div className="text-container">
        <h1 className="home-title">
          Добро пожаловать на <span home-title--highlight>SkyWings</span> - ваш
          паспорт в мир беззаботных путешествий!{" "}
        </h1>
        <p className="home-description">
          Исследуйте бесконечные направления, бронируйте легко и отправляйтесь в
          незабываемые приключения с нами. Давайте вместе поднимемся на новые
          высоты!
        </p>
      </div>
      <img src={ticket} alt="" className="illustration" />
    </div>
  );
}

export default Home;
