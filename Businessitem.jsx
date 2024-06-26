import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BusinessItem = ({ business }) => {
  console.log("Slug:", business.id); // Check if business.slug is defined here

  return (
    <Link href={'/restaurant/'+business.id}
    className="border rounded-xl p-4 mb-4 shadow-lg hover:border-primary cursor-pointer hover:bg-orange-100">
      <div className="relative h-40 w-full rounded-xl overflow-hidden">
        <Image 
          src={business?.banner?.url || '/default-image.jpg'} 
          alt={business?.name || 'Restaurant Image'}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="mt-2">
        <h2 className="font-bold text-lg">{business?.name}</h2>
        <div className="flex justify-between items-center mt-1">
          <div className="flex items-center gap-2">
            <Image src="/star.png" alt="star" width={14} height={14} />
            <label className="text-gray-400 text-sm">4.5</label>
            {business?.restroType && (
              <h2 className="text-gray-400 text-sm">{business.restroType[0]}</h2>
            )}
          </div>
          {business?.categories && (
            <h2 className="text-sm text-primary">{business.categories[0]?.name}</h2>
          )}
        </div>
      </div>
    </Link>
  );
}

export default BusinessItem;
