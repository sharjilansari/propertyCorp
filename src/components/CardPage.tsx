'use client'
import * as React from "react";
import {useEffect, useState} from "react";
import { FaHome, FaShoppingCart, FaSearch, FaDollarSign, FaBed } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ButtonPage from "./ButtonPage";



import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Label } from "@/components/ui/label";
import { type } from "os";
import Home from "@/app/home/page";
import { usePathname } from "../../node_modules/next/navigation";

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

interface DataObj{
  data: Data[]
}

let localCheckoutData: Data[] = [] 

export default function CardWithForm(props: {data: {data: DataObj}, buttonDesc: string }) {
  // console.log("Card",props.data);
  // const receivedData: Data[] = props.data ;
  const [receivedData, setReceivedData] = useState<Data[]>(props.data);

  const pathname = usePathname();
  // const router = useRouter();
  console.log(typeof(usePathname()))

  const clickToDB = (index: number) => {
    const checkoutData: Data = {
      id: receivedData[index].id,
      images: receivedData[index].images,
      title: receivedData[index].title,
      description: receivedData[index].description,
      price: receivedData[index].price,
      location: receivedData[index].location,
      price_range: receivedData[index].price_range,
      bedrooms: receivedData[index].bedrooms,
      amenities: receivedData[index].amenities,
    }
    localCheckoutData.push(checkoutData)
    localStorage.setItem('checkout', JSON.stringify(localCheckoutData));
  }

  const clickToDEl = (index: number) => {
    if (index >= 0 && index < receivedData.length) {
      const updatedData = [...receivedData];
      updatedData.splice(index, 1);

      // Update the state with the modified data
      setReceivedData(updatedData);

      // Update localStorage with the modified data
      localStorage.setItem('checkout', JSON.stringify(updatedData));
    }
    // localStorage.setItem('checkout', JSON.stringify(receivedData));
  }

const handleClick = (index: number) => {
  // Check the current route or any condition
  if(pathname === '/'){
      clickToDB(index);
  }
  else if (pathname === '/home') {
      clickToDB(index);
  } else if (pathname === '/checkout') {
    // Run function B
    clickToDEl(index);
    // console.log('Function B');
  }
  // Call the passed onClick function
};


  if (!receivedData || receivedData.length === 0) {
    return (<h1>Nothing to show</h1>)
  }

  // console.log("cardpage",props.buttonDesc)

  return (
    <>
    {receivedData.map((each: Data, index) => (
        <Card className="max-w-[400px] " key={index}>
          <CardHeader>
            <CardTitle>{each.title}</CardTitle>
            <CardDescription>{each.description}</CardDescription>
            <CardDescription><span className="flex"><FaLocationDot className="m-1"/>{each.location}</span></CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="m-6">
              <CarouselContent>
                {each.images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="p-0">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-4">
                          <span className="text-4xl font-semibold">
                            <img src={img} alt="images" />
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <CardDescription><span className="flex">Price: <FaDollarSign className="m-1" />{each.price}</span></CardDescription>
            <CardDescription><span className="flex">No of Bedrooms: <FaBed className="m-1" />{each.bedrooms}</span></CardDescription>
            <CardDescription>Aminites: {each.amenities.join(',')}</CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Read More</Button>
            <ButtonPage description={props.buttonDesc} onClick={() => handleClick(index)} />
          </CardFooter>
        </Card>
      ))}
      
    </>
  );
}
