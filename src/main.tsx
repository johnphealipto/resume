import React from "react";
import ReactDOM from "react-dom/client";
import { Font, PDFViewer } from "@react-pdf/renderer";
import AcademicResume from "./views/academic-resume";

import Light from "./assets/fonts/Rubik-Light.ttf";
import SemiBold from "./assets/fonts/Rubik-SemiBold.ttf";
import Medium from "./assets/fonts/Rubik-Medium.ttf";
import Italic from "./assets/fonts/Rubik-Italic.ttf";

Font.register({
  family: "Rubik",
  fonts: [
    {
      src: Light,
    },
    {
      src: Medium,
      fontWeight: "medium",
    },
    {
      src: SemiBold,
      fontWeight: "semibold",
    },
    {
      src: Italic,
      fontStyle: "italic",
    },
  ],
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <PDFViewer height={1100} width={800}>
        <AcademicResume />
      </PDFViewer>
    </div>
  </React.StrictMode>
);
