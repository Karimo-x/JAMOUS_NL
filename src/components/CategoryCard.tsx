import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    nameAr: string;
    icon: string;
    image?: string;
  };
  count: number;
}

export default function CategoryCard({ category, count }: CategoryCardProps) {
  return (
    <Link
      to={`/equipment?category=${category.id}`}
      className="group bg-white rounded-xl shadow-md overflow-hidden card-hover border border-gray-200"
    >
      {/* Image */}
      <div className="image-zoom-container h-48 bg-gray-200">
        <img
          src={category.image}
          alt={category.nameAr}
          className="w-full h-full object-cover image-zoom"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{category.nameAr}</h3>
          <p className="text-sm text-gray-600">{category.name}</p>
        </div>

        {/* Count & Arrow */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-sm font-medium text-gray-600">
            {count} {count === 1 ? 'آلية' : 'آليات'}
          </span>
          <div className="flex items-center justify-center w-10 h-10 rounded-full transition-colors" style={{ background: '#FFC107' }} onMouseEnter={(e) => e.currentTarget.style.background = '#E6AC00'} onMouseLeave={(e) => e.currentTarget.style.background = '#FFC107'}>
            <ArrowLeft className="w-5 h-5 text-white ml-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
