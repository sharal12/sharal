import React, { Component } from 'react';

class Pending extends Component{
    render() {
        return (
            <div>
                <h2 className="text-center">Pending Service List</h2><br></br>
                <div className="row">
                    
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>                                
                                <th>ServiceId</th>
                    
                                <th>Vehicle Number</th>
                                <th>Status</th>
                                <th>Service Charge</th>
                                <th>Actions</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                
                                    <tr>
                                        <td>{}</td>
                                        <td>{}</td>
                                        <td>{}</td>
                                        <td>{}</td>
                                       
                                        <td>
                                            <button  className = "btn btn-info">Response</button>
                                        </td>
                                        
                                     </tr>  
                                
                            }


                        </tbody>

                    </table>
                    <button  className = "btn btn-info">Previous</button> &nbsp;&nbsp;
                    <button  className = "btn btn-info">1</button>&nbsp;&nbsp;
                    <button  className = "btn btn-info">Next</button>

                </div>
            </div>
        );
    }
}

export default Pending