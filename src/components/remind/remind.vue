<template>
	<div class="remind_container">
		<p class="remind_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click='goback'>
			<span>产品近效期提醒</span>
		</p>
		<div class="main">
			<div class="psearch">
				<el-input class="jobx" v-model = 'proName' placeholder="产品名称"></el-input>
				<el-input class="jobx" v-model = 'proNumber' placeholder="产品备案号"></el-input>
				<el-input class="jobx" v-model = 'proBatch' placeholder="产品批次"></el-input>
				<mt-button type="primary" class="search" @click='search'>查询</mt-button><br>
			</div>
			<p class="ti" v-show = "!tshow">请输入需要查询的产品信息</p>
			<div class="ta" v-show = 'tshow'>
				<p class="rtips">系统默认提醒时间为三个月,特殊产品需更改请查询后更改</p>
				<el-form label-width="1.422222rem">
					<el-form-item label="产品名称">
					    <el-input :disabled="true" class="input1" v-model = 'query'></el-input>
					</el-form-item>
					<el-form-item label="生产批号">
					    <el-input :disabled="true" class="input1" v-model = 'bacth'></el-input>
					</el-form-item>
					<el-form-item label="提醒时间">
					    <el-select v-model="dataTime" placeholder="请选择时间">
					      <el-option v-for="arr in time" :label="arr[0]" :key="arr[0]" :value="arr[1]"></el-option>
					    </el-select>
					</el-form-item>
					<el-form-item label="到期时间">
					    <el-input :disabled="true" class="input1" v-model = 'dtime'></el-input>
					</el-form-item>
					<el-form-item label="库存数量">
					    <el-input :disabled="true" class="input1" v-model = 'number'></el-input>
					</el-form-item>
				</el-form>
				<mt-button type="primary" class="qedit" @click="sub">提交</mt-button><br>	
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	//import './remind.scss'
	export default {
		data(){
			return {
				query:'',
				dataTime:'',
				proNumber:'',
				bacth:'',
				dtime:'',
				number:'',
				proName:'',
				proBatch:'',
		        time:[['一个月',1],['两个月',2],['三个月',3],['四个月',4],['五个月',5],['六个月',6]],
		        tshow:false,
		        id:''
			}
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
		    search(){
		    	switch (''){
					case this.proName:
						this.$messagebox.alert('产品名称不能为空！');
						return;
					case this.proNumber:
						this.$messagebox.alert('产品备案号不能为空！');
						return;	
					case this.proBatch:
						this.$messagebox.alert('产品批次不能为空！');
						return;
				}		
		    	let obj = {product_name:this.proName,apply_sn:this.proNumber,batch_id:this.proBatch}
		     	this.$http.post(baseUrl+'/searchNearDate',obj).then((res)=>{
					console.log(res)
	              	if(res.data.retCode === 0){
	              		this.tshow = true;
	              		this.proBatch = '';
	              		this.proNumber = '';
	              		this.proName = '';
	              		this.tshow = true;
	              		this.query = res.data.data.product_name;
	              		this.bacth = res.data.data.batch_id;
	              		this.dtime = res.data.data.expire_date;
	              		this.number = res.data.data.stock;
	              		this.id = res.data.data.id;
	              		this.dataTime = res.data.data.alarm_before;
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		        },(err)=>{
		        	console.log(err)
		        });
		    },
		    sub(){
		    	let obj = {id:this.id,alarm_before:this.dataTime}
		     	this.$http.post(baseUrl+'/updateNearDate',obj).then((res)=>{
					console.log(res)
	              	if(res.data.retCode === 0){
	              		this.$messagebox.alert('操作成功!').then(action =>{
	              			this.query = '';
		              		this.bacth = '';
		              		this.dtime = '';
		              		this.number = '';
		              		this.id = '';
		              		this.dataTime = '';
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
<style lang="scss" src="./remind.scss"></style>