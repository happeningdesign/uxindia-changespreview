export type OrgCategory =
  | "Product & Tech"
  | "Consulting & Services"
  | "Banking & Finance"
  | "E-Commerce & Retail"
  | "Healthcare & Life Sciences"
  | "Media & Entertainment"
  | "Automotive & Mobility"
  | "Education & Research"
  | "Agency & Design Studio";

export interface Org {
  name: string;
  category: OrgCategory;
  hq?: string;
  description?: string;
}

export const orgs: Org[] = [
  // Product & Tech
  { name: "Adobe", category: "Product & Tech", hq: "San Jose, USA", description: "Creative cloud and digital experience platform leader" },
  { name: "Amazon", category: "Product & Tech", hq: "Seattle, USA", description: "Customer obsession embedded into every product surface" },
  { name: "Apple", category: "Product & Tech", hq: "Cupertino, USA", description: "Pioneering human-interface design for four decades" },
  { name: "Atlassian", category: "Product & Tech", hq: "Sydney, Australia", description: "Team collaboration tools with a strong design culture" },
  { name: "Figma", category: "Product & Tech", hq: "San Francisco, USA", description: "Collaborative design tool that redefined how teams work" },
  { name: "Google", category: "Product & Tech", hq: "Mountain View, USA", description: "Material Design and human-centred product philosophy" },
  { name: "IBM", category: "Product & Tech", hq: "Armonk, USA", description: "Enterprise design thinking at global scale" },
  { name: "Intuit", category: "Product & Tech", hq: "Mountain View, USA", description: "Pioneering design for financial simplicity" },
  { name: "LinkedIn", category: "Product & Tech", hq: "Sunnyvale, USA", description: "Professional network built around meaningful connections" },
  { name: "Meta", category: "Product & Tech", hq: "Menlo Park, USA", description: "Design at the intersection of social and spatial computing" },
  { name: "Microsoft", category: "Product & Tech", hq: "Redmond, USA", description: "Inclusive design at global scale with Fluent Design System" },
  { name: "Salesforce", category: "Product & Tech", hq: "San Francisco, USA", description: "Lightning Design System powering enterprise UX" },
  { name: "SAP", category: "Product & Tech", hq: "Walldorf, Germany", description: "Enterprise experience design across complex workflows" },
  { name: "Spotify", category: "Product & Tech", hq: "Stockholm, Sweden", description: "Rhythm-led design culture with Squad model pioneering" },
  { name: "Swiggy", category: "Product & Tech", hq: "Bengaluru, India", description: "Hyperlocal UX at the scale of India's food delivery market" },
  { name: "Uber", category: "Product & Tech", hq: "San Francisco, USA", description: "Mobility design connecting riders and drivers globally" },
  { name: "Zepto", category: "Product & Tech", hq: "Bengaluru, India", description: "10-minute commerce reimagining grocery experience" },
  { name: "Zomato", category: "Product & Tech", hq: "Gurugram, India", description: "India's leading food delivery platform with bold UX voice" },

  // Consulting & Services
  { name: "Accenture Song", category: "Consulting & Services", hq: "New York, USA", description: "Experience-led transformation at enterprise scale" },
  { name: "Cognizant", category: "Consulting & Services", hq: "Teaneck, USA", description: "Digital engineering and design services for global clients" },
  { name: "Deloitte Digital", category: "Consulting & Services", hq: "New York, USA", description: "Human-centred strategy blended with business consulting" },
  { name: "Infosys", category: "Consulting & Services", hq: "Bengaluru, India", description: "Design studio embedded in global IT services delivery" },
  { name: "McKinsey Design", category: "Consulting & Services", hq: "New York, USA", description: "Business impact through design, led by QuantumBlack" },
  { name: "Publicis Sapient", category: "Consulting & Services", hq: "Washington, USA", description: "Digital transformation with design at the centre" },
  { name: "TCS", category: "Consulting & Services", hq: "Mumbai, India", description: "UX practice embedded across digital transformation projects" },
  { name: "Wipro", category: "Consulting & Services", hq: "Bengaluru, India", description: "Human-experience design practice for enterprise clients" },

  // Banking & Finance
  { name: "American Express", category: "Banking & Finance", hq: "New York, USA", description: "Financial services with a premium digital experience focus" },
  { name: "Axis Bank", category: "Banking & Finance", hq: "Mumbai, India", description: "Mobile-first banking experience for modern India" },
  { name: "HDFC Bank", category: "Banking & Finance", hq: "Mumbai, India", description: "India's largest private bank investing in digital UX" },
  { name: "ICICI Bank", category: "Banking & Finance", hq: "Vadodara, India", description: "Customer-first digital banking transformation" },
  { name: "JPMorgan Chase", category: "Banking & Finance", hq: "New York, USA", description: "Wealth and banking design at global institutional scale" },
  { name: "Paytm", category: "Banking & Finance", hq: "Noida, India", description: "Superapp for payments, banking and commerce" },
  { name: "PhonePe", category: "Banking & Finance", hq: "Bengaluru, India", description: "India's most-used UPI payment experience" },
  { name: "Razorpay", category: "Banking & Finance", hq: "Bengaluru, India", description: "Developer-first payment infrastructure with strong UX" },

  // E-Commerce & Retail
  { name: "Amazon India", category: "E-Commerce & Retail", hq: "Bengaluru, India", description: "Localised e-commerce experience for India's diverse market" },
  { name: "CRED", category: "E-Commerce & Retail", hq: "Bengaluru, India", description: "Award-winning design for India's credit card rewards platform" },
  { name: "Flipkart", category: "E-Commerce & Retail", hq: "Bengaluru, India", description: "India's e-commerce pioneer with deep UX investment" },
  { name: "Meesho", category: "E-Commerce & Retail", hq: "Bengaluru, India", description: "Social commerce designed for Bharat's next billion users" },
  { name: "Nykaa", category: "E-Commerce & Retail", hq: "Mumbai, India", description: "Beauty and lifestyle commerce with a discovery-first UX" },
  { name: "Tata Digital", category: "E-Commerce & Retail", hq: "Mumbai, India", description: "Super-app ecosystem bridging Tata's diverse portfolio" },

  // Healthcare & Life Sciences
  { name: "1mg", category: "Healthcare & Life Sciences", hq: "Gurugram, India", description: "Digital health platform making medicines accessible" },
  { name: "Apollo Hospitals", category: "Healthcare & Life Sciences", hq: "Chennai, India", description: "Healthcare UX for India's largest hospital network" },
  { name: "Johnson & Johnson", category: "Healthcare & Life Sciences", hq: "New Brunswick, USA", description: "Patient-centred design across medical devices and pharma" },
  { name: "Practo", category: "Healthcare & Life Sciences", hq: "Bengaluru, India", description: "Digital health platform connecting patients and doctors" },
  { name: "Siemens Healthineers", category: "Healthcare & Life Sciences", hq: "Erlangen, Germany", description: "Medical imaging and diagnostics with human-centred UX" },

  // Media & Entertainment
  { name: "Disney+ Hotstar", category: "Media & Entertainment", hq: "Mumbai, India", description: "India's leading streaming platform with 100M+ users" },
  { name: "Netflix", category: "Media & Entertainment", hq: "Los Gatos, USA", description: "Personalisation and streaming UX that set industry standards" },
  { name: "Sony LIV", category: "Media & Entertainment", hq: "Mumbai, India", description: "Sports and entertainment streaming with intuitive UX" },
  { name: "YouTube", category: "Media & Entertainment", hq: "San Bruno, USA", description: "Video platform design at the scale of global culture" },

  // Automotive & Mobility
  { name: "Hero MotoCorp", category: "Automotive & Mobility", hq: "Delhi, India", description: "Digital experience for India's largest two-wheeler brand" },
  { name: "Mahindra", category: "Automotive & Mobility", hq: "Mumbai, India", description: "Human-centred automotive and digital product design" },
  { name: "Ola Electric", category: "Automotive & Mobility", hq: "Bengaluru, India", description: "EV experience from app to scooter interface design" },
  { name: "Tata Motors", category: "Automotive & Mobility", hq: "Mumbai, India", description: "Automotive UX across connected and electric vehicles" },

  // Education & Research
  { name: "Byju's", category: "Education & Research", hq: "Bengaluru, India", description: "Ed-tech experience for India's learners" },
  { name: "National Design Centre", category: "Education & Research", hq: "Bengaluru, India", description: "Advancing design research and knowledge in India" },
  { name: "NID Ahmedabad", category: "Education & Research", hq: "Ahmedabad, India", description: "India's premier design institution shaping the profession" },
  { name: "Unacademy", category: "Education & Research", hq: "Bengaluru, India", description: "Live learning platform with a focus on accessible UX" },

  // Agency & Design Studio
  { name: "Elephant Design", category: "Agency & Design Studio", hq: "Pune, India", description: "India's oldest independent design consultancy" },
  { name: "Frog Design", category: "Agency & Design Studio", hq: "San Francisco, USA", description: "Experience strategy and product design at global scale" },
  { name: "Happening", category: "Agency & Design Studio", hq: "Bengaluru, India", description: "Experience design studio powering UXINDIA" },
  { name: "IDEO", category: "Agency & Design Studio", hq: "San Francisco, USA", description: "Human-centred design and innovation consulting pioneer" },
  { name: "Superflux", category: "Agency & Design Studio", hq: "London, UK", description: "Speculative and futures design studio" },
  { name: "Thought Over Design", category: "Agency & Design Studio", hq: "Delhi, India", description: "Brand and experience design rooted in craft" },
];

export const categories: OrgCategory[] = [
  "Product & Tech",
  "Consulting & Services",
  "Banking & Finance",
  "E-Commerce & Retail",
  "Healthcare & Life Sciences",
  "Media & Entertainment",
  "Automotive & Mobility",
  "Education & Research",
  "Agency & Design Studio",
];

export const categoryColors: Record<OrgCategory, string> = {
  "Product & Tech": "#E85520",
  "Consulting & Services": "#1B7A6E",
  "Banking & Finance": "#2D3580",
  "E-Commerce & Retail": "#F5A623",
  "Healthcare & Life Sciences": "#C8365A",
  "Media & Entertainment": "#7B4F9E",
  "Automotive & Mobility": "#1B7A6E",
  "Education & Research": "#E85520",
  "Agency & Design Studio": "#2D3580",
};
