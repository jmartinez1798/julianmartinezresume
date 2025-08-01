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
- Bachelor of Mechanical Engineering, GPA: 3.2 | Expected: Dec 2025
  - Inter American University of Puerto Rico - Bayamón
- Aerospace Engineering Studies | Completed foundational coursework, 2017-2018
  - Pennsylvania State University
- Winner of University of Maryland Innovation Symposium for breakthrough research on oil separation mesh
- Finalist at VEX World Championship, placing Top 30 globally out of 16,000+ teams
- Launched and managed Spots, a location-based social app built using Firebase and React Native
- Recognized on the Dean's List for Academic Excellence (2 Semesters)
- Hardworking Mechanical Engineering student graduating December 2025 from Inter American University of Puerto Rico, Bayamón Campus
- Highly driven, self-taught in CAD design, FEA simulation, and technical automation
- Known for pushing beyond expectations and consistently delivering more than required
- Builder of tools, apps, and systems that solve real problems—especially passionate about design, innovation, and learning by doing

## Technical Skills
### Design & Simulation
- SolidWorks (advanced 3D modeling and simulation)
- AutoCAD (2D drafting and technical drawings)
- ANSYS (FEA simulation and thermal analysis including Thermal/FEA modules)
- Design for Manufacturing (DFM) Principles
- Geometric Dimensioning and Tolerancing (GD&T)
- Technical automation and CAD design

### Programming & Development
- MATLAB (engineering calculations and data analysis)
- Python (automation, data analysis, and scripting)
- JavaScript (web development and automation)
- C++ (systems programming and robotics)
- React Native (cross-platform mobile app development)
- Firebase (backend database services and real-time data)
- PostgreSQL (database management and queries)
- REST APIs (web service integration)
- Replit (cloud development platform)
- NBN (network programming)
- Prompt Engineering with Claude and GPT

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
- Agile & Scrum methodologies
- Project Management
- Problem-Solving and analytical thinking
- Cross-Functional Collaboration
- Fluent Bilingual Communication (English/Spanish)
- Leadership and team coordination
- Hardworking and results-oriented approach

## Professional Experience & Projects

### University of Maryland - ESTEEM/SER-QUEST PROGRAM (Research Intern)
**Maryland, USA**
- Designed and tested oil-water separation mesh with superhydrophobic/oleophilic materials
- Delivered working prototypes using SolidWorks and 3D printing, awarded 1st place in national innovation competition
- Findings integrated into environmental oil spill cleanup processes used by Barcasa

### SPOTS APP - FOUNDER & LEAD DEVELOPER
**Puerto Rico | 2023 - Present**
- Built full-stack mobile app using React Native, Firebase, and geolocation-based UX
- Designed social memory system with user-tagged photos, challenge cards, and map-based interaction
- Managed deployment pipeline, Firebase data structure, performance and bug testing

### Pharmaceutical Company - Engineering Support Intern
**Puerto Rico**
- Assisted in pharmaceutical manufacturing workflows, SOP design, and efficiency testing
- Participated in equipment verification and documentation process for FDA compliance

### VEX Robotics - International Team Competitor & Mentor
**Puerto Rico / Global**
- Led robotics team to Top 30 globally out of 16,000+ teams in world championship
- Designed autonomous competitive robots and developed advanced control logic
- Mentored high school and university-level students in robot design and team strategy

## Key Projects & Initiatives
1. **Oil-Water Separation System**: Revolutionary environmental technology with superhydrophobic/oleophilic materials, integrated into Barcasa's oil spill cleanup processes
2. **SPOTS Social App**: Full-stack mobile application with React Native, Firebase, geolocation services, and social memory features
3. **VEX Robotics Championship Robot**: Advanced autonomous competitive robot with sophisticated control logic, achieved Top 30 global ranking
4. **Pharmaceutical Manufacturing Support**: FDA compliance documentation and equipment verification processes
5. **3D Printing & Prototyping**: Advanced manufacturing projects using DFM principles and GD&T

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