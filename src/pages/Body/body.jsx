import React from "react";
import { ReactDOM } from "react";
import '../Body/globalStyles.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export const Categories = () => {
    const categories = [{
        id: 'id1',
        name: "All",
    },
    {
        id: 'id2',
        name: "Fresh",
    },
    {
        id: 'id3',
        name: "Amazon Mini TV",
    },
    {
        id: 'id4',
        name: "Sell",
    },
    {
        id: 'id5',
        name: "Best Sellers",
        fresh: {
            name: "Discount 40%",
        }
    },
    {
        id: 'id6',
        name: "Mobiles",
    },
    {
        id: 'id9',
        name: "Today's Deals",
        fresh: {
            name: "Sale 20%",
        }
    },
    {
        id: 'id7',
        name: "Customer Service",
    },
    {
        id: 'id8',
        name: "Prime"
    }];

    return (
        <div className="nav-categories">
            {
                categories.map((cat) => {
                    return (<a key={cat.id}>{cat.name} {cat.fresh?.name}</a>);
                })
            }
        </div>
    )
}

export const Carousal = () => {
    return (
        <div className="carousal-container">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Dec23/Shoes/EOSS/Unrec/Bob/Sports/3000._CB581991812_.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/march/brands/GW/Under_1499_Tallhero_3000x1200._CB561212093_.jpg" alt="" />
        </div>
    )
    // return (
    //     <Swiper
    //       spaceBetween={0}
    //       slidesPerView={1}
    //       navigation
    //       pagination={{ clickable: true }}
    //       scrollbar={{ draggable: true }}
         
    //     >
    //       <SwiperSlide> <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Dec23/Shoes/EOSS/Unrec/Bob/Sports/3000._CB581991812_.jpg" alt="" /></SwiperSlide>
    //       <SwiperSlide><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg" alt="" /></SwiperSlide>
    //       <SwiperSlide><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/march/brands/GW/Under_1499_Tallhero_3000x1200._CB561212093_.jpg" alt="" /></SwiperSlide>
         
  
    //     </Swiper>
    //   );
}

export const Body = () => {
    const gridInfo = [
        {
            id: "grid-card-major-1",
            title: 'Appliances for your home | Up to 55% off',
            child: [
                {
                    title: "Air Conditioners",
                    img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'
                },
                {
                    title: "Refrigerator",
                    img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'
                },
                {
                    title: "Microwaves",
                    img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg'
                },
                {
                    title: "Washing Machines",
                    img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg'
                }
            ],
        },
        {
            id: "grid-card-major-1",
            title: 'Up to 60% off | Styles for men ',
            child: [
                {
                    title: "Clothing",
                    img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg'
                },
                {
                    title: "Footwear",
                    img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg'
                },
                {
                    title: "Watches",
                    img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg'
                },
                {
                    title: "Bags & Wallets",
                    img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg'
                }
            ],
        },
        {
            id: "grid-card-major-1",
            title: 'Revamp your home in style',
            child: [
                {
                    title: "Cushion and Covers",
                    img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg'
                },
                {
                    title: "Figurines ,vases and more ",
                    img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg'
                },
                {
                    title: "Home storage",
                    img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_storage_1._SY116_CB584596691_.jpg'
                },
                {
                    title: "Light Solutions",
                    img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_lighting_2._SY116_CB584596691_.jpg'
                }
            ],
        }, {
            id: "grid-card-major-1",
            title: 'Starting ₹99 | All your home improvement needs ',
            child: [
                {
                    title: "Spin mops,wipes and more",
                    img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_4._SY116_CB600489960_.jpg'
                },
                {
                    title: "Bathroom hardware & accessories",
                    img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_3._SY116_CB600489960_.jpg'
                },
                {
                    title: "Hammer , screwdrivers & more",
                    img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_7._SY116_CB600489960_.jpg'
                },
                {
                    title: "Extension Boards , plugs & more",
                    img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_5._SY116_CB600489960_.jpg'
                }
            ],
        }

    ]
    return (
        <div className="grid-layout">
            {gridInfo.map((grid) => (
                <div key={grid.id} className="grid-card" id={grid.id}>
                    <p className='grid-title'>{grid.title}</p>
                    <div className="card-internal-grid">
                        {grid.child.map((child, childIndex) => (
                            <div key={`${grid.id}-${childIndex}`} className='--internal-div' id={`${grid.id}-${childIndex}`}>
                                <img src={child.img} alt={child.title} />
                                <p>{child.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
    
    
}


export const Deals = () => {
    const objects = [
      {
        title: "iQOO Z9 5G",
        deal: "upto 30% off",
        img: "https://m.media-amazon.com/images/I/41snmTn9mrL._AC_SY200_.jpg"
      },
      {
        title: "iQOO Z9 5G",
        deal: "upto 30% off",
        img: "https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
      },
      {
        title: "iQOO Z9 5G",
        deal: "upto 30% off",
        img: "https://m.media-amazon.com/images/I/411gvmvNQzL._AC_SY200_.jpg"
      },
      {
        title: "iQOO Z9 5G",
        deal: "upto 30% off",
        img: "https://m.media-amazon.com/images/I/411iWoJEJjL._AC_SY200_.jpg"
      },
      {
        title: "iQOO Z9 5G",
        deal: "upto 30% off",
        img: "https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg"
      },
      {
        title: "iQOO Z9 5G",
        deal: "upto 30% off",
        img: "https://m.media-amazon.com/images/I/41GsqdiCvOL._AC_SY200_.jpg"
      },
     
    ];
  
    return (
    <div className="deal-outer-grid">
       <h2>Todays Deals</h2>
      <div className="deal-grid">
        {objects.map((obj, index) => (
          <div className="deal-item" key={index}>
            <img src={obj.img} alt="Product" />
            <div className="details">
              <h3>{obj.deal}</h3>
              <p>{obj.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  };


  
  export const HomeFurnishing = () => {
    const imageInfo = [
        'https://m.media-amazon.com/images/I/71QGsGD2ZUL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/81d5QvC0v6L._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/71q9F8ZalDL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/71FiQ8q+6jL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/510lOFJnjcL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/41dDn6bij2L._AC_SY200_.jpg'
    ];

    return (
        <div className='--Home-furnishing'>
        <h3>Up to 65% off | Home furnishing curated from stores nearby</h3>
        <div className="home-furnishing">
            {imageInfo.map((imageUrl, index) => (
                <div key={index} className="image-container">
                    <img src={imageUrl} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </div>
        </div>
    );
};