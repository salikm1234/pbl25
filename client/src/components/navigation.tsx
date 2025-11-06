import { Link, useLocation } from "wouter";
import { Home, BarChart3, BookOpen, CreditCard, Timer, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/statistics", label: "Statistics", icon: BarChart3 },
    { path: "/policy", label: "Policy", icon: FileText },
    { path: "/flashcards", label: "Flashcards", icon: CreditCard },
    { path: "/quiz", label: "Quiz", icon: BookOpen },
    { path: "/timeline", label: "Timeline", icon: Timer },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" data-testid="link-home">
              <div className="flex items-center gap-2 hover-elevate rounded-lg px-3 py-2 -ml-3 cursor-pointer">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <span className="text-lg font-bold">FF</span>
                </div>
                <span className="hidden font-semibold sm:inline-block">Fast Fashion Impact</span>
              </div>
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location === item.path;
                return (
                  <Link key={item.path} href={item.path}>
                    <div className="inline-block">
                      <Button
                        variant={isActive ? "secondary" : "ghost"}
                        size="sm"
                        className="gap-2"
                        data-testid={`link-${item.label.toLowerCase()}`}
                        asChild
                      >
                        <span className="flex items-center gap-2 cursor-pointer">
                          <Icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </span>
                      </Button>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <ThemeToggle />
        </div>

        {/* Mobile navigation */}
        <div className="flex items-center gap-1 overflow-x-auto pb-3 md:hidden">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.path;
            return (
              <Link key={item.path} href={item.path}>
                <div className="inline-block">
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    size="sm"
                    className="gap-2 flex-shrink-0"
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                    asChild
                  >
                    <span className="flex items-center gap-2 cursor-pointer">
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </span>
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
