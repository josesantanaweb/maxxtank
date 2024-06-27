import SocialMedia from "@/components/Common/SocialMedia";
import Footer from "@/components/Common/Footer";


const ContactPage = () => {
    return (
        <div>
        <div className="bg-slate-200 min-h-screen">
            <div className="px-20 pt-12">
                <div className="border-b-2 border-dashed border-gray-400">
                    <h4 className="pt-2 mb-6 text-6xl">CONTACTO</h4>
                </div>
            </div>
            <div className="flex justify-between px-12 items-baseline flex-row">
                <div className="w-1/3">
                    <p className="pl-8 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ipsum soluta. Ea voluptate, magni sit voluptatum voluptatem illum accusamus earum quo quisquam obcaecati laudantium fugiat?</p>
                </div>
                <div className="w-2/3 max-w-lg bg-slate-200 p-8">
                    <h2 className="text-xl font-medium mb-6">Contáctanos</h2>
                    <form className="space-y-4">
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <input type="text" placeholder="Nombre(s)" className="w-full px-4 py-2 bg-slate-200 border border-black focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-black" />
                            </div>
                            <div className="w-1/2">
                                <input type="text" placeholder="Apellido(s)" className="placeholder:text-black w-full px-4 py-2 bg-slate-200 border border-black focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>
                        </div>
                        <div>
                            <input type="email" placeholder="Correo electrónico" className="placeholder:text-black w-full px-4 py-2 bg-slate-200 border border-black focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <input type="text" placeholder="Número de teléfono" className="placeholder:text-black w-full px-4 py-2 bg-slate-200 border border-black focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>
                            <div className="w-1/2">
                                <input type="text" placeholder="Compañía" className="placeholder:text-black w-full px-4 py-2 bg-slate-200 border border-black focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>
                        </div>
                        <div>
                            <input type="text" placeholder="Asunto" className="placeholder:text-black w-full px-4 py-2 bg-slate-200 border border-black focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div>
                            <textarea placeholder="Mensaje" className=" placeholder:text-black w-full px-4 py-2 bg-slate-200 border border-black focus:outline-none focus:ring-2 focus:ring-blue-400" rows="4"></textarea>
                        </div>
                        <button type="submit" className=" w-1/4 rounded-md placeholder:text-black bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Enviar</button>
                    </form>
                </div>
            </div>
        </div>


        <div className="flex flex-col">
            <div className="mx-20 px-20 mt-12 pt-12">
                <div className="text-3xl text-center">Estamos a su disposición, no dude en contactarnos e iniciamos juntos nuestro siguiente proyecto.</div>
            </div>
            <div className="mx-auto mt-8 text-center">
                <div>Carrera 34 # 54-45</div>
                <div>Bogotá, Colombia</div>
                <div>Tel: 204-156-32-23</div>
                <div>Cel: 302-456-8945</div>
                <div>Mail: gerencia@maxxtank.com.co</div>
                <div>Mail: proyectos@maxxtank.com.co</div>
            </div>
        </div>

        <div className="w-full my-12">
            <img src="/public/images/map.png" alt="mapa" />
        </div>

        <div className=" mt-6 mb-16">
        <SocialMedia />
        </div>

        <Footer />
    </div>


    );
}

export default ContactPage;
