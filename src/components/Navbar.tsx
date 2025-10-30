import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 1. SCROLL LISTENER: Handles background change on scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // 2. HASH SCROLL HANDLER: Executes scrolling on page load/navigation if a hash exists
    const handleHashScroll = () => {
      if (location.hash) {
        // Get the ID (remove the leading '#')
        const targetId = location.hash.substring(1); 
        const element = document.getElementById(targetId);
        
        if (element) {
          // Use a slight delay to ensure the DOM is fully ready after navigation
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 0); 
        }
      } else if (location.pathname === '/' && window.scrollY !== 0) {
        // Optional: If navigating back to home without a hash, scroll to top
        window.scrollTo(0, 0);
      }
    };
    
    // Execute hash scroll logic immediately on mount and on location change
    handleHashScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]); // Re-run effect when location changes (i.e., when navigating)

  // Handler for navigation
  const handleNavClick = (target: string) => {
    setIsMobileMenuOpen(false); 

    // If target is a full route path (like /cv), navigate directly
    if (target.startsWith('/')) {
      navigate(target);
      return;
    }

    // Handle internal section scrolling (Home, Projects, Biography, Contact)
    const targetHash = `#${target}`;
    
    if (location.pathname === '/') {
      // If already on homepage, update hash and let the useEffect handle the scroll
      // NOTE: Using replace is better for anchors to avoid cluttering history
      navigate(targetHash, { replace: true });
    } else {
      // If on a detail page, navigate to the homepage root with the hash.
      // The updated useEffect hook will handle the scrolling upon landing.
      navigate(`/${targetHash}`);
    }
  };

  const navItems = [
    { label: "Home", target: "home" },
    { label: "Projects", target: "projects" },
    { label: "CV", target: "/cv" }, 
    { label: "Publications", target: "/publications" },
    { label: "Biography", target: "about" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Zeineb Kaabi<span className="text-primary">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => handleNavClick(item.target)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;