import { FaLaptopCode } from 'react-icons/fa';

export default function Proyectos() {
    return (
        <>
            <div className="py-20">
                <h1 className="font-syne text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 text-center">Proyectos</h1>
            </div>

            <div className="container bg-transparent mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden h-full">
                    <div
                        className="border-2 absolute border-white h-full"
                        style={{ left: '50%' }}
                    ></div>

                    {/* Right timeline 1 */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1">
                            <FaLaptopCode className="w-8 h-8 text-white bg-black rounded-full pl-1" />

                        </div>
                        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            
                        </div>
                    </div>

                    {/* Left timeline 2 */}
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <FaLaptopCode className="w-8 h-8 text-white bg-black rounded-full pl-1" />
                        </div>
                        <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                    </div>

                    {/* Right timeline 3 */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <FaLaptopCode className="w-8 h-8 text-white bg-black rounded-full pl-1" />
                        </div>
                        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                    </div>

                    {/* Left timeline 4 */}
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <FaLaptopCode className="w-8 h-8 text-white bg-black rounded-full pl-1" />
                        </div>
                        <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </>

    )
}