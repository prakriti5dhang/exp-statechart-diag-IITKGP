/*Redeveloped
Lab: Software Engineering
Exp: Statechart and Activity Modeling
File Name: main.js
Author: Prakriti Dhang*/

/* Exercise number choice */
var ex= document.getElementById("selectex");
function subex(){
    if(ex.options[ex.selectedIndex].value==1){
        document.getElementById("exercise1").style.display="block";
        document.getElementById("ex1").style.display="block";
        document.getElementById("dispres").style.display="none";
        document.getElementById("show_result").style.display="none";
        document.getElementById("dispviewbtn").disabled=false;
        document.getElementById("viewsol").disabled=true;
       
    }
    
    if(ex.options[ex.selectedIndex].value==0){
        document.getElementById("exercise1").style.display="none";
        document.getElementById("ex1").style.display="none";
        document.getElementById("dispres").style.display="none";
        document.getElementById("show_result").style.display="none";
        document.getElementById("dispviewbtn").disabled=true;
        document.getElementById("viewsol").disabled=true;
        
    }
}
/* Submit button to directly view the solution*/

function viewsolutionb(){ //submit button
  document.getElementById("dispres").style.display="block";
  document.getElementById("show_result").style.display="none";
    document.getElementById("viewsol").disabled=false;
    document.getElementById("dispviewbtn").disabled=true;
}

function solview(){  //view solution button
  document.getElementById("show_result").style.display="block";
    document.getElementById("viewsol").disabled=true;
}
 
/********************************************* Table 1 ****************************************/
let newtrID, newtr, newtd,newtda, newtdID,  inpt1;
/*let newCheckLabel = document.createElement('LABEL');
newCheckLabel.setAttribute('for', newCheckBoxID);
let labelTextNode = document.createTextNode(inpt1);
newCheckLabel.appendChild(labelTextNode);
newLi.appendChild(newCheckLabel);*/

