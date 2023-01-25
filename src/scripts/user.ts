import { apiClient } from "./api";

export const getUser = async (id?: string) => {
    if (id) {
        fetch(`http://localhost:5000/customer/${id}`)
        .then(val => console.log(val.json()))
    } else {
        const d = {
            "name": "Anish edhjh",
            "email": "anish.shfth9@gmail.com",
            "password": "rhgoetjhah",
            "phone": "9448359948"
        }
        const res = await apiClient({ method: 'POST', 
        url: '/customer', 
        data: d, 
        headers: {
            'Content-Type': 'application/json'
        }});
        const data = await res.json();
        console.log(data);
    }
}
