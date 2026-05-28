const navLinks = [
 {
	id: "cocktails",
	title: "Cocktails",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "art",
	title: "The Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
  {
    name: "Royal Rajput Reserve",
    state: "Rajasthan",
    detail: "Bottle",
    price: "₹670",
  },
  {
    name: "Goan Midnight Spirit",
    state: "Goa",
    detail: "Bottle",
    price: "₹1,000",
  },
  {
    name: "Himalayan Malt Brew",
    state: "Himachal",
    detail: "750 ml",
    price: "₹500",
  },
  {
    name: "Punjab Oak Barrel",
    state: "Punjab",
    detail: "600 ml",
    price: "₹585",
  },
];

const mockTailLists = [
  {
    name: "Aam Saffron Splash",
    state: "Maharashtra",
    detail: "Bottle",
    price: "₹420",
  },
  {
    name: "Mint Masala Mojito",
    state: "Delhi",
    detail: "Bottle",
    price: "₹500",
  },
  {
    name: "Kokum Citrus Cooler",
    state: "Goa",
    detail: "750 ml",
    price: "₹335",
  },
  {
    name: "Rose Cardamom Fizz",
    state: "Kashmir",
    detail: "600 ml",
    price: "₹420",
  },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Perfectly balanced blends",
 "Garnished to perfection",
 "Ice-cold every time",
 "Expertly shaken & stirred",
];

const goodLists = [
 "Handpicked ingredients",
 "Signature techniques",
 "Bartending artistry in action",
 "Freshly muddled flavors",
];

// Indian Modification
const storeInfo = {
  heading: "Padharo Mhare Des", // Traditional welcoming phrase meaning "Welcome to our land"
  address: "Plot 12, Level 3, Khan Market, New Delhi, Delhi 110003",
  contact: {
    phone: "+91 11 4987 6543",
    email: "namaste@jsmcocktail.com",
  },
};

const openingHours = [
  { day: "Mon–Thu (Shanti Hours)", time: "12:00 PM – 12:00 AM IST" },
  { day: "Fri–Sat (Jashn Nights)", time: "12:00 PM – 01:30 AM IST" },
  { day: "Sun (Sufi Brunch)", time: "11:00 AM – 11:00 PM IST" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

// Menu carousel data
const sliderLists = [
  {
    id: 1,
    name: "Saffron Aam Bliss",
    image: "/images/drinkd1.png",
    title: "Royal Flavors Inspired by Indian Summers",
    description:
      "A luxurious blend of ripe mango, saffron essence, mint, and sparkling citrus. Smooth, refreshing, and crafted to capture the richness of Indian summer evenings.",
  },
  {
    id: 2,
    name: "Jamun Masala Twist",
    image: "/images/drinkd2.png",
    title: "Tangy, Spiced, and Unforgettably Indian",
    description:
      "Fresh jamun juice mixed with lime, black salt, mint, and a hint of masala creates a bold street-style cooler bursting with sweet and tangy flavors.",
  },
  {
    id: 3,
    name: "Rose Thandai Spark",
    image: "/images/drinkd3.png",
    title: "A Floral Fusion With a Festive Soul",
    description:
      "Inspired by traditional thandai, this sparkling drink combines rose syrup, cardamom, fennel, and creamy almond notes for a refreshing royal experience.",
  },
  {
    id: 4,
    name: "Kokum Sunset Cooler",
    image: "/images/drinkd4.png",
    title: "Crafted With Coastal Vibes and Bold Taste",
    description:
      "A vibrant kokum-based cooler infused with citrus and herbs, bringing together sweet, tangy, and refreshing flavors inspired by India’s western coast.",
  },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 sliderLists,
};