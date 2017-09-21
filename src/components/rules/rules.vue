<template>
	<div class="rules_container">
		<p class="rules_text">
			<img src="../../assets/imgs/arrow (3).png" class="goback" @click=goback>
			<span>制度建设</span>
		</p>
		<div class="main">
			<div class="order">  
			   <span style="white-space:pre">   </span><span class="line" ></span>  
			   <span style="white-space:pre">   </span><span class="txt">制度列表</span>  
			   <span style="white-space:pre">   </span><span class="line"></span>  
			</div>
			<el-table
			    :data="tableData"
			    border
			    style="width: 96%;border-radius:.4rem;background:#2ab3ea;" class="thead">
			    <el-table-column
			      label="制度名称"
			      width="200">
			      <template scope="scope">
			            <span>{{ scope.row.name }}</span>
			      </template>
			    </el-table-column>
			    <el-table-column label="操作">
			      <template scope="scope">
			        <a :href="['http://api.credunion.org/h1/dl?table='+table+'&id='+id+'&field='+field]">
			        	<el-button
				          size="small"
				          @click="handleEdit(scope.$index, scope.row)">下载</el-button>
				    </a>
			        <el-button
			          size="small"
			          type="primary"
			          @click="print(scope.$index, scope.row)">打印</el-button>
			          <el-button
			          size="small"
			          type="danger"
			          @click="handleDelete(scope.$index, tableData)">删除</el-button>
			      </template>
			    </el-table-column>
			  </el-table>
			  <mt-button type="primary" class="sub" @click="sub">提交</mt-button>
		</div>
	</div>
</template>

<script type="text/javascript">
	//import './rules.scss'
	export default {
		data(){
			return {
				tableData: [{
		          name: '美容院进货查验与有效期管理制度',
		        }, {
		          name: '购进化妆表标签标识审核制度',
		        }, {
		          name: '产品不良反应登记和报告制度',
		        }, {
		          name: '产品召回制度',
		        },{
		          name: '经营场所管理制度',
		        }, {
		          name: '服务与产品销售管理制度',
		        }, {
		          name: '企业广告宣传管理制度',
		        }, {
		          name: '岗位说明书',
		        }],
		        data:'',
		        table:'organ_system_file',
		        field:"purchase_check_file",
		        id:''

			}
		},
		created(){
			let data = JSON.parse(sessionStorage.getItem('data'))
			console.log(data)
			this.id = data.data.id;
			// let obj = {table:this.table,id:data.data.id,field:this.field}
			// this.$http.post(baseUrl+'/dl',obj).then((res)=>{
			// 		console.log(res)
	  //             	if(res.data.retCode === 0){
	  //             		// this.$messagebox.alert("操作成功!").then(acton=>{
	  //             		// 	this.userName = '';
	  //             		// 	this.Opinion = '';
	  //             		// })
	  //             	}else{
	  //             		this.$messagebox.alert(res.data.retMessage);
	  //             	}
		 //          },(err)=>{
		 //              this.$messagebox.alert("获取信息错误!");
		 //          });
		 // this.$http({
		 //              url: baseUrl+'/dl',
		 //              method:'POST',
		 //              params:{table:this.table,id:data.data.id,field:this.field},
		 //              responseType: 'text'
		 //              }).then((res)=>{
		 //              	console.log(res)
		 //              	if(res.data.retCode === 0){
		 //              		// this.$router.push({name:'index'})
		 //              	}else{
		 //              		this.$messagebox.alert(res.data.retMessage);
		 //              	}
			//           },(err)=>{
			//               console.log('err');
			//               this.$messagebox.alert('登录错误！');
			//           });
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			handleEdit(index, row) {
		        console.log(index, row);
		        if(index == 0){
		        	this.field = 'purchase_check_file'
		        }else if(index == 1){
		        	this.field = 'flag_check_file'
		        }else if(index == 2){
		        	this.field = 'adr_report_file'
		        }else if(index == 3){
		        	this.field = 'recall_file'
		        }else if(index == 4){
		        	this.field = 'place_man_file'
		        }else if(index == 5){
		        	this.field = 'sale_man_file'
		        }else if(index == 6){
		        	this.field = 'ad_man_file'
		        }else if(index == 7){
		        	this.field = 'job_desc_file'
		        }
		      },
		    handleDelete(index, row) {
		        console.log(index, row);
		        row.splice(index, 1);
		      },
		    print(index, row) {
		        console.log(index, row);
		      },
		    sub(){
		     	console.log(456)
		     }
		}
	}
</script>
<style lang="scss" src="./rules.scss"></style>