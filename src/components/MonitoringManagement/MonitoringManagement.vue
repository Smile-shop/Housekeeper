<template>
	<div class="MonitoringManagement_container">
		<p class="MonitoringManagement_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click=goback>
			<span>监管记录</span>
		</p>
		<div class="main">
			<table class="jodtable">
		      <tbody>
		        <tr>
		          <td><span>*</span>记录编号</td>
		          <td><textarea class="textearetext" v-model="record_no"></textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>检查单位</td>
		          <td><textarea class="textearetext" v-model="admin_unit"></textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>检查方式</td>
		          <td><textarea class="textearetext" v-model="admin_method"></textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>检查内容</td>
		          <td><textarea class="textearetext" v-model="admin_content"></textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>检查结果</td>
		          <td><textarea class="textearetext" v-model="admin_conclusion"></textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>检查日期</td>
		          <td>
		          	<i class="time" @click="openPicker">
		          		<el-input class="time" v-model="admin_date"  placeholder="点击选择时间" :disabled="true"></el-input>
		          	</i>
		          </td>
		        </tr>
		        <tr>
		          <td><span>*</span>检查人</td>
		          <td><textarea class="textearetext" v-model="checker"></textarea></td>
		        </tr>
		        <tr>
		          <td>检查对象</td>
		          <td><textarea class="textearetext" v-model="checked"></textarea></td>
		        </tr>
		        <tr>
		          <td>备注</td>
		          <td><textarea class="textearetext" v-model="notes"></textarea></td>
		        </tr>
		      </tbody>
		    </table>
		    <mt-datetime-picker
			    ref="picker"
			    type="date"
			    yearFormat="{value} 年"
			    monthFormat="{value} 月"
			    dateFormat="{value} 日"
			    v-model="pickerValue"
			    @confirm="aa">
			</mt-datetime-picker>
		    <mt-button type="primary" class="registbtn" @click="sub">提交</mt-button>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './MonitoringManagement.scss'
	export default {
		data(){
			return {
				record_no:'',
				admin_unit:'',
				admin_method:'',
				admin_content:'',
				admin_conclusion:'',
				admin_date:'',
				checker:'',
				checked:'',
				notes:'',
				pickerValue:'',
				time:''
			}
		},
		mouthed(){
			console.log(this.pickerValue)
			let a = new Date(this.pickerValue);
			let y = a.getFullYear();
			let M = a.getMonth()+1;
			let d = a.getDate();
			let pickerValue = `${y}-${M}-${d}`
			this.pickerValue = pickerValue;		
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
		        console.log(this.pickerValue)
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
				this.admin_date = this.pickerValue;
		    },
		    sub(){
		    	switch (''){
					case this.record_no:
						this.$messagebox.alert('打*号的空格输入不能为空！');
						return;
					case this.admin_unit:
						this.$messagebox.alert('打*号的空格输入不能为空！');
						return;	
					case this.admin_method:
						this.$messagebox.alert('打*号的空格输入不能为空！');
						return;
					case this.admin_content:
						this.$messagebox.alert('打*号的空格输入不能为空！');
						return;	
					case this.admin_conclusion:
						this.$messagebox.alert('打*号的空格输入不能为空！');
						return;	
					case this.admin_date:
						this.$messagebox.alert('打*号的空格输入不能为空！');
						return;
					case this.checker:
						this.$messagebox.alert('打*号的空格输入不能为空！');
						return;	
				}
				let a = new Date(this.pickerValue);
				let y = a.getFullYear();
				let M = a.getMonth()+1;
				let d = a.getDate();
				let pickerValue = `${y}-${M}-${d}`
				this.pickerValue = pickerValue;
				let obj = {record_no:this.record_no,admin_unit:this.admin_unit,admin_method:this.admin_method,admin_content:this.admin_content,admin_conclusion:this.admin_conclusion,admin_date:this.admin_date,checker:this.checker,checked:this.checked,notes:this.notes}
		     	this.$http.post(baseUrl+'/addRegulatory',obj).then((res)=>{
		     		console.log(res)
	              	if(res.data.retCode === 0){
	              		this.$messagebox.alert("操作成功！").then(action => {
		              		this.record_no = '';
		              		this.admin_unit = '';
		              		this.admin_method = '';
		              		this.admin_content = '';
		              		this.admin_conclusion = '';
		              		this.admin_date = '';
		              		this.checker = '';
		              		this.checked = '';
		              		this.notes = '';
						});
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		        },(err)=>{
		            console.log(err)
		        });
		     }
		}
	}
</script>
<style lang="scss" src="./MonitoringManagement.scss"></style>