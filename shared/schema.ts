import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Flashcard schema
export const flashcards = pgTable("flashcards", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  category: text("category").notNull(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  order: integer("order").notNull(),
});

export const insertFlashcardSchema = createInsertSchema(flashcards).omit({
  id: true,
});

export type InsertFlashcard = z.infer<typeof insertFlashcardSchema>;
export type Flashcard = typeof flashcards.$inferSelect;

// Quiz question schema
export const quizQuestions = pgTable("quiz_questions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  question: text("question").notNull(),
  options: text("options").array().notNull(),
  correctAnswer: integer("correct_answer").notNull(),
  explanation: text("explanation").notNull(),
  category: text("category").notNull(),
});

export const insertQuizQuestionSchema = createInsertSchema(quizQuestions).omit({
  id: true,
});

export type InsertQuizQuestion = z.infer<typeof insertQuizQuestionSchema>;
export type QuizQuestion = typeof quizQuestions.$inferSelect;

// Timeline event schema
export const timelineEvents = pgTable("timeline_events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  year: integer("year").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  impact: text("impact").notNull(),
  order: integer("order").notNull(),
});

export const insertTimelineEventSchema = createInsertSchema(timelineEvents).omit({
  id: true,
});

export type InsertTimelineEvent = z.infer<typeof insertTimelineEventSchema>;
export type TimelineEvent = typeof timelineEvents.$inferSelect;

// User progress schema
export const userProgress = pgTable("user_progress", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  flashcardsCompleted: integer("flashcards_completed").notNull().default(0),
  quizScore: integer("quiz_score").notNull().default(0),
  quizAttempts: integer("quiz_attempts").notNull().default(0),
  completedFlashcardIds: text("completed_flashcard_ids").array().notNull().default(sql`ARRAY[]::text[]`),
});

export const insertUserProgressSchema = createInsertSchema(userProgress).omit({
  id: true,
});

export type InsertUserProgress = z.infer<typeof insertUserProgressSchema>;
export type UserProgress = typeof userProgress.$inferSelect;

// Statistics data type (not stored in DB, just used for type safety)
export interface SheinStatistics {
  annualUsers: Array<{ year: number; users: number }>;
  employeeRatios: Array<{ year: number; ratio: number; employeesPerCustomer: string }>;
  salaryData: Array<{ year: number; salary: number }>;
  employeeCount: Array<{ year: number; employees: number }>;
}

export interface PolicyData {
  name: string;
  description: string;
  goals: string[];
  implementation: string;
  impact: string;
}
