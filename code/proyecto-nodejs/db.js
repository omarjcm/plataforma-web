const db = require('mongoose')

db.Promise = global.Promise

async function connect(uri) {
    await db.connect(uri, { 
        useNewUrlParser:true, 
        useUnifiedTopology:true,
        dbName: 'ups'
     })
        .then(() => console.log('[db] Conectada con éxito.'))
        .catch(error => console.error('[db] ', error))    
}

module.exports = connect