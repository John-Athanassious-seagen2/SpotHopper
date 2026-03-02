import { TrendingUp, DollarSign, ShoppingCart, Calendar } from 'lucide-react';

export function DashboardMock() {
  return (
    <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-6 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
        <h3 
          className="text-foreground"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.125rem', fontWeight: 600 }}
        >
          Revenue Dashboard
        </h3>
        <span 
          className="text-muted-foreground text-sm"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Last 30 days
        </span>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border/30">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-4 h-4 text-muted-foreground" />
            <span 
              className="text-muted-foreground text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Total Revenue
            </span>
          </div>
          <div 
            className="text-primary"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.75rem', fontWeight: 700 }}
          >
            $48,392
          </div>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-green-400" />
            <span className="text-green-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
              +32%
            </span>
          </div>
        </div>
        
        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border/30">
          <div className="flex items-center gap-2 mb-2">
            <ShoppingCart className="w-4 h-4 text-muted-foreground" />
            <span 
              className="text-muted-foreground text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Direct Orders
            </span>
          </div>
          <div 
            className="text-primary"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.75rem', fontWeight: 700 }}
          >
            1,284
          </div>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-green-400" />
            <span className="text-green-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
              +28%
            </span>
          </div>
        </div>
        
        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 col-span-2 border border-border/30">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span 
              className="text-muted-foreground text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Catering Inquiries
            </span>
          </div>
          <div 
            className="text-primary"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.75rem', fontWeight: 700 }}
          >
            142
          </div>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-green-400" />
            <span className="text-green-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
              +48%
            </span>
          </div>
        </div>
      </div>
      
      {/* Chart Placeholder */}
      <div className="bg-background/30 backdrop-blur-sm rounded-lg h-32 flex items-end justify-between px-4 py-3 gap-2 border border-border/30">
        {[40, 65, 55, 80, 70, 90, 85].map((height, idx) => (
          <div key={idx} className="flex-1 bg-primary/60 rounded-t hover:bg-primary/80 transition-colors" style={{ height: `${height}%` }} />
        ))}
      </div>
    </div>
  );
}