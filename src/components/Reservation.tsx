
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export const Reservation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    address: "",
    surfaceDetails: "",
    message: "",
    wantCallback: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.serviceType) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }

    console.log("Données de réservation:", formData);
    
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons dans les plus brefs délais pour confirmer votre réservation.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      address: "",
      surfaceDetails: "",
      message: "",
      wantCallback: false
    });
  };

  return (
    <section id="reservation" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Demande de devis en ligne
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nom / Entreprise */}
              <div>
                <Label htmlFor="name" className="text-slate-700 font-medium">
                  Nom / Entreprise
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Votre nom ou nom d'entreprise"
                  className="mt-1"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-slate-700 font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="votre@email.com"
                  className="mt-1"
                  required
                />
              </div>

              {/* Téléphone */}
              <div>
                <Label htmlFor="phone" className="text-slate-700 font-medium">
                  Téléphone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+221 XX XXX XX XX"
                  className="mt-1"
                  required
                />
              </div>

              {/* Type de service */}
              <div>
                <Label htmlFor="serviceType" className="text-slate-700 font-medium">
                  Type de service
                </Label>
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
            </div>

            {/* Adresse du site à nettoyer */}
            <div>
              <Label htmlFor="address" className="text-slate-700 font-medium">
                Adresse du site à nettoyer
              </Label>
              <Input
                id="address"
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                placeholder="Adresse complète du site d'intervention"
                className="mt-1"
                required
              />
            </div>

            {/* Surface estimée / Détails */}
            <div>
              <Label htmlFor="surfaceDetails" className="text-slate-700 font-medium">
                Surface estimée / Détails
              </Label>
              <Textarea
                id="surfaceDetails"
                value={formData.surfaceDetails}
                onChange={(e) => setFormData({...formData, surfaceDetails: e.target.value})}
                placeholder="Surface approximative, nombre de panneaux, type d'installation, etc."
                className="mt-1"
                rows={3}
              />
            </div>

            {/* Message libre */}
            <div>
              <Label htmlFor="message" className="text-slate-700 font-medium">
                Message libre
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Informations complémentaires, demandes spécifiques..."
                className="mt-1"
                rows={4}
              />
            </div>

            {/* Checkbox rappel */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="callback"
                checked={formData.wantCallback}
                onCheckedChange={(checked) => setFormData({...formData, wantCallback: checked as boolean})}
              />
              <Label htmlFor="callback" className="text-slate-700">
                Être rappelé(e) par téléphone
              </Label>
            </div>

            {/* Bouton de soumission */}
            <div className="text-center pt-4">
              <Button 
                type="submit" 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg"
              >
                Envoyer ma demande de devis
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
