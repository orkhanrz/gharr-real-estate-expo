import { IFacility, IImage, IProperty } from "@/models/property";
import { IAgent } from "@/models/user";

const images: IImage[] = [];

const facilities: IFacility[] = [
  { id: "1", label: "Car  Parking", image: "car" },
  { id: "2", label: "Swimming Pool", image: "water" },
  { id: "3", label: "Gym & Fit", image: "barbell" },
  { id: "4", label: "Restaurant", image: "restaurant" },
  { id: "5", label: "Wi-fi", image: "wifi" },
  { id: "6", label: "Pet Center", image: "paw" },
  { id: "7", label: "Sports Center", image: "person" },
  { id: "8", label: "Laundry", image: "basket" }
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
    id: "1",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "Modern Villa",
    price: 340,
    isFavorite: false,
    rating: 4.8,
    category: "House",
    reviews: 980,
    comfort: 4.2,
    sqft: 1350,
    bedrooms: 3,
    bathrooms: 3,
    safetyRank: 4.1,
    facilities: [facilities[0], facilities[2], facilities[4], facilities[6]],
    agent: agents[4],
    location: {
      address: "Avenue, West Side",
      lat: 40.748817,
      lng: -73.985428
    },
    images: [
      {
        id: "7fda32e3-e5ea-4ec4-aeb2-2eebce021d4a",
        url: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "a614813e-5f6a-4bde-8dae-92d63fc73080",
        url: "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZXJuJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "2f1d94dc-23db-4987-b2cc-609fed8af27d",
        url: "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZXJuJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "2f1d94da-23db-4987-b2cc-609fed8af27d",
        url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZXJuJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "2f1d94da-23db-4987-b2cc-609fed8af27a",
        url: "https://plus.unsplash.com/premium_photo-1733306523667-80d5e5668631?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZXJuJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D"
      }
    ]
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y296eSUyMGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D",
    title: "Cozy Cottage",
    price: 290,
    isFavorite: false,
    rating: 4.7,
    category: "Cottage",
    reviews: 840,
    comfort: 3.5,
    sqft: 1020,
    bedrooms: 2,
    bathrooms: 2,
    safetyRank: 4.3,
    facilities: [facilities[1], facilities[5]],
    agent: agents[0],
    location: {
      address: "Hilltop Drive",
      lat: 37.774929,
      lng: -122.419416
    },
    images: [
      {
        id: "b1894a2a-8925-42b3-aa5a-aa0432e76196",
        url: "https://plus.unsplash.com/premium_photo-1686167991331-e4219337805f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y296eSUyMGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "dbf6246f-6266-46ee-bd43-a7d5dd283e94",
        url: "https://images.unsplash.com/photo-1561033318-3f377e5a3f3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y296eSUyMGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "2c4243c9-73f1-443c-a9de-3bcead42432e",
        url: "https://images.unsplash.com/photo-1561033318-86d027e3e814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y296eSUyMGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "2a4243c9-73f1-443c-a9de-3bcead42432e",
        url: "https://images.unsplash.com/photo-1662944726441-a4ca20f6f3fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y296eSUyMGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "2c4143c9-73f1-443c-a9de-3bcead42432e",
        url: "https://images.unsplash.com/photo-1561033318-78e75f096306?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvenklMjBjb3R0YWdlfGVufDB8fDB8fHww"
      }
    ]
  },
  {
    id: "3",
    image:
      "https://plus.unsplash.com/premium_photo-1676357173618-22642a966c7f?w=500&auto=format&fit=crop&q=60",
    title: "Downtown Apartment",
    price: 420,
    isFavorite: false,
    rating: 4.9,
    category: "Apartment",
    reviews: 1100,
    comfort: 3.8,
    sqft: 940,
    bedrooms: 2,
    bathrooms: 2,
    safetyRank: 4.5,
    facilities: [facilities[4], facilities[6], facilities[7]],
    agent: agents[5],
    location: {
      address: "Main Street",
      lat: 34.052235,
      lng: -118.243683
    },
    images: [
      {
        id: "7b52a5ac-d9ff-465e-949a-2aba8ee48008",
        url: "https://images.unsplash.com/photo-1673165432945-a62c1a82d3ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG93bnRvd24lMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "a846d19f-bc02-472a-8a2f-dfe373865abe",
        url: "https://images.unsplash.com/photo-1559422876-99bdae91193c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG93bnRvd24lMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D"
      },
      {
        id: "fda6ef50-e4b3-4101-ad4d-fbe5c25acd92",
        url: "https://images.unsplash.com/photo-1604535297773-a9e7219b6ecb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvd250b3duJTIwYXBhcnRtZW50fGVufDB8fDB8fHww"
      },
      {
        id: "fda6ef51-a4b3-4101-ad4d-fbe5c25acd92",
        url: "https://images.unsplash.com/photo-1669003985158-8fd34b5a4545?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvd250b3duJTIwYXBhcnRtZW50fGVufDB8fDB8fHww"
      }
    ]
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60",
    title: "Mountain Cabin",
    price: 310,
    isFavorite: false,
    rating: 4.6,
    category: "Cabin",
    reviews: 920,
    comfort: 3.9,
    sqft: 890,
    bedrooms: 2,
    bathrooms: 2,
    safetyRank: 4.2,
    facilities: [facilities[0], facilities[3], facilities[7]],
    agent: agents[4],
    location: {
      address: "Aspen Hills",
      lat: 39.191097,
      lng: -106.817535
    },
    images: [
      {
        id: "a7d861f5-ddaf-4273-83f1-9179d298a4bf",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "7c48ed4e-bdaf-40e2-a3cb-a798200f6c87",
        url: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "845d24ba-562f-47bc-abcc-0ce8ed90a0ee",
        url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "5",
    image:
      "https://plus.unsplash.com/premium_photo-1663099373746-703d6504d265?w=500&auto=format&fit=crop&q=60",
    title: "Rustic Barn Home",
    price: 270,
    isFavorite: false,
    rating: 4.5,
    category: "Barn",
    reviews: 790,
    comfort: 3.2,
    sqft: 1100,
    bedrooms: 3,
    bathrooms: 3,
    safetyRank: 4.0,
    facilities: [facilities[5], facilities[6]],
    agent: agents[3],
    location: {
      address: "Country Road",
      lat: 36.778259,
      lng: -119.417931
    },
    images: [
      {
        id: "bc521f80-90c8-48ca-94fd-995f7b07a0e3",
        url: "https://images.unsplash.com/photo-1573739453051-4028bba80311?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVzdGljJTIwYmFybiUyMGhvdXNlfGVufDB8fDB8fHww"
      },
      {
        id: "40c9b843-1718-4350-a426-9d9211f7629b",
        url: "https://plus.unsplash.com/premium_photo-1731872413397-a7287085ef39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cnVzdGljJTIwYmFybiUyMGhvdXNlfGVufDB8fDB8fHww"
      },
      {
        id: "b9b47ebc-f9d0-4f6c-a85c-11b9fc4c5e55",
        url: "https://plus.unsplash.com/premium_photo-1734549547989-805c0885dd9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJ1c3RpYyUyMGJhcm4lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        id: "b9b32ebc-f9d0-4f6c-a85c-11b9fc4c5e55",
        url: "https://images.unsplash.com/photo-1728063675531-e51b3556c8f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJ1c3RpYyUyMGJhcm4lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D"
      }
    ]
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    title: "Beach House",
    price: 380,
    isFavorite: false,
    rating: 4.9,
    category: "Villa",
    reviews: 1250,
    comfort: 4.5,
    sqft: 1400,
    bedrooms: 4,
    bathrooms: 4,
    safetyRank: 4.8,
    facilities: [facilities[1], facilities[3], facilities[4], facilities[7]],
    agent: agents[4],
    location: {
      address: "Ocean View",
      lat: 26.122439,
      lng: -80.137317
    },
    images: [
      {
        id: "d57fcedd-27db-46ea-a3dd-ff7d1816cc72",
        url: "https://images.unsplash.com/photo-1615873968403-89f2899a3e0e?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "b18ebc7d-6bf9-40f2-b62e-c48095ae8c79",
        url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "69d1b67f-5df7-41fe-82d6-6443a70e649d",
        url: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "7",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&auto=format&fit=crop&q=60",
    title: "Luxury Mansion",
    price: 950,
    isFavorite: false,
    rating: 5.0,
    category: "Mansion",
    reviews: 1600,
    comfort: 5.0,
    sqft: 3200,
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
      lat: 34.098003,
      lng: -118.361744
    },
    images: [
      {
        id: "547ad3e3-04f0-44cd-a7be-057c64163fa7",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "c1e2a09a-fe97-4c19-97fc-5a36ad4d7f37",
        url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "bfb4f93b-5559-4282-8327-5b91598f03d5",
        url: "https://images.unsplash.com/photo-1613977257363-707ba9348223?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "8",
    image:
      "https://plus.unsplash.com/premium_photo-1661964203218-bf8778198314?w=500&auto=format&fit=crop&q=60",
    title: "City Loft",
    price: 600,
    isFavorite: false,
    rating: 4.8,
    category: "Loft",
    reviews: 1340,
    comfort: 4.1,
    sqft: 1200,
    bedrooms: 3,
    bathrooms: 3,
    safetyRank: 4.4,
    facilities: [facilities[2], facilities[4], facilities[5]],
    agent: agents[1],
    location: {
      address: "Downtown Core",
      lat: 43.653225,
      lng: -79.383186
    },
    images: [
      {
        id: "f77e16f0-fab3-4d9e-9ff1-74ab7b8fb285",
        url: "https://images.unsplash.com/photo-1599423300748-6f87e6e7e7b2?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "ee1647b5-e7eb-4147-97de-7b3dca8f6e83",
        url: "https://images.unsplash.com/photo-1615873968403-89f2899a3e0e?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "f3ae89f2-a618-4cf3-80d3-5acb60b1e903",
        url: "https://images.unsplash.com/photo-1599423300737-dc2cc3b8d6f3?auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];
