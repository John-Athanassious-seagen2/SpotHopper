interface ReviewCardProps {
  quote: string;
  author: string;
  source: string;
}

export function ReviewCard({ quote, author, source }: ReviewCardProps) {
  return (
    <div className="border border-border p-6 bg-card/30">
      <p 
        className="mb-4 italic leading-relaxed" 
        style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem' }}
      >
        "{quote}"
      </p>
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
          {author}
        </span>
        <span className="text-accent uppercase tracking-wide" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.75rem' }}>
          {source}
        </span>
      </div>
    </div>
  );
}
