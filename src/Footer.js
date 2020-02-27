import React from "react";

function Footer(props) {
  return (
    <div className="copyright">
      (C) {props.copyright ? props.copyright : "No Copyright"}
    </div>
  );
}

export default Footer;
