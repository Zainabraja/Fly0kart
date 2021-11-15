const AccessControl = require("accesscontrol");

let grantsObject = {
  admin: {
    adminPortal: {
      "create:any": ["*"],
      "read:any": ["*"],
      "update:any": ["*"],
      "delete:any": ["*"],
    },
  },
  user: {},
};

const roles = new AccessControl(grantsObject);

module.exports = { roles };
