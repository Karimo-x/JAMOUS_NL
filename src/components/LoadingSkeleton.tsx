export function EquipmentCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-56 bg-gray-200 skeleton"></div>
      <div className="p-5 space-y-4">
        <div className="h-4 bg-gray-200 rounded skeleton w-1/3"></div>
        <div className="h-6 bg-gray-200 rounded skeleton w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded skeleton w-full"></div>
          <div className="h-4 bg-gray-200 rounded skeleton w-2/3"></div>
        </div>
        <div className="h-8 bg-gray-200 rounded skeleton w-1/2"></div>
      </div>
    </div>
  );
}

export function CategoryCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-20 h-20 bg-gray-200 rounded-full skeleton"></div>
        <div className="h-6 bg-gray-200 rounded skeleton w-32"></div>
        <div className="h-4 bg-gray-200 rounded skeleton w-20"></div>
      </div>
    </div>
  );
}
