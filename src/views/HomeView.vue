<!--
Copyright 2022 SpinalCom - www.spinalcom.com

This file is part of SpinalCore.

Please read all of the following terms and conditions
of the Free Software license Agreement ("Agreement")
carefully.

This Agreement is a legally binding contract between
the Licensee (as defined below) and SpinalCom that
sets forth the terms and conditions that govern your
use of the Program. By installing and/or using the
Program, you agree to abide by all the terms and
conditions stated or referenced herein.

If you do not agree to abide by these terms and
conditions, do not demonstrate your acceptance and do
not install or use the Program.
You should have received a copy of the license along
with this file. If not, see
<http://resources.spinalcom.com/licenses.pdf>.
-->

<template>
  <v-container class="_container">
    <RegisterForm v-if="!authPlatformInfo"
                  :showError="showError"
                  @submit="registerAuthPlateform" />

    <PlateformeInfo v-else
                    @delete="deletePlatform"
                    @update="updatePlatform"
                    :data="authPlatformInfo" />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import RegisterForm from "../components/RegisterForm.vue";
import PlateformeInfo from "../components/PlateformeInfo.vue";
import { mapActions, mapState } from "vuex";

export default Vue.extend({
  name: "HomeComponent",
  components: {
    RegisterForm,
    PlateformeInfo,
  },
  data() {
    return {
      showError: false,
    };
  },
  async mounted() {
    await this.getAuthPlatformInfo();
  },
  methods: {
    ...mapActions([
      "getAuthPlatformInfo",
      "_registerAuthPlatform",
      "updateAuthPlatform",
      "deleteAuthPlatform",
    ]),
    async registerAuthPlateform(data: any) {
      try {
        await this._registerAuthPlatform(data);
      } catch (error) {
        this.showError = true;
      }
    },
    async deletePlatform() {
      await this.deleteAuthPlatform();
    },
    async updatePlatform() {
      await this.updateAuthPlatform();
    },
  },
  computed: {
    ...mapState(["authPlatformInfo"]),
  },
  watch: {
    authPlatformInfo() {
      console.log("this.authPlatformInfo", this.authPlatformInfo);
      // this.authPlatformInfo
      //   ? (this.isRegistered = true)
      //   : (this.isRegistered = false);
    },
  },
});
</script>

<style scoped>
._container {
  width: 100%;
  height: 100%;
}
</style>
