/** 
** Class Pharmacy
**/
class SelectedPharmacy{
	constructor(selectedObj){

		this.name = selectedObj.pharmname;
		this.addr = selectedObj.pharmaddr;
		this.city = selectedObj.pharmcity;
		this.zip = selectedObj.pharmzip;
		this.state = selectedObj.pharmstate;
		this.email = selectedObj.pharmemail;
		this.phone = selectedObj.pharmphone;
	}
	


	// save selected pharmcy to JSON
	saveSelectPharmInfo(){
		prescOrder.pharm_name = this.name;
		prescOrder.pharm_addr = this.addr;
		prescOrder.pharm_email = this.email;
		prescOrder.pharm_phone = this.phone;
	}	
	
	
	// display selected pharmacy info
	displaySelectPharmInfo(){
		
		document.getElementById("name").innerHTML = "STORE:" + " " + this.name;
		document.getElementById("address").innerHTML = "ADDRESS:" + " " + this.addr;
		document.getElementById("city").innerHTML = "CITY:" + " " + this.city;
		document.getElementById("zipcode").innerHTML = "ZIPCODE:" + " " + this.zip;
		document.getElementById("state").innerHTML = "STATE:" + " " + this.state;
		document.getElementById("email").innerHTML = "EMAIL:" + " " + this.email;
		document.getElementById("phone").innerHTML = "PHONE:" + " " + this.phone;
		
	}
	
}

