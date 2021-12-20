const fs = require('fs')

class Notes {

  database = "src/database.json"

  setConfig(config) {
    this.database = (config).database
  }

  add(newNote) {
    const notes = this.load()
    notes.push(newNote)
    console.log(notes)
    this.save(notes)
  }

  save(notes) {
    fs.writeFileSync(this.database, JSON.stringify(notes))
  }

  load() {
    try {
      return JSON.parse(fs.readFileSync(this.database, 'utf-8'))
    } catch (e) {
      return []
    }
  }
}

module.exports = new Notes()