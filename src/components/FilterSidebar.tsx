import { brands, categories } from '../data/equipmentData';

interface FilterSidebarProps {
  filters: {
    category: string;
    brand: string;
    minPrice: string;
    maxPrice: string;
    year: string;
    condition: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onReset: () => void;
}

export default function FilterSidebar({ filters, onFilterChange, onReset }: FilterSidebarProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">تصفية النتائج</h3>
        <button
          onClick={onReset}
          className="text-sm font-medium transition-colors"
          style={{ color: '#FFC107' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#E6AC00'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#FFC107'}
        >
          إعادة تعيين
        </button>
      </div>

      <div className="space-y-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            الفئة
          </label>
          <select
            value={filters.category}
            onChange={(e) => onFilterChange('category', e.target.value)}
            className="w-full px-4 py-2 rounded-lg outline-none"
            style={{ border: '1px solid #D9D9D9' }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#FFC107';
              e.currentTarget.style.outline = '2px solid #FFF9E6';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#D9D9D9';
              e.currentTarget.style.outline = 'none';
            }}
          >
            <option value="">جميع الفئات</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nameAr}
              </option>
            ))}
          </select>
        </div>

        {/* Brand Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            العلامة التجارية
          </label>
          <select
            value={filters.brand}
            onChange={(e) => onFilterChange('brand', e.target.value)}
            className="w-full px-4 py-2 rounded-lg outline-none"
            style={{ border: '1px solid #D9D9D9' }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#FFC107';
              e.currentTarget.style.outline = '2px solid #FFF9E6';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#D9D9D9';
              e.currentTarget.style.outline = 'none';
            }}
          >
            <option value="">جميع العلامات</option>
            {brands.map((brand) => (
              <option key={brand.name} value={brand.name}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            السعر (دولار)
          </label>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="من"
              value={filters.minPrice}
              onChange={(e) => onFilterChange('minPrice', e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
            <input
              type="number"
              placeholder="إلى"
              value={filters.maxPrice}
              onChange={(e) => onFilterChange('maxPrice', e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>
        </div>

        {/* Year Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            سنة الصنع
          </label>
          <select
            value={filters.year}
            onChange={(e) => onFilterChange('year', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          >
            <option value="">جميع السنوات</option>
            <option value="2021-2023">2021-2023</option>
            <option value="2018-2020">2018-2020</option>
            <option value="2015-2017">2015-2017</option>
          </select>
        </div>

        {/* Condition Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            الحالة
          </label>
          <select
            value={filters.condition}
            onChange={(e) => onFilterChange('condition', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          >
            <option value="">جميع الحالات</option>
            <option value="ممتازة">ممتازة</option>
            <option value="جيدة جداً">جيدة جداً</option>
            <option value="جيدة">جيدة</option>
          </select>
        </div>
      </div>
    </div>
  );
}
