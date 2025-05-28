
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const Reservation = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
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

  const steps = [
    { number: 1, title: "Date et heure", active: true },
    { number: 2, title: "Vos informations", active: false },
    { number: 3, title: "Détails de l'installation", active: false }
  ];

  const timeSlots = [
    { value: "morning", label: "Matin (8h - 12h)" },
    { value: "afternoon", label: "Après-midi (14h - 18h)" }
  ];

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!selectedDate || !selectedTimeSlot) {
        toast({
          title: "Erreur",
          description: "Veuillez sélectionner une date et un créneau horaire",
          variant: "destructive"
        });
        return;
      }
    }
    
    if (currentStep === 2) {
      if (!formData.name || !formData.email || !formData.phone) {
        toast({
          title: "Erreur",
          description: "Veuillez remplir tous les champs obligatoires",
          variant: "destructive"
        });
        return;
      }
    }

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (!formData.address || !formData.serviceType) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }

    const reservationData = {
      ...formData,
      date: selectedDate,
      timeSlot: selectedTimeSlot
    };

    console.log("Données de réservation:", reservationData);
    
    toast({
      title: "Réservation confirmée !",
      description: "Nous vous contacterons dans les plus brefs délais pour confirmer votre intervention.",
    });

    // Reset form
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
    setSelectedDate(undefined);
    setSelectedTimeSlot("");
    setCurrentStep(1);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newMonth = new Date(currentMonth);
    if (direction === 'prev') {
      newMonth.setMonth(newMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(newMonth.getMonth() + 1);
    }
    setCurrentMonth(newMonth);
  };

  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <section id="reservation" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Réservez votre intervention
          </h2>
          <p className="text-lg text-slate-600 mb-2">
            Planifiez un nettoyage professionnel de vos panneaux solaires en quelques clics.
          </p>
          <p className="text-slate-600">
            Notre équipe intervient sous 48h à Dakar et ses environs.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium",
                    currentStep >= step.number
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  )}>
                    {step.number}
                  </div>
                  <span className={cn(
                    "ml-2 text-sm font-medium",
                    currentStep >= step.number ? "text-blue-600" : "text-gray-500"
                  )}>
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={cn(
                      "w-12 h-0.5 mx-4",
                      currentStep > step.number ? "bg-blue-600" : "bg-gray-200"
                    )} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Formulaire de réservation
            </h3>
            <p className="text-slate-600">
              Complétez les étapes ci-dessous pour planifier votre intervention de nettoyage.
            </p>
          </div>

          {/* Step 1: Date and Time */}
          {currentStep === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-slate-700 mb-4">
                  Sélectionnez une date
                </h4>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => navigateMonth('prev')}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <h5 className="font-medium">
                      {currentMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                    </h5>
                    <button
                      onClick={() => navigateMonth('next')}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={isDateDisabled}
                    month={currentMonth}
                    onMonthChange={setCurrentMonth}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-slate-700 mb-4">
                  Choisissez un créneau horaire
                </h4>
                <RadioGroup value={selectedTimeSlot} onValueChange={setSelectedTimeSlot}>
                  {timeSlots.map((slot) => (
                    <div key={slot.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={slot.value} id={slot.value} />
                      <Label htmlFor={slot.value} className="cursor-pointer">
                        {slot.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-slate-800 mb-2">
                    Informations importantes
                  </h5>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Intervention sous 48h minimum</li>
                    <li>• Durée moyenne d'intervention: 1-3h selon la surface</li>
                    <li>• Présence requise sur place ou accès sécurisé à prévoir</li>
                    <li>• Annulation possible jusqu'à 24h avant l'intervention</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-slate-700 font-medium">
                    Nom / Entreprise *
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

                <div>
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    Email *
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

                <div>
                  <Label htmlFor="phone" className="text-slate-700 font-medium">
                    Téléphone *
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

                <div>
                  <Label htmlFor="serviceType" className="text-slate-700 font-medium">
                    Type de service *
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
            </div>
          )}

          {/* Step 3: Installation Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="address" className="text-slate-700 font-medium">
                  Adresse du site à nettoyer *
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
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t">
            <Button
              variant="outline"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
            >
              Précédent
            </Button>
            <Button
              onClick={handleNextStep}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {currentStep === 3 ? "Confirmer la réservation" : "Continuer"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
