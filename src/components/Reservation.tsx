
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { addDays, format, isBefore, isToday, startOfTomorrow } from "date-fns";
import { fr } from "date-fns/locale";

export const Reservation = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date>(
    addDays(new Date(), 2)
  );
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    address: "",
    surfaceDetails: "",
    message: "",
    wantCallback: false,
  });

  const steps = [
    { number: 1, title: "Date et heure", active: true },
    { number: 2, title: "Vos informations", active: false },
    { number: 3, title: "Détails de l'installation", active: false },
  ];

  const timeSlots = [
    { value: "morning", label: "Matin (8h - 12h)" },
    { value: "afternoon", label: "Après-midi (14h - 18h)" },
  ];

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!selectedDate) {
        toast({
          title: "Erreur",
          description: "Veuillez sélectionner une date",
          variant: "destructive",
        });
        return;
      }

      if (isDateDisabled(selectedDate)) {
        toast({
          title: "Erreur",
          description:
            "La date sélectionnée n'est pas disponible (minimum 48h à l'avance)",
          variant: "destructive",
        });
        return;
      }

      if (!selectedTimeSlot) {
        toast({
          title: "Erreur",
          description: "Veuillez sélectionner un créneau horaire",
          variant: "destructive",
        });
        return;
      }
    }

    if (currentStep === 2) {
      if (!formData.name || !formData.email || !formData.phone) {
        toast({
          title: "Erreur",
          description: "Veuillez remplir tous les champs obligatoires",
          variant: "destructive",
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
        variant: "destructive",
      });
      return;
    }

    const reservationData = {
      ...formData,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
    };

    console.log("Données de réservation:", reservationData);

    toast({
      title: "Réservation confirmée !",
      description:
        "Nous vous contacterons dans les plus brefs délais pour confirmer votre intervention.",
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
      wantCallback: false,
    });
    setSelectedDate(addDays(new Date(), 2));
    setSelectedTimeSlot("");
    setCurrentStep(1);
  };

  const isDateDisabled = (date: Date) => {
    return isBefore(date, startOfTomorrow()) || isToday(date);
  };

  return (
    <section id="reservation" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Réservez votre intervention
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mb-2">
            Planifiez un nettoyage professionnel de vos panneaux solaires en
            quelques clics.
          </p>
          <p className="text-sm sm:text-base text-slate-600">
            Notre équipe intervient sous 48h à Dakar et ses environs.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
          {/* Progress Steps */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium",
                      currentStep >= step.number
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    )}
                  >
                    {step.number}
                  </div>
                  <span
                    className={cn(
                      "ml-2 text-sm font-medium",
                      currentStep >= step.number
                        ? "text-blue-600"
                        : "text-gray-500"
                    )}
                  >
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div
                      className={cn(
                        "hidden sm:block w-12 h-0.5 mx-4",
                        currentStep > step.number
                          ? "bg-blue-600"
                          : "bg-gray-200"
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">
              Formulaire de réservation
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Complétez les étapes ci-dessous pour planifier votre intervention
              de nettoyage.
            </p>
          </div>

          {/* Step 1: Date and Time */}
          {currentStep === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h4 className="text-base sm:text-lg font-medium text-slate-700 mb-4">
                  Sélectionnez une date
                </h4>
                <div className="border rounded-lg p-2 sm:p-4 bg-white">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={isDateDisabled}
                    locale={fr}
                    className="rounded-md border"
                    classNames={{
                      months:
                        "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                      month: "space-y-4",
                      caption: "flex justify-center pt-1 relative items-center",
                      caption_label: "text-sm font-medium",
                      nav: "space-x-1 flex items-center",
                      nav_button:
                        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                      nav_button_previous: "absolute left-1",
                      nav_button_next: "absolute right-1",
                      table: "w-full border-collapse space-y-1",
                      head_row: "flex",
                      head_cell:
                        "text-slate-500 rounded-md w-9 font-normal text-[0.8rem]",
                      row: "flex w-full mt-2",
                      cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-slate-100/50 [&:has([aria-selected])]:bg-slate-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                      day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-blue-100 rounded-md transition-colors",
                      day_range_end: "day-range-end",
                      day_selected:
                        "bg-blue-600 text-white hover:bg-blue-700 hover:text-white focus:bg-blue-600 focus:text-white",
                      day_today: "bg-slate-100 text-slate-900",
                      day_outside:
                        "day-outside text-slate-400 opacity-50 aria-selected:bg-slate-100/50 aria-selected:text-slate-400 aria-selected:opacity-30",
                      day_disabled: "text-slate-400 opacity-50",
                      day_range_middle:
                        "aria-selected:bg-slate-100 aria-selected:text-slate-900",
                      day_hidden: "invisible",
                    }}
                  />
                </div>
                {selectedDate && isDateDisabled(selectedDate) && (
                  <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">
                    Veuillez sélectionner une date disponible (minimum 48h à
                    l'avance).
                  </div>
                )}

                {/* Récapitulatif de la sélection */}
                {selectedDate && !isDateDisabled(selectedDate) && (
                  <div className="mt-4 p-3 sm:p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-medium text-blue-800 mb-2">
                      Votre sélection :
                    </h5>
                    <div className="space-y-2">
                      <p className="flex items-center text-blue-700 text-sm sm:text-base">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span>
                          Date : {format(selectedDate, "dd MMMM yyyy", { locale: fr })}
                        </span>
                      </p>
                      {selectedTimeSlot && (
                        <p className="flex items-center text-blue-700 text-sm sm:text-base">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>
                            Créneau :{" "}
                            {selectedTimeSlot === "morning"
                              ? "Matin (8h - 12h)"
                              : "Après-midi (14h - 18h)"}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-medium text-slate-700 mb-4">
                  Choisissez un créneau horaire
                </h4>
                <RadioGroup
                  value={selectedTimeSlot}
                  onValueChange={setSelectedTimeSlot}
                  className="space-y-3 sm:space-y-4"
                >
                  {timeSlots.map((slot) => (
                    <div
                      key={slot.value}
                      className={cn(
                        "flex items-center space-x-2 p-3 rounded-lg border transition-colors",
                        selectedTimeSlot === slot.value
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      )}
                    >
                      <RadioGroupItem value={slot.value} id={slot.value} />
                      <Label
                        htmlFor={slot.value}
                        className="cursor-pointer flex-1 text-sm sm:text-base"
                      >
                        {slot.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                <div className="mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-slate-800 mb-2 text-sm sm:text-base">
                    Informations importantes
                  </h5>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
                    <li>• Intervention sous 48h minimum</li>
                    <li>
                      • Durée moyenne d'intervention: 1-3h selon la surface
                    </li>
                    <li>
                      • Présence requise sur place ou accès sécurisé à prévoir
                    </li>
                    <li>
                      • Annulation possible jusqu'à 24h avant l'intervention
                    </li>
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
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+221 XX XXX XX XX"
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label
                    htmlFor="serviceType"
                    className="text-slate-700 font-medium"
                  >
                    Type de service *
                  </Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, serviceType: value })
                    }
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="panneaux-solaires">
                        Nettoyage panneaux solaires
                      </SelectItem>
                      <SelectItem value="facades">Nettoyage façades</SelectItem>
                      <SelectItem value="vitrages">
                        Nettoyage vitrages
                      </SelectItem>
                      <SelectItem value="mixte">Service mixte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="callback"
                  checked={formData.wantCallback}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      wantCallback: checked as boolean,
                    })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  placeholder="Adresse complète du site d'intervention"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label
                  htmlFor="surfaceDetails"
                  className="text-slate-700 font-medium"
                >
                  Surface estimée / Détails
                </Label>
                <Textarea
                  id="surfaceDetails"
                  value={formData.surfaceDetails}
                  onChange={(e) =>
                    setFormData({ ...formData, surfaceDetails: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Informations complémentaires, demandes spécifiques..."
                  className="mt-1"
                  rows={4}
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t mt-6">
            <Button
              variant="outline"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
              className="text-sm sm:text-base"
            >
              Précédent
            </Button>
            <Button
              onClick={handleNextStep}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base"
            >
              {currentStep === 3 ? "Confirmer la réservation" : "Continuer"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
