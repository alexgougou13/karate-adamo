export interface Labels {
  navigation: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    location: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    experience: string;
    philosophy: string;
    philosophyText: string;
  };
  services: {
    title: string;
    subtitle: string;
    beginner: {
      title: string;
      description: string;
    };
    intermediate: {
      title: string;
      description: string;
    };
    advanced: {
      title: string;
      description: string;
    };
    kids: {
      title: string;
      description: string;
    };
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  location: {
    title: string;
    address: string;
    schedule: string;
    scheduleTitle: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  contact: {
    title: string;
    phone: string;
    email: string;
    social: string;
  };
  footer: {
    copyright: string;
    rights: string;
  };
  language: {
    greek: string;
    english: string;
  };
}

export const labels: { [key: string]: Labels } = {
  el: {
    navigation: {
      home: "Αρχική",
      about: "Σχετικά",
      services: "Υπηρεσίες",
      gallery: "Γκαλερί",
      location: "Τοποθεσία",
      contact: "Επικοινωνία",
    },
    hero: {
      title: "Σχολή Καράτε ΑΘΩΣ",
      subtitle: "Δύναμη • Πειθαρχία • Σεβασμός",
      description:
        "Ανακαλύψτε τη δύναμη του παραδοσιακού καράτε με έμπειρους εκπαιδευτές και σύγχρονες μεθόδους διδασκαλίας.",
      cta: "Ξεκινήστε τη Διαδρομή σας",
    },
    about: {
      title: "Σχετικά με εμάς",
      description:
        "Με περισσότερα από 20 χρόνια εμπειρίας στις πολεμικές τέχνες, η σχολή μας είναι αφιερωμένη στη διδασκαλία των αυθεντικών αξιών του καράτε.",
      experience: "20+ χρόνια εμπειρίας",
      philosophy: "Η Φιλοσοφία μας",
      philosophyText:
        "Πιστεύουμε ότι το καράτε δεν είναι μόνο μια πολεμική τέχνη, αλλά ένας τρόπος ζωής που καλλιεργεί τη σωματική και πνευματική δύναμη.",
    },
    services: {
      title: "Οι Υπηρεσίες μας",
      subtitle: "Προσφέρουμε προγράμματα για όλες τις ηλικίες και τα επίπεδα",
      beginner: {
        title: "Αρχάριοι",
        description:
          "Μάθετε τις βασικές τεχνικές και αρχές του καράτε με ασφάλεια και υπομονή.",
      },
      intermediate: {
        title: "Μεσαίο Επίπεδο",
        description:
          "Αναπτύξτε τις τεχνικές σας και προετοιμαστείτε για προχωρημένες κινήσεις.",
      },
      advanced: {
        title: "Προχωρημένοι",
        description:
          "Τελειοποιήστε τις τεχνικές σας και προετοιμαστείτε για αγώνες και εξετάσεις.",
      },
      kids: {
        title: "Παιδικά Τμήματα",
        description:
          "Ειδικά προγράμματα για παιδιά που εστιάζουν στην πειθαρχία και την αυτοπεποίθηση.",
      },
    },
    gallery: {
      title: "Γκαλερί",
      subtitle: "Στιγμές από τις προπονήσεις και τους αγώνες μας",
    },
    location: {
      title: "Που μας βρίσκετε",
      address: "Mακεδονίας ΧΧ, Καλαμάτα 24100",
      schedule: "Πρόγραμμα Μαθημάτων",
      scheduleTitle: "Ώρες Λειτουργίας",
      monday: "Δευτέρα: 18:00 - 20:00",
      tuesday: "Τρίτη: 18:00 - 20:00",
      wednesday: "Τετάρτη: 18:00 - 20:00",
      thursday: "Πέμπτη: 18:00 - 20:00",
      friday: "Παρασκευή: 18:00 - 20:00",
      saturday: "Σάββατο: 10:00 - 12:00",
      sunday: "Κυριακή: Κλειστά",
    },
    contact: {
      title: "Επικοινωνία",
      phone: "Τηλέφωνο: +30 ΧΧΧΧΧΧΧΧΧΧΧΧΧ",
      email: "Email: info@ΧΧΧΧΧΧΧ.gr",
      social: "Ακολουθήστε μας",
    },
    footer: {
      copyright: "© 2025 Σχολή Καράτε ΑΘΩΣ.",
      rights: "Όλα τα δικαιώματα διατηρούνται.",
    },
    language: {
      greek: "Ελληνικά",
      english: "English",
    },
  },
  en: {
    navigation: {
      home: "Home",
      about: "About",
      services: "Services",
      gallery: "Gallery",
      location: "Location",
      contact: "Contact",
    },
    hero: {
      title: "ΑΘΩΣ Karate School",
      subtitle: "Strength • Discipline • Respect",
      description:
        "Discover the power of traditional karate with experienced instructors and modern teaching methods.",
      cta: "Start Your Journey",
    },
    about: {
      title: "About Us",
      description:
        "With over 20 years of experience in martial arts, our school is dedicated to teaching the authentic values of karate.",
      experience: "20+ years of experience",
      philosophy: "Our Philosophy",
      philosophyText:
        "We believe that karate is not just a martial art, but a way of life that cultivates physical and mental strength.",
    },
    services: {
      title: "Our Services",
      subtitle: "We offer programs for all ages and skill levels",
      beginner: {
        title: "Beginners",
        description:
          "Learn the basic techniques and principles of karate with safety and patience.",
      },
      intermediate: {
        title: "Intermediate",
        description:
          "Develop your techniques and prepare for advanced movements.",
      },
      advanced: {
        title: "Advanced",
        description:
          "Perfect your techniques and prepare for competitions and examinations.",
      },
      kids: {
        title: "Kids Classes",
        description:
          "Special programs for children focusing on discipline and self-confidence.",
      },
    },
    gallery: {
      title: "Gallery",
      subtitle: "Moments from our training sessions and competitions",
    },
    location: {
      title: "Find Us",
      address: "Makedonias XX, Kalamata 24100",
      schedule: "Class Schedule",
      scheduleTitle: "Opening Hours",
      monday: "Monday: 18:00 - 20:00",
      tuesday: "Tuesday: 18:00 - 20:00",
      wednesday: "Wednesday: 18:00 - 20:00",
      thursday: "Thursday: 18:00 - 20:00",
      friday: "Friday: 18:00 - 20:00",
      saturday: "Saturday: 10:00 - 12:00",
      sunday: "Sunday: Closed",
    },
    contact: {
      title: "Contact",
      phone: "Phone: +30 xxxxxxxxxxx",
      email: "Email: info@xxxxxxxxxx.gr",
      social: "Follow Us",
    },
    footer: {
      copyright: "© 2025 ΑΘΩΣ Karate School.",
      rights: "All rights reserved.",
    },
    language: {
      greek: "Ελληνικά",
      english: "English",
    },
  },
};
