/***************************************************** Function for Table 1 ***************************************************/

function addbtnt21(){
    var inpt21=document.getElementById("inp21").value;

    if(inpt21 == ""){
      alert("Please add activity!");
    
    }
else{
    /******* Creating options in table 2********/
    let newOptionIDt2a;
    newOptionIDt2a = 'newOptiont2a_' + inpt21;
    
  let newOptiont2a = document.createElement('option');
  let optionTextt2a = document.createTextNode(inpt21);
  // set option text
  newOptiont2a.appendChild(optionTextt2a);
  // and option value
  
  newOptiont2a.setAttribute("id", newOptionIDt2a);
  newOptiont2a.setAttribute('value',inpt21);
  let selectt2a = document.getElementById('selectcuract'); 
  selectt2a.appendChild(newOptiont2a);

  let newOptionIDt2b;
  newOptionIDt2b = 'newOptiont2b_' + inpt21;
  
let newOptiont2b = document.createElement('option');
let optionTextt2b = document.createTextNode(inpt21);
// set option text
newOptiont2b.appendChild(optionTextt2b);
// and option value

newOptiont2b.setAttribute("id", newOptionIDt2b);
newOptiont2b.setAttribute('value',inpt21);
let selectt2b = document.getElementById('selectnextact'); 
selectt2b.appendChild(newOptiont2b);

document.getElementById("inp21").value="";

/******* Creating options for current state in table 4 ********/

let newOptionIDt4a;
    newOptionIDt4a = 'newOptiont4a_' + inpt21;
    
  let newOptiont4a = document.createElement('option');
  let optionTextt4a = document.createTextNode(inpt21);
  // set option text
  newOptiont4a.appendChild(optionTextt4a);
  // and option value
  
  newOptiont4a.setAttribute("id", newOptionIDt4a);
  newOptiont4a.setAttribute('value',inpt21);
  let selectt4a = document.getElementById('selcurrentact'); 
  selectt4a.appendChild(newOptiont4a);


  /******* Creating options for parallel activities of row 1 in table 4 ********/
let newOptionIDt4p1;
newOptionIDt4p1 = 'newOptiont4p1_' + inpt21;

let newOptiont4p1 = document.createElement('option');
let optionTextt4p1 = document.createTextNode(inpt21);
// set option text
newOptiont4p1.appendChild(optionTextt4p1);
// and option value

newOptiont4p1.setAttribute("id", newOptionIDt4p1);
newOptiont4p1.setAttribute('value',inpt21);
let selectt4p1 = document.getElementById('parallelact1'); 
selectt4p1.appendChild(newOptiont4p1);

let newOptionIDt4p2;
newOptionIDt4p2 = 'newOptiont4p2_' + inpt21;

let newOptiont4p2 = document.createElement('option');
let optionTextt4p2 = document.createTextNode(inpt21);
// set option text
newOptiont4p2.appendChild(optionTextt4p2);
// and option value

newOptiont4p2.setAttribute("id", newOptionIDt4p2);
newOptiont4p2.setAttribute('value',inpt21);
let selectt4p2 = document.getElementById('parallelact2'); 
selectt4p2.appendChild(newOptiont4p2);


let newOptionIDt4p3;
newOptionIDt4p3 = 'newOptiont4p3_' + inpt21;

let newOptiont4p3 = document.createElement('option');
let optionTextt4p3 = document.createTextNode(inpt21);
// set option text
newOptiont4p3.appendChild(optionTextt4p3);
// and option value

newOptiont4p3.setAttribute("id", newOptionIDt4p3);
newOptiont4p3.setAttribute('value',inpt21);
let selectt4p3 = document.getElementById('parallelact3'); 
selectt4p3.appendChild(newOptiont4p3);

let newOptionIDt4p4;
newOptionIDt4p4 = 'newOptiont4p4_' + inpt21;

let newOptiont4p4 = document.createElement('option');
let optionTextt4p4 = document.createTextNode(inpt21);
// set option text
newOptiont4p4.appendChild(optionTextt4p4);
// and option value

newOptiont4p4.setAttribute("id", newOptionIDt4p4);
newOptiont4p4.setAttribute('value',inpt21);
let selectt4p4 = document.getElementById('parallelact4'); 
selectt4p4.appendChild(newOptiont4p4);

let newOptionIDt4p5;
newOptionIDt4p5 = 'newOptiont4p5_' + inpt21;

let newOptiont4p5 = document.createElement('option');
let optionTextt4p5 = document.createTextNode(inpt21);
// set option text
newOptiont4p5.appendChild(optionTextt4p5);
// and option value

newOptiont4p5.setAttribute("id", newOptionIDt4p5);
newOptiont4p5.setAttribute('value',inpt21);
let selectt4p5 = document.getElementById('parallelact5'); 
selectt4p5.appendChild(newOptiont4p5);

/******* Creating options for parallel activities of row 2 in table 4 ********/
let newOptionIDt4pr21;
newOptionIDt4pr21 = 'newOptiont4pr21_' + inpt21;

let newOptiont4pr21 = document.createElement('option');
let optionTextt4pr21 = document.createTextNode(inpt21);
// set option text
newOptiont4pr21.appendChild(optionTextt4pr21);
// and option value

newOptiont4pr21.setAttribute("id", newOptionIDt4pr21);
newOptiont4pr21.setAttribute('value',inpt21);
let selectt4pr21 = document.getElementById('parallelact1b'); 
selectt4pr21.appendChild(newOptiont4pr21);


let newOptionIDt4pr22;
newOptionIDt4pr22 = 'newOptiont4pr22_' + inpt21;

let newOptiont4pr22 = document.createElement('option');
let optionTextt4pr22 = document.createTextNode(inpt21);
// set option text
newOptiont4pr22.appendChild(optionTextt4pr22);
// and option value

newOptiont4pr22.setAttribute("id", newOptionIDt4pr22);
newOptiont4pr22.setAttribute('value',inpt21);
let selectt4pr22 = document.getElementById('parallelact2b'); 
selectt4pr22.appendChild(newOptiont4pr22);

let newOptionIDt4pr23;
newOptionIDt4pr23 = 'newOptiont4pr23_' + inpt21;

let newOptiont4pr23 = document.createElement('option');
let optionTextt4pr23 = document.createTextNode(inpt21);
// set option text
newOptiont4pr23.appendChild(optionTextt4pr23);
// and option value

newOptiont4pr23.setAttribute("id", newOptionIDt4pr23);
newOptiont4pr23.setAttribute('value',inpt21);
let selectt4pr23 = document.getElementById('parallelact3b'); 
selectt4pr23.appendChild(newOptiont4pr23);



let newOptionIDt4pr24;
newOptionIDt4pr24 = 'newOptiont4pr24_' + inpt21;

let newOptiont4pr24 = document.createElement('option');
let optionTextt4pr24 = document.createTextNode(inpt21);
// set option text
newOptiont4pr24.appendChild(optionTextt4pr24);
// and option value

newOptiont4pr24.setAttribute("id", newOptionIDt4pr24);
newOptiont4pr24.setAttribute('value',inpt21);
let selectt4pr24 = document.getElementById('parallelact4b'); 
selectt4pr24.appendChild(newOptiont4pr24);


let newOptionIDt4pr25;
newOptionIDt4pr25 = 'newOptiont4pr25_' + inpt21;

let newOptiont4pr25 = document.createElement('option');
let optionTextt4pr25 = document.createTextNode(inpt21);
// set option text
newOptiont4pr25.appendChild(optionTextt4pr25);
// and option value

newOptiont4pr25.setAttribute("id", newOptionIDt4pr25);
newOptiont4pr25.setAttribute('value',inpt21);
let selectt4pr25 = document.getElementById('parallelact5b'); 
selectt4pr25.appendChild(newOptiont4pr25);



  /******* Creating options for next state in table 4 ********/
  let newOptionIDt4b;
  newOptionIDt4b = 'newOptiont4b_' + inpt21;
  
let newOptiont4b = document.createElement('option');
let optionTextt4b = document.createTextNode(inpt21);
// set option text
newOptiont4b.appendChild(optionTextt4b);
// and option value

newOptiont4b.setAttribute("id", newOptionIDt4b);
newOptiont4b.setAttribute('value',inpt21);
let selectt4b = document.getElementById('selnextact'); 
selectt4b.appendChild(newOptiont4b);





/******* Creating options for current state  in table 6 ********/
let newOptionIDt6;
  newOptionIDt6 = 'newOptiont6_' + inpt21;
  
let newOptiont6 = document.createElement('option');
let optionTextt6 = document.createTextNode(inpt21);
// set option text
newOptiont6.appendChild(optionTextt6);
// and option value

newOptiont6.setAttribute("id", newOptionIDt6);
newOptiont6.setAttribute('value',inpt21);
let selectt6 = document.getElementById('currentactt6'); 
selectt6.appendChild(newOptiont6);


/******* Creating options for activity state 1 in table 6 ********/
let newOptionIDt6r1;
  newOptionIDt6r1 = 'newOptiont6r1_' + inpt21;
  
let newOptiont6r1 = document.createElement('option');
let optionTextt6r1 = document.createTextNode(inpt21);
// set option text
newOptiont6r1.appendChild(optionTextt6r1);
// and option value

newOptiont6r1.setAttribute("id", newOptionIDt6r1);
newOptiont6r1.setAttribute('value',inpt21);
let selectt6r1 = document.getElementById('nextactt6'); 
selectt6r1.appendChild(newOptiont6r1);

/******* Creating options for activity state 2 in table 6 ********/
let newOptionIDt6r2;
  newOptionIDt6r2 = 'newOptiont6r2_' + inpt21;
  
let newOptiont6r2 = document.createElement('option');
let optionTextt6r2 = document.createTextNode(inpt21);
// set option text
newOptiont6r2.appendChild(optionTextt6r2);
// and option value

newOptiont6r2.setAttribute("id", newOptionIDt6r2);
newOptiont6r2.setAttribute('value',inpt21);
let selectt6r2 = document.getElementById('nextactt6b'); 
selectt6r2.appendChild(newOptiont6r2);
}
}

