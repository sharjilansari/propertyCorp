'use client'
import { SidebarDemo, Dashboard } from '@/components/SidebarPage'
import React, {useState, useEffect} from 'react'
import sampleData from "@/data/sampleData.json"

const Checkout = () => {
  const [checkoutData, setCheckoutData] = useState(JSON.parse(localStorage.getItem('checkout')));
  return (
    <div>
      <SidebarDemo data={checkoutData} description="Remove From Cart" />
    </div>
  )
}

export default Checkout