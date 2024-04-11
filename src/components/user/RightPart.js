import React from 'react'
import demomed from "../../assets/image2.png"
import Select from "react-select";
import "../Stores/Stores.scss";

const RightPart = () => {
    const options = [
        { value: "Gopal Pharma and Labs", label: "Gopal Pharma and Labs" },
        { value: "Laal Pathology", label: "Laal Pathology" },
        { value: "Jain Pharma", label: "Jain Pharma" },
    ];
    return (
        <div className="bg-cyan-50 h-[full] w-[98vw]">
            <div className=' w-[38vw] height-[100vh] right-[0] bg-white' style={{ position: "absolute", right: "0", top: "8vh" }}>
                <div className='w-[100%] px-5 py-5 cursor-pointer'>
                    <img src="/images/X.svg" alt="close_button" />
                </div>

                <div className='flex flex-row gap-x-5 justify-center'>
                    <div className='flex flex-col gap-y-2'>
                        <div className='border-2 rounded-xl border-slate-500 w-[15vw] h-[30vh] flex justify-center items-center'>
                            <img className='rounded-xl w-[8.5vw]' src={demomed} alt="demomed" />
                        </div>
                        <div className='flex gap-x-3.5'>
                            <div className='border-2 rounded-xl border-slate-500 w-[4.5vw] h-[10vh] flex justify-center items-center'> <img className='rounded w-[2vw]' src={demomed} alt="demomed" /></div>
                            <div className='border-2 rounded-xl border-slate-500 w-[4.5vw] h-[10vh] flex justify-center items-center'><img className='rounded w-[2vw]' src={demomed} alt="demomed" /></div>
                            <div className='border-2 rounded-xl border-slate-500 w-[4.5vw] h-[10vh] flex justify-center items-center'><img className='rounded w-[2vw]' src={demomed} alt="demomed" /></div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-1'>
                        <div>Ecosprin 75mg Strip Of 14 Tablets</div>
                        <div>
                            BY MICRO LEVELS
                        </div>
                        <div>
                            15 Tablet(s) in Strip
                        </div>
                        <div>
                            MRP: <span style={{ textDecoration: "line-through" }}>&#8377;33.6</span>
                        </div>
                        <div>
                            &#8377;28.90 <span className='text-red-600'>14% OFF</span>
                        </div>
                        <div>
                            Inclusive of all taxes
                        </div>
                        <div>
                            Quantity : <input type="number" className="border-2 rounded border-slate-500"></input>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col px-5 pt-5'>
                    <div className='font-bold px-5'>Dolo 650 MG Description</div>
                    <div className='px-5 pt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                </div>

                <div className='flex flex-col px-5 pt-5'>
                    <div className='px-5 font-bold'>
                    Select Seller Store
                    </div>
                    <div className='px-5'>
                        nearest store selected by default
                    </div>
                    <div className='px-5'>
                    <Select
          className="w-40"
          classNamePrefix="select py-0 px-0"
          defaultValue={options[0]}
          isSearchable={true}
          name="color"
          options={options}
        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RightPart
