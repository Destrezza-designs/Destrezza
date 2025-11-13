'use client'
import Footor from '@/components/Footor'
import Header from '@/components/product/Header'
import UtilsHeader from '@/components/utils/Header'
import Image from 'next/image'
import React,{useState,useEffect, useMemo} from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { GiSettingsKnobs } from "react-icons/gi";
const data = [
  {
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FFLY09099%20Large.png?alt=media&token=a819db1c-2d9f-4124-a150-3a5b8e3c8fb0",
    "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FFLY09123%20Large.png?alt=media&token=cc13fea2-6a8b-4de3-aefc-de0f610b711b",
    "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FGenerative%20Fill%20copy%20Large.png?alt=media&token=56dc1a6e-964e-4324-be3f-fe22f89a8412",
    "name": "Kizuki",
    "title": "Study table and chair",
    "disc": "Rooted in calm, functional elegance, the Kizuki Study Table & Chair set is a nod to mindful living and purposeful work...",
    "material": "FSC-Certified Solid Oakwood / Natural Rattan Cane / Matte Water-Based Lacquer Finish / Powder-Coated Steel or Brass Connectors (Hidden Joints)",
    "color": "Natural Wood (Warm Oak)Optional finish: Soft Charcoal Stain or Light Ash",
    "care": "Wipe With Soft Damp Cloth Only...",
    "year": "2024 Collection",
    "cat": {
      "category": "Home Office",
      "subCategory": "Writing Desk"
    }
  },
  {
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHelm1.png?alt=media&token=83ac9fb6-baef-4a8f-8a50-bbdf52fc7084",
    "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHelm2.png?alt=media&token=c75a10f5-0ce1-4bb6-89a5-a845fa0386c3",
    "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHelm3.png?alt=media&token=33bc9ce0-5c7d-44a6-a209-fa051355b31b",
    "name": "Helm",
    "title": "Chair",
    "disc": "The Helm Chair embodies a balance of timeless craftsmanship and modern design...",
    "material": "FSC-Certified Solid Oakwood / Natural Rattan Cane Backrest / Upholstered Fabric Seat / Matte Water-Based Lacquer Finish",
    "color": "Natural Wood (Warm Oak) with Blue Upholstery and Subtle Red Piping",
    "care": "Wipe with a soft damp cloth...",
    "year": "2024 Collection",
    "cat": {
      "category": "Living",
      "subCategory": "Chairs & Loveseats"
    }
  },
  {
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FZigZag1.png?alt=media&token=faa44047-5224-4d63-a477-5d111dcbe8a2",
    "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FZigZag2.png?alt=media&token=8aace140-c658-4b45-ba9a-d25f168161e5",
    "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FZigZag1.png?alt=media&token=faa44047-5224-4d63-a477-5d111dcbe8a2",
    "name": "Zig Zag",
    "title": "Single Seater",
    "disc": "The Zig Zag Single Seater is a statement piece that merges bold patterns with refined comfort...",
    "material": "FSC-Certified Solid Oakwood Frame / Upholstered Fabric Seat & Backrest...",
    "color": "Natural Wood Base with Beige Upholstery...",
    "care": "Vacuum or brush lightly...",
    "year": "2024 Collection",
    "cat": {
      "category": "Living",
      "subCategory": "Accent | Lounge Chairs"
    }
  },
  {
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FWellash1.png?alt=media&token=2d733f2c-3912-4cba-ad87-45d394c8ebc5",
    "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FWellash2.png?alt=media&token=9ab13603-1628-4415-84c8-661dd6a5cdd9",
    "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FWellash1.png?alt=media&token=2d733f2c-3912-4cba-ad87-45d394c8ebc5",
    "name": "Wellash",
    "title": "Chair",
    "disc": "The Wellash Chair is an ode to minimal elegance and timeless design...",
    "material": "FSC-Certified Solid Oakwood Frame / Natural Rattan Cane Seat...",
    "color": "Natural Wood (Rich Walnut Tone)...",
    "care": "Dust regularly...",
    "year": "2024 Collection",
    "cat": {
      "category": "Living",
      "subCategory": "Chairs & Loveseats"
    }
  },
  {
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshcaen1.png?alt=media&token=b5aa56a6-c2ab-4c3f-8b01-e34195ad5af4",
    "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshcaen2.png?alt=media&token=10604c19-a303-4a3b-8fa3-9913c14cea11",
    "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshcaen3.png?alt=media&token=7ff34303-d99a-4fe3-97ea-85d1f67a6904",
    "name": "Ashcaen",
    "title": "Dining Table",
    "disc": "The Ashcaen Dining Table is designed as a centerpiece for meaningful gatherings...",
    "material": "FSC-Certified Solid Oakwood Tabletop & Frame...",
    "color": "Natural Wood (Deep Walnut Finish)...",
    "care": "Wipe table and chairs...",
    "year": "2024 Collection",
    "cat": {
      "category": "Dining",
      "subCategory": "Dining Tables"
    }
  },
  {
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FMeridian1.png?alt=media&token=e30c0f29-7f21-4a17-988d-ab0ff04e6b78",
    "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FMeridian2.png?alt=media&token=af03b4f3-5506-403d-b932-f00baf8cd56b",
    "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FMeridian3.png?alt=media&token=6391653a-9201-4f1e-b4cf-7799b50ed698",
    "name": "Meridian",
    "title": "Console",
    "disc": "The Meridian Console is a striking blend of modern curves and timeless craftsmanship...",
    "material": "FSC-Certified Solid Oakwood Frame...",
    "color": "Warm Walnut Frame...",
    "care": "Dust regularly...",
    "year": "2024 Collection",
    "cat": {
      "category": "Living",
      "subCategory": "Consoles"
    }
  },
  {
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshtone3.png?alt=media&token=dcd66bf4-74fa-4f7d-ac27-c80a903dab85",
    "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshtone2.png?alt=media&token=acb86d97-8913-4928-b3f0-220b423bcbce",
    "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshtone1.png?alt=media&token=d633a6f2-16de-4749-80bb-bf2f4e4fff2c",
    "name": "Ashtone",
    "title": "Dining Table",
    "disc": "The Ashtone Dining Table embodies contemporary sophistication...",
    "material": "Engineered Stone Tabletop...",
    "color": "Soft Grey Stone Top...",
    "care": "Clean the tabletop...",
    "year": "2024 Collection",
    "cat": {
      "category": "Dining",
      "subCategory": "Dining Tables"
    }
  },
  {
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCrown1.png?alt=media&token=b037495f-4153-482d-b913-dbbf5f39d23e",
    "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCrown2.png?alt=media&token=a8cf3161-1b53-44d3-8264-6ac481da3d36",
    "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCrown2.png?alt=media&token=a8cf3161-1b53-44d3-8264-6ac481da3d36",
    "name": "Crown",
    "title": "Single Seater",
    "disc": "The Crown Single Seater blends mid-century elegance...",
    "material": "FSC-Certified Solid Wood Frame...",
    "color": "Walnut Brown Frame...",
    "care": "Vacuum fabric regularly...",
    "year": "2024 Collection",
    "cat": {
      "category": "Living",
      "subCategory": "Accent | Lounge Chairs"
    }
  },
  {
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FFlummox3.png?alt=media&token=ac60f135-4d11-4dab-aceb-411eb3d4ccea",
    "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FFlummox2.png?alt=media&token=6a611158-5012-4d25-b5bd-6463cab81860",
    "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FFlummox1.png?alt=media&token=20eb7cde-bf5e-4e14-ac6f-690a0fe50f6e",
    "name": "Flummox",
    "title": "King Bed",
    "disc": "The Flummox King Bed is a modern sanctuary of comfort...",
    "material": "Solid Wood Frame with Upholstered Panels...",
    "color": "Soft Taupe Upholstered Frame...",
    "care": "Vacuum upholstery regularly...",
    "year": "2024 Collection",
    "cat": {
      "category": "Bedroom",
      "subCategory": "Beds"
    }
  },
  {
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCosmos1.png?alt=media&token=cc19c536-4f5c-451b-a5f0-6b29188c8592",
    "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCosmos2.png?alt=media&token=b050e360-8915-4e6d-bb7d-2e778c0f4538",
    "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCosmos3.png?alt=media&token=6a19c72a-ed4b-479b-9774-9d8e84a46037",
    "name": "Cosmos",
    "title": "Console",
    "disc": "The Cosmos Console embodies refined minimalism...",
    "material": "Solid Wood Frame / Engineered Wood Panel...",
    "color": "Natural Wood Frame with Deep Blue Fluted Front",
    "care": "Dust regularly...",
    "year": "2024 Collection",
    "cat": {
      "category": "Living",
      "subCategory": "Consoles"
    }
  },
  {
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCarbon2.png?alt=media&token=e4f92ec4-4aad-4440-9ca8-8e42c3d3d854",
    "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCarbon1.png?alt=media&token=d2fc9179-74f9-4e8a-83ff-87017dcb27b2",
    "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCarbon3.png?alt=media&token=cb992ba9-b1be-41ec-af83-a9f6ff9b46dc",
    "name": "Carbon",
    "title": "Single Seater",
    "disc": "The Carbon Single Seater strikes a bold balance...",
    "material": "Solid Wood Frame / Rattan Side Panels...",
    "color": "Black Wooden Frame...",
    "care": "Vacuum upholstery regularly...",
    "year": "2024 Collection",
    "cat": {
      "category": "Living",
      "subCategory": "Accent | Lounge Chairs"
    }
  },
  {
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FBansih2.png?alt=media&token=cb16bfc7-ed60-473e-b4c6-a944a6f8fc00",
    "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FBansih3.png?alt=media&token=20ff6b49-0771-4573-b66f-1348c0c1e09d",
    "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FBansih4.png?alt=media&token=c312c47c-c974-4746-85eb-0facb36ea051",
    "name": "Bansih",
    "title": "Sofa Family",
    "disc": "The Bansih Sofa Family blends contemporary elegance...",
    "material": "Solid Wood Frame / Rattan Side Panels...",
    "color": "Natural Wood with Rattan Detailing...",
    "care": "Vacuum cushions and upholstery regularly...",
    "year": "2024 Collection",
    "cat": {
      "category": "Living",
      "subCategory": "Sofas & Sectionals"
    }
  },
  {
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHeaven3.png?alt=media&token=d657f2ec-5b17-47d7-a4b7-1ffcab33c1b8",
    "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHeaven2.png?alt=media&token=96a3199b-00e4-42e7-b4fb-881ec199afd8",
    "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHeaven1.png?alt=media&token=7d5e1918-297c-4143-9f39-2d01cbff140b",
    "name": "Heaven",
    "title": "Sofa Family",
    "disc": "The Heaven Sofa Family is a modern blend of simplicity and luxury...",
    "material": "Solid Wood Accents / High-Density Foam Cushioning...",
    "color": "White Upholstery with Wooden Side Accents...",
    "care": "Vacuum upholstery regularly...",
    "year": "2024 Collection",
    "cat": {
      "category": "Living",
      "subCategory": "Sofas & Sectionals"
    }
  },
  {
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshrattan3.png?alt=media&token=8cf96504-6e96-40c0-9197-297dfc51e8d3",
    "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshrattan2.png?alt=media&token=a93a015c-a067-49d4-adf6-a8a9aa93fdbb",
    "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshrattan1.png?alt=media&token=7b234e65-1744-455b-bbd2-fb6f00649b0a",
    "name": "Ashrattan",
    "title": "Chair & Table Set",
    "disc": "The Ashrattan Chair & Table Set embodies timeless craftsmanship...",
    "material": "Solid Wood Frame / Natural Rattan Backrest...",
    "color": "Natural Wood with Rattan Detailing...",
    "care": "Dust rattan and wood surfaces...",
    "year": "2024 Collection",
    "cat": {
      "category": "Dining",
      "subCategory": "Dining Collections"
    }
  },
  {
    "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHeavenChair2.png?alt=media&token=3c2fb938-349f-4ac7-b92b-98693f98bcf0",
    "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHeavenChair2.png?alt=media&token=3c2fb938-349f-4ac7-b92b-98693f98bcf0",
    "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHeavenChair1.png?alt=media&token=e31abe1d-fb32-4684-95f1-d31e0702c3ff",
    "name": "Heaven",
    "title": "Chair",
    "disc": "The Heaven Chair is a plush and inviting single-seater...",
    "material": "Solid Wood Accents / High-Density Foam Cushioning...",
    "color": "White Upholstery with Natural Wooden Side Accents",
    "care": "Vacuum upholstery regularly...",
    "year": "2024 Collection",
    "cat": {
      "category": "Living",
      "subCategory": "Chairs & Loveseats"
    }
  }
];

