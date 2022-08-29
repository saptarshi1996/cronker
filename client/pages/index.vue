<template>
  <v-row justify="center" align="center">
    <v-dialog
      v-model="cronDialogShow"
      persistent
      max-width="600"
    >
      <v-card>
        <v-card-title>
          Create CRON
        </v-card-title>
        <v-card-text class="mt-2">
          <v-form ref="createForm" v-model="createFormValid">
            <v-text-field v-model="cronCreateData.name" :rules="nameRules" label="Name" required outlined />
            <v-text-field v-model="cronCreateData.cronExpression" :rules="cronExpressionRules" label="Cron Expression" outlined />
            <v-select
              v-model="cronCreateData.requestMethod"
              dense
              :items="requestMethodOptions"
              label="Request Method"
              outlined
              :rules="[v => !!v || 'Request Method is required']"
            />
            <v-text-field v-model="cronCreateData.requestUrl" label="Request URL" :rules="requestUrlRules" outlined />
            <v-textarea v-if="cronCreateData.requestMethod === 'POST'" v-model="cronCreateData.cronPayload" label="Request Payload" outlined />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            :disabled="loading"
            text
            @click.prevent="createCron"
          >
            Create
          </v-btn>
          <v-btn
            color="primary"
            :disabled="loading"
            text
            @click.prevent="hideCreateCronDialog"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="cronDialogUpdate"
      persistent
      max-width="600"
    >
      <v-card>
        <v-card-title>
          Update CRON
        </v-card-title>
        <v-card-text class="mt-2">
          <v-form ref="updateForm" v-model="updateFormValid">
            <v-text-field v-model="cronUpdateData.name" :rules="nameRules" label="Name" required outlined />
            <v-text-field v-model="cronUpdateData.cronExpression" :rules="cronExpressionRules" label="Cron Expression" outlined />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="updateCron"
          >
            Update
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="hideUpdateCronDialog"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="cronDialogDelete"
      persistent
      max-width="600"
    >
      <v-card>
        <v-card-title>
          Delete CRON?
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="deleteCron"
          >
            Confirm
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="hideDeleteCronDialog"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-col cols="10">
      <v-card>
        <v-card-title>
          CRONS
          <v-spacer />
          <v-btn color="primary" text @click.prevent="cronDialogShow = true">
            Create
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-simple-table dense>
            <template #default>
              <thead>
                <tr>
                  <th v-for="header in headers" :key="header" class="text-left">
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody v-if="columns.length > 0">
                <tr
                  v-for="column in columns"
                  :key="column.id"
                >
                  <td>
                    <v-btn link color="primary" text small :to="`/logs/${column.id}`">
                      {{ column.name }}
                    </v-btn>
                  </td>
                  <td>{{ column.requestMethod }}</td>
                  <td>{{ column.requestUrl }}</td>
                  <td>{{ column.cronExpression }}</td>
                  <td>
                    <v-icon
                      small
                      class="mr-2"
                      @click="openUpdateCron(column)"
                    >
                      mdi-pencil
                    </v-icon>
                    <v-icon
                      small
                      @click="openDeleteCron(column.id)"
                    >
                      mdi-delete
                    </v-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div v-if="columns.length === 0" class="headline text-center mt-2">
            No Records found
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn :disabled="columns.length === 0" color="primary" text>
            Prev
          </v-btn>
          <v-btn :disabled="columns.length === 0" color="primary" text>
            Next
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      headers: ['Name', 'Request Method', 'Request Url', 'Cron Expression', 'Actions'],
      columns: [],
      cronCreateData: {
        name: '',
        requestMethod: '',
        requestUrl: '',
        cronExpression: '',
        cronPayload: ''
      },
      cronUpdateData: {
        id: null,
        name: '',
        cronExpression: ''
      },
      cronDeleteData: {
        id: null
      },
      createFormValid: false,
      updateFormValid: false,
      requestMethodOptions: ['GET', 'POST'],
      cronUrl: 'http://localhost:8080',
      cronDialogShow: false,
      cronDialogUpdate: false,
      cronDialogDelete: false,
      loading: false,
      nameRules: [
        v => !!v || 'Name is required'
      ],
      cronExpressionRules: [
        v => !!v || 'Cron Expression is required',
        v => /^(\*|([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])|\*\/([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])) (\*|([0-9]|1[0-9]|2[0-3])|\*\/([0-9]|1[0-9]|2[0-3])) (\*|([1-9]|1[0-9]|2[0-9]|3[0-1])|\*\/([1-9]|1[0-9]|2[0-9]|3[0-1])) (\*|([1-9]|1[0-2])|\*\/([1-9]|1[0-2])) (\*|([0-6])|\*\/([0-6]))$/.test(v) || 'Cron Expression must be valid'
      ],
      requestUrlRules: [
        v => !!v || 'Cron Expression is required',
        v => /^((http(s?)?):\/\/)?([wW]{3}\.)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/.test(v) || 'Request Url must be valid'
      ],
      requestPayloadRules: [
        v => JSON.parse(v) || 'Request payload must be a valid JSON'
      ]
    }
  },

  async created () {
    await this.getCronList()
  },

  methods: {
    async getCronList () {
      try {
        const { data } = await this.$axios.get(`${this.cronUrl}/cron/cronList`)
        this.columns = data.data
      } catch (ex) {
        this.$notify(ex.response ? ex.response.message : ex.message)
      }
    },

    async createCron () {
      try {
        this.$refs.createForm.validate()
        if (this.createFormValid) {
          await this.$axios.post(`${this.cronUrl}/cron/createCron`, this.cronCreateData)
          this.hideCreateCronDialog()
          this.$notify('Cron created successfully')
          await this.getCronList()
        }
      } catch (ex) {
        this.$notify(ex.response ? ex.response.message : ex.message)
      }
    },

    openUpdateCron (cron) {
      this.cronDialogUpdate = true
      this.cronUpdateData = {
        id: cron.id,
        name: cron.name,
        cronExpression: cron.cronExpression
      }
    },

    openDeleteCron (id) {
      this.cronDialogDelete = true
      this.cronDeleteData = { id }
    },

    async updateCron () {
      try {
        this.$refs.updateForm.validate()
        if (this.updateFormValid) {
          const { data } = await this.$axios.put(`${this.cronUrl}/cron/updateCron/${this.cronUpdateData.id}`, this.cronUpdateData)
          this.hideUpdateCronDialog()
          this.$notify(data.message)
          await this.getCronList()
        }
      } catch (ex) {
        this.$notify(ex.response ? ex.response.message : ex.message)
      }
    },

    async deleteCron () {
      try {
        const { data } = await this.$axios.delete(`${this.cronUrl}/cron/deleteCron/${this.cronDeleteData.id}`)
        this.hideDeleteCronDialog()
        this.$notify(data.message)
        await this.getCronList()
      } catch (ex) {
        this.$notify(ex.response ? ex.response.message : ex.message)
      }
    },

    hideCreateCronDialog () {
      this.$refs.createForm.reset()
      this.cronDialogShow = false
    },

    hideUpdateCronDialog () {
      this.$refs.updateForm.reset()
      this.cronDialogUpdate = false
    },

    hideDeleteCronDialog () {
      this.cronDeleteData = {
        id: null
      }
      this.cronDialogDelete = false
    }
  }
}
</script>
