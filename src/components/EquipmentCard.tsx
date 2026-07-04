import { Link } from 'react-router-dom';
import { MapPin, Clock, Calendar, ArrowLeft } from 'lucide-react';
import type { Equipment } from '../data/equipmentData';

interface EquipmentCardProps {
  equipment: Equipment;
}

export default function EquipmentCard({ equipment }: EquipmentCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
      {/* Image */}
      <div className="image-zoom-container h-56 bg-gray-200">
        <img
          src={equipment.image}
          alt={equipment.nameAr}
          className="w-full h-full object-cover image-zoom"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Brand & Category */}
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 text-xs font-semibold rounded-full" style={{ background: '#FFF9E6', color: '#FFC107' }}>
            {equipment.brand}
          </span>
          <span className="text-xs text-gray-500">{equipment.categoryAr}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 h-14">
          {equipment.nameAr}
        </h3>

        {/* Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
            <Calendar className="w-4 h-4 ml-2" style={{ color: '#FFC107' }} />
            <span>سنة {equipment.year}</span>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4 ml-2" style={{ color: '#FFC107' }} />
            <span>{equipment.hours.toLocaleString('ar-EG')} ساعة</span>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
            <MapPin className="w-4 h-4 ml-2" style={{ color: '#FFC107' }} />
            <span>{equipment.location}</span>
          </div>
        </div>

        {/* Condition Badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            الحالة: {equipment.condition}
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <div className="text-2xl font-bold" style={{ color: '#FFC107' }}>
              ${equipment.price.toLocaleString('en-US')}
            </div>
            <div className="text-xs text-gray-500">السعر قابل للتفاوض</div>
          </div>
          <Link
            to={`/equipment/${equipment.id}`}
            className="flex items-center space-x-2 space-x-reverse text-white px-5 py-2.5 rounded-lg hover:shadow-lg transition-all btn-ripple text-sm font-medium"
            style={{ background: '#FFC107' }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#E6AC00'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#FFC107'}
          >
            <span>التفاصيل</span>
            <ArrowLeft className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
