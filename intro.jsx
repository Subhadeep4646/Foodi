import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

function Intro({ restaurant }) {
    // Check if restaurant is not defined or null
    if (!restaurant) {
        return null;  // Render nothing or a placeholder
    }

    return (
        <div>
            <div>
                <img
                    src={restaurant.banner?.url} // Use optional chaining to prevent errors
                    width={1000}
                    height={300}
                    className='w-full h-[220px] object-cover rounded-xl'
                    alt='Restaurant Banner'
                />
            </div>
            <h2 className='text-3xl font-bold mt-2'>{restaurant.name}</h2>
            <div className='flex mt-2 items-center gap-2' > 
                <Image 
                    src='/star.png' // Assuming 'star.png' is in your public folder or accessible path
                    alt='star'
                    width={20}
                    height={20}
                />
                <label>4.5(56)</label>
            </div>
            <h2 className='text-gray-500 mt-2  flex gap-2 items-center'>
                <MapPin/>
                 {restaurant.address}</h2>
        </div>
    );
}

export default Intro;

