import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CreditCard, BookOpen, Timer, BarChart3, FileText, TrendingUp, Users, DollarSign } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-background py-20 sm:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 px-4 py-2 text-sm" data-testid="badge-educational">
              Educational Platform
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              How does{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                fast fashion
              </span>{" "}
              impact workers, the environment, and society?
            </h1>
            <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
              Explore the hidden costs of ultra-fast fashion through interactive data visualizations,
              engaging learning tools, and comprehensive policy analysis.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/statistics">
                <Button size="lg" className="gap-2" data-testid="button-view-statistics">
                  <BarChart3 className="h-5 w-5" />
                  View Statistics
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/flashcards">
                <Button size="lg" variant="outline" className="gap-2" data-testid="button-start-learning">
                  <CreditCard className="h-5 w-5" />
                  Start Learning
                </Button>
              </Link>
            </div>

            {/* Impact Metrics Ticker */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border bg-card/50 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-destructive">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-mono text-2xl font-bold">10%</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Global carbon emissions</p>
              </div>
              <div className="rounded-lg border bg-card/50 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-destructive">
                  <Users className="h-5 w-5" />
                  <span className="font-mono text-2xl font-bold">1:8,073</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Employee-to-customer ratio</p>
              </div>
              <div className="rounded-lg border bg-card/50 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-destructive">
                  <DollarSign className="h-5 w-5" />
                  <span className="font-mono text-2xl font-bold">85%</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Textiles end in landfills</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Interactive Learning Utilities</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Three engaging ways to deepen your understanding of fast fashion's impact
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/flashcards">
              <Card className="group h-full transition-all hover:shadow-lg hover-elevate" data-testid="card-flashcards">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <CardTitle>Flashcards</CardTitle>
                  <CardDescription>
                    Learn key facts about worker conditions, environmental impacts, and industry statistics through interactive flip cards
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    Start studying
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">12 cards across 4 categories</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/quiz">
              <Card className="group h-full transition-all hover:shadow-lg hover-elevate" data-testid="card-quiz">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle>Interactive Quiz</CardTitle>
                  <CardDescription>
                    Test your knowledge with multiple-choice questions covering statistics, worker rights, environmental impact, and policy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm font-medium text-accent">
                    Take the quiz
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">10 questions with instant feedback</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/timeline">
              <Card className="group h-full transition-all hover:shadow-lg hover-elevate" data-testid="card-timeline">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                    <Timer className="h-6 w-6" />
                  </div>
                  <CardTitle>Timeline Explorer</CardTitle>
                  <CardDescription>
                    Navigate through the evolution of fast fashion from the 1990s to today, seeing how the industry transformed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm font-medium text-destructive">
                    Explore timeline
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">9 key events from 1990-2024</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Data & Policy Preview Section */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="hover-elevate" data-testid="card-statistics-preview">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <CardTitle>Data-Driven Insights</CardTitle>
                </div>
                <CardDescription>
                  Explore comprehensive statistics on Shein's growth, worker conditions, and environmental impact
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border bg-background p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Annual Users Growth</span>
                    <Badge variant="destructive">+103%</Badge>
                  </div>
                  <p className="font-mono text-2xl font-bold">88.8M</p>
                  <p className="text-sm text-muted-foreground">users in 2023</p>
                </div>
                <Link href="/statistics">
                  <Button variant="outline" className="w-full gap-2">
                    View Full Dashboard
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-policy-preview">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-accent" />
                  <CardTitle>Policy Solution</CardTitle>
                </div>
                <CardDescription>
                  Learn about the Fashion Sustainability and Social Accountability Act
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed">
                  A comprehensive legislative framework designed to hold fashion companies accountable
                  for their environmental and social impacts throughout their supply chains.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-accent"></div>
                    <span>Mandate living wages for workers</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-accent"></div>
                    <span>Binding emission reduction targets</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-accent"></div>
                    <span>Supply chain transparency requirements</span>
                  </div>
                </div>
                <Link href="/policy">
                  <Button variant="outline" className="w-full gap-2">
                    Learn About the Policy
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl sm:text-3xl">Ready to Make a Difference?</CardTitle>
              <CardDescription className="text-base">
                Understanding the problem is the first step toward creating sustainable change
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-center gap-4">
              <Link href="/flashcards">
                <Button size="lg" data-testid="button-start-flashcards">
                  Start with Flashcards
                </Button>
              </Link>
              <Link href="/quiz">
                <Button size="lg" variant="outline" data-testid="button-take-quiz">
                  Take the Quiz
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
