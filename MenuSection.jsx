import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; 
function MenuSection({ restaurant }) {
  const [menuItemList, setMenuItemList] = useState(null);

  const filterMenu = (category) => {
    const result = restaurant?.menu?.filter((item) =>item.category.id== category);
    setMenuItemList(result.length > 0 ? result[0] : null);
  };

  return (
    <div className='grid grid-cols-4 mt-2'>
      <div className='hidden md:flex flex-col mr-10 gap-2'>
        {restaurant?.menu?.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className='flex justify-start'
            onClick={() => filterMenu(item.category.id)}
          >
            {item.category}
          </Button>
        ))}
      </div>
      <div className='col-span-3'>
        {menuItemList && (
          <>
            <h2 className='font-extrabold text-lg'>{menuItemList.category}</h2>
            <div classNae='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {menuItemList.menuItem?.length > 0 ? (
                menuItemList.menuItem.map((item, index) => (
                  <div key={index} className='p-2 border rounded-lg flex flex-col items-center'>
                    <Image
                      src={item?.productImage?.url || '/placeholder-image.png'}
                      alt={item.name}
                      width={120}
                      height={120}
                      className='object-cover w-[120px] h-[120px] rounded-lg'
                    />
                    <div className='text-center mt-2'>
                      <h2 className='font-bold'>{item.name}</h2>
                      <p className='text-gray-600'>{item.price}</p>
                      <p className='text-gray-500'>{item.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No items available in this category.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MenuSection;
