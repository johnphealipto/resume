import { PDFViewer } from "@react-pdf/renderer";
import PDFDocument from "./components/PDFDoc";

const App = () => {
  return (
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
  );
};

export default App;
