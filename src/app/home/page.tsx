'use client'
import React, {useState, useEffect} from 'react'
import sampleData from "@/data/sampleData.json";
import { SidebarDemo } from '@/components/SidebarPage';
import { type } from 'os';

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

const Home = () => {
    const [data, setData] = useState<Data[]>(sampleData.data)
  return (
    <SidebarDemo data={data} description="Add to Cart" />
  )
}
export default Home
