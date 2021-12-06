import Bull from "bull"

const Redis:Bull.QueueOptions = {redis: {
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT)
}}

export default Redis