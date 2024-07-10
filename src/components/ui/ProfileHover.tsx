import React from 'react'

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

type Props = {}
export default function ProfileHover({ }: Props) {
    return (
        <div>
            <div className='flex justify-center items-center gap-2 border py-1 px-2 rounded-xl'>
                <Avatar className='h-[34px] w-[35px] ' >
                    <AvatarImage src="https://github.com/Mks1311.png" />
                    <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <p className='font-bold'>Manish</p>
            </div>
        </div >
    )
}
