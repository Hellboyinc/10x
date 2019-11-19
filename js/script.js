var template = {
	init: function(){
		self = this;
		
		$(document).ready(function(){
			self.example();
		});
	},
	example: function(){
		if($('.example')[0]) {
			// do smth
		}
	}
}

template.init();