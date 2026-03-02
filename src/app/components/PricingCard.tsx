interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export function PricingCard({ name, price, description, features, highlighted = false }: PricingCardProps) {
  return (
    <div 
      className={`bg-card/40 backdrop-blur-md border ${highlighted ? 'border-primary/50' : 'border-border/50'} rounded-lg p-8 ${highlighted ? 'relative shadow-xl shadow-primary/10' : ''} hover:border-border transition-all`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg shadow-primary/20">
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 
          className="mb-2 text-foreground"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.5rem', fontWeight: 700 }}
        >
          {name}
        </h3>
        <p 
          className="text-muted-foreground mb-4"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem' }}
        >
          {description}
        </p>
        <div className="flex items-baseline gap-2">
          <span 
            className="text-foreground"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '3rem', fontWeight: 700 }}
          >
            {price}
          </span>
          <span className="text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
            /month
          </span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <svg 
              className="w-5 h-5 text-foreground/60 flex-shrink-0 mt-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span 
              className="text-foreground/90"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem' }}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      <button 
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
          highlighted 
            ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20' 
            : 'bg-secondary/60 text-secondary-foreground hover:bg-secondary/80 border border-border backdrop-blur-sm hover:border-primary/50'
        }`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Get Started
      </button>
    </div>
  );
}