import { Phone, MapPin } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-2 sm:h-10 space-y-2 sm:space-y-0">
          <div className="flex items-center text-slate-600 text-sm">
            <MapPin size={16} className="mr-2" />
            <span className="whitespace-nowrap">SODIDA, Dakar, Sénégal</span>
          </div>
          <div className="flex items-center text-slate-600 text-sm">
            <Phone size={16} className="mr-2" />
            <a
              href="tel:+221781125353"
              className="hover:text-blue-600 transition-colors"
            >
              +221 78 112 53 53
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
