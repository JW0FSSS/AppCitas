import { loginI } from "../../interfaces/login.type";
import { Baserurl } from "../../util/BaseUrl";

export async function login(body:loginI) {
    const result= await fetch(`${Baserurl}/auth/login`,{
        method:"post",
        body:JSON.stringify(body)
    })
    
    return await result.json()
}