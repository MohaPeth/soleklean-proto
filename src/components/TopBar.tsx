
import { Phone } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-10">
          <div className="flex items-center text-slate-600 text-sm">
            <Phone size={16} className="mr-2" />
            <span>+221 78 112 53 53</span>
          </div>
        </div>
      </div>
    </div>
  );
};
