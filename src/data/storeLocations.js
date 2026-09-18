export const locations = [
  {
    id: "#LOC-01",
    name: "Downtown Flagship",
    tag: "MAIN HUB",
    tagColor: "bg-orange-50 text-orange-700",
    subLabel: "District 1 · Flagship Experience Store",
    address: "742 Evergreen Ter, Ste 4B",
    city: "Central Metro, NY 10001",
    manager: "Elena Vance",
    role: "Sr. General Mgr",
    phone: "(212) 555",
    email: "flagshi...",
  },
  {
    id: "#LOC-02",
    name: "Westside Depot & Roastery",
    tag: "ROASTING PLANT",
    tagColor: "bg-blue-50 text-blue-700",
    subLabel: "District 3 · Wholesale & Direct Counter",
    address: "1204 Pine Hollow Way",
    city: "Brooklyn Wharf, NY 11201",
    manager: "Marcus Vance",
    role: "Plant & Retail Supv",
    phone: "(718) 555",
    email: "westsid...",
  },
  {
    id: "#LOC-03",
    name: "Uptown Boutique & Espresso",
    tag: "RETAIL KIOSK",
    tagColor: "bg-slate-100 text-slate-700",
    subLabel: "District 2 · Luxury Gallery Atrium",
    address: "890 Madison Ave, Floor 1",
    city: "Upper East Side, NY 10028",
    manager: "Julian Keller",
    role: "Store Manager",
    phone: "(212) 555",
    email: "uptown@...",
  },
  {
    id: "#LOC-04",
    name: "Metro Central Station",
    tag: "GRAB & GO",
    tagColor: "bg-emerald-50 text-emerald-700",
    subLabel: "District 1 · High Traffic Commuter Hub",
    address: "89 E 42nd St, Concourse B",
    city: "Midtown Manhattan, NY 10017",
    manager: "Sarah Jenkins",
    role: "Station Lead",
    phone: "(212) 555",
    email: "station...",
  },
  {
    id: "#LOC-05",
    name: "Suburbia Heights",
    tag: "DRIVE-THRU & BAKERY",
    tagColor: "bg-blue-50 text-blue-700",
    subLabel: "Suburban North · Drive-Thru Integrated",
    address: "4510 Oak Ridge Blvd",
    city: "White Plains, NY 10601",
    manager: "David Rodriguez",
    role: "Branch Mgr",
    phone: "(914) 555",
    email: "suburbi...",
  },
];

export function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
}