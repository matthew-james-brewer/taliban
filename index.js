let list = [];
function factPopup() {
	let fact = window.open("about:blank", "_blank","height="+screen.height+",width="+(screen.width/2));
	fact.document.write("\
		<!DOCTYPE html>\
		<html>\
		<head>\
		<title>Taliban Beliefs</title>\
		<style>\
			* {\
				 background-color:#01ff2f;\
			}\
			.main, .main li {\
				background-color:#0301fa;\
				color: #eeee50;\
				font-weight: bold;\
				font-size: 1.2em;\
			}\
			.default, .default li {\
				background-color:#0301fa;\
				font-size: 0.833em;\
			}\
		</style>\
		</head>\
		<body>\
		<main>\
		<h1>Taliban Beliefs</h1>\
		<ul class='main'>\
		<li>Suicide bombings as a military strategy</li>\
		<li>Improvised explosives used</li>\
		<li>Banned: <ul class='default'>\
			<li>telivision</li>\
			<li>music</li>\
			<li>movies</li>\
		</ul></li>\
		<li>Leaving Islam considered a death crime</li>\
		</ul>\
		<ul>\
			<li><small><a href='https://www.institute.global/insights/geopolitics-and-security/why-do-people-afghanistan-object-taliban-rule'>institute.global</a></small></li>\
			<li><small><a href='https://www.britannica.com/topic/Taliban'>britannica.com</a></small></li>\
			<li><small><a href='https://study.com/learn/lesson/taliban-history-formation-ideology.html'>study.com</a></small></li>\
			<li><small><a href='https://www.hrw.org/news/2022/08/24/testimony-us-commission-international-religious-freedom'>hrw.com</a></small></li>\
		</ul>\
		</main>\
		</body>\
		</html>\
		");
	list.concat(fact);
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function factRand() {
	let random = getRandomInt(4);
	let fact;
	switch(random) {
		case 0: fact="they used suicide bombings";break;
		case 1: fact="they used improvised explosives";break;
		case 2: fact="they banned telivision, music, and movies";break;
		case 3: fact="they thought leaving Islam was a death crime";break;
	}
	alert(fact);
}
function paragraphPopup() {
	let paragraph = window.open("about:blank", "_blank","height="+screen.height+",width="+(screen.width/2));
	paragraph.document.write("\
		<!DOCTYPE html>\
		<html id='all'>\
		<head>\
		<title>Taliban Beliefs</title>\
		<style>\
			* {\
				 background-color:#01ff2f;\
			}\
			p {\
				font-size: 1.2em;\
			}\
			q, i {\
				background-color:white;\
			}\
			.q {\
				text-decoration:none;\
				color:black;\
				cursor:copy;\
			}\
		</style>\
		</head>\
		<body>\
		<main>\
		<h1>Taliban Beliefs</h1>\
		<a href='https://study.com/learn/lesson/taliban-history-formation-ideology.html#faqs' class='q'>\
		<p><q>The Taliban is a political and religious power that believes in the strict interpretation and implementation of Islamic law. The Taliban wants to create an Islamic state.</q><i> -study.com</i>\
		</a><br>\
		The Taliban are a terrifying Islamic group. They believed that suicide bombings were a good military strategy. Improvised explosives were used too. They banned telivision, music, and movies, to keep everyone Islamic. If someone left Islam, the Taliban thought it was a death crime. We need to make sure they don't come back into power.</p>\
		<ul>\
			<li><small><a href='https://www.institute.global/insights/geopolitics-and-security/why-do-people-afghanistan-object-taliban-rule'>institute.global</a></small></li>\
			<li><small><a href='https://www.britannica.com/topic/Taliban'>britannica.com</a></small></li>\
			<li><small><a href='https://study.com/learn/lesson/taliban-history-formation-ideology.html'>study.com</a></small></li>\
			<li><small><a href='https://www.hrw.org/news/2022/08/24/testimony-us-commission-international-religious-freedom'>hrw.com</a></small></li>\
		</ul>\
		</main>\
		</body>\
		</html>\
		");
	list.concat(paragraph);
}
function mailto() {
	window.open("mailto:matth_brewe756%40ahschools.us?subject=Question&body="+
					encodeURIComponent((document.getElementById("question").value)),
		 "_blank",
		"height="+screen.height+",width="+screen.width);
}

const buttons = document.getElementsByTagName("button");

Array.from(buttons).forEach(function(button) {
    button.addEventListener("click", function() {
        this.style.borderStyle = "inset";
        let that = this;
        setTimeout(() => { that.style.borderStyle = "outset"; }, 500);
    });
});