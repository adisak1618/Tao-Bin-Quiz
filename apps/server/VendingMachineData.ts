import { OpenStatus, VendingMachine } from "./types";

const randomDateBeforeNow = () => new Date(Date.now() - Math.floor(Math.random() * 3600000));

export const vendingMachinesData: VendingMachine[] = [
  {
    id: "vm-001",
    name: "Thai Tea Thrive",
    description: "Delivers the authentic taste of Thai tea.",
    status: OpenStatus.OPEN,
    statusMessage: "Serving your favorites!",
    currentSales: 200,
    logs: [{ title: "Restock", description: "Thai tea leaves restocked" }],
    lastBoots: randomDateBeforeNow(),
    config: {
      temperature: 4,
      stockThresholds: 50,
      operationalHours: {
        start: "05:00",
        stop: "02:00",
      }
    }
  },
  {
    id: "vm-002",
    name: "Bangkok Bean Brew",
    description: "Freshly brewed Thai coffee on demand.",
    status: OpenStatus.OPEN,
    statusMessage: "Enjoy a warm welcome!",
    currentSales: 120,
    logs: [{ title: "Maintenance", description: "Espresso machine serviced" }],
    lastBoots: randomDateBeforeNow(),
    config: {
      temperature: 6,
      stockThresholds: 40,
      operationalHours: {
        start: "05:00",
        stop: "02:00",
      }
    }
  },
  {
    id: "vm-003",
    name: "Chiang Mai Chiller",
    description: "Ice-cold refreshments with a touch of Thai flavors.",
    status: OpenStatus.OPEN,
    statusMessage: "Cool off with our special drinks!",
    currentSales: 180,
    logs: [{ title: "Update", description: "Added new flavor: Mango Sticky Rice Smoothie" }],
    lastBoots: randomDateBeforeNow(),
    config: {
      temperature: 3,
      stockThresholds: 30,
      operationalHours: {
        start: "05:00",
        stop: "02:00",
      }
    }
},
{
    id: "vm-004",
    name: "Pattaya Punch",
    description: "Tropical fruit drinks to give you a beachside feel.",
    status: OpenStatus.PRE_LAUNCH,
    statusMessage: "Launching soon with exotic flavors!",
    currentSales: 0,
    logs: [],
    lastBoots: randomDateBeforeNow(),
    config: {
      temperature: 5,
      stockThresholds: 50,
      operationalHours: {
        start: "05:00",
        stop: "02:00",
      }
    }
  },
  {
    id: "vm-005",
    name: "Sukhumvit Sip",
    description: "Experience Bangkok's street coffee culture.",
    status: OpenStatus.OPEN,
    statusMessage: "Bringing the heart of Bangkok to you.",
    currentSales: 95,
    logs: [{ title: "New Arrival", description: "Introducing Coconut Coffee" }],
    lastBoots: randomDateBeforeNow(),
    config: {
      temperature: 6,
      stockThresholds: 25,
      operationalHours: {
        start: "05:00",
        stop: "02:00",
      }
    }
  },
  {
    id: "vm-006",
    name: "Ayutthaya Aroma",
    description: "Ancient city inspired herbal drinks.",
    status: OpenStatus.OPEN,
    statusMessage: "A sip of history in every drink.",
    currentSales: 110,
    logs: [{ title: "Herbal Restock", description: "Lemongrass and Pandan refreshed" }],
    lastBoots: randomDateBeforeNow(),
    config: {
      temperature: 4,
      stockThresholds: 20,
      operationalHours: {
        start: "05:00",
        stop: "02:00",
      }
    }
  },
  {
    id: "vm-007",
    name: "Phuket Paradise",
    description: "Tropical smoothies and shakes, with fresh Thai fruits.",
    status: OpenStatus.CLOSE,
    statusMessage: "Taste the island breeze.",
    currentSales: 140,
    logs: [{ title: "Fruit Delivery", description: "Fresh mangoes and pineapples added" }],
    lastBoots: randomDateBeforeNow(),
    config: {
      temperature: 2,
      stockThresholds: 30,
      operationalHours: {
        start: "05:00",
        stop: "02:00",
      }
    }
},
{
    id: "vm-008",
    name: "Lanna Latte",
    description: "Northern Thai style coffee, with a hint of spice.",
    status: OpenStatus.OPEN,
    statusMessage: "Warm up with a spiced latte.",
    currentSales: 165,
    logs: [{ title: "Spice Restock", description: "Cinnamon and cardamom levels replenished" }],
    lastBoots: randomDateBeforeNow(),
    config: {
      temperature: 5,
      stockThresholds: 20,
      operationalHours: {
        start: "05:00",
        stop: "02:00",
      }
    }
},
{
    id: "vm-009",
    name: "Kanchanaburi Kombucha",
    description: "Fermented teas with Thai fruits and herbs.",
    status: OpenStatus.OPEN,
    statusMessage: "Revitalize with a fermented twist.",
    currentSales: 90,
    logs: [{ title: "Kombucha Brew", description: "New batch of lychee kombucha ready" }],
    lastBoots: randomDateBeforeNow(),
    config: {
      temperature: 4,
      stockThresholds: 25,
      operationalHours: {
        start: "05:00",
        stop: "02:00",
      }
    }
},
{
    id: "vm-010",
    name: "Samui Squeeze",
    description: "Freshly squeezed juices, featuring Thailand's exotic fruits.",
    status: OpenStatus.UNDER_MAINTENANCE,
    statusMessage: "A squeeze of tropical heaven.",
    currentSales: 200,
    logs: [{ title: "Juice Menu Update", description: "Dragon fruit juice now available" }],
    lastBoots: randomDateBeforeNow(),
    config: {
      temperature: 3,
      stockThresholds: 35,
      operationalHours: {
        start: "05:00",
        stop: "02:00",
      }
    }
}
];