/*function setTheme(choice)
{
    var divs = document.getElementsByClassName("pageViews");
    
    for(i = 0; i < divs.length; i++)
        $(divs[i]).attr("data-theme", choice);
    
    document.getElementById("mainPage").setAttribute("data-theme", "b");
    //document.getElementById("mainPage").innerHTML = "shit dawg!";
    
    $("#mainPage")
            .removeClass(themes.split(" ").join(" " + themeClass + "-"))
            .addClass(themeClass + "-" + theme)
            .attr("data-theme", theme);
    alert("Hit!");

}*/

$(document).on('click', '#results a', function (event) { //for regular event listeners, we put the element we're interested in inside the parenthesis. Now, we put document, and we put a container of the element were interested in, follow by the character a, as an argument in the .on binding function. I don't know what this does yet, but it has to do with a dynamic element, we have to do this because we're adding content on the fly based on input conditionns, therefore, we can't do the normal methods that work for static content and this approach is required.
	event.preventDefault();
    var href = $(this)[0].href.match((/\?.*$/))[0];
	var idNum = href.replace(/^\?title=/,'');
	//alert(idNum);
	printPage(idNum);
});

var themeValue = "a";

$.mobile.changeGlobalTheme = function(theme)
{
    // These themes will be cleared, add more
    // swatch letters as needed.
    var themes = " a b c d e";

    // Updates the theme for all elements that match the
    // CSS selector with the specified theme class.
    function setTheme(cssSelector, themeClass, theme)
    {
        $(cssSelector)
            .removeClass(themes.split(" ").join(" " + themeClass + "-"))
            .addClass(themeClass + "-" + theme)
            .attr("data-theme", theme);
    }

    // Add more selectors/theme classes as needed.
    setTheme(".ui-mobile-viewport", "ui-overlay", theme);
    setTheme("[data-role='page']", "ui-body", theme);
    //setTheme("[data-role='panel']", "ui-panel-page-container", theme);
    setTheme("[data-role='header']", "ui-bar", theme);
    setTheme("[data-role='listview'] > li", "ui-bar", theme);
    setTheme(".ui-btn", "ui-btn-up", theme);
    setTheme(".ui-btn", "ui-btn-hover", theme);
	if (theme == "b")
    	document.getElementById("sortFilterPanel").style.backgroundColor = "black";
	else if(theme == "a")
		document.getElementById("sortFilterPanel").style.backgroundColor = "silver";
	themeValue = theme;
};

