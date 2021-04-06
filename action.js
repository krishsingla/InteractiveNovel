let show = function()
{
   alert("you pressed the button");
};

let userData=document.getElementById("text-data");
let novelData= document.getElementsByClassName("novel-data")[0];

let add = () => {

	console.log("you clicked the button");
try
{
	let data;
	data=userData.value;
    console.log(data);
    novelData.value += data + "   ";
}
catch
{
	console.error("Something wrong went");
}

};
	

let remove = () => { 
  userData=document.getElementById("text-data").value= "";
   

 };
console.log(userData);