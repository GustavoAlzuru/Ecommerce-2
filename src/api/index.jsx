// import { response } from "express";
import { BASE_URL } from "../constans";

export const getAllProducts = async () => {
    try {
        const data = await fetch(`${BASE_URL}/products`)
        const result = await data.json()
        return result
    } catch (err) {
        console.error(err)
    }
}
export const getSingleProduct = async (id) => {
    try {
        const data = await fetch(`${BASE_URL}/products/${id}`)
        const result = await data.json()
        return result
    } catch (err) {
        console.error(err)
    }
}

/*POST REGISTER USER, POST LOGIN USER*/

export const userRegister = async (user) => {
    try {
        const register = await fetch('http://localhost:4000/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const response = await register.json()
        return response
    } catch (err) {
        console.error(err)
    }
}

/* USER LOGIN ENDPOINT */ 

export const userLogin = async (user) => {
    try{
        const login = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const response = login.json()
        return response
    }catch (err) {
        console.error(err)
    }
}