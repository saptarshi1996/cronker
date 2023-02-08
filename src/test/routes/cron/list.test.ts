import Lab from '@hapi/lab'
import { expect } from '@hapi/code'
import { Server } from '@hapi/hapi'

import sinon from 'sinon'

import getServer from '../../../api/setup/application'

import cron from '../../../dao/cron'

const lab = Lab.script()
const { describe, it, beforeEach, afterEach } = lab

export { lab }

describe('GET /api/cron', () => {
  let server: Server

  beforeEach(async () => {
    server = await getServer()
  })

  afterEach(async () => {
    sinon.restore()
    await server.stop()
  })

  it('responds with 200 with list of cron', async () => {

    sinon.stub(cron, 'listCron').resolves([])

    const res = await server.inject({
      method: 'GET',
      url: '/api/cron',
    })

    const result = JSON.parse(res.payload)
    expect(result.cron).to.array()
  })
})
