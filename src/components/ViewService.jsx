import React, { Component } from 'react';
import ServiceService from '../services/ServiceService';

class ViewService extends Component {
    constructor(props) {
        super(props);

        this.state = {
            serviceId: this.props.match.params.serviceId,
            service: {}
        }

    }

    componentDidMount(){
        ServiceService.getServiceById(this.state.serviceId).then( res => {
            this.setState({service: res.data});
        })
    }

    render() {
        return (
            <div>
               <div className= "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Service Details</h3>
                    <div className= "card-body">
                        <div className = "row">
                            <label> Vehicle Category: </label> &nbsp; &nbsp;
                            <div>{this.state.service.vehicleType}</div>
                        </div>
                        <div className = "row">
                            <label>Vehicle Brand: </label> &nbsp; &nbsp;
                            <div>{this.state.service.vehicleBrand}</div>
                        </div>
                        <div className = "row">
                            <label> Service Date: </label> &nbsp; &nbsp;
                            <div>{this.state.service.dateOfService}</div>
                        </div>

                        <div className = "row">
                            <label> Vehicle Number: </label> &nbsp; &nbsp;
                            <div>{this.state.service.vehicleNumber}</div>
                        </div>

                        <div className = "row">
                            <label> Service Type: </label> &nbsp; &nbsp;
                            <div>{this.state.service.serviceType}</div>
                        </div>

                    </div>
               </div>
            </div>
        );
    }
}

export default ViewService;