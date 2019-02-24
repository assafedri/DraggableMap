/*  
Dragdealer extension settings
for more information go to https://skidding.github.io/dragdealer/ 
*/ 
var canvasMask = new Dragdealer('canvas-mask', {
	x: 0.675,
	y: 0,
	vertical: true,
	speed: 0.1,
	loose: true,
	requestAnimationFrame: true
});

/*
Pin Data Array
"popup"   - popup window location ontop of the entire map. the array contains axis-x value and axis-y. possible values are anything between 0 and 1.
"content" - html content of each popup
*/
var data = [{
	title: 'ייעוץ אצל רואה חשבון, יועץ מס או יועץ עסקי',
	popup:  [0.55,0],
	mobile: [0.68,0],
	content: `
		<h2>קודם כל מתייעצים</h2>
		<p>הצעד הראשון בדרך אל העסק הוא ייעוץ עם רואה חשבון, יועץ מס או יועץ עסקי.</p>
		<h3>למה זה חשוב?</h3>
		<p>הם יידעו לתת לך ייעוץ לגבי התכנון הפיננסי של העסק, חובות הדיווח והתשלומים, ולהדריך אותך גם בנוגע לפתיחת התיקים ברשויות ולהתנהלות הכספית השוטפת של העסק.</p>
		<h3>מה יתרום לך הייעוץ?</h3>
		<ul>
			<li>הבנה של כל חובות ניהול הכספים והדיווח החלות עליך בהתאם לסוג העסק שלך</li>
			<li>תכנון ראוי של בניית העסק, כך שתשלום המיסים שיוטל עליך יהיה נמוך ככל האפשר</li>
			<li>הבנה של משמעויות והבדלים בין התנהלות כלכלית עצמאית ובין התנהלות באמצעות רואה חשבון</li>
		</ul>
		<h3>ומה עוד חשוב לבדוק?</h3>
		<ul>
			<li>
				אם העסק שלך יהיה חברה בע"מ, יש להתייעץ עם עורך דין שינחה אותך כיצד לרשום חברה אצל
				<a href="http://sba.economy.gov.il/Initiators/Activities/Pages/In9.aspx" target="_blank">רשם החברות</a>.
			</li>
			<li>
				תכננת להעסיק עובדים? חשוב לבדוק מה האחריות והחובות שלך כלפיהם, פרטים ב
				<a href="http://sba.economy.gov.il/activebusiness/employees/pages/employment.aspx" target="_blank">אתר משרד הכלכלה והתעשייה</a>.
			</li>
		</ul>
	`	
},{
	title: 'תיק במע"מ',
	popup:  [0.3,0.2],
	mobile: [0.50,0.2],
	content: `
		<h2>מה עם המע"מ?</h2>
		<p>כל עסק חייב ברישום ודיווח מע"מ (מס ערך מוסף), המוטל על עסקאות לפי אחוז מגובהן. סוג חובת תשלום המע"מ (עוסק פטור, עוסק מורשה) נקבע לפי תחום העיסוק וההכנסה הצפויה ולפיו עליך לדווח ולשלם מקדמות. בסוף השנה יתקזזו המקדמות בחישוב המע"מ השנתי.</p>
		<h3>איך להירשם במע"מ?</h3>
		<p>לגשת אל משרדי המע"מ באיזור בו ממוקם העסק. לא לשכוח תעודת זהות, ואם יש- גם חוזה קנייה/ שכירות של העסק, ומסמכים נוספים המעידים על קיומו. בסיום, יועברו אליך תעודת עוסק פטור או מורשה ושוברים לדיווח מע"מ.</p>
		<p>
			לפרטים נוספים:
			<a href="http://sba.economy.gov.il/Initiators/Activities/Pages/In7.aspx" target="_blank">משרד הכלכלה והתעשייה</a>,
			מדריך מע"מ של <a href="https://taxes.gov.il/Vat/Pages/Guides/guidenewbusiness.aspx" target="_blank">רשות המיסים</a>,
			<a href="https://taxes.gov.il/Services/pages/dochotMaam.aspx/" target="_blank">אתר תשלום מע"מ רשות המיסים</a>
		</p>
	`	
},{
	title: 'תיק במס הכנסה',
	popup:  [0.54,0.33],
	mobile: [0.77,0.36],
	content: `
		<h2>הצעד הבא: מס הכנסה</h2>
		<p>כל הכנסה חייבת בדיווח למס הכנסה גם אם אין עליה חיוב בתשלום מס, לכן חשוב לנהל רישום של כל ההכנסות וההוצאות שלך, עם תחילת הפעילות העסקית.</p>
		<h3>איך לפתוח תיק במס הכנסה?</h3>
		<p>לשלוח את פרטיך ואת פרטי העסק המלאים בדואר רשום לפקיד השומה, או לגשת אל משרדי מס הכנסה באיזור שלך. לא לשכוח תעודת זהות.</p>
		<p>פקיד השומה יעביר אליך פנקס מקדמות ועליך להתחיל בתשלומי מס הכנסה על פיו, בהתאם להכנסות הצפויות של העסק.</p>
		<p>
			לפרטים נוספים:
			<a href="http://sba.economy.gov.il/Taxation/Pages/Zt9.aspx" target="_blank">משרד הכלכלה והתעשייה</a>,
			<a href="https://taxes.gov.il/IncomeTax/Pages/IncomeTaxGuides/IncomeTaxGuideOpenBusiness.aspx" target="_blank">רשות המיסים</a>,
			<a href="https://taxes.gov.il/Services/pages/mikdamotMH.aspx" target="_blank">תשלום מקדמות באתר רשות המיסים</a>.
		</p>
	`		
},{
	title: 'רישום כעוסק עצמאי במוסד לביטוח לאומי',
	popup:  [0,0.5],
	mobile: [0.26,0.51],
	content:  `
		<h2>הדרך לעצמאות עוברת בביטוח לאומי</h2>
		<p>כל העצמאיים חייבים ברישום והסדרת תשלום דמי הביטוח הלאומי. בזמן פתיחת התיק, יבקשו ממך להעריך את הכנסתך הצפויה. מתקשה להעריך? אפשר להצהיר על הסכום המינימלי האפשרי. בסוף השנה יחושב הסכום השנתי לפי ההכנסות בפועל, והיתרה שלך לתשלום תקוזז בהתאם.</p>
		<h3>איך לפתוח תיק בביטוח הלאומי?</h3>
		<p>לגשת אל סניף ביטוח לאומי הקרוב למקום מגוריך, ולא לשכוח תעודת זהות.</p>
		<p>לאחר הרישום, יועבר אליך פנקס מקדמות לתשלום חודשי של דמי הביטוח ויהיה עליך להתחיל להעביר תשלומים באמצעותו.</p>
		<p>
			לפרטים נוספים:
			<a href="http://sba.economy.gov.il/Initiators/Activities/Pages/In8.aspx" target="_blank">משרד הכלכלה והתעשייה</a>,
			<a href="https://www.btl.gov.il/Insurance/National%20Insurance/type_list/Self_Employed/Pages/default.aspx" target="_blank">המוסד לביטוח לאומי</a>,
			<a href="https://b2b.btl.gov.il/BTL.ILG.Payments/GalashInfo.aspx" target="_blank">אתר התשלומים של ביטוח לאומי</a>.
		</p>
	`				
},{
	title: 'פתיחת חשבון בנק נפרד לעסק',
	popup:  [0.51,0.7],
	mobile: [0.62,0.65],
	content: `
		<h2>פרטי, עסקי, ומה שביניהם</h2>
		<p>התנהלות כלכלית נכונה כוללת הפרדה בין חשבון הבנק האישי ובין החשבון של העסק.</p>
		<h3>פתיחת חשבון- איך לעשות את זה נכון?</h3>
		<ul>
			<li>מה הצרכים שלך? הגדרת הצרכים היא הבסיס לבחירת הבנק שיציע את התנאים הטובים ביותר.</li>
			<li>איך מוגדר החשבון שלך? חשבון שמוגדר כחשבון עסק קטן מזכה בהטבות בניהול החשבון.</li>
			<li>יש לך בעלות בחשבונות אחרים? הם עלולים להיפגע במקרה של חובות. אולי כדאי לוותר עליה</li>
			<li>אם ההכנסות שלך מאפשרות זאת, כדאי לשמור כסף בפיקדון ייעודי לתשלומי מס הכנסה, מע"מ וביטוח לאומי.</li>
		</ul>
		<h3>במעמד פתיחת החשבון</h3>
		<p>יש להציג תעודת זהות. במקרה של חברה בע"מ יש להציג תקנון חברה, תעודת רישום ופירוט זכויות חתימה מאושרים ע"י רואה חשבון או עורך דין.</p>
	`		
},{
	title: 'רשיון עסק, היתרים אחרים וביטוחים',
	popup:  [0.41,0.85],
	mobile: [0.57,0.83],
	content: `
		<h2>יש לך עסק עם רישיונות, היתרים וביטוחים?</h2>
		<p>עסקים מסוימים בישראל מחוייבים ברישיון עסק, רישיונות והיתרים שונים וביטוח אחריות מקצועית.</p>
		<h3>רישוי העסק</h3>
		<ul>
			<li>אגף רישוי עסקים ברשות המקומית יספק את המידע הדרוש לגבי רישיון עסק, רישיונות נוספים ועמידה בתקנים, וכן יבצע את הטיפול ברישיון בפועל.</li>
			<li>לא בכל מקום מותר לפתוח כל עסק. יש לוודא כי מיקום העסק תואם את החוק והתקנות העירוניות.</li>
		</ul>
		<h3>מה צריך לבדוק?</h3>
		<ul>
			<li>מה דורשות הרשויות? ניתן להגיש בקשה בתשלום ולקבל מידע מקדמי באגף לרישוי עסקים.</li>
			<li>כדאי לבדוק עם האיגוד המקצועי או עמיתים למקצוע, האם יש צורך בביטוח אחריות מקצועית ובביטוחים נוספים.</li>
		</ul>
		<p>
			לפרטים נוספים:
			<a href="http://sba.economy.gov.il/Licenses/Pages/letB.aspx" target="_blank">משרד הכלכלה והתעשייה</a>
		</p>
	`		
},{
	title: 'חיסכון פנסיוני',
	popup:   [0.07,1],
	mobile:  [0.32,1],
	content: `
		<h2>חיסכון פנסיוני: צעד בדרך לעתיד בטוח</h2>
		<p>החוק מחייב עצמאים בהפרשת מינימום לחיסכון פנסיוני להבטחת הכנסה בגיל פרישה, בהתאם להכנסה השנתית. ניתן וכדאי להפריש מעבר למינימום. ההפרשות יזכו אותך בהטבות בתשלום מס הכנסה וביטוח לאומי.</p>
		<p>אפשר לבחור ולשלב בין קרנות פנסיה, תכניות ביטוח או קופות גמל. כדאי לבדוק בין גופי הפנסיה השונים, ולבחור בזה שיעניק לך את התנאים הטובים ביותר.</p>
		<p>
			לפרטים נוספים:
			<a href="http://haotzarsheli.mof.gov.il/Subject/Pages/Mandatory-Pension-for-Self-Employed.aspx" target="_blank">משרד האוצר</a>
		</p>
	`
}];


