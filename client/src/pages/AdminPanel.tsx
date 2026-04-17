import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { useState } from "react";
import { Plus, Edit2, Trash2, BarChart3, Package } from "lucide-react";

export default function AdminPanel() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("products");
  const [showAddForm, setShowAddForm] = useState(false);

  // Mock products data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Elegant Black Dress",
      price: 299,
      category: "Dresses",
      inStock: 15,
      sku: "HYB-BLK-DRESS-001",
    },
    {
      id: 2,
      name: "Luxury Fashion Jacket",
      price: 399,
      category: "Jackets",
      inStock: 8,
      sku: "HYB-JACKET-001",
    },
  ]);

  // Mock orders data
  const orders = [
    {
      id: 1,
      orderNumber: "ORD-ABC123",
      customer: "John Doe",
      total: 698,
      status: "Delivered",
      date: "2024-03-15",
    },
    {
      id: 2,
      orderNumber: "ORD-DEF456",
      customer: "Jane Smith",
      total: 349,
      status: "Processing",
      date: "2024-03-14",
    },
  ];

  // Mock statistics
  const stats = {
    totalSales: 5420,
    totalOrders: 24,
    totalProducts: 42,
    totalCustomers: 156,
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Check if user is admin
  if (user?.role !== "admin") {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
            <p className="text-muted-foreground mb-6">
              You don't have permission to access the admin panel.
            </p>
            <Button className="px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300 ease-in-out">
              Go Back Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border/30 py-8 bg-muted/30">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Panel</h1>
            <p className="text-muted-foreground">
              Manage products, orders, and store settings
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-12 border-b border-border/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="border border-border/30 rounded-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Total Sales
                    </p>
                    <p className="text-3xl font-bold">
                      ${stats.totalSales.toFixed(2)}
                    </p>
                  </div>
                  <BarChart3 size={32} className="text-muted-foreground" />
                </div>
              </div>

              <div className="border border-border/30 rounded-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Total Orders
                    </p>
                    <p className="text-3xl font-bold">{stats.totalOrders}</p>
                  </div>
                  <Package size={32} className="text-muted-foreground" />
                </div>
              </div>

              <div className="border border-border/30 rounded-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Total Products
                    </p>
                    <p className="text-3xl font-bold">{stats.totalProducts}</p>
                  </div>
                  <Package size={32} className="text-muted-foreground" />
                </div>
              </div>

              <div className="border border-border/30 rounded-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Total Customers
                    </p>
                    <p className="text-3xl font-bold">{stats.totalCustomers}</p>
                  </div>
                  <BarChart3 size={32} className="text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-12">
          <div className="container">
            {/* Tab Navigation */}
            <div className="flex gap-4 mb-8 border-b border-border/30">
              <button
                onClick={() => setActiveTab("products")}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === "products"
                    ? "border-b-2 border-foreground text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === "orders"
                    ? "border-b-2 border-foreground text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Orders
              </button>
            </div>

            {/* Products Tab */}
            {activeTab === "products" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Products</h2>
                  <Button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300 ease-in-out"
                  >
                    <Plus size={20} /> Add Product
                  </Button>
                </div>

                {showAddForm && (
                  <div className="border border-border/30 rounded-sm p-6 space-y-4 bg-muted/30">
                    <h3 className="font-semibold mb-4">Add New Product</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Product Name"
                        className="px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                      />
                      <input
                        type="number"
                        placeholder="Price"
                        className="px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                      />
                      <input
                        type="text"
                        placeholder="Category"
                        className="px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                      />
                      <input
                        type="text"
                        placeholder="SKU"
                        className="px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                      />
                    </div>
                    <textarea
                      placeholder="Description"
                      rows={3}
                      className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out"
                    />
                    <div className="flex gap-3">
                      <Button className="px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300 ease-in-out">
                        Save Product
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowAddForm(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}

                {/* Products Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/30">
                        <th className="text-left py-3 px-4 font-semibold">
                          Product Name
                        </th>
                        <th className="text-left py-3 px-4 font-semibold">
                          Category
                        </th>
                        <th className="text-left py-3 px-4 font-semibold">
                          Price
                        </th>
                        <th className="text-left py-3 px-4 font-semibold">
                          Stock
                        </th>
                        <th className="text-left py-3 px-4 font-semibold">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr
                          key={product.id}
                          className="border-b border-border/30 hover:bg-muted/30 transition-colors"
                        >
                          <td className="py-3 px-4">{product.name}</td>
                          <td className="py-3 px-4">{product.category}</td>
                          <td className="py-3 px-4">${product.price}</td>
                          <td className="py-3 px-4">{product.inStock}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <button className="p-2 hover:bg-muted rounded-sm transition-colors">
                                <Edit2 size={18} />
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(product.id)}
                                className="p-2 hover:bg-red-100 text-red-600 rounded-sm transition-colors"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Orders</h2>

                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-border/30 rounded-sm p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Order ID
                          </p>
                          <p className="font-semibold">{order.orderNumber}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Customer
                          </p>
                          <p className="font-semibold">{order.customer}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Total
                          </p>
                          <p className="font-semibold">
                            ${order.total.toFixed(2)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Date
                          </p>
                          <p className="font-semibold">
                            {new Date(order.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Status
                          </p>
                          <p
                            className={`font-semibold ${
                              order.status === "Delivered"
                                ? "text-green-600"
                                : "text-blue-600"
                            }`}
                          >
                            {order.status}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border/30">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
