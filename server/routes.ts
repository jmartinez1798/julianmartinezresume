import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { askJulianAI, QUICK_QUESTIONS } from "./ai-assistant";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: validationError.details 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  // AI Assistant endpoints
  app.post("/api/ai-assistant", async (req, res) => {
    try {
      const { question } = req.body;
      
      if (!question || typeof question !== 'string') {
        return res.status(400).json({
          success: false,
          message: "Question is required"
        });
      }

      const answer = await askJulianAI(question);
      res.json({
        success: true,
        answer,
        question
      });
    } catch (error) {
      console.error("AI Assistant Error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to get AI response"
      });
    }
  });

  // Get quick questions
  app.get("/api/ai-assistant/quick-questions", (req, res) => {
    res.json({
      success: true,
      questions: QUICK_QUESTIONS
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