/***************************************************** Function for Table 2 ***************************************************/


function addbtnt22(){
  var inpt22 = document.getElementById("inp22").value;
  var selcura= document.getElementById("selectcuract");
  var actcval =selcura.options[selcura.selectedIndex].text;

  var selnexta= document.getElementById("selectnextact");
  var actnval =selnexta.options[selnexta.selectedIndex].text;




if((actcval=="Current Activity")&& (actnval=="Next Activity")){
  alert("Please select current activity and next activity!");
}

else if (actcval=="Current Activity"){
  alert("Please select current activity!");
} 
else if (actnval=="Next Activity"){
  alert("Please select next activity!");
}
else if(inpt22 == ""){
  alert("Please add gaurd condition!");

}
else{
  /********************************************** Adding to table 3 ****************************************************/

let newtr =document.createElement("tr");
let newtdIDc= "cact"+actcval;
let newtdc= document.createElement("td");
newtdc.setAttribute("id", newtdIDc);

let newtdIDn= "nact"+actnval;
let newtdn= document.createElement("td");
newtdn.setAttribute("id", newtdIDn);

let newtdIDgc= "gc"+inpt22;
let newtdgc= document.createElement("td");
newtdgc.setAttribute("id", newtdIDgc);


var newIconbtn = document.createElement("img");
newIconbtn.setAttribute("src","./images/remove.png");
newIconbtn.setAttribute("onclick", "removerow(this)");
newIconbtn.setAttribute("style","cursor:pointer;");

let newtdbtn= document.createElement("td");

let tdvalc=document.createTextNode(actcval);
let tdvaln=document.createTextNode(actnval);
let tdvalgc=document.createTextNode(inpt22);

newtdc.appendChild(tdvalc);
newtdn.appendChild(tdvaln);
newtdgc.appendChild(tdvalgc);
newtdbtn.appendChild(newIconbtn); 
    
newtr.appendChild(newtdc);
newtr.appendChild(newtdn);
newtr.appendChild(newtdgc);
newtr.appendChild(newtdbtn);
document.getElementById('tbodyt23').appendChild(newtr);
 
}

document.getElementById("inp22").value="";

}






