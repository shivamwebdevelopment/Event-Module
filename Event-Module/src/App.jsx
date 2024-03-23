import { Route, Routes } from "react-router-dom";
import Event from "./routes/Event";
import Routine from "./routes/Routine";
import TaskBar from "./routes/TaskBar";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Event />} />
        <Route path="/taskbar" element={<TaskBar />} />
        <Route path="/routine" element={<Routine />} />
      </Routes>
    </>
  );
};

export default App;
