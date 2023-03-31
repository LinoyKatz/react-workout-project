import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";
import ExDetails from "./components/exDetails/ExDetails";
import About from "./pages/About/About";
import AddTraining from "./pages/AddTraining/AddTraining";
import HomePage from "./pages/HomePage/HomePage";
import TrainingList from "./pages/TrainingList/TrainingList";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/training" element={<TrainingList />} />
          <Route path="/create" element={<AddTraining />} />
          <Route path="/edit/:id" element={<AddTraining />} />
          <Route path="/training/:id" element={<ExDetails />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <AppFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
