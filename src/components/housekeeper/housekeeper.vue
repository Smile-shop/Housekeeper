<template>
	<div class="housekeeper_container">
		<p class="housekeeper_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click=goback>
			<span>激活管家</span>
		</p>
		<div class="main">
			<ul>
				<li v-for="arr in housekeeper">
					<router-link :to="arr[1]">
						<img :src="'static/img/'+arr[0]" alt=""  class="housekeeper_navimg">
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './housekeeper.scss'
	export default {
		data(){
			return {
				housekeeper:[['zhidujianshe@3x.png','/systemConstruction'],
		        		    ['QualityandSafety (3).png','/jobManagement'],
		        		    ['Purchase (3).png','/equipmentRegistration'],
		        		    ['Operating (3).png','/setRules'],
		        		    ['track (3).png','/EditInformation']],
			}
		},
		methods: {
			goback(){
				this.$router.push({name:'index'})
			}
		}
	}
</script>
<style lang="scss" src="./housekeeper.scss"></style>