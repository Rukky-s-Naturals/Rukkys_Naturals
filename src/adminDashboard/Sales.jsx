import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend} from "chart.js";

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Sales = () => {
  // Data for the bar chart
  const revenueData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Revenue",
        data: [400, 600, 800, 500, 900, 700, 1000],
        backgroundColor: "#8884d8",
      },
    ],
  };

  // Data for the pie chart
  const topProductsData = {
    labels: ["Product A", "Product B", "Product C"],
    datasets: [
      {
        label: "Top Products",
        data: [400, 300, 300],
        backgroundColor: ["#0088FE", "#00C49F", "#FFBB28"],
      },
    ],
  };

  return (
    <div className="p-4 space-y-6">
      {/* Sales Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-gray-600">Total Revenue</h3>
          <p className="text-2xl font-bold">$12,450</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-gray-600">Orders</h3>
          <p className="text-2xl font-bold">230</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-gray-600">Avg. Order Value</h3>
          <p className="text-2xl font-bold">$54.13</p>
        </div>
      </div>

      {/* Sales Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Revenue Trend Chart */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-700">Revenue Trend</h3>
          <Bar data={revenueData} options={{ responsive: true }} />
        </div>

        {/* Top Products Chart */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-700">Top Products</h3>
          <Pie data={topProductsData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-700">Recent Transactions</h3>
        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Order ID</th>
              <th className="text-left p-2">Customer</th>
              <th className="text-left p-2">Total</th>
              <th className="text-left p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">#12345</td>
              <td className="p-2">Kwaku Plange</td>
              <td className="p-2">$120</td>
              <td className="p-2 text-green-600">Completed</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">#12346</td>
              <td className="p-2">Jackie Asamoah</td>
              <td className="p-2">$80</td>
              <td className="p-2 text-yellow-600">Pending</td>
            </tr>
            <tr>
              <td className="p-2">#12347</td>
              <td className="p-2">Felicia Mends</td>
              <td className="p-2">$150</td>
              <td className="p-2 text-red-600">Canceled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sales;
