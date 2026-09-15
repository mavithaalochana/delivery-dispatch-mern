export const statusStyles = {
  "Out for Delivery": "bg-blue-50 text-blue-700",
  "Pending Dispatch": "bg-orange-50 text-orange-700",
  Delivered: "bg-emerald-50 text-emerald-700",
};

export const orders = [
  {
    id: "#SL-88421",
    status: "Out for Delivery",
    recipient: "Marcus Sterling",
    address: "742 Evergreen Ter, Ste 4B",
    courier: "Liam R.",
    fleet: "Van 02 · Electric",
    category: "Catering",
    target: "12:30 PM",
    note: "(~14m)",
  },
  {
    id: "#SL-88422",
    status: "Pending Dispatch",
    recipient: "Sophia Chen",
    address: "488 Metro Tower, Fl 12",
    courier: "Unassigned",
    fleet: "Assign Driver",
    unassigned: true,
    category: "Bakery Pre-order",
    target: "01:15 PM",
    note: "(Slot A)",
  },
  {
    id: "#SL-88419",
    status: "Delivered",
    recipient: "David Miller",
    address: "1204 Pine Hollow Way",
    courier: "Tanya H.",
    fleet: "Scooter 01",
    category: "Retail Merch",
    target: "11:52 AM",
    note: "(Pod Confirmed)",
  },
  {
    id: "#SL-88418",
    status: "Out for Delivery",
    recipient: "Evelyn Rodriguez",
    address: "91 Ocean Blvd, Loft 2",
    courier: "Jared K.",
    fleet: "Van 01 · Transit",
    category: "Wholesale Beans",
    target: "12:45 PM",
    note: "(~29m)",
  },
  {
    id: "#SL-88415",
    status: "Pending Dispatch",
    recipient: "Arthur Pendelton",
    address: "310 Innovation Dr, Dock 4",
    courier: "Liam R.",
    fleet: "Queue: Next Stop",
    category: "Catering",
    target: "02:00 PM",
    note: "(Prepped)",
  },
  {
    id: "#SL-88412",
    status: "Delivered",
    recipient: "Claire Dupont",
    address: "500 Elmcrest Ln, Unit 19B",
    courier: "Tanya H.",
    fleet: "Scooter 01",
    category: "Bakery Pre-order",
    target: "10:40 AM",
    note: "(Signed)",
  },
  {
    id: "#SL-88409",
    status: "Out for Delivery",
    recipient: "Gregory Vance",
    address: "88 Market St, Fl 3",
    courier: "Noah A.",
    fleet: "Van 03 · Express",
    category: "Wholesale Beans",
    target: "01:00 PM",
    note: "(~45m)",
  },
  {
    id: "#SL-88404",
    status: "Out for Delivery",
    recipient: "Isabella Rossi",
    address: "64 Riverfront Ter, Villa 7",
    courier: "Jared K.",
    fleet: "Van 01 · Transit",
    category: "Retail Merch",
    target: "01:30 PM",
    note: "(~1h 15m)",
  },
];

export function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
}