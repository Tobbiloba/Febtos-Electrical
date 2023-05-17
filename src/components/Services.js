import icon2 from '../icons/electrician.png'
const Services = () => {
    return (
        <div>
            <div className='flex flex-col container py-12 bg-slate-200'>
                <div className='border'>
                    <div className='absolute ml-6 p-2 bg-orange-500 border-4 border-orange-500 border-r-blue-950 border-b-blue-950'>
                        <img src={icon2} className='w-[65px] h-[65px]' style={{ color: 'white' }} />
                    </div>
                    <div className='bg-white  mt-8 pt-20 rounded-xl pb-8 px-5'>
                        <h1 className='font-bold text-xl text-slate-800'>Cable Change</h1>
                        <p className='text-[15px] mt-2 border'> Energetically create turnkey the box thicompliant applications</p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}
export default Services;