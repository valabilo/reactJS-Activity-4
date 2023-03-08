
import RootLayout from "./shared/components/Layouts/RootLayout";
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import Car1 from './pages/Car1';
import Car2 from './pages/Car2';
import Car3 from './pages/Car3';


const App = () => {
  return (

    <RootLayout>
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactus" element={<ContactPage />} />
          
          <Route path="/Car1" element={<Car1 />} />
          <Route path="/Car2" element={<Car2 />} />
          <Route path="/Car3" element={<Car3 />} />
          


        </Routes>
    
    </RootLayout>

  );
}

export default App;