function printContact(transObj, results)
{
	var htmlStr = '';
	var id = results.rows.item(0).ID;
    var fName = (results.rows.item(0).FirstName.length ? results.rows.item(0).FirstName : "Not Specified");
    var lName = (results.rows.item(0).LastName.length ? results.rows.item(0).LastName : "Not Specified");
    var gender = function(){
        if(results.rows.item(0).Gender == true)
            return "Male";
		else if (results.rows.item(0).Gender == false)
        	return "Female";
		return "Not Specified";
    }();
    var dob = (results.rows.item(0).DOB.length ? results.rows.item(0).DOB : "Not Specified");
    var occupation = (results.rows.item(0).Occupation.length ? results.rows.item(0).Occupation : "Not Specified");
    var company = (results.rows.item(0).Company.length ? results.rows.item(0).Company : "Not Specified");
    var cellphone = (results.rows.item(0).CellPhone.length ? results.rows.item(0).CellPhone : "Not Specified");
    var workphone = (results.rows.item(0).WorkPhone.length ? results.rows.item(0).WorkPhone : "Not Specified");
    var homephone = (results.rows.item(0).HomePhone.length ? results.rows.item(0).HomePhone : "Not Specified");
    var email = (results.rows.item(0).Email.length ? results.rows.item(0).Email : "Not Specified");
    var homeaddress = (results.rows.item(0).HomeAddress.length ? results.rows.item(0).HomeAddress : "Not Specified");
    var description = (results.rows.item(0).Description.length ? results.rows.item(0).Description : "Not Specified");
    var timeadded = (results.rows.item(0).TimeAdded.length ? results.rows.item(0).TimeAdded : "Not Specified");
	
	/*var contactObj = [		
		fName,lName,gender,dob,occupation,company,cellphone,workphone,homephone,email,homeaddress,description,timeadded
	];*/
	
	sessionStorage.setItem('id',id);
	sessionStorage.setItem('fName',fName);
	sessionStorage.setItem('lName',lName);
	sessionStorage.setItem('gender',gender);
	sessionStorage.setItem('dob',dob);
	sessionStorage.setItem('occupation',occupation);
	sessionStorage.setItem('company',company);
	sessionStorage.setItem('cellphone',cellphone);
	sessionStorage.setItem('workphone',workphone);
	sessionStorage.setItem('homephone',homephone);
	sessionStorage.setItem('email',email);
	sessionStorage.setItem('homeaddress',homeaddress);
	sessionStorage.setItem('description',description);
	sessionStorage.setItem('timeadded',timeadded);
	
	window.location = "#contactPage";
	
	//alert(fName + ' ' + lName + ' ' + gender + ' ' + dob + ' ' + occupation + ' ' + company + ' ' + cellphone + ' ' + workphone + ' ' + homephone + ' ' + email + ' ' + homeaddress + ' ' + description + ' ' + timeadded);
	
	/*var page = '<div data-role="page" id="contactPage" data-url="info" data-add-back-btn="true" data-theme="' + themeValue + '">' +
		'<header data-role="header">' +
			'<h3>Biztact</h3>' +
		'</header>' +
		'<section data-role="content">' +
			'<h3 style="margin-bottom:2px">' + fName + ' ' + lName + ' ' + id + '</h3>' +
			'<p style="margin-bottom:2px"><b>Personal:</b></p>' +
			'<div style="border:solid; border-width:1px; margin-left:10px;margin-right:10px; background-color:darkgrey">' +
				'<table style="width:100%">' +
					'<tr style="background-color:whitesmoke">' +
							'<td style="width:35%"><p style="margin-left:6px">Date Added:</p></td>' +
							'<td><p style="margin-left:6px">' + timeadded + '</p></td>' +
					'</tr>' +
					'<tr style="background-color:gainsboro">' +
							'<td style="width:35%"><p style="margin-left:6px">Gender</p></td>' +
							'<td><p style="margin-left:6px">' + gender + '</p></td>' +
					'</tr>' +
					'<tr style="background-color:whitesmoke">' +
							'<td><p style="margin-left:6px">DOB</p></td>' +
							'<td><p style="margin-left:6px">' + dob + '</p></td>' +
					'</tr>' +
					'<tr style="background-color:gainsboro">' +
							'<td><p style="margin-left:6px">Occupation</p></td>' +
							'<td><p style="margin-left:6px">' + occupation + '</p></td>' +		
					'</tr>' +
					'<tr style="background-color:whitesmoke ">' +
							'<td><p style="margin-left:6px">Company</p></td>' +
							'<td><p style="margin-left:6px">' + company + '</p></td>' +	
					'</tr>' +
				'</table>' +
			'</div>' +
			'<p style="margin-bottom:2px"><b>Contact:</b></p>' +
			'<p style="margin-bottom:0;margin-left:10px; margin-top:0; font-size:9pt">Phone</p>' +
			'<div style="border:solid; border-width:1px; margin-left:10px; margin-right:10px; background-color:darkgrey">' +
				'<table style="width:100%">' +
					'<tr style="background-color:gainsboro">' +
							'<td style="width:35%"><p style="margin-left:6px">Cell Phone:</p></td>' +
							'<td><p style="margin-left:6px">' + cellphone.substring(0,3) + '-' + cellphone.substring(3,6) + '-' + cellphone.substring(6,10) + '</p></td>' +
					'</tr>' +
					'<tr style="background-color:whitesmoke">' +
							'<td style="width:35%"><p style="margin-left:6px">Home Phone</p></td>' +
							'<td><p style="margin-left:6px">' + homephone.substring(0,3) + '-' + homephone.substring(3,6) + '-' + homephone.substring(6,10) + '</p></td>' +	
				'</tr>' +
					'<tr style="background-color:gainsboro">' +
							'<td><p style="margin-left:6px">Work Phone</p></td>' +
							'<td><p style="margin-left:6px">' + workphone.substring(0,3) + '-' + workphone.substring(3,6) + '-' + workphone.substring(6,10) + '</p></td>' +		
					'</tr>' +
				'</table>' +
			'</div>' +
			'<br>' +
			'<p style="margin-bottom:0;margin-left:10px; margin-top:0; font-size:9pt">Email</p>' +
			'<div style="background-color:whitesmoke; border:solid; border-width:1px; margin-left:10px; margin-right:10px;">' +
				'<p style="margin-left:6px">' + email + '</p>' +
			'</div>' +
			'<br>' +
			'<p style="margin-bottom:0;margin-left:10px; margin-top:0; font-size:9pt">Home Address</p>' +
			'<div style="border:solid; border-width:1px; margin-left:10px; margin-right:10px; background-color:gainsboro">' +
				'<p style="margin-left:6px">' + homeaddress + '</p>' +
			'</div>' +
			'<br>' +
			'<p style="margin-bottom:0;margin-left:10px; margin-top:0; font-size:9pt">Description</p>' +
			'<div style="border:solid; border-width:1px; margin-left:10px; margin-right:10px; background-color:whitesmoke">' +
				'<p style="margin-left:6px">' + description + '</p>' +
			'</div>' +
		'</section>' +

		'<footer data-role="footer" data-position="fixed">' +
			'<div data-role="navbar">' +
				'<ul>' +
					'<li><a href="#addContactPage" id="modifyContact" data-icon="user" style="font-size:8pt">Modify Contact</a></li>' +
					'<li><a href="#" id="deleteContact" data-icon="delete" style="font-size:8pt">Delete Contact</a></li>' +
				'</ul>' +
					'<script>' +
						//'$("#modifyContact").on("click",function(event){' +
							//'alert("Hello!");' +
						//'});' +
						'$(document).one("click", "#modifyContact", function(e){ '+
							//'e.preventDefault();' +
							'$(document).off("click", "#backPane");' +
							'$(document).off("click", "#deleteContact");' +
							//'modifyContact();' +
							//'window.location = "index.html#addContactpage";' +
						'});' +
						'$(document).one("click", "#deleteContact", function(event){' +
							'event.preventDefault();' +
							'deleteContact(' + id + ');' +
							'$(document).off("click", "#modifyContact");' +
							'$(document).off("click", "#backPane");' +
							'window.location = "index.html#libraryPage";' +
						'});' +
					'</script>' +
			'</div>' +
			'<div style="margin:0; bottom:0">' +
				'<div style="width:60px; float:left; margin:0; margin-left:4px">' +
					'<a href="#"><img src="img/back.png" id="backPane" style="width:100%; margin:0"></a>' +
					'<script>' +
						'$(document).one("click", "#backPane", function(event){' +
							'event.preventDefault();' +
							'alert("hello");' +
							'$(document).off("click", "#modifyContact");' +
							'$(document).off("click", "#deleteContact");' +
							'window.location = "index.html#libraryPage";' +
						'});' +
					'</script>' +
					'<p style="font-size:8pt ;text-align:center; margin-top:0; margin-bottom:0">Back</p>' +
				'</div>' +*/
				/*'<div style="width:60px; float:right; margin:0; margin-right:4px">' +
					'<a href="#settingsPage"><img src="img/settings.png" id="settingsPane" style="width:100%; margin:0"></a>' +
					'<p style="font-size:8pt; text-align:center; margin-top:0; margin-bottom:0">Settings</p>' +
				'</div>' +*/
			/*'</div>' +
			'<h3 style="display:block; background-color:orange; width:100%; margin:0">Biztact</h3>' +
		'</footer>' +
	'</div>';

			
    var newPage = $(page);
	
	newPage.html(function(index, old){ //I have absolutely no idea what this does. Adds a property to newPage jquery object.
                return old //Simply returningg... some variable that was never defined.
                    .replace(/ID/g, id) //replaces text inside matching "ID" with value inside id.
            }).appendTo($.mobile.pageContainer); //No idea!!

    $.mobile.changePage(newPage);*/ //Change to this newPage. Well, at least I tried to understand it. But it's super awesome!
}

