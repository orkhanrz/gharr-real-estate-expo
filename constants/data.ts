import { IFacility, IImage, IProperty } from "@/models/property";
import { IAgent } from "@/models/user";

const images: IImage[] = [];

const facilities: IFacility[] = [
  { id: "1", name: "Car  Parking", icon: "car" },
  { id: "2", name: "Swimming Pool", icon: "water" },
  { id: "3", name: "Gym & Fit", icon: "barbell" },
  { id: "4", name: "Restaurant", icon: "restaurant" },
  { id: "5", name: "Wi-fi", icon: "wifi" },
  { id: "6", name: "Pet Center", icon: "paw" },
  { id: "7", name: "Sports Center", icon: "person" },
  { id: "8", name: "Laundry", icon: "basket" }
];

export const agents: IAgent[] = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    fullName: "James Carter",
    type: "Senior Agent",
    email: "james.carter@realestate.com",
    phone: "+1 555 110 2034"
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    fullName: "Samantha Lee",
    type: "Real Estate Advisor",
    email: "samantha.lee@realestate.com",
    phone: "+1 555 117 3099"
  },
  {
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    fullName: "Michael Evans",
    type: "Luxury Property Expert",
    email: "michael.evans@realestate.com",
    phone: "+1 555 321 8760"
  },
  {
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    fullName: "Emily Chen",
    type: "Lead Broker",
    email: "emily.chen@realestate.com",
    phone: "+1 555 883 0921"
  },
  {
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    fullName: "Robert Hall",
    type: "Agent",
    email: "robert.hall@realestate.com",
    phone: "+1 555 640 1930"
  },
  {
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    fullName: "Olivia Grant",
    type: "Villa Specialist",
    email: "olivia.grant@realestate.com",
    phone: "+1 555 998 3210"
  },
  {
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    fullName: "Daniel Brooks",
    type: "Property Manager",
    email: "daniel.brooks@realestate.com",
    phone: "+1 555 785 2323"
  },
  {
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    fullName: "Natalie Moore",
    type: "Loft Consultant",
    email: "natalie.moore@realestate.com",
    phone: "+1 555 456 7890"
  }
];

