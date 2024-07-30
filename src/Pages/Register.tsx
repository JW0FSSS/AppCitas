import { Link } from "react-router-dom";
import { register } from "../services/Register/RegisterService";

export function Register() {

    const handleRegister=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const name=e.target?.name.value
        const email=e.target?.email.value
        const password=e.target?.password.value
        
        const body={name,email,password}
        
        const result=await register(body)
    }

    return(
        <main className="max-w-5xl mx-auto h-screen flex items-center">
            <section className="h-[60%] grid grid-cols-2 items-center my-auto gap-7 pl-16 pr-2 py-5 bg-white shadow-xl">
                <section className="flex flex-col h-full pl-5 gap-6">
                    <h1 className="text-primary text-2xl font-semibold text-center">Wellness</h1>
                    <h2 className="text-center"><strong className="text-xl">Welcome To Register</strong></h2>
                    <form onSubmit={handleRegister} id="register">
                        <div className="flex flex-col gap-2 mb-4">
                            <label htmlFor="">Name</label>
                            <input className="px-4 py-2 rounded-md border-black/20 border-2" type="text" placeholder="jose" name="name"/>
                        </div>
                        <div className="flex flex-col gap-2 mb-4">
                            <label htmlFor="">Email</label>
                            <input className="px-4 py-2 rounded-md border-black/20 border-2" type="text" placeholder="jose@gmail.com" name="email"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Password</label>
                            <input className="px-4 py-2 rounded-md border-black/20 border-2" type="password" placeholder="min 8 characters" name="password"/>
                        </div>
                    </form>
                    <button className="bg-primary rounded-lg text-white px-4 py-2 w-f" form="register">Register</button>
                    <div className="flex justify-center">
                        <p>You already registered? <Link to={"/login"} className="text-primary font-semibold"> Sign In</Link> </p>
                    </div>
                </section>
                <img src="https://img.freepik.com/fotos-premium/imagen-llamativa-mujer-joven-plantas-que-dan-toque-naturaleza-su-rostro-aigenerated_796128-2753.jpg" alt="imagen login" className="h-full object-cover" />
            </section>
        </main>
    )
}