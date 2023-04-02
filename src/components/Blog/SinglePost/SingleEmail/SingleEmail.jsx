import React from "react";
import "./SingleEmail.scss";

// Muhammadsodiq
export default function SingleEmail() {
  return (
    <section className="blogEmail">
      <div className="blogEmail__inner">
        <h3 className="blogEmail__title">Leave a reply</h3>
        <p className="blogEmail__text">
          Facilisi etiam dignissim diam quis enim lobortis scelerisque. Ligula
          ullamcorper malesuada proin libero nunc consequat. Sit amet dictum sit
          amet
        </p>
        <form className="blogEmail__form">
          <div className="blogEmail__form-flex">
            <div className="blogEmail__form-box">
              <span>Your name</span>
              <input
                type="text"
                className="blogEmail__input"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="blogEmail__form-box">
              <span>Your Phone</span>
              <input
                type="text"
                className="blogEmail__input"
                placeholder="Enter Your Phone"
              />
            </div>
          </div>
          <div className="blogEmail__form-box-meeseng">
            <span>Your Phone</span>
            <input
              type="text"
              className="blogEmail__input-text"
              placeholder="Enter Your Phone"
            />
          </div>
          <button className="blogEmail__btn">
            Send
            <span></span>
            <span></span>
          </button>
        </form>
      </div>
    </section>
  );
}