/*
this function will create each pin html according to the data structure
*/
function createPinHtml(){
	var html = '';
	$.each(data, function(i){
		html+= `
			<div class="pin" id="pin` + (i+1) + `" data-pin="` + (i+1) + `">
        		<a href="#">
        			<img src="img/assets/pins/` + (i+1) + `.png">
        			<h1>` + data[i].title + `</h1>
        		</a>
        	</div>
		`;
	});
	$(html).appendTo('.handle');
	$('<div class="sideNav">' + html + '</div>').insertAfter('#canvas-mask');
}


/*
this function get the selected pin number (pinNum), gets the pin location values from the data array
and then navigate to that position, if "snapToPinPlace" is true - there won't be animation to that location
*/
function navigateToPin(pinNum, snapToPinPlace){
	var positions = $(window).width() < 768 ?  data[pinNum-1].mobile : data[pinNum-1].popup;
	var x = positions[0];
	var y = positions[1];
	
	canvasMask.setValue(x,y,snapToPinPlace);
}


/*
this function gets the pin's content from the data array, creates the popup html, 
and then send it to the function that decides where to place the html in the dome
*/
function preparePopupContent(pinNum){
	var pin = data[pinNum-1];
	var html = 	`
		<div class="popup">
			<a href="#" class="close"><span>X</span></a>
			<div class="pinHeader">
				<div class="pinImg"><img src="img/assets/pins/` + pinNum + `.png" /></div>
        		<div class="pinTitle"><h1>` + pin.title + `</h1></div>
			</div>
			<div class="content">
				<div class="inner">` + pin.content + `</div>
			</div>
		</div>';
	`;
	positionPopupOnDom(html, pinNum);
}

