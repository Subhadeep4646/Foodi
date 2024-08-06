"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import { usePathname } from 'next/navigation'
import Intro from '@/app/(routes)/restaurant/_components/intro'
import React, { useEffect, useState } from 'react'
import RestroTabs from '../_components/RestroTabs'

function RestaurantDetails() {
  const param=usePathname();
  const [restaurant,setRestaurant]=useState([])
  useEffect(()=>{
        GetRestaurantDetail(param.split('/')[2])
  },[])
  const GetRestaurantDetail=(businessid)=>{
    GlobalApi.GetBusinessDetail(businessid).then(resp=>{
      console.log(resp)
      setRestaurant(resp.restaurant)
    })
  }
  return (
    <div>
       <Intro restaurant={restaurant}/>
       <RestroTabs restaurant={restaurant}/>
    </div>
  )
  function Checkout() {
  const SendEmail = async () => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user?.primaryEmailAddress.emailAddress,
        }),
      });

      if (!response.ok) {
        toast('Error while sending email');
      }
    } catch (err) {
      toast('Error while sending email');
    }
  };

  return (
    <div>
      <button onClick={SendEmail}>Send Email</button>
    </div>
  );
}
}
export default RestaurantDetails
