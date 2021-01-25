import React, { Component } from 'react';
import ServiceService from '../services/ServiceService';

class Lists extends Component{
    constructor(props){
        super(props)

        this.state = {
            services: [],
            currentService: null,
            currentIndex: -1,
            serviceStatus: ""
        }
        this.retriveService = this.retriveService.bind(this);
        this.addService=this.addService.bind(this);        
        this.searchViaStatus = this.searchViaStatus.bind(this);
    }

    componentDidMount(){
        this.retriveService();
    }
    
    searchViaStatus(e) {
        const serviceStatus = e.target.value;

        this.setState({
            serviceStatus: serviceStatus
        });
    }

    
    serviceStatus() {
        ServiceService.findByStatus(this.state.serviceStatus)
        .then(res => {
            this.setState({
                services: res.data
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log(e);
        })
    }


    retriveService() {
        ServiceService.getAllServices()
          .then(response => {
            this.setState({
              services: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

    addService(){
        this.props.history.push('/add-service');
    }

    
    editService(serviceId){
        this.props.history.push(`/update-service/${serviceId}`)
    }    

    deleteService(serviceId){
        ServiceService.deleteService(serviceId).then((res) => {
            this.setState({services: this.state.services.filter( service => service.serviceId !== serviceId)});
        });
    }

    viewService(serviceId){
        this.props.history.push(`/view-service/${serviceId}`);
    }

    render() {
        const {serviceStatus} =this.state;
        return (
            <div>
                <div className="list row">
                    <div className="col-md-8">
                        <div className="input-group mb-3">
                            <input type="text"
                            className="form-control"
                            placeholder="Search by status"
                            value={serviceStatus}
                            onChange={this.searchViaStatus} /> &nbsp;&nbsp;

                            <button className="btn btn-outline-secondary"
                            type="button"
                            onClick={this.serviceStatus()}>Search</button>
                        </div>
                    </div>
                </div>
                
                <h2 className="text-center">Admin Service List</h2>
                {/*<div className="row">
                    <button className="btn btn-primary" onClick={this.addService}>Update Service Request</button>
        </div>*/}
                <br></br>  
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>    
                                <th>ID</th>                            
                                <th>Last Updated Date</th>
                                <th>Delivery Date</th>
                                <th>Service Charge</th>
                                <th>Status</th> 
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.services.map(
                                    service => 
                                    <tr key= {service.serviceId}>
                                        <td>{service.serviceId}</td>
                                        <td>{service.lastUpdatedDate}</td>
                                        <td>{service.deliveryDate}</td> 
                                        <td>{service.serviceCharge}</td>
                                        <td>{service.serviceStatus}</td> 
                                       
                                        <td>
                                        <button className="btn btn-info" onClick={this.addService}>Update</button>
                                        </td>
                                        {/*<td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.editService(service.id)} className = "btn btn-info">Edit</button>
                                        </td>*/}
                                        <td>
                                            <button onClick = {()=>this.deleteService(service.serviceId)} className = "btn btn-danger">Delete</button>
                                        </td>

                                        <td> <button  onClick = {()=>this.viewService(service.serviceId)} className = "btn btn-success">View</button></td>

                                     </tr>  
                                )
                            }


                        </tbody>

                    </table>

                </div>
            </div>
        );
    }
}

export default Lists;