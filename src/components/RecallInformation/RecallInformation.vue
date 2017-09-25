<template>
	<div class="RecallInformation_container">
		<p class="RecallInformation_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>召回登记表</span>
		</p>
		<div class="main">
			<p class="titles">XX产品（批次）召回登记表</p>
			<el-form :label-position="labelPosition" label-width="90px">
				  <el-form-item label="消费者:">
				    <el-input v-model="xfz"></el-input>
				  </el-form-item>
				  <el-form-item label="召回时间:">
				     <i class="time" @click="openPicker">
		          		<el-input class="time" v-model="zhsj"  placeholder="点击选择时间" :disabled="true"></el-input>
		          	</i>
				  </el-form-item>
				  <el-form-item label="产品状况:">
				    <el-input type="textarea" v-model="cpzk"></el-input>
				  </el-form-item>
				  <el-form-item label="备注:">
				    <el-input type="textarea" v-model="bz"></el-input>
				  </el-form-item>
			</el-form>	  
			<mt-button type="primary" class="yijianbtn" @click="yijian">提交</mt-button>
		</div>
		<mt-datetime-picker
		    ref="picker"
		    type="date"
		    yearFormat="{value} 年"
		    monthFormat="{value} 月"
		    dateFormat="{value} 日"
		    v-model="pickerValue"
		    @confirm="aa">
		</mt-datetime-picker>
	</div>
</template>

<script type="text/javascript">
	//import './RecallInformation.scss'
	export default {
		data(){
			return {
				labelPosition:'right',
				xfz:'',
				zhsj:'',
				cpzk:'',
				bz:'',
				pickerValue:'',
			}
		},
		created(){
			this.$http.get(baseUrl+'/findStore').then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
	              	if (res.data.data.status === 2) {
	              		this.text = '查看制度'
	              	}else if(res.data.data.status === 1){
	              		this.text = '一键制度'
	              	}
		          },(err)=>{
		              console.log('failed');
		              this.$messagebox.alert("获取信息错误!");
		          });
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			aa(){
		    	let a = new Date(this.pickerValue);
				let y = a.getFullYear();
				let M = a.getMonth()+1;
				let d = a.getDate();
				M = M < 10 ? '0' + M : M
				d = d < 10 ? '0' + d : d
				let pickerValue = `${y}-${M}-${d}`
				this.pickerValue = pickerValue;
				this.zhsj = this.pickerValue;
		    },
		    openPicker() {
		        this.$refs.picker.open();
		    },
			yijian(){
				this.$http.get(baseUrl+'/findRegularFile').then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		this.data = res.data.data;
	              		let data = JSON.stringify({data:this.data})
						sessionStorage.setItem('data',data)
	              		this.$router.push({name:'rules'});
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
	              	
		          },(err)=>{
		              console.log('failed');
		              this.$messagebox.alert("获取信息错误!");
		          });
				
			}
		}
	}
</script>
<style lang="scss" src="./RecallInformation.scss"></style>