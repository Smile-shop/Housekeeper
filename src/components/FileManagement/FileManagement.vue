<template>
	<div class="FileManagement_container">
		<p class="FileManagement_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>档案管理</span>
		</p>
		<div class="main">
			<div class="dsearch">
				<!-- <input type="text" class="fromname" placeholder="输入表单、台账、档案名称" > -->
				<el-select v-model="fileName" placeholder="请选择档案类型"  @change="getFile">
			      <el-option v-for="(arr,index) in file" :label="arr" :value="arr+'-'+index"></el-option>
			    </el-select>
				<i class="time" @click="openPicker">
					<el-input v-model="stime" placeholder="开始时间" class="timestart" :disabled="true"></el-input>
					<!-- <input type="text" class="timestart" placeholder="开始时间" v-model="stime" disabled="disabled"> -->
				</i>
				<i class="time" @click="openPicker1">
					<el-input v-model="etime" placeholder="结束时间" class="timeend" :disabled="true"></el-input>
					<!-- <input type="text" class="timeend" placeholder="结束时间" v-model="etime" disabled="disabled"> -->
				</i>
				<mt-button type="primary" class="year" @click="preyear">上一年</mt-button>
				<mt-button type="primary" class="year" @click="premonth">上个月</mt-button>
				<mt-button type="primary" class="search" @click="search">搜索</mt-button>
			</div>
			<table class="jodtable">
		      <thead>
		        <tr>
		          <th>表单、台账、档案名称</th>
		          <th>时间</th>
		          <th>操作</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr>
		          <td>产品与供贷企业合规信息登记表</td>
		          <td>2017年5月10日</td>
		          <td class="cao">
		          	<mt-button type="primary" class="edit">查看</mt-button>
		          	<mt-button type="default" class="print">打印</mt-button>
		          	<mt-button type="danger" class="del">删除</mt-button>
		          </td>
		        </tr>
		      </tbody>
		    </table>
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
			<mt-datetime-picker
			    ref="picker1"
			    type="date"
			    yearFormat="{value} 年"
			    monthFormat="{value} 月"
			    dateFormat="{value} 日"
			    v-model="pickerValue1"
			    @confirm="bb">
			</mt-datetime-picker>
	</div>
</template>

<script type="text/javascript">
	// import './FileManagement.scss'
	export default {
		data(){
			return {
				pickerValue:'',
		        pickerValue1:'',
		        stime:'',
		        etime:'',
		        fileName:'',
		        id:'',
		        file:['供货企业合规登记信息表','供货企业与产品合规信息登记表','进货工作记录表','产品销售记录表','经营场所设施登记表','不良反应信息登记表','召回通知单','召回登记表','企业主体责任履约自查表','客户意见簿','不良反应事件监测表']
			}
		},
		methods: {
			goback(){
				this.$router.go(-1)
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
		    openPicker1() {
		        this.$refs.picker1.open();
		        let a = new Date();
				let y = a.getFullYear();
				let M = a.getMonth()+1;
				let d = a.getDate();
				M = M < 10 ? '0' + M : M
				d = d < 10 ? '0' + d : d
				let time = `${y}-${M}-${d}`;
				this.pickerValue1 = time;
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
				this.stime = this.pickerValue;
		    },
		    bb(){
		    	let a = new Date(this.pickerValue1);
				let y = a.getFullYear();
				let M = a.getMonth()+1;
				let d = a.getDate();
				M = M < 10 ? '0' + M : M
				d = d < 10 ? '0' + d : d
				let pickerValue1 = `${y}-${M}-${d}`
				this.pickerValue1 = pickerValue1;
				this.etime = this.pickerValue1;
		    },
		    getFile(){
				this.id = Number(this.fileName.split('-')[1])+1;
				
			},
		    search(){
		    	if(this.id === ''){
		    		this.$messagebox.alert("档案类型不能为空!");
		    		return false;
		    	}else if(this.stime === ''||this.etime === ''){
		    		this.$messagebox.alert("时间不能为空!");
		    		return false;
		    	}
		     	let obj = {id:this.id,stime:this.stime,etime:this.etime}
				this.$http.post(baseUrl+'/searchFile',obj).then((res)=>{
					console.log(res)
	              	this.fileName = '';
	              	this.stime = '';
	              	this.etime = '';
	              	if(res.data.retCode === 0){
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              this.$messagebox.alert("获取信息错误!");
		          });
		     },
		     preyear(){
		     	if(this.id === ''){
		    		this.$messagebox.alert("档案类型不能为空!");
		    		return false;
		    	}
		     	let obj = {id:this.id}
				this.$http.post(baseUrl+'/searchFileLastYear',obj).then((res)=>{
					console.log(res)
	              	this.fileName = '';
	              	if(res.data.retCode === 0){

	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              this.$messagebox.alert("获取信息错误!");
		          });
		     },
		     premonth(){
		     	if(this.id === ''){
		    		this.$messagebox.alert("档案类型不能为空!");
		    		return false;
		    	}
		     	let obj = {id:this.id}
				this.$http.post(baseUrl+'/searchFileLastMonth',obj).then((res)=>{
					console.log(res)
	              	this.fileName = '';
	              	if(res.data.retCode === 0){
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              this.$messagebox.alert("获取信息错误!");
		          });
		     },
		}
	}
</script>
<style lang="scss" src="./FileManagement.scss"></style>