'use client'
import Footor from '@/components/Footor'
import Header from '@/components/product/Header'
import UtilsHeader from '@/components/utils/Header'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import ImageLoader from '@/components/utils/ImageLoader'

const data = [
    {
        "mainImage" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FFLY09099%20Large.png?alt=media&token=a819db1c-2d9f-4124-a150-3a5b8e3c8fb0",
        "image" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FFLY09123%20Large.png?alt=media&token=cc13fea2-6a8b-4de3-aefc-de0f610b711b",
        "image2":"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FGenerative%20Fill%20copy%20Large.png?alt=media&token=56dc1a6e-964e-4324-be3f-fe22f89a8412",
        "name" : "KIzuki",
        "title" : "Study table and chair",
        "disc" : "Rooted in calm, functional elegance, the Kizuki Study Table & Chair set is a nod to mindful living and purposeful work. Inspired by Japanese simplicity and crafted with natural materials, it creates a serene workspace where clarity, creativity, and comfort coexist.Whether it’s for a home office, creative nook, or reading corner, this set offers a peaceful no clutter, no distractions. Just you and your thoughts.",
        "material": "FSC-Certified Solid Oakwood / Natural Rattan Cane / Matte Water-Based Lacquer Finish / Powder-Coated Steel or Brass Connectors (Hidden Joints)",
        "color":"Natural Wood (Warm Oak)Optional finish: Soft Charcoal Stain or Light Ash",
        "care":"Wipe With Soft Damp Cloth Only. Avoid Direct Sunlight, Excess Moisture, Or Abrasive Cleaners. Use Coasters and Mats to Prevent Surface Marks. Periodically Check and Tighten Joints Every 6–8 Months.",
        "year":"2024 Collection"
    },
    {
        "mainImage" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHelm1.png?alt=media&token=83ac9fb6-baef-4a8f-8a50-bbdf52fc7084",
        "image" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHelm2.png?alt=media&token=c75a10f5-0ce1-4bb6-89a5-a845fa0386c3",
        "image2":"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHelm3.png?alt=media&token=33bc9ce0-5c7d-44a6-a209-fa051355b31b",
        "name": "Helm",
        "title": "Chair",
        "disc": "The Helm Chair embodies a balance of timeless craftsmanship and modern design. Its rounded rattan backrest and upholstered seat bring together natural textures with contemporary comfort. Perfect for dining, reading, or a creative corner, the chair offers both function and aesthetic elegance—crafted to elevate everyday living with subtle sophistication.",
        "material": "FSC-Certified Solid Oakwood / Natural Rattan Cane Backrest / Upholstered Fabric Seat / Matte Water-Based Lacquer Finish",
        "color": "Natural Wood (Warm Oak) with Blue Upholstery and Subtle Red Piping",
        "care": "Wipe with a soft damp cloth. Avoid prolonged direct sunlight, moisture, or abrasive cleaners. Use seat cushions or mats to maintain upholstery. Periodically check and tighten joints every 6–8 months.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FZigZag1.png?alt=media&token=faa44047-5224-4d63-a477-5d111dcbe8a2",
        "image" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FZigZag2.png?alt=media&token=8aace140-c658-4b45-ba9a-d25f168161e5",
        "image2":"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FZigZag1.png?alt=media&token=faa44047-5224-4d63-a477-5d111dcbe8a2",
        "name": "Zig Zag",
        "title": "Single Seater",
        "disc": "The Zig Zag Single Seater is a statement piece that merges bold patterns with refined comfort. Featuring geometric patterned armrests paired with a neutral upholstered seat, it balances artistic expression with everyday functionality. Designed for modern living rooms, cozy reading corners, or stylish lounges, it invites you to relax in effortless elegance.",
        "material": "FSC-Certified Solid Oakwood Frame / Upholstered Fabric Seat & Backrest / Patterned Fabric Armrests / Matte Water-Based Lacquer Finish",
        "color": "Natural Wood Base with Beige Upholstery and Black-White Geometric Patterned Armrests",
        "care": "Vacuum or brush lightly to remove dust. Spot clean fabric with mild upholstery cleaner. Keep away from direct sunlight and moisture. Avoid harsh cleaners on wood surfaces. Tighten joints periodically every 6–8 months.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FWellash1.png?alt=media&token=2d733f2c-3912-4cba-ad87-45d394c8ebc5",
        "image" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FWellash2.png?alt=media&token=9ab13603-1628-4415-84c8-661dd6a5cdd9",
        "image2":"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FWellash1.png?alt=media&token=2d733f2c-3912-4cba-ad87-45d394c8ebc5",
        "name": "Wellash",
        "title": "Chair",
        "disc": "The Wellash Chair is an ode to minimal elegance and timeless design. With its fluid curved backrest and slender frame, it showcases masterful craftsmanship while offering lightweight comfort. The natural rattan seat complements the warm wooden finish, making it an ideal choice for dining areas, reading nooks, or serene lounge settings. Designed to blend seamlessly into modern and traditional spaces, the Wellash is simplicity perfected.",
        "material": "FSC-Certified Solid Oakwood Frame / Natural Rattan Cane Seat / Matte Water-Based Lacquer Finish",
        "color": "Natural Wood (Rich Walnut Tone) with Light Rattan Seat",
        "care": "Dust regularly with a soft dry cloth. Avoid direct sunlight, excessive moisture, and abrasive cleaners. Protect rattan from heavy loads to preserve its weave. Tighten joints periodically every 6–8 months.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshcaen1.png?alt=media&token=b5aa56a6-c2ab-4c3f-8b01-e34195ad5af4",
        "image" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshcaen2.png?alt=media&token=10604c19-a303-4a3b-8fa3-9913c14cea11",
        "image2":"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshcaen3.png?alt=media&token=7ff34303-d99a-4fe3-97ea-85d1f67a6904",
        "name": "Ashcaen",
        "title": "Dining Table",
        "disc": "The Ashcaen Dining Table is designed as a centerpiece for meaningful gatherings. With its sculpted base and rich wooden finish, it combines strength with refined elegance. Paired with rattan-back chairs and cushioned seats, the set creates a warm, welcoming atmosphere for family meals, celebrations, or quiet moments of connection. Its timeless craftsmanship ensures it complements both contemporary and classic interiors.",
        "material": "FSC-Certified Solid Oakwood Tabletop & Frame / Matte Water-Based Lacquer Finish / Rattan-Back Dining Chairs with Upholstered Cushions",
        "color": "Natural Wood (Deep Walnut Finish) with Light Beige Upholstered Seating and Cane Backs",
        "care": "Wipe table and chairs with a soft damp cloth. Avoid direct sunlight, excess heat, or abrasive cleaners. Use coasters, placemats, and trivets to protect surfaces. Tighten joints every 6–8 months for lasting durability.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FMeridian1.png?alt=media&token=e30c0f29-7f21-4a17-988d-ab0ff04e6b78",
        "image" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FMeridian2.png?alt=media&token=af03b4f3-5506-403d-b932-f00baf8cd56b",
        "image2":"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FMeridian3.png?alt=media&token=6391653a-9201-4f1e-b4cf-7799b50ed698",
        "name": "Meridian",
        "title": "Console",
        "disc": "The Meridian Console is a striking blend of modern curves and timeless craftsmanship. Its sweeping edges and diagonal panel details create a bold yet refined silhouette, designed to serve as both a functional storage solution and an aesthetic statement. Perfect for living rooms, dining areas, or entryways, it offers ample storage while enhancing interiors with a sense of understated luxury.",
        "material": "FSC-Certified Solid Oakwood Frame & Panels / Veneered Finish with Diagonal Detailing / Matte Water-Based Lacquer",
        "color": "Warm Walnut Frame with Contrasting Golden-Bronze Toned Panels",
        "care": "Dust regularly with a soft dry cloth. Clean spills immediately with a slightly damp cloth. Avoid direct sunlight, excess heat, and abrasive cleaners. Use mats or runners to protect the surface from scratches.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshtone3.png?alt=media&token=dcd66bf4-74fa-4f7d-ac27-c80a903dab85",
        "image" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshtone2.png?alt=media&token=acb86d97-8913-4928-b3f0-220b423bcbce",
        "image2":"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshtone1.png?alt=media&token=d633a6f2-16de-4749-80bb-bf2f4e4fff2c",
        "name": "Ashtone",
        "title": "Dining Table",
        "disc": "The Ashtone Dining Table embodies contemporary sophistication with its sleek stone-finish top and sculpted dark base. Designed for both modern homes and refined workspaces, it strikes the perfect balance between elegance and durability. Paired with plush upholstered chairs featuring curved backs and matte black legs, it offers comfort and style in equal measure. Ideal for intimate dinners, professional meetings, or lively gatherings, the Ashtone is a versatile centerpiece for today’s living.",
        "material": "Engineered Stone Tabletop with Matte Finish / Powder-Coated Metal Base / Upholstered Fabric Chairs with High-Density Foam and Solid Wood Legs",
        "color": "Soft Grey Stone Top with Deep Black Base / Taupe Upholstered Chairs with Black Frames",
        "care": "Clean the tabletop with a soft damp cloth; avoid harsh chemicals and acidic cleaners. Use placemats and coasters to prevent stains and scratches. Vacuum chair upholstery gently with a soft brush attachment. Keep away from direct sunlight and high humidity to preserve finish and fabric.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCrown1.png?alt=media&token=b037495f-4153-482d-b913-dbbf5f39d23e",
        "image" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCrown2.png?alt=media&token=a8cf3161-1b53-44d3-8264-6ac481da3d36",
        "image2":"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCrown2.png?alt=media&token=a8cf3161-1b53-44d3-8264-6ac481da3d36",
        "name": "Crown",
        "title": "Single Seater",
        "disc": "The Crown Single Seater blends mid-century elegance with modern comfort. Crafted with a gracefully curved wooden frame and paired with deep-cushioned seating, it offers both visual charm and lasting support. The earthy green upholstery contrasts beautifully with the warm wooden tones, while patterned cushions add a touch of personality. Perfect for living rooms, reading corners, or lounge areas, the Crown invites relaxation with a timeless aesthetic.",
        "material": "FSC-Certified Solid Wood Frame / High-Density Foam Cushioning / Upholstered Fabric Seat and Backrest / Removable Accent Cushions",
        "color": "Walnut Brown Frame with Olive Green Upholstery / Decorative Cushions in Geometric and Striped Patterns (Red, Black, and White Accents)",
        "care": "Vacuum fabric regularly using a soft brush attachment. Spot clean spills immediately with a damp cloth and mild detergent. Keep away from direct sunlight to prevent fading. Polish wooden frame occasionally with furniture wax for long-lasting sheen.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FFlummox3.png?alt=media&token=ac60f135-4d11-4dab-aceb-411eb3d4ccea",
        "image" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FFlummox2.png?alt=media&token=6a611158-5012-4d25-b5bd-6463cab81860",
        "image2":"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FFlummox1.png?alt=media&token=20eb7cde-bf5e-4e14-ac6f-690a0fe50f6e",
        "name": "Flummox",
        "title": "King Bed",
        "disc": "The Flummox King Bed is a modern sanctuary of comfort and sophistication. Featuring a sleek upholstered frame with a tall cushioned headboard, it creates a refined centerpiece for any bedroom. The clean lines and neutral tones exude calmness, while the spacious design ensures restful sleep. Paired with vibrant accent bedding, the Flummox adapts seamlessly to contemporary or classic interiors, balancing functionality with style.",
        "material": "Solid Wood Frame with Upholstered Panels / High-Density Foam Padding / Premium Fabric Upholstery / Optional Storage Base",
        "color": "Soft Taupe Upholstered Frame with Neutral Undertones / Customizable Bedding Options",
        "care": "Vacuum upholstery regularly using a soft brush attachment. Spot clean stains immediately with a damp cloth and mild fabric cleaner. Rotate mattress regularly for longevity. Avoid exposure to direct sunlight and high humidity to preserve the fabric and structure.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCosmos1.png?alt=media&token=cc19c536-4f5c-451b-a5f0-6b29188c8592",
        "image" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCosmos2.png?alt=media&token=b050e360-8915-4e6d-bb7d-2e778c0f4538",
        "image2":"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCosmos3.png?alt=media&token=6a19c72a-ed4b-479b-9774-9d8e84a46037",
        "name": "Cosmos",
        "title": "Console",
        "disc": "The Cosmos Console embodies refined minimalism with a striking modern twist. Its natural wood frame is paired with a bold, deep blue fluted panel that adds depth and texture to the design. The open shelving provides versatile display space, while the sliding door conceals storage with elegance. A perfect blend of form and function, the Cosmos serves as an accent piece for entryways, living rooms, or dining spaces, elevating interiors with its understated sophistication.",
        "material": "Solid Wood Frame / Engineered Wood Panel with Fluted Finish / Smooth Sliding Mechanism",
        "color": "Natural Wood Frame with Deep Blue Fluted Front",
        "care": "Dust regularly with a soft, dry cloth. Wipe spills immediately with a damp cloth to prevent staining. Avoid harsh chemicals and abrasive cleaners. Keep away from direct sunlight and high humidity to maintain finish and structure.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCarbon2.png?alt=media&token=e4f92ec4-4aad-4440-9ca8-8e42c3d3d854",
        "image" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCarbon1.png?alt=media&token=d2fc9179-74f9-4e8a-83ff-87017dcb27b2",
        "image2":"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCarbon3.png?alt=media&token=cb992ba9-b1be-41ec-af83-a9f6ff9b46dc",
        "name": "Carbon",
        "title": "Single Seater",
        "disc": "The Carbon Single Seater strikes a bold balance between comfort and artistic design. Its sleek black wooden frame embraces a richly patterned upholstered seat, while the deep red rattan sides add texture and sophistication. A warm-toned cushion provides contrast, making it both inviting and visually striking. Ideal for cozy nooks, lounges, or accent seating, the Carbon transforms any corner into a refined retreat with a touch of modern eclectic charm.",
        "material": "Solid Wood Frame / Rattan Side Panels / High-Density Foam Cushioning / Premium Upholstered Fabric Seat",
        "color": "Black Wooden Frame with Red Rattan Sides / Upholstery in Muted Grey and Burgundy Patterns / Accent Cushion in Burnt Red",
        "care": "Vacuum upholstery regularly using a soft brush attachment. Spot clean fabric with a damp cloth and mild detergent. Keep rattan and wood dust-free with a dry cloth. Avoid direct sunlight to preserve colors and prevent fading.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FBansih2.png?alt=media&token=cb16bfc7-ed60-473e-b4c6-a944a6f8fc00",
        "image" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FBansih3.png?alt=media&token=20ff6b49-0771-4573-b66f-1348c0c1e09d",
        "image2":"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FBansih4.png?alt=media&token=c312c47c-c974-4746-85eb-0facb36ea051",
        "name": "Bansih",
        "title": "Sofa Family",
        "disc": "The Bansih Sofa Family blends contemporary elegance with natural textures. Featuring smooth solid wood frames with woven rattan side panels, the set comes with bright yellow cushions and patterned backrests that add vibrancy to the muted room tones. A matching coffee table with rattan accents and a sleek wooden media unit complete the setting, making it ideal for modern living rooms with a touch of earthy warmth.",
        "material": "Solid Wood Frame / Rattan Side Panels / High-Density Foam Cushioning / Premium Upholstered Fabric",
        "color": "Natural Wood with Rattan Detailing / Yellow Cushions / Blue and Beige Patterned Backrest",
        "care": "Vacuum cushions and upholstery regularly using a soft brush. Spot clean with a damp cloth and mild detergent. Wipe rattan and wood surfaces with a dry or slightly damp cloth. Keep away from direct sunlight and excess moisture to preserve colors and textures.",
        "year": "2024 Collection",
    },
    {
        "mainImage" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHeaven3.png?alt=media&token=d657f2ec-5b17-47d7-a4b7-1ffcab33c1b8",
        "image" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHeaven2.png?alt=media&token=96a3199b-00e4-42e7-b4fb-881ec199afd8",
        "image2":"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHeaven1.png?alt=media&token=7d5e1918-297c-4143-9f39-2d01cbff140b",
        "name": "Heaven",
        "title": "Sofa Family",
        "disc": "The Heaven Sofa Family is a modern blend of simplicity and luxury. Featuring smooth rounded edges with plush white upholstery, it offers a clean and elegant aesthetic for contemporary living spaces. The solid wooden side accents add warmth and grounding to the minimalist look, while patterned throw pillows introduce a pop of earthy tones. Paired with a sleek wooden and metal coffee table, this set brings both comfort and sophistication to any home.",
        "material": "Solid Wood Accents / High-Density Foam Cushioning / Premium Upholstered Fabric / Metal Coffee Table Base",
        "color": "White Upholstery with Wooden Side Accents / Earth-Tone Patterned Cushions / Dark Brown and Black Coffee Table",
        "care": "Vacuum upholstery regularly with a soft brush attachment. Blot spills immediately with a clean, dry cloth. For stains, use a mild fabric cleaner and spot test before applying. Wipe wood and metal surfaces with a dry or slightly damp cloth. Keep away from direct sunlight and moisture to prevent fading or warping.",
        "year": "2024 Collection"
    },
    {
        "mainImage" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshrattan3.png?alt=media&token=8cf96504-6e96-40c0-9197-297dfc51e8d3",
        "image" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshrattan2.png?alt=media&token=a93a015c-a067-49d4-adf6-a8a9aa93fdbb",
        "image2":"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAshrattan1.png?alt=media&token=7b234e65-1744-455b-bbd2-fb6f00649b0a",
        "name": "Ashrattan",
        "title": "Chair & Table Set",
        "disc": "The Ashrattan Chair & Table Set embodies timeless craftsmanship with a modern touch. The chairs feature a natural rattan backrest framed in smooth solid wood, paired with plush velvet-like upholstered seats in a rich rose hue for comfort and elegance. Complementing them is a round wooden dining table with a sculpted pedestal base that adds a bold, contemporary character. This set is perfect for dining corners, cafes, or cozy conversational spaces, offering both warmth and style.",
        "material": "Solid Wood Frame / Natural Rattan Backrest / High-Density Foam Cushioning / Premium Velvet Upholstery / Solid Wood Table",
        "color": "Natural Wood with Rattan Detailing / Rose-Pink Upholstery / Dark Walnut Table",
        "care": "Dust rattan and wood surfaces regularly with a dry cloth. Vacuum cushions with a soft brush attachment. Spot clean upholstery with mild soap solution and a damp cloth. Avoid harsh cleaners. Keep away from direct sunlight and moisture to prevent fading and warping.",
        "year": "2024 Collection",
    },
    {
        "mainImage" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHeavenChair2.png?alt=media&token=3c2fb938-349f-4ac7-b92b-98693f98bcf0",
        "image" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHeavenChair2.png?alt=media&token=3c2fb938-349f-4ac7-b92b-98693f98bcf0",
        "image2":"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FHeavenChair1.png?alt=media&token=e31abe1d-fb32-4684-95f1-d31e0702c3ff",
        "name": "Heaven",
        "title": "Chair",
        "disc": "The Heaven Chair is a plush and inviting single-seater designed for maximum comfort with a modern aesthetic. Its soft white upholstery and generously cushioned seat create a cozy retreat, while the rounded armrests and solid wooden side accents add an elegant contemporary touch. Ideal as a standalone lounge chair or as part of the Heaven Sofa Family, it brings warmth, style, and sophistication to any living space.",
        "material": "Solid Wood Accents / High-Density Foam Cushioning / Premium Upholstered Fabric",
        "color": "White Upholstery with Natural Wooden Side Accents",
        "care": "Vacuum upholstery regularly with a soft brush. Blot spills immediately with a clean, dry cloth. For stains, use a mild upholstery cleaner and spot test before applying. Wipe wooden accents with a dry or slightly damp cloth. Keep away from direct sunlight and excessive moisture to prevent fading and warping.",
        "year": "2024 Collection",
    },
]

