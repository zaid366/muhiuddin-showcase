import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, ExternalLink, Code2, Palette, Zap } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "Vecci Klarus",
      category: "Brand",
      description: "Designed for all skin-types, the revolutionary face-care trio includes. Committed to sustainability and inclusivity, the brand prioritizes eco-friendly practices.",
      link: "https://vecciklaruz.com/",
      tags: ["Webflow", "Design", "Brand"]
    },
    {
      title: "Nov2Pro",
      category: "Platform",
      description: "A modern e-learning platform with smooth interactions and engaging content delivery for aspiring professionals.",
      link: "https://nov2pro.com/",
      tags: ["Webflow", "UI/UX", "Interactive"]
    },
    {
      title: "Algorium",
      category: "Tech",
      description: "Clean, technical website showcasing algorithmic solutions with dynamic visualizations and responsive design.",
      link: "https://algorium.webflow.io/",
      tags: ["Webflow", "React", "GSAP"]
    },
    {
      title: "Regenerative Culture",
      category: "Social Impact",
      description: "Visually engaging platform promoting sustainable practices and community-driven environmental initiatives.",
      link: "https://www.regenerativecultures.org/",
      tags: ["Webflow", "Animation", "Design"]
    }
  ];

  const skills = [
    { name: "HTML/CSS/JS", level: "Expert" },
    { name: "React", level: "Advanced" },
    { name: "Webflow", level: "Expert" },
    { name: "GSAP", level: "Advanced" },
    { name: "Responsive Design", level: "Expert" },
    { name: "UI/UX Design", level: "Intermediate" }
  ];

  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building responsive, performant websites with React, HTML, CSS, and JavaScript"
    },
    {
      icon: Palette,
      title: "Webflow Development",
      description: "Expert Webflow development with 2+ years experience creating custom, interactive websites"
    },
    {
      icon: Zap,
      title: "Interactive Animations",
      description: "Smooth, engaging animations using GSAP and modern web animation techniques"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-bold tracking-tight">
              GM
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">About</a>
              <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">Services</a>
              <a href="#projects" className="text-sm font-medium hover:text-accent transition-colors">Projects</a>
              <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/ghulammuhiuddin" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/ghulammuhiuddin" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center animate-slide-up">
            <div className="mb-6">
              <span className="font-script text-4xl md:text-5xl text-accent">Creative</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 text-primary">
              WEB<br />DEVELOPER
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-1 bg-primary" />
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Building smooth, functional, and visually appealing websites
              </p>
              <div className="w-16 h-1 bg-primary" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
              <Button size="lg" className="text-lg px-8">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <a href="#projects">View Work</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-1/4 right-10 w-32 h-32 border-8 border-accent rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-primary/10 rotate-45" />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="relative">
                <span className="font-script text-3xl text-accent mb-4 block">Introduction</span>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-primary">
                  ABOUT ME
                  <span className="inline-block ml-4 text-accent">*</span>
                </h2>
              </div>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Hi, I'm a passionate 20-year-old web developer specializing in creating authentic content that unboxes to resonate with audiences. I bring brands to life with memorable, data-driven stories and connections.
                </p>
                <p>
                  With 2 years of experience in Webflow and expertise in React, GSAP, HTML, CSS, and JavaScript, I focus on building responsive, interactive, and user-friendly websites that leave lasting impressions.
                </p>
                <p className="font-semibold text-foreground">
                  Currently pursuing BSc in Computer Science, I combine technical knowledge with creative design to craft exceptional digital experiences.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Button variant="default" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button variant="outline" size="lg">
                  Download CV
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <Card className="p-8 bg-background border-2 border-primary">
                <h3 className="text-3xl font-bold mb-6 text-primary">
                  STRENGTHS
                  <span className="inline-block ml-3 text-accent">*</span>
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-2">Adaptability</h4>
                    <p className="text-muted-foreground">
                      I thrive in fast-paced environments, quickly learning new technologies and adapting to diverse workplace cultures.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Creativity</h4>
                    <p className="text-muted-foreground">
                      I excel at thinking outside the box, bringing unique perspectives to every project.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Tech-Savvy</h4>
                    <p className="text-muted-foreground">
                      I stay ahead of the curve with the latest web technologies, frameworks, and design trends.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Collaboration</h4>
                    <p className="text-muted-foreground">
                      I work effectively in team settings, communicating clearly and contributing to shared success.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <span className="font-script text-3xl text-accent mb-4 block">What I Offer</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-primary">
              SERVICES
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent">
                <service.icon className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="mb-16 animate-slide-up">
            <span className="font-script text-3xl text-accent mb-4 block">My Work</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-primary mb-6">
              FEATURED<br />PROJECTS
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Showcasing key projects including company Webflow development, personal portfolio work, and freelance client websites.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent group">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge variant="secondary" className="mb-3">{project.category}</Badge>
                      <h3 className="text-3xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-accent/10 rounded-full transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">More projects available:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://kurieta.design/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Kurieta Design</a>
              <span>•</span>
              <a href="https://walliee.webflow.io/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Walliee</a>
              <span>•</span>
              <a href="https://blackrobe.webflow.io/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Blackrobe</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <span className="font-script text-3xl text-accent mb-4 block">Experience</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-primary">
                SKILLS & TOOLS
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-2">
                <h3 className="text-2xl font-bold mb-6 text-primary">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-accent">{skill.level}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-accent transition-all duration-500" 
                          style={{ width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '85%' : '70%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="p-8 border-2">
                <h3 className="text-2xl font-bold mb-6 text-primary">Creative Skills</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold mb-1">UI/UX Design</h4>
                      <p className="text-sm text-muted-foreground">Creating intuitive, user-centered interfaces</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold mb-1">Animation & Interactions</h4>
                      <p className="text-sm text-muted-foreground">Smooth, engaging micro-interactions and animations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold mb-1">Responsive Design</h4>
                      <p className="text-sm text-muted-foreground">Mobile-first, adaptive layouts for all devices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold mb-1">Figma to Code</h4>
                      <p className="text-sm text-muted-foreground">Pixel-perfect implementation from design files</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <span className="font-script text-3xl text-accent mb-4 block">Let's Work</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                TOGETHER
              </h2>
              <p className="text-xl opacity-90">
                Have a project in mind? Let's create something amazing together.
              </p>
            </div>
            <Card className="p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your name" className="bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-background" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="Project inquiry" className="bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    className="bg-background min-h-[150px]"
                  />
                </div>
                <Button size="lg" className="w-full text-lg" variant="default">
                  Send Message
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-center md:text-left">
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:hello@ghulammuhiuddin.com" className="text-accent hover:underline">
                      hello@ghulammuhiuddin.com
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+92-XXX-XXXX" className="text-accent hover:underline">
                      +92-XXX-XXXX
                    </a>
                  </div>
                  <div className="text-center md:text-right">
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p>Pakistan</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold mb-2">Ghulam Muhiuddin</p>
              <p className="text-muted-foreground">Web Developer & Webflow Specialist</p>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/ghulammuhiuddin" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/ghulammuhiuddin" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:hello@ghulammuhiuddin.com" className="hover:text-accent transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Ghulam Muhiuddin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
