/*var customers = [
        {
            id: 1,
            fullName: "Gables Engineering",
            address1: "123 Main Street",
            address2: null,
            city: "Gables",
            state: "CA",
            zip: "32819",
            getsDiscount: true,
            discount: {
                discountId: 1,
                discountPercent: 10,
                discountName: "Employee"
            } 
        },
        {
            id: 2,
            fullName: "Piper Jet Industries",
            address1: "456 Wallaby Way",
            address2: "P.O. Box 10427",
            city: "Philadelphia",
            state: "PA",
            zip: "19121",
            getsDiscount: false,
            discount: null 
        },
        {
            id: 3,
            fullName: "Bolokada Condair",
            address1: "255 McFarland Drive",
            address2: null,
            city: "Portland",
            state: "OR",
            zip: "97204",
            getsDiscount: true,
            discount: {
                discountId: 2,
                discountPercent: 5,
                discountName: "Friends & Family"
            } 
        },
        {
            id: 4,
            fullName: "AA Airlines",
            address1: "2552 M Drive",
            address2: null,
            city: "Miami",
            state: "Fl",
            zip: "73125",
            getsDiscount: true,
            discount: {
                discountId: 2,
                discountPercent: 5,
                discountName: "Friends & Family"
            } 
        },
        {
            id: 5,
            fullName: "United Airlines",
            address1: "Lake Shore Drive",
            address2: null,
            city: "Chicago",
            state: "IL",
            zip: "54789",
            getsDiscount: true,
            discount: {
                discountId: 2,
                discountPercent: 5,
                discountName: "Friends & Family"
            } 
        },
        {
            id: 6,
            fullName: "Lufthansa Airlines",
            address1: "Davenport Ave",
            address2: null,
            city: "Jackson",
            state: "MS",
            zip: "90723",
            getsDiscount: true,
            discount: {
                discountId: 2,
                discountPercent: 5,
                discountName: "Friends & Family"
            } 
        },
        {
            id: 7,
            fullName: "Delta Airlines",
            address1: "1225 Downington Place",
            address2: null,
            city: "Pensauken",
            state: "NJ",
            zip: "60204",
            getsDiscount: true,
            discount: {
                discountId: 2,
                discountPercent: 5,
                discountName: "Friends & Family"
            } 
        },
        {
            id: 8,
            fullName: "Midwest Airlines",
            address1: "172 Runway Blvd",
            address2: null,
            city: "Denver",
            state: "CO",
            zip: "38104",
            getsDiscount: true,
            discount: {
                discountId: 2,
                discountPercent: 5,
                discountName: "Friends & Family"
            } 
        }
    ];

module.exports = customers;
*/

var customers = [
    {
        id: 1,
        fullName: "G7404-124-01",
        address1: "G",
        address2: "G7404-124-23-03",
        city: "0",
        state: "8/21/2018",
        zip: "Service Bulletin",
        doctitle: "Service Bulletin G7404-124-23-03 Incorporating MOD H - ADN ",
        /*getsDiscount: true,
        discount: {
            discountId: 1,
            discountPercent: 10,
            discountName: "Employee"
        }*/ 
    },
    {
        id: 2,
        fullName: "G7404-124-02",
        address1: "G",
        address2: "G7404-124-23-04",
        city: "2",
        state: "1/23/2017",
        zip: "Service Bulletin",
        doctitle: "Service Bulletin G7404-124-23-04 Incorporating MOD M - ADN ",
    },
    {
        id: 3,
        fullName: "G7404-124-03",
        address1: "G",
        address2: "G7404-124-23-05",
        city: "1",
        state: "8/21/2018",
        zip: "Service Bulletin",
        doctitle: "Service Bulletin G7404-124-23-05 Incorporating MOD H - ADN ", 
    },
    {
        id: 4,
        fullName: "G7404-124-04",
        address1: "J",
        address2: "G7404-124-23-02",
        city: "9",
        state: "7/12/2019",
        zip: "Installation Manual",
        doctitle: "Installation Manual For the G7404-12X Family",
    },
    {
        id: 5,
        fullName: "G7406-124-05",
        address1: "B",
        address2: "G7406-124-23-02",
        city: "19",
        state: "7/15/2019",
        zip: "Installation Manual",
        doctitle: "Installation Manual For the G7406-12X Family",
    },
    {
        id: 6,
        fullName: "G7507-124-06",
        address1: "C",
        address2: "G7507-124-22-22",
        city: "30",
        state: "9/11/2019",
        zip: "Maintenance Manual",
        doctitle: "Maintenance Manual For the G7507-12X Family",
    },
    {
        id: 7,
        fullName: "G7504-124-07",
        address1: "J",
        address2: "G7504-124-25-02",
        city: "39",
        state: "5/11/2019",
        zip: "Service Bulletin",
        doctitle: "Service Bulletin G7404-124-23-04 Incorporating MOD M - ADN",
    },
    {
        id: 8,
        fullName: "G7604-124-08",
        address1: "M",
        address2: "G7604-124-23-00",
        city: "9",
        state: "7/11/2019",
        zip: "Installation Manual",
        doctitle: "Installation Manual For the G7404-12X Family",
    },
    {
        id: 9,
        fullName: "G7804-124-09",
        address1: "J",
        address2: "G7804-124-13-01",
        city: "39",
        state: "5/11/2019",
        zip: "Installation Manual",
        doctitle: "Installation Manual For the G7804-12X Family",
    },
    {
        id: 10,
        fullName: "G7904-124-10",
        address1: "P",
        address2: "G7904-124-43-12",
        city: "25",
        state: "4/10/2019",
        zip: "Service Bulletin",
        doctitle: "Service Bulletin G7404-124-23-04 Incorporating MOD P - ADN",
    },
    {
        id: 11,
        fullName: "G8104-124-11",
        address1: "H",
        address2: "G8104-124-63-02",
        city: "18",
        state: "8/11/2019",
        zip: "Installation Manual",
        doctitle: "Installation Manual For the G8104-12X Family",
    },
    {
        id: 12,
        fullName: "G8104-124-12",
        address1: "L",
        address2: "G8104-124-23-00",
        city: "19",
        state: "6/11/2019",
        zip: "Installation Manual",
        doctitle: "Installation Manual For the G7404-12X Family",
    },
];

module.exports = customers;
