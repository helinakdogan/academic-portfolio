const categoryGradients = {
  "Eğitim Bilgileri": "linear-gradient(86deg, rgba(104,139,255,1) 42%, rgba(140,191,245,1) 78%)",
  "Tezler": "linear-gradient(86deg, rgba(236,94,164,1) 43%, rgba(255,186,224,1) 100%)",
  "Yabancı Diller": "linear-gradient(86deg, rgba(118,49,188,1) 43%, rgba(176,136,215,1) 100%)",
  "Araştırma Alanları": "linear-gradient(86deg, rgba(107,174,138,1) 43%, rgba(191,203,185,1) 100%)",
  "Akademik Unvanlar / Görevler": "linear-gradient(86deg, rgba(198,177,102,1) 43%, rgba(245,230,181,1) 100%)",
  "Yönetimsel Görevler": "linear-gradient(86deg, rgba(188,49,49,1) 43%, rgba(215,136,136,1) 100%)",
  "Akademi Dışı Deneyim": "linear-gradient(86deg, rgba(141,121,255,1) 47%, rgba(211,210,255,1) 100%)"
};

const applyGradients = (sections) => {
  return sections.map(section => ({
    ...section,
    items: section.items.map(item => ({
      ...item,
      gradient: categoryGradients[section.category] || item.gradient
    }))
  }));
};

const educationSections = [
  {
    category: "Eğitim Bilgileri",
    items: [
      {
        year: "2007 - 2012",
        degree: "Doktora",
        institution: "Anadolu Üniversitesi, EĞİTİM BİLİMLERİ ENSTİTÜSÜ, EĞİTİM BİLİMLERİ ANABİLİM DALI, Türkiye",
        gradient: categoryGradients["Eğitim Bilgileri"]
      },
      {
        year: "2005 - 2007",
        degree: "Yüksek Lisans",
        institution: "Anadolu Üniversitesi, EĞİTİM BİLİMLERİ ENSTİTÜSÜ, Rehberlik Ve Psikolojik Danışmanlık (Yl) (Tezli), Türkiye",
        gradient: categoryGradients["Eğitim Bilgileri"]
      },
      {
        year: "1991 - 1995",
        degree: "Lisans",
        institution: "Hacettepe Üniversitesi, Edebiyat Fakültesi, Psikoloji Bölümü, Türkiye",
        gradient: categoryGradients["Eğitim Bilgileri"]
      },
    ],
  },
  {
    category: "Tezler",
    items: [
      {
        year: "2012",
        title: "Adleryen yaklaşıma dayalı grupla psikolojik danışmanın üniversite öğrencilerinin yetersizlik duygusu ve psikolojik belirti düzeylerine etkisi",
        supervisor: "Prof. Dr. Mehmet Yılmaz",
        description: "Doktora Tezi",
        gradient: categoryGradients["Tezler"]
      },
      {
        year: "2007",
        title: "Farklı cinsiyet rollerine sahip üniversite öğrencilerinin öfke yaşama biçimleri ve utangaçlık düzeylerinin incelenmesi",
        supervisor: "Prof. Dr. Mehmet Yılmaz",
        description: "Yüksek Lisans Tezi",
        gradient: categoryGradients["Tezler"]
      },
    ],
  },
  {
    category: "Yabancı Diller",
    items: [
      {
        language: "İngilizce",
        level: "B2 Orta Üstü",
        gradient: categoryGradients["Yabancı Diller"]
      },
    ],
  },
  {
    category: "Araştırma Alanları",
    items: [
      {
        field: "Sosyal ve Beşeri Bilimler, Psikoloji, Eğitim, Eğitim Bilimleri, Psikolojik Danışma ve Rehberlik",
        gradient: categoryGradients["Araştırma Alanları"]
      }
    ]
  }
  ,
  
  {
    category: "Akademik Unvanlar / Görevler",
    items: [
      {
        year: "2018 - Devam Ediyor",
        title: "Doç. Dr.",
        institution: "Anadolu Üniversitesi, EĞİTİM FAKÜLTESİ, EĞİTİM BİLİMLERİ BÖLÜMÜ",
        gradient: categoryGradients["Akademik Unvanlar / Görevler"]
      },
      {
        year: "2013 - 2018",
        title: "Yrd. Doç. Dr.",
        institution: "Anadolu Üniversitesi, EĞİTİM FAKÜLTESİ, EĞİTİM BİLİMLERİ BÖLÜMÜ",
        gradient: categoryGradients["Akademik Unvanlar / Görevler"]
      },
    ],
  },
  {
    category: "Yönetimsel Görevler",
    items: [
      {
        year: "2014 - 2019",
        title: "Enstitü Müdür Yardımcısı",
        institution: "Anadolu Üniversitesi",
        gradient: categoryGradients["Yönetimsel Görevler"]
      },
    ],
  },
  {
    category: "Akademi Dışı Deneyim",
    items: [
      {
        year: "2011 - 2012",
        position: "Psikolog",
        company: "Anadolu Üniversitesi, Psychological Counseling and Guidance Center",
        gradient: categoryGradients["Akademi Dışı Deneyim"]
      },
      {
        year: "2003 - 2011",
        position: "Psychological Counselor",
        company: "Milli Eğitim Müdürlüğü, Eskişehir Guidance and Counseling Center",
        gradient: categoryGradients["Akademi Dışı Deneyim"]
      },
      {
        year: "2003 - 2010",
        position: "Rehber Öğretmen",
        company: "Milli Eğitim Bakanlığı",
        gradient: categoryGradients["Akademi Dışı Deneyim"]
      },
      {
        year: "1999 - 2003",
        position: "Psychologist",
        company: "Hastane, Osmangazi University, Training and Research Hospital, Department of Psychiatry",
        gradient: categoryGradients["Akademi Dışı Deneyim"]
      },
      {
        year: "1996 - 1997",
        position: "Psikolog Asteğmen",
        company: "GATA Haydarpaşa Askeri Hastanesi",
        gradient: categoryGradients["Akademi Dışı Deneyim"]
      },
    ],
  },
];

// Gradientleri uygula
const educationSectionsWithGradients = applyGradients(educationSections);

export default educationSectionsWithGradients;