/*function modifyContact()
{
	alert(sessionStorage.getItem('fName') + ' ' +
	sessionStorage.getItem('lName') + ' ' +
	sessionStorage.getItem('gender') + ' ' +
	sessionStorage.getItem('dob') + ' ' +
	sessionStorage.getItem('occupation') + ' ' +
	sessionStorage.getItem('company') + ' ' +
	sessionStorage.getItem('cellphone') + ' ' +
	sessionStorage.getItem('workphone') + ' ' +
	sessionStorage.getItem('homephone') + ' ' +
	sessionStorage.getItem('email') + ' ' +
	sessionStorage.getItem('homeaddress') + ' ' +
	sessionStorage.getItem('description') + ' ' +
	sessionStorage.getItem('timeadded'));
	
	var page = '<div data-role="page" id="addContactPageMod" data-url="modify' + sessionStorage.getItem('id') + '" data-theme="' + themeValue + '">' +
			'<header data-role="header">' +
				'<h3>Biztact</h3>' +
			'</header>' +
			'<section data-role="section">' +
				'<h3 style="text-align:center; margin-bottom:0">Modify Contact</h3>' +
				'<div style="border:1px; padding:2%; padding-top:0">' +
				'<form id="check-user" class="ui-body ui-body-a ui-corner-all">' +
					'<fieldset>' +
						'<div data-role="fieldcontain">' +
							'<label style="font-size:10pt" for="">First Name: </label>' +
							'<input type="text" id="firstNameMOD" placeholder="First Name" value="' + sessionStorage.getItem('fName') + '">' +
						'</div>' +
						'<div data-role="fieldcontain">' +
							'<label style="font-size:10pt" for="">Last Name: </label>' +
							'<input type="text" id="lastNameMOD" placeholder="Last Name" value="' + sessionStorage.getItem('lName') + '">' +
						'</div>' +
                        '<div style="height:125px">' +
                            '<div style="width:100px; height:125px; float:left">' +
                                '<fieldset data-role="controlgroup">' +
                                '<legend style="font-size:10pt; text-align:center">Gender:</legend>';
								if( sessionStorage.getItem('gender') == "Male" )
								{
                            page += '<label for="maleMOD" style="font-size:10pt">Male</label>' +
                                    '<input type="radio" name="gender" id="male" value="male" checked>' +
                                    '<label for="femaleMOD" style="font-size:10pt">Female</label>' +
                                    '<input type="radio" name="gender" id="female" value="female">';
								}
								else if( sessionStorage.getItem('gender') == "Female" )
								{
							page += '<label for="maleMOD" style="font-size:10pt">Male</label>' +
                                    '<input type="radio" name="gender" id="maleMOD" value="male">' +
                                    '<label for="femaleMOD" style="font-size:10pt">Female</label>' +
                                    '<input type="radio" name="gender" id="femaleMOD" value="female" checked>';
								}
								else
								{
							page += '<label for="maleMOD" style="font-size:10pt">Male</label>' +
                                    '<input type="radio" name="gender" id="maleMOD" value="male">' +
                                    '<label for="femaleMOD" style="font-size:10pt">Female</label>' +
                                    '<input type="radio" name="gender" id="femaleMOD" value="female">';
								}
                  	page +=		'</fieldset>' +
                            '</div>' +
                            '<div style="float:left; height:125px">' +
                                '<div style="float:left; margin-top:6px; margin-left:10px; width:7.5em">' +
                                    '<label style="font-size:10pt" for="dateOfBirth">Date of Birth: </label>' +
                                    '<input size="2" type="date" id="dateOfBirthMOD" placeholder="MM/DD/YYYY" value="' + sessionStorage.getItem('dob') + '">' +
                                '</div>' +
                                '<div style="float:left; margin-top:6px; margin-left:10px; width:7.5em">' +
                                    '<label style="font-size:10pt" for="occupation">Ocupation: </label>' +
                                    '<input size="2" type="text" id="occupationMOD" value="' + sessionStorage.getItem('occupation') + '">' +
                                '</div>' +
                                '<div style="margin-left:10px; clear:both">' +
                                    '<label style="font-size:10pt" for="company">Company: </label>' +
                                    '<input size="2" type="text" id="companyMOD" value="' + sessionStorage.getItem('company') + '">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div style="margin-top:20px; clear:both">' +
                            '<div data-role="fieldcontain">' +
                                '<label style="font-size:10pt" for="">Cell Phone: </label>' +
                                '<input type="text" id="cellPhoneMOD" placeholder="Cell Phone" value="' + sessionStorage.getItem('cellphone') + '">' +
                            '</div>' +
                            '<div data-role="fieldcontain">' +
                                '<label style="font-size:10pt" for="">Work Phone: </label>' +
                                '<input type="text" id="workPhoneMOD" placeholder="Work Phone" value="' + sessionStorage.getItem('workphone') + '">' +
                            '</div>' +
                            '<div data-role="fieldcontain">' +
                                '<label style="font-size:10pt" for="">Home Phone: </label>' +
                                '<input type="text" id="homePhoneMOD" placeholder="Home Phone" value="' + sessionStorage.getItem('homephone') + '">'+ 
                            '</div>' +
                            '<div data-role="fieldcontain">' +
                                '<label style="font-size:10pt" for="">Email: </label>' +
                                '<input type="text" id="emailMOD" placeholder="Email" value="' + sessionStorage.getItem('email') + '">' +
                            '</div>' +
                            '<div data-role="fieldcontain">' +
                                '<label style="font-size:10pt" for="">Home Address: </label>' +
                                '<input type="text" id="homeAddressMOD" placeholder="Home Address" value="' + sessionStorage.getItem('homeaddress') + '">' +
                            '</div>' +
                            '<div data-role="fieldcontain">' +
                                '<label style="font-size:10pt" for="">Description: </label>' +
                                '<textarea rows="10" style="width:100%;" id="descriptionMOD" placeholder="">' + sessionStorage.getItem('description') + '</textarea>' +
                            '</div>' +
                        '</div>' +
					'</fieldset>' +
					'</div>' +
				'</form>' +
			'</section>' +
			'<footer data-role="footer" data-position="fixed">' +
				'<div data-role="navbar">' +
					'<ul>' +
						'<li><a href="#libraryPage" id="cancelModifyButton" data-icon="minus" style="font-size:8pt">Cancel</a></li>' +
						'<li><a href="#libraryPage" id="updateContactButton" data-icon="user" style="font-size:8pt">Update Contact</a></li>' +
					'</ul>' +
					'<script>' +
						'$(document).one("click", "#updateContactButton", function(event){' +
							'$(document).off("click", "#cancelModifyButton");' +
				            'updateContact();' +
						'});' +
						'$(document).one("click", "#cancelModifyButton", function(event){' +
								'alert($("#firstNameMOD").val());'+
								'alert(document.getElementById("lastNameMOD").getAttribute("value"));'+
								'alert($("#dateOfBirthMOD").val());'+
								'alert($("#occupationMOD").val());'+
								'alert($("#companyMOD").val());'+
								'alert($("#cellPhoneMOD").val());'+
								'alert($("#workPhoneMOD").val());'+
								'alert($("#homePhoneMOD").val());'+
								'alert(document.getElementById("emailMOD").getAttribute("value"));'+
								'alert($("#homeAddressMOD").val());'+
								'alert($("#descriptionMOD").val());'+
									'fetchInput();' +
							'$(document).off("click", "#updateContactButton");'+
                            //'var message = "All entered data will be lost!";' +
                            //'var title = "Are you sure you want to cancel adding this contact?";' +
                            //'confirm(message, confirmCallback, [], ["Ok", "Cancel"]);' +
						'});' +
					'</script>' +
				'</div>' +
			'</footer>' +
		'</div>';
	var newPage = $(page);
	newPage.html(function(index, old){ //I have absolutely no idea what this does. Adds a property to newPage jquery object.
               return old //Simply returningg... some variable that was never defined.
                   .replace(/ID/g, sessionStorage.getItem('id')) //replaces text inside matching "ID" with value inside id.
           }).appendTo($.mobile.pageContainer);
	$.mobile.changePage(newPage);
	
	document.getElementById("firstNameMOD").setAttribute('value',sessionStorage.getItem('fName'));
	document.getElementById("lastNameMOD").setAttribute('value',sessionStorage.getItem('lName'));
	document.getElementById("dateOfBirthMOD").setAttribute('value',sessionStorage.getItem('dob'));
	document.getElementById("occupationMOD").setAttribute('value',sessionStorage.getItem('occupation'));
	document.getElementById("companyMOD").setAttribute('value',sessionStorage.getItem('company'));
	document.getElementById("cellPhoneMOD").setAttribute('value',sessionStorage.getItem('cellphone'));
	document.getElementById("workPhoneMOD").setAttribute('value',sessionStorage.getItem('workphone'));
	document.getElementById("homePhoneMOD").setAttribute('value',sessionStorage.getItem('homephone'));
	document.getElementById("emailMOD").setAttribute('value',sessionStorage.getItem('email'));
	document.getElementById("homeAddressMOD").setAttribute('value',sessionStorage.getItem('homeaddress'));
	$("#descriptionMOD").val(sessionStorage.getItem('description'));
	//document.getElementById("descriptionMOD").setAttribute('value',sessionStorage.getItem('description'));
	
	//alert(htmlStr);
}*/

