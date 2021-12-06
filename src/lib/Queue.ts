import Queue, { JobOptions } from 'bull'
import redisConfig from '~/config/redis'

import * as jobs from '../jobs'

interface BullQueues {
  bull: Queue.Queue<any>,
  name: string,
  handle: ({ data }: { data: any })=> void
  options?: JobOptions
}

const queues: BullQueues[] = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, redisConfig),
  name: job.key,
  handle: job.handle,
  options: job.options
}))

export default {
  queues,
  add<T>(name:string, data: T) {
    const queue = queues.find((queue) => queue.name === name)

    if(!queue) return false
    return queue.bull.add(data, queue.options)
  },
  process(){
    return queues.forEach(queue => {
      queue.bull.process(queue.handle)
      queue.bull.on('failed', (job,err) => {
        console.log('job failed', queue.name, job.data)
        console.log('job failed err', err)
      })
    });
  }
}
