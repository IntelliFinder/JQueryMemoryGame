var BoxOpened = "";
var ImgOpened = "";
var Counter = 0;
var ImgFound = 0;

var Source = "#boxcard";
var SecondSource="#boxcard2";

var ImgSource = [
"https://image.ibb.co/bHAZ8F/pic.jpg",
"https://image.ibb.co/mJFO2a/pic2.jpg",
"https://image.ibb.co/da6Vha/pic3.jpg",
"https://image.ibb.co/ePuGNa/pic4.jpg",
"https://image.ibb.co/dFEu8F/pic5.jpg",
"https://image.ibb.co/fTxsvv/pic6.jpg",
"https://image.ibb.co/gkvO2a/pic7.jpg",
"https://image.ibb.co/kbUNvv/pic8.jpg"
];

function RandomFunction(MaxValue, MinValue) {
		return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
	}
	
function ShuffleImages() {
	var ImgAll = $(Source).children();
	var ImgThis = $(Source + " div:first-child");
	var ImgArr = new Array();

	for (var i = 0; i < ImgAll.length; i++) {
		ImgArr[i] = $("#" + ImgThis.attr("id") + " img").attr("src");
		ImgThis = ImgThis.next();
	}
	
		ImgThis = $(Source + " div:first-child");
	
	for (var z = 0; z < ImgAll.length; z++) {
	var RandomNumber = RandomFunction(0, ImgArr.length - 1);

		$("#" + ImgThis.attr("id") + " img").attr("src", ImgArr[RandomNumber]);
		ImgArr.splice(RandomNumber, 1);
		ImgThis = ImgThis.next();
		if(z==7){$(Source).append("<hr>");  }//hearts display
		
	}
}

function ResetGame() {
	//reset all variables
	ShuffleImages();
	$(Source + " div img").hide();
	$(Source + " div").css("visibility", "visible");
	Counter = 0;
	$("#success").remove();
	$("#counter").html("" + Counter);
	BoxOpened = "";
	ImgOpened = "";
	ImgFound = 0;

	return false;
}

function OpenCard() {
	var id = $(this).attr("id");
	//if user pressed a hidden image
	if ($("#" + id + " img").is(":hidden")) {
		$(Source + " div").unbind("click", OpenCard);
	
		$("#" + id + " img").slideDown('fast');
		//if didn't press another image yet		
		if (ImgOpened == "") {
			BoxOpened = id;
			ImgOpened = $("#" + id + " img").attr("src");
			setTimeout(function() {
				$(Source + " div").bind("click", OpenCard)
			}, 300);
		} else {
			//if a second image was pressed 
			CurrentOpened = $("#" + id + " img").attr("src");
			//check if images match by html source
			if (ImgOpened != CurrentOpened) {
				setTimeout(function() {
					$("#" + id + " img").slideUp('fast');
					$("#" + BoxOpened + " img").slideUp('fast');
					BoxOpened = "";
					ImgOpened = "";
				}, 400);
			} else {
				// if images don't match do the following
				$("#" + id + " img").parent().css("visibility", "hidden");
				$("#" + BoxOpened + " img").parent().css("visibility", "hidden");
				ImgFound++;
				BoxOpened = "";
				ImgOpened = "";
			}
			//after mismatch return back onclick state
			setTimeout(function() {
				$(Source + " div").bind("click", OpenCard)
			}, 400);
		}
		//update image count in case of match
		Counter++;
		$("#counter").html("" + Counter);
		//End of game-amount of images founs equals amount of images to start with
		if (ImgFound == ImgSource.length) {
			$("#counter").prepend('<span id="success">You Found All Pictues With </span>');
		}
	}
}
//initiate game
$(function() {
	count=0;
	//populate the images-two for correspondance
for (var y = 1; y < 3 ; y++) {
	$.each(ImgSource, function(i, val) {
		$(Source).append("<div id=card" + y + i + "><img src=" + val + " />");
	});	
	
}
	//onclick event activates OpenCard function
	$(Source + " div").click(OpenCard);
	ShuffleImages();
});