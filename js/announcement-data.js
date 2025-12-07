/**
 * Shared Announcement Data Management for Targon Restaurant
 * Handles loading/saving/updating announcement items from LocalStorage.
 */

const INITIAL_ANNOUNCEMENTS = [
    {
        id: 1,
        title: "Öğrencilere %15 İndirim",
        description: "Hafta içi 12:00 - 16:00 arası tüm öğrencilerimize öğrenci kimliklerini göstermeleri durumunda %15 indirim!",
        date: "2023-12-01",
        image: "img/ogrenci-indirimi.jpg"
    },
    {
        id: 2,
        title: "Canlı Müzik Geceleri",
        description: "Her Cuma ve Cumartesi akşamı 20:00'den itibaren canlı caz performansı eşliğinde yemeğinizin tadını çıkarın.",
        date: "2023-12-05",
        image: "img/canlı-muzik.png"
    },
    {
        id: 3,
        title: "Yeni Kış Menüsü",
        description: "Mevsimin en taze sebzeleriyle hazırlanan içinizi ısıtacak yeni kış menümüzü denediniz mi?",
        date: "2023-12-10",
        image: "img/kıs-fotosu.jpg"
    }
];

const AnnouncementManager = {
    key: 'restaurantAnnouncements',

    getAll: function() {
        let data = localStorage.getItem(this.key);
        let items = [];

        if (!data) {
            items = JSON.parse(JSON.stringify(INITIAL_ANNOUNCEMENTS));
            localStorage.setItem(this.key, JSON.stringify(items));
        } else {
            items = JSON.parse(data);
            
            // FORCE UPDATE: Ensure default items use the new images
            let changed = false;
            INITIAL_ANNOUNCEMENTS.forEach(initItem => {
                const existingItem = items.find(i => i.id === initItem.id);
                if (existingItem && existingItem.image !== initItem.image) {
                    existingItem.image = initItem.image;
                    changed = true;
                }
            });

            if (changed) {
                this.save(items);
            }
        }
        return items;
    },

    save: function(items) {
        localStorage.setItem(this.key, JSON.stringify(items));
    },

    add: function(announcement) {
        let items = this.getAll();
        // Add to beginning
        items.unshift(announcement);
        this.save(items);
        return items;
    },

    delete: function(id) {
        let items = this.getAll();
        items = items.filter(i => i.id !== id);
        this.save(items);
        return items;
    }
};
