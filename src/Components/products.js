 const products = [
   {
     id: 1,
     name: "Bluetooth Sperker",
     quantity: 5,
     description:
       "TWS Bluetooth Speaker Set with LED Multicolor Set your mood with great sounds that produce this pair of Blaupunkt ...",
     price: "$30",
     image:
       "https://www.mytrendyphone.eu/images/Blaupunkt-BLP-3030-TWS-Bluetooth-Speakers-Black-3609020144281-08042021-01-p.jpg",
     category: 1,
     user: 1,
   },
   {
     id: 2,
     name: "Mobile Chargers",
     quantity: 5,
     description:
       "Power Adapters, LED Strip Driver Adapter,=SMPS Adapter, CCTV Camera Adapter, DTH Adapter and Mobile Charger",
     price: "$20",
     image:
       "https://5.imimg.com/data5/SELLER/Default/2021/1/CK/QH/ME/9271459/14v-mobile-chargers-500x500.jpg",
     category: 1,
     user: 2,
   },
   {
     id: 3,
     name: " Canon Camera",
     quantity: 5,
     description:
       "Experience the evolution in your photography Experience with the versatile Canon EOS 1500D DSLR Camera .",
     price: "$300",
     image:
       "https://media.croma.com/image/upload/v1605158063/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/8975592456222.png",
     category: 1,
     user: 3,
   },
   {
     id: 4,
     name: "Fujifilm Camera",
     quantity: 5,
     description:
       "Selfies (and close-up shots) couldn’t be easier. You simply need to pull the front edge of the lens, and as if by magic.",
     price: "$100",
     image:
       "https://target.scene7.com/is/image/Target/GUEST_efc49323-de93-45c0-88db-cc19c4838dcf?wid=488&hei=488&fmt=pjpeg",
     category: 1,
     user: 1,
   },
   {
     id: 5,
     name: "Table",
     quantity: 5,
     description: "Table ....",
     price: "$50",
     image:
       "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/101885_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg",
     category: 2,
     user: 8,
   },
   {
     id: 6,
     name: "Store",
     quantity: 5,
     description: "Running ....",
     price: "$120",
     image:
       "https://www.amishoutletstore.com/content/uploads/2021/03/11111a.jpg",
     category: 2,
     user: 9,
   },
   {
     id: 7,
     name: "Couch",
     quantity: 5,
     description: "Couch ....",
     price: "$70",
     image:
       "https://i1.wp.com/www.navanafurniture.com/wp-content/uploads/2021/03/2dnd.png?resize=600%2C600&ssl=1",
     category: 2,
     user: 9,
   },
   {
     id: 8,
     name: "Bed",
     quantity: 5,
     description: "Bed ....",
     price: "$500",
     image:
       "https://www.amishoutletstore.com/content/uploads/2021/03/22222a.jpg",
     category: 2,
     user: 9,
   },
   {
     id: 9,
     name: "BabyChair",
     quantity: 5,
     description: "Baby chair ....",
     price: "$40",
     image:
       "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5872686004197943161/products/10606453SF.f.05092019.jpg&height=475&width=475",
     category: 2,
     user: 9,
   },
   {
     id: 10,
     name: "Couch",
     quantity: 5,
     description: "Couch ....",
     price: "$160",
     image:
       "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/97441_XXX_v1.tif&qlt=267&wid=267&cvt=jpeg",
     category: 2,
     user: 3,
   },
   {
     id: 11,
     name: "Vas",
     quantity: 5,
     description: "Vas ....",
     price: "$30",
     image:
       "https://images.chilli.se/inredning-krukor-vaser-vaser/vas-linn-set-om-2-gr%C3%A5beige-301491.jpg?w=762&hash=eyJ2IjoxMDAsInQiOiJwcm9kdWN0IiwibiI6IjYwNjkxNy5qcGciLCJvX3R5cGUiOiJDSElMTElfV0VCX1NFOnByb2R1Y3RzIiwib19pZCI6IjE4MzkxMiIsImkiOjMwMTQ5MX0%3D",
     category: 2,
     user: 2,
   },
   {
     id: 12,
     name: "Table",
     quantity: 5,
     description: "Table ....",
     price: "$200",
     image:
       "https://www.amishoutletstore.com/content/uploads/2021/03/33333a.jpg",
     category: 2,
     user: 2,
   },
   {
     id: 13,
     name: "Shark oft toy",
     quantity: 5,
     description: "Shark oft toy ....",
     price: "$10",
     image:
       "https://www.ikea.com/jo/en/images/products/blahaj-soft-toy-shark__0710175_pe727378_s5.jpg?f=xs",
     category: 3,
     user: 2,
   },
   {
     id: 14,
     name: "Dog soft toy",
     quantity: 5,
     description: "Dog soft toy ....",
     price: "$10",
     image: "https://m.media-amazon.com/images/I/71Ioiy+0rcL._AC_SX425_.jpg",
     category: 3,
     user: 2,
   },
   {
     id: 15,
     name: "Lego",
     quantity: 5,
     description: "Lego ....",
     price: "$100",
     image:
       "https://target.scene7.com/is/image/Target/GUEST_e82ad916-16ae-48e5-b13b-73e4a0b9b682?wid=488&hei=488&fmt=pjpeg",
     category: 3,
     user: 4,
   },
   {
     id: 16,
     name: "Car",
     quantity: 5,
     description: "Car ....",
     price: "$20",
     image:
       "https://cdn.shopify.com/s/files/1/0049/3732/products/5_900x.jpg?v=1334936803",
     category: 3,
     user: 6,
   },
   {
     id: 17,
     name: "BasketBall",
     quantity: 5,
     description: "BasketBall ....",
     price: "$20",
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsqNAkElwtoEGv0FMHS42iSxRZqn-ElmBrg&usqp=CAU",
     category: 4,
     user: 6,
   },
   {
     id: 18,
     name: "Bycicle",
     quantity: 5,
     description: "Bycicle ....",
     price: "$300",
     image: "https://m.media-amazon.com/images/I/81wGn2TQJeL._SX425_.jpg",
     category: 4,
     user: 6,
   },
   {
     id: 19,
     name: "Tennis racket",
     quantity: 5,
     description: "Tennis racket ....",
     price: "$40",
     image:
       "https://cdnmedia.racquets4u.com/pub/media/catalog/product/cache/2a6b0744b87cbe1990f7a65c1fd3659e/p/u/pure-drive-junior-25-tennis-racquet-black-blue-m.jpg",
     category: 4,
     user: 5,
   },
   {
     id: 20,
     name: "Hand waight",
     quantity: 5,
     description: "Hand waight ....",
     price: "$40",
     image:
       "https://www.si.com/review/wp-content/uploads/2021/04/CAP-Barbell-Coated-Dumbbell-Weight-Bestcover.jpg",
     category: 4,
     user: 7,
   },
 ];

export default products;