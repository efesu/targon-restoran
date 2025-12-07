/**
 * Shared Menu Data Management for Targon Restaurant
 * Handles loading/saving menu items from LocalStorage.
 */

const INITIAL_MENU_DATA = [
     // Kahvaltılıklar (8 Items)
     { 
        id: 1, 
        name: "Serpme Kahvaltı", 
        category: "Kahvaltı", 
        price: 450, 
        img: "img/serpme-kahvalti.jpg",
        description: "Zengin çeşitlerle hazırlanmış geleneksel Türk kahvaltısı"
    },
     { 
        id: 2, 
        name: "Eggs Benedict", 
        category: "Kahvaltı", 
        price: 280, 
        img: "img/eggs-benedict.jpg",
        description: "Hollandaise soslu, İngiliz muffin üzerinde poşe yumurta"
    },
     { 
        id: 3, 
        name: "Croissant & French Toast", 
        category: "Kahvaltı", 
        price: 220, 
        img: "img/croissant-french-toast.jpeg",
        description: "Tereyağlı kruvasan ve vanilyalı Fransız tostu"
    },
     { 
        id: 4, 
        name: "Avokado Toast", 
        category: "Kahvaltı", 
        price: 240, 
        img: "img/avokado-toast.jpg",
        description: "Ekşi mayalı ekmek üzerinde avokado, çırpılmış yumurta ve mikro yeşillikler"
    },
     { 
        id: 5, 
        name: "Feta & Zeytin Tabağı", 
        category: "Kahvaltı", 
        price: 180, 
        img: "img/feta-zeytin-tabagi.jpeg",
        description: "Ege usulü taze feta peyniri ve özel zeytin çeşitleri"
    },
     { 
        id: 6, 
        name: "Pancake Stack", 
        category: "Kahvaltı", 
        price: 260, 
        img: "img/pancake-stack.jpg",
        description: "Akçaağaç şurubu ve taze meyvelerle servis edilen yumuşak pancake"
    },
     { 
        id: 7, 
        name: "Granola & Yogurt Bowl", 
        category: "Kahvaltı", 
        price: 190, 
        img: "img/granola-yogurt-bowl.jpeg",
        description: "Ev yapımı granola, Yunan yoğurdu ve mevsim meyveleri"
    },
     { 
        id: 8, 
        name: "Smoked Salmon Platter", 
        category: "Kahvaltı", 
        price: 320, 
        img: "img/smoked-salmon-platter.jpg",
        description: "Norveç somonu, krem peynir, kapari ve kırmızı soğan"
    },

     // Atıştırmalıklar (8 Items)
     { 
        id: 9, 
        name: "Soğan Halkası Tabağı", 
        category: "Atıştırmalıklar", 
        price: 180, 
        img: "img/sogan-halkası-tabagi.jpg",
        description: "Çıtır kızartılmış soğan halkaları, özel sos ile"
    },
     { 
        id: 10, 
        name: "Bruschetta", 
        category: "Atıştırmalıklar", 
        price: 220, 
        img: "img/bruschetta.jpg",
        description: "Taze domates, fesleğen ve mozzarella ile İtalyan usulü"
    },
     { 
        id: 11, 
        name: "Escargot", 
        category: "Atıştırmalıklar", 
        price: 320, 
        img: "img/escargot.jpeg",
        description: "Sarımsaklı tereyağında pişirilmiş Fransız salyangoz"
    },
     { 
        id: 12, 
        name: "Carpaccio", 
        category: "Atıştırmalıklar", 
        price: 380, 
        img: "img/carpaccio.jpeg",
        description: "İnce dilimlenmiş çiğ dana eti, roka ve parmesan ile"
    },
     { 
        id: 13, 
        name: "Mozzarella Sticks", 
        category: "Atıştırmalıklar", 
        price: 240, 
        img: "img/mozarella-sticks.jpg",
        description: "Çıtır kaplamalı mozzarella çubukları, marinara sos ile"
    },
     { 
        id: 14, 
        name: "Truffle Arancini", 
        category: "Atıştırmalıklar", 
        price: 280, 
        img: "img/truffle-arancini.jpg",
        description: "Trüf yağı ile aromalandırılmış risotto topları"
    },
     { 
        id: 15, 
        name: "Patates Graten", 
        category: "Atıştırmalıklar", 
        price: 200, 
        img: "img/patates-graten.jpg", 
        description: "Kremalı beşamel soslu, Fransız usulü patates"
    },
     { 
        id: 16, 
        name: "Antipasto Tabağı", 
        category: "Atıştırmalıklar", 
        price: 350, 
        img: "img/antipasto-tabagi.jpg",
        description: "İtalyan şarküteri, peynirler ve zeytin çeşitleri"
    },

     // Ana Yemekler (8 Items)
     { 
        id: 17, 
        name: "Cafe de Paris Soslu Tavuk", 
        category: "Ana Yemekler", 
        price: 420, 
        img: "img/cafe-de-paris.jpg",
        description: "Izgara tavuk göğsü, özel Cafe de Paris sosu ve yan garnitürler"
    },
     { 
        id: 18, 
        name: "Beef Wellington", 
        category: "Ana Yemekler", 
        price: 680, 
        img: "img/beef-wellington.png",
        description: "Filo hamuru içinde dana fileto, mantar duxelles ve foie gras"
    },
     { 
        id: 19, 
        name: "Osso Buco", 
        category: "Ana Yemekler", 
        price: 520, 
        img: "img/osso-buco.jpg",
        description: "Yavaş pişirilmiş dana incik, safranlı risotto Milanese ile"
    },
     { 
        id: 20, 
        name: "Duck Confit", 
        category: "Ana Yemekler", 
        price: 580, 
        img: "img/duck-confit.webp",
        description: "Fransız usulü ördek butu, portakal sosu ve patates graten"
    },
     { 
        id: 21, 
        name: "Lamb Chops", 
        category: "Ana Yemekler", 
        price: 550, 
        img: "img/lamb-chops.webp",
        description: "Izgara kuzu pirzola, nane sosu ve sebze garnitürü"
    },
     { 
        id: 22, 
        name: "Sea Bass", 
        category: "Ana Yemekler", 
        price: 480, 
        img: "img/sea-bass.jpg",
        description: "Fırında levrek, limon tereyağı sosu ve taze sebzeler"
    },
     { 
        id: 23, 
        name: "Risotto ai Funghi", 
        category: "Ana Yemekler", 
        price: 380, 
        img: "img/risotto-ai-funghi.jpeg",
        description: "Trüf mantarlı İtalyan risotto, parmesan ve taze otlar"
    },
     { 
        id: 24, 
        name: "Wagyu Steak", 
        category: "Ana Yemekler", 
        price: 850, 
        img: "img/wagyu-steak.jpeg",
        description: "Japonya'dan özel ithal Wagyu eti, truffle butter ile"
    }
];

const MenuManager = {
    key: 'adminMenuItems',

    getAll: function() {
        let data = localStorage.getItem(this.key);
        // Force update if data lacks descriptions (migration check)
        if (!data || (JSON.parse(data).length > 0 && !JSON.parse(data)[0].description)) {
            data = JSON.stringify(INITIAL_MENU_DATA);
            localStorage.setItem(this.key, data);
        }
        return JSON.parse(data);
    },

    save: function(items) {
        localStorage.setItem(this.key, JSON.stringify(items));
    },

    addItem: function(newItem) {
        let items = this.getAll();
        items.push(newItem);
        this.save(items);
        return items;
    },

    deleteItem: function(id) {
        let items = this.getAll();
        items = items.filter(i => i.id !== id);
        this.save(items);
        return items;
    },

    ensureConsistency: function() {
        return this.getAll();
    }
};
