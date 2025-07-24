import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const JULIAN_KNOWLEDGE_BASE = `
ABOUT JULIÁN MARTÍNEZ:

## Basic Information
- Name: Julián Martínez
- Role: Mechanical Engineer & Innovation Developer
- Location: Toa Alta, Puerto Rico
- Contact: 787-397-4295, julian1798@yahoo.com
- Education: Bachelor's Degree in Mechanical Engineering (Expected December 2025)
  - Universidad Interamericana de Bayamón, Puerto Rico
  - GPA: 3.2
- Previous Education: 2 years Aerospace Engineering at Pennsylvania State University, University Park (PSU)
- Graduation: December 2025

## Academic Achievements & Background
- Hardworking Mechanical Engineering student graduating December 2025 from Inter American University of Puerto Rico, Bayamón Campus
- Highly driven, self-taught in CAD design, FEA simulation, and technical automation
- Known for pushing beyond expectations and consistently delivering more than required
- Builder of tools, apps, and systems that solve real problems—especially passionate about design, innovation, and learning by doing
- Selected as Research Intern for University of Maryland ESTEEM-Ser Quest Research Program
- Won 1st place in the program's Innovation Competition
- Presented research findings at a national STEM symposium
- Full scholarship recipient at Inter Bayamón due to academic excellence

## Technical Skills
### Design & Simulation
- SolidWorks (advanced 3D modeling and simulation)
- ANSYS (FEA simulation and thermal analysis)
- Design for Manufacturing (DFM) Principles
- Geometric Dimensioning and Tolerancing (GD&T)
- Technical automation and CAD design

### Programming & Development
- MATLAB (engineering calculations and data analysis)
- Python (automation, data analysis, and scripting)
- Prompt Engineering with Claude and GPT
- React Native (mobile app development)
- Firebase (backend database services)
- GitHub (version control and collaboration)

### Manufacturing & Prototyping
- 3D Printing (rapid prototyping and manufacturing)
- DFM Principles (Design for Manufacturing)
- GD&T (Geometric Dimensioning and Tolerancing)
- Material testing and selection
- Prototyping and product development

### Technology Tools & Platforms
- Firebase (database and backend development)
- React Native (cross-platform mobile development)
- GitHub (version control and project management)
- Technical documentation and reporting
- CAD/CAM software integration

### Languages
- English: Fluent
- Spanish: Native

### Soft Skills
- Relentless Work Ethic
- Creative Problem Solving
- Fast Learner
- Self-taught technical abilities
- Team collaboration and leadership
- Cross-cultural communication
- Innovation and continuous improvement mindset

## Professional Experience & Projects

### University of Maryland - ESTEEM/SER-QUEST PROGRAM (Research Intern)
- Selected for highly competitive research internship program
- Developed an oil-water separation system using 3D-printed prototypes and SolidWorks design
- Conducted extensive material testing and won 1st place in the program's Innovation Competition
- Presented research findings at a national STEM symposium
- Research breakthrough now implemented in real-world ocean oil spill cleanup operations

### SPOTS APP - FOUNDER & DEVELOPER
- Designed and launched a social photo memory app using React Native and Firebase
- Built comprehensive user flows, location tagging, and dynamic photo challenge system
- Integrated user-created albums and map-based memories to promote social engagement
- Demonstrates full-stack development capabilities and entrepreneurial initiative

## Key Projects & Initiatives
1. **Oil-Water Separation System**: Revolutionary environmental technology with real-world maritime applications
2. **SPOTS Social App**: Full-stack mobile application with location services and social features
3. **3D Printing & Prototyping**: Advanced manufacturing projects using DFM principles and GD&T
4. **Technical Automation Systems**: Self-taught CAD design and FEA simulation projects

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

## Interests & Passion Areas
- Aerospace Systems
- 3D Printing & Manufacturing
- AI Engineering Agents
- Crypto & Blockchain Technology
- Technical Innovation
- Artificial Intelligence

## Academic Reference
- Prof. Omar Meza, Ph.D.
- Professor - Mechanical Engineering Department
- Phone: +1 (787) 550-6687
- Email: omeza@bayamon.inter.edu

## Personal Qualities & Work Style
- Hardworking and highly driven individual
- Self-taught in advanced technical areas (CAD design, FEA simulation, technical automation)
- Known for pushing beyond expectations and consistently delivering more than required
- Builder mindset - creates tools, apps, and systems that solve real problems
- Passionate about design, innovation, and learning by doing
- Demonstrates resilience through successful transition from PSU to Inter Bayamón during pandemic
- Maintains academic excellence while pursuing entrepreneurial projects
- Results-oriented with authentic willingness to continuously learn and adapt
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