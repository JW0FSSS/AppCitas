import { Link } from "react-router-dom";

export function Login() {
    return(
        <main className="max-w-5xl mx-auto h-screen flex items-center">
            <section className="h-[60%] grid grid-cols-2 items-center my-auto gap-7 pl-10 pr-5 py-5 bg-white shadow-xl">
                <section className="flex flex-col h-full pl-5 gap-6">
                    <h1 className="text-primary text-2xl font-semibold">Wellness</h1>
                    <h2><strong className="text-xl">Weolcome Back</strong></h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolores, quae ducimus eius animi nostrum iure, necessitatibus voluptatem rem exercitationem assumenda eaque aliquam. Aut, quibusdam eum optio architecto maxime quas?</p>
                    <form action="">
                        <div className="flex flex-col gap-2 mb-4">
                            <label htmlFor="">Email</label>
                            <input className="px-4 py-2 rounded-md border-black/20 border-2" type="text" placeholder="jose@gmail.com"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Password</label>
                            <input className="px-4 py-2 rounded-md border-black/20 border-2" type="password" placeholder="min 8 characters"/>
                        </div>
                    </form>
                    <div className="flex justify-between">
                        <div className="flex gap-2 ">
                            <input type="checkbox" name="" id="" className="accent-current text-primary" /><label htmlFor="">Remenber me</label>
                        </div>
                        <Link to="/" className="text-primary font-semibold">Forgot password?</Link>
                    </div>
                    <button className="bg-primary rounded-lg text-white px-4 py-2">Log in</button>
                    <div className="flex justify-center">
                        <p>No registered yet? <Link to={"/register"} className="text-primary font-semibold">Create account</Link> </p>
                    </div>
                </section>
                <img src="https://img.freepik.com/fotos-premium/imagen-llamativa-mujer-joven-plantas-que-dan-toque-naturaleza-su-rostro-aigenerated_796128-2753.jpg" alt="imagen login" className="h-full object-cover" />
            </section>
        </main>
    )
}