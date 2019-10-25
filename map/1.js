

var Gx = {
	uniid: 0,
	containerClass: 'el-wrappper',
	getConfirmTemplate: function () {
		var html = '';
		html += '<div class="el-model">';
		html += '   <div class="el-contaoner zoomIn">';
		html += '       <div class="el-header">' + this.title + '</div>';
		html += '       <div class="el-content">' + this.content + '</div>';
		html += '       <div class="el-footer">';
		if (this.showCancel) {
			html += '       <div class="el-button el-cancel el-showCancel">' + this.cancelText + '</div>';
		}
		html += '           <div class="el-button el-success">' + this.confirmText + '</div>';
		html += '       </div>';
		html += '   </div>';
		html += '</div>';
		return html;
	},
	createElement: function () {
		var element = document.createElement("div");
		element.setAttribute("data-model", this.uniid);
		element.className = this.containerClass;
		element.innerHTML = this.getConfirmTemplate();
		document.body.appendChild(element);
	},
	colse: function () {
		var ele = document.getElementsByClassName(this.containerClass);
		document.body.removeChild(ele[ele.length - 1])
	},
	$message: function (opt) {
		this.uniid++;
		this.title = opt.title || '提示';          //标题
		this.content = opt.content || '提示内容';   //内容
		this.showCancel = opt.showCancel || false;    //是否显示取消按钮 默认不显示
		this.cancelText = opt.cancelText || '取消';  //取消文本
		this.confirmText = opt.confirmText || '确定'; //确定文本
		this.createElement();
		var successButton = document.getElementsByClassName("el-success");
		successButton[successButton.length - 1].focus();  //聚焦在当前窗口
		successButton[successButton.length - 1].onclick = function () {
			opt.success && opt.success();
			this.colse();
		}.bind(this);
		if (this.showCancel) {
			var cancelButton = document.getElementsByClassName("el-cancel");
			cancelButton[cancelButton.length - 1].onclick = function () {
				opt.cancel && opt.cancel();
				this.colse()
			}.bind(this);
		}
	}
}
