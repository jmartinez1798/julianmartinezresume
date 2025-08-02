# Julián Martínez Portfolio - Professional Engineering Portfolio

## Project Overview
A professional portfolio website for Julián Martínez, a Mechanical Engineering student from Puerto Rico, serving as an interactive resume for applications to both banking sector (Oriental Bank) and engineering/technology companies (Raytheon, Honeywell, Lockheed Martin). The site emphasizes authenticity, willingness to learn, and showcases real developing technical skills without corporate exaggeration.

## Target Audience
Hiring managers from diverse industries looking for candidates with:
- Technical innovation skills and real project experience
- Process automation and engineering knowledge
- Problem-solving capabilities and learning mindset
- Bilingual communication skills (English/Spanish)
- Versatility across banking, engineering, and technology sectors

## Design Requirements
- Professional, modern, minimalist design
- Color scheme: Navy blue (#002244), light blue (#0070f3), white, light gray accents
- Clean typography (Inter font family)
- High contrast and readability
- Lucide icons for skills and sections

## Content Structure
1. **Home (Hero Section)** - Introduction with CTA buttons and QR code
2. **About Me** - Puerto Rican background, self-taught, results-oriented
3. **Relevant Skills & Tools** - Technical, software, and soft skills
4. **Featured Projects** - Real projects integrating design, programming, analysis
5. **Why I'm a Fit for Oriental Bank** - Banking sector alignment
6. **Download Resume** - PDF download functionality
7. **Contact Section** - Professional contact form

## Technical Stack
- React with TypeScript
- Tailwind CSS for styling
- Wouter for routing
- React Hook Form with Zod validation
- TanStack Query for API calls
- QR code generation for portfolio sharing

## User Preferences
- Spanish content preferred for Puerto Rican context
- Authentic and realistic profile showing willingness to learn vs corporate language
- Professional tone suitable for both banking and engineering industries
- Emphasis on real developing technical skills and practical projects
- Focus on versatility across different industry sectors

## Recent Changes
- **Mobile Responsiveness Enhancement (2025-08-02)**: Implemented comprehensive responsive design for digital business card modal - added viewport-aware sizing (max-height: 90vh), responsive padding and spacing, scalable QR code, optimized button sizes, overflow scrolling for small screens, and media queries for devices with height constraints (600px, 700px breakpoints)
- **Digital Business Card UI Redesign (2025-08-02)**: Complete redesign of digital business card modal with modern iOS-style interface - removed header/title, implemented backdrop blur, rounded corners (3xl), clean contact cards, proper accent colors, and integrated Contact button within modal. Removed standalone Contact button from hero section per user specifications.
- **Hero Section Button Simplification (2025-08-02)**: Streamlined CTA buttons from 4 to 3 by removing standalone Contact button - now features only Download Resume, Share Card, and View Projects for cleaner visual hierarchy
- **Professional Title Update (2025-08-02)**: Updated website title and meta descriptions from "Oriental Bank Candidate" to neutral professional title "Julián Martínez – Mechanical Engineer | Portfolio Profesional | Robotics & AI" for broader industry appeal
- **Interactive Project Details Implementation (2025-08-01)**: Enhanced Featured Projects section with interactive functionality - Spots App "View Details" button now opens embedded Figma prototype modal with smooth animations and professional styling, VEX Robotics button opens authentic Instagram profile (@ironrobotics2326) in new tab with engagement tracking
- **Resume Download & QR Code Update (2025-08-01)**: Implemented authentic PDF resume download functionality using user's actual resume file, replaced dynamic QR code generator with user's custom QR code image for portfolio access
- **Security Vulnerability Patch (2025-08-01)**: Successfully patched CVE-2025-30208 by upgrading Vite from 5.4.14 to 5.4.19, ensuring secure development environment
- **Featured Projects Section Update (2025-08-01)**: Updated project content for accuracy - corrected Spots App impact to reflect MVP status, renamed crypto project to "Blockchain Strategy & Tokenomics Development" for professionalism, added new Heat Exchanger Design project showcasing mechanical engineering expertise with ANSYS and SolidWorks
- **Martinez Pattern Background Refinement (2025-08-01)**: Reduced pattern size significantly (scale 0.15) and lowered opacity to 0.025 for subtle watermark effect that covers full homepage width without visual dominance
- **Complete Skills Section Redesign (2025-08-01)**: Removed all progress bars and proficiency percentages, replaced with clean organized lists in three categories (Technical Skills, Software & Technology, Soft Skills) using Lucide icons and level badges (Advanced/Intermediate)
- **Homepage Visual Updates (2025-08-01)**: Changed "Design & Simulation" button to "Simulation" for visual symmetry, expanded Martinez pattern background to full horizontal width across entire homepage, added AI Assistant popup functionality
- **About Section Redesign (2025-08-01)**: Removed profile photo, centered text layout, updated with concise professional background focusing on dual university experience, VEX robotics achievements, and University of Maryland research impact
- **Enhanced AI Assistant Knowledge Base (2025-01-24)**: Updated with authentic resume information including graduation details (Dec 2025), contact information, GPA (3.2), detailed project descriptions (SPOTS app, oil-water separation system), and comprehensive skills from actual resume
- **Enhanced University of Maryland Project (2025-01-24)**: Updated project title to highlight ESTEEM-Ser Quest program name and enhanced description with prestigious program recognition
- **Final Spanish-to-English Conversion Complete (2025-01-24)**: Translated remaining Spanish content in Skills Section, Automation Tools Section, and Loading Spinner - website now 100% in English
- **Prestigious Achievements Added (2025-01-24)**: Integrated global VEX Robotics competition awards and selective University of Maryland research program (1 of 3 students from Puerto Rico) with real-world impact in ocean oil spill cleanup technology
- **Academic Trajectory Added (2025-01-24)**: Integrated authentic academic background showing 2 years Aerospace Engineering at Penn State University (PSU) and full scholarship transition to Mechanical Engineering at Inter Bayamón due to pandemic
- **Complete English Translation (2025-01-24)**: Converted entire website from Spanish to English per recruiter recommendation for international market appeal
- Translated all components: Navigation, Footer, About Section, Banking/Professional Areas, Projects Section, Contact Section
- Updated hero section skills showcase with authentic technical abilities and quantifiable achievements
- Redesigned to highlight top 5 skill categories: Simulation, Programming, Prototyping, Tech Tools, Soft Skills
- Removed emoji decorations for cleaner professional appearance and fixed tooltip positioning
- Integrated authentic skills from user's profile: MATLAB, Python, Prompt Engineering, 3D Printing, DFM, GD&T, Firebase, React Native, GitHub
- Enhanced professional messaging suitable for banking and engineering sector applications
- Maintained authentic Martinez brand identity with three diagonal stripes logo throughout