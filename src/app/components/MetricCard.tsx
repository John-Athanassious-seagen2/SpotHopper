interface MetricCardProps {
  value: string;
  label: string;
  trend?: 'up' | 'neutral';
}

export function MetricCard({ value, label, trend = 'up' }: MetricCardProps) {
  return (
    <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-lg p-8 text-center hover:border-border transition-all group">
      <div className="mb-3">
        <span 
          className={`${trend === 'up' ? 'text-primary' : 'text-foreground'} group-hover:text-primary transition-colors`}
          style={{ 
            fontFamily: "'DM Sans', sans-serif", 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            fontWeight: 700,
            lineHeight: 1
          }}
        >
          {value}
        </span>
      </div>
      <p 
        className="text-muted-foreground"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem' }}
      >
        {label}
      </p>
    </div>
  );
}