function confirmCallback(buttonIndex)
{
	if(buttonIndex == 1)
	{
	alert("what the");
	//window.location = "index.html#addContactPage";
	window.location = "index.html#libraryPage";
	//window.history.back();
	}
}

function addContact()
{
	theDB = window.openDatabase("contacts","1.0", "Contacts", 3*1024*1024);
	
	if(theDB)
	{
		theDB.transaction(createTable, txnError, txnSuccess);
	}
	else
	{
		alert("Failure on table creation.");
	}
}

function deleteContact(id)
{
	var sqlStr = "DELETE FROM CONTACTS WHERE ID = " + id + ";";
	//alert(sqlStr);
	
	/*alert(id.target + " == " + id.currentTarget);
	if (id.target !== id.currentTarget) {
        var clickedItem = id.target.id;
        alert("Hello " + clickedItem);
	}*/
	//transObj.executeSql(sqlStr, [], sqlSuccess, sqlError);
	theDB.transaction(function(transObj){
		transObj.executeSql(sqlStr, [], onUpdateSuccess, onUpdateFailure);
	}, txnError, txnSuccess);
	
}

function onUpdateSuccess()
{
	alert("Deleted successfully.")
}

function onUpdateFailure(transObj, err)
{
	alert("Could not delete user. " + err.message + " Code:" + err.code);
}

