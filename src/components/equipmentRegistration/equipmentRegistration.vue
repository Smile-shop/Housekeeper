<template>
	<div class="equipmentRegistration_container">
		<p class="equipmentRegistration_text">
			<img src="../../assets/imgs/arrow (1).png" class="goback" @click=goback>
			<span>经营场所设施登记表</span>
		</p>
		<div class="main">
			<div class="faren">
				<p>制表人（法人代表）：<span>卡卡</span></p>
			</div>
			<hr>
			<table class="equtable">
		      <thead>
		        <tr>
		          <th colspan="2">设施、设备、措施、时间</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr>
		          <td>通风</td>
		          <td><textarea class="textearetext"></textarea></td>
		        </tr>
		        <tr>
		          <td>防尘</td>
		          <td><textarea class="textearetext"></textarea></td>
		        </tr>
		        <tr>
		          <td>防潮</td>
		          <td><textarea class="textearetext"></textarea></td>
		        </tr>
		        <tr>
		          <td>防虫</td>
		          <td><textarea class="textearetext"></textarea></td>
		        </tr>
		        <tr>
		          <td>防鼠</td>
		          <td><textarea class="textearetext"></textarea></td>
		        </tr>
		        <tr>
		          <td>常温储存</td>
		          <td><textarea class="textearetext"></textarea></td>
		        </tr>
		        <tr>
		          <td>备注</td>
		          <td><textarea class="textearetext"></textarea></td>
		        </tr>
		      </tbody>
		    </table>
		    <p >签字确认</p>
		    <div class="canvasDiv">
		        <div id="editing_area">
		            <canvas id="canvasEdit"></canvas>
		        </div>
		    </div>

		    <div class="imgDiv">
		        <span id="sign_show"></span>
		    </div>

		    <div class="btnDiv">
		        <mt-button type="primary" id="sign_clear" class="clearBtn">清除</mt-button>
		         <mt-button type="primary" id="sign_ok" class="okBtn">确认</mt-button>
		    </div>

		    <mt-button type="primary" class="subm" >提交</mt-button>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import './equipmentRegistration.scss'
	// import '../../libs/jquery.min.js'
	// import '../../libs/esign.js'

	export default {
		data(){
			return {
				formInline: {
		          user: '',
		          region: ''
		        },
		        jod:[['店长'],['进货岗'],['销售岗'],['质量安全岗'],['质量追踪岗']]
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
		    search(){
		     	console.log(this.formInline.region)
		     	
		     }
		},
		// ready(){
		// 	$(function(){
		// 		console.log(123)
		// 		//初始化动作，根据DOM的ID不同进行自定义，如果不写则内部默认取这四个
		// 		$().esign("canvasEdit", "sign_show", "sign_clear", "sign_ok");
		// 	});
		// }
	}
</script>
<style lang="scss" src="./equipmentRegistration.scss"></style>