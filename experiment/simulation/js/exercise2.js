/***************************************************** Function for Table 1 ***************************************************/

function addbtnt21(){
    var inpt21=document.getElementById("inp21").value;

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

/***************************************************** Function for Table 2 ***************************************************/


function addbtnt22(){
    
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

/************************ add button for 1st row in table 4*********************************************************/
function addbtnt41(){
    
}


/************************ add button for 2nd  row in table 4*********************************************************/
function addbtnt42(){

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