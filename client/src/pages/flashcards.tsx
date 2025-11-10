import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { flashcardsData } from "@/data/flashcards";
import { ChevronLeft, ChevronRight, RotateCcw, CreditCard } from "lucide-react";

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [viewedCards, setViewedCards] = useState<Set<number>>(new Set([0]));

  const flashcards = flashcardsData;
  const currentCard = flashcards[currentIndex];
  const progressPercentage = (viewedCards.size / flashcards.length) * 100;

  const categoryColors: Record<string, string> = {
    "Statistics": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    "Worker Conditions": "bg-destructive/10 text-destructive border-destructive/20",
    "Environment": "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
    "Policy": "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
  };

  // Load viewed cards from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('flashcards-progress');
    if (saved) {
      try {
        const indices = JSON.parse(saved);
        setViewedCards(new Set(indices));
      } catch (e) {
        console.error('Failed to load progress:', e);
      }
    }
  }, []);

  // Save progress to localStorage when viewed cards change
  useEffect(() => {
    if (viewedCards.size > 0) {
      localStorage.setItem('flashcards-progress', JSON.stringify(Array.from(viewedCards)));
    }
  }, [viewedCards]);

  const handleNext = () => {
    if (flashcards && currentIndex < flashcards.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setViewedCards(new Set([...viewedCards, newIndex]));
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setViewedCards(new Set([0]));
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4" data-testid="badge-flashcards">
            Learning Utility #1
          </Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Interactive Flashcards
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Learn key facts about fast fashion through interactive flip cards. Click any card to reveal the answer.
          </p>
        </div>

        {/* Progress Section */}
        <Card className="mb-8" data-testid="card-progress">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Your Progress</CardTitle>
              <Badge variant="secondary" className="font-mono">
                {viewedCards.size} / {flashcards.length}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={progressPercentage} className="h-2" data-testid="progress-flashcards" />
            <p className="mt-2 text-sm text-muted-foreground">
              {viewedCards.size === flashcards.length
                ? "🎉 You've viewed all flashcards!"
                : `${flashcards.length - viewedCards.size} cards remaining`}
            </p>
          </CardContent>
        </Card>

        {/* Main Flashcard */}
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-2xl">
            <div
              className="group relative h-96 cursor-pointer"
              onClick={handleFlip}
              data-testid="flashcard-container"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative h-full w-full transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front of card */}
                <Card
                  className="absolute h-full w-full border-2 hover:shadow-xl"
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                  data-testid="flashcard-front"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge className={categoryColors[currentCard.category]} variant="outline">
                        {currentCard.category}
                      </Badge>
                      <Badge variant="secondary" className="font-mono">
                        {currentIndex + 1} / {flashcards.length}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex h-full flex-col items-center justify-center px-8 pb-16">
                    <CreditCard className="mb-6 h-12 w-12 text-muted-foreground" />
                    <p className="text-center text-xl font-semibold leading-relaxed sm:text-2xl">
                      {currentCard.question}
                    </p>
                    <p className="mt-8 text-sm text-muted-foreground">Click to reveal answer</p>
                  </CardContent>
                </Card>

                {/* Back of card */}
                <Card
                  className="absolute h-full w-full border-2 bg-primary/5 hover:shadow-xl"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                  data-testid="flashcard-back"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge className={categoryColors[currentCard.category]} variant="outline">
                        {currentCard.category}
                      </Badge>
                      <Badge variant="secondary" className="font-mono">
                        {currentIndex + 1} / {flashcards.length}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex h-full flex-col items-center justify-center px-8 pb-16">
                    <p className="text-center text-lg leading-relaxed sm:text-xl">
                      {currentCard.answer}
                    </p>
                    <p className="mt-8 text-sm text-muted-foreground">Click to flip back</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="mt-6 flex items-center justify-between gap-4">
              <Button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                variant="outline"
                className="gap-2"
                data-testid="button-previous"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              <div className="flex gap-2">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="icon"
                  data-testid="button-reset"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>

              <Button
                onClick={handleNext}
                disabled={currentIndex === flashcards.length - 1}
                className="gap-2"
                data-testid="button-next"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Category Filter/Legend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Categories</CardTitle>
            <CardDescription>
              Flashcards are organized into four key topic areas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {Object.keys(categoryColors).map((category) => {
                const count = flashcards.filter((card) => card.category === category).length;
                return (
                  <div
                    key={category}
                    className="flex items-center justify-between rounded-lg border p-3"
                    data-testid={`category-${category.toLowerCase().replace(" ", "-")}`}
                  >
                    <Badge className={categoryColors[category]} variant="outline">
                      {category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{count} cards</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Keyboard Shortcuts Hint */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            💡 Tip: Click the card to flip, or use the Previous/Next buttons to navigate
          </p>
        </div>
      </div>
    </div>
  );
}
