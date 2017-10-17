<template>
	<div class="QualityTracking_container">
		<p class="QualityTracking_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>质量追踪</span>
		</p>
		<div class="main">
			<ul>
				<li v-for="arr in QualityTracking">
					<router-link :to="arr[1]">
						<img :src="'static/img/'+arr[0]" alt=""  class="QualityTracking_navimg">
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './QualityTracking.scss'
	export default {
		data(){
			return {
				QualityTracking:[['bad@3x.png','/FillDirections'],
		        		    	 ['recall@3x.png','/Recall']],
			}
		},
		methods: {
			goback(){
				this.$router.push({name:'index'})
			}
		}
	}
</script>
<style lang="scss" src="./QualityTracking.scss"></style>