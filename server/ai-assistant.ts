import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const JULIAN_KNOWLEDGE_BASE = `
ABOUT JULIÁN MARTÍNEZ:

## Basic Information
- Name: Julián Martínez
- Role: Mechanical Engineer & Innovation Developer
- Location: Puerto Rico
- Education: Mechanical Engineering at Universidad Interamericana de Bayamón (Inter Bayamón)
- Previous: 2 years Aerospace Engineering at Pennsylvania State University, University Park (PSU)

## Academic Achievements
- Selected as 1 of only 3 students from Puerto Rico for University of Maryland ESTEEM-Ser Quest Research Program
- Developed breakthrough superhydrophobic and hydrophilic fiber technology for oil-water separation
- Research is currently being used in ships for ocean oil spill cleanup operations
- Won 1st place in innovation competition at University of Maryland
- Full scholarship recipient at Inter Bayamón due to academic excellence
- Multiple international awards in VEX Robotics competitions (programming and robotics design)

## Technical Skills
### Design & Simulation
- SolidWorks (3D modeling and simulation)
- Design for Manufacturing (DFM)
- Geometric Dimensioning and Tolerancing (GD&T)
- Engineering design principles

### Programming & Development
- Python (automation and data analysis)
- MATLAB (engineering calculations and analysis)
- React Native (mobile app development)
- GitHub (version control and collaboration)
- Prompt Engineering (AI optimization)

### Manufacturing & Prototyping
- 3D Printing (rapid prototyping)
- Manufacturing processes
- Materials research and selection
- Quality control and testing

### Technology Tools
- Firebase (database and backend services)
- Microsoft Office Suite
- Project management tools
- Technical documentation

### Soft Skills
- Problem-solving and analytical thinking
- Team collaboration and leadership
- Technical communication
- Adaptability and continuous learning
- Cross-cultural communication (bilingual English/Spanish)

## Professional Experience & Projects
1. **University of Maryland Research Program (ESTEEM-Ser Quest)**: Led breakthrough research in fiber technology for environmental applications
2. **Process Automation System**: Developed automated solutions for manufacturing efficiency
3. **3D Printed Robotic Arm**: Designed and manufactured functional robotic system
4. **Smart Home IoT Dashboard**: Created connected device monitoring system

## Career Goals
- Seeking opportunities in engineering, technology, and banking sectors
- Interested in roles at companies like Oriental Bank, Raytheon, Honeywell, Lockheed Martin
- Focus on automation, innovation, and real-world problem solving
- Eager to learn, add value, and grow professionally

## Why He's Great for Banking (Oriental Bank)
- Strong analytical and problem-solving skills from engineering background
- Experience with process automation that can improve banking operations
- Bilingual capabilities for Puerto Rican market
- Academic excellence and competitive selection demonstrate reliability
- Research experience shows ability to work under pressure and deliver results

## Why He's Great for Engineering/Tech Companies
- Proven track record in competitive research environments
- Real-world impact through implemented technology solutions
- Strong technical foundation across multiple disciplines
- Experience collaborating with high-performing teams
- Continuous learning mindset and adaptability

## Personal Qualities
- Results-oriented with authentic willingness to learn
- Self-taught in many technical areas
- Demonstrates resilience (pandemic transition, maintaining excellence)
- International experience and perspective
- Strong work ethic and commitment to excellence
`;

export async function askJulianAI(question: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are an AI assistant representing Julián Martínez, a Mechanical Engineer from Puerto Rico. Your job is to answer questions that recruiters and potential employers might have about Julián. 

Use the following knowledge base to provide accurate, professional, and concise answers. Always respond in a helpful, professional tone as if you're Julián's personal assistant.

If asked about something not in the knowledge base, politely explain that you can provide information about Julián's background, skills, and experience, and suggest they contact him directly for more specific details.

Keep answers conversational but professional, typically 2-4 sentences unless more detail is specifically requested.

${JULIAN_KNOWLEDGE_BASE}`
        },
        {
          role: "user",
          content: question
        }
      ],
      max_tokens: 300,
      temperature: 0.7
    });

    return response.choices[0].message.content || "I'm sorry, I couldn't process that question. Please try asking about Julián's background, skills, or experience.";
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return "I'm currently experiencing technical difficulties. Please try again in a moment or contact Julián directly through the contact form.";
  }
}

// Predefined quick questions for easy access
export const QUICK_QUESTIONS = [
  "What's Julián's background?",
  "What are his main technical skills?",
  "Tell me about his University of Maryland research",
  "Why would he be good for a banking role?",
  "What engineering experience does he have?",
  "What programming languages does he know?",
  "Tell me about his academic achievements",
  "What makes him stand out as a candidate?",
  "Does he have leadership experience?",
  "What's his experience with automation?"
];