function txnError()
{
	alert("Transaction was a failure");
}

function txnSuccess()
{
	//alert("Transaction was successful.");
}

function createTable(transObj)
{
	var sqlStr = 'CREATE TABLE IF NOT EXISTS CONTACTS(ID INTEGER PRIMARY KEY AUTOINCREMENT,FirstName CHAR(20) NOT NULL,LastName CHAR(30),Gender BOOL,DOB DATE,Occupation CHAR(30),Company CHAR(30),CellPhone CHAR(10),WorkPhone CHAR(10),HomePhone CHAR(10),Email CHAR(50),HomeAddress TEXT,Description TEXT,TimeAdded DATETIME);';
	transObj.executeSql(sqlStr, [], sqlSuccess, sqlError);
	
	//transObj.executeSql("drop table if exists Contacts", function(){alert("error");}, function(){alert("success");}); USE THIS TO DELETE THE TABLE
}

function sqlSuccess()
{
	//alert("SQL Execution was successful.");
}

function sqlError(transObj, err)
{
	alert("SQL Execution failed. Error Message: " + err.message + "Error Code: " + err.code);
}

function insertContact(transObj)
{
	var gender = null;
	if($('#male').prop('checked'))
		gender = 1;
	if($('#female').prop('checked'))
		gender = 0;
	var d = new Date();
	var timeNow =
		d.getUTCFullYear() +"-"+
		("0" + (d.getUTCMonth()+1)).slice(-2) +"-"+
		("0" + d.getUTCDate()).slice(-2) + " " +
		("0" + d.getUTCHours()).slice(-2) + ":" +
		("0" + d.getUTCMinutes()).slice(-2) + ":" +
		("0" + d.getUTCSeconds()).slice(-2);
		
	var sqlStr = "INSERT INTO CONTACTS(FirstName,LastName,Gender,DOB,Occupation,Company,CellPhone,WorkPhone,HomePhone,Email,HomeAddress,Description,TimeAdded) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?);";
	theDB.transaction(function(transObj){
	transObj.executeSql(sqlStr, [$('#firstName').val(), $('#lastName').val(), gender, $('#dateOfBirth').val(), $('#occupation').val(), $('#company').val(), $('#cellPhone').val(), $('#workPhone').val(), $('#homePhone').val(), $('#email').val(), $('#homeAddress').val(), $('#description').val(), timeNow], sqlSuccess, sqlError);
	}, txnError, txnSuccess);
	alert("Added " + $('#firstName').val() + ' ' + $('#lastName').val() + " to Contacts.");
}

function updateContact(transObj)
{
	var gender = null;
	if($('#male').prop('checked'))
		gender = 1;
	if($('#female').prop('checked'))
		gender = 0;
	
	var sqlStr = "UPDATE CONTACTS SET " + "FirstName='" + $('#firstName').val() + "',LastName='" + $('#lastName').val() + "',Gender=" + gender + ",DOB='" + $('#dateOfBirth').val() + "',Occupation='" + $('#occupation').val() + "',Company='" + $('#company').val() + "',CellPhone='" + $('#cellPhone').val() + "',WorkPhone='" + $('#workPhone').val() + "',HomePhone='" + $('#homePhone').val() + "',Email='" + $('#email').val() + "',HomeAddress='" + $('#homeAddress').val() + "',Description='" + $('#description').val() + "' " +
	"WHERE ID=" + sessionStorage.getItem('id') + ";";
	
	if(gender == 1)
		gender = "Male";
	if(gender == 0)
		gender = "Female";
	
	//sessionStorage.setItem('id',id);
	sessionStorage.setItem('fName',$('#firstName').val());
	sessionStorage.setItem('lName',$('#lastName').val());
	sessionStorage.setItem('gender',gender);
	sessionStorage.setItem('dob',$('#dateOfBirth').val());
	sessionStorage.setItem('occupation',$('#occupation').val());
	sessionStorage.setItem('company',$('#company').val());
	sessionStorage.setItem('cellphone',$('#cellPhone').val());
	sessionStorage.setItem('workphone',$('#workPhone').val());
	sessionStorage.setItem('homephone',$('#homePhone').val());
	sessionStorage.setItem('email',$('#email').val());
	sessionStorage.setItem('homeaddress',$('#homeAddress').val());
	sessionStorage.setItem('description',$('#description').val());
	
	//alert(sqlStr);
	
	theDB.transaction(function(transObj){
		transObj.executeSql(sqlStr, [], function(){alert("Modified " + sessionStorage.getItem('fName') + " " + sessionStorage.getItem('lName') + " Successfully.");}, function(){alert("Failed to Modifify " + sessionStorage.getItem('fName') + " " + sessionStorage.getItem('lName') + ".");});
	}, txnError, txnSuccess);
}

