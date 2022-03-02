<template>
	<div class="view-div">
		<h2>入力画面2</h2>
		<input type="text" v-model="input2"><br/>
		<button v-on:click="next">確認</button>		
	</div>


</template>

<script>
export default {
  name: 'Entry02',
  data: () => ({
	input2 : ''
  }),
  mounted () {
	//this.input2 = this.$store.state.input2
  },
  methods: {
	next: function(){
		this.$store.dispatch('setInput2', this.input2)
		this.$router.push( "/confirm" )
	}
  }
}
</script>