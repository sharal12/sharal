import React from 'react'
import './App.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListServices from './components/ListServices';
import Form from './components/Form';
import ViewService from './components/ViewService';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AdminForm from './components/AdminForm';
import Pending from './components/Pending';
import Lists from './components/Lists';
import ServiceHistory from './components/ServiceHistory';


  //  class App extends React.Component {
  
  //    render(){
  //    return (
  //     <div>
  //        <HeaderComponent/>
  //       {/*<Form/>*/}
  //     {/*  <ListServices/> */}      {/* <Pending/>
  //      <ServiceHistory/> */}
  //    {/* <AdminForm/> */}
  //    <ListServices/>
  //          <FooterComponent/>

  //      </div>
  //    );
  //  }
  // }
   //export default App;

  function App() {
    return (
    <div>
         <Router>
        
           <HeaderComponent/> <br></br>
            <div className="container">
               <Switch>
          {/*   <Route path = "/" exact component= {ListServices}></Route>
                <Route path = "/service" component= {ListServices}></Route> 
                 <Route path = "/add-service" component= {Form}></Route>   
                 <Route path = "/update-service/:serviceId" component= {ListServices}></Route>
                  <Route path = "/view-service/:serviceId" component= {ViewService}></Route>  
    <Route path="/AdminForm" component={AdminForm}></Route>*/}
                  

                  <Route path = "/" exact component= {Lists}></Route>
                <Route path = "/service" component= {Lists}></Route> 
                <Route path = "/add-service" component= {AdminForm}></Route>           
                <Route path = "/update-service/:serviceId" component= {Lists}></Route>   
                <Route path = "/view-service/:serviceId" component= {ViewService}></Route> 
               {/* <Route path="/AdminForm" component={AdminForm}></Route>*/}
              </Switch>
            </div>
           <FooterComponent/> 
       
        </Router>
      </div>    
   );
   }

  export default App;