function printPage(keyVal)
{
    sqlStr = "SELECT * FROM CONTACTS WHERE ID = " + keyVal;
	theDB.transaction(function(transObj){
		transObj.executeSql(sqlStr, [], printContact, onQueryFailure);
	}, txnError, txnSuccess);
}

function printParagraph()
{
	sqlStr = "SELECT * FROM Contacts ORDER BY TimeAdded DESC";
	theDB.transaction(function(transObj){
		transObj.executeSql(sqlStr, [], onQuerySuccess, onQueryFailure);
	}, txnError, txnSuccess);
}

function printList(keyVal)
{
	sqlStr = "SELECT * FROM Contacts ORDER BY " + keyVal + " ASC";
    switch(keyVal) {
        case "FirstName":
            theDB.transaction(function(transObj){
            transObj.executeSql(sqlStr, [], onQuerySuccessFirst, onQueryFailure);
            }, txnError, txnSuccess);
            break;
        case "LastName":
            theDB.transaction(function(transObj){
            transObj.executeSql(sqlStr, [], onQuerySuccessLast, onQueryFailure);
            }, txnError, txnSuccess);
            break;
        case "DOB":
            theDB.transaction(function(transObj){
            transObj.executeSql(sqlStr, [], onQuerySuccessDOB, onQueryFailure);
            }, txnError, txnSuccess);
            break;
        case "Occupation":
            theDB.transaction(function(transObj){
            transObj.executeSql(sqlStr, [], onQuerySuccessOccupation, onQueryFailure);
            }, txnError, txnSuccess);
            break;
        case "Company":
            theDB.transaction(function(transObj){
            transObj.executeSql(sqlStr, [], onQuerySuccessCompany, onQueryFailure);
            }, txnError, txnSuccess);
            break;
        case "CellPhone":
            theDB.transaction(function(transObj){
            transObj.executeSql(sqlStr, [], onQuerySuccessCell, onQueryFailure);
            }, txnError, txnSuccess);
            break;
        case "WorkPhone":
            theDB.transaction(function(transObj){
            transObj.executeSql(sqlStr, [], onQuerySuccessWork, onQueryFailure);
            }, txnError, txnSuccess);
            break;
        case "HomePhone":
            theDB.transaction(function(transObj){
            transObj.executeSql(sqlStr, [], onQuerySuccessHome, onQueryFailure);
            }, txnError, txnSuccess);
            break;
        case "Email":
            theDB.transaction(function(transObj){
            transObj.executeSql(sqlStr, [], onQuerySuccessEmail, onQueryFailure);
            }, txnError, txnSuccess);
            break;
        case "HomeAddress":
            theDB.transaction(function(transObj){
            transObj.executeSql(sqlStr, [], onQuerySuccessAddress, onQueryFailure);
            }, txnError, txnSuccess);
            break;
        default:
            alert("This error shouldn't happen!");
    }
}

function filterList(keyVal)
{
	sessionStorage.setItem('keyValue',keyVal);
    //sqlStr = "SELECT * FROM Contacts ORDER BY " + keyVal + " ASC";
	/*var sqlStr = "SELECT * FROM CONTACTS WHERE " + "FirstName='" + keyVal + "' OR LastName='" + keyVal + "' OR DOB='" + keyVal + "' OR Occupation='" + keyVal + "' OR Company='" + keyVal + "' OR CellPhone='" + keyVal + "' OR WorkPhone='" + keyVal + "' OR HomePhone='" + keyVal + "' OR Email='" + keyVal + "' OR HomeAddress='" + keyVal + "' OR Description='" + keyVal + "' ORDER BY TimeAdded DESC;";*/
	
	//It would be a much better idea to use the select statement from above, but since I had an error and didn't realize it, and made a different approach in OnQuerySuccessFilter, I use that instead to actually filter the values manually.
	sqlStr = "SELECT * FROM Contacts ORDER BY TimeAdded DESC";
	theDB.transaction(function(transObj){
		transObj.executeSql(sqlStr, [], onQuerySuccessFilter, onQueryFailure);
	}, txnError, txnSuccess);
}

//-----------------------------------------------------------------------------------

function onQuerySuccess(transObj, results)
{
	var len = results.rows.length;
    //alert(len);
	var htmlStr = '';
	for (var i = 0; i < len; i++)
	{
		var fName = results.rows.item(i).FirstName;
		var lName = results.rows.item(i).LastName;
        var id = results.rows.item(i).ID;
		htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>' + fName + ' ' + lName + '</p></a></li>';
	}
	$("#results").html(htmlStr).listview('refresh');
}

