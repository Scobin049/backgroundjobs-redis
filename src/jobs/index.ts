import { JobOptions } from "bull";

export {default as RegistrationMail} from "./RegistrationMail"

export interface BullJobs<T> {
  key: string,
  handle: ({ data }: { data: T })=> void
  options?: JobOptions
}
