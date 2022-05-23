import { PgPromiseConnectionAdapter } from './infra/database'
import { ExpressAdapter } from './infra/http/ExpressAdapter'
import { AquariumRepositoryDatabase } from './infra/repository/database'
require('dotenv').config()

const http = new ExpressAdapter()
const connection = new PgPromiseConnectionAdapter()

http.on('get', '/aquariums', async () => {
  const aquariumRepository = new AquariumRepositoryDatabase(connection)
  const output = await aquariumRepository.list()
  return output
})

const port = Number(process.env.PORT) || 3000
http.listen(port)
console.log('Running on port ' + process.env.PORT)
