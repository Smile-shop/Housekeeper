<template>
	<div class="PurchaseLie_container">
		<p class="PurchaseLie_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click='goback'>
			<span>进货管理</span>
		</p>
		<div class="main">
			<ul>
				<li v-for="arr in PurchaseLie">
					<router-link :to="arr[1]">
						<img :src="'static/img/'+arr[0]" alt=""  class="PurchaseLie_navimg">
					</router-link>
				</li>
				<span>{{num}}</span>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './PurchaseLie.scss'
	export default {
		data(){
			return {
				PurchaseLie:[['add.png','/Purchase'],
		        		    ['workstatus.png','/workStatus'],
		        		    ],
		        num:'',
			}
		},
		created(){
			this.$http.post(baseUrl+'/getPRejectCount').then((res)=>{
				console.log(res)
              	if(res.data.retCode === 0){
              		this.num = res.data.data.count;
              	}else{
              		this.$messagebox.alert(res.data.retMessage);
              	}
	          },(err)=>{
	              console.log(err);
	          });
		},
		methods: {
			goback(){
				this.$router.push({name:'index'})
			}
		}
	}
</script>
<style lang="scss" src="./Purchase.scss"></style>