const categories = {
    "Entryway": ["Shoe Racks", "Console Tables", "Benches", "Swing"],
    "Living": [
      "Sofas & Sectionals",
      "Chairs & Loveseats",
      "Accent | Lounge Chairs",
      "Daybeds & Diwans",
      "Coffee Tables",
      "End Tables",
      "Ottomans | Stools & Benches",
      "Loungers",
      "Consoles",
      "Media Consoles",
    ],
    "Dining": [
      "Dining Collections",
      "Dining Tables",
      "Dining Chairs",
      "Dining Benches",
      "Bar & Counter Stools",
      "Buffet Consoles",
      "Bar Cabinets",
    ],
    "Bedroom": [
      "Beds",
      "Nightstands",
      "Dressers",
      "Armoires | Wardrobes",
      "Ottomans & Benches",
    ],
    "Home Office": ["Writing Desk", "Writing Chair", "Book Shelves"],
  };
  

type DataItem = {
  mainImage: string;
  image: string;      // Added missing properties
  image2: string;     // Added missing properties
  name: string;
  title: string;
  disc: string;
  material: string;   // Added missing properties
  color: string;      // Added missing properties
  care: string;       // Added missing properties
  year: string;       // Added missing properties
  cat: {              // Properly typed cat property
    category: string;
    subCategory: string;
  };
  [key: string]: string | number | boolean | { category: string; subCategory: string };
};
  
  type Categories = Record<string, string[]>;

 
  interface Props {
    initialCat?: string | null;
    initialType?: string | null;
  }
  
  
