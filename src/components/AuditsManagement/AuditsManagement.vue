<template>
	<div class="AuditsManagement_container">
		<p class="AuditsManagement_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click="goback">
			<span>审核管理</span>
		</p>
		<div class="main">
			<table class="jodtable">
		      <thead>
		        <tr>
		          <th>类型</th>
		          <th>名称</th>
		          <th>日期</th>
		          <th>人员</th>
		          <th>操作</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr v-for = "(arr,index) in data">
		          <td>{{arr.TableType}}</td>
		          <td>{{arr.mame}}</td>
		          <td>{{arr.create_time.split(' ')[0]}}</td>
		          <td>{{arr.staff}}</td>
		          <td>
			         <mt-button type="primary" class="audit" @click="audit(index)">审核</mt-button><br>
			         <mt-button class="look" @click = "look(index)">查看</mt-button>
		          </td>
		        </tr>
		      </tbody>
		    </table>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './AuditsManagement.scss'
	export default {
		data(){
			return {
				data:'',
			}
		},
		created(){
			this.getDate();
		},
		methods: {
			getDate(){
				this.$http.get(baseUrl+'/getAuditRecord').then((res)=>{
	              	if(res.data.retCode === 0){
	              		let a = res.data.enterprises;
	              		let b = res.data.products;
	              		let c = res.data.purchases;
	              		let d = res.data.sales;
	              		let aa =a.concat(b).concat(c).concat(d)
	              		this.data = aa;
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		              console.log(err);
		          });
			},
			goback(){
				this.$router.go(-1)
			},
		    audit(index){
		    	let obj = {TableType:this.data[index].TableType,id:this.data[index].id}
		    	console.log(obj)
		     	this.$http.post(baseUrl+'/auditRecord',obj).then((res)=>{
	              	console.log(res)
	              	if(res.data.retCode === 0){
	              		this.$messagebox.alert('操作成功!').then(action => {
	              			this.getDate();
 						});
	              	}else{
	              		this.$messagebox.alert(res.data.retMessage);
	              	}
		          },(err)=>{
		             console.log(err)
		          });
		     },
		    look(index){
		     	console.log(index)
		    },
		}
	}
</script>
<style lang="scss" src="./AuditsManagement.scss"></style>