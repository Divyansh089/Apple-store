import './App.css';

import AppRoutes from './routes/Routes';

import MainNavbar from './components/Navbar/MainNavbar';

import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
  <MainNavbar></MainNavbar>
  <AppRoutes></AppRoutes>
   

      <Footer></Footer>
    </div>
  );
}

export default App;