/*
this function decides where to place the popup html in the dome
for mobile - it'll be placed outside the draggable map in order to allow content scrolling
for desktop - it'll be placed right next to the pin in order to enavling tab key navigation
*/
function positionPopupOnDom(popupHtml, pinNum){
	$('.popup').remove();
	if( $(window).width() < 768){
		$(popupHtml).insertAfter('#canvas-mask');
	}else{
		$(popupHtml).insertAfter('#pin' + pinNum);
	}
}


/* 
this function get a pin html element, and then:
for mobile - adjusting the popup desing to mobile by adding class, disables the map dragging and pinning the popup to the top left corner of the page [x:0,y:0]
for others - set the absolute location of the popup related to pin location
then add the pin's same data-pin attribute to the pop up and displays the popup
*/

function showPopup(elm){
	if( $(window).width() < 768){		
		$('.popup').addClass('mobile-open');
		canvasMask.disable();
		canvasMask.setValue(0,0,true);
	}else{
		var pinNum = elm.data('pin');
		$('.popup').removeClass('mobile-open');
		canvasMask.enable();
		$('.popup').css({'top': elm.css('top'), 'right': elm.css('right')});
		navigateToPin(pinNum ,false)
	}
	$('.popup').attr('data-pin', elm.attr('data-pin'));
	$('.popup').addClass('show').show();
}

