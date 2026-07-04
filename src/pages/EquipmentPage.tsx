import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import EquipmentCard from '../components/EquipmentCard';
import FilterSidebar from '../components/FilterSidebar';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import Breadcrumb from '../components/Breadcrumb';
import { equipment } from '../data/equipmentData';
import { SlidersHorizontal } from 'lucide-react';

export default function EquipmentPage() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    brand: '',
    minPrice: '',
    maxPrice: '',
    year: '',
    condition: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 9;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters({
      category: '',
      brand: '',
      minPrice: '',
      maxPrice: '',
      year: '',
      condition: '',
    });
    setSearchQuery('');
    setCurrentPage(1);
  };

  // Filter equipment
  const filteredEquipment = equipment.filter((item) => {
    // Search filter
    if (searchQuery && !item.nameAr.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Category filter
    if (filters.category && item.category !== filters.category) {
      return false;
    }

    // Brand filter
    if (filters.brand && item.brand !== filters.brand) {
      return false;
    }

    // Price filter
    if (filters.minPrice && item.price < parseInt(filters.minPrice)) {
      return false;
    }
    if (filters.maxPrice && item.price > parseInt(filters.maxPrice)) {
      return false;
    }

    // Year filter
    if (filters.year) {
      const [minYear, maxYear] = filters.year.split('-').map(Number);
      if (item.year < minYear || item.year > maxYear) {
        return false;
      }
    }

    // Condition filter
    if (filters.condition && item.condition !== filters.condition) {
      return false;
    }

    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredEquipment.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEquipment = filteredEquipment.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb items={[{ label: 'الآليات' }]} />
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            تصفح الآليات الثقيلة
          </h1>
          <p className="text-lg text-gray-600">
            اكتشف مجموعتنا من الآليات الأوروبية عالية الجودة
          </p>
        </div>

        {/* Search & Filter Toggle */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center space-x-2 space-x-reverse bg-white border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span>التصفية</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleResetFilters}
            />
          </div>

          {/* Equipment Grid */}
          <div className="lg:col-span-3">
            {/* Results Count */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                عرض {paginatedEquipment.length} من أصل {filteredEquipment.length} نتيجة
              </p>
            </div>

            {/* Equipment Cards */}
            {paginatedEquipment.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {paginatedEquipment.map((item) => (
                    <EquipmentCard key={item.id} equipment={item} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">لا توجد نتائج</h3>
                <p className="text-gray-600 mb-6">
                  لم نعثر على آليات تطابق معايير البحث الخاصة بك
                </p>
                <button
                  onClick={handleResetFilters}
                  className="text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all btn-ripple font-semibold"
                  style={{ background: '#FFC107' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#E6AC00'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#FFC107'}
                >
                  إعادة تعيين التصفية
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
