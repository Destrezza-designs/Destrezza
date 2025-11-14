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
        "mainImage" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FFLY09099%20Large.png?alt=media&token=a819db1c-2d9f-4124-a150-3a5b8e3c8fb0",
        "image" : "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FFLY09123%20Large.png?alt=media&token=cc13fea2-6a8b-4de3-aefc-de0f610b711b",
        "image2":"https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FGenerative%20Fill%20copy%20Large.png?alt=media&token=56dc1a6e-964e-4324-be3f-fe22f89a8412",
        "name" : "KIzuki",
        "title" : "Study table and chair",
        "disc" : "Rooted in calm, functional elegance, the Kizuki Study Table & Chair set is a nod to mindful living and purposeful work. Inspired by Japanese simplicity and crafted with natural materials, it creates a serene workspace where clarity, creativity, and comfort coexist.Whether it’s for a home office, creative nook, or reading corner, this set offers a peaceful no clutter, no distractions. Just you and your thoughts.",
        "material": "FSC-Certified Solid Oakwood / Natural Rattan Cane / Matte Water-Based Lacquer Finish / Powder-Coated Steel or Brass Connectors (Hidden Joints)",
        "color":"Natural Wood (Warm Oak)Optional finish: Soft Charcoal Stain or Light Ash",
        "care":"Wipe With Soft Damp Cloth Only. Avoid Direct Sunlight, Excess Moisture, Or Abrasive Cleaners. Use Coasters and Mats to Prevent Surface Marks. Periodically Check and Tighten Joints Every 6–8 Months.",
        "year":"2024 Collection",
        "cat": {
            "category": "Home Office",
            "subCategory": "Writing Desk"
        }
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
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Chairs & Loveseats"
        }
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
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Accent | Lounge Chairs"
        }
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
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Chairs & Loveseats"
        }
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
        "year": "2024 Collection",
        "cat": {
            "category": "Dining",
            "subCategory": "Dining Tables"
        }
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
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Consoles"
        }
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
        "year": "2024 Collection",
        "cat": {
            "category": "Dining",
            "subCategory": "Dining Tables"
        }
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
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Accent | Lounge Chairs"
        }
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
        "year": "2024 Collection",
        "cat": {
            "category": "Bedroom",
            "subCategory": "Beds"
        }
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
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Consoles"
        }
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
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Accent | Lounge Chairs"
        }
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
        "cat": {
            "category": "Living",
            "subCategory": "Sofas & Sectionals"
        }
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
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Sofas & Sectionals"
        }
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
        "cat": {
            "category": "Dining",
            "subCategory": "Dining Collections"
        }
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
        "cat": {
            "category": "Living",
            "subCategory": "Chairs & Loveseats"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FClyra1.jpg?alt=media&token=aa49a21f-4880-4a68-88d6-6fd4aaa6b257", 
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FClyra2.jpg?alt=media&token=66669865-2537-4cf4-acad-556542a74627",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FClyra3.jpg?alt=media&token=0feafda7-87fe-4364-a51e-77b005e8bcd6",
        "name": "Clyra",
        "title": "Single Seater",
        "disc": "The Clyra Single Seater embodies the gentle harmony of craftsmanship and comfort. Its refined frame combines solid wood with natural cane weave, creating a clean and inviting silhouette. The soft leather seat and plush fabric backrest enhance both luxury and relaxation, while the angled wooden arms provide balance and poise. Perfect for living spaces or reading corners, Clyra merges tactile warmth with timeless design.",
        "material": "Solid Wood Frame / Natural Rattan Cane Side Panels / Premium Leather Seat Cushion / Soft Fabric Backrest / Matte Lacquer Finish",
        "color": "Walnut Brown Frame with Beige Fabric Backrest and Charcoal Leather Seat",
        "care": "Wipe leather surfaces with a soft, damp cloth. Dust cane and wood regularly with a dry cloth. Avoid prolonged exposure to sunlight or humidity. Use mild upholstery cleaner for fabric when necessary. Tighten joints periodically every 6–8 months.",
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Accent | Lounge Chairs"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FDavrik1.jpg?alt=media&token=11be0be6-a9c1-42a3-923f-736f091b2513",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FDavrik2.jpg?alt=media&token=d43ab335-4f06-4bca-bb9f-d62a8c67f085",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FDavrik3.jpg?alt=media&token=0c612c17-c376-4b02-b519-9d76b5176e45",
        "name": "Dravik",
        "title": "Center Table",
        "disc": "The Dravik Center Table embodies sculpted precision and serene strength. Crafted from solid wood, its rhythmic fluted base forms a bold architectural statement while maintaining a minimalist silhouette. The smooth circular top rests gracefully above slender black metal legs, creating a balance between grounded stability and refined elegance. Designed as a centerpiece for living spaces, Dravik celebrates form, texture, and timeless craftsmanship.",
        "material": "Solid Wood Frame and Top / Fluted Wood Detailing / Powder-Coated Metal Legs / Matte Lacquer Finish",
        "color": "Deep Walnut Brown with Black Metal Legs",
        "care": "Wipe with a soft, dry cloth to remove dust. Avoid harsh cleaners or abrasives. Use coasters to prevent moisture rings and protect the wooden surface. Keep away from direct sunlight and excessive heat to maintain the finish.",
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Coffee Tables"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FElstra3.jpg?alt=media&token=04309f26-7d32-4094-874e-693b5bfc16d3",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FElstra1.jpg?alt=media&token=434935f9-ef18-40ff-a5f9-ccc9b815e85b",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FElstra2.jpg?alt=media&token=ae202a80-f8a0-4ad3-93cd-994f94be42ed",
        "name": "Elstra",
        "title": "Axen Chair & Foot Stool",
        "disc": "The Elstra Axen Chair & Foot Stool redefines minimal relaxation through a sculptural blend of form and balance. Crafted from smooth solid wood and woven natural cane, its upward lines and curved silhouette evoke calm sophistication. Designed for posture and comfort, the extended reclined back pairs harmoniously with the matching foot stool, making Elstra an ideal statement piece for contemporary living rooms, reading corners, or lounge spaces.",
        "material": "FSC-Certified Solid Wood Frame / Natural Rattan Cane Seat and Backrest / Matte Water-Based Lacquer Finish",
        "color": "Natural Oak Wood with Light Rattan Weave",
        "care": "Dust regularly with a soft, dry cloth. Avoid direct sunlight, moisture, and harsh cleaners. Protect rattan surfaces from heavy pressure to maintain weave integrity. Tighten joints periodically every 6–8 months.",
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Loungers"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FFlurea1.jpg?alt=media&token=ae8cddfb-cc53-4e5a-b361-b951066fa23e",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FFlurea2.jpg?alt=media&token=ac1aa9df-6498-4506-b38a-5f714896b763",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FFlurea3.jpg?alt=media&token=9426c349-1666-4e5b-b8a3-85ea1c70b522",
        "name": "Flurea",
        "title": "Single Seater",
        "disc": "The Flurea Single Seater celebrates gentle curves and crafted comfort. Inspired by the natural unfolding of petals, its sculpted silhouette and soft form invite both beauty and ease. The soothing cream hue is complemented by a bold accent cushion, blending elegance with personality. Designed for modern interiors, Flurea strikes the perfect balance between cozy relaxation and refined artistry.",
        "material": "Solid Wood Internal Frame / Premium Upholstered Fabric / High-Density Foam Cushioning / Metal Legs with Matte Gold Finish",
        "color": "Soft Cream Upholstery with Burnt Red Accent Cushion / Matte Gold Legs",
        "care": "Vacuum regularly with a soft brush attachment. Blot spills immediately using a clean, dry cloth. Use mild upholstery cleaner for stains after testing on a hidden area. Avoid direct sunlight and moisture to preserve fabric tone and texture.",
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Accent | Lounge Chairs"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FKaelix1.jpg?alt=media&token=4a25f6b9-379e-43fa-92fa-6a987ac3a488",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FKaelix2.jpg?alt=media&token=4025e1e5-6a51-42dd-a8d1-4cadd6170c7c",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FKaelix3.jpg?alt=media&token=07022d45-aacf-4d0b-9f1d-57b238c3dbd1",
        "name": "Kaelix",
        "title": "Single Seater",
        "disc": "The Kaelix Single Seater embodies bold modern artistry with a serene balance of form and comfort. Its sculpted curves flow effortlessly around the body, while the textured upholstery adds visual depth and tactile luxury. Supported by a matte black wooden frame, Kaelix redefines minimal design through confident structure and inviting presence — making it an ideal statement for refined modern interiors.",
        "material": "Solid Wood Frame with Matte Black Finish / Premium Textured Upholstery / High-Density Foam Cushioning / Smooth Curved Backrest",
        "color": "Muted Sage Green Upholstery with Matte Black Wooden Frame",
        "care": "Vacuum regularly with a soft brush attachment. Blot stains immediately with a dry cloth. Use mild upholstery cleaner when needed. Avoid placing in direct sunlight or near heat sources to preserve color and texture.",
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Accent | Lounge Chairs"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FThaliora1.jpg?alt=media&token=5e9a5bcc-8c6e-4b6d-b6ce-a1c59e0bb362",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FThaliora2.jpg?alt=media&token=7a19dff1-3e64-473d-949b-463e64bbbebd",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FThaliora3.jpg?alt=media&token=a696bdde-9508-46f8-9755-aa9c45993153",
        "name": "Thaliora",
        "title": "Night Stand",
        "disc": "The Thaliora Night Stand captures the essence of timeless craftsmanship through its clean lines and balanced form. Designed to complement the Thaliora Bed Cot, it blends vintage inspiration with modern practicality. Its warm wooden tone, spacious open shelf, and discreet drawer make it ideal for bedside storage while adding refined sophistication to any bedroom setting.",
        "material": "Solid Wood Frame / Engineered Wood Drawer Base / Matte Lacquer Finish / Precision Joinery",
        "color": "Warm Walnut Brown with Subtle Matte Sheen",
        "care": "Wipe with a soft, dry cloth. Avoid using harsh chemicals or abrasive materials. Use coasters for items that may cause moisture or stains. Keep away from direct sunlight and high humidity to preserve the finish.",
        "year": "2024 Collection",
        "cat": {
            "category": "Bedroom",
            "subCategory": "Nightstands"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FOrvessa1.jpg?alt=media&token=83afc227-2730-4549-beb4-3bc2ef0d3387",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FOrvessa2.jpg?alt=media&token=21baf077-9bfb-4099-9fd9-349662b72578",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FOrvessa3.jpg?alt=media&token=89b04bd3-9be2-4f24-9d9f-982798222601",
        "name": "Orvessa",
        "title": "Night Stand",
        "disc": "The Orvessa Night Stand brings together classic form and modern refinement in perfect harmony. Crafted with a smooth cylindrical profile, it anchors the bedside with understated sophistication. Two seamlessly curved drawers offer discreet storage while maintaining the table’s sculptural integrity. Designed for modern bedrooms, Orvessa stands out through its elegant geometry and natural wood finish.",
        "material": "Solid Wood Structure / Dual Soft-Closing Drawers / Concealed Metal Runners / Matte Lacquer Finish",
        "color": "Rich Walnut Brown with Subtle Satin Finish",
        "care": "Dust regularly with a soft, dry cloth. Wipe spills immediately to prevent staining. Avoid direct sunlight and high humidity. Use coasters for decorative items to protect the wooden surface from scratches or moisture rings.",
        "year": "2024 Collection",
        "cat": {
            "category": "Bedroom",
            "subCategory": "Nightstands"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fsavannah1.jpg?alt=media&token=2a467991-c05c-4bf2-8146-7024c68470ff",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fsavannah2.jpg?alt=media&token=7f2f2016-92b3-41b3-9524-8e4c0aad7d4f",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fsavannah3.jpg?alt=media&token=278a67ee-645c-4c94-b5b8-4a9033544ab7",
        "name": "Savannah",
        "title": "Night Stand",
        "disc": "The Savannah Night Stand blends traditional charm with modern functionality. Designed as part of the Savannah collection, it features a graceful wooden frame accented by a natural rattan drawer front. The turned wooden legs add a classic touch, while the light-toned finish brings an airy, timeless elegance to your bedroom. Both drawers provide ample storage, making it as practical as it is beautiful.",
        "material": "Solid Wood Frame / Natural Rattan Cane Drawer Front / Wooden Turned Legs / Matte Water-Based Lacquer Finish",
        "color": "Light Ash Wood with Natural Cane Accents",
        "care": "Dust regularly with a soft, dry cloth. Avoid using harsh chemicals or water directly on cane surfaces. Wipe wood gently with a slightly damp cloth and dry immediately. Keep away from direct sunlight and heat to preserve the natural finish.",
        "year": "2024 Collection",
        "cat": {
            "category": "Bedroom",
            "subCategory": "Nightstands"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FNoir1.jpg?alt=media&token=f9e855ce-23d2-46bd-a597-d13fb44197e5",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FNoir2.jpg?alt=media&token=be91be47-2db5-47f8-9be3-3bef43220ab7",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FNoir3.jpg?alt=media&token=9cec0916-a092-45db-a363-7d7e3101b2cb",
        "name": "Noir",
        "title": "Console",
        "disc": "The Noir Console is crafted for those who appreciate the beauty of simplicity. With its elegantly fluted wooden doors and refined proportions, it embodies quiet sophistication. Functional at its core, yet graceful in presence, Noir serves as both a storage solution and a statement of modern minimalism — enhancing the ambience of any space it inhabits.",
        "material": "Solid Wood Frame / Fluted Veneer Sliding Doors / Concealed Storage Compartments / Matte Lacquer Finish",
        "color": "Warm Walnut Brown with Subtle Satin Texture",
        "care": "Dust with a soft, dry cloth. Wipe spills immediately to prevent marks. Avoid direct sunlight, heat, and humidity. Use coasters or mats to protect the surface from scratches or moisture rings.",
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Consoles"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FNuvra1.jpg?alt=media&token=d427783c-c227-47ba-9a5d-00b2be185c01",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FNuvra2.jpg?alt=media&token=15b1fd79-fa0d-4b39-8d04-d878257f53f9",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FNuvra3.jpg?alt=media&token=6d2d2b18-4346-4c41-8073-44479d614284",
        "name": "Nuvra",
        "title": "Center Table",
        "disc": "The Nuvra Center Table is a gentle expression of balance and beauty. With its sculpted triangular base wrapped in natural cane and a smooth solid wood top, it brings warmth and character to any living space. Nuvra’s rounded edges and seamless proportions turn simplicity into elegance, making it a versatile centerpiece that blends craftsmanship with contemporary charm.",
        "material": "Solid Wood Top / Natural Rattan Cane Wrapped Base Panels / Matte Lacquer Finish / Hidden Joinery Detailing",
        "color": "Deep Walnut Brown with Natural Cane Accents",
        "care": "Dust regularly using a soft, dry cloth. Wipe spills immediately with a damp cloth and dry thoroughly. Avoid direct sunlight, moisture, and harsh chemicals. Use coasters or placemats to protect the tabletop from heat and water rings.",
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Coffee Tables"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Forren1.jpg?alt=media&token=c69efd63-d3a9-4859-816f-b4a3edc02ffe",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Forren2.jpg?alt=media&token=25d42be4-fcf9-4278-b5f5-52b08cbec231",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Forren3.jpg?alt=media&token=7d18f186-5519-4fe9-b56f-7bf0a8f9a1b6",
        "name": "Orren",
        "title": "Chair",
        "disc": "The Orren Chair is a seamless blend of tradition and modernity. Its handcrafted cane backrest brings timeless warmth, while the vibrant orange cushion adds a lively contemporary touch. Designed with soft curves and a graceful silhouette, Orren offers both comfort and elegance, making it a welcoming addition to dining rooms, cafes, and living spaces alike.",
        "material": "Solid Wood Frame / Handwoven Natural Rattan Cane Backrest / Premium Upholstered Cushion / Matte Water-Based Lacquer Finish",
        "color": "Walnut Brown Frame with Natural Cane & Burnt Orange Upholstered Seat",
        "care": "Dust wood and cane using a dry cloth. Vacuum the cushion gently with a soft brush attachment. Clean fabric with mild upholstery cleaner when needed. Avoid direct sunlight and moisture to preserve color and texture.",
        "year": "2024 Collection",
        "cat": {
            "category": "Dining",
            "subCategory": "Dining Chairs"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FOrvessa1.jpg?alt=media&token=af1a015c-1910-44fb-b977-a926464bf145",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FOrvessa2.jpg?alt=media&token=ca51894f-5043-4c12-837e-5cbb2a4e8d43",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FOrvessa3.jpg?alt=media&token=97ba396c-b4eb-4eeb-9736-355f5d9706b9",
        "name": "Orvessa",
        "title": "Bed Cot",
        "disc": "The Orvessa Bed Cot is a timeless ode to vintage-inspired design. With its bold wooden frame and refined detailing, it merges strength with serenity, transforming rest into an experience of grace. The extended headboard enhances visual balance while adding a sculptural presence to the bedroom. Crafted to elevate modern interiors, Orvessa offers the perfect harmony of comfort, elegance, and craftsmanship.",
        "material": "Solid Wood Frame / Precision Joinery / Matte Lacquer Finish / Extended Headboard Panel",
        "color": "Rich Walnut Brown with Satin Finish",
        "care": "Dust regularly with a soft cloth. Avoid harsh chemicals or abrasive cleaners. Keep away from prolonged direct sunlight and moisture. Use a mattress protector to extend fabric longevity.",
        "year": "2024 Collection",
        "cat": {
            "category": "Bedroom",
            "subCategory": "Beds"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fravelle1.jpg?alt=media&token=6553e5d1-94cd-4f4d-a4d5-2487181d22e6",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fravelle2.jpg?alt=media&token=77d5c783-d856-496d-890b-be4da075a6f7",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fravelle3.jpg?alt=media&token=ffcdd85e-76a6-4941-b526-9acecd34ee99",
        "name": "Ravelle",
        "title": "Bed Cot",
        "disc": "The Ravelle Bed Cot blends elegance with organic charm. Its handcrafted cane panels soften the clean wooden structure, creating a design that feels airy, natural, and effortlessly luxurious. The rounded top frame adds a subtle sculptural touch while maintaining a minimal silhouette. Ravelle transforms the bedroom into a sanctuary of calm refinement, celebrating comfort through thoughtful craftsmanship.",
        "material": "Solid Wood Frame / Natural Handwoven Rattan Cane Headboard Panels / Matte Lacquer Finish / Rounded Top Rail",
        "color": "Deep Walnut Brown Frame with Natural Cane Details",
        "care": "Dust regularly with a soft, dry cloth. Avoid excessive moisture on cane surfaces. Keep away from direct sunlight to preserve the natural tones. Use a mattress protector to maintain fabric freshness.",
        "year": "2024 Collection",
        "cat": {
            "category": "Bedroom",
            "subCategory": "Beds"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fsavannah1.jpg?alt=media&token=376ffb56-e153-4a63-b626-92365351f5cd",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fsavannah2.jpg?alt=media&token=560b6a3c-e717-47b9-97f2-face3663f1b8",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fsavannah3.jpg?alt=media&token=6ca603e0-eaf2-49d4-95dd-0317ba4b1af3",
        "name": "Savannah",
        "title": "Bed Cot",
        "disc": "The Savannah Bed Cot is more than a place to rest — it is a sanctuary of comfort and elegance. With its handcrafted cane panels, sculpted wooden posts, and refined classic silhouette, it carries a timeless charm. Designed to bring warmth and calmness to the bedroom, Savannah blends artisanal detail with graceful presence, transforming your space into a haven of serene, refined living.",
        "material": "Solid Wood Frame / Handwoven Natural Cane Headboard and Footboard Panels / Decorative Turned Posts / Matte Lacquer Finish",
        "color": "Soft Ivory Wood with Natural Cane Detailing",
        "care": "Dust regularly with a soft cloth. Clean cane gently with a dry brush. Avoid harsh chemicals and protect from prolonged sunlight. Use a mattress protector to maintain bedding freshness and longevity.",
        "year": "2024 Collection",
        "cat": {
            "category": "Bedroom",
            "subCategory": "Beds"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fserra1.jpg?alt=media&token=1d75e126-0c97-43b5-b332-979f30f7f9c7",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fserra2.jpg?alt=media&token=b9644da7-c534-4933-8814-0bc6018cda52",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fserra3.jpg?alt=media&token=ab4ac4a5-644f-4409-8f3f-a109b0c34c38",
        "name": "Serra",
        "title": "Single Seater",
        "disc": "The Serra Single Seater is an expression of calm sophistication. Designed with soft, enveloping curves and textured upholstery, it embraces you with comfort while maintaining a timeless contemporary profile. Its sleek matte-black wooden frame adds structure and elegance, making Serra a refined addition to living spaces, reading corners, and modern lounges.",
        "material": "Solid Wood Frame with Matte Black Finish / Premium Textured Upholstery / High-Density Foam Padding / Ergonomic Curved Backrest",
        "color": "Ivory Textured Fabric with Matte Black Frame",
        "care": "Vacuum regularly with a soft brush attachment. Blot spills immediately with a clean, dry cloth. Use mild fabric cleaner when needed. Avoid placing in direct sunlight to preserve the upholstery tone and texture.",
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Accent | Lounge Chairs"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fsylvara1.jpg?alt=media&token=f5f11cf5-99d8-433e-9aed-a4803ff0a129",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fsylvara2.jpg?alt=media&token=b622f08c-b04e-4d45-8203-b4eeaabdec6b",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fsylvara3.jpg?alt=media&token=ae6214d6-c73d-4bce-99af-abb186534940",
        "name": "Sylvara",
        "title": "Bed Cot",
        "disc": "The Sylvara Bed Cot blends refreshing style with a calming aesthetic inspired by open skies. Its soothing aqua-toned frame, paired with handcrafted cane panels, creates a serene atmosphere in any bedroom. With elegant turned legs, soft curves, and a matching bench at the foot, Sylvara brings harmony, comfort, and a touch of artistic charm to modern living spaces.",
        "material": "Solid Wood Frame / Handcrafted Cane Headboard & Footboard / Premium Upholstered Bench / Matte Lacquer Finish",
        "color": "Aqua Blue Frame with Natural Cane Weave / Beige Upholstered Bench",
        "care": "Dust wood and cane surfaces regularly with a soft dry cloth. Avoid direct sunlight to preserve color and cane integrity. Clean upholstered sections with mild fabric cleaner as needed. Keep away from excessive moisture.",
        "year": "2024 Collection",
        "cat": {
            "category": "Bedroom",
            "subCategory": "Beds"
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