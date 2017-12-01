$(document).ready(function(){
	maphover();
});

function maphover(){
	var self = "";
	$(".city").hover(
		function(){
			self = $(this);
			self.addClass("hover").children("div").show();
            var cityStr = $(this).data("id");
            $(".addressInfo").hide();
            $(".addressInfo").each(function() {
                if ($(this).data("content") == cityStr) $(this).show();
            });
		},
		function(){
			self = $(this);
			self.children("div").hide();
			self.removeClass("hover");
            var cityStr = $(this).data("id");
            $(".addressInfo").hide();
		}
	);
	/*
	$(".city").click(
		function(){
			self = $(this);
			self.addClass("hover").children("div").show();
		},
		function(){
			self = $(this);
			self.children("div").hide();
			self.removeClass("hover");
		}
	);
	*/
};