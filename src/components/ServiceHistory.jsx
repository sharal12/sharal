import React, { Component } from 'react';

class ServiceHistory extends Component{
    render() {
        return (
            <div>
                <h2 className="text-center"> Service History</h2><br></br>
                <div className="row">
                    
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>                                
                                
                                <th>Vehicle Brand</th>
                                <th>Vehicle Number</th>
                                <th>Actions</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                
                                    <tr>
                                        <td>{}</td>
                                        <td>{}</td>
                                        <td>
                                        <button type="button" class="btn btn-link">View Details</button> 
                                        </td>
                                        
                                     </tr>  
                                
                            }


                        </tbody>

                    </table>
                    <button  className = "btn btn-warning">Previous</button> &nbsp;&nbsp;
                    <button  className = "btn btn-warning">1</button>&nbsp;&nbsp;
                    <button  className = "btn btn-warning">Next</button>

                </div>
            </div>
        );
    }
}

export default ServiceHistory