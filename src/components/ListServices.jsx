import React, { Component } from 'react';
import ServiceService from '../services/ServiceService';

class ListServices extends Component{
    constructor(props){
        super(props);

        this.state = {
            services: []
        }
        this.addService = this.addService.bind(this);
        this.editService = this.editService.bind(this);
        this.deleteService = this.deleteService.bind(this);
        this.viewService = this.viewService.bind(this);
    }

    componentDidMount(){
        ServiceService.getAllServices()
        .then((res) => {
            this.setState({services: res.data});
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
        return (
            <div>
                <h2 className="text-center">Customer Service List</h2>    
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addService}>Add Service Request</button>
                    
                </div> 
                <br></br>                                         
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>                                                       
                                <th>Service ID</th>   
                                <th>Vehicle Category</th>                           
                                <th>Vehicle Brand</th> 
                                <th>Service Date</th>                               
                                <th>Vehicle Number</th>
                                <th>Service Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.services.map(
                                    service => 
                                    <tr key={service.serviceId}>
                                        <td>{service.serviceId}</td>
                                        <td>{service.vehicleType}</td>
                                        <td>{service.vehicleBrand}</td>
                                        <td>{service.dateOfService}</td>
                                        <td>{service.vehicleNumber}</td>  
                                        <td>{service.serviceType}</td>                                                                              
                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.viewService(service.serviceId)} className = "btn btn-info">View</button>
                                        </td>                                      
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

export default ListServices;