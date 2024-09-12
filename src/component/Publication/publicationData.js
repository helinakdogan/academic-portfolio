export const getGradientByCategory = (category) => {
  switch (category) {
    case "SCI, SSCI ve AHCI İndekslerine Giren Dergilerde Yayınlanan Makaleler":
      return "linear-gradient(135deg, #2A4D77 0%, #4A7EBB 50%, #6AAAE5 100%)"; 
    case "Diğer Dergilerde Yayınlanan Makaleler":
      return "linear-gradient(-60deg, #4ABDAC 0%, #5EBDC3 100%)"; 
    case "Hakemli Kongre / Sempozyum Bildiri Kitaplarında Yer Alan Yayınlar":
      return "linear-gradient(45deg, #E94E77 0%, #F5B4B4 100%)"; 
    case "Kitap & Kitap Bölümleri":
      return "linear-gradient(135deg, #026AA7 0%, #0295E6 100%)";
    default:
      return "linear-gradient(135deg, #1E88E5 0%, #3498DB 100%)";
  }
};

const publications = [
  {
    category:
      "SCI, SSCI ve AHCI İndekslerine Giren Dergilerde Yayınlanan Makaleler",
    items: [
      {
        year: "2024",
        title:
          "Turkish adolescents' anonymous use of social networking sites (SNSs): A phenomenological study",
        authors: "Çimşir E., Akdoğan R., Akbayrak A.",
        journal: "PSYCHOLOGY IN THE SCHOOLS, sa.-, ss.1-18, 2024 (SSCI)",
        pdfLink: "https://onlinelibrary.wiley.com/doi/10.1002/pits.23200", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #F8BBD0, #EC407A)", // Custom gradient
      },
      {
        year: "2024",
        title:
          "Inferiority feelings and internet addiction among Turkish University students in the context of COVID-19: The mediating role of emotion dysregulation",
        authors: "Çimşir E., Akdoğan R.",
        journal: "Current Psychology, cilt.43, sa.5, ss.4245-4254, 2024 (SSCI)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/7d5cfacf-437b-48ff-ae80-418ff7fea2d2/inferiority-feelings-and-internet-addiction-among-turkish-university-students-in-the-context-of-covid-19-the-mediating-role-of-emotion-dysregulation", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #F8BBD0, #EC407A)", // Custom gradient
      },
      {
        year: "2024",
        title:
          "Unveiling the relationships between eco-anxiety, psychological symptoms and anthropocentric narcissism: The psychometric properties of the Turkish version of the Hogg eco-anxiety scale",
        authors: "ÇİMŞİR E., ŞAHİN M. D., AKDOĞAN R.",
        journal: "CAMBRIDGE PRISMS-GLOBAL MENTAL HEALTH, 2024 (SCI-Expanded)",
        pdfLink: "https://www.cambridge.org/core/journals/global-mental-health/article/unveiling-the-relationships-between-ecoanxiety-psychological-symptoms-and-anthropocentric-narcissism-the-psychometric-properties-of-the-turkish-version-of-the-hogg-ecoanxiety-scale/92DAAABDB5B1D070059A1EF58C17C751", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #F8BBD0, #EC407A)", // Custom gradient
      },
      {
        year: "2022",
        title:
          "Collectivistic ambivalence: A potential source of social anxiety for individuals with higher inferiority feelings",
        authors: "Akdoğan R., Çimşir E.",
        journal:
          "INTERNATIONAL JOURNAL OF INTERCULTURAL RELATIONS, cilt.89, ss.195-207, 2022 (SSCI)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/623226ce-7b9e-4a9f-84b2-faf4526da18a/collectivistic-ambivalence-a-potential-source-of-social-anxiety-for-individuals-with-higher-inferiority-feelings", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #F8BBD0, #EC407A)", // Custom gradient
      },
      {
        year: "2021",
        title:
          "Childhood Emotional Incest Scale (CEIS): Development, Validation, Cross-Validation, and Reliability",
        authors: "Çimşir E., Akdoğan R.",
        journal:
          "JOURNAL OF COUNSELING PSYCHOLOGY, cilt.68, sa.1, ss.98-111, 2021 (SSCI)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/469ec73f-747a-4ff7-8ccd-2795a882bcf2/childhood-emotional-incest-scale-ceis-development-validation-cross-validation-and-reliability", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #F8BBD0, #EC407A)", // Custom gradient
      },
      {
        year: "2020",
        title: "Mental health of parents as a factor in dealing with Autism",
        authors: "Tümlü C., Akdoğan R., Diken İ. H.",
        journal: "SOCIAL SCIENCE JOURNAL, 2020 (SSCI)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/1d48bc6c-3bf2-4606-baac-97de4f1d7ff8/mental-health-of-parents-as-a-factor-in-dealing-with-autism", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #F8BBD0, #EC407A)", // Custom gradient
      },
      {
        year: "2020",
        title:
          "Does insight lead to happiness through providing satisfaction in romantic relationships?",
        authors: "Akdoğan R., Çimşir E.",
        journal: "SOCIAL SCIENCE JOURNAL, 2020 (SSCI)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/3c7f298f-47da-49eb-b3e5-546e9a3210af/does-insight-lead-to-happiness-through-providing-satisfaction-in-romantic-relationships", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #F8BBD0, #EC407A)", // Custom gradient
      },
      {
        year: "2019",
        title:
          "Linking inferiority feelings to subjective happiness: Self-concealment and loneliness as serial mediators",
        authors: "Akdoğan R., Çimşir E.",
        journal:
          "PERSONALITY AND INDIVIDUAL DIFFERENCES, cilt.149, ss.14-20, 2019 (SSCI)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/81aaeaee-e457-4236-b983-0c4eb1c3658d/linking-inferiority-feelings-to-subjective-happiness-self-concealment-and-loneliness-as-serial-mediators", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #F8BBD0, #EC407A)", // Custom gradient
      },
      {
        year: "2018",
        title:
          "Insight Scale for Nonclinical University Students: Validity and Reliability Analysis",
        authors: "Akdoğan R., Türküm A. S.",
        journal:
          "MEASUREMENT AND EVALUATION IN COUNSELING AND DEVELOPMENT, cilt.51, sa.4, ss.250-262, 2018 (SSCI)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/f781122e-e3fc-4453-a1a9-c8c20ef03678/insight-scale-for-nonclinical-university-students-validity-and-reliability-analysis", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #F8BBD0, #EC407A)", // Custom gradient
      },
      {
        year: "2017",
        title:
          "A model proposal on the relationships between loneliness, insecure attachment, and inferiority feelings",
        authors: "Akdoğan R.",
        journal:
          "PERSONALITY AND INDIVIDUAL DIFFERENCES, cilt.111, ss.19-24, 2017 (SSCI)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/006731a5-68a9-4a9a-ac72-8abb1b01ad76/a-model-proposal-on-the-relationships-between-loneliness-insecure-attachment-and-inferiority-feelings", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #F8BBD0, #EC407A)", // Custom gradient
      },
    ],
  },
  {
    category: "Diğer Dergilerde Yayınlanan Makaleler",
    items: [
      {
        year: "2022",
        title:
          "Persistence in the Face of Ecological Challenges: A Phenomenological Study of Parents of Children With Disabilities in Turkey",
        authors: "Ülker Tümlü G., Akdoğan R.",
        journal:
          "INTERNATIONAL JOURNAL FOR THE ADVANCEMENT OF COUNSELLING, cilt.44, sa.1, ss.17-38, 2022 (ESCI)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/40de8178-5caa-4771-899f-af3f5043f598/persistence-in-the-face-of-ecological-challenges-a-phenomenological-study-of-parents-of-children-with-disabilities-in-turkey", 
        gradient: "linear-gradient(135deg, #1565C0, #1976D2)", // Dark blue gradient with one tone lighter
      },
      {
        year: "2020",
        title: "Utangaçlıkta Cinsiyet Rolü Bir Risk Faktörü mü?",
        authors: "Akdoğan R., Can G.",
        journal:
          "İstanbul Üniversitesi Kadın Araştırmaları Dergisi (Online), cilt.19, ss.1-13, 2020 (Hakemli Dergi)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/78e7fcfd-3aed-46ff-9493-7e474839cf02/utangaclikta-cinsiyet-rolu-bir-risk-faktoru-mu", 
        gradient: "linear-gradient(135deg, #1565C0, #1976D2)", // Dark blue gradient with one tone lighter
      },
      {
        year: "2020",
        title:
          "İlköğretimde Cinsiyete Dayalı Mesleki Kalıp Yargılarla Mücadele: Bir Rehberlik Etkinliği Örneği",
        authors: "Çimşir E., Akdoğan R.",
        journal:
          "Kalem Uluslararası Eğitim ve İnsan Bilimleri Dergisi, cilt.10, sa.2, ss.679-703, 2020 (Hakemli Dergi)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/c298d460-a3ac-498e-bc95-4de781360ad1/ilkogretimde-cinsiyete-dayali-mesleki-kalip-yargilarlamucadele-bir-rehberlik-etkinligi-ornegi", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #1565C0, #1976D2)", // Dark blue gradient with one tone lighter
      },
      {
        year: "2019",
        title:
          "Looking at Life through a Different Window: Group Counselling for the Mothers of Disabled Children",
        authors: "Tümlü C., Akdoğan R.",
        journal:
          "INTERNATIONAL JOURNAL FOR THE ADVANCEMENT OF COUNSELLING, cilt.41, sa.2, ss.252-271, 2019 (ESCI)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/d2a55db3-b463-4498-b0ea-42ab20d8d019/looking-at-life-through-a-different-window-group-counselling-for-the-mothers-of-disabled-children", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #1565C0, #1976D2)", // Dark blue gradient with one tone lighter
      },
      {
        year: "2019",
        title:
          "Yalnızlık ve Yetersizlik Duygusu Arasındaki İlişkide Kendini Saklamanın Aracı Rolü",
        authors: "Çimşir E., Akdoğan R.",
        journal:
          "Anadolu Journal of Educational Sciences International, cilt.9, ss.111-128, 2019 (Hakemli Dergi)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/14a46c53-dd05-4d23-ad34-af7c80bc0b2d/yalnizlik-ve-yetersizlik-duygusu-arasindaki-iliskide-kendini-saklamanin-araci-rolu", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #1565C0, #1976D2)", // Dark blue gradient with one tone lighter
      },
      {
        year: "2019",
        title:
          "Otizmli Çocuk Ebeveynlerinde Evlilik Doyumunun Dinamikleri: Bir Karma Çalışma",
        authors: "Tümlü C., Akdoğan R.",
        journal:
          "Anadolu Journal of Educational Sciences International, cilt.9, sa.1, ss.129-162, 2019 (Hakemli Dergi)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/ad2ce8d6-cc5a-4766-ad52-1789cbbfc984/otizmli-cocuk-ebeveynlerinde-evlilik-doyumunun-dinamikleri-bir-karma-calisma", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #1565C0, #1976D2)", // Dark blue gradient with one tone lighter
      },
      {
        year: "2018",
        title:
          "Understanding the Contribution of Abnormal Inferiority Feelings on Insecure Attachment Through Gender and Culture: A Study of University Students Seeking Psychological Support.",
        authors: "Akdoğan R., Aydın M., Eken H.",
        journal:
          "JOURNAL OF INDIVIDUAL PSYCHOLOGY, cilt.74, sa.1, ss.96-116, 2018 (Hakemli Dergi)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/69b1ece4-4319-4b2b-966f-30e066448971/understanding-the-contribution-of-abnormal-inferiority-feelings-on-insecure-attachment-through-gender-and-culture-a-study-of-university-students-seeking-psychological-support", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #1565C0, #1976D2)", // Dark blue gradient with one tone lighter
      },
      {
        year: "2017",
        title:
          "The Process of Group Counseling Based on Reality Therapy Applied to the Parents of Children with Disabilities",
        authors: "Ülker Tümlü G., Akdoğan R., Türküm A. S.",
        journal:
          "INTERNATIONAL JOURNAL OF EARLY CHILDHOOD SPECIAL EDUCATION, cilt.9, sa.2, ss.81-98, 2017 (ESCI)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/11345728-69f0-42e5-b689-536520a5c187/the-process-of-group-counseling-based-on-reality-therapy-applied-to-the-parents-of-children-with-disabilities", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #1565C0, #1976D2)", // Dark blue gradient with one tone lighter
      },
      {
        year: "2016",
        title:
          "A Holistic Approach to Cope with Depression and Hopelessness for Parents of Special Needs Children",
        authors: "Akdoğan R.",
        journal:
          "INTERNATIONAL JOURNAL OF EARLY CHILDHOOD SPECIAL EDUCATION, cilt.8, sa.2, ss.134-150, 2016 (ESCI)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/a14cb2e1-79c4-4b78-8ed4-b859c2d2aeda/a-holistic-approach-to-cope-with-depression-and-hopelessness-for-parents-of-special-needs-children", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #1565C0, #1976D2)", // Dark blue gradient with one tone lighter
      },
      {
        year: "2014",
        title:
          "Üniversite Öğrencileri İçin Yetersizlik Duygusu Ölçeği'nin Geliştirilmesi Geçerlik ve Güvenirlik Analizleri",
        authors: "Akdoğan R., Ceyhan E.",
        journal:
          "Türk Psikolojik Danışma ve Rehberlik Dergisi, cilt.5, sa.41, ss.117-128, 2014 (Hakemli Dergi)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/2a07c3ab-6fac-43c3-9c9f-d955e42a0b55/universite-ogrencileri-icin-yetersizlik-duygusu-olcegi-nin-gelistirilmesi-gecerlik-ve-guvenirlik-analizleri-turk-psikolojik-danisma-ve-rehberlik-dergisi-5-41-117-128", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #1565C0, #1976D2)", // Dark blue gradient with one tone lighter
      },
      {
        year: "2014",
        title:
          "Adleryen Grupla Psikolojik Danışmanın Yetersizlik Duygusu ve Psikolojik Belirtiler Üzerindeki Etkisi",
        authors: "Akdoğan R., Ceyhan E.",
        journal:
          "Türk Psikolojik Danışma ve Rehberlik Dergisi, cilt.5, sa.42, ss.280-293, 2014 (Hakemli Dergi)",
        pdfLink: "https://example.com/pdf20", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #1565C0, #1976D2)", // Dark blue gradient with one tone lighter
      },
      {
        year: "2014",
        title: "Psikolojik Yardım Sürecinde Terapötik Bir Hedef Olarak İçgörü",
        authors: "Akdoğan R., Türküm A. S.",
        journal:
          "CURRENT APPROACHES IN PSYCHIATRY, cilt.6, sa.4, ss.375-388, 2014 (Hakemli Dergi)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/472a6f0b-fb53-4801-bd68-3788ef1de84f/psikolojik-yardim-surecinde-terapotik-bir-hedef-olarak-icgoru", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #1565C0, #1976D2)", // Dark blue gradient with one tone lighter
      },
      {
        year: "2011",
        title: "Terapötik İlişkide İnsan Faktörü",
        authors: "Akdoğan R., Ceyhan E.",
        journal:
          "CURRENT APPROACHES IN PSYCHIATRY, cilt.3, sa.1, ss.117-141, 2011 (Hakemli Dergi)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/d7f8aba5-2d60-4483-83bf-51dfd868a115/terapotik-iliskide-insan-faktoru", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #1565C0, #1976D2)", // Dark blue gradient with one tone lighter
      },
      {
        year: "2007",
        title:
          "Grupla Psikolojik Danışmada Bir Profesyonel ve Bir Birey Olarak Lider",
        authors: "Türküm A. S., Akdoğan R.",
        journal:
          "Türk Psikolojik Danışma ve Rehberlik Dergisi, cilt.3, sa.27, ss.123-137, 2007 (Hakemli Dergi)",
        pdfLink: "https://avesis.anadolu.edu.tr/yayin/c1573185-13bc-4c32-b1a7-5cebaa5c5196/grupla-psikolojik-danismada-bir-profesyonel-ve-bir-birey-olarak-lider", // Example link, replace with a real link
        gradient: "linear-gradient(135deg, #1565C0, #1976D2)", // Dark blue gradient with one tone lighter
      },
    ],
  },

  {
    "category": "Hakemli Kongre / Sempozyum Bildiri Kitaplarında Yer Alan Yayınlar",
    "items": [
      {
        "year": "2022",
        "title": "THE ROLE OF INFERIORITY IN THE INCREASE OF EMOTION DYSREGULATION AND INTERNET ADDICTION AMONG TURKISH YOUTH",
        "authors": "Akdoğan R., Çimşir E.",
        "journal": "International Conference on Research in Education and Social Sciences (ICRESS), Baku, Azerbaycan, 1 - 04 Temmuz 2022",
        "pdfLink": "https://example.com/pdf22"
      },
      {
        "year": "2022",
        "title": "RETURNING TO TURKEY AFTER INTERNATIONAL POSTGRADUATE STUDY AND TRANSITIONING AS A SCHOLAR: AN INTERPRETIVE PHENOMENOLOGY",
        "authors": "Çimşir E., Akdoğan R.",
        "journal": "International Conference on Research in Education and Social Sciences (ICRESS), Baku, Azerbaycan, 1 - 04 Temmuz 2022",
        "pdfLink": "https://example.com/pdf23"
      },
      {
        "year": "2019",
        "title": "Engelli Çocuğa Sahip Ebeveynlerin Psikolojik Yaşantılarına Yönelik Fenomenolojik Bir Araştırma",
        "authors": "Ülker Tümlü G., Akdoğan R.",
        "journal": "VI. International Eurasian Educational Research Congress, Ankara, Türkiye, 19 - 22 Haziran 2019",
        "pdfLink": "https://example.com/pdf24"
      },
      {
        "year": "2018",
        "title": "The Relationships Between Insight, Subjective Happiness and Relationship Satisfaction",
        "authors": "Akdoğan R., Çimşir E.",
        "journal": "International Conference on Education and Social Sciences, Kyyiv, Ukrayna, 17 - 18 Kasım 2018",
        "pdfLink": "https://example.com/pdf25"
      },
      {
        "year": "2018",
        "title": "Eğitim Fakültesi Öğrencilerinin İçgörü Düzeyleri, Akademik Branş Memnuniyetleri ve Yaşam Doyumları",
        "authors": "Çimşir E., Akdoğan R.",
        "journal": "20. Uluslararası Psikolojik Danışma ve Rehberlik Kongresi, Samsun, Türkiye, 25 - 27 Ekim 2018",
        "pdfLink": "https://example.com/pdf26"
      },
      {
        "year": "2018",
        "title": "Kendini Saklamanın Yetersizlik Duygusu ile Yalnızlık Arasındaki İlişkisel Aracılık Rolü",
        "authors": "Çimşir E., Akdoğan R.",
        "journal": "20. Uluslararası Psikolojik Danışma ve Rehberlik Kongresi, Samsun, Türkiye, 25 - 27 Ekim 2018",
        "pdfLink": "https://example.com/pdf27"
      },
      {
        "year": "2018",
        "title": "Engelli Çocuğu Kabullenme: Annelerle Nitel Bir Çalışma",
        "authors": "Tümlü C., Akdoğan R.",
        "journal": "II. Uluslararası Erken Çocuklukta Müdahale Kongresi, Ankara, Türkiye, 28 Mart - 01 Nisan 2018",
        "pdfLink": "https://example.com/pdf28"
      },
      {
        "year": "2018",
        "title": "Otizm Spektrum Bozukluğu (OSB) Üzerinde Dolaylı Bir Faktör Olarak Ailenin Psikolojik Sağlığı",
        "authors": "Tümlü C., Akdoğan R., Diken İ. H.",
        "journal": "2. Uluslararası Erken Çocuklukta Müdahale Kongresi, Antalya, Türkiye, 29 Mart 2018",
        "pdfLink": "https://example.com/pdf29"
      },
      {
        "year": "2018",
        "title": "Türkiye’deki okullarda psikolojik danışman/rehber öğretmen başına düşen öğrenci sayısı ve engelli öğrencilerin erken tanılanması",
        "authors": "Çimşir E., Akdoğan R.",
        "journal": "2. Uluslararası Erken Çocuklukta Müdahale Kongresi (ICECI 2018), Gaziantep, Türkiye, 29 Mart - 01 Nisan 2018",
        "pdfLink": "https://example.com/pdf30"
      },
      {
        "year": "2017",
        "title": "Inferiority feelings and loneliness mediate between perception of loneliness and subjective happiness",
        "authors": "Çimşir E., Akdoğan R.",
        "journal": "WEI International European Academic Conference on Education and Humanities, Rome, İtalya, 13 - 15 Kasım 2017",
        "pdfLink": "https://example.com/pdf31"
      },
      {
        "year": "2017",
        "title": "Marriage satisfaction dynamics of parents of children with autism: A mixed method study",
        "authors": "Tümlü C., Akdoğan R.",
        "journal": "WEI International European Academic Conference on Education and Humanities, Rome, İtalya, 13 - 15 Kasım 2017",
        "pdfLink": "https://example.com/pdf32"
      },
      {
        "year": "2017",
        "title": "Being a parent of a disabled child: Is it the basic problem to accept?",
        "authors": "Akdoğan R.",
        "journal": "Conference of the International Society for the Study of Individual Differences, Warszawa, Polonya, 24 - 28 Temmuz 2017",
        "pdfLink": "https://example.com/pdf33"
      },
      {
        "year": "2016",
        "title": "Grupla Psikolojik Danışmanın Engelli Çocuğa Sahip Ebeveynlerin Psikolojik Belirti Düzeyleri ile Yaşam Doyumuna Etkisi",
        "authors": "Tümlü C., Akdoğan R.",
        "journal": "VI. Ulusal PDR Uygulamaları Kongresi, Gaziantep, Türkiye, 01 Aralık 2016",
        "pdfLink": "https://example.com/pdf34"
      },
      {
        "year": "2015",
        "title": "Development of Insight Scale IS for University Students Validity and Reliability Analysis",
        "authors": "Akdoğan R., Türküm A. S.",
        "journal": "International Conference on Education Psychology and Social Sciences ICEPS August 6-8 Grand Otel Taipei Taiwan",
        "pdfLink": "https://example.com/pdf35"
      },
      {
        "year": "2015",
        "title": "A group counseling based on Reality therapy for parents with disabled children",
        "authors": "Ülker Tümlü G., Akdoğan R.",
        "journal": "37th Annual Conference of the International School Psychology Association, Sao-Paulo, Brezilya, 24 - 27 Haziran 2015",
        "pdfLink": "https://example.com/pdf36"
      },
      {
        "year": "2015",
        "title": "A Group Counseling Based On Reality Therapy On Psychological Needs Of Parents With Disabled Children",
        "authors": "Ülker Tümlü G., Akdoğan R.",
        "journal": "XII National Congress of School and Educational Psychology - ABRAPEE and 37th Annual Conference of the International School Psychology Association – ISPA. 24-27 Haziran, Sao Paulo-Brezilya",
        "pdfLink": "https://example.com/pdf37"
      },
      {
        "year": "2015",
        "title": "The Effect Of Group Counseling On Psychological Difficulties Of Caregivers With Disabled Children",
        "authors": "Akdoğan R.",
        "journal": "XII National Congress of School and Educational Psychology - ABRAPEE and 37th Annual Conference of the International School Psychology Association – ISPA. 24-27 Haziran, Sao Paulo-Brezilya",
        "pdfLink": "https://example.com/pdf38"
      },
      {
        "year": "2015",
        "title": "Engelli Çocuğa Yaklaşımda Koruyucu Tutum",
        "authors": "Akdoğan R.",
        "journal": "1. Ulusal Gelişim Psikolojisi Kongresi, Ankara, Türkiye, 26 - 28 Kasım 2015",
        "pdfLink": "https://example.com/pdf39"
      },
      {
        "year": "2014",
        "title": "Özel Eğitim Öğretmenlerinin İş Doyumu ve Mesleki Büyüme Düzeyleri Üzerine Bir Araştırma",
        "authors": "Akdoğan R.",
        "journal": "VII. Uluslararası Eğitim Bilimleri Kongresi, Bilecik, Türkiye, 17 - 19 Nisan 2014",
        "pdfLink": "https://example.com/pdf40"
      },
      {
        "year": "2014",
        "title": "Sosyal Destek ve Engelli Çocuğa Sahip Ebeveynlerin Psikolojik Sağlığı",
        "authors": "Akdoğan R.",
        "journal": "VII. Uluslararası Eğitim Bilimleri Kongresi, Bilecik, Türkiye, 17 - 19 Nisan 2014",
        "pdfLink": "https://example.com/pdf41"
      }
    ]
  },
  
  {
    "category": "Kitap & Kitap Bölümleri",
    "items": [
      {
        "year": "2021",
        "title": "Ergenlik ve ergen bireye yaklaşım",
        "authors": "Akdoğan R. (Editör), Çimşir E. (Editör)",
        "journal": "Anı Yayıncılık, Ankara, 2021",
        "pdfLink": "https://example.com/pdf21"
      },
      {
        "year": "2020",
        "title": "Pandemi Dönemi ve Ruh Sağlığı",
        "authors": "Çimşir E., Akdoğan R.",
        "journal": "PANDEMİ DÖNEMİNDE EĞİTİM: İyileştirelim, İyileşelim, Dilruba Kürüm-Yapıcıoğlu, Editör, Anı Yayıncılık, ss.1-18, 2020",
        "pdfLink": "https://example.com/pdf22"
      },
      {
        "year": "2017",
        "title": "Engellilerde Ruh Sağlığı",
        "authors": "Akdoğan R.",
        "journal": "Anadolu Üniversitesi Yayınları, Eskişehir, 2017",
        "pdfLink": "https://example.com/pdf23"
      },
      {
        "year": "2017",
        "title": "Yaşlılarda Davranış Sorunları ve Uyum",
        "authors": "Akdoğan R.",
        "journal": "Anadolu Üniversitesi Yayınları, Eskişehir, 2017",
        "pdfLink": "https://example.com/pdf24"
      },
      {
        "year": "2017",
        "title": "Ergenlik Dönemi Öğrencilere Kurumda Gelişimsel Destek",
        "authors": "Akdoğan R.",
        "journal": "Anadolu Üniversitesi Yayınları, Eskişehir, 2017",
        "pdfLink": "https://example.com/pdf25"
      },
      {
        "year": "2017",
        "title": "0-3 Yaş Çocukların Ebeveynlerine Evde Psiko-Sosyal Destek",
        "authors": "Akdoğan R.",
        "journal": "0-3 Yaş Çocuklara Evde Gelişimsel Destek, Yanardağ, Mehmet, Editör, Anadolu Üniversitesi Yayınları, Eskişehir, ss.182-202, 2017",
        "pdfLink": "https://example.com/pdf26"
      },
      {
        "year": "2017",
        "title": "0-3 Yaş Çocuklarına Kurumda Psiko-Sosyal Destek",
        "authors": "Akdoğan R.",
        "journal": "0-3 Yaş Öğrencilere Kurumda Gelişimsel Destek, Diken, İbrahim H., Editör, Anadolu Üniversitesi Yayınları, Eskişehir, ss.172-199, 2017",
        "pdfLink": "https://example.com/pdf27"
      },
      {
        "year": "2017",
        "title": "Evde Uyumu Bozucu Davranışlarla Başa Çıkma",
        "authors": "Akdoğan R.",
        "journal": "Ergenlik Dönemi Bireylere Evde Gelişimsel Destek, Düzkantar, Ayten, Editör, Anadolu Üniversitesi Yayınları, Eskişehir, ss.172-195, 2017",
        "pdfLink": "https://example.com/pdf28"
      },
      {
        "year": "2017",
        "title": "Öğrenme Psikolojisi",
        "authors": "Akdoğan R.",
        "journal": "Eğitim Psikolojisi, Bayrak, Coşkun, Editör, Anadolu Üniversitesi Yayınları, Eskişehir, ss.126-148, 2017",
        "pdfLink": "https://example.com/pdf29"
      },
      {
        "year": "2017",
        "title": "Engelli Ruh Sağlığı ve İlişkili Kavramlar",
        "authors": "Akdoğan R., Ülker Tümlü G.",
        "journal": "Engellilerde Ruh Sağlığı, Akdoğan, Ramazan, Editör, Anadolu Üniversitesi Yayınları, Eskişehir, ss.1-23, 2017",
        "pdfLink": "https://example.com/pdf30"
      },
      {
        "year": "2017",
        "title": "Çifte Dezavantaj Durumları ve Ruh Sağlığı",
        "authors": "Akdoğan R., Ülker Tümlü G.",
        "journal": "Engellilerde Ruh Sağlığı, Akdoğan, Ramazan, Editör, Anadolu Üniversitesi Yayınları, Eskişehir, ss.195-217, 2017",
        "pdfLink": "https://example.com/pdf31"
      },
      {
        "year": "2016",
        "title": "Gelişim Psikolojisinde Kullanılan Araştırma Yöntemleri",
        "authors": "Akdoğan R.",
        "journal": "Yaşlı Psikolojisi, Kurtyılmaz, Yıldız, Editör, Anadolu Üniversitesi Yayınları, Eskişehir, ss.42-59, 2016",
        "pdfLink": "https://example.com/pdf32"
      },
      {
        "year": "2016",
        "title": "Yaşlılıkta Özgüven",
        "authors": "Akdoğan R.",
        "journal": "Psikososyal Rehabilitasyon, Balkaya Çetin, Ayşen, Editör, Anadolu Üniversitesi Yayınları, Eskişehir, ss.82-102, 2016",
        "pdfLink": "https://example.com/pdf33"
      },
      {
        "year": "2014",
        "title": "Bireysel Farklılıkların Psikolojik Temelleri-I",
        "authors": "Akdoğan R., Çağlar A.",
        "journal": "Bireysel Farklılıklar, Ardıç, A. Editör, Vize Yayınları, Ankara, ss.39-54, 2014",
        "pdfLink": "https://example.com/pdf34"
      }
    ]
  }
  
];

export default publications;