function onQuerySuccessFilter(transObj, results)
{
	var len = results.rows.length;
    //alert(len);
	var htmlStr = '';
	var keyVal = sessionStorage.getItem('keyValue');
	
	
	for (var i = 0; i < len; i++)
	{
		keyVal = keyVal.toLowerCase();
		var fName = results.rows.item(i).FirstName;
		var lName = results.rows.item(i).LastName;
        var id = results.rows.item(i).ID;
		var dob = results.rows.item(i).DOB;
		var occupation = results.rows.item(i).Occupation;
		var company = results.rows.item(i).Company;
		var cellphone = results.rows.item(i).CellPhone;
		var workphone = results.rows.item(i).WorkPhone;
		var homephone = results.rows.item(i).HomePhone;
		if (fName.toLowerCase() == keyVal || lName.toLowerCase() == keyVal || dob == keyVal || occupation.toLowerCase() == keyVal || company.toLowerCase() == keyVal || cellphone == keyVal || workphone == keyVal || homephone == keyVal)
		{
			htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>'

			if(fName.toLowerCase() == keyVal)
				htmlStr += '<span style="color:red; text-shadow: 0px 0px #FF0000;">' + fName + '</span> ';
			else
				htmlStr += fName + ' ';
			if(lName.toLowerCase() == keyVal)
				htmlStr += '<span style="color:red">' + lName + '</span></p>';
			else
				htmlStr += lName + '</p>';
			
			if(dob == keyVal || occupation.toLowerCase() == keyVal || company.toLowerCase() == keyVal || cellphone == keyVal || workphone == keyVal || homephone == keyVal)
			{
				htmlStr += '<p>';
				if(dob == keyVal)
					htmlStr += 'DOB: <span style="color:red; text-shadow: 0px 0px #FF0000;">' + dob + '</span> ';
				if(occupation.toLowerCase() == keyVal)
					htmlStr += 'Occupation: <span style="color:red; text-shadow: 0px 0px #FF0000;">' + occupation + '</span> ';
				if(company.toLowerCase() == keyVal)
					htmlStr += 'Company: <span style="color:red; text-shadow: 0px 0px #FF0000;">' + company + '</span> ';
				if(cellphone == keyVal)
					htmlStr += 'Cell Phone: <span style="color:red; text-shadow: 0px 0px #FF0000;">' + cellphone + '</span> ';
				if(workphone == keyVal)
					htmlStr += 'Work Phone: <span style="color:red; text-shadow: 0px 0px #FF0000;">' + workphone + '</span> ';
				if(homephone == keyVal)
					htmlStr += 'Home Phone: <span style="color:red; text-shadow: 0px 0px #FF0000;">' + homephone + '</span> ';
			}

			htmlStr += '</p></a></li>';
		}
	}
	$("#results").html(htmlStr).listview('refresh');
}

function onQuerySuccessFirst(transObj, results)
{
	var len = results.rows.length;
    //alert(len);
	var htmlStr = '';
	for (var i = 0; i < len; i++)
	{
		var fName = results.rows.item(i).FirstName;
		var lName = results.rows.item(i).LastName;
		var id = results.rows.item(i).ID;
		htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>' + fName + ' ' + lName + '</p></a></li>';
	}
	document.getElementById("listTitle").innerHTML = "<b>First Name</b>";
	$("#results").html(htmlStr).listview('refresh');
}

function onQuerySuccessLast(transObj, results)
{
	var len = results.rows.length;
    //alert(len);
	var htmlStr = '';
	for (var i = 0; i < len; i++)
	{
		var id = results.rows.item(i).ID;
		var fName = results.rows.item(i).FirstName;
		var lName = results.rows.item(i).LastName;
		htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>' + lName + ', ' + fName + '</p></a></li>';
	}
	document.getElementById("listTitle").innerHTML = "<b>Last Name</b>";
	$("#results").html(htmlStr).listview('refresh');
}

function onQuerySuccessDOB(transObj, results)
{
	var len = results.rows.length;
    //alert(len);
	var htmlStr = '';
	for (var i = 0; i < len; i++)
	{
		var id = results.rows.item(i).ID;
		var fName = results.rows.item(i).FirstName;
		var lName = results.rows.item(i).LastName;
        var dob = results.rows.item(i).DOB;
        if(dob.length == 0)
            htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>DOB: Not Specified ' + ' <br><b>' + fName + ' ' + lName + '</b></p></a></li>';
        else
		    htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>DOB: ' + dob + ' <br><b>' + fName + ' ' + lName + '</b></p></a></li>';
	}
	document.getElementById("listTitle").innerHTML = "<b>Date of Birth</b>";
	$("#results").html(htmlStr).listview('refresh');
}

function onQuerySuccessOccupation(transObj, results)
{
	var len = results.rows.length;
    //alert(len);
	var htmlStr = '';
	for (var i = 0; i < len; i++)
	{
		var id = results.rows.item(i).ID;
		var fName = results.rows.item(i).FirstName;
		var lName = results.rows.item(i).LastName;
        var occupation = results.rows.item(i).Occupation;
        if(occupation.length == 0)
            htmlStr += '<li><a href=""><p>Occupation: Not Specified ' + ' <br><b>' + fName + ' ' + lName + '</b></p></a></li>';
        else
		    htmlStr += '<li><a href=""><p>Occupation: ' + occupation + ' <br><b>' + fName + ' ' + lName + '</b></p></a></li>';
	}
	document.getElementById("listTitle").innerHTML = "<b>Occupation</b>";
	$("#results").html(htmlStr).listview('refresh');
}

