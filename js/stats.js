
document.addEventListener('DOMContentLoaded', function() {
    
   
    Chart.defaults.color = '#666565';
    Chart.defaults.font.family = "'Nunito', sans-serif";

    
    const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(ctxRevenue, {
        type: 'bar',
        data: {
            labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
            datasets: [{
                label: 'Aylık Ciro (TL)',
                data: [120000, 135000, 125000, 140000, 160000, 190000, 220000, 210000, 180000, 150000, 140000, 175000],
                backgroundColor: 'rgba(254, 161, 22, 0.7)', // Primary Color with opacity
                borderColor: 'rgba(254, 161, 22, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Aylık Ciro'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    
    const ctxTraffic = document.getElementById('trafficChart').getContext('2d');
    const trafficChart = new Chart(ctxTraffic, {
        type: 'line',
        data: {
            labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
            datasets: [{
                label: 'Günlük Ziyaretçi',
                data: [150, 180, 160, 200, 280, 350, 320],
                fill: true,
                backgroundColor: 'rgba(15, 23, 43, 0.2)', 
                borderColor: 'rgba(15, 23, 43, 1)',
                tension: 0.4 
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    const ctxCategory = document.getElementById('categoryChart').getContext('2d');
    const categoryChart = new Chart(ctxCategory, {
        type: 'doughnut',
        data: {
            labels: ['Ana Yemekler', 'Kahvaltı', 'Tatlılar', 'İçecekler', 'Başlangıçlar'],
            datasets: [{
                label: 'Satış Payı',
                data: [40, 25, 15, 12, 8],
                backgroundColor: [
                    'rgba(254, 161, 22, 0.9)', 
                    'rgba(15, 23, 43, 0.9)', 
                    'rgba(200, 200, 200, 0.9)',
                    'rgba(50, 50, 50, 0.9)',
                    'rgba(254, 161, 22, 0.4)'
                ],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });

});
