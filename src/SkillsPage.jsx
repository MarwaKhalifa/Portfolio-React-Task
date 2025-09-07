import GroupLines from './assets/GroupLines.png'
export default function SkillsPage() {
    return (
        <div className="relative flex items-center justify-center p-5 px-16 overflow-x-hidden">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <img src={GroupLines} className='absolute bottom-0 right-[-100px]' />
                <div className="h-[89px] flex flex-col justify-between mb-14">
                    <h1 className="text-white font-(family-name:--main-font)  font-bold text-5xl ">HTML</h1>
                    <p className=" font-(family-name:--main-font) text-[18px] font-medium text-[var(--grayColor)]">4 Years Experience</p>
                </div>
                <div className="h-[89px] flex flex-col justify-between mb-14">
                    <h1 className="text-white font-(family-name:--main-font)  font-bold text-5xl ">CSS</h1>
                    <p className=" font-(family-name:--main-font) text-[18px] font-medium text-[var(--grayColor)]">4 Years Experience</p>
                </div>
                <div className="h-[89px] flex flex-col justify-between mb-14">
                    <h1 className="text-white font-(family-name:--main-font)  font-bold text-5xl ">Javascript</h1>
                    <p className=" font-(family-name:--main-font) text-[18px] font-medium text-[var(--grayColor)]">4 Years Experience</p>
                </div>
                <div className="h-[89px] flex flex-col justify-between mb-14">
                    <h1 className="text-white font-(family-name:--main-font)  font-bold text-5xl ">Accessibility</h1>
                    <p className=" font-(family-name:--main-font) text-[18px] font-medium text-[var(--grayColor)]">4 Years Experience</p>
                </div>
                <div className="h-[89px] flex flex-col justify-between mb-14">
                    <h1 className="text-white font-(family-name:--main-font)  font-bold text-5xl ">React</h1>
                    <p className=" font-(family-name:--main-font) text-[18px] font-medium text-[var(--grayColor)]">3 Years Experience</p>
                </div>
                <div className="h-[89px] flex flex-col justify-between mb-14">
                    <h1 className="text-white font-(family-name:--main-font)  font-bold text-5xl ">Sass</h1>
                    <p className=" font-(family-name:--main-font) text-[18px] font-medium text-[var(--grayColor)]">3 Years Experience</p>
                </div>
            </div>
        </div>
    )
}