import React from "react";
// import "./Topbar.css";
function Topbar() {
  const leftLink = ["One", "Two"];
  const rightLnks = ["Three", "Four", "Five", "Six"];
  return (
    <div className="top-bar" style={{paddingTop:"0rem",paddingBottom:"0rem"}}>
      <div className="top-bar-left">
        <ul className="menu">
          <li class="menu-text">Yeti Agency</li>
          {leftLink.map((e) => {
            return (
              <li
                style={{
                  padding: "0.8rem",
                }}
              >
                <a href="#">{e}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          {rightLnks.map((e) => {
            return (
              <li>
                <a href="#">{e}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Topbar;
