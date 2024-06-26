"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import GlobalApi from '../_utils/GlobalApi';
import Image from "next/image";
import { ArrowRightCircle } from 'lucide-react';

function CategoryList() {
    const listRef = useRef(null);
    const [CategoryList, setCategoryList] = useState([]);
    const params = useSearchParams();

    useEffect(() => {
        getCategoryList();
    }, []);

    useEffect(() => {
        console.log(params.get('category'));
    }, [params]);

    const getCategoryList = () => {
        GlobalApi.GetCategory().then(resp => {
            console.log(resp.categories);
            setCategoryList(resp.categories);
        });
    };

    const ScrollRightHandler = () => {
        if (listRef.current) {
            listRef.current.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative mt-10">
            <div className="flex gap-4 overflow-x-auto pb-4" ref={listRef}>
                {CategoryList && CategoryList.map((category, index) => (
                    <Link href={`?category=${category.slug}`} key={index} legacyBehavior>
                        <a className="flex flex-col items-center gap-2 border p-3 rounded-xl min-w-[120px] bg-white shadow-md hover:shadow-lg transition-shadow duration-200 hover:border-primary hover:bg-orange-50 cursor-pointer group">
                            <Image 
                                src={category.icon?.url || '/default-icon.png'} // Fallback to a default icon if url is missing
                                alt={category.name}
                                width={60}
                                height={60}
                                className="group-hover:scale-125 transition-transform duration-200"
                            />
                            <h2 className="text-sm font-medium text-gray-700 group-hover:text-primary">{category.name}</h2>
                        </a>
                    </Link>
                ))}
            </div>
            <ArrowRightCircle 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary rounded-full text-white h-8 w-8 cursor-pointer hover:bg-primary-dark transition-all duration-200"
                onClick={ScrollRightHandler} 
            />
        </div>
    );
}

export default CategoryList;
