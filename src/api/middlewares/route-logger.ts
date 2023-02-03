import { Request, ResponseToolkit } from "@hapi/hapi"

export default function (req: Request, h: ResponseToolkit) {
  console.log(new Date().toISOString().slice(0, 19).replace('T', ' '), `${req.method.toUpperCase()} | ${req.url}`)
  return h.continue
}
