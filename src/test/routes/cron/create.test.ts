import Lab from '@hapi/lab'
import { expect } from '@hapi/code'
import { Server } from '@hapi/hapi'

import sinon from 'sinon'

import getServer from '../../../api/setup/application'

import cron from '../../../dao/cron'

const lab = Lab.script()
const { describe, it, beforeEach, afterEach } = lab

export { lab }

describe('POST /api/cron', () => {
  let server: Server

  beforeEach(async () => {
    server = await getServer()
  })

  afterEach(async () => {
    sinon.restore()
    await server.stop()
  })

  it('responds with 400 for invalid payload', async () => {

    const res = await server.inject({
      method: 'POST',
      url: '/api/cron',
      payload: {},
    })

    const result = JSON.parse(res.payload)
    expect(result.message).to.equal('Invalid request payload input')

  })

  it('responds with 200 for a cron created', async () => {

    sinon.stub(cron, 'createCron').resolves({
      id: 1,
      name: 'New Cron',
      cron_expression: '',
    })

    const res = await server.inject({
      method: 'POST',
      url: '/api/cron',
      payload: {
        name: 'New cron',
        method: 'POST',
        url: '/new_url',
        cron_expression: '* * * *',
      }
    })

    const result = JSON.parse(res.payload)
    expect(result.message).to.equal('Cron created successfully')
  })
})