/***************************************************** Function for Table 4 ***************************************************/
/* display input for synchronisation bar*/
function addbtnt4(){
    document.getElementById("synchinp1").style.display="block";
}

/* display none input for synchronisation bar and adding options to synch dropdown*/
function donebtnt4(){
    document.getElementById("synchinp1").style.display="none";
    var inpt4a=document.getElementById("inp4a").value;
    /* adding options in table 4*/
    let newOptionIDt4;
  newOptionIDt4 = 'newOptiont4_' + inpt4a;
  
let newOptiont4 = document.createElement('option');
let optionTextt4 = document.createTextNode(inpt4a);
// set option text
newOptiont4.appendChild(optionTextt4);
// and option value

newOptiont4.setAttribute("id", newOptionIDt4);
newOptiont4.setAttribute('value',inpt4a);
let selectt4 = document.getElementById('sychbar'); 
selectt4.appendChild(newOptiont4);

/* adding options in  Fork in table 6*/
let newOptionIDt6a;
  newOptionIDt6a = 'newOptiont6a_' + inpt4a;
  
let newOptiont6a = document.createElement('option');
let optionTextt6a = document.createTextNode(inpt4a);
// set option text
newOptiont6a.appendChild(optionTextt6a);
// and option value

newOptiont6a.setAttribute("id", newOptionIDt6a);
newOptiont6a.setAttribute('value',inpt4a);
let selectt6a = document.getElementById('syncht6a'); 
selectt6a.appendChild(newOptiont6a);

/* adding options in  Merge in table 6*/
let newOptionIDt6b;
  newOptionIDt6b = 'newOptiont6b_' + inpt4a;
  
let newOptiont6b = document.createElement('option');
let optionTextt6b = document.createTextNode(inpt4a);
// set option text
newOptiont6b.appendChild(optionTextt6b);
// and option value

newOptiont6b.setAttribute("id", newOptionIDt6b);
newOptiont6b.setAttribute('value',inpt4a);
let selectt6b = document.getElementById('syncht6b'); 
selectt6b.appendChild(newOptiont6b);

/* adding options in (else) Fork in table 6*/
let newOptionIDt6c;
  newOptionIDt6c = 'newOptiont6c_' + inpt4a;
  
let newOptiont6c = document.createElement('option');
let optionTextt6c = document.createTextNode(inpt4a);
// set option text
newOptiont6c.appendChild(optionTextt6c);
// and option value

newOptiont6c.setAttribute("id", newOptionIDt6c);
newOptiont6c.setAttribute('value',inpt4a);
let selectt6c = document.getElementById('synchbart6c'); 
selectt6c.appendChild(newOptiont6c);

/* adding options in  (else) Merge in table 6*/
let newOptionIDt6d;
  newOptionIDt6d = 'newOptiont6d_' + inpt4a;
  
let newOptiont6d = document.createElement('option');
let optionTextt6d = document.createTextNode(inpt4a);
// set option text
newOptiont6d.appendChild(optionTextt6d);
// and option value

newOptiont6d.setAttribute("id", newOptionIDt6d);
newOptiont6d.setAttribute('value',inpt4a);
let selectt6d = document.getElementById('synchbart6d'); 
selectt6d.appendChild(newOptiont6d);


document.getElementById("inp4a").value="";

}

