export default [
  {
    name: `Home`,
    route: `/`,
    key: `home`,
  },
  {
    name: `About Us`,
    route: [{
      name: `Home`,
      route: `/`,
      key: `home1`,
    }],
    key: `about`,
  },

  {
    name: `Volunteers`,
    route: `/#volunteer`,
    key: `volunteer`,
  },

  {
    name: `Leaders`,
    route: `/#leaders`,
    key: `leaders`,
  },
  {
    name: `Events`,
    route: `/#events`,
    key: `events`,
  },
  {
    name: `Complaint`,
    route: `/#complaint`,
    key: `complaint`,
  },
];
