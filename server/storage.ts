import type { 
  Flashcard, 
  QuizQuestion, 
  TimelineEvent, 
  UserProgress,
  InsertUserProgress 
} from "@shared/schema";
import { randomUUID } from "crypto";
import { flashcardsData } from "../client/src/data/flashcards";
import { quizQuestionsData } from "../client/src/data/quiz";
import { timelineEventsData } from "../client/src/data/timeline";

export interface IStorage {
  // Flashcards
  getAllFlashcards(): Promise<Flashcard[]>;
  getFlashcardById(id: string): Promise<Flashcard | undefined>;
  
  // Quiz Questions
  getAllQuizQuestions(): Promise<QuizQuestion[]>;
  getQuizQuestionById(id: string): Promise<QuizQuestion | undefined>;
  
  // Timeline Events
  getAllTimelineEvents(): Promise<TimelineEvent[]>;
  getTimelineEventById(id: string): Promise<TimelineEvent | undefined>;
  
  // User Progress
  getUserProgress(): Promise<UserProgress>;
  updateUserProgress(progress: Partial<InsertUserProgress>): Promise<UserProgress>;
  resetUserProgress(): Promise<UserProgress>;
}

export class MemStorage implements IStorage {
  private flashcards: Map<string, Flashcard>;
  private quizQuestions: Map<string, QuizQuestion>;
  private timelineEvents: Map<string, TimelineEvent>;
  private userProgress: UserProgress;

  constructor() {
    // Initialize with data
    this.flashcards = new Map(flashcardsData.map((fc) => [fc.id, fc]));
    this.quizQuestions = new Map(quizQuestionsData.map((q) => [q.id, q]));
    this.timelineEvents = new Map(timelineEventsData.map((te) => [te.id, te]));
    
    // Initialize default user progress
    this.userProgress = {
      id: randomUUID(),
      flashcardsCompleted: 0,
      quizScore: 0,
      quizAttempts: 0,
      completedFlashcardIds: [],
    };
  }

  // Flashcards
  async getAllFlashcards(): Promise<Flashcard[]> {
    return Array.from(this.flashcards.values()).sort((a, b) => a.order - b.order);
  }

  async getFlashcardById(id: string): Promise<Flashcard | undefined> {
    return this.flashcards.get(id);
  }

  // Quiz Questions
  async getAllQuizQuestions(): Promise<QuizQuestion[]> {
    return Array.from(this.quizQuestions.values());
  }

  async getQuizQuestionById(id: string): Promise<QuizQuestion | undefined> {
    return this.quizQuestions.get(id);
  }

  // Timeline Events
  async getAllTimelineEvents(): Promise<TimelineEvent[]> {
    return Array.from(this.timelineEvents.values()).sort((a, b) => a.order - b.order);
  }

  async getTimelineEventById(id: string): Promise<TimelineEvent | undefined> {
    return this.timelineEvents.get(id);
  }

  // User Progress
  async getUserProgress(): Promise<UserProgress> {
    return this.userProgress;
  }

  async updateUserProgress(progress: Partial<InsertUserProgress>): Promise<UserProgress> {
    this.userProgress = {
      ...this.userProgress,
      ...progress,
    };
    return this.userProgress;
  }

  async resetUserProgress(): Promise<UserProgress> {
    this.userProgress = {
      id: this.userProgress.id,
      flashcardsCompleted: 0,
      quizScore: 0,
      quizAttempts: 0,
      completedFlashcardIds: [],
    };
    return this.userProgress;
  }
}

export const storage = new MemStorage();
