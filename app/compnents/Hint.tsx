import React from 'react'

export default function Hint({value}:{value:string}) {
    return (
        <div className='hint-component absolute bottom-0 right-0 '>
            <span className='bg-gradient-to-br from-zinc-600 to-zinc-700 text-zinc-400 text-xs rounded-ss-md p-1  '>{value}</span>
        </div>
    )
}
