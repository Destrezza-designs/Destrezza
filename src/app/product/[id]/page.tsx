'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/product/Header'
import UtilsHeader from '@/components/utils/Header'
import Footor from '@/components/Footor';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ImageLoader from '@/components/utils/ImageLoader';

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
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Forvv1.jpg?alt=media&token=c9546ad6-c77a-4502-926a-61030cfa4172",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Forvv2.jpg?alt=media&token=91f2f465-8fda-40ae-9793-5589a79f75f2",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Forvv3.jpg?alt=media&token=759996e0-ced6-408a-8a09-7d29c11ad704",
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
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fsava1.jpg?alt=media&token=29bc5585-ea79-4196-86ff-1636c80942d3",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fsava2.jpg?alt=media&token=c785daa3-3dab-4562-8589-544c519c7c60",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fsava3.jpg?alt=media&token=d44025ce-4722-45c0-b604-574192bb08fa",
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
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fthaliora2.jpg?alt=media&token=260fd1c6-279e-43ad-90b2-1375d19c76fb",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fthaliora1.jpg?alt=media&token=eb732911-ef25-4443-8355-d95e5c3ca47a",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2Fthaliora3.jpg?alt=media&token=a6407a39-aa7a-4236-9160-a5eed5898fd5",
        "name": "Thaliora",
        "title": "Bed Cot",
        "disc": "The Thaliora Bed Cot is a tribute to vintage-inspired craftsmanship, blending intricate spindle work with timeless elegance. Its gracefully carved four-poster structure adds grandeur while maintaining a warm, inviting presence. The rich wooden texture and refined detailing make Thaliora the centerpiece of any bedroom—bringing heritage charm into modern living with comfort and sophistication.",
        "material": "Solid Wood Frame / Hand-Turned Spindle Headboard & Footboard / Four-Poster Bed Structure / Matte Water-Based Lacquer Finish",
        "color": "Warm Walnut Brown",
        "care": "Dust regularly using a soft dry cloth. Avoid direct sunlight and excessive moisture to preserve the wood’s natural tone. For deeper cleaning, use a mild wood-safe polish. Periodically check and tighten structural joints for longevity.",
        "year": "2024 Collection",
        "cat": {
            "category": "Bedroom",
            "subCategory": "Beds"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FZereth1.jpg?alt=media&token=f9ecf2b0-1310-422b-8e59-2d59295faec0",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FZereth2.jpg?alt=media&token=99e4c587-4fe1-4a9b-990c-f671fbca6bb9",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FZereth3.jpg?alt=media&token=b88904bb-d9a8-47c2-b062-bb71a98c3ca1",
        "name": "Zereth",
        "title": "Console",
        "disc": "The Zereth Console is where design meets distinction. Built with clean geometry and accented with vertical fluted detailing, it balances modern minimalism with bold presence. Its rich wood grain, seamless storage layout, and elevated base create depth and sophistication—making Zereth an elegant anchor for living rooms, entryways, or dining spaces.",
        "material": "Solid Wood Frame / Veneered Panels / Vertical Fluted Detailing / Matte Water-Based Lacquer Finish",
        "color": "Warm Walnut Brown",
        "care": "Dust with a soft dry cloth. Clean spills immediately with a slightly damp cloth. Avoid harsh chemicals and prolonged sunlight exposure. Use coasters or runners to protect the surface.",
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Consoles"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FArthene1.jpg?alt=media&token=0cd91054-c2d9-4385-a3aa-0581349ac296",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FArthene2.jpg?alt=media&token=0deae361-5490-4ed8-9f6b-4bbc8adb95bd",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FArthene3.jpg?alt=media&token=33e17a71-d97f-45c2-8b7f-ac4a2dfe258f",
        "name": "Arthene",
        "title": "Single Seater",
        "disc": "Where craftsmanship meets calm. Arthene is defined by its beautifully sculpted wooden frame and plush dual cushions that offer deep, inviting comfort. Its sleek angled silhouette, rich walnut tones, and olive leather upholstery bring quiet sophistication to modern living spaces. A piece that doesn’t just complement your space — it defines it.",
        "material": "Solid Wood Frame / Premium Upholstered Leatherette Cushions / High-Density Foam Padding / Matte Lacquer Finish",
        "color": "Walnut Brown Frame with Olive Green Cushions",
        "care": "Dust the wooden frame regularly with a soft dry cloth. Wipe upholstery with a slightly damp cloth and mild soap when needed. Avoid harsh cleaners, direct sunlight, and excess moisture to preserve the finish and upholstery.",
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Accent | Lounge Chairs"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FArvonic1.jpg?alt=media&token=47ca6abd-8138-4956-b29e-fbcc473415ac",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FArvonic2.jpg?alt=media&token=6c16aa37-989c-48c4-8f4a-cccdb0abc65a",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FArvonic3.jpg?alt=media&token=06873e37-448c-4137-ba38-21890605a495",
        "name": "Arvionc",
        "title": "Console",
        "disc": "The Arvionc Console stands as a reflection of modern refinement. Strong in presence and graceful in detail, it blends clean structure with warm wooden textures. The dual drawers offer functional storage, while the open lower shelves provide versatile display or utility space. Designed to bring harmony and understated elegance into contemporary interiors, Arvionc is both practical and beautifully crafted.",
        "material": "Solid Wood Frame / Veneered Drawer Panels / Open Lower Shelves / Matte Water-Based Lacquer Finish",
        "color": "Warm Walnut Brown",
        "care": "Dust regularly with a dry soft cloth. Clean spills immediately using a slightly damp cloth. Avoid harsh solvents and prolonged direct sunlight. Use protective pads when placing decorative items on the surface.",
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Consoles"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAureo1.jpg?alt=media&token=3195344b-42b8-4f35-9f7a-358a00f7b762",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAureo2.jpg?alt=media&token=54f4a8a2-ac86-498c-96bf-c01f92e45cd0",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FAureo3.jpg?alt=media&token=40c35fa3-b347-4450-928a-39505656021e",
        "name": "Aureo",
        "title": "Exquisite Chair",
        "disc": "Minimal in form, rich in presence. The Aureo Chair embodies a perfect balance of function and sophistication. Its sculpted circular frame flows seamlessly into a handcrafted cane backrest, creating a piece that stands out through refined geometry and warm natural textures. Aureo adds an artistic statement to living spaces while offering a uniquely comfortable seating experience.",
        "material": "Solid Wood Frame / Handwoven Natural Cane Backrest / Matte Lacquer Finish",
        "color": "Warm Walnut Brown with Natural Cane",
        "care": "Dust wood and cane surfaces regularly with a dry cloth. Avoid direct sunlight and high humidity to preserve the cane’s natural durability. Wipe gently with a slightly damp cloth when needed. Do not use harsh chemicals.",
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Accent | Lounge Chairs"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCavora3.jpg?alt=media&token=8fe0a2c6-9e02-459a-9e31-96e1af0becca",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCavora1.jpg?alt=media&token=50574bad-317d-4b5d-869e-13d28debf6b8",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FCavora2.jpg?alt=media&token=fc9ee436-7635-406f-8e84-f803d19be505",
        "name": "Cavora",
        "title": "Sofa & Single Seater",
        "disc": "The Cavora collection captures the essence of refined comfort through its smooth curves, sculpted forms, and inviting plush seating. Whether in its expansive sofa form or as an elegant single seater, Cavora redefines minimal luxury. Thoughtfully crafted to stand out while blending effortlessly into modern spaces, it offers a soft, cloud-like seating experience that feels both artistic and timeless.",
        "material": "Premium Upholstered Fabric / High-Density Foam Cushions / Reinforced Wooden Internal Frame / Matte Black Base Support",
        "color": "Soft Grey Sofa with Burnt Red Accent Cushions / Warm Terracotta Single Seater",
        "care": "Vacuum regularly using a soft brush attachment. Blot spills immediately with a clean, dry cloth. Use mild upholstery cleaner when required. Avoid direct sunlight to preserve fabric color and texture.",
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Sofas & Sectionals"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FDevora1.jpg?alt=media&token=db3adf7a-9504-4edf-9ec5-9541b0028aa7",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FDevora2.jpg?alt=media&token=4c93ab1c-fe82-4f67-aba0-31232638071c",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FDevora3.jpg?alt=media&token=9c466787-5a79-4365-bae4-997117e0be50",
        "name": "Devora",
        "title": "Console",
        "disc": "Devora stands as a statement of refined living — thoughtfully crafted to enhance interior spaces not just with functionality, but with a graceful presence that lingers in every detail. Its curved silhouette, paired with handwoven cane panels and rich wood textures, creates an atmosphere of subtle luxury. A perfect blend of form and function, Devora elevates any room with its warm elegance.",
        "material": "Solid Wood Frame / Natural Handwoven Cane Panels / Matte Lacquer Finish",
        "color": "Warm Walnut Brown with Natural Cane",
        "care": "Wipe with a soft dry cloth. Avoid excessive moisture on cane surfaces. Keep away from direct sunlight and high humidity to preserve natural materials. Use mild wood polish occasionally to maintain finish.",
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Consoles & Sideboards"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FElaris3.jpg?alt=media&token=ef6edd1b-e7c0-4885-83c1-ba24dd952f4b",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FElaris1.jpg?alt=media&token=4ed9ee00-945d-43eb-9982-e92a734c9dcf",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FElaris2.jpg?alt=media&token=47b72171-75a5-4af4-8b23-2c436a8384a0",
        "name": "Elaris",
        "title": "Single Seater",
        "disc": "Elaris is a sanctuary of comfort crafted with refined elegance. Designed with smooth, flowing curves and a gracefully balanced rocking frame, it offers a soothing rhythm that invites relaxation. The natural cane backrest paired with a plush seat brings a blend of sophistication and warmth, making it not just a chair, but an immersive experience of living art.",
        "material": "Solid Wood Frame / Natural Handwoven Cane Backrest / Upholstered Fabric Seat / Matte Lacquer Finish",
        "color": "Walnut Brown Frame with Natural Cane and Grey Upholstery",
        "care": "Dust regularly with a soft cloth. Avoid prolonged moisture exposure on cane. Wipe gently with a slightly damp cloth when needed. Keep away from direct sunlight to preserve finish and fabric color.",
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Accent | Lounge Chairs"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FIsmara1.jpg?alt=media&token=7fa20b61-9c1d-4987-8180-378684c6ac85",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FIsmara3.jpg?alt=media&token=b0deafe2-0b2a-414b-8eb3-28a206475509",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FIsmara2.jpg?alt=media&token=7037c9cd-e363-4cca-8281-736edf626787",
        "name": "Ismara",
        "title": "Bed Cot",
        "disc": "A contemporary sanctuary, Ismara blends sleek design with lasting comfort. Its minimal yet expressive structure creates a centerpiece of modern living. With clean lines, a soft upholstered headboard, and harmonious proportions, Ismara transforms the bedroom into a calming escape that feels luxurious yet effortlessly refined.",
        "material": "Upholstered Headboard / Solid Wood Frame / High-Density Support Base / Matte Finish",
        "color": "Warm Grey Upholstery with Walnut-Toned Frame",
        "care": "Vacuum fabric surfaces regularly. Clean spills immediately using a mild fabric-safe cleaner. Avoid placing the bed in direct sunlight to prevent discoloration. Dust wooden components with a soft cloth.",
        "year": "2024 Collection",
        "cat": {
            "category": "Bedroom",
            "subCategory": "Bed Cot"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLiora2.jpg?alt=media&token=8341ad1a-5baa-4f2a-a14f-ea204bfc1933",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLiora1.jpg?alt=media&token=9a7b28d3-f6dc-4e13-9dac-43d084789f7b",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLiora3.jpg?alt=media&token=96517bcb-e698-4b29-8369-d744dc299e45",
        "name": "Liora",
        "title": "Night Stand",
        "disc": "A refined blend of function and elegance, Liora keeps essentials close while adding a quiet charm to your bedroom. Its flowing rounded edges, solid wood body, and handcrafted cane drawer front create a warm and timeless aesthetic. Liora brings both utility and beauty together, making it a graceful companion to any modern bedroom setting.",
        "material": "Solid Wood Structure / Handwoven Natural Cane Drawer Front / Matte Lacquer Finish / Metal Glide Drawer System",
        "color": "Deep Walnut Brown with Natural Cane",
        "care": "Dust regularly with a dry soft cloth. Avoid moisture contact with cane. Wipe gently with a damp cloth when needed. Keep away from direct sunlight to maintain wood color and cane durability.",
        "year": "2024 Collection",
        "cat": {
            "category": "Bedroom",
            "subCategory": "Night Stand"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLuresta1.jpg?alt=media&token=72f8c77e-5f08-44c8-b946-c5f32fa29255",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLuresta2.jpg?alt=media&token=81609d1c-aa9c-4276-b942-51958920c752",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLuresta3.jpg?alt=media&token=37f2aca3-6aae-4ee0-a724-2093cde8ed4b",
        "name": "Luresta",
        "title": "Bed Cot",
        "disc": "With its soft lines, refined structure, and thoughtfully balanced proportions, Luresta turns your bedroom into a place of quiet luxury. The warm wooden finish, paired with upholstered accents, creates a comforting, contemporary presence. Designed for those who believe rest should be as beautiful as it is serene, Luresta offers a timeless blend of style and tranquility.",
        "material": "Solid Wood Frame / Upholstered Headboard Panels / Premium Mattress Support Base / Matte Lacquer Finish",
        "color": "Walnut Brown Frame with Mocha Upholstered Headboard",
        "care": "Dust wooden surfaces regularly. Clean upholstery with a mild fabric-safe cleanser. Keep away from direct sunlight to prevent fading. Wipe gently with a damp cloth when needed.",
        "year": "2024 Collection",
        "cat": {
            "category": "Bedroom",
            "subCategory": "Bed Cot"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLureth1.jpg?alt=media&token=996becef-d8a1-42bd-b818-2afa745648f7",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLureth2.jpg?alt=media&token=e088dd3a-f019-4b22-b7b8-cc00cab04de3",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FLureth3.jpg?alt=media&token=a1f97c47-0fa9-47d8-a1c3-91495c5e14c0",
        "name": "Lureth",
        "title": "Chair",
        "disc": "Blending craftsmanship with quiet sophistication, Lureth brings a touch of warmth and luxury into spaces that value design with meaning. The rich wooden frame paired with a handwoven cane backrest and an intricately patterned upholstered seat creates a piece that feels both timeless and expressive.",
        "material": "Solid Wood Frame / Handwoven Cane Backrest / Premium Upholstered Fabric Seat / Matte Lacquer Finish",
        "color": "Walnut Brown Frame with Patterned Terracotta Seat",
        "care": "Clean cane gently with a dry brush. Dust wooden surfaces regularly. Dab fabric with a mild upholstery cleaner when needed. Avoid prolonged sun exposure to preserve color and material longevity.",
        "year": "2024 Collection",
        "cat": {
            "category": "Living",
            "subCategory": "Chairs & Loveseats"
        }
    },
    {
        "mainImage": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FMalvera2.jpg?alt=media&token=8a9c2950-0cf0-4d43-91b1-c6482dde322f",
        "image": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FMalvera3.jpg?alt=media&token=7b48143c-c132-40f5-ad97-1d17c166fba6",
        "image2": "https://firebasestorage.googleapis.com/v0/b/fir-e4bcf.appspot.com/o/Wrk%2FMalvera1.jpg?alt=media&token=012e6751-ce09-494f-9eac-3fb3ce0e438c",
        "name": "Malvera",
        "title": "Bed Cot",
        "disc": "Where elegance meets strength. Malvera blends contemporary structure with soft, inviting comfort, creating a bed that enhances modern living. With its sleek frame, refined design language, and warm earthy bedding tones, Malvera brings balance, beauty, and lasting comfort to any bedroom space.",
        "material": "Solid Wood Frame / Powder-Coated Metal Posts / Premium Upholstered Headboard / High-Durability Finish",
        "color": "Olive Green Frame with Mustard & Taupe Bedding Accents",
        "care": "Dust regularly with a dry cloth. Clean the frame gently using a soft damp cloth. Avoid harsh chemicals. Rotate and air bedding fabrics to maintain freshness and longevity.",
        "year": "2024 Collection",
        "cat": {
            "category": "Bedroom",
            "subCategory": "Bed Cot"
        }
    }
];


const Page = () => {

    const {id} = useParams();
    const idNum = Number(id);

    const router = useRouter();

    const [currentImage, setCurrentImage] = useState(data[idNum-1].mainImage);
    const [currentDisc,setCurrentDisc] = useState('Material')


  return (
    <div className='overflow-x-hidden' >
        <div className='hidden lg:flex  mx-[48px] mt-[48px]' >
            <Header />
        </div>
        <div className='flex lg:hidden mt-[-22px]' >
            <UtilsHeader />
        </div>
        
        <div className='lg:hidden text-black flex flex-col mt-[40px] mx-[20px] ' >
            <p className='text-[36px] leading-[40px] font-[500] uppercase  bg-red-5 ' >{data[idNum-1].name}  </p>
            <p className='text-[15px] font-thin' >{data[idNum-1].title}</p>
        </div>

        <div className='hidden lg:flex flex-col m-[48px]' >
            <div className='flex gap' >
                <div className='flex gap-[4px] h-[614px] w-[50vw] ' >
                    <Image 
                        unoptimized  src={currentImage} width={1000} height={1000} className='w-[calc(50vw-250px)] h-full object-cover' alt='Main Image' />
                    <div className='flex flex-col gap-[4px] w-[250px] ' >
                        {[data[idNum-1].mainImage, data[idNum-1].image, data[idNum-1].image2].map((imgSrc, index) => (
                            <button 
                                key={index}
                                onClick={() => setCurrentImage(imgSrc)}
                                className={`w-[205px] h-full overflow-hidden `}
                            >
                                <Image 
                                    unoptimized  
                                    src={imgSrc} 
                                    width={1000} 
                                    height={1000} 
                                    className='w-full h-full object-cover' 
                                    alt={`Thumbnail ${index + 1}`} 
                                />
                            </button>
                        ))}
                    </div>
                </div>
                <div className='text-black m-[48px] w-[32vw]'  >
                    <p className='text-[36px] font-normal' >{data[idNum-1].name}</p>
                    <p className='text-[15px] font-thin leading-[18px] mt-[-10px]'  >{data[idNum-1].title}</p>
                    <p className='text-[14px] font-light mt-[10px]' >{data[idNum-1].disc}</p>
                    <div className='mt-[25px] gap-[10px]' >
                        <div className='flex text-[14px] font-normal gap-[10px]' >
                            {['Material', 'Designer', 'Type', 'Year'].map((disc) => (
                                <button 
                                    key={disc}
                                    onClick={() => setCurrentDisc(disc)}
                                    className={`border-b ${currentDisc === disc ? 'border-b-black' : 'border-b-transparent'}`}
                                >
                                    {disc}
                                </button>
                            ))}
                        </div>
                        <p className='mt-[10px] text-[13px] font-light' >{
                            currentDisc == 'Material' ? data[idNum-1].disc :  
                            currentDisc == 'Designer' ? data[idNum-1].color :  
                            currentDisc == 'Type' ? data[idNum-1].care :  
                            currentDisc == 'Year' ? data[idNum-1].year :  ''}</p>
                    </div>
                </div>
                
            </div>
            <div className='mt-[64px] hidden lg:block'>
                <p className='text-[36px] font-[500] uppercase text-black'>Other Collections</p>
                <div className="flex flex-row justify-start gap-[14px] mt-[24px] overflow-x-scroll">
                    {data.slice(idNum, idNum + 10).map((item, index) => (
                        <button 
                            key={`desktop-${index}`} 
                            onClick={() => router.push(`/product/${idNum+1+index}`)}
                            className="h-fit relative group bg-white"
                        >
                            <div className="h-[300px] w-[300px] rounded-[20px] overflow-hidden">
                                <div className="transition duration-300 ease-in-out group-hover:scale-110 h-full"> {/* Scale container instead */}
                                    <Image 
                                        src={item.mainImage} 
                                        alt={item.name} 
                                        width={1000} 
                                        height={1000} 
                                        className="h-full object-cover"
                                    />
                                </div>
                                <div className="absolute rounded-[20px] bottom-0 left-0 bg-gradient-to-t from-[#00000040] to-transparent h-1/2 w-full"></div>
                                <div className="absolute bottom-0 left-0 p-[20px] text-white text-left">
                                    <p className="text-[36px] font-medium uppercase">{item.name}</p>
                                    <p className="text-[20px] mt-[-10px] font-extralight uppercase">{item.title}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

        </div>

        <div className=' lg:hidden mx-[0px] lg:mx-[48px] mt-[20px] lg:mt-[48px] text-black' >
            <div className='my-[40px] flex lg:flex-row flex-col lg:gap-[14px] gap-y-[5px] lg:gap-y-0  overflow-hidden' >
                <div className='flex flex-col gap-[4px] ' >
                    <Image 
                        unoptimized  src={currentImage} width={1000} height={1000} className='w-full h-[414px] object-cover' alt='Main Image' />
                    <div className='flex  gap-[4px] ' >
                        {[data[idNum-1].mainImage, data[idNum-1].image, data[idNum-1].image2].map((imgSrc, index) => (
                            <button 
                                key={index}
                                onClick={() => setCurrentImage(imgSrc)}
                                className={`w-full h-full overflow-hidden `}
                            >
                                <Image 
                                    unoptimized  
                                    src={imgSrc} 
                                    width={1000} 
                                    height={1000} 
                                    className='w-full h-full object-cover bg-black aspect-square' 
                                    alt={`Thumbnail ${index + 1}`} 
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className='mt-[24px] mx-[16px] lg:mt-[64px]' >
                <div className='flex lg:flex-row flex-col justify-between items-start my-[12px]' >
                    <p className='text-[18px] font-[500] uppercase' >Description</p>
                    <p className='mt-[10px] lg:mt-[0px] text-[13px] lg:text-[24px] w-full lg:w-[70%] font-light lg:font-[300]' >{data[idNum-1].disc}</p>
                </div>

                
                <div className='mt-[25px] gap-[10px]' >
                    <div className='flex text-[14px] font-normal gap-[10px]' >
                        {['Material', 'Designer', 'Type', 'Year'].map((disc) => (
                            <button 
                                key={disc}
                                onClick={() => setCurrentDisc(disc)}
                                className={`border-b ${currentDisc === disc ? 'border-b-black' : 'border-b-transparent'}`}
                            >
                                {disc}
                            </button>
                        ))}
                    </div>
                    <p className='mt-[10px] text-[13px] font-light' >{
                        currentDisc == 'Material' ? data[idNum-1].disc :  
                        currentDisc == 'Designer' ? data[idNum-1].color :  
                        currentDisc == 'Type' ? data[idNum-1].care :  
                        currentDisc == 'Year' ? data[idNum-1].year :  ''}</p>
                </div>
                

            </div>

            <div className='mt-[64px]  lg:hidden mx-[20px]' >
                <p className='text-[24px] font-[500] uppercase text-black'  >Other Collections</p>
                <div className="flex flex-row justify-start gap-[14px] mt-[24px] overflow-x-scroll">

                    {data.slice(idNum, idNum + 10).map((item, index) => (
                        <button 
                            key={`desktop-${index}`} 
                            onClick={() => router.push(`/product/${idNum+1+index}`)}
                            className="h-fit relative group bg-white"
                        >
                            <div className="h-[300px] w-[300px] rounded-[20px] overflow-hidden">
                                <Image 
                                    src={item.mainImage} 
                                    alt={item.name} 
                                    width={1000} 
                                    height={1000} 
                                    className="h-full object-cover"
                                />
                                <div className="absolute rounded-[20px] bottom-0 left-0 bg-gradient-to-t from-[#00000040] to-transparent h-1/2 w-full"></div>
                                <div className="absolute bottom-0 left-0 p-[20px] text-white group-hover:text-black text-left">
                                    <p className="text-[36px] font-medium uppercase">{item.name}</p>
                                    <p className="text-[20px] mt-[-10px] font-extralight uppercase">{item.title}</p>
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

export default Page