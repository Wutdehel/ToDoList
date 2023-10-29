import axios from "axios";

const BASE_URL_API = "https://6527e017931d71583df18810.mockapi.io";

const getTodos = async () => {
    try {
        const url = `${ BASE_URL_API }/try`;
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const putChecked = async (id, checked) => {
    try {
        const url = `${BASE_URL_API}/try/${id}`;
        const response = await axios.put(url, { checked: !checked }); // Mengubah nilai checked menjadi sebaliknya
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const putTodo = async (id, todo) => {
    try {
        const url = `${BASE_URL_API}/try/${id}`;
        const response = await axios.put(url, { todo: todo }); // Mengubah nilai checked menjadi sebaliknya
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const postCreateTodo = async (data) => {
    try {
        const url = `${BASE_URL_API}/try`;
        const response = await axios.post(url, data);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const deleteTodo = async (id) => {
    try {
        const url = `${BASE_URL_API}/try/${id}`;
        const response = await axios.delete(url);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export { 
    getTodos,
    putChecked,
    putTodo,
    postCreateTodo,
    deleteTodo
}