import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import Home from "@/pages/home";
import Statistics from "@/pages/statistics";
import Policy from "@/pages/policy";
import Flashcards from "@/pages/flashcards";
import Quiz from "@/pages/quiz";
import Timeline from "@/pages/timeline";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/policy" component={Policy} />
      <Route path="/flashcards" component={Flashcards} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/timeline" component={Timeline} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Navigation />
          <Router />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
