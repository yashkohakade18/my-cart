const USERS = [
    {
      "name": " White Shirt",
      "category": "Clothing",
      "brand": "Zara",
      "productImage": "https://img.freepik.com/premium-photo/ruggedly-handsome-company-your-mens-health-message-studio-shot-handsome-man-standing-with-his-with-his-hands-his-pockets-isolated-white_590464-23205.jpg"
    },
    {
      "name": "Running Shoes",
      "category": "Footwear",
      "brand": "Nike",
      "productImage": "https://t3.ftcdn.net/jpg/06/10/27/02/360_F_610270204_4caPs2ahuPak18PVqDgXU38eb4Wz8Nnu.jpg"
    },
    {
      "name": "Leather Wallet",
      "category": "Accessories",
      "brand": "T-H",
      "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSUxMG6Ltfg12hze30o5E5L-6dWs9RAPuCnA&s"
    },
    {
      "name": "Gaming Laptop",
      "category": "Electronics",
      "brand": "Dell",
      "productImage": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/black/notebook-g16-7630-nt-black-gallery-1.psd"
    },
    {
      "name": "Fitness Tracker",
      "category": "Wearables",
      "brand": "Fitbit",
      "productImage": "https://m.media-amazon.com/images/I/51YjNQZ0RDL._AC_UF350,350_QL80_.jpg"
    },
    {
      "name": "Wireless Earbuds",
      "category": "Electronics",
      "brand": "Apple",
      "productImage": "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694672652/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/301165_xzuxl0.png"
    },
    {
      "name": "Denim Jeans",
      "category": "Clothing",
      "brand": "Levis",
      "productImage": "https://levi.in/cdn/shop/files/A58760005_08_Flatlay_d6a2f5f6-7512-483b-bbbc-f557a410ee3d.jpg"
    },
    {
      "name": "Formal Blazer",
      "category": "Clothing",
      "brand": "Zara",
      "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwN5eReEjTlDiQFJozjyBOn8_JZsyinvTAg&s"
    },
    {
      "name": "Luxury Perfume",
      "category": "Fragrances",
      "brand": "Chanel",
      "productImage": "https://media.istockphoto.com/id/458585271/photo/chanel-no-5-perfume.jpg?s=612x612&w=0&k=20&c=J9jTw2EFPDaBgZ9YvZP6IbN8Av2LNTg_FceFxjvRLfY="
    },
    {
      "name": "Smartphone",
      "category": "Electronics",
      "brand": "Samsung",
      "productImage": "https://m.media-amazon.com/images/I/81vxWpPpgNL.jpg"
    },
    {
      "name": "Cotton Bedsheet",
      "category": "Home Decor",
      "brand": "IKEA",
      "productImage": "https://rukminim2.flixcart.com/image/850/1000/khcb7gw0-0/bedsheet/s/m/d/article-no-504-187-41-flat-sheet-and-2-pillowcase-blue240x260-original-imafxdg9yb2yz9gz.jpeg"
    },
    {
      "name": "Office Chair",
      "category": "Furniture",
      "brand": "HermanMiller",
      "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgIvPS85pyiflljiz2JOYJTqu6NMpoIwG6vw&s"
    },
    {
      "name": "Bluetooth Speaker",
      "category": "Electronics",
      "brand": "JBL",
      "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cYWSaBNIhOPF2gguIun1olGtIYrHAlOO7w&s"
    },
    {
      "name": "Casual Sneakers",
      "category": "Footwear",
      "brand": "Adidas",
      "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDk4qCtM4AoSgbUju1yEwLw7CvcvlUsfXe8w&s"
    },
    {
      "name": "Digital Camera",
      "category": "Electronics",
      "brand": "Canon",
      "productImage": "https://images-cdn.ubuy.co.in/65fe64a89de64a706c0120dc-canon-eos-5d-mark-iv-dslr-camera-with.jpg"
    },
    {
      "name": "Sunglasses",
      "category": "Accessories",
      "brand": "Ray-Ban",
      "productImage": "https://sunglassesdeal.in/cdn/shop/files/WhatsAppImage2020-03-10at6.53.32PM_11_7af3b3dc-d31c-421f-b1cd-9d8f333ab89e.jpg"
    },
    {
      "name": "Cookware Set",
      "category": "Kitchen",
      "brand": "Prestige",
      "productImage": "https://5.imimg.com/data5/GG/YH/MY-23158756/non-stick-cookware.jpg"
    },
    {
      "name": "Luxury Watch",
      "category": "Accessories",
      "brand": "Rolex",
      "productImage": "https://swisstimepieces.co.uk/cdn/shop/files/Rolex_Daytona_Ceramic_Watches.jpg"
    },
    {
      "name": "Wireless Mouse",
      "category": "Electronics",
      "brand": "Logitech",
      "productImage": "https://bansalstationers.com/cdn/shop/products/image_101ac7b7-c5e6-4948-b137-fb0b6d49d8ca.jpg"
    },
    {
      "name": "Travel Backpack",
      "category": "Accessories",
      "brand": "Samsonite",
      "productImage": "https://images-cdn.ubuy.co.in/660ad067e314db1f284121ce-samsonite-classic-leather-slim-backpack.jpg"
    },
    {
      "name": "Silk Saree",
      "category": "Clothing",
      "brand": "FabIndia",
      "productImage": "https://apisap.fabindia.com/medias/20165067-05.jpg?context=bWFzdGVyfGltYWdlc3wxMDMzMzF8aW1hZ2UvanBlZ3xhR05pTDJnNU1TODBOakV6TlRNNU56TTROREl5TWk4eU1ERTJOVEEyTjE4d05TNXFjR2N8MWI5MmRkYjI4NTc5NGRjYjYzNDE2MjQzYzI0NzVkOWU3Y2RmNmExZjEyNWRhODc1MjIwNjA2MWZhNTdiZDU0ZA"
    },
    {
      "name": "Leather Belt",
      "category": "Accessories",
      "brand": "AllenSolly",
      "productImage": "https://rukminim2.flixcart.com/image/850/1000/l3rmzrk0/belt/8/s/q/32-belts-asblwrgbh10150-belts-allen-solly-original-imagetcyymtpehag.jpeg"
    },
    {
      "name": "Noise-Cancelling Headphones",
      "category": "Electronics",
      "brand": "Sony",
      "productImage": "https://www.sony.co.in/content/dam/sony/contents/global/audio/headphones/year-2024/mdr-m1/product-image/fn-tierB-01.jpg"
    },
    {
      "name": "Instant Coffee Maker",
      "category": "Kitchen",
      "brand": "Nescafe",
      "productImage": "https://rukminim2.flixcart.com/image/850/1000/xif0q/coffee-maker/5/5/g/-original-imagtct3x2g5e3zb.jpeg"
    },
    {
      "name": "Smart LED TV",
      "category": "Electronics",
      "brand": "LG",
      "productImage": "https://m.media-amazon.com/images/I/81Tfy967TKL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "name": "Electric Kettle",
      "category": "Kitchen",
      "brand": "Philips",
      "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fi35TutH3eAszfA-M8srCYBQvtdWwLtFyQ&s"
    },
    {
      "name": "Formal Shoes",
      "category": "Footwear",
      "brand": "Clarks",
      "productImage": "https://m.media-amazon.com/images/I/71Anf5YIWJL._AC_UY1000_.jpg"
    },
    {
      "name": "Wireless Charger",
      "category": "Electronics",
      "brand": "Belkin",
      "productImage": "https://www.corseca.in/cdn/shop/files/Listing-01_042f2d62-f5de-483a-8ca8-b9bf0b035569.jpg"
    },
    {
      "name": "Leather Journal",
      "category": "Stationery",
      "brand": "Moleskine",
      "productImage": "https://i.etsystatic.com/9550177/r/il/e7f560/2340035148/il_570xN.2340035148_bkfi.jpg"
    },
    {
      "name": "Table Lamp",
      "category": "Home Decor",
      "brand": "Philips",
      "productImage": "https://www.lighting.philips.co.in/b-dam/b2c/en_US/marketing-catalog/lighting/table-and-desk-lamp/jazz.png"
    }
  ]

  export{USERS};
  