import React from "react";

export default function Hidden({ children }) {
  return <div style={{ display: "none" }}>{children}</div>;
}
