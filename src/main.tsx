import React from "react";
import ReactDOM from "react-dom/client";
import { PDFViewer } from "@react-pdf/renderer";
import PDFDocument from "./Document.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PDFViewer height={1200} width={1000}>
        <PDFDocument />
      </PDFViewer>
    </div>
  </React.StrictMode>
);
