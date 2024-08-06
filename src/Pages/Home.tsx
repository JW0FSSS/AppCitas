function Home() {
    return ( 
        <div className="w-full min-h-screen flex flex-col gap-4 justify-center items-center">
            <h1 className="text-7xl">Home</h1>

           <form action="" className="w-96 bg-blue-800/30 p-4 flex flex-col gap-8 rounded-xl">

            <label htmlFor="">
                Servicio
                <select className="w-full h-12 rounded-md" name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </label>

            <label htmlFor="">
                Trabajador
                <select className="w-full h-12 rounded-md" name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </label>

            <label htmlFor="">
                Día
                <input type="date" className="w-full h-12 p-2" />
            </label>

            <label htmlFor="">
                Hora
                <select className="w-full h-12 rounded-md" name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </label>

            <button className="w-full py-4 bg-blue-500 rounded-xl">
                Crear Cita
            </button>

           </form>

        </div>
     );
}

export default Home;