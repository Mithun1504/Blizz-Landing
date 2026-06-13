import {
  BarChart3,
  CalendarCheck2,
  ChevronDown,
  Home,
  PackageCheck,
  ReceiptText,
  Settings,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";
import { logoUrl } from "../../assets";

const transactions = [
  ["Invoice #INV-1012", "Customer Payment", "₹45,000", "20 May 2024", "Paid"],
  ["Bill #BILL-2054", "Office Supplies", "₹12,500", "19 May 2024", "Paid"],
  ["Invoice #INV-1011", "Customer Payment", "₹32,000", "18 May 2024", "Paid"],
  ["Expense #EXP-008", "Electricity Bill", "₹8,750", "18 May 2024", "Paid"],
];

const metrics = [
  ["Total Sales", "₹12,45,000", "+12.5%"],
  ["Total Expenses", "₹6,20,000", "-8.4%"],
  ["Net Profit", "₹6,25,000", "+18.7%"],
  ["Bank Balance", "₹8,35,000", "Updated today"],
];

const expenseCategories = [
  ["Purchases", "40%"],
  ["Payroll", "25%"],
  ["Rent", "15%"],
  ["Utilities", "10%"],
  ["Others", "10%"],
];

const navIcons = [
  Home,
  ReceiptText,
  CalendarCheck2,
  BarChart3,
  PackageCheck,
  UsersRound,
  UsersRound,
  Settings,
];

export function HeroDashboard() {
  return (
    <motion.div
      className="dashboard-card"
      initial={{ opacity: 0, x: 40, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
    >
      <div className="dashboard-top">
        <div className="flex items-center gap-2">
          <img src={logoUrl} alt="" className="h-[24px] w-[98px] object-contain object-left" />
        </div>
        <h2>Dashboard</h2>
        <div className="ml-auto flex items-center gap-2 text-[10px] font-semibold text-ink">
          Acme Pvt. Ltd.
          <ChevronDown className="h-3 w-3" />
        </div>
      </div>

      <div className="dashboard-body">
        <aside className="dashboard-sidebar" aria-label="Dashboard navigation">
          {navIcons.map((Icon, index) => (
            <span key={`${Icon.displayName ?? Icon.name}-${index}`} className={index === 0 ? "active" : ""}>
              <Icon className="h-[19px] w-[19px]" strokeWidth={1.8} />
            </span>
          ))}
        </aside>

        <main className="dashboard-main">
          <div className="metric-grid">
            {metrics.map(([label, value, change], index) => (
              <div className="metric-card" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
                <em className={index === 1 ? "negative" : ""}>{change}</em>
              </div>
            ))}
          </div>

          <div className="dashboard-panels">
            <SalesPanel />
            <ExpensesPanel />
            <TransactionsPanel />
            <CashFlowPanel />
          </div>
        </main>
      </div>
    </motion.div>
  );
}

function SalesPanel() {
  return (
    <div className="panel panel-sales">
      <div className="panel-heading">
        <strong>Sales Overview</strong>
        <button>This Month</button>
      </div>
      <svg viewBox="0 0 360 174" role="img" aria-label="Sales overview line chart">
        <g className="chart-grid">
          <line x1="28" y1="24" x2="340" y2="24" />
          <line x1="28" y1="70" x2="340" y2="70" />
          <line x1="28" y1="116" x2="340" y2="116" />
          <line x1="28" y1="150" x2="340" y2="150" />
        </g>
        <text x="0" y="28">15L</text>
        <text x="0" y="74">10L</text>
        <text x="6" y="120">5L</text>
        <text x="10" y="154">0</text>
        <path
          className="chart-fill"
          d="M38 132 C72 92 92 120 122 80 S172 60 194 50 S236 134 266 86 S310 70 334 36 L334 150 L38 150 Z"
        />
        <path
          className="chart-line"
          d="M38 132 C72 92 92 120 122 80 S172 60 194 50 S236 134 266 86 S310 70 334 36"
        />
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, index) => (
          <text key={month} x={42 + index * 56} y="170">
            {month}
          </text>
        ))}
      </svg>
    </div>
  );
}

function ExpensesPanel() {
  return (
    <div className="panel panel-expenses">
      <strong>Expenses by Category</strong>
      <div className="donut-wrap">
        <div className="donut">
          <span>
            ₹6,20,000
            <small>Total</small>
          </span>
        </div>
        <ul>
          {expenseCategories.map(([name, amount]) => (
            <li key={name}>
              <span />
              {name}
              <b>{amount}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TransactionsPanel() {
  return (
    <div className="panel panel-table">
      <div className="panel-heading">
        <strong>Recent Transactions</strong>
        <button>All</button>
      </div>
      <table>
        <tbody>
          {transactions.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) => (
                <td key={`${row[0]}-${cell}`} className={index === 4 ? "paid" : ""}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CashFlowPanel() {
  return (
    <div className="panel panel-cash">
      <div className="panel-heading">
        <strong>Cash Flow</strong>
        <button>This Month</button>
      </div>
      <div className="bar-chart" aria-label="Cash flow bar chart">
        {[35, 60, 28, 70, 38, 58, 26, 78].map((height, index) => (
          <span
            key={index}
            style={{ height: `${height}%` }}
            className={index % 2 === 0 ? "inflow" : "outflow"}
          />
        ))}
      </div>
    </div>
  );
}
