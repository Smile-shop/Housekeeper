<template>
	<table class="listtable">
	    <tbody>
	         <tr>
	          <td>所经营的化妆品是否有质量合格标记。</td>
	          <td>
	          	<mt-button type="primary" @click="choose1()" class="yes" :class="{'yesActive':d1}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose2()" class="yes" :class="{'yesActive1':d1s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>产品名称是否符合《化妆品命名规定》、《消费品使用说明化妆品通用标签》及其他化妆品标签标识管理相关规定。</td>
	          <td>
	          	<mt-button type="primary" @click="choose3()" class="yes" :class="{'yesActive':d2}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose4()" class="yes" :class="{'yesActive1':d2s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>国产化妆品是否标明生产企业的名称和地址。</td>
	          <td>
	          	<mt-button type="primary" @click="choose5()" class="yes" :class="{'yesActive':d3}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose6()" class="yes" :class="{'yesActive1':d3s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>进口化妆品标明原产国名或地区名、经销商、进口商、在华代理商的名称和地址。</td>
	          <td>
	          	<mt-button type="primary" @click="choose7()" class="yes" :class="{'yesActive':d4}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose8()" class="yes" :class="{'yesActive1':d4s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>产品是否标注生产日期和保质期，或者标注生产批号和限期使用日期。</td>
	          <td>
	          	<mt-button type="primary" @click="choose9()" class="yes" :class="{'yesActive':d5}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose10()" class="yes" :class="{'yesActive1':d5s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>国产化妆品是否标明生产企业的卫生许可证编号。</td>
	          <td>
	          	<mt-button type="primary" @click="choose11()" class="yes" :class="{'yesActive':d6}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose12()" class="yes" :class="{'yesActive1':d6s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>特殊用途化妆品是否标示批准文号。</td>
	          <td>
	          	<mt-button type="primary" @click="choose13()" class="yes" :class="{'yesActive':d7}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose14()" class="yes" :class="{'yesActive1':d7s}">否</mt-button><br>
	          </td>
	        </tr>
	        <tr>
	          <td>进口非特殊用途化妆品是否标示备案文号。</td>
	          <td>
	          	<mt-button type="primary" @click="choose15()" class="yes" :class="{'yesActive':d8}">是</mt-button><br>
	          	<mt-button type="primary" @click="choose16()" class="yes" :class="{'yesActive1':d8s}">否</mt-button><br>
	          </td>
	        </tr>
	    </tbody>
	</table>
</template>

