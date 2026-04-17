import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/const";
import { useEffect } from "react";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SignIn() {
  const { isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  // Redirect to home if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      setLocation("/");
    }
  }, [isAuthenticated, setLocation]);

  const handleSignIn = () => {
    window.location.href = getLoginUrl();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 flex items-center justify-center py-16 md:py-24">
        <div className="container max-w-md">
          <div className="bg-background border border-border/50 rounded-sm p-8 md:p-12 shadow-sm">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-foreground rounded-sm flex items-center justify-center mx-auto mb-6">
                <span className="text-background font-bold text-2xl">H</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Welcome to Hybee
              </h1>
              <p className="text-muted-foreground">
                Sign in to your account to continue shopping
              </p>
            </div>

            {/* Sign In Form */}
            <div className="space-y-6">
              {/* OAuth Sign In */}
              <div className="space-y-4">
                <Button
                  onClick={handleSignIn}
                  className="w-full px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300"
                >
                  Sign In with Hybee Account
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border/30" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-background text-muted-foreground">
                      or
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handleSignIn}
                  variant="outline"
                  className="w-full px-6 py-3 border border-border/50 font-medium rounded-sm hover:bg-muted transition-all duration-300"
                >
                  Create New Account
                </Button>
              </div>

              {/* Benefits */}
              <div className="bg-muted/30 p-6 rounded-sm space-y-4">
                <h3 className="font-semibold text-foreground">
                  Benefits of signing in:
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>Access your order history and track shipments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>Save your favorite items and wishlists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>Faster checkout with saved addresses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>Exclusive offers and early access to sales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>Personalized style recommendations</span>
                  </li>
                </ul>
              </div>

              {/* Security Info */}
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-sm">
                <p className="text-xs text-blue-900">
                  🔒 <strong>Your security matters:</strong> We use industry-standard encryption to protect your personal information. Your password is never stored in plain text.
                </p>
              </div>
            </div>

            {/* Footer Links */}
            <div className="mt-8 pt-6 border-t border-border/30">
              <div className="text-center text-sm text-muted-foreground space-y-2">
                <p>
                  Need help?{" "}
                  <a
                    href="/contact"
                    className="text-primary hover:underline font-medium"
                  >
                    Contact us
                  </a>
                </p>
                <p className="text-xs">
                  By signing in, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Continue as Guest */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Want to browse without signing in?
            </p>
            <a
              href="/products"
              className="text-primary hover:underline font-medium text-sm"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
