<template>
  <div class="main">
    <input v-model="original_url" placeholder="original url" />

    <button v-on:click="submitURL" class="submitBtn">SubmitURL</button>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Toasted from "vue-toasted";
import axios from "axios";
Vue.use(Toasted);

@Component
export default class SubmitURL extends Vue {
  @Prop() private msg!: string;
  private original_url: string;
  public $toast: Toasted;

  constructor() {
    super();
    this.original_url = "";
  }

  public mounted() {
    // console.log('hi');
  }

  public submitURL() {
    if (this.original_url.length === 0) {
      this.$toasted.error("Please complete all fields", {
        position: "bottom-right",
        duration: 2000
      });
    } else {
      axios({
        method: "POST",
        url: "http://localhost:8000/api/shortenurl",
        data: { original_url: this.original_url }
      }).then(
        result => {
          this.$toasted.success("URLshorten successfully", {
            position: "bottom-right",
            duration: 2000
          });
          this.original_url = '';
        },
        error => {
          console.error(error);
          this.$toasted.error("Something went wrong. Please try again!", {
        position: "bottom-right",
        duration: 2000
      });
        }
      );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.submitBtn {
  margin-top: 1rem;
}
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
