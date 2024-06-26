import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MenuSection from './MenuSection'

function RestroTabs({restaurant}) {
  return (
    <Tabs defaultValue="Category" className="w-full mt-10">
    <TabsList>
      <TabsTrigger value="category">Category</TabsTrigger>
      <TabsTrigger value="about">about</TabsTrigger>
      <TabsTrigger value="review">reviews</TabsTrigger>
    </TabsList>
    <TabsContent value="category">
      <MenuSection restaurant={restaurant}/>
    </TabsContent>
    <TabsContent value="about">About</TabsContent>
    <TabsContent value="review">Review</TabsContent>
  </Tabs>
  
  )
}

export default RestroTabs
