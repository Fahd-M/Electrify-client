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

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Header/>
        <HeroSection />
          <article className="page-container">
            {/* <div className="page-container__inner"> */}
              <Switch>
                <Redirect path="/" to="/vehicles" exact />
                <Route path="/vehicles" exact component={VehiclesPage}/>
                <Route path="/vehicles/add" exact component={AddVehicle} />
                <Route path="/vehicles/edit/:id" exact component={EditVehicle} />
                <Route path="/vehicles/:id" component={VehicleDetailsPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/login" component={Login} />
                
                
                
                
                {/* <Route path="/vehicleDetails" exact component={VehicleDetails} />
                <Route path="/inventory/add" component={AddInven} />
                <Route path="/inventory/:id" exact component={InventoryDetails} />
                <Route path="/inventory/edit/:id" component={EditInven} /> */}
                
              </Switch>
            {/* </div> */}
            <Footer />
          </article> 
      </div>      
    </BrowserRouter>
   
  );
}

export default App;
