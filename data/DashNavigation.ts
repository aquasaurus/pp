
export default [{
    name: `Dashboard`,
    route: `/`,
    key: `dash`,
    icon: `stonks`
},
{
    name: `Stocks`,
    route: [{
            name: "Manage Items",
            route: "/items",
            key: "items",
        },
        {
            name: "View Stocks",
            route: "/items/view",
            key: "view",
        },
    ],
    key: `Stocks`,
    icon: `grid`
},
{
    name: 'Sales',
    route: [{
        name: "Sales Invoice",
        route: "/sales/invoice",
        key: "invoice",
    }, ],
    key: 'Sales',
    icon: `file`
},
{
    name: 'Purchase',
    route: [{
        name: "Purchase Bill",
        route: "/purchase/bill",
        key: "bill",
    }, ],
    key: `purchase`,
    icon: `award`,
},
{
    name: 'POS',
    route: `/pos`,
    key: `pos`,
    icon: `book`,
},
{
    name: `Settings`,
    route: `/`,
    key: `settings`,
    icon: `settings`,
},
];