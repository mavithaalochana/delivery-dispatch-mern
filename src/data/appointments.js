export const categoryStyles = {
  "Espresso Machine Calibration": "bg-orange-50 text-orange-700",
  "Private Tasting & Cupping Session": "bg-violet-50 text-violet-700",
  "Commercial Barista Training": "bg-slate-100 text-slate-700",
  "Wholesale Equipment Consultation": "bg-emerald-50 text-emerald-700",
  "Preventative Maintenance Check": "bg-slate-100 text-slate-600",
};

export const statusStyles = {
  "In Progress": "bg-emerald-50 text-emerald-700",
  Confirmed: "bg-blue-50 text-blue-700",
  "Pending Deposit": "bg-red-50 text-red-700",
  Completed: "bg-slate-100 text-slate-500",
};

export const appointments = [
  {
    id: "#APT-8041",
    category: "Espresso Machine Calibration",
    clientName: "Sarah Jenkins",
    clientContact: "+1 (555) 389-1024 · s.jenkins@lumina.co",
    specialist: "Julian Keller",
    specialistRole: "Senior Tech",
    timeStart: "09:30 AM",
    timeEnd: "10:30 AM",
    location: "Bay #02 · On Site",
    status: "In Progress",
  },
  {
    id: "#APT-8042",
    category: "Private Tasting & Cupping Session",
    clientName: "David Miller",
    clientContact: "+1 (555) 741-9920 · dmiller@vanguard.io",
    specialist: "Marcus Vance",
    specialistRole: "Lead Roaster",
    timeStart: "11:00 AM",
    timeEnd: "12:00 PM",
    location: "Cupping Room A",
    status: "Confirmed",
  },
  {
    id: "#APT-8043",
    category: "Commercial Barista Training",
    clientName: "Elena Rostova",
    clientContact: "+1 (555) 902-8341 · rostova@havenhotel",
    specialist: "Elena Vance",
    specialistRole: "Store Manager",
    timeStart: "01:30 PM",
    timeEnd: "03:00 PM",
    location: "Training Lab #1",
    status: "Pending Deposit",
  },
  {
    id: "#APT-8044",
    category: "Wholesale Equipment Consultation",
    clientName: "Carlos Mendes",
    clientContact: "+1 (555) 219-4820 · carlos@mendesbaki",
    specialist: "Elena Vance",
    specialistRole: "Store Manager",
    timeStart: "03:30 PM",
    timeEnd: "04:30 PM",
    location: "Boardroom Annex",
    status: "Confirmed",
  },
  {
    id: "#APT-8040",
    category: "Preventative Maintenance Check",
    clientName: "Hannah Scott",
    clientContact: "+1 (555) 438-9211 · hannah@artisanblen",
    specialist: "Julian Keller",
    specialistRole: "Senior Tech",
    timeStart: "08:00 AM",
    timeEnd: "09:15 AM",
    location: "Bay #01 · Complete",
    status: "Completed",
  },
];

export function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
}