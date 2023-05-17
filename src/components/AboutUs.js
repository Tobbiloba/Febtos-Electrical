import icon1 from '../icons/engineering.png'
import icon2 from '../icons/electrician2.png'
import DoneAllIcon from '@mui/icons-material/DoneAll';
const AboutUs = () => {
    return (
        <div className='bg-white container py-8'>
            <div>
                <h1 className=' flex justify-center text-xl font-bold italic'>About <span className='text-orange-500'>Us</span></h1>
                <h1 className=' mt-4 font-bold text-2xl text-center text-slate-800'>10 Years of Experience In Giving Best <span className='text-orange-500'>Services</span></h1>
                <div className=' mt-4'>
                    <h1 className='text-[14px] border-4 border-white border-l-orange-500 pl-2'>Energetically create turnkey "outside the box" thinking with standards compliant applications. Rapidiously</h1>
                </div>
                <div className='mt-8 flex flex-col'>
                    <div className='flex flex-row'>
                        <img src={icon1} className='w-[50px] h-[50px]' />
                        <h1 className='ml-3 font-bold text-slate-700'>The Best Quality <br /> <span className='text-orange-500'>Services</span></h1>
                    </div>
                    <div className='flex flex-row mt-6'>
                        <img src={icon2} className='w-[50px] h-[50px]' />
                        <h1 className='ml-3 font-bold text-slate-700'>Warranty &<br /> <span className='text-orange-500'>Maintenance</span></h1>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='flex flex-row items-center mb-4'>
                        <div className='border mr-3 p-1 rounded-full bg-orange-500 border-orange-500'>
                            <DoneAllIcon style={{ color: 'white' }} />
                        </div>
                        <h1>Become a Master Electrician</h1>
                    </div>
                    <div className='flex flex-row items-center mb-4'>
                        <div className='border mr-3 p-1 rounded-full bg-orange-500 border-orange-500'>
                            <DoneAllIcon style={{ color: 'white' }} />
                        </div>
                        <h1>Added an noffice location and 24-hour service</h1>
                    </div>
                    <div className='flex flex-row items-center mb-4'>
                        <div className='border mr-3 p-1 rounded-full bg-orange-500 border-orange-500'>
                            <DoneAllIcon style={{ color: 'white' }} />
                        </div>
                        <h1>Industry Recognition</h1>
                    </div>
                    <button className="bg-orange-500 border-4 w-fit border-white text-white font-bold px-2 py-1 mt-3 border-r-slate-800 border-b-slate-800">Learn More</button>
                </div>
            </div>
            <div className='border-4 border-white border-r-orange-500 border-b-orange-500 mt-8'>
                <img src="https://i0.wp.com/nyscinfo.com/wp-content/uploads/2021/06/Electrician-Dubai.jpg?fit=914%2C708&ssl=1" />
            </div>
        </div>
    )
}
export default AboutUs;