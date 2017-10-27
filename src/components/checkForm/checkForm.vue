<template>
	<div class="checkForm_container">
		<p class="checkForm_text">
			<img src="../../assets/imgs/arrow (3).png" class="checkFormback" @click=goback>
			<span>企业主体责任履约自查表单</span>
		</p>
		<label for="companyname1" class="q">岗位：</label>
		<input type="text" id="companyname1" placeholder="" class="companyname" v-model="gw"><br>
		<label for="companyname2" class="j">表单：</label>
		<input type="text" id="companyname2" placeholder="" class="companyname" v-model="bd"><br>
		<label for="" class="f">频率：</label>
		<el-select v-model="choose" placeholder="请选择时间">
			<el-option v-for="arr in time" :label="arr[0]" :key="arr[0]" :value="arr[1]"></el-option>
		</el-select>
		<div class="xian"></div>
		<p class="ctips">系统默认提醒时间为每周/次,特殊产品需更改的<br>请查询后更改</p>
	</div>
</template>

<script type="text/javascript">
	// import './checkForm.scss'
	export default {
		data(){
			return {
				gw:'质量安全负责岗',
				bd:'企业主体责任履约自查表单',
				choose:'',
				choose1:'',
				time:[['一周/次',1],['两周/次',2],['三周/次',3],['四周/次',4]],
				id:'',
				count:0
			}
		},
		created(){
			this.$http.post(baseUrl+'/findSelfCheckPeriod').then((res)=>{
              	if(res.data.retCode === 0){
              		this.choose = res.data.data.self_check_period;
              		// this.choose1 = res.data.data.self_check_period;
              		this.id = res.data.data.id;
              	}else{
              		this.$messagebox.alert(res.data.retMessage);
              	}
	        },(err)=>{
	             this.$messagebox.alert('操作失败,请稍后再试!');
	        });
		},
		methods:{
			checkForm(){
				// if(this.count == 0){
					let obj = {self_check_period:this.choose,id:this.id}
					this.$http.post(baseUrl+'/setSelfCheck',obj).then((res)=>{
		              	console.log(res)
		              	console.log(this.count)
		              	if(this.count > 0){
		              		if(res.data.retCode === 0){
			              		this.$messagebox.alert("操作成功!");
			              	}else{
			              		this.$messagebox.alert(res.data.retMessage);
			              	}
		              	}
		              	this.count = this.count + 1;
			        },(err)=>{
			             console.log(err)
			        });
				// }
			},
			goback(){
				this.$router.go(-1);
			}

		},
		watch:{
			choose:'checkForm'
		}
	
	}
</script>
<style lang="scss" src="./checkForm.scss"></style>