/************************ function for add button of 1st row in table 4. inserting value in table 5*********************************************************/
function addbtnt41(){
  var selcurat4= document.getElementById("selcurrentact");
  var actcvalt4 =selcurat4.options[selcurat4.selectedIndex].text;
  var selsynct4= document.getElementById("sychbar");
  var syncvalt4 =selsynct4.options[selsynct4.selectedIndex].text;
  var selp1t4= document.getElementById("parallelact1");
  var p1valt4 =selp1t4.options[selp1t4.selectedIndex].text;
  var selp2t4= document.getElementById("parallelact2");
  var p2valt4 =selp2t4.options[selp2t4.selectedIndex].text;

  if (syncvalt4 =="Synchronization Bar"){
    alert("Select Synchronization Bar")
  }

  else{
let newtrt5 =document.createElement("tr");

/*create td for current activity*/
let newtdIDct5= "ct4act"+actcvalt4;
let newtdct5= document.createElement("td");
newtdct5.setAttribute("id", newtdIDct5);

/*create td for fork point (synchronization bar)*/
let newtdIDst5= "st4act"+syncvalt4;
let newtdst5= document.createElement("td");
newtdst5.setAttribute("id", newtdIDst5);

/*create td and adding to unordered list parallel activities row 1*/
let newtdIDp1t5= "p1t4act"+p1valt4;
let newtdp1t5= document.createElement("td");
newtdp1t5.setAttribute("id", newtdIDp1t5);


let newulpt5= document.createElement("ul");
let newlip1t5= document.createElement("li");
let newlip2t5= document.createElement("li");


/*create td for merge point*/
let newtdIDmpt5= "mpt4act";
let newtdmpt5= document.createElement("td");
newtdmpt5.setAttribute("id", newtdIDmpt5);

/*create td for merge activity*/
let newtdIDmat5= "mat4act";
let newtdmat5= document.createElement("td");
newtdmat5.setAttribute("id", newtdIDmat5);


var newIconbtn = document.createElement("img");
newIconbtn.setAttribute("src","./images/remove.png");
newIconbtn.setAttribute("onclick", "removerow(this)");
newIconbtn.setAttribute("style","cursor:pointer;");

let newtdbtnt5= document.createElement("td");

/*adding value to td */
let tdvalct5=document.createTextNode(actcvalt4);
let tdvalst5=document.createTextNode(syncvalt4);
let newlip1t5t=document.createTextNode(p1valt4);
let newlip2t5t=document.createTextNode(p2valt4);
let tdvalmp=document.createTextNode("");
let tdvalma=document.createTextNode("");

newlip1t5.appendChild(newlip1t5t);
newlip2t5.appendChild(newlip2t5t);
newulpt5.appendChild(newlip1t5);
newulpt5.appendChild(newlip2t5);

newtdct5.appendChild(tdvalct5);
newtdst5.appendChild(tdvalst5);
newtdp1t5.appendChild(newulpt5);
//newtdp2t5.appendChild(tdvalp2);
newtdmpt5.appendChild(tdvalmp);
newtdmat5.appendChild(tdvalma);
newtdbtnt5.appendChild(newIconbtn); 

newtrt5.appendChild(newtdct5);
newtrt5.appendChild(newtdst5);
newtrt5.appendChild(newtdp1t5);
//newtrt5.appendChild(newtdp2t5);
newtrt5.appendChild(newtdmpt5);
newtrt5.appendChild(newtdmat5);
newtrt5.appendChild(newtdbtnt5);
document.getElementById('tbodyt25').appendChild(newtrt5);

  }
}


