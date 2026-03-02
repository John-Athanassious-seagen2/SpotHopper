interface MenuItemCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

export function MenuItemCard({ image, name, description, price }: MenuItemCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[4/3] overflow-hidden bg-muted mb-3">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        <div className="flex items-start justify-between gap-4">
          <h3 
            className="uppercase tracking-wide" 
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.125rem', fontWeight: 600 }}
          >
            {name}
          </h3>
          <span 
            className="text-accent flex-shrink-0" 
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.125rem' }}
          >
            {price}
          </span>
        </div>
        <p className="text-muted-foreground text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
