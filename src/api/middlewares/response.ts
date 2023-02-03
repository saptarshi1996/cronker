import { Request, ResponseToolkit } from "@hapi/hapi"

export default function (req: Request, h: ResponseToolkit) {
  if (req.url.pathname.includes('documentation') || req.url.pathname.includes('swagger')) {
    return h.continue
  } else {
    const result: any = req.response
    if (result.source) {
      
      return h.response({
        ...result.source,
      }).code(200)

    } else if (result.output) {

      if (result.statusCode && result.statusCode === 500) {
        console.log(result.stack)
      }

      return h.response({
        message: result.message,
      }).code(result.statusCode || 500)
    
    } else {
      return h.continue
    }
  }
}
