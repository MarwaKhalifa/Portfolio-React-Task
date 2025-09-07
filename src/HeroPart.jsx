import person from './assets/person.png'
import HeaderPart from './HeaderPart'
import line from './assets/line.png'
import GroupCircles from './assets/GroupCircles.png'
import oval from './assets/Oval.png'
export default function HeroPart() {
    return (
        <div className='relative z-10'>
            <HeaderPart />
            <div className='z-10 grid sm:grid-cols-1 wrap items-center gap-5'>
                <img src={GroupCircles} className='z-2 absolute top-32 left-[-200px]' />
                <div className='z-10 flex flex-col items-center justify-center md:items-start lg:items-start'>
                    <div className=' z-10 flex flex-col mt-[600px] md:mt-0 lg:mt-0'>
                        <h1 className='text-center md:text-start lg:text-start  z-10 font-(family-name:--main-font) text-[44px] md:text-[72px] lg:text-[88px] text-white font-bold'>
                            Nice to meet you! <br />
                            I’m <span className="border-b-4 border-[var(--greenColor)]">Adam Keyes.</span>
                        </h1>
                        <p className='text-center md:text-start lg:text-start z-10 font-(family-name:--main-font) text-[18px] text-[var(--grayColor)] mt-6'>
                            Based in the UK, I’m a front-end developer <br />
                            passionate about building accessible web apps <br />
                            that users love.
                        </p>
                    </div>
                    <button className='font-(family-name:--main-font) text-[16px] text-white border-b-2 border-[var(--greenColor)] mt-16 hover:text-[var(--greenColor)]'>CONTACT ME</button>
                </div>
                <img className='bg-[#242424] absolute top-0  md:right-0 lg:right-0 z-1 h-auto' src={person} alt="Adam Keyes" />
            </div>
            <img src={oval} className='z-20 absolute bottom-[750px] right-[-50px] md:top-[500px] lg:right-[380px] lg:bottom-[170px]' />
            <img className='w-full  mt-32 md:mt-64 lg:mt-64 mb-32 ' src={line} alt="" />
        </div>
    )
}