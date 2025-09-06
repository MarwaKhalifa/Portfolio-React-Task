import linkedin from './assets/LinkedIn.svg'
import twitter from './assets/twitter.svg'
import frontendmentor from './assets/frontendmentor.svg'
import github from './assets/github.svg'
export default function HeaderPart() {
    return (
        <header className="z-10 flex items-center justify-center py-9 ">
            <div className=' w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  items-center  md:justify-between lg:justify-between gap-3'>
                <h1 className=" z-10 font-(family-name:--main-font) text-white text-4xl flex justify-center md:justify-start lg:justify-start">adamkeyes</h1>
                <div className=' z-10 flex items-center justify-center md:justify-end lg:justify-end gap-8 md:pr-9 lg:pr-9'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 text-white hover:text-[#4EE1A0] transition-colors duration-300 cursor-pointer">
                        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2.2.8 2.2.9.4 1.6-.7 1.6-.7.2-.8.5-1.2.8-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.1 6 18 6.3 18 6.3c.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.2 0 4.6-2.7 5.5-5.3 5.8.4.3.7 1 .7 2v3c0 .3.2.7.8.6C20.2 21.4 23.5 17.1 23.5 12c0-6.3-5.2-11.5-11.5-11.5Z" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 text-white hover:text-[#4EE1A0] transition-colors duration-300 cursor-pointer">
                        <line x1="10" y1="8" x2="10" y2="16" />

                        <polyline points="22,8 16,12 22,16" />

                        <path d="M6 18a6 6 0 0 0 6 6" />
                    </svg>


                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 text-white hover:text-[#4EE1A0] transition-colors duration-300 cursor-pointer">
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.96 0-1.73-.79-1.73-1.73s.78-1.73 1.73-1.73c.96 0 1.73.78 1.73 1.73s-.77 1.73-1.73 1.73zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v5.6z" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 text-white hover:text-[#4EE1A0] transition-colors duration-300 cursor-pointer">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                </div>
            </div>
        </header>
    )
}