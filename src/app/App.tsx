import { CTAButton } from './components/CTAButton';
import { FeatureBlock } from './components/FeatureBlock';
import { MetricCard } from './components/MetricCard';
import { PricingCard } from './components/PricingCard';
import { DashboardMock } from './components/DashboardMock';
import { 
  Globe, 
  ShoppingCart, 
  UtensilsCrossed, 
  Mail, 
  Users, 
  BarChart3,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Quote
} from 'lucide-react';

function App() {
  const handleBookDemo = () => {
    console.log('Book demo clicked');
  };

  const handleSeeHowItWorks = () => {
    console.log('See how it works clicked');
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/60 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
          <div 
            className="text-foreground"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.5rem', fontWeight: 700 }}
          >
            SpotHopper
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Features
            </a>
            <a 
              href="#results" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Results
            </a>
            <a 
              href="#pricing" 
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Pricing
            </a>
            <CTAButton variant="primary" onClick={handleBookDemo}>
              Book a Demo
            </CTAButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy & CTAs */}
            <div>
              <h1 
                className="mb-6"
                style={{ 
                  fontFamily: "'DM Sans', sans-serif", 
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em'
                }}
              >
                Own Your Restaurant's Revenue.
              </h1>
              <p 
                className="text-muted-foreground mb-8 max-w-xl leading-relaxed"
                style={{ fontSize: '1.25rem' }}
              >
                One platform for websites, online ordering, catering management, and marketing automation. 
                Stop paying third-party fees. Start growing direct revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton variant="primary" size="large" onClick={handleBookDemo}>
                  Book a Demo
                </CTAButton>
                <CTAButton variant="outline" size="large" onClick={handleSeeHowItWorks}>
                  See How It Works →
                </CTAButton>
              </div>
            </div>
            
            {/* Right: Dashboard Mock */}
            <div>
              <DashboardMock />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section 
        className="py-12 px-6 border-b border-border bg-muted/30"
      >
        <div className="max-w-[1440px] mx-auto">
          <p 
            className="text-center text-primary"
            style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Trusted by 20,000+ Restaurants
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section 
        className="px-6"
        style={{ 
          backgroundColor: '#1a2332',
          paddingTop: '120px',
          paddingBottom: '120px'
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: "'DM Sans', sans-serif", 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                fontWeight: 700,
                letterSpacing: '-0.01em'
              }}
            >
              The Third-Party Problem
            </h2>
            <p 
              className="text-muted-foreground max-w-2xl mx-auto"
              style={{ fontSize: '1.125rem' }}
            >
              High commissions. Lost customer data. Limited control. Your restaurant deserves better.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="mb-3" style={{ color: '#FB923C', fontSize: '2.5rem', fontWeight: 700 }}>
                30%
              </div>
              <h3 
                className="mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.125rem', fontWeight: 600 }}
              >
                Third-Party Fees
              </h3>
              <p className="text-muted-foreground text-sm">
                Average commission on delivery platforms, eating into your margins.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="mb-3" style={{ color: '#FB923C', fontSize: '2.5rem', fontWeight: 700 }}>
                $0
              </div>
              <h3 
                className="mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.125rem', fontWeight: 600 }}
              >
                Lost Catering Revenue
              </h3>
              <p className="text-muted-foreground text-sm">
                No system to capture high-value catering inquiries and events.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="mb-3" style={{ color: '#FB923C', fontSize: '2.5rem', fontWeight: 700 }}>
                2%
              </div>
              <h3 
                className="mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.125rem', fontWeight: 600 }}
              >
                Website Conversion
              </h3>
              <p className="text-muted-foreground text-sm">
                Outdated websites that don't convert visitors into customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 py-12 bg-muted/30">
        <div className="max-w-[1200px] mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
      </div>

      {/* Solution / Features Section */}
      <section id="features" className="py-20 px-6 bg-muted/30">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: "'DM Sans', sans-serif", 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                fontWeight: 700,
                letterSpacing: '-0.01em'
              }}
            >
              Everything You Need to Grow
            </h2>
            <p 
              className="text-muted-foreground max-w-2xl mx-auto"
              style={{ fontSize: '1.125rem' }}
            >
              A complete growth platform built specifically for restaurants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureBlock
              icon={Globe}
              title="Website Builder"
              description="Professional, mobile-optimized websites that convert. No coding required. SEO-ready. Fully customizable."
              image="https://images.unsplash.com/photo-1719204089341-11dec48eae19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkaW5lcnN8ZW58MXx8fHwxNzcyMjU4NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
            
            <FeatureBlock
              icon={ShoppingCart}
              title="Online Ordering"
              description="Zero-commission ordering. Your branding. Your customer data. Integrated payment processing."
              image="https://images.unsplash.com/photo-1628199856702-e33fc268e783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBvcmRlciUyMG9ubGluZXxlbnwxfHx8fDE3NzIyNTg0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
            
            <FeatureBlock
              icon={UtensilsCrossed}
              title="Catering Management"
              description="Capture and convert catering leads. Custom menus. Automated proposals. Event tracking."
              image="https://images.unsplash.com/photo-1771154139725-f2b0b4891430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGJ1ZmZldCUyMGV2ZW50JTIwZm9vZHxlbnwxfHx8fDE3NzIyNTg0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
            
            <FeatureBlock
              icon={Mail}
              title="Marketing Automation"
              description="Email campaigns. SMS marketing. Customer segmentation. Automated retention workflows."
            />
            
            <FeatureBlock
              icon={Users}
              title="Customer CRM"
              description="Track every customer interaction. Build loyalty programs. Understand buying patterns."
            />
            
            <FeatureBlock
              icon={BarChart3}
              title="Reporting Dashboard"
              description="Real-time revenue tracking. Order analytics. Catering pipeline. Marketing ROI."
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 py-12 bg-muted/30">
        <div className="max-w-[1200px] mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
      </div>

      {/* Results Section */}
      <section 
        id="results" 
        className="px-6"
        style={{ 
          backgroundColor: '#1a2332',
          paddingTop: '120px',
          paddingBottom: '120px'
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: "'DM Sans', sans-serif", 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                fontWeight: 700,
                letterSpacing: '-0.01em'
              }}
            >
              Results That Matter
            </h2>
            <p 
              className="text-muted-foreground max-w-2xl mx-auto"
              style={{ fontSize: '1.125rem' }}
            >
              Average performance metrics from restaurants using SpotHopper.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MetricCard value="+32%" label="Direct Orders" trend="up" />
            <MetricCard value="+48%" label="Catering Inquiries" trend="up" />
            <MetricCard value="99%" label="Customer Retention" trend="neutral" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: "'DM Sans', sans-serif", 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                fontWeight: 700,
                letterSpacing: '-0.01em'
              }}
            >
              How It Works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span 
                  className="text-primary"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.5rem', fontWeight: 700 }}
                >
                  1
                </span>
              </div>
              <h3 
                className="mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.25rem', fontWeight: 700 }}
              >
                Schedule a Demo
              </h3>
              <p className="text-muted-foreground">
                Meet with our team to discuss your restaurant's needs and see the platform in action.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span 
                  className="text-primary"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.5rem', fontWeight: 700 }}
                >
                  2
                </span>
              </div>
              <h3 
                className="mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.25rem', fontWeight: 700 }}
              >
                Quick Setup
              </h3>
              <p className="text-muted-foreground">
                Our team handles migration and setup. You'll be live in days, not months.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span 
                  className="text-primary"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.5rem', fontWeight: 700 }}
                >
                  3
                </span>
              </div>
              <h3 
                className="mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.25rem', fontWeight: 700 }}
              >
                Start Growing
              </h3>
              <p className="text-muted-foreground">
                Launch your new website, accept direct orders, and watch your revenue grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-primary opacity-50 mb-4" />
                  <p 
                    className="text-foreground mb-6 leading-relaxed italic"
                    style={{ fontSize: '1.25rem' }}
                  >
                    "We cut our third-party dependency by 75% and tripled our catering revenue in 6 months. SpotHopper paid for itself in the first 30 days."
                  </p>
                  <div>
                    <p 
                      className="font-semibold"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.125rem' }}
                    >
                      Maria Rodriguez
                    </p>
                    <p className="text-muted-foreground">
                      Owner, Coast Grill
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div>
                    <div 
                      className="text-primary mb-1"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '2rem', fontWeight: 700 }}
                    >
                      3x
                    </div>
                    <p className="text-muted-foreground text-sm">Catering Revenue</p>
                  </div>
                  <div>
                    <div 
                      className="text-primary mb-1"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '2rem', fontWeight: 700 }}
                    >
                      75%
                    </div>
                    <p className="text-muted-foreground text-sm">Less Third-Party</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1594394489799-88bf340a182d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwb3duZXIlMjBjaGVmJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcyMjU4NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Restaurant owner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-muted/30">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="mb-4"
              style={{ 
                fontFamily: "'DM Sans', sans-serif", 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                fontWeight: 700,
                letterSpacing: '-0.01em'
              }}
            >
              Simple, Revenue-Focused Pricing
            </h2>
            <p 
              className="text-muted-foreground max-w-2xl mx-auto"
              style={{ fontSize: '1.125rem' }}
            >
              Choose the plan that fits your restaurant. All plans include zero-commission ordering.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <PricingCard
              name="Starter"
              price="$299"
              description="Perfect for single-location restaurants looking to grow direct revenue."
              features={[
                'Professional website',
                'Online ordering (0% commission)',
                'Basic marketing automation',
                'Customer CRM',
                'Email support'
              ]}
            />
            
            <PricingCard
              name="Professional"
              price="$599"
              description="For restaurants ready to maximize catering and eliminate third-party fees."
              features={[
                'Everything in Starter',
                'Catering management',
                'Advanced marketing automation',
                'SMS campaigns',
                'Advanced reporting',
                'Priority support'
              ]}
              highlighted={true}
            />
            
            <PricingCard
              name="Enterprise"
              price="Custom"
              description="Multi-location restaurants with custom needs and dedicated support."
              features={[
                'Everything in Professional',
                'Multi-location management',
                'Custom integrations',
                'Dedicated account manager',
                'White-glove onboarding',
                'Custom reporting'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 
            className="text-white mb-6"
            style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
              fontWeight: 700,
              letterSpacing: '-0.01em'
            }}
          >
            Ready to Own Your Revenue?
          </h2>
          <p 
            className="text-white/90 mb-8 max-w-2xl mx-auto"
            style={{ fontSize: '1.25rem' }}
          >
            Join 20,000+ restaurants growing with SpotHopper.
          </p>
          <CTAButton 
            variant="secondary" 
            size="large" 
            onClick={handleBookDemo}
          >
            Book a Demo Today →
          </CTAButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div 
                className="text-foreground mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.5rem', fontWeight: 700 }}
              >
                SpotHopper
              </div>
              <p className="text-muted-foreground text-sm">
                The complete growth platform for restaurants.
              </p>
            </div>
            
            <div>
              <h4 
                className="font-semibold mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Product
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 
                className="font-semibold mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Resources
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Webinars</a></li>
              </ul>
            </div>
            
            <div>
              <h4 
                className="font-semibold mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Company
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>© 2026 SpotHopper. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;