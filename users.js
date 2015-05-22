var users = [{name: 'ALEX', roles:['admin','user','custom']}];
var usersString = [''];
var userLength = 0;
var DISPLAY = document.getElementById('display');
var NAME = document.getElementById('name');
var ROLES = document.getElementById('roles');
var adduserbutton = document.getElementById('adduser');
adduserbutton.onclick = function() {addUser();};

var bodyhtml = document.getElementById('body');
bodyhtml.onload = function() {updateView();};

var removeuserbutton = document.getElementById('removeuser');
removeuserbutton.onclick = function() {removeUser();};

var editnamebutton = document.getElementById('changename');
editnamebutton.onclick = function() {editName();};

var editrolesbutton = document.getElementById('changeroles');
editrolesbutton.onclick = function() {editRoles();};

var editbothbutton = document.getElementById('changeboth');
editbothbutton.onclick = function() {editBoth();};


function addUser() {
	var addName = NAME.value.toUpperCase();
	var addRoles = ROLES.value.split(' ');
	if (addName != null && addName !=''){
		k = 0;
		while (k < users.length){
			if (addName != users[k].name){
				k++;
			} else {
				break;
			};
		};
		if (k >= users.length) {
			users[users.length] = {name: addName, roles: addRoles};
			updateUserString();
			document.getElementById('name').value = '';
			document.getElementById('roles').value = '';
			DISPLAY.innerHTML = usersString;
		} else {
			alert('This username has been taken');
		};
	} else {
		alert('Please enter a valid username')
	};
}

function removeUser(){
	var removeName = NAME.value.toUpperCase();
	if (removeName == null || removeName == ''){
		alert('Please enter a valid user to delete.');
	} else {
		k = 0;
		while (k < users.length){
			if (removeName != users[k].name){
				k++;
			} else {
				break;
			};
		};
		if (k < users.length) {
			users.splice(k,1);
			usersString.splice(k,1);
			userLength--;
			document.getElementById('name').value = '';
			DISPLAY.innerHTML = usersString;
		} else {
			alert('User does not exist');
		};
	};
}

function editName(){
	var findName = document.getElementById('editname').value.toUpperCase();
	var newName = document.getElementById('newname').value.toUpperCase();
    if (findName == null || findName == '' || newName == null || newName == '') {
        alert('Please fill out both "Name" and "New Name" fields.');
    } else {
		k = 0;
		while (k < users.length){
			if (findName != users[k].name){
				k++;
			} else {
				break;
			};
		};
		if (k < users.length) {
			users[k].name = newName;
			usersString[k] = usersString[k].replace(findName, newName);
			document.getElementById('editname').value = '';
			document.getElementById('newname').value = '';
			DISPLAY.innerHTML = usersString;
		} else {
			alert('User does not exist');
		};
	};
}

function editRoles() {
	var findName = document.getElementById('editname').value.toUpperCase();
	var newRoles = document.getElementById('newroles').value.split(' ');
	if (findName == null || findName == '' || newRoles == null || newRoles == '') {
        alert('Please fill out both "Name" and "New Roles" fields.');
    } else {
		k = 0;
		while (k < users.length){
			if (findName != users[k].name){
				k++;
			} else {
				break;
			};
		};
		if (k < users.length) {
			users[k].roles = newRoles;
			usersString[k] = "<h4 class=''>Name: " + users[k].name + "<br>Roles: <ol>";
			for (l = 0; l < users[k].roles.length; l++){
				usersString[k] = usersString[k].concat("<li>" + users[k].roles[l] + "</li>");
			};
			usersString[k] = usersString[k].concat("</ol></p>");
			document.getElementById('editname').value = '';
			document.getElementById('newroles').value = '';
			DISPLAY.innerHTML = usersString;
		} else {
			alert('User does not exist');
		};
	};
}

function editBoth() {
	editRoles();
	editName();
}

function updateUserString(){
	for (i = userLength; i < users.length; i++){
		usersString[i] = "<h4 class=''>Name: " + users[i].name + "<br>Roles: <ol>";
		for (j = 0; j < users[i].roles.length; j++){
			usersString[i] = usersString[i].concat("<li>" + users[i].roles[j] + "</li>");
		};
		usersString[i] = usersString[i].concat("</ol></p>");
	};
	userLength = users.length;
}

function updateView() {
	updateUserString();
	DISPLAY.innerHTML = usersString;
}
