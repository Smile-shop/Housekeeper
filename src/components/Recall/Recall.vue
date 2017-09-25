<template>
	<div class="Recall_container">
		<p class="Recall_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>召回</span>
		</p>
		<div class="main">
			<ul>
				<li v-for="arr in Recall">
					<router-link :to="arr[1]">
						<img :src="'static/img/'+arr[0]" alt=""  class="Recall_navimg">
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './Recall.scss'
	export default {
		data(){
			return {
				Recall:[['Send-out@3x.png','/RecallNote'],
		        		    ['fill-in-record@3x.png','/RecallInformation']],
			}
		},
		methods: {
			goback(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style lang="scss" src="./Recall.scss"></style>