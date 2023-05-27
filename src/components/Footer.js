import ElectricMeterIcon from '@mui/icons-material/ElectricMeter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import AOS from 'aos';
const Footer = () => {
    return (
        <div className='flex flex-col bg-sky-950 py-6 ' data-aos="fade-in">
            <div className='px-[1rem] md:px-[2.2rem] lg:px-[15vw] flex flex-col md:flex-row md:flex-wrap lg:justify-between lg:flex-row'>
                <div className=' '>
                    <div className="flex flex-row">
                        <ElectricMeterIcon style={{ color: '#f97316', fontSize: '28px' }} />
                        <h1 className="text-xl ml-1 font-bold text-white">Feb<span className="text-orange-500">Tos</span></h1>
                    </div>
                    <p className='mt-3 text-white text-[12px] w-[70vw] lg:w-[350px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                    <div className='flex flex-row mt-4'>
                        <div className='border border-orange-500 px-2 py-2 mr-3 rounded-xl bg-white'>
                            <WhatsAppIcon style={{ color: '#f97316', fontSize: '24px' }} />
                        </div>
                        <div className='border border-orange-500 px-2 py-2 mr-3 rounded-xl bg-white'>
                            <InstagramIcon style={{ color: '#f97316', fontSize: '24px' }} />
                        </div>
                        <div className='border border-orange-500 px-2 py-2 mr-3 rounded-xl bg-white'>
                            <LinkedInIcon style={{ color: '#f97316', fontSize: '24px' }} />
                        </div>
                        <div className='border border-orange-500 px-2 py-2 mr-3 rounded-xl bg-white'>
                            <TwitterIcon style={{ color: '#f97316', fontSize: '24px' }} />
                        </div>
                    </div>
                </div>
                <div className='mt-6 md:mr-6 lg:mt-0 md:ml-6 '>
                    <h1 className='text-white text-xl font-mono font-bold'>Contact Info</h1>
                    <div>
                        <div className='mt-2 flex flex-row items-center'>
                            <div className='w-10 h-10 border mr-3'></div>
                            <p className='text-white text-[12px] '>121 King st, <br />Melboour Califonia</p>
                        </div>
                        <div className='mt-2 flex flex-row items-center'>
                            <div className='w-10 h-10 border mr-3'></div>
                            <p className='text-white text-[12px] '>243-60-5084-397</p>
                        </div>
                        <div className='mt-2 flex flex-row items-center'>
                            <div className='w-10 h-10 border mr-3'></div>
                            <p className='text-white text-[12px] '>info@febtoselect.co</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-white mt-4 lg:mt-0 text-xl md:mt-6 md:mr-6 font-mono font-bold'>Our Services</h1>
                    <div>
                        <ul>
                            <li className='text-[12px] text-white mt-2 ml-3'>Electrician Services</li>
                            <li className='text-[12px] text-white mt-2 ml-3'>Plumbing Services</li>
                            <li className='text-[12px] text-white mt-2 ml-3'>Mechanical Services</li>
                        </ul>
                    </div>
                </div>
                <div className='md:mt-4 md:ml-6 lg:mt-0'>
                    <h1 className='text-white text-xl font-mono font-bold mt-4'>Recent Posts</h1>
                    <div className='flex flex-row mt-4'>
                        <img className='w-16 h-16 mr-4' src='https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_become_a_marketing_manager.jpg' />
                        <div className=''>
                            <h1 className='text-white text-[14px] font-bold font-mono'>Plumbing Tips Winter and Summer</h1>
                            <p className='text-[12px] font-light text-white'>January 5th 2023 | <span>Comments</span></p>
                        </div>
                    </div>
                    <div className='flex flex-row mt-4'>
                        <img className='w-16 h-16 mr-4' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_become_a_marketing_manager.jpg" />
                        <div className=''>
                            <h1 className='text-white text-[14px] font-bold font-mono'>Plumbing Tips Winter and Summer</h1>
                            <p className='text-[12px] font-light text-white'>January 5th 2023 | <span>Comments</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border border-sky-950 border-t-slate-200 mt-8'>
                <h1 className='mt-4 text-center text-slate-400 text-[12px] font-mono font-bold'>@2002 febtoselectrical - All rights reserved</h1>
            </div>
        </div>
    )
}
export default Footer;