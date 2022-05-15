import React from "react";

export default function Footer() {
  return (
    <footer className="w3-container w3-blue-gray w3-center w3-margin-top">
      <p>Find me on social media.</p>
      <i className="fa fa-github fa-fw w3-margin-right w3-xxlarge w3-hover-opacity"></i>
      <i className="fa fa-linkedin fa-fw w3-margin-right w3-xxlarge w3-hover-opacity"></i>
      <i className="fa fa-instagram fa-fw w3-margin-right w3-xxlarge w3-hover-opacity"></i>
      <i className="fa fa-twitter fa-fw w3-margin-right w3-xxlarge w3-hover-opacity"></i>
      <p>
        Powered by{" "}
        <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
          w3.css
        </a>
      </p>
    </footer>
  );
}