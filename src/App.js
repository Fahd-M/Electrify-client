import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './Components/Footer';
import VehiclesPage from './Pages/VehiclesPage';
import VehicleDetailsPage from './Pages/VehicleDetailsPage/VehicleDetailsPage';
import AboutPage from './Pages/AboutPage'
import './styles/App.scss';
import HeroSection from './Components/HeroSection/HeroSection';

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Header/>
        <HeroSection />
          <article className="page-container">
            <div className="page-container__inner">
              <Switch>
                <Redirect path="/" to="/vehicles" exact />
                <Route path="/vehicles" exact component={VehiclesPage}/>
                <Route path="/vehicles/:id" component={VehicleDetailsPage} />
                <Route path="/vehicles/edit/:id" exact component={EditVehicle} />
                <Route path="/vehicles/add" exact component={AddVehicle} />
                <Route path="/about" component={AboutPage} />
                
                {/* <Route path="/vehicleDetails" exact component={VehicleDetails} />
                <Route path="/inventory/add" component={AddInven} />
                <Route path="/inventory/:id" exact component={InventoryDetails} />
                <Route path="/inventory/edit/:id" component={EditInven} /> */}
                
              </Switch>
            </div>
            <Footer />
          </article> 
      </div>      
    </BrowserRouter>
   
  );
}

export default App;
