import { useState } from "react";
import ElectricMeterIcon from '@mui/icons-material/ElectricMeter';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="border max-w-screen">
            <div className="flex lg:hidden">
                <div className={`container flex-row flex justify-between items-center py-2`}>
                    <div className="flex flex-row">
                        <ElectricMeterIcon style={{ color: '#f97316', fontSize: '28px' }} />
                        <h1 className="text-xl ml-1 font-bold text-slate-700">Feb<span className="text-orange-500">Tos</span></h1>
                    </div>
                    <div>
                        {!showMenu && <MenuIcon className={`${showMenu === false ? 'flex' : 'hidden'}`} style={{ color: '#334155', fontSize: '28px' }} onClick={() => setShowMenu(true)} />}
                        {showMenu && <CloseIcon className={`${showMenu === true ? 'flex' : 'hidden'}`} style={{ color: '#f97316', fontSize: '28px' }} onClick={() => setShowMenu(false)} />}

                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
export default Menu;