import React from "react";
import { tsPropertySignature } from "@babel/types";

function Footer(props) {
  return <div>(C) Copyright -- {props.copyright}</div>;
}

export default Footer;
