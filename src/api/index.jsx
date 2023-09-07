import { BASE_URL } from "../constans";

export const getAllProducts = async () => {
    try{
        const data = await fetch(`${BASE_URL}/products`)
        const result = await data.json()
        return result
    }catch(err){
        console.error(err)
    }
}
export const getSingleProduct = async (id) => {
    try{
        const data = await fetch(`${BASE_URL}/products/${id}`)
        const result = await data.json()
        return result
    }catch(err){
        console.error(err)
    }
}