import Image from 'next/image'
import React from 'react'
import { RxDividerVertical } from 'react-icons/rx'

const Machines = () => {
  return (
    <div className='flex flex-col items-center justify-center max-md:p-2 gap-5'>
        {/** text */}
        <div className=''>
            <h2 className='text-[14px] max-md:text-[12px] max-md:text-center font-semibold'>
                INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
            </h2>
        </div>

        {/** image */}
        <div className='max-md:p-5'>
            <Image 
                src='/3.png' 
                alt='machine' 
                width={900} 
                height={900}
            />
        </div>

        {/** types */}
        <div className='ml-4'>
            <h2 className='text-[13px] max-md:text-[11px] font-semibold'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</h2>
        </div>

        {/** border line */}
        <div className='w-[95%] border-[1px] border-solid border-red-600'></div>

        {/** features */}
        <div className='flex flex-col items-center'>
            <h2 className='text-[15px] max-md:text-[12px] font-bold mb-5'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h2>
            <span className='w-full whitespace-nowrap overflow-hidden'>
                <h2 className='flex flex-wrap justify-center text-[13px] max-md:text-[10px] font-semibold items-center'>
                    CHEMICALS & PROCESS
                    <RxDividerVertical className='text-red-500 text-2xl' />
                    WATER & WASTE WATER
                    <RxDividerVertical className='text-red-500 text-2xl' />
                    OILS & GAS
                    <RxDividerVertical className='text-red-500 text-2xl' />
                    PHARMA
                    <RxDividerVertical className='text-red-500 text-2xl' />
                    SUGAR & DISTILLERIES
                    <RxDividerVertical className='text-red-500 text-2xl' />
                    PAPER & PULP
                    <RxDividerVertical className='text-red-500 text-2xl' />
                    MARINE & DEFENCE
                    <RxDividerVertical className='text-red-500 text-2xl' />
                    METAL & MINING
                    <RxDividerVertical className='text-red-500 text-2xl' />
                    FOOD & BEVERAGE
                    <RxDividerVertical className='text-red-500 text-2xl' />
                    PETROCHEMICAL & REFINERIES
                    <RxDividerVertical className='text-red-500 text-2xl' />
                    SOLAR
                    <RxDividerVertical className='text-red-500 text-2xl' />
                    BUILDING
                    <RxDividerVertical className='text-red-500 text-2xl' />
                    FIRE FIGHTING
                    <RxDividerVertical className='text-red-500 text-2xl' />
                    AGRICULTURE & RESIDENTIAL
                </h2>
            </span>
        </div>
    </div>
  )
}

export default Machines