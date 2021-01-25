import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceService from '../services/ServiceService';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            serviceId:'',
            vehicleType:'',
            vehicleBrand: '',
            dateOfService: '',
            vehicleNumber: '',
            serviceType:''

    }

    this.changeVehicleTypeHandler= this.changeVehicleTypeHandler.bind(this);
    this.handleChanged = this.handleChanged.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.changeVehicleBrandHandler = this.changeVehicleBrandHandler.bind(this);
    this.changeVehicleNumberHandler = this.changeVehicleNumberHandler.bind(this);
    this.changeServiceTypeHandler = this.changeServiceTypeHandler.bind(this);
    this.saveService = this.saveService.bind(this);
   
    }

   saveService = (e)=>{
    e.preventDefault();
    let service ={ serviceId: null, vehicleType: this.state.vehicleType, vehicleBrand: this.state.vehicleBrand,
        dateOfService: this.state.dateOfService, vehicleNumber: this.state.vehicleNumber,serviceType: this.state.serviceType
    };
//     ServiceService.createService(service)
//     .then(res => {
//         this.setState({message:'User added successfully !!'});
//         this.props.history.push('service5/add');
//     });
// }
    console.log(JSON.stringify(service));
     ServiceService.createService(service).then(res =>{
        this.setState({message:'User added successfully !!'});
        this.props.history.push('/service/add-service');
     })
     .catch(err=>alert(err))
 }  

handleChanged(date) {
    this.setState({
        dateOfService: date
    })
  }
  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.dateOfService)
  }

  cancel(){
    this.props.history.push('/service');
}

changeVehicleTypeHandler = (event) =>{
    this.setState({vehicleType: event.target.value});
}

changeVehicleBrandHandler = (event) =>{
    this.setState({vehicleBrand: event.target.value});
}

changeVehicleNumberHandler = (event) =>{
    this.setState({vehicleNumber: event.target.value});
}

changeServiceTypeHandler = (event) =>{
    this.setState({serviceType: event.target.value});
}

   render() {
    return (
        <div>               
            <div className="container">
                <div className="row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Service Form</h3>
                        <div className = "card-body">
                            <form>
                                <div className="form-group"> 
                                <label > Choose Vehicle Category </label> &nbsp;
                                <select value = {this.state.vehicleType} onChange={this.changeVehicleTypeHandler}>
                                <option value ="2 Wheeler">2 Wheeler</option>
                                <option value="3 Wheeler">3 Wheeler</option>
                                 <option value="4 Wheeler">4 Wheeler</option>
         
                                </select>

                                </div>
                                <div className="form-group"> 
                                    <label>Enter Vehicle Brand</label>
                                    <input placeholder="Enter Vehicle Brand" name="veh_brand"
                                      className="form-control" value = {this.state.vehicleBrand} 
                                        onChange = {this.changeVehicleBrandHandler}/>
                                </div>
                               
                                <div className="form-group"> 
                                    <label>Service Request Date</label> &nbsp;
                                    <DatePicker
                                    selected={ this.state.dateOfService }
                                    onChange={ this.handleChanged }
                                    name="dateOfService"
                                     dateFormat="MM/dd/yyyy"
                                    />
                                </div>

                                <div className="form-group">
                                <label>Enter Vehicle Number</label>
                                    <input placeholder="Enter Vehicle Number" name="vehicleNumber"
                                        className="form-control" value = {this.state.vehicleNumber} 
                                        onChange = {this.changeVehicleNumberHandler}/>
                                </div>


                                <div className="form-group"> 
                                <label>Choose Service Type</label> &nbsp;
                                <select value = {this.state.serviceType} onChange={this.changeServiceTypeHandler}>
                                 <option value ="Oil Service">Oil Service</option>
                                 <option value="Water Service">Water Service</option>
                                  <option value="Part Service">Part Service</option>
                                   <option value="Vehicle Repair">Vehicle Repair</option>
                                      <option value="Other Service">Other Service</option>
                                   </select>

                                </div>

                                <button className = "btn btn-success" onClick = {this.saveService}>Save</button> &nbsp;
                                <button className = "btn btn-danger" onClick = {this.cancel.bind(this)}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
}
  export default Form