import FormSection from './FormSection.jsx'
import line from './assets/line.png'
import HeaderPart from './HeaderPart'

export default function Footer() {
    return (
        <footer className='bg-[#242424] w-full flex items-center justify-center p-5 px-16'>
           <div className='container'>
             <FormSection />
            <img className='w-full  mt-24 ' src={line} alt="" />
            <HeaderPart/>
           </div>
        </footer>
    )
}