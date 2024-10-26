import { AiOutlineClose, AiFillMail, AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, } from "react-icons/ai"
import Slider from "./Slider"
import { Link } from "react-router-dom"




const Footer2 = () => {

    const Links = [
        {
            link: "Home"
        },
        {
            link: "Gallery"
        },
        {
            link: "Blog"
        },
        {
            link: "More"
        }
    ]
    return (
        <footer aria-label="Site Footer" className="w-[100% ]" class="bg-[#008ae6]"
        style={{	
            // background: linear-gradient(to bottom right, #c04de2, #340c7f)  
            backgroundImage: 'linear-gradient(104deg, #008ae6 0%, #340c7f 100%)'     }}>
        {/* <footer aria-label="Site Footer" class="bg-[#006eff]"> */}
       
            <div class="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div class="flex justify-center text-teal-600 sm:justify-start">
                            <img src="https://firebasestorage.googleapis.com/v0/b/bcs-website-assets.appspot.com/o/images%2FLOGOTP.png?alt=media&token=d92e4d13-70d0-4b53-b6ca-220fbe4e47fe" className='w-52 h-auto object-contain' />
                        </div>

                        <p
                            style={{ fontSize: 16 }}
                            class="mx-auto mt-6 max-w-md text-center leading-relaxed text-white sm:mx-0 sm:max-w-xs sm:text-left"
                        >
                            Brotherhood of the cross and star the new Kingdom of God, where your salvation lies and where man can be free from pains.
                        </p>

      
                    </div>

                    <div
                        class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2"
                    >
                        <div class="text-center sm:text-left">
                            <p class="text-lg font-medium text-white">Our Media</p>

                            <nav aria-label="Footer About Nav" class="mt-8">
                                <ul class="space-y-4 text-sm">
                                    <li>
                                        <Link  onClick={() => {
                                                window.scrollTo(0, 0);
                                                    }}  
                                                   style={{ fontSize: 15 }}
                                            class="text-white transition hover:text-gray-700/75"
                                            to="/STV"
                                        >
                                            Starcross TV
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => {
                                                window.scrollTo(0, 0);
                                            }}  
                                            style={{ fontSize: 15 }}
                                            class="text-white transition hover:text-gray-700/75"
                                            to="/EGC"
                                        >
                                            Everlasting Gospel
                                        </Link>
                                    </li>
                                    <li>
                                        <Link    onClick={() => {
                                            window.scrollTo(0, 0);
                                        }}  
                                            style={{ fontSize: 15 }}
                                            class="text-white transition hover:text-gray-700/75"
                                            to="/NKT"
                                        >
                                            New Kingdom Trumpet
                                        </Link>
                                    </li>
                                

                                </ul>
                            </nav>
                        </div>

                        <div class="text-center sm:text-left">
                            <p class="text-lg font-medium text-white">Quick Link</p>

                            <nav aria-label="Footer Services Nav" class="mt-8">
                                <ul class="space-y-4 text-sm">
                                    <li>
                                        <Link
                                           onClick={() => {
                                            window.scrollTo(0, 0);
                                          }}  
                                            style={{ fontSize: 15 }}
                                            class="text-white transition hover:text-gray-700/75"
                                            to="/"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                           onClick={() => {
                                            window.scrollTo(0, 0);
                                          }}  
                                            style={{ fontSize: 15 }}
                                            class="text-white transition hover:text-gray-700/75"
                                            to="/About"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                           onClick={() => {
                                            window.scrollTo(0, 0);
                                          }}  
                                            style={{ fontSize: 15 }}
                                            class="text-white transition hover:text-gray-700/75"
                                            to="/Gallery"
                                        >
                                            Gallery
                                        </Link>
                                    </li>

                                </ul>
                            </nav>
                        </div>

                        <div class="text-center sm:text-left">
                            <p class="text-lg font-medium text-white">For you</p>

                            <nav aria-label="Footer Helpful Nav" class="mt-8">
                                <ul class="space-y-4 text-sm">

                                    <li>
                                        <Link
                                           onClick={() => {
                                            window.scrollTo(0, 0);
                                          }}  
                                            style={{ fontSize: 15 }}
                                            class="text-white transition hover:text-gray-700/75"
                                            to="/"
                                        >
                                            Support
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                           onClick={() => {
                                            window.scrollTo(0, 0);
                                          }}  
                                            style={{ fontSize: 15 }}
                                            class="group flex justify-center gap-1.5 sm:justify-start"
                                            to="/STV"
                                        >
                                            <span
                                                class="text-white transition group-hover:text-gray-700/75"
                                            >
                                                Watch us Live
                                            </span>

                                            <span class="relative -mr-2 flex h-2 w-2">
                                                <span
                                                    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"
                                                ></span>
                                                <span
                                                    class="relative inline-flex h-2 w-2 rounded-full bg-red-600"
                                                ></span>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="text-center sm:text-left">
                            <p class="text-lg font-medium text-white">Our Apps</p>

                            <nav aria-label="Footer Helpful Nav" class="mt-8">
                                <ul class="space-y-4 text-sm">

                                    <li>
                                        <Link
                                           onClick={() => {
                                            window.scrollTo(0, 0);
                                          }}  
                                            style={{ fontSize: 15 }}
                                            class="text-white transition hover:text-gray-700/75"
                                            to="/Apps"
                                        >
                                            BCS Eva
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                           onClick={() => {
                                            window.scrollTo(0, 0);
                                          }}  
                                            style={{ fontSize: 15 }}
                                            class="text-white transition hover:text-gray-700/75"
                                            to="/Apps"
                                        >
                                            BCS Hymnary
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                           onClick={() => {
                                            window.scrollTo(0, 0);
                                          }}  
                                            style={{ fontSize: 15 }}
                                            class="text-white transition hover:text-gray-700/75"
                                            to="/Apps"
                                        >
                                            Immortal Words
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>


                    </div>
                </div>


              


                <div class="container pt-16 flex justify-center  items-center">
                {/* <div class="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
                    <a href="/Gallery" class="lg:mb-0 mb-6 hover:animate-bounce">
                        <img
                            src={img1}
                            class="w-full rounded-md shadow-lg"
                        />
                    </a>
                                        <a href="/Gallery" class="lg:mb-0 mb-6 hover:animate-bounce">

                        <img
                            src={img2}
                            class="w-full rounded-md shadow-lg"
                        />
                    </a>
                                        <a href="/Gallery" class="lg:mb-0 mb-6 hover:animate-bounce">

                        <img
                            src={img3}
                            class="w-full rounded-md shadow-lg"
                        />
                    </a>
                                        <a href="/Gallery" class="lg:mb-0 mb-6 hover:animate-bounce">

                        <img
                            src={img4}
                            class="w-full rounded-md shadow-lg"
                        />
                    </a>
                                        <a href="/Gallery" class="lg:mb-0 mb-6 hover:animate-bounce">

                        <img
                            src={img5}
                            class="w-full rounded-md shadow-lg"
                        />
                    </a>
                                        <a href="/Gallery" class="lg:mb-0 mb-6 hover:animate-bounce">

                        <img
                            src={img6}
                            class="w-full rounded-md shadow-lg"
                        />
                    </a>
                </div> */}
                <Slider />
            </div>


            <div class="flex justify-center container px-4 pt-0 items-center">
                <div class="flex justify-center mb-6">
                    <a target={"_blank"} href="https://www.facebook.com/WAHQBCS" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
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
                    </a>

                    <a target={"_blank"} href="https://twitter.com/ooo_bcsonline" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
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
                    </a>

                    <a href="mailto:bcs-kok@ooo-bcsonline.org" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
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
                    </a>
                    <a target={"_blank"} href="https://www.youtube.com/@bcsstarcrosstvinternationa8244" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                                                class="w-3 h-full mx-auto"
                    width="16"
                     height="16" 
                    fill="currentColor"
                     viewBox="0 0 16 16"> 
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                     </svg>
                    </a>

                    <a href="#!" type="button" class="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
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
                    </a>
                </div>
            </div>
           



                <div class="mt-5 border-t border-gray-100 pt-6">
                    <div class="text-center sm:flex sm:justify-between sm:text-left">
                        <p class="text-sm text-white">
                            <span class="block sm:inline">All rights reserved </span>

                            {/* <a
                                class="inline-block text-white underline transition hover:text-teal-600/75"
                                href="/"
                            > */}
                            {/* </a> */}

                            {/* <span>&middot;</span> */}

                            {/* <a
                                class="inline-block text-gray-300 underline transition hover:text-teal-600/75"
                                href="/"
                            > */}
                            Terms & Conditions  
                                 Privacy Policy 
                            {/* </a> */}
                        </p>

                        <p class="mt-4 text-sm text-white sm:order-first sm:mt-0">
                            &copy; 
                            2024 Brotherhood of the cross and star
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer2;