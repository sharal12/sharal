import axios from 'axios';

const SERVICE_API_BASE_URL = "http://localhost:8082/service";

class ServiceService {
    getAllServices(){
        return axios.get(SERVICE_API_BASE_URL+'/getallservices');
    }

    createService(service){
        return axios.post(SERVICE_API_BASE_URL+'/addservice/',service);
    }

    getServiceById(serviceId){
        return axios.get(SERVICE_API_BASE_URL+'/getservice/'+serviceId);
    }

    findByStatus(serviceStatus) {
        return axios.get(SERVICE_API_BASE_URL+ '/status/'+serviceStatus);
    }

    updateService(service, serviceId){
        return axios.put(SERVICE_API_BASE_URL+'/update/'+service,serviceId);
    }

    deleteService(serviceId){
        return axios.delete(SERVICE_API_BASE_URL+'/delete/'+serviceId);
    }
}

//exporting EmployeeService object
export default new ServiceService();