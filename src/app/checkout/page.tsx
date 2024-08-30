'use client'
import { SidebarDemo, Dashboard } from '@/components/SidebarPage'
import React, {useState, useEffect} from 'react'
import sampleData from "@/data/sampleData.json"

interface Data {
  id: number;
  images: string[];
  title: string;
  description: string;
  price: number;
  location: string;
  price_range: string;
  bedrooms: number;
  amenities: string[];
}

const Checkout = () => {
  const [checkoutData, setCheckoutData] = useState<Data[]>(() => {
    const data = localStorage.getItem('checkout');
    return data ? JSON.parse(data) : [];
  });
  return (
    <div>
      <SidebarDemo data={checkoutData} description="Remove From Cart" />
    </div>
  )
}

export default Checkout