import React from "react";
import poster from "../../img/poster.png";
const HomePage = () => {
    return (
        <>
            <section className="pb-5 bg-gray-800">
                <div className="relative container px-4   mx-auto">
                    <div className="flex flex-wrap items-center -mx-4 mb-10 2xl:mb-14">
                        <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                            <span className="text-lg font-bold text-blue-400">
                                Create posts to educate
                            </span>
                            <h2 className="max-w-2xl mt-12 mb-12 text-6xl 2xl:text-8xl text-white font-bold font-heading">
                                Connecting{" "}
                                <span className="text-yellow-500">Minds</span>
                            </h2>
                            <p className="mb-12 lg:mb-16 2xl:mb-24 text-xl text-gray-100">
                                A Smarter way to share your knowledge
                            </p>
                            <a
                                className="inline-block px-12 py-5 text-lg text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                                href="/login"
                            >
                                Start Now !!
                            </a>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <img className="w-full" src={poster} alt={poster} />
                        </div>
                    </div>
                </div>
                <footer className="relative bg-gray-300 pt-8 pb-6">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style={{ height: "80px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <h4 className="text-3xl font-semibold">
                                    Let's keep in touch!
                                </h4>
                                <h5 className="text-lg mt-0 mb-2 text-gray-700">
                                </h5>

                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="flex flex-wrap items-top mb-6">
                                    <div className="w-full lg:w-4/12 px-4 ml-auto">

                                    </div>

                                </div>
                            </div>
                        </div>
                        <hr className="my-6 border-gray-400" />
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                                <div className="text-sm text-gray-600 font-semibold py-1">
                                    Copyright © {new Date().getFullYear()}{" "}{" "}
                                    <a
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900"
                                    >
                                        Connecting Minds
                                    </a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </section>
        </>
    );
};

export default HomePage;
