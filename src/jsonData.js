const kpi1 = [
    {
        Category_Description: 'Today Sales',
        count: '2 for $45',
        isActive: true,
        Background_Color: 'green',
        category_icon: 'monetization'
    },
    {
        Category_Description: 'Week to Date Sales',
        count: '19 for $882.87',
        isActive: true,
        Background_Color: 'green',
        category_icon: 'monetization'
    },
    {
        Category_Description: 'Month to Date Sales',
        count: '324 for $11,282.87',
        isActive: true,
        Background_Color: 'green',
        category_icon: 'monetization'
    },
    {
        Category_Description: 'Year to Date Sales',
        count: '3249 for $102,454.87',
        isActive: true,
        Background_Color: 'green',
        category_icon: 'monetization'
    },
    {
        Category_Description: 'Total Products',
        count: '20,863',
        isActive: true,
        Background_Color: 'blue',
        category_icon: 'pencil'
    },
    {
        Category_Description: 'Unshipped Orders',
        count: '5',
        isActive: true,
        Background_Color: 'red',
        category_icon: 'warning'
    },
];

const kpi2 = {
    // Labels - days of the month
    labels: {
        week: [1, 2, 3, 4, 5, 6, 7],
        month: [
            1, 2, 3, 4, 5, 6, 7, 8,
            9, 10, 11, 12, 13, 14, 15, 16, 17,
            18, 19, 20, 21, 22, 23, 24, 25, 26,
            27, 28, 29, 30
        ],
        year: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
            12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
            24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
            36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
            48, 49, 50, 51, 52
        ]
    },
    // Data series orders count
    series: [
        {
            name: "Orders",
            count: {
                week: [12, 17, 7, 17],
                month: [
                    10, 32, 33, 10, 19, 21, 13, 2, 29,
                    20, 5, 15, 1, 8, 24, 27, 27, 14,
                    19, 12, 1, 9, 24, 31, 11, 26, 9,
                    23, 15, 24, 11
                ],
                year: [
                    10, 16, 1, 30, 7, 16, 5, 19, 4, 31, 6, 14,
                    3, 25, 2, 13, 28, 26, 20, 32, 2, 20, 7, 12,
                    13, 10, 24, 21, 30, 23, 6, 32, 17, 7, 22, 17,
                    24, 23, 2, 3, 0, 30, 17, 27, 4, 7, 21, 15,
                    11, 1, 32, 32, 31
                ]
            },
            isActive: true,
            Background_Color: 'blue'
        },
        {
            name: "Sales",
            count: {
                week: [1200, 1700, 700, 1700],
                month: [
                    2935, 2101, 1284, 1995, 2545, 1139,
                    1124, 611, 954, 2608, 1511, 2399,
                    2091, 1497, 921, 1538, 1126, 2981,
                    29, 1379, 1933, 1573, 2057, 2742,
                    1743, 943, 3015, 2660, 1242, 1339,
                    1526
                ],
                year: [
                    1902, 567, 2714, 2456, 2222, 3010, 3011,
                    2369, 1492, 1872, 2624, 984, 2378, 2532,
                    589, 2411, 2524, 2107, 401, 372, 338,
                    2939, 1981, 1189, 2445, 2829, 1671, 1137,
                    2012, 2786, 2397, 579, 179, 2366, 659,
                    1202, 2526, 1105, 1607, 2573, 2121, 2453,
                    605, 2841, 1540, 2233, 93, 1684, 3051,
                    1141, 2041, 477, 1368
                ]
            },
            isActive: true,
            Background_Color: 'red'
        },
        {
            name: "Profit",
            count: {
                week: [600, 800, 400, 100],
                month: [
                    1262, 163, 1299, 1422, 66, 1269,
                    1390, 354, 1096, 913, 489, 1105,
                    249, 1108, 284, 914, 370, 1115,
                    25, 1465, 1374, 1412, 503, 1402,
                    809, 853, 530, 1166, 771, 1543,
                    1470
                ],
                year: [
                    315, 1164, 854, 695, 934, 161, 1422, 83,
                    920, 548, 379, 642, 1046, 12, 506, 3,
                    756, 1394, 771, 54, 1156, 1488, 679, 1598,
                    520, 166, 181, 402, 1216, 517, 332, 220,
                    1510, 43, 1120, 583, 611, 1407, 787, 712,
                    1136, 1169, 1441, 169, 1246, 523, 301, 375,
                    202, 94, 357, 377, 1349
                ]
            },
            isActive: true,
            Background_Color: 'green'
        }
    ]
};

