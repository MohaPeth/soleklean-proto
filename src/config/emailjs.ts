import emailjs from '@emailjs/browser';

// Configuration EmailJS
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_soleklean',
  TEMPLATE_ID: 'template_o5nmyou',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Configuration pour le service de rendez-vous
export const APPOINTMENT_CONFIG = {
  SERVICE_ID: 'service_appointments',
  TEMPLATE_ID: 'template_cwbulf3',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // Utilisation de la variable d'environnement
};

// Initialisation d'EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

interface FormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  address: string;
  serviceType: string;
  surfaceArea?: string;
  message?: string;
  wantCallback: boolean;
}

interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  address: string;
  surfaceDetails?: string;
  message?: string;
  wantCallback: boolean;
  date: Date;
  timeSlot: string;
}

export const sendEmail = async (formData: FormData) => {
  try {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        address: formData.address,
        service_type: formData.serviceType,
        surface_area: formData.surfaceArea,
        message: formData.message,
        want_callback: formData.wantCallback ? 'Oui' : 'Non',
        to_email: 'petheressongue@gmail.com'
      }
    );
    return response;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    throw error;
  }
};

export const sendAppointmentEmail = async (formData: AppointmentData) => {
  try {
    emailjs.init(APPOINTMENT_CONFIG.PUBLIC_KEY);
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service_type: formData.serviceType,
      address: formData.address,
      surface_details: formData.surfaceDetails || '',
      message: formData.message || '',
      want_callback: formData.wantCallback ? 'Oui' : 'Non',
      appointment_date: formData.date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      time_slot: formData.timeSlot === 'morning' ? 'Matin (8h - 12h)' : 'Après-midi (14h - 18h)'
    };

    console.log('Données envoyées à EmailJS:', templateParams);

    const response = await emailjs.send(
      APPOINTMENT_CONFIG.SERVICE_ID,
      APPOINTMENT_CONFIG.TEMPLATE_ID,
      templateParams
    );
    return response;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email de rendez-vous:', error);
    throw error;
  }
}; 