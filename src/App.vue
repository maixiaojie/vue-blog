<template>
	<v-bar wrapper="wrapper"
	:style="{'height': wHeight + 'px'}"
        vBar=""
        vBarInternal=""
        hBar=""
        hBarInternal="">
        <div id="app">
	    	<router-view/>
	    	<vue-progress-bar></vue-progress-bar>
	  	</div>
    </v-bar>
  
</template>

<script>
import VBar from 'v-bar'
import tools from './util/tools.js'
export default {
  	name: 'app',
  	components: { VBar },
  	data() {
  		return {

  		}
  	},
  	computed: {
		wHeight() {
			return tools.getWHeight()
		}
  	},
  	created() {
  	},
  	mounted() {
  	},
  	methods: {

  	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
 .wrapper {
    /*height: 300px;*/
    width: 100%;
}
</style>
