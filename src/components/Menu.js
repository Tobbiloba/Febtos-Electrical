import { useState } from "react";
import ElectricMeterIcon from '@mui/icons-material/ElectricMeter';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="max-w-screen absolute top-0 w-[100vw]">
            <div className="flex lg:hidden">
                <div className={`bg-white px-[1rem] md:px-[2.2rem] w-[100vw] flex-row flex z-10 justify-between items-center py-2`}>
                    <div className="flex flex-row">
                        <ElectricMeterIcon style={{ color: '#f97316', fontSize: '28px' }} />
                        <h1 className="text-xl ml-1 font-bold text-slate-700">Feb<span className="text-orange-500">Tos</span></h1>
                    </div>
                    <div>
                        {!showMenu && <MenuIcon className={`${showMenu === false ? 'flex' : 'hidden'}`} style={{ color: '#334155', fontSize: '28px' }} onClick={() => setShowMenu(true)} />}
                        {showMenu && <CloseIcon className={`${showMenu === true ? 'flex' : 'hidden'}`} style={{ color: '#f97316', fontSize: '28px' }} onClick={() => setShowMenu(false)} />}
                    </div>
                </div>
                {showMenu && <div className="flex bg-white flex-col w-[85vw] transition transform ease-in-out delay-150  container justify-evenly left-0 h-[100vh] top-0 absolute border">
                    <div></div>
                    <div className="border">
                        <h1 className="text-slate-700 mt-2 text-xl font-bold">HOME</h1>
                        <h1 className="text-slate-700 mt-2 text-xl font-bold">ABOUT</h1>
                        <h1 className="text-slate-700 mt-2 text-xl font-bold">SERVICES</h1>
                        <h1 className="text-slate-700 mt-2 text-xl font-bold">PROJECTS</h1>
                        <h1 className="text-slate-700 mt-2 text-xl font-bold">FAQS</h1>
                        <h1 className="text-slate-700 mt-2 text-xl font-bold">CONTACT</h1>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row mt-6">
                            <div className="border p-2 h-fit rounded-full bg-orange-500">
                                <PhoneInTalkIcon style={{ color: 'white', fontSize: '27px' }} />
                            </div>
                            <div className="ml-2">
                                <h1 className="font-normal text-orange-500 text-[14px]">Call for enquiry</h1>
                                <h1 className="text-[16px] font-bold text-slate-700">(234) 70-84-55-7988</h1>
                            </div>
                        </div>
                        <div className="flex flex-row mt-6">
                            <div className="border p-2 h-fit rounded-full bg-orange-500">
                                <LocationOnIcon style={{ color: 'white', fontSize: '27px' }} />
                            </div>
                            <div className="ml-2">
                                <h1 className="font-normal text-orange-500 text-[14px]">Our office address</h1>
                                <h1 className="text-[16px] font-bold text-slate-700">King street, city No-0324</h1>
                            </div>
                        </div>
                        <div className="flex flex-row mt-6">
                            <div className="border p-2 h-fit rounded-full bg-orange-500">
                                <EmailIcon style={{ color: 'white', fontSize: '27px' }} />
                            </div>
                            <div className="ml-2">
                                <h1 className="font-normal text-orange-500 text-[14px]">Send your mail</h1>
                                <h1 className="text-[16px] font-bold text-slate-700">febtoselectrical@gmail.com</h1>
                            </div>
                        </div>

                    </div>
                </div>
                }

            </div>
            <div className=" lg:flex flex-col hidden absolute w-[100vw]">
                <div className=" bg-white w-[100vw] px-[17.5vw] flex justify-between h-[55px]">
                    <div className="flex flex-row border items-center">
                        <ElectricMeterIcon style={{ color: '#f97316', fontSize: '28px' }} />
                        <h1 className="text-xl ml-1 font-bold text-slate-700">Feb<span className="text-orange-500">Tos</span></h1>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="flex flex-row mr-8">
                            <div className="border p-1 h-fit rounded-full bg-orange-500">
                                <PhoneInTalkIcon style={{ color: 'white', fontSize: '20px' }} />
                            </div>
                            <div className="ml-2">
                                <h1 className="font-normal text-orange-500 text-[11px]">Call for enquiry</h1>
                                <h1 className="text-[13px] font-bold text-slate-700">(234) 70-84-55-7988</h1>
                            </div>
                        </div>
                        <div className="flex flex-row mr-8">
                            <div className="border p-1 h-fit rounded-full bg-orange-500">
                                <LocationOnIcon style={{ color: 'white', fontSize: '20px' }} />
                            </div>
                            <div className="ml-2">
                                <h1 className="font-normal text-orange-500 text-[11px]">Our office address</h1>
                                <h1 className="text-[13px] font-bold text-slate-700">King street, city No-0324</h1>
                            </div>
                        </div>
                        <div className="flex flex-row ">
                            <div className="border p-1 h-fit rounded-full bg-orange-500">
                                <EmailIcon style={{ color: 'white', fontSize: '20px' }} />
                            </div>
                            <div className="ml-2">
                                <h1 className="font-normal text-orange-500 text-[11px]">Send your mail</h1>
                                <h1 className="text-[13px] font-bold text-slate-700">febtoselectrical@gmail.com</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-sky-950 h-[45px] w-[100vw] px-[17.5vw] flex flex-row items-center">
                    <h1 className="text-white mr-12 font-bold font-mono">HOME</h1>
                    <h1 className="text-white mr-12 font-bold font-mono">ABOUT</h1>
                    <h1 className="text-white mr-12 font-bold font-mono">SERVICES</h1>
                    <h1 className="text-white mr-12 font-bold font-mono">PAGES</h1>
                    <h1 className="text-white mr-12 font-bold font-mono">CONTACT</h1>
                </div>
            </div>
        </div>
    )
}
export default Menu;