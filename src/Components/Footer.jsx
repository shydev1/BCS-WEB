import React from "react";
import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <footer class="text-center bg-[#b30000] text-white  flex-none pt-40 justify-center items-center object-center bottom-0">
            <div class="container p-6">
                <div class="grid lg:grid-cols-4 md:grid-cols-2">
                    <div class="mb-6">
                        <h5 class="uppercase font-bold mb-2.5 text-gray-100">Quick Links</h5>

                        <ul class="list-none mb-0">
                            <li>
                                <Link to="/" class="text-white">Home</Link>
                            </li>
                            <li>
                                <Link to="/About" class="text-white">About Us</Link>
                            </li>
                            <li>
                                <Link to="/Contact" class="text-white">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/Events" class="text-white">Events</Link>
                            </li>
                        </ul>
                    </div>

                    <div class="mb-6">
                        <h5 class="uppercase font-bold mb-2.5 text-gray-100">Mobile Apps</h5>

                        <ul class="list-none mb-0">
                            <li>
                                <a target="_blank" href="https://bcs-egc.org" class="text-white">BCS Everlasting Gospel</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.immortalwordsooo.org" class="text-white">Immortal Words</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://apps.apple.com/ng/app/bcs-hymnary/id1180460625" class="text-white">BCS Hymnary</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://apps.apple.com/ng/app/bcs-eva/id6443969454" class="text-white">BCS Eva</a>
                            </li>

                        </ul>
                    </div>
                    <div class="mb-6">
                        <h5 class="uppercase font-bold mb-2.5 text-gray-100">Other Spiritual Outlets</h5>

                        <ul class="list-none mb-0">
                            <li>
                                <Link to="/Pool" class="text-white">Pool Of Life</Link>
                            </li>
                            <li>
                                <Link to="/BookShop" class="text-white">Book Shop</Link>
                            </li>
                            <li>
                                <Link to="/Museum" class="text-white">Royal Museum</Link>
                            </li>
                            <li>
                                <Link to="/Redeem" class="text-white">Mother Elizabeth Redeem Home</Link>
                            </li>

                        </ul>
                    </div>

                    {/* <div class="mb-6">
                        <h5 class="uppercase font-bold mb-2.5 text-gray-100">Our Establishments</h5>

                        <ul class="list-none mb-0">
                            <li>
                                <Link to="#!" class="text-white">Royal Farms</a>
                            </li>
                            <li>
                                <Link to="#!" class="text-white">Royal Guest house</a>
                            </li>
                            <li>
                                <Link to="#!" class="text-white">Essentials Supermarket</a>
                            </li>
                            <li>
                                <Link to="#!" class="text-white">Browland Hotels and suites</a>
                            </li>
                            <li>
                                <Link to="#!" class="text-white">Browland Supermarket</a>
                            </li>
                            <li>
                                <Link to="#!" class="text-white">BCS-Bookshop</a>
                            </li>
                        </ul>
                    </div> */}

                    <div class="mb-6">
                        <h5 class="uppercase font-bold mb-2.5 text-gray-100">Our Media</h5>

                        <ul class="list-none mb-0">
                            <li>
                                <a  href="/STV" class="text-white">Starcross Television</a>
                            </li>
                            <li>
                                <Link to="/ICT" class="text-white">BCS-ICT</Link>
                            </li>
                            <li>
                                <a target="_blank"  href="https://nktnewsonline.com" class="text-white">New Kingdom Trumpet</a>
                            </li>
                            <li>
                                <a target="_blank"  href="https://bcs-egc.org" class="text-white">Everlasting Gospel Center</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-10 mb-10">
                <form action="">
                    <div class="grid md:grid-cols-3 gird-cols-1 gap-5 flex justify-center items-center ">
                        <div class="md:ml-auto md:mb-6">
                            <p class="">
                                <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>

                        <div class="md:mb-6">
                            <input
                                type="text"
                                class="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                                id="exampleFormControlInput1"
                                placeholder="Email address" />
                        </div>

                        <div class="md:mr-auto mb-6">
                            <button type="submit" class="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="container p-6 flex justify-center  items-center">
                <div class="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
                    <div class="lg:mb-0 mb-6 hover:animate-bounce">
                        <img
                            src={"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/today%2Ffoot1.jpg?alt=media&token=5db70fb0-faec-4001-8f72-3a6ab7d5af72"}
                            class="w-full rounded-md shadow-lg"
                        />
                    </div>
                    <div class="lg:mb-0 mb-6 hover:animate-bounce">
                        <img
                            src={"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/today%2Ffoot2.jpg?alt=media&token=b6e39f51-6667-4de7-aeaa-d0c67e794113"}
                            class="w-full rounded-md shadow-lg"
                        />
                    </div>
                    <div class="lg:mb-0 mb-6 hover:animate-bounce">
                        <img
                            src={"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/today%2Ffoot3.jpg?alt=media&token=93f29a9a-8026-442e-af29-bf6ec23a431e"}
                            class="w-full rounded-md shadow-lg"
                        />
                    </div>
                    <div class="lg:mb-0 mb-6 hover:animate-bounce">
                        <img
                            src={"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/today%2Ffoot4.jpg?alt=media&token=59cf5c1c-7d8d-4dee-9f06-76a1ecacd595"}
                            class="w-full rounded-md shadow-lg"
                        />
                    </div>
                    <div class="lg:mb-0 mb-6 hover:animate-bounce">
                        <img
                            src={"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/today%2Ffoot5.jpeg?alt=media&token=c2dbc547-1865-46af-8148-9c756b58088d"}
                            class="w-full rounded-md shadow-lg"
                        />
                    </div>
                    <div class="lg:mb-0 mb-6 hover:animate-bounce">
                        <img
                            src={"https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/today%2Ffoot6.jpg?alt=media&token=9a8c8560-565f-4026-ab45-dcfdb1e847df"}
                            class="w-full rounded-md shadow-lg"
                        />
                    </div>
                </div>
            </div>

            <div class="flex justify-center container px-6 pt-6 items-center">
                <div class="flex justify-center mb-6">
                    <Link to="#!" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <svg aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="facebook-f"
                            class="w-2 h-full mx-auto"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                        >
                            <path
                                fill="currentColor"
                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                            ></path>
                        </svg>
                    </Link>

                    <Link to="#!" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <svg aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="twitter"
                            class="w-3 h-full mx-auto"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path

                                fill="currentColor"
                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                            ></path>
                        </svg>
                    </Link>

                    <Link to="#!" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <svg aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="google"
                            class="w-3 h-full mx-auto"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 488 512"
                        >
                            <path
                                fill="currentColor"
                                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                            ></path>
                        </svg>
                    </Link>

                    <Link to="#!" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <svg aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="instagram"
                            class="w-3 h-full mx-auto "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                            ></path>
                        </svg>
                    </Link>
                </div>
            </div>

            <div class="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            Copyright 2022 © 
                <a class="text-whitehite" href="/"> Brotherhood Of The Cross And Star All Rights Reserved</a>
            </div>
        </footer>
    )
}

export default Footer;