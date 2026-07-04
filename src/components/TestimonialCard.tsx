import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    image: string;
    rating: number;
    comment: string;
  };
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 card-hover">
      {/* Rating */}
      <div className="flex items-center space-x-1 space-x-reverse mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5" style={{ fill: '#FFC107', color: '#FFC107' }} />
        ))}
      </div>

      {/* Comment */}
      <p className="text-gray-700 leading-relaxed mb-6">"{testimonial.comment}"</p>

      {/* Author */}
      <div className="flex items-center space-x-3 space-x-reverse">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ background: '#FFC107' }}>
          {testimonial.image}
        </div>
        <div>
          <div className="font-bold text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
