const levelGradients = {
  "Lisans": "linear-gradient(-135deg, #7FB8E8, #3A7BD5)", 
  "Yüksek Lisans": "linear-gradient(-135deg, #F59CA1, #F54C4C)" 
};

  const applyLevelGradients = (sections) => {
  return sections.map(section => ({
    ...section,
    items: section.items.map(item => ({
      ...item,
      gradient: levelGradients[item.level] || item.gradient
    }))
  }));
  };


const lectures = [
  {
    category: "Verdiği Dersler",
    items: [
      { level: "Yüksek Lisans", title: "UEB 701 UZMANLIK ALAN DERSİ"},
      { level: "Lisans", title: "PSİ 403 PSİKOLOJİK TESTLER"},
      { level: "Yüksek Lisans", title: "RPD 790 TEZ"},
      { level: "Yüksek Lisans", title: "RPD 518 OKULLARDA REHBERLİK HİZMETLERİ" },
      { level: "Lisans", title: "RPD 401 BİREYLE PSİKOLOJİK DANIŞMA UYGULAMASI" },
      { level: "Lisans", title: "RPD 305 KİŞİLİK KURAMLARI" },
      { level: "Lisans", title: "RPD 456 ÖZEL EĞİTİMDE PSİKOLOJİK DANIŞMA VE REHBERLİK" },
      { level: "Yüksek Lisans", title: "UEB 702 UZMANLIK ALAN DERSİ"},
      { level: "Lisans", title: "ÖMB 106 EĞİTİM PSİKOLOJİSİ" },
      { level: "Lisans", title: "RPD 404 REHBERLİK VE PSİKOLOJİK DANIŞMADA ALAN ÇALIŞMASI" },
      { level: "Yüksek Lisans", title: "RPD 599 SEMİNER"},
      { level: "Lisans", title: "RPD 308 PSİKOLOJİK DANIŞMA KURAMLARI"},
      { level: "Lisans", title: "ÖMB 402 REHBERLİK"}
    ],
  },
];



const updatedLectures = applyLevelGradients(lectures);

export default updatedLectures;
