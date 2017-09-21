<template>
	<div class="equipmentRegistration_container">
		<p class="equipmentRegistration_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click=goback>
			<span>经营场所设施登记表</span>
		</p>
		<div class="main">
			<!-- <div class="faren">
				<p>制表人（法人代表）：<span>卡卡</span></p>
			</div>
			<hr> -->
			<table class="equtable">
		      <thead>
		        <tr>
		          <th colspan="2">设施、设备、措施、时间</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr>
		          <td><span>*</span>通风</td>
		          <td><textarea class="textearetext" v-model = "tongfeng">{{tongfeng}}</textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>防尘</td>
		          <td><textarea class="textearetext" v-model = "fangchen">{{fangchen}}</textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>防潮</td>
		          <td><textarea class="textearetext" v-model = "fangchao">{{fangchao}}</textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>防虫</td>
		          <td><textarea class="textearetext" v-model = "fangchong">{{fangchong}}</textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>防鼠</td>
		          <td><textarea class="textearetext" v-model = "fangshu">{{fangshu}}</textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>常温储存</td>
		          <td><textarea class="textearetext" v-model = "cwcc">{{cwcc}}</textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>冷藏存储</td>
		          <td><textarea class="textearetext" v-model = "lccc">{{lccc}}</textarea></td>
		        </tr>
		        <tr>
		          <td><span>*</span>散装防污</td>
		          <td><textarea class="textearetext" v-model = "szfw">{{szfw}}</textarea></td>
		        </tr>
		        <tr>
		          <td>其他设备</td>
		          <td><textarea class="textearetext" v-model = "qtsb">{{qtsb}}</textarea></td>
		        </tr>
		        <tr>
		          <td>备注</td>
		          <td><textarea class="textearetext" v-model = "beizhu">{{beizhu}}</textarea></td>
		        </tr>
		      </tbody>
		    </table>
		    <mt-button type="primary" class="subm" @click = "sub">{{text}}</mt-button>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './equipmentRegistration.scss'
	export default {
		data(){
			return {
				data:'',
				tongfeng:'',
				fangchen:'',
				fangchao:'',
				fangchong:'',
				fangshu:'',
				cwcc:'',
				lccc:'',
				szfw:'',
				qtsb:'',
				beizhu:'',
				text:'提交',
				retcode:''
			}
		},
		created(){
			this.getData();
		},
		methods: {
			getData(){
				this.$http.get(baseUrl+'/findEquipment').then((res)=>{
	              	console.log(res)
	              	this.retcode = res.data.retCode;
	              	if(res.data.retCode === -11){
	              		this.$messagebox.alert('没有相关数据,您可以选择点击空格编辑添加数据提交。')
	              	}else if(res.data.retCode === 0){
	              		this.data = res.data.data;
	              		this.tongfeng = this.data.ventilation_equipment;
	              		this.fangchen = this.data.dustproof_equipment;
	              		this.fangchao = this.data.moistureproof_equipment;
	              		this.fangchong = this.data.pestproof_equipment;
	              		this.fangshu = this.data.mouseproof_equipment;
	              		this.cwcc = this.data.storage_equipment;
	              		this.lccc = this.data.cold_storage_equipment;
	              		this.szfw = this.data.anti_fouling_equipment;
	              		this.qtsb = this.data.other_equipment;
	              		this.beizhu = this.data.notes;
	              		if(this.data.id !== 0){
	              			this.text = '修改'
	              		}
	              	}
		        },(err)=>{
		             this.$messagebox.alert('服务器错误！');
		        });
			},
			goback(){
				this.$router.go(-1)
			},
		    sub(){
	 			if(this.retcode === -11){
		            	this.subData()
		        }else if(this.retcode !== -11){
		        	this.editData()
		        }
		    },
		    subData(){
 				switch (''){
					case this.tongfeng:
						this.$messagebox.alert('打*号的空格输入不能为空！');
						return;
					case this.fangchen:
							this.$messagebox.alert('打*号的空格输入不能为空！');
							return;	
					case this.fangchao:
							this.$messagebox.alert('打*号的空格输入不能为空！');
							return;
					case this.fangchong:
						this.$messagebox.alert('打*号的空格输入不能为空！');
						return;	
					case this.fangshu:
						this.$messagebox.alert('打*号的空格输入不能为空！');
						return;	
					case this.cwcc:
						this.$messagebox.alert('打*号的空格输入不能为空！');
						return;
					case this.lccc:
						this.$messagebox.alert('打*号的空格输入不能为空！');
						return;	
					case this.szfw:
						this.$messagebox.alert('打*号的空格输入不能为空！');
						return;			
				}
		    	let obj = {ventilation_equipment:this.tongfeng,dustproof_equipment:this.fangchen,moistureproof_equipment:this.fangchao,pestproof_equipment:this.fangchong,mouseproof_equipment:this.fangshu,storage_equipment:this.cwcc,cold_storage_equipment:this.lccc,anti_fouling_equipment:this.szfw,other_equipment:this.qtsb,notes:this.beizhu}
 				console.log(obj)
 				this.$http.post(baseUrl+'/addEquipment',obj).then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		this.$messagebox.alert('操作成功!').then(action => {
		              			this.getData();
		              		});
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		        },(err)=>{
		             this.$messagebox.alert('操作失败,请稍后再试!');
		        });
		    },
		    editData(){
		    	let obj = {ventilation_equipment:this.tongfeng,dustproof_equipment:this.fangchen,moistureproof_equipment:this.fangchao,pestproof_equipment:this.fangchong,mouseproof_equipment:this.fangshu,storage_equipment:this.cwcc,cold_storage_equipment:this.lccc,anti_fouling_equipment:this.szfw,other_equipment:this.qtsb,notes:this.beizhu,id:this.data.id}
 				console.log(obj)
 				this.$http.post(baseUrl+'/addEquipment',obj).then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		this.$messagebox.alert('操作成功!').then(action => {
		              			this.getData();
		              		});
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		        },(err)=>{
		             this.$messagebox.alert('操作失败,请稍后再试!');
		        });
		    }
		},
	}
</script>
<style lang="scss" src="./equipmentRegistration.scss"></style>