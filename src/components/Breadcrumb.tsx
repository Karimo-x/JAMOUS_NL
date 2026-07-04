import { Link } from 'react-router-dom';
import { ChevronLeft, Home } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; path?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 space-x-reverse text-sm">
      <Link to="/" className="flex items-center text-gray-600 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#FFC107'} onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}>
        <Home className="w-4 h-4" />
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2 space-x-reverse">
          <ChevronLeft className="w-4 h-4 text-gray-400" />
          {item.path ? (
            <Link to={item.path} className="text-gray-600 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#FFC107'} onMouseLeave={(e) => e.currentTarget.style.color = '#4B5563'}>
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
