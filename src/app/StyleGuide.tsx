import { CTAButton } from './components/CTAButton';
import { MetricCard } from './components/MetricCard';
import { PricingCard } from './components/PricingCard';
import { FeatureBlock } from './components/FeatureBlock';
import { Globe } from 'lucide-react';

export function StyleGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground p-12" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="border-b border-border pb-8">
          <h1 
            className="mb-2" 
            style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: '3.5rem', 
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}
          >
            SpotHopper
          </h1>
          <p className="text-muted-foreground text-lg">Design System & Component Library</p>
        </div>

        {/* Brand Principles */}
        <section>
          <h2 
            className="mb-6" 
            style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: '2rem', 
              fontWeight: 700
            }}
          >
            Brand Principles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 
                className="mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.25rem', fontWeight: 700 }}
              >
                Confident
              </h3>
              <p className="text-muted-foreground text-sm">
                Direct messaging. Revenue-focused copy. No fluff.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 
                className="mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.25rem', fontWeight: 700 }}
              >
                Professional
              </h3>
              <p className="text-muted-foreground text-sm">
                Clean grids. Strong hierarchy. Enterprise-level structure.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 
                className="mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.25rem', fontWeight: 700 }}
              >
                Data-Forward
              </h3>
              <p className="text-muted-foreground text-sm">
                Metrics matter. Results-driven aesthetic. Performance focused.
              </p>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section>
          <h2 
            className="mb-6" 
            style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: '2rem', 
              fontWeight: 700
            }}
          >
            Color Palette
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="h-32 bg-background border border-border rounded-lg mb-3"></div>
              <p className="font-semibold mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Background
              </p>
              <p className="text-xs text-muted-foreground font-mono">#0A0E14</p>
              <p className="text-xs text-muted-foreground mt-1">Deep Charcoal</p>
            </div>
            
            <div>
              <div className="h-32 bg-primary rounded-lg mb-3"></div>
              <p className="font-semibold mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Primary
              </p>
              <p className="text-xs text-muted-foreground font-mono">#F97316</p>
              <p className="text-xs text-muted-foreground mt-1">Orange - CTAs Only</p>
            </div>
            
            <div>
              <div className="h-32 bg-foreground rounded-lg mb-3"></div>
              <p className="font-semibold mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Foreground
              </p>
              <p className="text-xs text-muted-foreground font-mono">#F8FAFC</p>
              <p className="text-xs text-muted-foreground mt-1">High Contrast White</p>
            </div>
            
            <div>
              <div className="h-32 bg-card border border-border rounded-lg mb-3"></div>
              <p className="font-semibold mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Card
              </p>
              <p className="text-xs text-muted-foreground font-mono">#151921</p>
              <p className="text-xs text-muted-foreground mt-1">Elevated Surface</p>
            </div>
            
            <div>
              <div className="h-32 bg-secondary rounded-lg mb-3"></div>
              <p className="font-semibold mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Secondary
              </p>
              <p className="text-xs text-muted-foreground font-mono">#1A1F2B</p>
              <p className="text-xs text-muted-foreground mt-1">Navy Accent</p>
            </div>
            
            <div>
              <div className="h-32 bg-muted rounded-lg mb-3"></div>
              <p className="font-semibold mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Muted
              </p>
              <p className="text-xs text-muted-foreground font-mono">#0D1117</p>
              <p className="text-xs text-muted-foreground mt-1">Subtle Backgrounds</p>
            </div>
            
            <div>
              <div className="h-32 bg-destructive rounded-lg mb-3"></div>
              <p className="font-semibold mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Destructive
              </p>
              <p className="text-xs text-muted-foreground font-mono">#EF4444</p>
              <p className="text-xs text-muted-foreground mt-1">Error/Warning</p>
            </div>
            
            <div>
              <div className="h-32 border-2 border-border rounded-lg mb-3 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Border</span>
              </div>
              <p className="font-semibold mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Border
              </p>
              <p className="text-xs text-muted-foreground">rgba(148,163,184,0.12)</p>
              <p className="text-xs text-muted-foreground mt-1">Subtle Division</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 
            className="mb-6" 
            style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: '2rem', 
              fontWeight: 700
            }}
          >
            Typography
          </h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                Headline Font - DM Sans
              </p>
              <div className="space-y-4">
                <div>
                  <p 
                    style={{ 
                      fontFamily: "'DM Sans', sans-serif", 
                      fontSize: '4.5rem', 
                      fontWeight: 700, 
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em' 
                    }}
                  >
                    Own Your Restaurant's Revenue.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Hero Headline - 4.5rem / 700 weight</p>
                </div>
                
                <div>
                  <p 
                    style={{ 
                      fontFamily: "'DM Sans', sans-serif", 
                      fontSize: '3rem', 
                      fontWeight: 700,
                      letterSpacing: '-0.01em'
                    }}
                  >
                    Results That Matter
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Section Headline - 3rem / 700 weight</p>
                </div>
                
                <div>
                  <p 
                    style={{ 
                      fontFamily: "'DM Sans', sans-serif", 
                      fontSize: '1.5rem', 
                      fontWeight: 700
                    }}
                  >
                    Professional Website Builder
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Subsection - 1.5rem / 700 weight</p>
                </div>
                
                <div>
                  <p 
                    style={{ 
                      fontFamily: "'DM Sans', sans-serif", 
                      fontSize: '1.125rem', 
                      fontWeight: 600
                    }}
                  >
                    Feature Title
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Small Headline - 1.125rem / 600 weight</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border">
              <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                Body Font - Inter
              </p>
              <div className="space-y-4">
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.25rem', lineHeight: 1.6 }}>
                    One platform for websites, online ordering, catering management, and marketing automation. 
                    Stop paying third-party fees. Start growing direct revenue.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Large Body - 1.25rem</p>
                </div>
                
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.125rem', lineHeight: 1.7 }}>
                    Average performance metrics from restaurants using SpotHopper.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Medium Body - 1.125rem</p>
                </div>
                
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', lineHeight: 1.6 }}>
                    Professional, mobile-optimized websites that convert. No coding required. SEO-ready.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Default Body - 1rem</p>
                </div>
                
                <div>
                  <p className="text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem' }}>
                    Supporting text and descriptions use muted foreground color for hierarchy.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Small Body - 0.9375rem</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 
            className="mb-6" 
            style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: '2rem', 
              fontWeight: 700
            }}
          >
            Buttons
          </h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-sm text-muted-foreground mb-4">Default Size</p>
              <div className="flex flex-wrap gap-4">
                <CTAButton variant="primary">Book a Demo</CTAButton>
                <CTAButton variant="secondary">Learn More</CTAButton>
                <CTAButton variant="outline">See How It Works →</CTAButton>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-4">Large Size</p>
              <div className="flex flex-wrap gap-4">
                <CTAButton variant="primary" size="large">Book a Demo</CTAButton>
                <CTAButton variant="outline" size="large">See How It Works →</CTAButton>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-card border border-border rounded-lg">
            <p className="text-sm mb-2"><strong>Design Notes:</strong></p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Primary: Orange background, white text, subtle glow</li>
              <li>• Secondary: Glass effect with backdrop blur, subtle border</li>
              <li>• Outline: Transparent border, hover reveals orange accent</li>
              <li>• Orange ONLY for CTAs and interactive states</li>
            </ul>
          </div>
        </section>

        {/* Metric Cards */}
        <section>
          <h2 
            className="mb-6" 
            style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: '2rem', 
              fontWeight: 700
            }}
          >
            Metric Cards
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard value="+32%" label="Direct Orders" trend="up" />
            <MetricCard value="+48%" label="Catering Inquiries" trend="up" />
            <MetricCard value="99%" label="Customer Retention" trend="neutral" />
          </div>
          
          <div className="mt-6 p-4 bg-card border border-border rounded-lg">
            <p className="text-sm mb-2"><strong>Usage:</strong></p>
            <p className="text-sm text-muted-foreground">
              Large, bold numbers with supporting labels. Up trend uses electric blue, neutral uses white.
            </p>
          </div>
        </section>

        {/* Feature Blocks */}
        <section>
          <h2 
            className="mb-6" 
            style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: '2rem', 
              fontWeight: 700
            }}
          >
            Feature Blocks
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureBlock
              icon={Globe}
              title="Website Builder"
              description="Professional, mobile-optimized websites that convert. No coding required. SEO-ready."
            />
            <FeatureBlock
              icon={Globe}
              title="Online Ordering"
              description="Zero-commission ordering. Your branding. Your customer data. Integrated payment processing."
            />
          </div>
          
          <div className="mt-6 p-4 bg-card border border-border rounded-lg">
            <p className="text-sm mb-2"><strong>Structure:</strong></p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Icon in electric blue with background</li>
              <li>• Title in DM Sans, bold</li>
              <li>• 2-3 line description maximum</li>
              <li>• Optional supporting image</li>
              <li>• Hover state: subtle border color change</li>
            </ul>
          </div>
        </section>

        {/* Pricing Cards */}
        <section>
          <h2 
            className="mb-6" 
            style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: '2rem', 
              fontWeight: 700
            }}
          >
            Pricing Cards
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PricingCard
              name="Starter"
              price="$299"
              description="Perfect for single-location restaurants."
              features={[
                'Professional website',
                'Online ordering (0% commission)',
                'Basic marketing automation',
                'Customer CRM'
              ]}
            />
            
            <PricingCard
              name="Professional"
              price="$599"
              description="For restaurants ready to maximize revenue."
              features={[
                'Everything in Starter',
                'Catering management',
                'Advanced marketing',
                'Priority support'
              ]}
              highlighted={true}
            />
          </div>
          
          <div className="mt-6 p-4 bg-card border border-border rounded-lg">
            <p className="text-sm mb-2"><strong>Features:</strong></p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Clear tier differentiation</li>
              <li>• Revenue-focused descriptions</li>
              <li>• Highlighted card has "Most Popular" badge</li>
              <li>• Checkmark bullets for features</li>
            </ul>
          </div>
        </section>

        {/* Grid System */}
        <section>
          <h2 
            className="mb-6" 
            style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: '2rem', 
              fontWeight: 700
            }}
          >
            Grid System
          </h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-3">Max Width: 1440px</p>
              <div className="bg-primary/10 border border-primary rounded-lg p-8 text-center">
                <p className="text-sm">Content container with 1440px max width</p>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-3">Standard 3-Column Grid</p>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-lg p-6 text-center text-sm">Col 1</div>
                <div className="bg-card border border-border rounded-lg p-6 text-center text-sm">Col 2</div>
                <div className="bg-card border border-border rounded-lg p-6 text-center text-sm">Col 3</div>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-3">2-Column Split</p>
              <div className="grid grid-cols-2 gap-12">
                <div className="bg-card border border-border rounded-lg p-6 text-center text-sm">Content</div>
                <div className="bg-card border border-border rounded-lg p-6 text-center text-sm">Visual</div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Don'ts */}
        <section className="border-t border-border pt-12">
          <h2 
            className="mb-6 text-destructive" 
            style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: '2rem', 
              fontWeight: 700
            }}
          >
            Avoid
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="line-through text-muted-foreground mb-2 font-semibold">Pastel SaaS Trends</p>
              <p className="text-sm text-muted-foreground">Use bold, professional colors. Electric blue, not baby blue.</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="line-through text-muted-foreground mb-2 font-semibold">Cartoon Illustrations</p>
              <p className="text-sm text-muted-foreground">Real photos, clean icons, data visualizations instead.</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="line-through text-muted-foreground mb-2 font-semibold">Playful Gradients</p>
              <p className="text-sm text-muted-foreground">Solid colors with subtle shadows. Professional, not playful.</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="line-through text-muted-foreground mb-2 font-semibold">Generic Marketing Copy</p>
              <p className="text-sm text-muted-foreground">Direct, revenue-focused messaging. Numbers and results.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}