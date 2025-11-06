import type { Flashcard, QuizQuestion, TimelineEvent, UserProgress } from "@shared/schema";

// Helper function for API requests
async function fetchAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }
  return response.json();
}

// Flashcards
export async function getFlashcards(): Promise<Flashcard[]> {
  return fetchAPI<Flashcard[]>("/api/flashcards");
}

export async function getFlashcard(id: string): Promise<Flashcard> {
  return fetchAPI<Flashcard>(`/api/flashcards/${id}`);
}

// Quiz Questions
export async function getQuizQuestions(): Promise<QuizQuestion[]> {
  return fetchAPI<QuizQuestion[]>("/api/quiz");
}

export async function getQuizQuestion(id: string): Promise<QuizQuestion> {
  return fetchAPI<QuizQuestion>(`/api/quiz/${id}`);
}

// Timeline Events
export async function getTimelineEvents(): Promise<TimelineEvent[]> {
  return fetchAPI<TimelineEvent[]>("/api/timeline");
}

export async function getTimelineEvent(id: string): Promise<TimelineEvent> {
  return fetchAPI<TimelineEvent>(`/api/timeline/${id}`);
}

// User Progress
export async function getUserProgress(): Promise<UserProgress> {
  return fetchAPI<UserProgress>("/api/progress");
}

export async function updateUserProgress(progress: Partial<UserProgress>): Promise<UserProgress> {
  const response = await fetch("/api/progress", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(progress),
  });
  if (!response.ok) {
    throw new Error(`Failed to update progress: ${response.statusText}`);
  }
  return response.json();
}

export async function resetUserProgress(): Promise<UserProgress> {
  const response = await fetch("/api/progress/reset", {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error(`Failed to reset progress: ${response.statusText}`);
  }
  return response.json();
}
