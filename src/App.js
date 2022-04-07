import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import VehiclesPage from './Pages/VehiclesPage/VehiclesPage';
import VehicleDetailsPage from './Pages/VehicleDetailsPage/VehicleDetailsPage';
import AboutPage from './Pages/AboutPage/AboutPage'
import './styles/App.scss';
import HeroSection from './Components/HeroSection/HeroSection';
import AddVehicle from './Components/AddVehicle/AddVehicle';
import Login from './Components/Login/Login';
import EditVehicle from './Components/EditVehicle/EditVehicle';
import ContactDealershipForm from './Components/ContactDealershipForm/ContactDealershipForm';
// import LoginPage from './Pages/LoginPage/LoginPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Header/>
        <HeroSection />
          <article className="page-container">

              <Switch>
                <Redirect path="/" to="/vehicles" exact />
                <Route path="/vehicles" exact component={VehiclesPage}/>
                <Route path="/vehicles/add" exact component={AddVehicle} />
                <Route path="/vehicles/edit/:id" exact component={EditVehicle} />
                <Route path="/vehicles/:id" component={VehicleDetailsPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/login" component={Login} />
                <Route path="/contactdealership" exact component={ContactDealershipForm} />
                {/* <Route path="/login" component={LoginPage} /> */}
                
                
                
                
                {/* <Route path="/vehicleDetails" exact component={VehicleDetails} /> */}

                
              </Switch>

            <Footer />
          </article> 
      </div>      
    </BrowserRouter>
   
  );
}

export default App;