function addbtnt1(){
inpt1=document.getElementById("inp1").value;



  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerow(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");
  //newdiv.appendChild(newIconbtn);

  newtrID =  inpt1;
  newtdID= inpt1;
  //rbtn.appendChild(newIconbtn);   
newtr=document.createElement("tr");
newtr.setAttribute("id",newtrID);
newtd = document.createElement("td");
newtd.setAttribute("class","statename");
newtd.setAttribute("id","newtdID");
//newdiv = document.createElement("div");
//newdiv.setAttribute("class", "form-check");
newtr.appendChild(newtd);
//newtd.appendChild(newdiv);

let liTextNodeact = document.createTextNode(inpt1);
newtd.appendChild(liTextNodeact);


/**** activities *****/
let newtdaID =  "activ_" +inpt1;
newtda = document.createElement("td");
//newula = document.createElement("ul");
newtda.setAttribute("id",newtdaID);

//newtda.appendChild(newula);
newtr.appendChild(newtda);
let liTextNodeacta = document.createTextNode("");
newtda.appendChild(liTextNodeacta);

/**** note *****/
let newtdnID =  "note_" +inpt1;
let newtdan = document.createElement("td");
//newula = document.createElement("ul");
newtdan.setAttribute("id",newtdnID);

//newtda.appendChild(newula);
newtr.appendChild(newtdan);
let liTextNodeactn = document.createTextNode("");
newtdan.appendChild(liTextNodeactn);

/**** posiiton *****/
let newtdpID =  "position_" +inpt1;
let newtdp = document.createElement("td");
//newula = document.createElement("ul");
newtdp.setAttribute("id",newtdpID);

//newtda.appendChild(newula);
newtr.appendChild(newtdp);
let liTextNodeactp = document.createTextNode("");
newtdp.appendChild(liTextNodeactp);

let newtdr = document.createElement("td");
newtdr.appendChild(newIconbtn);
newtr.appendChild(newtdr);

//newtd.appendChild(newIconbtn);
  if (inpt1 == "") {
    alert("Please Enter state name before clicking Add Button");
  } else {
    document.getElementById('tbodyt4').appendChild(newtr);
    
 //document.getElementById('potobjlist').appendChild(newLi);
  document.getElementById("inp1").value="";

/*********************** Adding input value in table 2 *************************/

let newOptionIDt2;
newOptionIDt2 = 'newOption_' + inpt1;
  
let newOptiont2 = document.createElement('option');
let optionTextt2 = document.createTextNode(inpt1);
// set option text
newOptiont2.appendChild(optionTextt2);
// and option value

newOptiont2.setAttribute("id", newOptionIDt2);
newOptiont2.setAttribute('value',inpt1);
let selectt2 = document.getElementById('selectstate'); 
selectt2.appendChild(newOptiont2);



  /*********************** Adding input value in table 3 *************************/

let newOptionID;
newOptionID = 'newOption_' + inpt1;
  
let newOption = document.createElement('option');
let optionText = document.createTextNode(inpt1);
// set option text
newOption.appendChild(optionText);
// and option value

newOption.setAttribute("id", newOptionID);
newOption.setAttribute('value',inpt1);
let select = document.getElementById('selectstatet3'); 
select.appendChild(newOption);

/*********************** Adding input value in table 5 *************************/

let newOptionIDt5;
newOptionIDt5 = 'newOption_' + inpt1;
  
let newOptiont5 = document.createElement('option');
let optionTextt5 = document.createTextNode(inpt1);
// set option text
newOptiont5.appendChild(optionTextt5);
// and option value

newOptiont5.setAttribute("id", newOptionIDt5);
newOptiont5.setAttribute('value',inpt1);
let selectt5 = document.getElementById('selectstatet5a'); 
selectt5.appendChild(newOptiont5);

let newOptionIDt5b;
newOptionIDt5b = 'newOption_' + inpt1;
  
let newOptiont5b = document.createElement('option');
let optionTextt5b = document.createTextNode(inpt1);
// set option text
newOptiont5b.appendChild(optionTextt5b);
// and option value

newOptiont5b.setAttribute("id", newOptionIDt5b);
newOptiont5b.setAttribute('value',inpt1);
let selectt5b = document.getElementById('selectstatet5b'); 
selectt5b.appendChild(newOptiont5b);
}

}

  /************************************ Function for Table 2 ********************************************/
 var inpt2;
  function addbtnt2() {
    
  inpt2=document.getElementById("inp2").value;
  var selstate= document.getElementById("selectstate");
  var stateval =selstate.options[selstate.selectedIndex].value;
  var selact= document.getElementById("selectact");
  var acteval =selact.options[selact.selectedIndex].text;

    
  var newIconbtn = document.createElement("img");
  newIconbtn.setAttribute("src","./images/remove.png");
  newIconbtn.setAttribute("onclick", "removerowuc(this)");
  newIconbtn.setAttribute("style","cursor:pointer;");

  var slash_sign="/";
  var para = document.createElement("i");
  let add_slash = document.createTextNode(slash_sign);
  para.appendChild(add_slash);

newLi = document.createElement("li");
let liTextNodeact = document.createTextNode(acteval);
let liTextNodeae = document.createTextNode(inpt2);
newLi.appendChild(liTextNodeact);
newLi.appendChild(para);
newLi.appendChild(liTextNodeae);
newLi.appendChild(newIconbtn); 

if(stateval == 0){
  alert("Please select a state from the dropdown list in table #2");
}
else if(acteval == "Action Label"){
  alert("Please select an action label!");
}
else  if (inpt2 == "") {
    alert("Please Enter Action Expression Before Clicking Add Button");
  } 
  
  else{
    document.getElementById("activ_"+stateval ).appendChild(newLi);
    
    
  }


  


}


function removerow(btndel) {
  if (typeof(btndel) == "object") {
      $(btndel).closest("tr").remove();
      
  } 
 

  else {
     return false;
  }
}


function removerowuc(btndel) {

if (typeof(btndel) == "object") {

    $(btndel).closest("li").remove();
   
   // x.remove(typeof(btndel));
   
} else {
    return false;
}
}


/********************************************************** Function for Table 5 *****************************************************************/




function addbtnt5(){
    let inpt4, inpt5, inpt6;
   
   

inpt4=document.getElementById("inp4").value;
inpt5=document.getElementById("inp5").value;
inpt6=document.getElementById("inp6").value;
var sels1= document.getElementById("selectstatet5a");
var s1eval =sels1.options[sels1.selectedIndex].text;
  var sels2= document.getElementById("selectstatet5b");
  var s2eval =sels2.options[sels2.selectedIndex].text;

 tr = document.createElement('tr');
  tr.setAttribute("id","t6st");
  document.getElementById('tbodytbt6').appendChild(tr);
  var td1 = document.createElement('td');
  var td2=document.createElement("td");
  var td3=document.createElement("td");
  var td4=document.createElement("td");
  var td5=document.createElement("td");
  var td6=document.createElement("td");
  var tdval1=document.createTextNode(s1eval);
  var tdval2=document.createTextNode(inpt4);
  var tdval3=document.createTextNode(inpt5);
  var tdval4=document.createTextNode(inpt6);
  var tdval5=document.createTextNode(s2eval);
  



var newIconbtn = document.createElement("img");
newIconbtn.setAttribute("src","./images/remove.png");
newIconbtn.setAttribute("onclick", "removerow(this)");
newIconbtn.setAttribute("style","cursor:pointer;");
       
        
  td1.appendChild(tdval1);
  td2.appendChild(tdval2);
  td3.appendChild(tdval3);
  td4.appendChild(tdval4);
  td5.appendChild(tdval5);
  td6.appendChild(newIconbtn); 
  
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  document.getElementById('tbodytbt6').appendChild(tr);
  
 
}


     

  

  



  