import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Flashcards routes
  app.get("/api/flashcards", async (_req, res) => {
    try {
      const flashcards = await storage.getAllFlashcards();
      res.json(flashcards);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch flashcards" });
    }
  });

  app.get("/api/flashcards/:id", async (req, res) => {
    try {
      const flashcard = await storage.getFlashcardById(req.params.id);
      if (!flashcard) {
        return res.status(404).json({ error: "Flashcard not found" });
      }
      res.json(flashcard);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch flashcard" });
    }
  });

  // Quiz questions routes
  app.get("/api/quiz", async (_req, res) => {
    try {
      const questions = await storage.getAllQuizQuestions();
      res.json(questions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch quiz questions" });
    }
  });

  app.get("/api/quiz/:id", async (req, res) => {
    try {
      const question = await storage.getQuizQuestionById(req.params.id);
      if (!question) {
        return res.status(404).json({ error: "Quiz question not found" });
      }
      res.json(question);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch quiz question" });
    }
  });

  // Timeline events routes
  app.get("/api/timeline", async (_req, res) => {
    try {
      const events = await storage.getAllTimelineEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch timeline events" });
    }
  });

  app.get("/api/timeline/:id", async (req, res) => {
    try {
      const event = await storage.getTimelineEventById(req.params.id);
      if (!event) {
        return res.status(404).json({ error: "Timeline event not found" });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch timeline event" });
    }
  });

  // User progress routes
  app.get("/api/progress", async (_req, res) => {
    try {
      const progress = await storage.getUserProgress();
      res.json(progress);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user progress" });
    }
  });

  app.patch("/api/progress", async (req, res) => {
    try {
      const progress = await storage.updateUserProgress(req.body);
      res.json(progress);
    } catch (error) {
      res.status(500).json({ error: "Failed to update user progress" });
    }
  });

  app.post("/api/progress/reset", async (_req, res) => {
    try {
      const progress = await storage.resetUserProgress();
      res.json(progress);
    } catch (error) {
      res.status(500).json({ error: "Failed to reset user progress" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
