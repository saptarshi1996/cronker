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
            @click="createCron"
          >
            Create
          </v-btn>
          <v-btn
            color="primary"
            :disabled="loading"
            text
            @click="hideCreateCronDialog"
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
          <v-form ref="createForm" v-model="createFormValid">
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
            Create
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="hideCreateCronDialog"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-col cols="10">
      <v-card>
        <v-card-title>
          CRONS
          <v-spacer />
          <v-btn color="primary" text @click.prevent="showCreateCronDialog">
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
                  <td>{{ column.name }}</td>
                  <td>{{ column.requestMethod }}</td>
                  <td>{{ column.requestUrl }}</td>
                  <td>{{ column.cronExpression }}</td>
                  <td>
                    <v-icon
                      small
                      class="mr-2"
                      @click="updateCron(column)"
                    >
                      mdi-pencil
                    </v-icon>
                    <v-icon
                      small
                      @click="deleteCron(column.id)"
                    >
                      mdi-delete
                    </v-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div v-if="columns.length === 0" class="headline text-center mt-2">No Records found</div>
        </v-card-text>
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
        name: '',
        cronExpression: ''
      },
      createFormValid: false,
      requestMethodOptions: ['GET', 'POST'],
      cronUrl: 'http://localhost:8080',
      cronDialogShow: false,
      cronDialogUpdate: false,
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
      } catch (ex) {}
    },

    async createCron () {
      try {
        this.$refs.createForm.validate()
        if (this.createFormValid) {
          const { data } = await this.$axios.post(`${this.cronUrl}/cron/createCron`, this.cronCreateData)
          this.hideCreateCronDialog()
          console.log(data)
        }
      } catch (ex) {}
    },

    async updateCron (cron) {},

    async deleteCron (id) {},

    showCreateCronDialog () {
      this.cronDialogShow = true
    },

    hideCreateCronDialog () {
      this.$refs.createForm.reset()
      this.cronDialogShow = false
    }
  }
}
</script>
