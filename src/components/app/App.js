import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import {MainPage, ComicsPage} from "../pages";

const App = () => {

     return (
    <Router>
      <AppHeader />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/comics" element={<ComicsPage />} />
      </Routes>
    </Router>
  );
}

export default App;