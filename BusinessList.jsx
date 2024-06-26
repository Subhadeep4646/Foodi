"use client";
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../_utils/GlobalApi';
import BusinessItem from './Businessitem';
import Businessitemskelton from './Businessitemskelton';

 function BusinessList() {
  const params = useSearchParams();
  const [category, setCategory] = useState('all');
  const [businessList, setBusinessList] = useState([]);
  const[loading,setLoading]=useState(false)

  useEffect(() => {
    const categoryParam = params.get('category') || 'all';
    setCategory(categoryParam.trim());
    getBusinessList(categoryParam.trim());
  }, [params]);

  const getBusinessList = async (category_) => {
    try {
      setLoading(true);
      console.log('Fetching businesses for category:', category_);
      const response = await GlobalApi.GetBusiness(category_);
      setLoading(false);
      console.log('Businesses fetched:', response);
      if (response && response.restaurants) {
        setBusinessList(response.restaurants);
      } else {
        setBusinessList([]); // Handle empty response
      }
    } catch (error) {
      console.error('Error fetching business list:', error);
      setBusinessList([]);
    }
  };
            
  return (
    <div className='mt-5'>
      <h2 className='font-bold text-2xl'>Popular {category} Restaurants</h2>
      <h2 className='font-bold text-primary'>{businessList.length} Results</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap- mt-3'>
        {!loading?businessList.map((restaurant, index) => (
          <BusinessItem key={index} business={restaurant} />
        )):
        [1,2,3,4,5,6,7,8].map((item,index)=>(
         <Businessitemskelton/>

        ))
      }
      </div>
    </div>
  );
}

export default BusinessList;
