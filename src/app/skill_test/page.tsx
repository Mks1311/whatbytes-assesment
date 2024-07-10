/** @format */
'use client'
import { Button } from '@/components/ui/button'
import React,{useState} from 'react'

type Props={}
export default function SkillTestPage({}:Props){
    const [rank,setRank]=useState(0);
    const [percentile,setPercentile]=useState(0);
    const [answer,setAnswer]=useState(0);

    return (
        <div className='px-4'>
            <p className='text-lg'>Skill Test</p>
            <div className='pt-2 flex justify-start items-center'>
                <div className='flex flex-col gap-4'>
                    <div className='flex px-3 py-6 justify-center items-center border gap-4'>
                        <img src='/html.png'height={60} width={60} />
                        <div>
                            <p className='font-bold text-lg'>Hyper Text Markup Language</p>
                            <p className='font-thin'>Questions: 08 | Duration: 15min | Submitted on 5 June 2021</p>
                        </div>
                        <Button className='bg-blue-900 text-white w-[90px]'>Update</Button>
                    </div>

                    <div className='border px-3 py-6'>
                        <p className='font-bold'>Quick Statistics</p>
                        <div>
                            <div>
                                <img src='/cup.png' height={30} width={30}/>
                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    2box
                </div>
            </div>

        </div>
    )
}
