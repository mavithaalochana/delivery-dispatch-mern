export const statusStyles = {
  "In Progress": "bg-blue-50 text-blue-700",
  "Waiting On Customer": "bg-orange-50 text-orange-700",
  Repaired: "bg-emerald-50 text-emerald-700",
  "New Intake": "bg-slate-100 text-slate-700",
  "Out For Repair": "bg-red-50 text-red-700",
  Complete: "bg-emerald-50 text-emerald-700",
};

export const filterPills = [
  { name: "New", count: 4, color: "bg-slate-400" },
  { name: "In Progress", count: 7, color: "bg-blue-500" },
  { name: "Out For Repair", count: 3, color: "bg-orange-500" },
  { name: "Waiting For Customer", count: 5, color: "bg-orange-400" },
  { name: "Repaired", count: 8, color: "bg-emerald-500" },
  { name: "Complete", count: 24, color: "bg-emerald-600" },
  { name: "Cancelled", count: 1, color: "bg-red-500" },
];

export const workOrders = [
  {
    woId: "#WO-4921",
    saleId: "#SL-7719",
    loggedDate: "Oct 24, 2024",
    status: "In Progress",
    technician: "Julian Keller",
    completion: "Oct 26, 2024",
    completionNote: null,
    customer: "Marcus Vance",
    action: "collect",
  },
  {
    woId: "#WO-4920",
    saleId: "#SL-7704",
    loggedDate: "Oct 23, 2024",
    status: "Waiting On Customer",
    technician: "Elena Rostova",
    completion: "Pending Quote",
    completionNote: "red",
    customer: "Elena Rostova",
    action: "collect",
  },
  {
    woId: "#WO-4919",
    saleId: "#SL-7688",
    loggedDate: "Oct 22, 2024",
    status: "Repaired",
    technician: "Marcus Vance",
    completion: "Ready Pickup",
    completionNote: "green",
    customer: "David Miller",
    action: "collect",
  },
  {
    woId: "#WO-4918",
    saleId: "#SL-7662",
    loggedDate: "Oct 24, 2024",
    status: "New Intake",
    technician: "Samir Patel",
    completion: "Oct 29, 2024",
    completionNote: null,
    customer: "Sarah Jenkins",
    action: "collect",
  },
  {
    woId: "#WO-4917",
    saleId: "#SL-7649",
    loggedDate: "Oct 21, 2024",
    status: "Out For Repair",
    technician: "Julian Keller",
    completion: "Nov 02, 2024",
    completionNote: null,
    customer: "Kenji Takahashi",
    action: "collect",
  },
  {
    woId: "#WO-4916",
    saleId: "#SL-7630",
    loggedDate: "Oct 20, 2024",
    status: "In Progress",
    technician: "Elena Rostova",
    completion: "Oct 27, 2024",
    completionNote: null,
    customer: "Amara Chen",
    action: "collect",
  },
  {
    woId: "#WO-4915",
    saleId: "#SL-7601",
    loggedDate: "Oct 19, 2024",
    status: "Complete",
    technician: "Marcus Vance",
    completion: "Oct 23, 2024",
    completionNote: null,
    customer: "Liam Thorne",
    action: "settled",
  },
];

export function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
}