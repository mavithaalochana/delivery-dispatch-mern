import {
  LayoutDashboard,
  ShoppingCart,
  Boxes,
  Layers,
  Tag,
  SlidersHorizontal,
  DollarSign,
  Users,
  Repeat,
  Truck,
  PackageCheck,
  Wrench,
  CalendarDays,
  UserCog,
  FileText,
  Receipt,
  BarChart3,
  Settings,
} from "lucide-react";

export const sidebarSections = [
  {
    label: "Main",
    items: [
      { name: "Dashboard", icon: LayoutDashboard },
      { name: "Point of Sale", icon: ShoppingCart },
    ],
  },
  {
    label: "Catalog & Stock",
    items: [
      { name: "Inventory & Items", icon: Boxes },
      { name: "Kits & Bundles", icon: Layers },
      { name: "Categories & Tags", icon: Tag },
      { name: "Modifiers & Attributes", icon: SlidersHorizontal },
      { name: "Price Rules", icon: DollarSign },
    ],
  },
  {
    label: "Customers",
    items: [
      { name: "Directory", icon: Users },
      { name: "Subscriptions", icon: Repeat },
    ],
  },
  {
    label: "Operations & Fulfillment",
    items: [
      { name: "Suppliers", icon: Truck },
      { name: "Receiving", icon: PackageCheck },
      { name: "Deliveries", icon: Truck, path: "/" },
      { name: "Work Orders", icon: Wrench },
      { name: "Appointments", icon: CalendarDays, path: "/appointments" },
      { name: "Employees", icon: UserCog },
    ],
  },
  {
    label: "Financials & Settings",
    items: [
      { name: "Invoices & Aging", icon: FileText },
      { name: "Expenses", icon: Receipt },
      { name: "Reports Hub", icon: BarChart3 },
      { name: "Store Configuration", icon: Settings },
    ],
  },
];

export const tabs = [
  { name: "All Orders", count: 38 },
  { name: "Pending Dispatch", count: 8 },
  { name: "Out for Delivery", count: 14, dot: true },
  { name: "Delivered", count: 16 },
  { name: "Exceptions / Failed", count: 0 },
];