/************************  function for add button of 2nd  row in table 4. inserting value in table 5*********************************************************/
function addbtnt42(){

  var selp1bt4= document.getElementById("parallelact1b");
  var p1bvalt4 =selp1bt4.options[selp1bt4.selectedIndex].text;
  var selp2bt4= document.getElementById("parallelact2b");
  var p2bvalt4 =selp2bt4.options[selp2bt4.selectedIndex].text;
  var selsyncbt4= document.getElementById("sychbar");
  var syncbvalt4 =selsyncbt4.options[selsyncbt4.selectedIndex].text;
  var selnt4= document.getElementById("selnextact");
  var actnvalt4 =selnt4.options[selnt4.selectedIndex].text;

  if (syncbvalt4 =="Synchronization Bar"){
    alert("Select Synchronization Bar")
  }

  else{
    let newtrt5b =document.createElement("tr");
   
    
     /*create td and adding to unordered list parallel activities row 2*/
   
    let newtdpbt5= document.createElement("td");
    let newulpbt5= document.createElement("ul");
    let newlip1bt5= document.createElement("li");
    let newlip2bt5= document.createElement("li");


 let newtdfpt5b= document.createElement("td");
 let newtdfat5b= document.createElement("td");


    /*create td for merge point (synchronization bar)*/
    let newtdIDmpt5b= "mpt4act" +syncbvalt4;
    let newtdmpt5b= document.createElement("td");
    newtdmpt5b.setAttribute("id", newtdIDmpt5b);
    
    /*create td for merge to activities*/
    let newtdIDmat5b= "nt4act"+actnvalt4;
    let newtdmat5b= document.createElement("td");
    newtdmat5b.setAttribute("id", newtdIDmat5b);
    
    
    var newIconbtn = document.createElement("img");
    newIconbtn.setAttribute("src","./images/remove.png");
    newIconbtn.setAttribute("onclick", "removerow(this)");
    newIconbtn.setAttribute("style","cursor:pointer;");
    
    let newtdbtnbt5= document.createElement("td");
    
    /*adding value to td */
    let newlip1bt5t=document.createTextNode(p1bvalt4);
    let newlip2bt5t=document.createTextNode(p2bvalt4);
    let tdvalct5=document.createTextNode("");
    let tdvalst5=document.createTextNode("");
    let tdvalmp=document.createTextNode(syncbvalt4);
    let tdvalma=document.createTextNode(actnvalt4);
    
    newlip1bt5.appendChild(newlip1bt5t);
    newlip2bt5.appendChild(newlip2bt5t);
    newulpbt5.appendChild(newlip1bt5);
    newulpbt5.appendChild(newlip2bt5);
    
    
    newtdpbt5.appendChild(newulpbt5);
    newtdfpt5b.appendChild(tdvalct5);
    newtdfat5b.appendChild(tdvalst5);
    newtdmpt5b.appendChild(tdvalmp);
    newtdmat5b.appendChild(tdvalma);
    newtdbtnbt5.appendChild(newIconbtn); 
    
    newtrt5b.appendChild(newtdpbt5);
    newtrt5b.appendChild(newtdfpt5b);
    newtrt5b.appendChild(newtdfat5b);
    newtrt5b.appendChild(newtdmpt5b);
    newtrt5b.appendChild(newtdmat5b);
    newtrt5b.appendChild(newtdbtnbt5);
    document.getElementById('tbodyt25').appendChild(newtrt5b);

  }





}