const Page = () => {

    const router = useRouter();

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
            
            {/* Desktop View */}
            <div className="hidden lg:flex flex-wrap justify-center gap-[14px] gap-y-[48px] mt-[80px]">
                {data.map((item, index) => (
                    <button key={`desktop-${index}`} className="flex flex-col justify-center items-center">
                        <div onClick={()=>router.push(`/product/${index+1}`)} className="h-[614px] w-[30vw] relative">
                            <div className='absolute top-0 left-0 w-[30vw] h-[614px] z-[-1]' >
                                <ImageLoader  />
                            </div>
                            <Image 
                                
                                src={item.mainImage} 
                                alt={item.name} 
                                width={340} 
                                height={500} 
                                className="popup !w-full h-full object-cover rounded-[16px]" 
                            />
                        </div>
                        <p className="popup text-left w-full text-[#141414] text-[18px] font-[600] leading-[28px] mt-[14px]">{item.name}</p>
                    </button>
                ))}
            </div>

            {/* Mobile View */}
            <div className="lg:hidden grid grid-cols-2 gap-[10px] gap-y-[25px] mt-[28px] w-full">
                {data.map((item, index) => (
                    <div key={`mobile-${index}`} className="flex flex-col">
                        <div 
                            onClick={()=>router.push(`/product/${index+1}`)} 
                            className="h-[259px] w-full relative"
                        >
                            <Image 
                                blurDataURL='https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLoader.png?alt=media&token=edd96dbd-3bd3-476b-86e2-e7b2afd1d600'  
                                src={item.mainImage} 
                                alt={item.name} 
                                fill
                                className="object-cover w-full h-full"
                                sizes="(max-width: 768px) 50vw, 100vw"
                            />
                        </div>
                        <p className=" text-[#141414] text-[14px] font-[600] leading-[20px] mt-[10px] text-left">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>

            
        </div>
        <Footor />
    </div>
  )
}

export default Page