import axios from "axios";

const BASE_URL = "http://localhost:5000";

// Get employee data
export async function getEmployees() {
  try {
    const response = await axios.get(`${BASE_URL}/api/test/`);
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}

// Create new employee
export async function createEmployee(data: any) {
  const newEmployee = {
    firstName: data.firstName,
    lastName: data.lastName,
    address: data.address,
    phone: { home: data.phone.home, work: data.phone.work },
  };
  console.log(newEmployee);
  try {
    const response = await axios.post(`${BASE_URL}/api/test/`, newEmployee);
    return response.data;
  } catch (error) {
    return await Promise.reject(error.message);
  }
}