<script type="text/javascript">
	// import './legitimate.scss'
	export default {
		data(){
			return {
				d1:'',
				d1s:'',
				d2:'',
				d2s:'',
				d3:'',
				d3s:'',
				d4:'',
				d4s:'',
				d5:'',
				d5s:'',
				d6:'',
				d6s:'',
				d7:'',
				d7s:'',
				d8:'',
				d8s:'',
				hegebiaozhi:'',
				guiding:'',
				qiyedizhi:'',
				dailidizhi:'',
				shiyongdate:'',
				bianhao:'',
				pzwenhao:'',
				bawenhao:'',
			}
		},
		created(){
			let ide = JSON.stringify({hegebiaozhi:this.hegebiaozhi,guiding:this.guiding,qiyedizhi:this.qiyedizhi,dailidizhi:this.dailidizhi,shiyongdate:this.shiyongdate,bianhao:this.bianhao,pzwenhao:this.pzwenhao,bawenhao:this.bawenhao})
				sessionStorage.setItem('ide',ide)
		},
		methods: {
			choose1(){
				this.d1 = true;
				this.d1s = false;
				this.hegebiaozhi = 1;
				let ide = JSON.stringify({hegebiaozhi:this.hegebiaozhi,guiding:this.guiding,qiyedizhi:this.qiyedizhi,dailidizhi:this.dailidizhi,shiyongdate:this.shiyongdate,bianhao:this.bianhao,pzwenhao:this.pzwenhao,bawenhao:this.bawenhao})
				sessionStorage.setItem('ide',ide)
			},
			choose2(){
				this.d1 = false;
				this.d1s = true;
				this.hegebiaozhi = 0;
				let ide = JSON.stringify({hegebiaozhi:this.hegebiaozhi,guiding:this.guiding,qiyedizhi:this.qiyedizhi,dailidizhi:this.dailidizhi,shiyongdate:this.shiyongdate,bianhao:this.bianhao,pzwenhao:this.pzwenhao,bawenhao:this.bawenhao})
				sessionStorage.setItem('ide',ide)
			},
			choose3(){
				this.d2 = true;
				this.d2s = false;
				this.guiding = 1;
				let ide = JSON.stringify({hegebiaozhi:this.hegebiaozhi,guiding:this.guiding,qiyedizhi:this.qiyedizhi,dailidizhi:this.dailidizhi,shiyongdate:this.shiyongdate,bianhao:this.bianhao,pzwenhao:this.pzwenhao,bawenhao:this.bawenhao})
				sessionStorage.setItem('ide',ide)
			},
			choose4(){
				this.d2 = false;
				this.d2s = true;
				this.guiding = 0;
				let ide = JSON.stringify({hegebiaozhi:this.hegebiaozhi,guiding:this.guiding,qiyedizhi:this.qiyedizhi,dailidizhi:this.dailidizhi,shiyongdate:this.shiyongdate,bianhao:this.bianhao,pzwenhao:this.pzwenhao,bawenhao:this.bawenhao})
				sessionStorage.setItem('ide',ide)
			},
			choose5(){
				this.d3 = true;
				this.d3s = false;
				this.qiyedizhi = 1;
				let ide = JSON.stringify({hegebiaozhi:this.hegebiaozhi,guiding:this.guiding,qiyedizhi:this.qiyedizhi,dailidizhi:this.dailidizhi,shiyongdate:this.shiyongdate,bianhao:this.bianhao,pzwenhao:this.pzwenhao,bawenhao:this.bawenhao})
				sessionStorage.setItem('ide',ide)
			},
			choose6(){
				this.d3 = false;
				this.d3s = true;
				this.qiyedizhi = 0;
				let ide = JSON.stringify({hegebiaozhi:this.hegebiaozhi,guiding:this.guiding,qiyedizhi:this.qiyedizhi,dailidizhi:this.dailidizhi,shiyongdate:this.shiyongdate,bianhao:this.bianhao,pzwenhao:this.pzwenhao,bawenhao:this.bawenhao})
				sessionStorage.setItem('ide',ide)
			},
			choose7(){
				this.d4 = true;
				this.d4s = false;
				this.dailidizhi = 1;
				let ide = JSON.stringify({hegebiaozhi:this.hegebiaozhi,guiding:this.guiding,qiyedizhi:this.qiyedizhi,dailidizhi:this.dailidizhi,shiyongdate:this.shiyongdate,bianhao:this.bianhao,pzwenhao:this.pzwenhao,bawenhao:this.bawenhao})
				sessionStorage.setItem('ide',ide)
			},
			choose8(){
				this.d4 = false;
				this.d4s = true;
				this.dailidizhi = 0;
				let ide = JSON.stringify({hegebiaozhi:this.hegebiaozhi,guiding:this.guiding,qiyedizhi:this.qiyedizhi,dailidizhi:this.dailidizhi,shiyongdate:this.shiyongdate,bianhao:this.bianhao,pzwenhao:this.pzwenhao,bawenhao:this.bawenhao})
				sessionStorage.setItem('ide',ide)
			},
			choose9(){
				this.d5 = true;
				this.d5s = false;
				this.shiyongdate = 1;
				let ide = JSON.stringify({hegebiaozhi:this.hegebiaozhi,guiding:this.guiding,qiyedizhi:this.qiyedizhi,dailidizhi:this.dailidizhi,shiyongdate:this.shiyongdate,bianhao:this.bianhao,pzwenhao:this.pzwenhao,bawenhao:this.bawenhao})
				sessionStorage.setItem('ide',ide)
			},
			choose10(){
				this.d5 = false;
				this.d5s = true;
				this.shiyongdate = 0;
				let ide = JSON.stringify({hegebiaozhi:this.hegebiaozhi,guiding:this.guiding,qiyedizhi:this.qiyedizhi,dailidizhi:this.dailidizhi,shiyongdate:this.shiyongdate,bianhao:this.bianhao,pzwenhao:this.pzwenhao,bawenhao:this.bawenhao})
				sessionStorage.setItem('ide',ide)
			},
			choose11(){
				this.d6 = true;
				this.d6s = false;
				this.bianhao = 1;
				let ide = JSON.stringify({hegebiaozhi:this.hegebiaozhi,guiding:this.guiding,qiyedizhi:this.qiyedizhi,dailidizhi:this.dailidizhi,shiyongdate:this.shiyongdate,bianhao:this.bianhao,pzwenhao:this.pzwenhao,bawenhao:this.bawenhao})
				sessionStorage.setItem('ide',ide)
			},
			choose12(){
				this.d6 = false;
				this.d6s = true;
				this.bianhao = 0;
				let ide = JSON.stringify({hegebiaozhi:this.hegebiaozhi,guiding:this.guiding,qiyedizhi:this.qiyedizhi,dailidizhi:this.dailidizhi,shiyongdate:this.shiyongdate,bianhao:this.bianhao,pzwenhao:this.pzwenhao,bawenhao:this.bawenhao})
				sessionStorage.setItem('ide',ide)
			},
			choose13(){
				this.d7 = true;
				this.d7s = false;
				this.pzwenhao = 1;
				let ide = JSON.stringify({hegebiaozhi:this.hegebiaozhi,guiding:this.guiding,qiyedizhi:this.qiyedizhi,dailidizhi:this.dailidizhi,shiyongdate:this.shiyongdate,bianhao:this.bianhao,pzwenhao:this.pzwenhao,bawenhao:this.bawenhao})
				sessionStorage.setItem('ide',ide)
			},
			choose14(){
				this.d7 = false;
				this.d7s = true;
				this.pzwenhao = 0;
				let ide = JSON.stringify({hegebiaozhi:this.hegebiaozhi,guiding:this.guiding,qiyedizhi:this.qiyedizhi,dailidizhi:this.dailidizhi,shiyongdate:this.shiyongdate,bianhao:this.bianhao,pzwenhao:this.pzwenhao,bawenhao:this.bawenhao})
				sessionStorage.setItem('ide',ide)
			},
			choose15(){
				this.d8 = true;
				this.d8s = false;
				this.bawenhao = 1;
				let ide = JSON.stringify({hegebiaozhi:this.hegebiaozhi,guiding:this.guiding,qiyedizhi:this.qiyedizhi,dailidizhi:this.dailidizhi,shiyongdate:this.shiyongdate,bianhao:this.bianhao,pzwenhao:this.pzwenhao,bawenhao:this.bawenhao})
				sessionStorage.setItem('ide',ide)
			},
			choose16(){
				this.d8 = false;
				this.d8s = true;
				this.bawenhao = 0;
				let ide = JSON.stringify({hegebiaozhi:this.hegebiaozhi,guiding:this.guiding,qiyedizhi:this.qiyedizhi,dailidizhi:this.dailidizhi,shiyongdate:this.shiyongdate,bianhao:this.bianhao,pzwenhao:this.pzwenhao,bawenhao:this.bawenhao})
				sessionStorage.setItem('ide',ide)
			},
		},
	}
</script>
