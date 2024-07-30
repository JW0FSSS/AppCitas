import { registerI } from "../../interfaces/register.type";
import { Baserurl } from "../../util/BaseUrl";

export async function register(body:registerI) {

    console.log(body);
    const result=await fetch(`${Baserurl}/auth/register`,{
        method:"post",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(body)
    })
    
    return await result.json()
}