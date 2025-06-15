// Unternehmenskonfiguration für ApexNova Bau
export const companyConfig = {
  name: 'ApexNova Bau',
  email: 'info@apexnova-bau.de',
  phone: '+49 (0)17 664329242',
  address: {
    street: 'Sprengelstrasse 27',
    city: '13353 Berlin',
    country: 'Deutschland'
  },
  website: 'https://www.apexnova-bau.de', // added https://

  // Geschäftszeiten
  businessHours: {
    monday: '08:00 - 18:00',
    tuesday: '08:00 - 18:00',
    wednesday: '08:00 - 18:00',
    thursday: '08:00 - 18:00',
    friday: '08:00 - 18:00',
    saturday: '09:00 - 14:00',
    sunday: 'Geschlossen' // consistent capitalization
  },

  // Social Media (falls gewünscht)
  social: {
    linkedin: null,  // use null or remove keys if empty
    facebook: null,
    instagram: null,
    youtube: null
  },

  // Services
  services: [
    'Neubau',
    'Sanierung',
    'Umbau',
    'Renovierung',
    'Dacharbeiten',
    'Innenausbau',
    'Fassadenarbeiten',
    'Fliesenlegen',
    'Tiefbau'
  ],

  // Metadaten für SEO
  meta: {
    title: 'ApexNova Bau - Ihr Experte für Baudienstleistungen in Berlin',
    description: 'ApexNova Bau bietet professionelle Baudienstleistungen in Berlin. Neubau, Sanierung, Umbau und mehr. Kontaktieren Sie uns unter info@apexnova-bau.de',
    keywords: 'Bau, Bauunternehmen, Berlin, Neubau, Sanierung, Umbau, ApexNova'
  }
};

export default companyConfig;
