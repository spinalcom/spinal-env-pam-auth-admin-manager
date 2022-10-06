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
  <div class="card-container">
    <v-card class="card">
      <div class="icon">
        <v-icon size="100px"
                color="success">mdi-checkbox-marked-circle-outline</v-icon>

        <div class="message">
          Une plateforme d'authentification a dejà été enregistée
        </div>
      </div>

      <div class="item-list">
        <!-- <ListItem :title="'Nom de la plateforme d\'authentification'"
                  :subTitle="data.bosName" /> -->

        <ListItem :title="'URL de la plateforme d\'authentification'"
                  :subTitle="data.urlAdmin" />

        <ListItem :title="'Clé d\'enregistrement'"
                  :subTitle="data.registerKey" />

        <ListItem :title="'Token de la plateforme d\'authentification'"
                  :subTitle="data.tokenBosAdmin" />
      </div>

      <v-card-actions class="d-flex justify-end">
        <v-btn color="error"
               @click="deletePlatform"
               text>Supprimer La plateforme</v-btn>

        <v-btn color="success"
               @click="updatePlatform"
               text>Envoyer les nouvelles données</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import ListItem from "./listItem.vue";

export default {
  name: "PlateformeInfo",
  components: { ListItem },
  props: ["data"],
  methods: {
    deletePlatform() {
      this.$emit("delete");
    },
    updatePlatform() {
      this.$emit("update");
    },
  },
};
</script>
<style scoped lang="scss">
.card-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-container .card {
  width: 50%;
  padding: 15px;
  .icon {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    .message {
      font-size: 1em !important;
      color: #2e7d32;
    }
  }

  .item-list {
    margin-bottom: 30px;
  }
}
</style>
