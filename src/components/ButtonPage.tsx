import React from 'react'
import { Button } from './ui/button'
import { FaShoppingCart } from "react-icons/fa";
import Home from '@/app/home/page';
import { useRouter } from 'next/navigation';
import { usePathname } from '../../node_modules/next/navigation';

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

let localCheckoutData: Data[] = [] 

const ButtonPage = (props: { description: string, onClick: () => void}) => {
//     const pathname = usePathname();
//     const router = useRouter();
//     console.log(typeof(usePathname()))
  
//   const handleClick = () => {
//     // Check the current route or any condition
//     if(pathname === '/'){
//         props.onClick();
//     }
//     else if (pathname === '/home') {
//         props.onClick();
//     } else if (pathname === '/checkout') {
//       // Run function B
//       console.log('Function B');
//     }
//     // Call the passed onClick function
//   };

  return (
    <>
    <Button onClick={() => props.onClick()}>{props.description}<FaShoppingCart /></Button>
    </>
  )
}

export default ButtonPage