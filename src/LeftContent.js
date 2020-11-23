import React from "react";
import "./LeftContent.css";

export default function LeftContent() {
  return (
    <div className="leftContent">
      <div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginBottom: "10px",
            fontSize: "18px",
          }}
        >
          <div style={{ fontSize: "14px", fontWeight: 500 }}>My Groups (4)</div>
        </div>
        <Row title="Woobbee" lastUpdated="2 months ago" />
        <Row title="LCP" lastUpdated="3 years ago" />
        <Row title="Dota Pos 0" lastUpdated="1 years ago" />
        <Row title="Don't pick techies pls" lastUpdated="2 weeks ago" />
        <br />
        <div className="leftLink">Discover groups</div>
        <div className="leftLink">Join your school groups</div>
      </div>
    </div>
  );
}

function Row({ title, lastUpdated }) {
  return (
    <div className="row">
      <div style={{ marginRight: "10px" }}>
        <img
          alt="randompic"
          style={{ borderRadius: "4px" }}
          src="https://picsum.photos/48"
        />
      </div>
      <div className="rowContent">
        <div className="rowContentTitle">{title}</div>
        <div className="rowContentSubtitle">Last updated {lastUpdated}</div>
      </div>
    </div>
  );
}
