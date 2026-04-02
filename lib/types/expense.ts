export interface Expense {
  id: number;
  created_at: Date;
  last_modified: Date;
  user_id: number;
  description: string;
  amount: number;
  category: string;
  date: Date;
}

export interface BudgetCategoriesProps {
  category: string;
  icon: string;
  color: string;
}

export enum ExpenseCategory {
  FoodAndDining = "Food & Dining",
  Transportation = "Transportation",
  Shopping = "Shopping",
  Entertainment = "Entertainment",
  BillsAndUtilities = "Bills & Utilities",
  SocialLife = "Social Life",
  AttireAndBeauty = "Attire & Beauty",
  Health = "Health",
}

export const ExpenseCategoryConfig: Record<
  ExpenseCategory,
  { icon: string; color: string }
> = {
  [ExpenseCategory.FoodAndDining]: {
    icon: "Utensils",
    color: "bg-blue-50 text-blue-600",
  },
  [ExpenseCategory.Transportation]: {
    icon: "Car",
    color: "bg-purple-50 text-purple-600",
  },
  [ExpenseCategory.Shopping]: {
    icon: "ShoppingCart",
    color: "bg-pink-50 text-pink-600",
  },
  [ExpenseCategory.Entertainment]: {
    icon: "Clapperboard",
    color: "bg-amber-50 text-amber-600",
  },
  [ExpenseCategory.BillsAndUtilities]: {
    icon: "Receipt",
    color: "bg-teal-50 text-teal-600",
  },
  [ExpenseCategory.SocialLife]: {
    icon: "Heart",
    color: "bg-rose-50 text-rose-600",
  },
  [ExpenseCategory.AttireAndBeauty]: {
    icon: "Shirt",
    color: "bg-fuchsia-50 text-fuchsia-600",
  },
  [ExpenseCategory.Health]: {
    icon: "HeartPulse",
    color: "bg-green-50 text-green-600",
  },
};
