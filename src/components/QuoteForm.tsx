
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

interface QuoteFormProps {
  isVisible: boolean;
  onClose: () => void;
}

export const QuoteForm = ({ isVisible, onClose }: QuoteFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    surfaceArea: "",
    message: "",
    wantCallback: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.serviceType) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }

    // Simulation d'envoi
    console.log("Données du formulaire:", formData);
    
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons dans les plus brefs délais.",
    });

    // Reset du formulaire
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      address: "",
      serviceType: "",
      surfaceArea: "",
      message: "",
      wantCallback: false
    });

    // Fermer le formulaire après envoi
    onClose();
  };

  if (!isVisible) return null;

  return (
    <section id="devis" className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-8 py-4 flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Demande de devis gratuit
          </h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="text-slate-500 hover:text-slate-700"
          >
            <X size={24} />
          </Button>
        </div>
        
        <div className="p-8">
          <p className="text-lg text-slate-600 mb-8 text-center">
            Obtenez rapidement une estimation personnalisée pour vos besoins
          </p>

          <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-xl border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nom/Prénom */}
              <div>
                <Label htmlFor="name" className="text-slate-700">Nom / Prénom *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="mt-1"
                  required
                />
              </div>

              {/* Entreprise */}
              <div>
                <Label htmlFor="company" className="text-slate-700">Entreprise</Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-slate-700">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="mt-1"
                  required
                />
              </div>

              {/* Téléphone */}
              <div>
                <Label htmlFor="phone" className="text-slate-700">Téléphone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="mt-1"
                  required
                />
              </div>

              {/* Adresse */}
              <div className="md:col-span-2">
                <Label htmlFor="address" className="text-slate-700">Adresse du site à nettoyer *</Label>
                <Input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="mt-1"
                  required
                />
              </div>

              {/* Type de service */}
              <div>
                <Label htmlFor="serviceType" className="text-slate-700">Type de service *</Label>
                <Select value={formData.serviceType} onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="panneaux-solaires">Nettoyage panneaux solaires</SelectItem>
                    <SelectItem value="facades">Nettoyage façades</SelectItem>
                    <SelectItem value="vitrages">Nettoyage vitrages</SelectItem>
                    <SelectItem value="mixte">Service mixte</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Surface estimée */}
              <div>
                <Label htmlFor="surfaceArea" className="text-slate-700">Surface estimée (m²)</Label>
                <Input
                  id="surfaceArea"
                  type="text"
                  value={formData.surfaceArea}
                  onChange={(e) => setFormData({...formData, surfaceArea: e.target.value})}
                  className="mt-1"
                  placeholder="Ex: 100 m²"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <Label htmlFor="message" className="text-slate-700">Message ou précisions</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="mt-1"
                  rows={4}
                  placeholder="Décrivez vos besoins spécifiques, questions particulières..."
                />
              </div>

              {/* Checkbox rappel */}
              <div className="md:col-span-2 flex items-center space-x-2">
                <Checkbox
                  id="callback"
                  checked={formData.wantCallback}
                  onCheckedChange={(checked) => setFormData({...formData, wantCallback: checked as boolean})}
                />
                <Label htmlFor="callback" className="text-slate-700">
                  Je souhaite être rappelé(e) rapidement
                </Label>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button 
                type="submit" 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4"
              >
                Envoyer ma demande de devis
              </Button>
              <p className="text-sm text-slate-500 mt-4">
                * Champs obligatoires - Réponse sous 24h garantie
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