const ProductClient = ({ initialCat,initialType }: Props) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    // URL params (reactive to navigation)
    

    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [mobileViewNavbar,setMobileViewNavbar] = useState(false);
    const [filteredDataState, setFilteredDataState] = useState<DataItem[]>(data);
    const [matchItems,setMatchItems] = useState(true);

  // Toggle checkbox (user-driven)
   const handleFilterChange = (item: string) => {
    const newSelected = selectedFilters.includes(item)
        ? selectedFilters.filter(f => f !== item)
        : [...selectedFilters, item];

    localStorage.setItem("selectedCat", JSON.stringify(""));
    localStorage.setItem("selectedItem", JSON.stringify(""));
    setSelectedFilters(newSelected);

    const filtered = filterDataByFilters(newSelected);

    if (filtered.length === 0) {
        console.log("⚠️ Filtered data is empty for selected filters:", newSelected);
        setFilteredDataState(data);
        setMatchItems(false);
    } else {
        setFilteredDataState(filtered);
        setMatchItems(true);
    }
    };

    const normalize = (text: string) =>
        text.toLowerCase().replace(/\s+/g, " ").trim();



    // Split a filter label into meaningful words
    const splitFilterWords = (filter: string) =>
        filter
          .split(/[\s&|]+/) // split by space, &, or |
          .map((w) => w.toLowerCase())
          .map((w) => {
            if (w.endsWith("es")) return w.slice(0, -2);
            if (w.endsWith("s")) return w.slice(0, -1);
            return w;
          })
          .filter(Boolean);

        
      

    // Filter data
    const filterDataByFilters = (activeFilters: string[]) => {
        if (activeFilters.length === 0) return data;

        return data.filter((item) => {
            const text = normalize(`${item.name} ${item.title} ${item.disc}`);
            const catCategory = normalize(item.cat?.category || "");
            const catSub = normalize(item.cat?.subCategory || "");

            // Match against product info or category/subcategory fields
            return activeFilters.some((filter) => {
            const f = normalize(filter);
            return (
                text.includes(f) ||
                catCategory.includes(f) ||
                catSub.includes(f)
            );
            });
        });
        };

    // No manual history patching needed; we rely on useSearchParams above.
    
    

      useEffect(() => {

        const handleStorageChange = () => {
            const Item = JSON.parse(localStorage.getItem("selectedItem") || "null");
            if (Item && Item !== "no-filter") {
            console.log("🔁 Detected storage change, applying filter:", Item);
            handleFilterChange(Item);
            }
        };

        // Listen for custom event or localStorage updates
        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("productFilterUpdate", handleStorageChange);

        // Run once initially too
        handleStorageChange();

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("productFilterUpdate", handleStorageChange);
        };
      }, []);
    
    

  return (
    <div className='text-black' >

        <div className='hidden lg:flex  mx-[48px] mt-[48px]' >
            <Header />
        </div>
        <div className='flex lg:hidden mt-[-22px]' >
            <UtilsHeader />
        </div>

        <div className='mt-[0px] lg:mt-[48px] mx-[16px] lg:mx-[48px]' >
            
            <div className='mt-[30px] lg:mt-[80px]' >
                <p className='text-[#868684] hidden  text-[14px] uppercase text-center ' >products</p>
                <div className='flex flex-col justify-center items-center' >
                    <h1 className="text-[36px] lg:text-[80px] leading-[40px] lg:leading-[68px] mt-[19px] font-[600] uppercase text-left lg:text-center bg-[url('/12.jpeg')] bg-cover bg-center text-transparent bg-clip-text">
                        Designed to Define, Built <br className='hidden lg:flex' /> to Last
                    </h1>
                </div>
            </div>

            <div className='hidden lg:flex w-[100vw] mx-[-48px] mt-[30px] bg-black text-white text-center h-[64px] justify-center items-center ' >
                <p className='text-[18px]' >Our products embody a seamless fusion of form and function — where craftsmanship meets innovation.</p>
            </div>
            
            {/* Desktop View */}
           <div className='hidden lg:flex gap-[30px] mt-[40px] ' >  
                <div className='w-[40vw] flex flex-col gap-[24px] ' >
                    {Object.entries(categories).map(([category, items], idx) => (
                        <div key={idx} className="space-y-3 border-t-[1px] border-[#CCCCCC] pt-[24px]">
                            
                            <h3 className="text-[14px] font-medium text-gray-800">{category}</h3>

                            
                            <div className="flex flex-col space-y-2">
                                {items.map((item, i) => (
                                <label
                                    key={i}
                                    className="flex items-center space-x-2 text-[14px] text-gray-700"
                                >
                                    <input
                                    checked={
                                      selectedFilters.includes(item) 
                                    }
                                    type="checkbox"
                                    onChange={() => handleFilterChange(item)}
                                    className="h-4 w-4 rounded border-gray-400 text-black focus:ring-0"
                                    />
                                    <span>{item}</span>
                                </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    {matchItems ? '' : <p className='text-[24px] mb-[12px]' >Sorry No items, showing all Products</p> }
                    <div className="hidden lg:grid grid-cols-2 h-fit justify-start gap-[8px] gap-x-[8px] ">
                        
                        {filteredDataState.map((item, index) => (
                            <button 
                                onClick={() => {
                                    router.push(`/product/${index+1}`)
                                }}

                                key={`desktop-${index}`} className=" h-fit">
                                <div className='relative h-[428px] rounded-[8px] overflow-hidden'>
                                    <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#00000040] to-transparent'></div>
                                    <Image 
                                        src={item.mainImage} 
                                        alt={item.name} 
                                        width={1000} 
                                        height={1000} 
                                        className=" h-full object-cover"
                                    />
                                    <div className='absolute bottom-0 left-0 p-[20px] text-white text-left'>
                                        <p className='text-[36px] font-medium uppercase'>{item.name}</p>
                                        <p className='text-[20px] mt-[-10px] font-extralight uppercase'>{item.title}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className='lg:hidden mt-[28px]  overflow-hidden' >
                <div
                    className={`fixed left-0 top-0 z-50 bg-[#ffffff80] backdrop-blur-[8px] w-screen h-screen transition-transform duration-250 ease-in-out ${
                        mobileViewNavbar ? 'translate-x-0' : '-translate-x-full'
                    }`}
                    >
                    <div className="flex justify-between items-center">
                        <p className="mt-[48px] mx-[48px] text-[24px] w-full flex justify-between">
                        Filter
                        <button
                            onClick={() => setMobileViewNavbar(false)}
                            className="text-[14px] bg-white w-[36px] h-[36px] rounded-full shadow-lg shadow-black/10"
                        >
                            X
                        </button>
                        </p>
                    </div>

                    {/* 👇 Scrollable content */}
                    <div className="mx-[48px] flex flex-col gap-[24px] mt-[14px] overflow-y-auto  h-[calc(100vh-120px)] pb-[24px]">
                        {Object.entries(categories).map(([category, items], idx) => (
                        <div key={idx} className="space-y-3 border-t-[1px] border-[#CCCCCC] pt-[24px]">
                            <h3 className="text-[14px] font-medium text-black">{category}</h3>

                            <div className="flex flex-col space-y-2">
                            {items.map((item, i) => (
                                <label
                                key={i}
                                className="flex items-center space-x-2 text-[14px] text-black"
                                >
                                <input
                                    type="checkbox"
                                    checked={
                                      selectedFilters.includes(item) }
                                    onChange={() => handleFilterChange(item)}
                                    className="h-4 w-4 rounded border-gray-400 text-black focus:ring-0"
                                />
                                <span>{item}</span>
                                </label>
                            ))}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

                <div className='w-full flex justify-end' >
                    <button onClick={()=>setMobileViewNavbar(true)} className='flex  py-[4px] rounded-[24px] ' >
                        <p className='text-[14px]   flex justify-center items-center gap-[10px] ' >Filter <GiSettingsKnobs size={20} className='transform rotate-90' /></p>
                    </button>
                </div>
                {matchItems ? '' : <p className='text-[12px]' >Sorry No items, showing all Products</p> }
                <div className="lg:hidden grid grid-cols-2 gap-[3px] gap-y-[3px] mt-[14px] w-full">
                    {filteredDataState.map((item, index) => (
                        <button 
                            key={`mobile-${index}`} 
                            onClick={() => router.push(`/product/${index + 1}`)}
                            className="flex flex-col h-fit"
                            >
                            <div className="relative h-[45vw] w-full rounded-[8px] overflow-hidden">
                                {/* Gradient overlay */}
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#00000040] to-transparent"></div>

                                {/* Image */}
                                <Image
                                    blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'
                                    src={item.mainImage}
                                    alt={item.name}
                                    fill
                                    className="object-cover w-full h-full"
                                    sizes="(max-width: 768px) 50vw, 100vw"
                                    />

                                {/* Title overlay */}
                                <div className="absolute bottom-0 left-0 p-[10px] text-white text-left">
                                    <p className="text-[18px] font-medium uppercase">{item.name}</p>
                                    <p className="text-[12px] mt-[-4px] font-extralight uppercase">{item.title}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

        </div>
        <Footor />
    </div>
  )
}

export default ProductClient