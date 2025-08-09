import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-primary">dev</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">About</a>
            <a href="#work" className="text-muted-foreground hover:text-primary transition-colors duration-200">Work</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">Contact</a>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-light text-primary mb-8 tracking-tight">
            there's nothing yet...
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            A minimal space for showcasing work and ideas. Currently under construction.
          </p>
          
          {/* Status indicator */}
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>Building something special</span>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-light text-primary mb-8">About</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Developer focused on creating clean, functional digital experiences. 
              Interested in minimal design, thoughtful interactions, and solving complex problems with simple solutions.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <div>Frontend</div>
              <div>Backend</div>
              <div>Design</div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-light text-primary mb-8">Work</h2>
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border border-border rounded-lg p-6 text-left hover:border-primary transition-colors duration-200">
                  <h3 className="text-lg font-medium text-primary mb-2">Project {i}</h3>
                  <p className="text-muted-foreground text-sm mb-4">Coming soon...</p>
                  <div className="flex space-x-4 text-xs text-muted-foreground">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Design</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-light text-primary mb-8">Contact</h2>
            <p className="text-muted-foreground mb-8">
              Let's create something together.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 — Made with care
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;