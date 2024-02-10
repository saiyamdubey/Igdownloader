import React from 'react'

const Loader = () => {
    return (
        <div class="flex flex-row gap-2">
            <div class="w-4 h-4 rounded-[5px]  bg-primary animate-bounce [animation-delay:.7s]"></div>
            <div class="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:.3s]"></div>
            <div class="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:.7s]"></div>
        </div>
    )
}

export default Loader