const kpi3 = [
    {
        siteOrderID: '091965',
        site: 'Amazon',
        dateOrdered: '2020-11-11',
        status: 'Unshipped'
    },
    {
        siteOrderID: '091966',
        site: 'Amazon',
        dateOrdered: '2020-11-12',
        status: 'Unshipped'
    },
    {
        siteOrderID: '091967',
        site: 'Amazon',
        dateOrdered: '2020-11-13',
        status: 'Unshipped'
    },
    {
        siteOrderID: '091968',
        site: 'Amazon',
        dateOrdered: '2020-11-13',
        status: 'Unshipped'
    },
    {
        siteOrderID: '091969',
        site: 'Amazon',
        dateOrdered: '2020-11-13',
        status: 'Unshipped'
    },
    {
        siteOrderID: '091970',
        site: 'Amazon',
        dateOrdered: '2020-11-14',
        status: 'Unshipped'
    },
    {
        siteOrderID: '091971',
        site: 'Amazon',
        dateOrdered: '2020-11-15',
        status: 'Unshipped'
    },
];

const kpi6 = [
    [
        {
            "id": "Amazon",
            "label": "AMZ",
            "value": {
                today: 16, 
                week: 84,
                month: 232,
                year: 1400
            },
            "color": "#55ae59"
        },
        {
            "id": "Augustasportswear",
            "label": "AS",
            "value": {
                today: 8, 
                week: 48,
                month: 168,
                year: 1113
            },
            "color": "#E282EF"
        },
        {
            "id": "SSActiveWear",
            "label": "SSA",
            "value": {
                today: 3, 
                week: 28,
                month: 97,
                year: 884
            },
            "color": "#19bcd0"
        },
        {
            "id": "HarpsClub",
            "label": "HC",
            "value": {
                today: 3, 
                week: 26,
                month: 102,
                year: 925
            },
            "color": "#ea4845"
        },
        {
            "id": "SanMar",
            "label": "SM",
            "value": {
                today: 5, 
                week: 35,
                month: 121,
                year: 1108
            },
            "color": "#932bad"
        },
        {
            "id": "Founderspor",
            "label": "FB",
            "value": {
                today: 2, 
                week: 23,
                month: 79,
                year: 864
            },
            "color": "#fea320"
        },
        {
            "id": "Alphabroder",
            "label": "AB",
            "value": {
                today: 4, 
                week: 30,
                month: 108,
                year: 1037
            },
            "color": "#3f51b5"
        },
    ],
    [
        {
            "id": "Amazon",
            "label": "AMZ",
            "value": {
                today: 1457, 
                week: 8211,
                month: 24050,
                year: 295640
            },
            "color": "#55ae59"
        },
        {
            "id": "Augustasportswear",
            "label": "AS",
            "value": {
                today: 1231, 
                week: 6201,
                month: 18000,
                year: 265640
            },
            "color": "#E282EF"
        },
        {
            "id": "SSActiveWear",
            "label": "SSA",
            "value": {
                today: 435, 
                week: 3004,
                month: 6240,
                year: 13260
            },
            "color": "#19bcd0"
        },
        {
            "id": "HarpsClub",
            "label": "HC",
            "value": {
                today: 321, 
                week: 2734,
                month: 5888,
                year: 10000
            },
            "color": "#ea4845"
        },
        {
            "id": "SanMar",
            "label": "SM",
            "value": {
                today: 724, 
                week: 5000,
                month: 11000,
                year: 23000
            },
            "color": "#932bad"
        },
        {
            "id": "Founderspor",
            "label": "FB",
            "value": {
                today: 289, 
                week: 2534,
                month: 5188,
                year: 9040
            },
            "color": "#fea320"
        },
        {
            "id": "Alphabroder",
            "label": "AB",
            "value": {
                today: 486, 
                week: 3034,
                month: 6788,
                year: 12000
            },
            "color": "#3f51b5"
        },
    ]
];

