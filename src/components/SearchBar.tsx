import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = 'ابحث عن الآليات...' }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-5 py-3 pr-12 rounded-lg outline-none transition-all"
        style={{ border: '1px solid #D9D9D9' }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = '#FFC107';
          e.currentTarget.style.outline = '2px solid #FFF9E6';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = '#D9D9D9';
          e.currentTarget.style.outline = 'none';
        }}
      />
      <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    </div>
  );
}
