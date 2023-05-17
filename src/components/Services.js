import icon2 from '../icons/electrician5.png'
import icon1 from '../icons/siren.png'
import icon4 from '../icons/multimeter.png'
import icon3 from '../icons/wire.png'
const Services = () => {
    const object = [
        {
            id: 1,
            img: icon3,
            h1: 'Cable Change',
            p: 'Energetically create turnkey the box thicompliant applications'
        },
        {
            id: 2,
            img: icon1,
            h1: 'Security Alert',
            p: 'Energetically create turnkey the box thicompliant applications'
        },
        {
            id: 3,
            img: icon4,
            h1: 'Electrical Testing',
            p: 'Energetically create turnkey the box thicompliant applications'
        },
        {
            id: 4,
            img: icon2,
            h1: 'Energy Survey',
            p: 'Energetically create turnkey the box thicompliant applications'
        }
    ]
    return (
        <div className='container py-12 flex flex-col-reverse bg-slate-200'>
            <div className='flex flex-col-reverse  '>
                {/* <div className='border'> */}
                {
                    object.map((item) => {
                        return (
                            <div key={item.id} className='border mt-12'>
                                <div className='absolute ml-6 p-2 bg-orange-500 border-4 border-orange-500 border-r-blue-950 border-b-blue-950'>
                                    <img src={item.img} className='w-[65px] h-[65px]' style={{ color: 'white' }} />
                                </div>
                                <div className='bg-white  mt-8 pt-16  pb-8 px-5'>
                                    <h1 className='font-bold text-xl text-slate-800'>{item.h1}</h1>
                                    <p className='text-[15px] mt-2 '>{item.p}</p>
                                </div>
                            </div>
                        )
                    })
                }

                {/* </div> */}
            </div>
            <div>
                <h1 className='border  flex justify-center text-xl font-bold italic'>Our <span className='text-orange-500 ml-1'>Services.</span></h1>
                <h1 className=' mt-4 font-bold text-3xl text-slate-800'>Services We <br /><span className='text-orange-500'>Provide</span></h1>
                <div className='text-[14px] border-4 border-slate-200 mt-6 mb-8 border-l-orange-500 pl-2'>
                    <h1>Energetically create turnkey the box thicompliant applications. Rapidousily</h1>
                </div>
                <div>
                    <img src="https://www.thespruce.com/thmb/CxRnHxoUsYzdlhHCzYjXn3d5TZ4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-use-a-multimeter-5194980-01-acb6dc0e02254358b597206a4b1ba48e.jpg" />
                </div>
            </div>
        </div>
    )
}
export default Services;