const PML = [
    {
        UPC: 1,
        ASIN: "B06XDD1",
        SKU: "SS-1",
        Title: "Adidas Men's Shoes",
        Brand: "Adidas",
        ProductCost: 25.62,
        unitWeight: 0.62,
        ShippingCost: 3.10,
        ReferralFee: 6.11,
        PackagingFactor: 1,
        BuyBoxPrice: 35.95,
        TotalProductCost: 32.73,
        Profit: 3.22,
        Margin: 8.96,
        ROI: 9.84,
        Variable_Margin: 0.15,
        New_Price_Factor: 44.04,
        New_Price: 44.04,
        New_Referral_Fee: 7.49,
        New_Profit: 9.93,
        New_Margin: 22.56,
        New_ROI: 29.12,
        Min_Price: 43.16,
        Max_Price: 66.06,
        Match_Buy_Box: 8.08821,
        Channel: "FBM",
        BSR: 43090,
        Quantity: 40,
        Rating: 5982
    },
    {
        UPC: 2,
        ASIN: "B06XDD2",
        SKU: "SS-2",
        Title: "Nike Men's Shoes",
        Brand: "Nike",
        ProductCost: 25.62,
        unitWeight: 0.62,
        ShippingCost: 3.10,
        ReferralFee: 6.11,
        PackagingFactor: 1,
        BuyBoxPrice: 35.95,
        TotalProductCost: 32.73,
        Profit: 3.22,
        Margin: 8.96,
        ROI: 9.84,
        Variable_Margin: 0.15,
        New_Price_Factor: 44.04,
        New_Price: 44.04,
        New_Referral_Fee: 7.49,
        New_Profit: 9.93,
        New_Margin: 22.56,
        New_ROI: 29.12,
        Min_Price: 43.16,
        Max_Price: 66.06,
        Match_Buy_Box: 8.08821,
        Channel: "FBM",
        BSR: 43090,
        Quantity: 40,
        Rating: 5982
    },
    {
        UPC: 3,
        ASIN: "B06XDD3",
        SKU: "SS-3",
        Title: "New Balance Men's Shoes",
        Brand: "New Balance",
        ProductCost: 25.62,
        unitWeight: 0.62,
        ShippingCost: 3.10,
        ReferralFee: 6.11,
        PackagingFactor: 1,
        BuyBoxPrice: 35.95,
        TotalProductCost: 32.73,
        Profit: 3.22,
        Margin: 8.96,
        ROI: 9.84,
        Variable_Margin: 0.15,
        New_Price_Factor: 44.04,
        New_Price: 44.04,
        New_Referral_Fee: 7.49,
        New_Profit: 9.93,
        New_Margin: 22.56,
        New_ROI: 29.12,
        Min_Price: 43.16,
        Max_Price: 66.06,
        Match_Buy_Box: 8.08821,
        Channel: "FBM",
        BSR: 43090,
        Quantity: 40,
        Rating: 5982
    },
    {
        UPC: 4,
        ASIN: "B06XDD1",
        SKU: "SS-1",
        Title: "Adidas Men's Shoes",
        Brand: "Adidas",
        ProductCost: 25.62,
        unitWeight: 0.62,
        ShippingCost: 3.10,
        ReferralFee: 6.11,
        PackagingFactor: 1,
        BuyBoxPrice: 35.95,
        TotalProductCost: 32.73,
        Profit: 3.22,
        Margin: 8.96,
        ROI: 9.84,
        Variable_Margin: 0.15,
        New_Price_Factor: 44.04,
        New_Price: 44.04,
        New_Referral_Fee: 7.49,
        New_Profit: 9.93,
        New_Margin: 22.56,
        New_ROI: 29.12,
        Min_Price: 43.16,
        Max_Price: 66.06,
        Match_Buy_Box: 8.08821,
        Channel: "FBM",
        BSR: 43090,
        Quantity: 40,
        Rating: 5982
    },
    {
        UPC: 5,
        ASIN: "B06XDD2",
        SKU: "SS-2",
        Title: "Nike Men's Shoes",
        Brand: "Nike",
        ProductCost: 25.62,
        unitWeight: 0.62,
        ShippingCost: 3.10,
        ReferralFee: 6.11,
        PackagingFactor: 1,
        BuyBoxPrice: 35.95,
        TotalProductCost: 32.73,
        Profit: 3.22,
        Margin: 8.96,
        ROI: 9.84,
        Variable_Margin: 0.15,
        New_Price_Factor: 44.04,
        New_Price: 44.04,
        New_Referral_Fee: 7.49,
        New_Profit: 9.93,
        New_Margin: 22.56,
        New_ROI: 29.12,
        Min_Price: 43.16,
        Max_Price: 66.06,
        Match_Buy_Box: 8.08821,
        Channel: "FBM",
        BSR: 43090,
        Quantity: 40,
        Rating: 5982
    },
    {
        UPC: 6,
        ASIN: "B06XDD3",
        SKU: "SS-3",
        Title: "New Balance Men's Shoes",
        Brand: "New Balance",
        ProductCost: 25.62,
        unitWeight: 0.62,
        ShippingCost: 3.10,
        ReferralFee: 6.11,
        PackagingFactor: 1,
        BuyBoxPrice: 35.95,
        TotalProductCost: 32.73,
        Profit: 3.22,
        Margin: 8.96,
        ROI: 9.84,
        Variable_Margin: 0.15,
        New_Price_Factor: 44.04,
        New_Price: 44.04,
        New_Referral_Fee: 7.49,
        New_Profit: 9.93,
        New_Margin: 22.56,
        New_ROI: 29.12,
        Min_Price: 43.16,
        Max_Price: 66.06,
        Match_Buy_Box: 8.08821,
        Channel: "FBM",
        BSR: 43090,
        Quantity: 40,
        Rating: 5982
    },
];

const data = {
    kpi1,
    kpi2,
    kpi3,
    kpi6,
    PML
};

export default data;