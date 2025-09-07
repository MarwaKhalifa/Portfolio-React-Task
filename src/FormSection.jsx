export default function FormSection() {
    return (
        <div className="py-5 ">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center md:items-center md:justify-center lg:justify-start">
                <div className="w-[445px] max-[w-full] h-[208px] ">
                    <h1 className=" text-center md:text-center lg:text-start font-(family-name:--main-font) text-white text-[40px] md:text-7xl lg:text-[88px] font-bold">Contact</h1>
                    <p className="text-center md:text-center lg:text-start font-(family-name:--main-font) text-[18px] text-[var(--grayColor)]">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                </div>
                <form class="form__group field">
                    <input type="input" className="h-16 form__field" placeholder="Name" required="" />
                    <input type="input" className=" h-16 form__field" placeholder="Email" required="" />
                    <input className="h-[107px] w-full form__field" type="input" placeholder="Message" required="" />
                    <div className="flex justify-end">
                        <button className='mt-8 font-(family-name:--main-font) text-[16px] text-white border-b-2 border-[var(--greenColor)] hover:text-[var(--greenColor)] cursor-pointer'>SEND MESSAGE </button>
                    </div>
                </form>
            </div>
        </div>
    )
}