import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { quizQuestionsData } from "@/data/quiz";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";

type QuizState = "answering" | "completed";
type AnswerState = "unanswered" | "correct" | "incorrect";

interface QuizProgress {
  quizScore: number;
  quizAttempts: number;
}

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("unanswered");
  const [score, setScore] = useState(0);
  const [quizState, setQuizState] = useState<QuizState>("answering");
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [progress, setProgress] = useState<QuizProgress>({ quizScore: 0, quizAttempts: 0 });

  const quizQuestions = quizQuestionsData;
  const currentQ = quizQuestions[currentQuestion];
  const progressValue = ((currentQuestion + 1) / quizQuestions.length) * 100;

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('quiz-progress');
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load quiz progress:', e);
      }
    }
  }, []);

  const handleSelectAnswer = (optionIndex: number) => {
    if (answerState !== "unanswered") return;

    setSelectedAnswer(optionIndex);
    const isCorrect = optionIndex === currentQ.correctAnswer;
    setAnswerState(isCorrect ? "correct" : "incorrect");

    if (isCorrect) {
      setScore(score + 1);
    }

    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswerState("unanswered");
    } else {
      const newProgress = {
        quizScore: score,
        quizAttempts: progress.quizAttempts + 1,
      };
      setProgress(newProgress);
      localStorage.setItem('quiz-progress', JSON.stringify(newProgress));
      setQuizState("completed");
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswerState("unanswered");
    setScore(0);
    setQuizState("answering");
    setAnsweredQuestions(new Array(quizQuestions.length).fill(false));
  };

  const categoryColors: Record<string, string> = {
    "Statistics": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    "Worker Conditions": "bg-destructive/10 text-destructive border-destructive/20",
    "Environment": "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
    "Policy": "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
  };

  if (quizState === "completed") {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    let performance = "Keep learning!";
    let performanceColor = "text-muted-foreground";

    if (percentage >= 90) {
      performance = "Outstanding! 🌟";
      performanceColor = "text-primary";
    } else if (percentage >= 70) {
      performance = "Great job! ✨";
      performanceColor = "text-accent";
    } else if (percentage >= 50) {
      performance = "Good effort! 💪";
      performanceColor = "text-blue-600";
    }

    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <Card className="text-center" data-testid="card-quiz-results">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Trophy className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-3xl">Quiz Completed!</CardTitle>
                <CardDescription className="text-base">
                  Here's how you did on the Fast Fashion Impact quiz
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="mb-2 text-6xl font-bold" data-testid="text-score">
                    {score}/{quizQuestions.length}
                  </div>
                  <div className={`text-xl font-semibold ${performanceColor}`}>
                    {percentage}% • {performance}
                  </div>
                </div>

                <div className="rounded-lg border bg-muted/50 p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <div className="text-sm text-muted-foreground">Correct Answers</div>
                      <div className="text-2xl font-bold text-green-600">{score}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Incorrect Answers</div>
                      <div className="text-2xl font-bold text-destructive">
                        {quizQuestions.length - score}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handleReset}
                    size="lg"
                    className="w-full gap-2"
                    data-testid="button-retake-quiz"
                  >
                    <RotateCcw className="h-5 w-5" />
                    Retake Quiz
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Want to learn more? Try the flashcards or explore the timeline
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4" data-testid="badge-quiz">
            Learning Utility #2
          </Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Fast Fashion Knowledge Quiz
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Test your understanding of fast fashion's impact with instant feedback on each answer.
          </p>
        </div>

        {/* Progress */}
        <Card className="mb-8" data-testid="card-quiz-progress">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Progress</CardTitle>
              <Badge variant="secondary" className="font-mono">
                Question {currentQuestion + 1} / {quizQuestions.length}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <Progress value={progressValue} className="h-2" data-testid="progress-quiz" />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Current Score: {score}</span>
              <span>{quizQuestions.length - currentQuestion - 1} questions remaining</span>
            </div>
            {progress.quizAttempts > 0 && (
              <div className="rounded-lg bg-muted/50 p-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Previous Attempts:</span>
                  <Badge variant="outline">{progress.quizAttempts}</Badge>
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-muted-foreground">Last Score:</span>
                  <span className="font-semibold">{progress.quizScore} / {quizQuestions.length}</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Question Card */}
        <div className="mx-auto max-w-3xl">
          <Card className="mb-6" data-testid="card-question">
            <CardHeader>
              <div className="mb-2 flex items-center gap-2">
                <Badge className={categoryColors[currentQ.category]} variant="outline">
                  {currentQ.category}
                </Badge>
              </div>
              <CardTitle className="text-xl sm:text-2xl leading-relaxed">
                {currentQ.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {currentQ.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQ.correctAnswer;
                const showResult = answerState !== "unanswered";

                let buttonVariant: "outline" | "default" | "secondary" = "outline";
                let buttonClasses = "justify-start text-left h-auto py-4 px-4";

                if (showResult) {
                  if (isCorrect) {
                    buttonClasses += " border-green-500 bg-green-500/10 text-green-700 dark:text-green-400";
                  } else if (isSelected) {
                    buttonClasses += " border-destructive bg-destructive/10 text-destructive";
                  }
                }

                return (
                  <Button
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    disabled={answerState !== "unanswered"}
                    variant={buttonVariant}
                    className={`w-full ${buttonClasses}`}
                    data-testid={`option-${index}`}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 bg-background font-semibold">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="flex-1">{option}</span>
                      {showResult && isCorrect && (
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <XCircle className="h-5 w-5 flex-shrink-0 text-destructive" />
                      )}
                    </div>
                  </Button>
                );
              })}
            </CardContent>
          </Card>

          {/* Explanation (shown after answering) */}
          {answerState !== "unanswered" && (
            <Card
              className={`mb-6 border-l-4 ${
                answerState === "correct"
                  ? "border-l-green-500 bg-green-500/5"
                  : "border-l-destructive bg-destructive/5"
              }`}
              data-testid="card-explanation"
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  {answerState === "correct" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive" />
                  )}
                  <CardTitle className="text-lg">
                    {answerState === "correct" ? "Correct!" : "Incorrect"}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{currentQ.explanation}</p>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex justify-end">
            <Button
              onClick={handleNext}
              disabled={answerState === "unanswered"}
              size="lg"
              data-testid="button-next-question"
            >
              {currentQuestion === quizQuestions.length - 1 ? "View Results" : "Next Question"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
