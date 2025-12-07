/**
 * Shared Reservation Data Management for Targon Restaurant
 * Handles loading/saving/updating reservation items from LocalStorage.
 */

const INITIAL_RESERVATIONS = [
    {
        id: 1701950000000,
        name: "Ahmet Yılmaz",
        email: "ahmet@mail.com",
        date: "01.12.2023 19:30",
        people: 4,
        message: "Deniz kenarı masa lütfen.",
        status: "pending" // pending, approved, cancelled
    },
    {
        id: 1701951000000,
        name: "Ayşe Kaya",
        email: "ayse@mail.com",
        date: "02.12.2023 20:00",
        people: 2,
        message: "Yıldönümü kutlaması.",
        status: "approved"
    }
];

const ReservationManager = {
    key: 'restaurantReservations',

    getAll: function() {
        let data = localStorage.getItem(this.key);
        if (!data) {
            data = JSON.stringify(INITIAL_RESERVATIONS);
            localStorage.setItem(this.key, data);
        }
        return JSON.parse(data);
    },

    save: function(items) {
        localStorage.setItem(this.key, JSON.stringify(items));
    },

    add: function(reservation) {
        let items = this.getAll();
        // Add to beginning of list
        items.unshift(reservation);
        this.save(items);
        return items;
    },

    updateStatus: function(id, newStatus) {
        let items = this.getAll();
        const index = items.findIndex(i => i.id === id);
        if (index !== -1) {
            items[index].status = newStatus;
            this.save(items);
            return true;
        }
        return false;
    },

    delete: function(id) {
        let items = this.getAll();
        items = items.filter(i => i.id !== id);
        this.save(items);
        return items;
    }
};
