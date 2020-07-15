<template>
<div>
  <p v-if="!URLs.length">No URLs yet</p>

  <ul v-if="URLs.length > 0" id="urls">
  <li v-for="url in URLs" :key="url._id">
    Original URL: <a>{{url.original_url}}</a>
    <br />
   Converted URL: <a>{{url.converted_url}}</a>
   <br />
   <br />
  </li>
</ul>
</div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import axios from "axios";

@Component
export default class CurrentURLs extends Vue {
  private URLs: [];

  constructor() {
    super();
    this.URLs = [];
  }

  public mounted() {
    axios({
        method: "GET",
        url: "http://localhost:8000/api/shortenurls",
      }).then(
        result => {
          this.URLs = result.data.urls;
        },
        error => {
          console.error(error);
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

