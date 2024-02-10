import React from 'react'

const Loader = () => {
    return (
        <div class="w-64 h-64 relative bg-white rounded-4 overflow-hidden">
            <div class="absolute left-0 bottom-0 w-40 h-40 bg-red-500 transform rotate-45 translate-x-2/10 translate-y-4/10 shadow-orange animate-slide"></div>
            <div class="absolute left-10 top-10 w-16 h-16 rounded-full bg-red-500 transform origin-35-145 animate-rotate"></div>
        </div>
    )
}

export default Loader