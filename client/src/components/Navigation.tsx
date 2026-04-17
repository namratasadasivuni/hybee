import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/const";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Navigation() {
  const { user, logout, isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border/30">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center">
              <span className="text-background font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:inline">Hybee</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/products">
            <span className="text-sm hover:text-muted-foreground transition-colors cursor-pointer">
              Shop
            </span>
          </Link>
          <Link href="/style-mirror">
            <span className="text-sm hover:text-muted-foreground transition-colors cursor-pointer">
              Style Mirror
            </span>
          </Link>
          <Link href="/about">
            <span className="text-sm hover:text-muted-foreground transition-colors cursor-pointer">
              About
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-sm hover:text-muted-foreground transition-colors cursor-pointer">
              Contact
            </span>
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button className="p-2 hover:bg-muted rounded-sm transition-colors hidden sm:block">
            <Search size={20} />
          </button>

          {/* Cart */}
          <Link href="/cart">
            <button className="p-2 hover:bg-muted rounded-sm transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-foreground text-background text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </Link>

          {/* Auth */}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Link href="/profile">
                <button className="p-2 hover:bg-muted rounded-sm transition-colors hidden sm:block">
                  <User size={20} />
                </button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-xs hidden sm:inline"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              size="sm"
              className="px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300 ease-in-out text-xs hidden sm:inline"
              onClick={() => (window.location.href = getLoginUrl())}
            >
              Sign In
            </Button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-sm transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/30 bg-background">
          <div className="container py-4 space-y-4">
            <Link href="/products">
              <span className="block text-sm hover:text-muted-foreground transition-colors cursor-pointer">
                Shop
              </span>
            </Link>
            <Link href="/style-mirror">
              <span className="block text-sm hover:text-muted-foreground transition-colors cursor-pointer">
                Style Mirror
              </span>
            </Link>
            <Link href="/about">
              <span className="block text-sm hover:text-muted-foreground transition-colors cursor-pointer">
                About
              </span>
            </Link>
            <Link href="/contact">
              <span className="block text-sm hover:text-muted-foreground transition-colors cursor-pointer">
                Contact
              </span>
            </Link>
            {isAuthenticated ? (
              <div className="space-y-2 pt-2 border-t border-border/30">
                <Link href="/profile">
                  <span className="block text-sm hover:text-muted-foreground transition-colors cursor-pointer">
                    Profile
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="w-full text-xs"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                size="sm"
              className="px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300 ease-in-out text-xs w-full"
              onClick={() => (window.location.href = getLoginUrl())}
            >
              Sign In
            </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
