import person from './assets/person.png'
import HeaderPart from './HeaderPart'
import line from './assets/line.png'
export default function HeroPart() {
    return (
        <div className='relative z-10'>
            <HeaderPart />
            <div className='z-10 grid sm:grid-cols-1 wrap items-center gap-5'>
                <div className='z-10 flex flex-col items-center justify-center md:items-start lg:items-start'>
                    <div className='z-10 flex flex-col mt-[600px] md:mt-0 lg:mt-0'>
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
                <img className='bg-[#242424] w-[454px] absolute top-0 right-0 z-1 max-w-full h-auto' src={person} alt="Adam Keyes" />
            </div>
            <img className='w-full  mt-32 md:mt-64 lg:mt-64 mb-32 ' src={line} alt="" />
        </div>
    )
}