/***************************************************** Function for Table 6 ***************************************************/

/*************** radio button 1*******************/
function radiobtn1(){
    document.getElementById("nextactt6").disabled=false;
    document.getElementById("syncht6a").disabled=true;
    document.getElementById("syncht6b").disabled=true;
    document.getElementById("r1").checked=true;
    document.getElementById("r2").checked=false;
    document.getElementById("r3").checked=false;

    document.getElementById("synchbart6c").disabled=true;
    document.getElementById("nextactt6b").disabled=true;
    document.getElementById("synchbart6d").disabled=true;
    document.getElementById("r4").checked=false;
    document.getElementById("r5").checked=false;
    document.getElementById("r6").checked=false;
}

/*************** radio button 2*******************/
function radiobtn2(){
    document.getElementById("syncht6a").disabled=false;
    document.getElementById("nextactt6").disabled=true;
    document.getElementById("syncht6b").disabled=true;
    document.getElementById("r1").checked=false;
    document.getElementById("r2").checked=true;
    document.getElementById("r3").checked=false;

    document.getElementById("synchbart6c").disabled=true;
    document.getElementById("nextactt6b").disabled=true;
    document.getElementById("synchbart6d").disabled=true;
    document.getElementById("r4").checked=false;
    document.getElementById("r5").checked=false;
    document.getElementById("r6").checked=false;
}

/*************** radio button 3*******************/
function radiobtn3(){
    document.getElementById("syncht6b").disabled=false;
    document.getElementById("nextactt6").disabled=true;
    document.getElementById("syncht6a").disabled=true;
    document.getElementById("r3").checked=true;
    document.getElementById("r2").checked=false;
    document.getElementById("r1").checked=false;

    document.getElementById("synchbart6c").disabled=true;
    document.getElementById("nextactt6b").disabled=true;
    document.getElementById("synchbart6d").disabled=true;
    document.getElementById("r4").checked=false;
    document.getElementById("r5").checked=false;
    document.getElementById("r6").checked=false;
}


/*************** radio button 4*******************/
function radiobtn4(){
    document.getElementById("nextactt6b").disabled=false;
    document.getElementById("synchbart6c").disabled=true;
    document.getElementById("synchbart6d").disabled=true;
    document.getElementById("r4").checked=true;
    document.getElementById("r5").checked=false;
    document.getElementById("r6").checked=false;

    document.getElementById("syncht6b").disabled=true;
    document.getElementById("nextactt6").disabled=true;
    document.getElementById("syncht6a").disabled=true;
    document.getElementById("r3").checked=false;
    document.getElementById("r2").checked=false;
    document.getElementById("r1").checked=false;

}

/*************** radio button 5*******************/
function radiobtn5(){
    document.getElementById("synchbart6c").disabled=false;
    document.getElementById("nextactt6b").disabled=true;
    document.getElementById("synchbart6d").disabled=true;
    document.getElementById("r4").checked=false;
    document.getElementById("r5").checked=true;
    document.getElementById("r6").checked=false;

    document.getElementById("syncht6b").disabled=true;
    document.getElementById("nextactt6").disabled=true;
    document.getElementById("syncht6a").disabled=true;
    document.getElementById("r3").checked=false;
    document.getElementById("r2").checked=false;
    document.getElementById("r1").checked=false;
}


/*************** radio button 6*******************/
function radiobtn6(){
    document.getElementById("synchbart6d").disabled=false;
    document.getElementById("nextactt6b").disabled=true;
    document.getElementById("synchbart6c").disabled=true;
    document.getElementById("r6").checked=true;
    document.getElementById("r5").checked=false;
    document.getElementById("r4").checked=false;

    document.getElementById("syncht6b").disabled=true;
    document.getElementById("nextactt6").disabled=true;
    document.getElementById("syncht6a").disabled=true;
    document.getElementById("r3").checked=false;
    document.getElementById("r2").checked=false;
    document.getElementById("r1").checked=false;
}

function addbtnt26(){


}




/***************************************************** Function for Draw UML  ***************************************************/