export const properties: IProperty[] = [
  {
    _id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "Modern Villa",
    price: 340,
    isFavorite: false,
    rating: 4.8,
    category: "House",
    reviews: [],
    comfort: 4.2,
    area: 1350,
    bedrooms: 3,
    bathrooms: 3,
    safetyRank: 4.1,
    facilities: [facilities[0], facilities[2], facilities[4], facilities[6]],
    agent: agents[4],
    location: {
      address: "Avenue, West Side",
      latitude: 40.748817,
      longitude: -73.985428,
      city: "New York",
      country: "United States"
    },
    images: [
      {
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZXJuJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZXJuJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZXJuJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D"
      },
      {
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1733306523667-80d5e5668631?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZXJuJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D"
      }
    ]
  },
  {
    _id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y296eSUyMGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D",
    title: "Cozy Cottage",
    price: 290,
    isFavorite: false,
    rating: 4.7,
    category: "Cottage",
    reviews: [],
    comfort: 3.5,
    area: 1020,
    bedrooms: 2,
    bathrooms: 2,
    safetyRank: 4.3,
    facilities: [facilities[1], facilities[5]],
    agent: agents[0],
    location: {
      address: "Hilltop Drive",
      latitude: 37.774929,
      longitude: -122.419416,
      city: "San Francisco",
      country: "United States"
    },
    images: [
      {
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1686167991331-e4219337805f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y296eSUyMGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1561033318-3f377e5a3f3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y296eSUyMGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1561033318-86d027e3e814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y296eSUyMGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1662944726441-a4ca20f6f3fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y296eSUyMGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1561033318-78e75f096306?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvenklMjBjb3R0YWdlfGVufDB8fDB8fHww"
      }
    ]
  },
  {
    _id: "3",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1676357173618-22642a966c7f?w=500&auto=format&fit=crop&q=60",
    title: "Downtown Apartment",
    price: 420,
    isFavorite: false,
    rating: 4.9,
    category: "Apartment",
    reviews: [],
    comfort: 3.8,
    area: 940,
    bedrooms: 2,
    bathrooms: 2,
    safetyRank: 4.5,
    facilities: [facilities[4], facilities[6], facilities[7]],
    agent: agents[5],
    location: {
      address: "Main Street",
      latitude: 34.052235,
      longitude: -118.243683,
      city: "Los Angeles",
      country: "United States"
    },
    images: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1673165432945-a62c1a82d3ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG93bnRvd24lMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1559422876-99bdae91193c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG93bnRvd24lMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1604535297773-a9e7219b6ecb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvd250b3duJTIwYXBhcnRtZW50fGVufDB8fDB8fHww"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1669003985158-8fd34b5a4545?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvd250b3duJTIwYXBhcnRtZW50fGVufDB8fDB8fHww"
      }
    ]
  },
  {
    _id: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60",
    title: "Mountain Cabin",
    price: 310,
    isFavorite: false,
    rating: 4.6,
    category: "Cabin",
    reviews: [],
    comfort: 3.9,
    area: 890,
    bedrooms: 2,
    bathrooms: 2,
    safetyRank: 4.2,
    facilities: [facilities[0], facilities[3], facilities[7]],
    agent: agents[4],
    location: {
      address: "Aspen Hills",
      latitude: 39.191097,
      longitude: -106.817535,
      city: "Aspen",
      country: "United States"
    },
    images: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    _id: "5",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1663099373746-703d6504d265?w=500&auto=format&fit=crop&q=60",
    title: "Rustic Barn Home",
    price: 270,
    isFavorite: false,
    rating: 4.5,
    category: "Barn",
    reviews: [],
    comfort: 3.2,
    area: 1100,
    bedrooms: 3,
    bathrooms: 3,
    safetyRank: 4.0,
    facilities: [facilities[5], facilities[6]],
    agent: agents[3],
    location: {
      address: "Country Road",
      latitude: 36.778259,
      longitude: -119.417931,
      city: "Sanger",
      country: "United States"
    },
    images: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1573739453051-4028bba80311?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVzdGljJTIwYmFybiUyMGhvdXNlfGVufDB8fDB8fHww"
      },
      {
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1731872413397-a7287085ef39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cnVzdGljJTIwYmFybiUyMGhvdXNlfGVufDB8fDB8fHww"
      },
      {
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1734549547989-805c0885dd9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJ1c3RpYyUyMGJhcm4lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1728063675531-e51b3556c8f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJ1c3RpYyUyMGJhcm4lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D"
      }
    ]
  },
  {
    _id: "6",
    imageUrl:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    title: "Beach House",
    price: 380,
    isFavorite: false,
    rating: 4.9,
    category: "Villa",
    reviews: [],
    comfort: 4.5,
    area: 1400,
    bedrooms: 4,
    bathrooms: 4,
    safetyRank: 4.8,
    facilities: [facilities[1], facilities[3], facilities[4], facilities[7]],
    agent: agents[4],
    location: {
      address: "Ocean View",
      latitude: 26.122439,
      longitude: -80.137317,
      city: "Fort Lauderdale",
      country: "United States"
    },
    images: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1615873968403-89f2899a3e0e?auto=format&fit=crop&w=800&q=80"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    _id: "7",
    imageUrl:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&auto=format&fit=crop&q=60",
    title: "Luxury Mansion",
    price: 950,
    isFavorite: false,
    rating: 5.0,
    category: "Mansion",
    reviews: [],
    comfort: 5.0,
    area: 3200,
    bedrooms: 6,
    bathrooms: 6,
    safetyRank: 4.9,
    facilities: [
      facilities[0],
      facilities[2],
      facilities[3],
      facilities[4],
      facilities[6]
    ],
    agent: agents[7],
    location: {
      address: "Sunset Blvd",
      latitude: 34.098003,
      longitude: -118.361744,
      city: "Los Angeles",
      country: "United States"
    },
    images: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1613977257363-707ba9348223?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    _id: "8",
    imageUrl:
      "https://images.unsplash.com/photo-1596306499398-8d88944a5ec4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFrdXxlbnwwfHwwfHx8MA%3D%3D",
    title: "City Loft",
    price: 600,
    isFavorite: false,
    rating: 4.8,
    category: "Loft",
    reviews: [],
    comfort: 4.1,
    area: 1200,
    bedrooms: 3,
    bathrooms: 3,
    safetyRank: 4.4,
    facilities: [facilities[2], facilities[4], facilities[5]],
    agent: agents[1],
    location: {
      address: "Downtown Core",
      latitude: 43.653225,
      longitude: -79.383186,
      city: "New York",
      country: "United States"
    },
    images: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1642856761437-5b5efcb36d81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFrdXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1731443614667-e924b1d926fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFrdXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFrdXxlbnwwfHwwfHx8MA%3D%3D"
      }
    ]
  },
  {
    _id: "9",
    imageUrl:
      "https://images.unsplash.com/photo-1607207685777-0986a1eede0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJha3V8ZW58MHx8MHx8fDA%3D",
    title: "Sea View Apartment",
    price: 450,
    isFavorite: false,
    rating: 4.7,
    category: "Apartment",
    reviews: [],
    comfort: 4.3,
    area: 1100,
    bedrooms: 3,
    bathrooms: 2,
    safetyRank: 4.5,
    facilities: [facilities[1], facilities[4], facilities[7]],
    agent: agents[2],
    location: {
      address: "Neftchilar Ave, Baku",
      latitude: 40.368901,
      longitude: 49.850948,
      city: "Baku",
      country: "Azerbaijan"
    },
    images: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1589574390486-447216095288?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJha3V8ZW58MHx8MHx8fDA%3D"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1674857977971-131936c7b5ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFrdXxlbnwwfHwwfHx8MA%3D%3D"
      }
    ]
  },
  {
    _id: "10",
    imageUrl:
      "https://images.unsplash.com/photo-1622314621630-0d24bcb5aa67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJha3V8ZW58MHx8MHx8fDA%3D",
    title: "Modern Family House",
    price: 500,
    isFavorite: false,
    rating: 4.6,
    category: "House",
    reviews: [],
    comfort: 4.4,
    area: 1600,
    bedrooms: 4,
    bathrooms: 3,
    safetyRank: 4.6,
    facilities: [facilities[0], facilities[2], facilities[5]],
    agent: agents[5],
    location: {
      address: "20th January Street, Baku",
      latitude: 40.410047,
      longitude: 49.829998,
      city: "Baku",
      country: "Azerbaijan"
    },
    images: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1716758406306-853301c13ece?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJha3V8ZW58MHx8MHx8fDA%3D"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1689189044045-7cb0767e5cf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJha3V8ZW58MHx8MHx8fDA%3D"
      }
    ]
  },
  {
    _id: "11",
    imageUrl:
      "https://images.unsplash.com/photo-1614623796638-f6da34cd277c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJha3V8ZW58MHx8MHx8fDA%3D",
    title: "Luxury Downtown Condo",
    price: 750,
    isFavorite: false,
    rating: 4.9,
    category: "Condo",
    reviews: [],
    comfort: 4.9,
    area: 1500,
    bedrooms: 3,
    bathrooms: 2,
    safetyRank: 4.8,
    facilities: [facilities[2], facilities[3], facilities[6]],
    agent: agents[0],
    location: {
      address: "Fountains Square, Baku",
      latitude: 40.370321,
      longitude: 49.835342,
      city: "Baku",
      country: "Azerbaijan"
    },
    images: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1642856567364-25d1af181b2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJha3V8ZW58MHx8MHx8fDA%3D"
      },
      {
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1672847847680-d49c4de1c43d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJha3V8ZW58MHx8MHx8fDA%3D"
      }
    ]
  },
  {
    _id: "12",
    imageUrl:
      "https://images.unsplash.com/photo-1704955568776-72d6d5b9af2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJha3V8ZW58MHx8MHx8fDA%3D",
    title: "Old City Studio",
    price: 320,
    isFavorite: false,
    rating: 4.4,
    category: "Studio",
    reviews: [],
    comfort: 3.8,
    area: 700,
    bedrooms: 1,
    bathrooms: 1,
    safetyRank: 4.2,
    facilities: [facilities[4], facilities[5]],
    agent: agents[6],
    location: {
      address: "Icherisheher, Baku",
      latitude: 40.366944,
      longitude: 49.837222,
      city: "Baku",
      country: "Azerbaijan"
    },
    images: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1681073192200-d03c98040144?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGJha3V8ZW58MHx8MHx8fDA%3D"
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1627283699199-0ad75380faa7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJha3V8ZW58MHx8MHx8fDA%3D"
      }
    ]
  }
];
