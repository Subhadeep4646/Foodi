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
}
export default RestaurantDetails
