<template>
	<div class="RecallInformation_container">
		<p class="RecallInformation_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>召回登记表</span>
		</p>
		<div class="main">
			<p class="titles">产品（批次）召回登记表</p>
			<el-form :label-position="labelPosition" label-width="90px">
				  <el-form-item label="产品名称:">
				    <el-input v-model="cpmc"></el-input>
				  </el-form-item>
				   <el-form-item label="产品批次:">
				    <el-input v-model="cppc"></el-input>
				  </el-form-item>
				   <el-form-item label="消费者:">
				    <el-input v-model="xfz"></el-input>
				  </el-form-item>
				  <el-form-item label="消费者电话:">
				    <el-input v-model="xfzdh"></el-input>
				  </el-form-item>
				  <el-form-item label="召回时间:">
				     <i class="time" @click="openPicker">
		          		<el-input class="time" v-model="zhsj"  placeholder="点击选择时间" :disabled="true"></el-input>
		          	</i>
				  </el-form-item>
				  <el-form-item label="召回数量:">
				    <el-input v-model="zhsl"></el-input>
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
				cpmc:'',
				zhsj:'',
				cpzk:'',
				xfz:'',
				cppc:'',
				xfzdh:'',
				zhsl:'',
				bz:'',
				pickerValue:'',
			}
		},
		created(){
	
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
		        let a = new Date();
				let y = a.getFullYear();
				let M = a.getMonth()+1;
				let d = a.getDate();
				M = M < 10 ? '0' + M : M
				d = d < 10 ? '0' + d : d
				let time = `${y}-${M}-${d}`;
				this.pickerValue = time;
		    },
			yijian(){
				switch (''){
					case this.cpmc:
						this.$messagebox.alert('产品名称不能为空！');
						return;
					case this.cppc:
						this.$messagebox.alert('产品批次不能为空！');
						return;	
					case this.xfz:
						this.$messagebox.alert('消费者不能为空！');
						return;
					case this.xfzdh:
						this.$messagebox.alert('消费者电话不能为空！');
						return;	
					case this.zhsj:
						this.$messagebox.alert('召回时间不能为空！');
						return;	
					case this.zhsl:
						this.$messagebox.alert('召回数量不能为空！');
						return;
					case this.cpzk:
						this.$messagebox.alert('产品状况不能为空！');
						return;
				}
				let obj = {product_name:this.cpmc,batch_id:this.cppc,consumer:this.xfz,mobile:this.xfzdh,recall_date:this.zhsj,product_status:this.cpzk,recall_quantity:this.zhsl,notes:this.bz,}
				this.$http.post(baseUrl+'/addRecallLog',obj).then((res)=>{
					this.cpmc = '';
					this.cppc = '';
					this.xfz = '';
					this.xfzdh = '';
					this.zhsj = '';
					this.cpzk = '';
					this.zhsl = '';
					this.bz = '';
	              	if(res.data.retCode === 0){
	              		this.$messagebox.alert("操作成功！").then(action=>{
	              			this.$router.push({name:'Recall'});
	              		});
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