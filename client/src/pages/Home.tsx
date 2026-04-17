import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const heroImage =
    "https://i.ibb.co/YT4fw1Bp/Gemini-Generated-Image-lv5u37lv5u37lv5u.png";

  const featuredProducts = [
    {
      id: 1,
      name: "Noir Luxe Jacket",
      price: "₹21,000",
      image:
        "https://i.ibb.co/XRgQBGZ/Black-Leather-Belted-Jacket-XS-US.jpg",
      category: "Dresses",
    },
    {
      id: 2,
      name: "Emerald Signature Set",
      price: "₹28,999",
      image:
        "https://i.ibb.co/sJzPBtxc/Serena-Spiral-Pear-Ring.jpg",
      category: "Outerwear",
    },
    {
      id: 3,
      name: "Crystal Noir Gown",
      price: "₹24,999",
      image:
        "https://i.ibb.co/S7mnhP64/Belladonna-Sequin-Maxi-Dress-Brown-Customize.jpg",
      category: "Casual",
    },
    {
      id: 4,
      name: "Artisan Crochet",
      price: "₹4,499",
      image:
        "https://i.ibb.co/bjrsWjKR/download-4.jpg",
      category: "Collections",
    },
  ];

  const categories = [
    {
      name: "Women",
      image: "https://i.ibb.co/LzKzRWBk/image.jpg",
    },
    {
      name: "Men",
      image: "https://i.ibb.co/JjGLL3bt/Menswear.jpg",
    },
    {
      name: "Accessories",
      image: "https://i.ibb.co/3556rhSs/download-1.jpg",
    },
    {
      name: "Footwear",
      image: "https://i.ibb.co/fVPLSDnD/The-Shannon.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen md:h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="container relative z-10 text-white">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                Elegance Redefined
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100 text-balance">
                Discover our curated collection of premium fashion for the
                modern lifestyle.
              </p>
              <Link href="/products">
                <Button className="px-6 py-3 bg-white text-black font-medium rounded-sm hover:shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-100">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Shop by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {categories.map((category) => (
                <Link key={category.name} href={`/products?category=${category.name.toLowerCase()}`}>
                  <div className="group cursor-pointer">
                    <div className="aspect-square bg-muted rounded-sm mb-4 flex items-center justify-center overflow-hidden hover:shadow-lg transition-shadow">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-center font-semibold text-sm md:text-base">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
              <Link href="/products">
                <Button variant="ghost" className="gap-2">
                  View All
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <div className="group cursor-pointer">
                    <div className="aspect-square bg-muted rounded-sm mb-4 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        {product.category}
                      </p>
                      <h3 className="font-semibold text-sm md:text-base">
                        {product.name}
                      </h3>
                      <p className="text-sm font-medium">{product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Promotional Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Promo 1 */}
              <div className="relative h-80 rounded-sm overflow-hidden group">
                <img
                  src="https://i.ibb.co/LDZn4kzf/image.jpg"
                  alt="New Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm uppercase tracking-wide mb-2">
                      New Arrival
                    </p>
                    <h3 className="text-2xl font-bold mb-4">Summer Collection</h3>
                    <Link href="/products?collection=summer">
                      <Button className="px-6 py-3 bg-white text-black font-medium rounded-sm hover:shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-100">
                        Explore
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Promo 2 */}
              <div className="relative h-80 rounded-sm overflow-hidden group">
                <img
                  src="https://i.ibb.co/fd9prsGX/download-2.jpg"
                  alt="Sale"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm uppercase tracking-wide mb-2">
                      Limited Time
                    </p>
                    <h3 className="text-2xl font-bold mb-4">Up to 40% Off</h3>
                    <Link href="/products?sale=true">
                      <Button className="px-6 py-3 bg-white text-black font-medium rounded-sm hover:shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-100">
                        Shop Sale
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container max-w-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for exclusive offers and new
                arrivals.
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 ease-in-out flex-1"
                required
              />
              <Button className="px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300 ease-in-out">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