function onQuerySuccessCompany(transObj, results)
{
	var len = results.rows.length;
    //alert(len);
	var htmlStr = '';
	for (var i = 0; i < len; i++)
	{
		var id = results.rows.item(i).ID;
		var fName = results.rows.item(i).FirstName;
		var lName = results.rows.item(i).LastName;
        var company = results.rows.item(i).Company;
        if(company.length == 0)
            htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>Company: Not Specified ' + ' <br><b>' + fName + ' ' + lName + '</b></p></a></li>';
        else
		    htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>Company: ' + company + ' <br><b>' + fName + ' ' + lName + '</b></p></a></li>';
	}
	document.getElementById("listTitle").innerHTML = "<b>Company</b>";
	$("#results").html(htmlStr).listview('refresh');
}

function onQuerySuccessCell(transObj, results)
{
	var len = results.rows.length;
    //alert(len);
	var htmlStr = '';
	for (var i = 0; i < len; i++)
	{
		var id = results.rows.item(i).ID;
		var fName = results.rows.item(i).FirstName;
		var lName = results.rows.item(i).LastName;
        var cellphone = results.rows.item(i).CellPhone;
        if(cellphone.length == 0)
            htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>Cell Phone: Not Specified ' + ' <br><b>' + fName + ' ' + lName + '</b></p></a></li>';
        else
		    htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>Cell Phone: ' + cellphone + ' <br><b>' + fName + ' ' + lName + '</b></p></a></li>';
	}
	document.getElementById("listTitle").innerHTML = "<b>Cell Phone</b>";
	$("#results").html(htmlStr).listview('refresh');;
}

function onQuerySuccessWork(transObj, results)
{
	var len = results.rows.length;
    //alert(len);
	var htmlStr = '';
	for (var i = 0; i < len; i++)
	{
		var id = results.rows.item(i).ID;
		var fName = results.rows.item(i).FirstName;
		var lName = results.rows.item(i).LastName;
        var workphone = results.rows.item(i).WorkPhone;
        if(workphone.length == 0)
            htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>Work Phone: Not Specified ' + ' <br><b>' + fName + ' ' + lName + '</b></p></a></li>';
        else
		    htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>Work Phone: ' + workphone + ' <br><b>' + fName + ' ' + lName + '</b></p></a></li>';
	}
	document.getElementById("listTitle").innerHTML = "<b>Work Phone</b>";
	$("#results").html(htmlStr).listview('refresh');
}

function onQuerySuccessHome(transObj, results)
{
	var len = results.rows.length;
    //alert(len);
	var htmlStr = '';
	for (var i = 0; i < len; i++)
	{
		var id = results.rows.item(i).ID;
		var fName = results.rows.item(i).FirstName;
		var lName = results.rows.item(i).LastName;
        var homephone = results.rows.item(i).HomePhone;
        if(homephone.length == 0)
            htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>Home Phone: Not Specified ' + ' <br><b>' + fName + ' ' + lName + '</b></p></a></li>';
        else
		    htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>Home Phone: ' + homephone + ' <br><b>' + fName + ' ' + lName + '</b></p></a></li>';
	}
	document.getElementById("listTitle").innerHTML = "<b>Home Address</b>";
	$("#results").html(htmlStr).listview('refresh');
}

function onQuerySuccessEmail(transObj, results)
{
	var len = results.rows.length;
    //alert(len);
	var htmlStr = '';
	for (var i = 0; i < len; i++)
	{
		var id = results.rows.item(i).ID;
		var fName = results.rows.item(i).FirstName;
		var lName = results.rows.item(i).LastName;
        var email = results.rows.item(i).Email;
        if(email.length == 0)
            htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>Email: Not Specified ' + ' <br><b>' + fName + ' ' + lName + '</b></p></a></li>';
        else
		    htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>Email: ' + email + ' <br><b>' + fName + ' ' + lName + '</b></p></a></li>';
	}
	document.getElementById("listTitle").innerHTML = "<b>Email</b>";
	$("#results").html(htmlStr).listview('refresh');
}

function onQuerySuccessAddress(transObj, results)
{
	var len = results.rows.length;
    //alert(len);
	var htmlStr = '';
	for (var i = 0; i < len; i++)
	{
		var id = results.rows.item(i).ID;
		var fName = results.rows.item(i).FirstName;
		var lName = results.rows.item(i).LastName;
        var address = results.rows.item(i).HomeAddress;
        if(address.length == 0)
            htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>Home Address: Not Specified ' + ' <br><b>' + fName + ' ' + lName + '</b></p></a></li>';
        else
		    htmlStr += '<li class="dynamic-link"><a href="#contactDetail?title=' + id + '"><p>Home Address: ' + address + ' <br><b>' + fName + ' ' + lName + '</b></p></a></li>';
	}
	document.getElementById("listTitle").innerHTML = "<b>Address</b>";
	$("#results").html(htmlStr).listview('refresh');
}

//------------------------------------------------------------------------------------

function onQueryFailure(transObj, err)
{
	alert("Failed the search query. Error Message: " + err.message + " Error Code: " + err.code);
}

function confirmCallback(){
	$.mobile.changePage("#mainPage");
}