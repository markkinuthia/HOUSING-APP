module.exports = {
  contracts_build_directory: './client/src/contracts',
  networks: {
    development: {
     host: "192.168.80.1",
     port: 7545,
     network_id: "*",
    },
  },

  compilers: {
    solc: {
      version: "0.8.9"
    }
  }
};
