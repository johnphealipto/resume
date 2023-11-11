import React from "react";
import ReactDOM from "react-dom/client";
import { PDFViewer } from "@react-pdf/renderer";
import Letter from "./components/Letter";
import Resume from "./components/Resume";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <PDFViewer height={1100} width={800}>
        <Resume />
      </PDFViewer>
      <PDFViewer height={1100} width={800}>
        <Letter />
      </PDFViewer>
    </div>
  </React.StrictMode>
);
