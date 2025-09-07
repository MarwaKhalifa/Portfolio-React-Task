import bitmap from './assets/Bitmap.svg'
import bitmap1 from './assets/Bitmap1.svg'
import bitmap2 from './assets/Bitmap2.svg'
import bitmap3 from './assets/Bitmap3.svg'
import bitmap4 from './assets/Bitmap4.svg'
import bitmap5 from './assets/Bitmap5.svg'
export default function ProjectsPage() {
    return (
        < div className="flex items-center justify-center p-5 px-16">

            <div className="container py-14">
                <div className="flex items-center justify-between mb-20">
                    <h1 className=" font-(family-name:--main-font) text-white text-[40px] md:text-7xl lg:text-[88px] font-bold">Projects</h1>
                    <button className='font-(family-name:--main-font) text-[16px] text-white border-b-2 border-[var(--greenColor)] hover:text-[var(--greenColor)]'>CONTACT ME</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  lg:gap-16">
                    <div className="  ">
                        <img className='w-full' src={bitmap} alt="" />
                        <h3 className='font-(family-name:--main-font) mt-5 text-2xl font-bold text-white '>DESIGN PORTFOLIO</h3>
                        <div className='flex items-center gap-4'>
                            <p className='font-(family-name:--main-font) tex-[18px] font-medium text-[var(--grayColor)]'>HTML</p>
                            <p className='font-(family-name:--main-font) tex-[18px] font-medium text-[var(--grayColor)]'>CSS</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <button className='font-(family-name:--main-font) text-[16px] text-white border-b-2 border-[var(--greenColor)] hover:text-[var(--greenColor)]'>View Project</button>
                            <button className='font-(family-name:--main-font) text-[16px] text-white border-b-2 border-[var(--greenColor)] hover:text-[var(--greenColor)]'>View Code</button>
                        </div>
                    </div>
                    <div className=" ">
                        <img className='w-full' src={bitmap1} alt="" />
                        <h3 className='font-(family-name:--main-font) mt-5 text-2xl font-bold text-white '>E-LEARNING LANDING PAGE</h3>
                        <div className='flex items-center gap-4'>
                            <p className='font-(family-name:--main-font) tex-[18px] font-medium text-[var(--grayColor)]'>HTML</p>
                            <p className='font-(family-name:--main-font) tex-[18px] font-medium text-[var(--grayColor)]'>CSS</p>
                        </div>
                    </div>
                    <div className=" ">
                        <img className='w-full' src={bitmap2} alt="" />
                        <h3 className='font-(family-name:--main-font) mt-5 text-2xl font-bold text-white '>TODO WEB APP</h3>
                        <div className='flex items-center gap-4'>
                            <p className='font-(family-name:--main-font) tex-[18px] font-medium text-[var(--grayColor)]'>HTML</p>
                            <p className='font-(family-name:--main-font) tex-[18px] font-medium text-[var(--grayColor)]'>CSS</p>
                            <p className='font-(family-name:--main-font) tex-[18px] font-medium text-[var(--grayColor)]'>JAVASCRIPT</p>
                        </div>
                    </div>
                    <div className=" ">
                        <img className='w-full' src={bitmap3} alt="" />
                        <h3 className='font-(family-name:--main-font) mt-5 text-2xl font-bold text-white '>ENTERTAINMENT WEB APP</h3>
                        <div className='flex items-center gap-4'>
                            <p className='font-(family-name:--main-font) tex-[18px] font-medium text-[var(--grayColor)]'>HTML</p>
                            <p className='font-(family-name:--main-font) tex-[18px] font-medium text-[var(--grayColor)]'>CSS</p>
                            <p className='font-(family-name:--main-font) tex-[18px] font-medium text-[var(--grayColor)]'>JAVASCRIPT</p>
                        </div>
                    </div>
                    <div className=" ">
                        <img className='w-full' src={bitmap4} alt="" />
                        <h3 className='font-(family-name:--main-font) mt-5 text-2xl font-bold text-white '>MEMORY GAME</h3>
                        <div className='flex items-center gap-4'>
                            <p className='font-(family-name:--main-font) tex-[18px] font-medium text-[var(--grayColor)]'>HTML</p>
                            <p className='font-(family-name:--main-font) tex-[18px] font-medium text-[var(--grayColor)]'>CSS</p>
                            <p className='font-(family-name:--main-font) tex-[18px] font-medium text-[var(--grayColor)]'>JAVASCRIPT</p>
                        </div>
                    </div>
                    <div className=" ">
                        <img className='w-full' src={bitmap5} alt="" />
                        <h3 className='font-(family-name:--main-font) mt-5 text-2xl font-bold text-white '>ART GALLERY SHOWCASE</h3>
                        <div className='flex items-center gap-4'>
                            <p className='font-(family-name:--main-font) tex-[18px] font-medium text-[var(--grayColor)]'>HTML</p>
                            <p className='font-(family-name:--main-font) tex-[18px] font-medium text-[var(--grayColor)]'>CSS</p>
                            <p className='font-(family-name:--main-font) tex-[18px] font-medium text-[var(--grayColor)]'>JAVASCRIPT</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}