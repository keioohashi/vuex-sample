<template>
	<div class="view-div">
		<h2>入力画面1</h2>
		<input type="text" v-model="input1"><br/>
		<button v-on:click="next">次へ</button>
	</div>
</template>
<script>
// @ is an alias to /src

	export default {
		name: 'Entry01',
		data: () => ({
			input1 : ''
		}),
		mounted () {
			//this.$store.dispatch('setId', this.$route.params.id )
			//this.$store.dispatch('setInput1', 'test1')
			//this.$store.dispatch('setInput2', 'test2')

			this.input1 = this.$store.state.input1
		},
		methods: {
			next: function(){
				this.$store.dispatch('setInput1', this.input1)
				this.$router.push( "/entry02" )
			}
		}
	}
</script>