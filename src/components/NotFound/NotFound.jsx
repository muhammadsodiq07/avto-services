import React from "react";

export default function NotFound() {
  return (
    <>
      <section className="notfound ">
        <p
          style={{
            color: "red",
            fontSize: "40px",
            lineHeight: "300px",
            textAlign: "center",
            fontFamily: "sans-serif",
          }}
        >
          Page Not Found
        </p>
      </section>
    </>
  );
}
