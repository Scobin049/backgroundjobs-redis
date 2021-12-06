import { createBullBoard } from '@bull-board/api'
import { ExpressAdapter } from '@bull-board/express'
import { BullAdapter } from '@bull-board/api/bullAdapter';
import Queue from '~/lib/Queue'

const serverAdapter = new ExpressAdapter()

createBullBoard({
  queues: Queue.queues.map(item => new BullAdapter(item.bull)),
  serverAdapter:serverAdapter
})

serverAdapter.setBasePath('/admin/queues')

export default serverAdapter.getRouter()