<template>
	<div class="rules_container">
		<p class="rules_text">
			<img src="../../assets/imgs/arrow (1).png" class="goback" @click=goback>
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
			    style="width: 97%;border-radius:.4rem;background:#2ab3ea;" class="thead">
			    <el-table-column
			      label="制度名称"
			      width="200">
			      <template scope="scope">
			            <span>{{ scope.row.name }}</span>
			      </template>
			    </el-table-column>
			    <el-table-column label="操作">
			      <template scope="scope">
			        <el-button
			          size="small"
			          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
			  <mt-button type="primary" class="sub" @click=sub>提交</mt-button>
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

			}
		},
		methods: {
			goback(){
				this.$router.go(-1)
			},
			handleEdit(index, row) {
		        console.log(index, row);
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
		     	let val={l:'dfa',a:'dfk'}
		     	this.$router.push({name:'login',params:{val}})
		     	console.log(this)
		     }
		}
	}
</script>
<style lang="scss" src="./rules.scss"></style>