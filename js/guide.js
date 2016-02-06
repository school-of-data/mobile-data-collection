
window.onload = function (){

	var i, a, b, c, d, itm1, itm2, itm3;
	var div, ul, li, span, img;
	var dbody = document.body,
	    mobile,
		land,
		port,
	    bt_event;

	var dur = 350, // animation
	    dur2 = 550, // layout
		delay,
	    in_out = "easeInOutQuart",
	    _out = "easeOutQuart",
	    in_ = "easeInQuart";

	var root = location.origin;
	var path = location.pathname.split('/');

	for(i=0; i<path.length-1; i++){
	    root += path[i] + '/';
	}

	console.log( "ROOT: " + root );

	// MOBILE

	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};

	if( isMobile.any() ){
	    mobile = true;
	    $(dbody).addClass('mobile');
	    bt_event = 'touchstart';
	}else{
	    mobile = false;
	    bt_event = 'click';
	}

	console.log( "MOBILE: " + mobile );

	var page_y,
		win_w,
		win_h;

	function scroll(to){

		console.log(to);

		$(document.body).stop().scrollTo( to, {
			duration: dur2,
			easing: in_out,
			axis:'y'
		});
	}

	//////////////////////////////// WINDOW ////////////////////////////////

	function resize(){
		win_w = $( window ).width();
		win_h = $( window ).height();
		if(mobile){
			if(win_w < win_h) {
				$(dbody).removeClass('land').addClass('port');
				land = false;
				port = true;
			} else {
				$(dbody).removeClass('port').addClass('land');
				land = true;
				port = false;
			}
		}
	}

	window.onresize = resize;
	resize();

	var colors = {

	}

	//////////////////////////////// OBJECTS ////////////////////////////////

	function get(id){ return document.getElementById(id)};
	function reg(id){ window[id] = get(id) }

	reg('header');
	reg('container');
	reg('menu');
	reg('courses_container');
	reg('courses_list');
	reg('footer');

	reg('menu1');
	reg('menu2');
	reg('menu3');

	$(menu1).on('click', function(){
		document.location.href = "index.html";
	})

	$(menu2).on('click', function(){
		document.location.href = "sneakpeak.html";
	})

	$(menu3).on('click', function(){
		document.location.href = "resources.html";
	})

	//////////////////////////////// OBJECTS ////////////////////////////////


	var roles = [
		null,
		{
			hex:'#e8c453',
			hover:'#f2c549',
			title: "Project Manager",
			text: "I am responsible for overall management of the survey. I define the project goal and I’m responsible for all the major decisions that need to be taken during the project. I’m also responsible for communication amongst the survey team, to make sure that everybody is on the same page. I report the project status, maintain a record of lessons learned and lead retrospectives."
		},
		{
			hex:'#a3c66b',
			hover:'#aecc66',
			title: "Survey Designer",
			text: "My mission is to construct questions that elicit just the right data from the survey’s respondents. I have to make sure questions are not ambiguous and are as straightforward as possible, encompassing complexity and subtleties in a way the respondents fully understand. My role also has a large visual design element: I ensure the survey looks appealing and is engaging to complete."
		},
		{
			hex:'#f26649',
			hover:'#ff6f5c',
			title: "Trainer",
			text: "I run the training sessions that will help interviewers, or enumerators, learn the skills they need to perform a successful data collection with participants. Even if the survey is well designed, the quality of the data collected through the interviews depends ultimately on the data collection skills of the enumerators. I make sure they get acquainted with the mobile devices and the mobile app used to conduct the survey."
		},
		{
			hex:'#5ebcc2',
			hover:'#63c4c6',
			title: "Data Manager",
			text: "I work with the Survey Designer to ensure the questionnaire used in the interviews will generate relevant data for the analysis phase. I also create variable mappings and define the format in which output is generated. It is my responsibility to track the progress of data collection and to communicate it to the rest of the team."
		}
	];

	var courses =  [ null,
		{
			module:1,
			title: "Introduction to mobile data collection and ODK",
			text: "An introduction to the challenges of mobile data collection and the tool that will be featured for this course: Open Data Kit",
			url: "http://schoolofdata.org/2015/11/13/course-outline-mobile-data-collection/"
		},
		{
			module:1,
			title: "Creating your ODK Data Collection Form",
			text: "This module will introduce you to the initial setup of your spreadsheet for use with Open Data Kit",
			url: "http://schoolofdata.org/creating-your-odk-data-collection-form-excel/"
		},
		{
			module:1,
			title: "Uploading and Testing your forms using Kobo Toolbox",
			text: "This module will help you navigate the interface of Kobo Toolbox, a variation of Open Data Kit, to prepare forms before starting your survey",
			url: "http://schoolofdata.org/uploading-and-testing-your-forms-using-kobo-toolbox/"
		},
		{
			module:1,
			title: "Setting up your Kobo Toolbox form on your Android device",
			text: "Kobo Toolbox provides a good platform to collect data using two devices: your laptop and your mobile devices e.g. smartphones and tablets. On this module, we will talk about how to use your Kobo Collect forms on your devices",
			url: "http://schoolofdata.org/28684-2/"
		},
		{
			module:1,
			title: "Managing your Kobo Toolbox database",
			text: "With this last module about Kobo Toolbox and mobile data collection, we will talk about how to manage your Kobo Toolbox database using the online platform",
			url: "http://schoolofdata.org/managing-your-kobo-toolbox-database/"
		},
		{
			module:2,
			title: "Learning to use Kobo Toolbox",
			text: "Kobo Toolbox is a suite of tools for field data collection, usable from your smartphone or in the Web. Learn the basics of this tool in this presentation by Sheena Carmel Opulencia.",
			url:[
				["the video","https://www.youtube.com/watch?v=qD3oCRRtLXA" ],
				["the skillshare", "http://fr.slideshare.net/SchoolofData/skillshare-using-kobo-toolbox-for-mobile-data-collection" ]
			],
		}

	];


	var role_cell;
	var role_container;
	var role_left;
	var role_right;

	if(page == 'sneakpeak'){

		for( i = 1; i<roles.length; i++ ){

			d = roles[i];

			role_cell = get('role' + i);
			d.cell = role_cell;
			role_cell.d = d;
			$(role_cell)
				.css({ backgroundColor: d.hex })
				.on('click', function(){
					if(this.plus){
						this.plus = false;
						$(this.cont).animate({ left: '0'}, dur2, in_out);
					}else{
						this.plus = true;
						$(this.cont).animate({ left: '-100%'}, dur2, in_out);
					}
					scroll(this.cont);
				})
				.on('mouseover', function(){
					$(this.cont).css({ backgroundColor: this.d.hover })
				})
				.on('mouseout', function(){
					$(this.cont).css({ backgroundColor: this.d.hex })
				})

			role_cell.plus = false;

			role_container = document.createElement('div');
			$(role_container)
				.addClass('role_container')
			role_cell.appendChild(role_container);
			role_cell.cont = role_container;

			// left

			role_left = document.createElement('div');
			$(role_left)
				.addClass('role_left')
				.css({ backgroundImage:'url(img/role_left' + i + '.png)'});
			role_container.appendChild(role_left);

			img = new Image();
				$(img).addClass('go')
			img.src = 'img/go.png';
			role_left.appendChild(img);

			div = document.createElement('div');
			$(div)
				.addClass('iam')
				.html("I am the...")
			role_left.appendChild(div);

			div = document.createElement('div');
			$(div)
				.addClass('title')
				.html(d.title)
			role_left.appendChild(div);

			// right
			role_right = document.createElement('div');
			$(role_right)
				.addClass('role_right')
				.css({ backgroundImage:'url(img/role_right' + i + '.png)'});
			role_container.appendChild(role_right);

			div = document.createElement('div');
			$(div)
				.addClass('quote')
			role_right.appendChild(div);

			div2 = document.createElement('div');
			$(div2)
				.addClass('quote_tx')
				.html('&quot;' + d.text + '&quot;' )
			div.appendChild(div2);

			img = new Image();
				$(img).addClass('back')
			img.src = 'img/back.png';
			role_right.appendChild(img);

			//menu

			li = document.createElement('li');
			li.d = d;
			$(li)
				.addClass('menu_bt')
				.css( {backgroundImage:'url(img/head'+ i +'.png)'})
				.on(bt_event, function(){
					scroll( this.d.cell );
				});

			menu.appendChild(li);

		}
	}


	/* download BT */

	if( page == 'sneakpeak' || page == 'guide' ){

		reg('download_bt');

		$(download_bt).on('click', function(){
			window.open('mobile_data_collection.pdf');
		});

	}


	/* COURSES */

	if(page == 'resourses'){

		for( i = 1; i<courses.length; i++ ){

			d = courses[i];

			li = document.createElement('li');
			li.d = d;
			$(li)
				.addClass('course')
				.addClass('module' + d.module);

			if(d.module == 2){

				div = document.createElement('div');
				$(div)
					.addClass('module2_bts')
				li.appendChild(div);

				for (a in d.url){
					itm1 = document.createElement('div');
					itm1.url = d.url[a][1];
					$(itm1)
						.addClass('module2_bt')
						.html(d.url[a][0])
						.on('click', function(){
								window.open( this.url);
						});
					div.appendChild(itm1)
				}
			}else{
				$(li).on('click', function(){
						window.open( this.d.url);
				});
			}

			div = document.createElement('div');
			$(div)
				.addClass('course_title')
				.html(d.title)
			li.appendChild(div);

			div = document.createElement('div');
			$(div)
				.addClass('course_desc')
				.html(d.text)
			li.appendChild(div);

			img = new Image();
			img.src = 'img/course'+i+'.png';
			li.appendChild(img);

			courses_list.appendChild(li);


		}
	}




	/**/
}
