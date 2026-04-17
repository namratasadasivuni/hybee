import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Premium fashion slideshow images
  const slideshowImages = [
    "https://i.ibb.co/kssmgdzr/d4e0a1fd033f936266e0957385f573e3.jpg",
    "https://i.ibb.co/LXqc3m5G/Incredible-parade.jpg",
    "https://i.ibb.co/FqXs6nxY/download-5.jpg",
    "https://i.ibb.co/zhNtJBPt/Insta-saratanjala.jpg",
  ];

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideshowImages.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const values = [
    {
      title: "Timeless Elegance",
      description: "We celebrate classic designs that transcend trends and stand the test of time.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663564546189/WpnnoNX7avyJd7EhmAFAFj/XOwqFkwvPsh2_e6e24fc9.jpg",
    },
    {
      title: "Ethical Craftsmanship",
      description: "Every piece is created with care by artisans who share our passion for quality.",
      image: "https://i.ibb.co/C3sGd4Gr/Making-of.jpg",
    },
    {
      title: "Sustainable Fashion",
      description: "We're committed to eco-friendly practices and responsible sourcing.",
      image: "https://i.ibb.co/C5JGFpwJ/Bohemian.jpg",
    },
  ];

  const articles = [
    {
      title: "The Art of Vintage Fashion",
      excerpt: "Discover how classic silhouettes from the 1950s continue to inspire modern designers.",
      image: "https://i.ibb.co/gMxpKDfR/Key-To-Fashion.jpg",
    },
    {
      title: "Luxury Fabrics Explained",
      excerpt: "Learn about the finest materials used in premium fashion and why they matter.",
      image: "https://i.ibb.co/cSCqb2z2/download-8.jpg",
    },
    {
      title: "Styling Retro Pieces",
      excerpt: "Master the art of mixing vintage and contemporary for a sophisticated look.",
      image: "https://i.ibb.co/TMHwkt0T/vintage-clothes.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section with Featured Image */}
        <section className="relative h-96 md:h-[600px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://i.ibb.co/ccRkNsWQ/download-11.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              About Hybee
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow">
              Redefining Fashion Through Elegance, Quality, and Innovation
            </p>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                    Our Story
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50" />
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hybee was born from a simple vision: to make premium fashion accessible to everyone who appreciates quality, elegance, and timeless style. Founded in 2020, we've grown from a small boutique to a trusted global fashion destination.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every piece in our collection is carefully curated by our team of fashion experts who travel the world seeking the finest designers and craftspeople. We believe that fashion is not just about following trends—it's about expressing your unique identity and celebrating individuality.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our commitment to sustainability means we work exclusively with ethical manufacturers and use eco-friendly materials whenever possible. We're proud to support local artisans and emerging designers who share our values.
                </p>

                <Link href="/products">
                  <Button className="px-8 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300">
                    Explore Collection
                  </Button>
                </Link>
              </div>

              {/* Animated Slideshow */}
              <div className="relative h-96 md:h-[500px] rounded-sm overflow-hidden shadow-2xl group">
                {/* Slideshow Images */}
                {slideshowImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Fashion slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* Navigation Buttons */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ←
                </button>
                <button
                  onClick={handleNextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  →
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                  {slideshowImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide ? "bg-white w-8" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section with Images */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at Hybee
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-background rounded-sm border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  {/* Value Image */}
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Value Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collections Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Fashion Insights
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our latest articles about style, craftsmanship, and timeless fashion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="group cursor-pointer overflow-hidden rounded-sm border border-border/50 hover:shadow-xl transition-all duration-300"
                >
                  {/* Article Image */}
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Article Content */}
                  <div className="p-6 bg-background space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
                    <Button
                      variant="outline"
                      className="w-full text-sm mt-4"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                What Our Customers Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Hybee has transformed how I think about fashion. Quality and elegance in every piece.",
                  author: "Sarah M.",
                  role: "Fashion Enthusiast",
                },
                {
                  quote: "I love supporting a brand that truly cares about sustainability and craftsmanship.",
                  author: "James K.",
                  role: "Conscious Consumer",
                },
                {
                  quote: "The Style Mirror feature is incredible! It's like having a personal stylist.",
                  author: "Emma L.",
                  role: "Hybee Customer",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-background p-8 rounded-sm border border-border/50 space-y-4"
                >
                  <p className="text-lg text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t border-border/50">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join the Hybee Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover premium fashion, connect with style enthusiasts, and celebrate elegance with us
            </p>
            <Link href="/products">
              <Button className="px-8 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300">
                Start Shopping
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
