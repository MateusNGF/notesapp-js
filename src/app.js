const yargs = require('yargs')
const notes = require('./note')

yargs.version('1.1.0')
notes.setConfig({ database: "../database.json" })


yargs.command({
  command: 'add',
  describe: "adiciona uma nova nota.",
  builder: {
    title: {
      describe: "titulo da nota",
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: "Descrição da nota.",
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (args) {
    notes.add({
      title: args.title,
      body: args.body
    })
  }
})


yargs.parse()