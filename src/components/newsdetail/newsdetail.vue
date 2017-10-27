<template>
	<div class="newsdetail_container">
		<p class="newsdetail_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>信息详情</span>
		</p>
		<div class="main">
			<el-collapse>
			  <el-collapse-item :title= "arr.product_name" v-for='arr in data'>
			  	<div>产品名称:{{arr.product_name}}</div>
			    <div>产品备案号:{{arr.apply_sn}}</div>
			    <div>产品批次:{{arr.batch_id}}</div>
			    <div>产品失效日期:{{arr.expire_date.split(' ')[0]}}</div>
			    <div>产品库存量:{{arr.stock}}</div>
			  </el-collapse-item>
			</el-collapse>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './newsdetail.scss'
	export default {
		data(){
			return {
				data:'',
			}
		},
		created(){
			this.$http.get(baseUrl+'/getAlarmDetail').then((res)=>{
				console.log(res)
              	if(res.data.retCode === 0){
          			this.data = res.data.data;
              	}else{
              		this.$messagebox.alert(res.data.retMessage);
              	}
	          },(err)=>{
	          	console.log(err)
	          });
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
		}
	}
</script>
<style lang="scss" src="./newsdetail.scss"></style>