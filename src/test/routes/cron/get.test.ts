import Lab from '@hapi/lab'
import { expect } from '@hapi/code'
import { Server } from '@hapi/hapi'

import sinon from 'sinon'

import getServer from '../../../api/setup/application'

import cron from '../../../dao/cron'

const lab = Lab.script()
const { describe, it, beforeEach, afterEach } = lab

export { lab }

describe('GET /api/cron/{cron_id}', () => {
  let server: Server

  beforeEach(async () => {
    server = await getServer()
  })

  afterEach(async () => {
    sinon.restore()
    await server.stop()
  })

  it('responds with 404 for cron not found', async () => {

    sinon.stub(cron, 'getCron').resolves(undefined)

    const res = await server.inject({
      method: 'GET',
      url: '/api/cron/1',
    })

    const result = JSON.parse(res.payload)
    expect(result.message).to.equal('Cron does not exists')
  })

  it('responds with 200 for cron found', async () => {

    const testObject = {
      id: 1,
      name: 'TEST',
      method: 'GET',
      url: '/',
      cron_expression: '* * * * *',
      headers: '',
      payload: '',
    }

    sinon.stub(cron, 'getCron').resolves(testObject)

    const res = await server.inject({
      method: 'GET',
      url: '/api/cron/1',
    })

    const result = JSON.parse(res.payload)
    expect(result).to.equal({ cron: testObject })
  })
})
