import React, { Component } from 'react';
import ServiceService from '../services/ServiceService';

class UpdateService extends Component {
    constructor(props) {
        super(props);
        this.state = {               
            serviceId: this.props.match.params.serviceId,
            serviceCharge:'',
            serviceStatus: '',
            lastUpdatedDate: '',
            deliveryDate: ''
        }
        this.changeServiceCharge= this.changeServiceCharge.bind(this);
    this.handleChanged = this.handleChanged.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.changeServiceStatus = this.changeServiceStatus.bind(this);
    this.handleChanged1 = this.handleChanged1.bind(this);
    this.onFormSubmit1 = this.onFormSubmit1.bind(this);
    this.updateService = this.updateService.bind(this);

        //this.changeEmployeeNameHandler= this.changeEmployeeNameHandler.bind(this);
        //this.changeHiredateHandler= this.changeHiredateHandler.bind(this);
        //this.changeJobHandler = this.changeJobHandler.bind(this);
        //this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        //this.updateEmployee = this.updateEmployee.bind(this);
    }     

    componentDidMount(){
        ServiceService.getServiceById(this.state.serviceId).then((res)=>{
            let service =  res.data;
            this.setState({
                serviceId: service.serviceId,
                serviceCharge: service.serviceCharge,
                serviceStatus: service.serviceStatus,
                lastUpdatedDate: service.lastUpdatedDate,
                deliveryDate: service.deliveryDate
            });
        });
    }

    updateService = (e)=>{
        e.preventDefault();
        let service ={ serviceId: this.state.serviceId, serviceCharge: this.state.serviceCharge, serviceStatus: this.state.serviceStatus,
            lastUpdatedDate: this.state.lastUpdatedDate, deliveryDate: this.state.deliveryDate
        };
        console.log(JSON.stringify(service));
       ServiceService.updateService(service,this.state.serviceId).then((res) =>{
            this.props.history.push('/service');
       });
    }   
    
    cancel(){
        this.props.history.push('/service');
    }

    handleChanged(date) {
        this.setState({
            lastUpdatedDate: date
        })
      }
      onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.lastUpdatedDate)
      }
    
      handleChanged1(date) {
        this.setState({
            deliveryDate: date
        })
      }
      onFormSubmit1(e) {
        e.preventDefault();
        console.log(this.state.deliveryDate)
      }
    
      changeServiceCharge = (event) =>{
        this.setState({serviceCharge: event.target.value});
    }
    
    changeServiceStatus = (event) =>{
        this.setState({serviceStatus: event.target.value});
    }

   

    render() {
        return (
            <div>               
            <div className="container">
                <div className="row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Service Form</h3>
                        <div className = "card-body">
                            <form>
    
                               
                                <div className="form-group"> 
                                    <label>Last Updated  Date</label> &nbsp;
                                    <DatePicker
                                    selected={ this.state.lastUpdatedDate }
                                    onChange={ this.handleChanged }
                                    name="lastUpdatedDate"
                                     dateFormat="MM/dd/yyyy"
                                    />
                                </div>

                                <div className="form-group"> 
                                    <label>Delivery Date</label> &nbsp;
                                    <DatePicker
                                    selected={ this.state.deliveryDate }
                                    onChange={ this.handleChanged1 }
                                    name="deliveryDate"
                                     dateFormat="MM/dd/yyyy"
                                    />
                                </div>

                                <div className="form-group">
                                <label>Service Charge</label>
                                    <input placeholder="Enter Service Charge" name="serviceCharge"
                                        className="form-control" value = {this.state.serviceCharge} 
                                        onChange = {this.changeServiceCharge}/>
                                </div>

                                <div className="form-group">
                                <label>Service Status</label>
                                    <input placeholder="Service Status" name="serviceStatus"
                                        className="form-control" value = {this.state.serviceStatus} 
                                        onChange = {this.changeServiceStatus}/>
                                </div>


                                <button className = "btn btn-success" onClick = {this.updateService}>Submit</button> &nbsp;
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

export default UpdateService;