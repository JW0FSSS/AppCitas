import { Link } from "react-router-dom";

function Gratefulness() {
    return (
        <div className="w-full min-h-screen flex flex-col gap-4 justify-center items-center">
            <h1 className="text-7xl mb-16">Ya se registro su cita!</h1>
            <div className="h-24">
                <Link to={"/"}>
                    <button className="bg-blue-500 px-8 py-3 font-semibold rounded-lg box-border text-white hover:scale-105 transition-all duration-150 hover:bg-white hover:border-2 hover:border-blue-500 hover:text-black">Volver a <strong >HOME</strong></button>
                </Link>
            </div>
        </div>
    );
}

export default Gratefulness;