import React from 'react';

const announcements = [
  {
    title: "Yaz Dönemi Tatili Başlangıcı",
    date: "01 Eylül 2024",
    description: "Üniversitemizde yaz dönemi tatili 1 Eylül 2024 tarihinde başlayacaktır. Yeni dönem kayıtları için lütfen son başvuru tarihlerini kontrol ediniz.",
    isActive: false
  },
  {
    title: "Yapay Zeka Çalıştayı",
    date: "15 Ekim 2024",
    description: "Yapay zeka ve makine öğrenimi alanındaki en son gelişmelerin ele alınacağı çalıştayımız 15 Ekim'de düzenlenecektir. Katılım için kayıt zorunludur.",
    isActive: true
  },
  {
    title: "Kariyer Günleri Etkinliği",
    date: "22 Kasım 2024",
    description: "Üniversitemizde gerçekleştirilecek olan Kariyer Günleri etkinliğine tüm öğrencilerimiz davetlidir. Bu etkinlikte sektörün önde gelen firmalarıyla tanışma fırsatı bulabilirsiniz.",
    isActive: false
  },
  {
    title: "Final Sınavları Başlangıcı",
    date: "10 Aralık 2024",
    description: "Güz dönemi final sınavları 10 Aralık 2024 tarihinde başlayacaktır. Sınav programı için lütfen fakülte web sitesini ziyaret ediniz.",
    isActive: true
  },
];

const Announcement = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '2rem' }}>
      <h1 className="text-3xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        <span className="text-gray-500">Duyurular</span>
      </h1>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {announcements.map((announcement, index) => (
          <div
            key={index}
            style={{
              background: announcement.isActive ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'linear-gradient(135deg, #d1d5db, #9ca3af)',
              color: announcement.isActive ? '#ffffff' : '#4b5563',
              padding: '1.5rem',
              borderRadius: '8px',
              marginBottom: '1rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s',
              transform: 'scale(1)',
              cursor: 'pointer',
              position: 'relative'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {announcement.isActive && (
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: '#22c55e',
                color: '#ffffff',
                padding: '5px 10px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{ marginRight: '5px' }}>✓</span> Aktif Duyuru
              </div>
            )}
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{announcement.title}</h2>
            <p style={{ fontSize: '1rem', margin: '0.5rem 0', fontWeight: 'bold', color: announcement.isActive ? '#ffffff' : '#4b5563' }}>
              {announcement.date}
            </p>
            <p style={{ color: announcement.isActive ? '#ffffff' : '#6b7280' }}>{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Announcement;
