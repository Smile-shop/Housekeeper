<template>
	<div class="setRules_container">
		<p class="setRules_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click=goback>
			<span>规则制定</span>
		</p>
		<div class="main">
			<ul>
				<li v-for="arr in setRules">
					<router-link :to="arr[1]">
						<img :src="'static/img/'+arr[0]" alt=""  class="setRules_navimg">
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	//import './setRules.scss'
	export default {
		data(){
			return {
				setRules:[['responsibility (3).png','/checkForm'],
		        		    ['remind (3).png','/remind'],],
			}
		},
		methods: {
			goback(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style lang="scss" src="./setRules.scss"></style>