function getNextPin(pin){
	var next;
	next = (pin % data.length) + 1;
	return next;
}

/*
	--------------------------  Events ---------------------------------
*/	

$(function() {
    createPinHtml();
});

// Clicking On Pin
$(document).on('click', '.pin', function(e){
	e.preventDefault();
	var pinNum = $(this).data('pin');	
	preparePopupContent(pinNum);
	navigateToPin(pinNum, false);
	
	if ($(this).parents('.handle').length || $(window).width() >= 768) {
		showPopup($('#pin' + pinNum));
	}
});

// Closing Popup
$(document).on('click', '.close', function(){
	var pinNum = $(this).closest('.popup').data('pin');
	var nextPin = getNextPin(pinNum)
	$('.popup').removeClass('show').hide();
	navigateToPin(pinNum, true); 
	navigateToPin(nextPin, false); 
	canvasMask.enable();
});

// On Resize
$(window).resize(function(){
	var $popup = $('.popup')
	if($popup.hasClass('show')){
		var pinNum = $popup.data('pin');
		positionPopupOnDom($popup,pinNum);
		showPopup($('#pin' + pinNum));
	}	
});

// Mousewheel
$(document).on('mousewheel', function(event){
	var val = canvasMask.getValue();
	var direction = event.deltaY;
	var distanceY = 0.2;
	
	if(direction === 1){
		canvasMask.setValue(val[0], (val[1] - distanceY), false);
	}else if(direction === -1){
		canvasMask.setValue(val[0], (val[1] + distanceY), false);
	}
});

// Accability - Keyboard Navigation With Numbers
$(document).on('keyup', function(e){
	var pin;
	switch(e.which){
		case 49: case 97:  pin = 1; break;	
		case 50: case 98:  pin = 2; break;	
		case 51: case 99:  pin = 3; break;	
		case 52: case 100: pin = 4; break;	
		case 53: case 101: pin = 5; break;	
		case 54: case 102: pin = 6; break;	
		case 55: case 103: pin = 7; break;	
	}

	if(pin){
		$('#pin' + pin).trigger('click'); 
	}
});

// Accability - Pin focus
$('#canvas-mask').on('focus', '.pin', function(e){
	e.preventDefault();
	var pinId = $(this).data('pin');
	var pin = pinId-1;
	navigateToPin(pin);
});