import { LucideIcon } from 'lucide-react';

interface FeatureBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}

export function FeatureBlock({ icon: Icon, title, description, image }: FeatureBlockProps) {
  return (
    <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-lg p-6 hover:border-border transition-all duration-300 group">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-foreground/5 p-3 rounded-lg border border-border/30 group-hover:border-primary/30 transition-colors">
          <Icon className="w-6 h-6 text-foreground" />
        </div>
        <div className="flex-1">
          <h3 
            className="mb-2 text-foreground" 
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.25rem', fontWeight: 700 }}
          >
            {title}
          </h3>
          <p 
            className="text-muted-foreground leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem' }}
          >
            {description}
          </p>
        </div>
      </div>
      {image && (
        <div className="mt-4 rounded-lg overflow-hidden border border-border/50">
          <img src={image} alt={title} className="w-full h-auto opacity-90" />
        </div>
      )}
    </div>
  );
}