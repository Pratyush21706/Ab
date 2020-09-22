//    Hello and welcome to my project and first thing first, after looking at my complete sketch you you definitely say tht there would be better names for variables, let it be I  am the one who likes the clutters way but if it causes some trouble to you then I am really sorry for it.

//Moving ahead this project is basically made for people who are really conserned about their physical health altough this is a fitness app but it is packed with so many feratures which are comparitively hidden such as book a doctor, a full body medical checkup, setting the goals for the future of viewing the results of your medical tests.

//So without wasting much of your time let's begin

//setting up the localstorage (the most important part of this project) so that the users can log in or log out
localStorage.speed=1;

//Declaring the two user credential variables
var uN,Up;

//setting up the time and the various other variables
var time;
var food,water,sleep,run,qot,nm,img;
var now,end; 

//declaring two localStorage variables to hold the name andthe age of the user permanently
localStorage.name;
localStorage.age;
var talkbox;
var rand;

//Creating various minutevariables which will help to change the appStaes
var a = 1,b=1,s = 1,x = 1,c = 1;
var count =1,karna = 1,h =900;
 var i = 1, w = 200;
var m = 1,r  =1;

//using the localStorage as an holder of user's goals and what he/she may have achived so far
localStorage.water, localStorage.calories,localStorage.sleep;
 localStorage.sleep_goal ,localStorage.water_goal ,localStorage.calories_goal ;

//Making a variable boolean value false so that I can check it later
var option1 = false;

//Defining two variables for colors
var col1="black",col2 = "col1";
var nameInput;

// this function will load all the images and multimedia before the programme starts
function preload(){
  smile =loadImage("intro.png")
            bot = loadImage("bot.png")
dk = loadImage("desktop.png")
frame = loadImage("border.png")
    dark = loadImage("dark.png")
    
}
function setup(){
//    Creating the canvas for the entire screen
createCanvas(windowWidth, windowHeight);
    
/*   ========================Firebase stuff Begins Here========================================*/

    // Firebase configuration here
    var firebaseConfig = {
   apiKey: "AIzaSyBMdyADowFNLi-mVDm91NYnBKSem_peveg",
    authDomain: "ambience-database.firebaseapp.com",
    databaseURL: "https://ambience-database.firebaseio.com",
    projectId: "ambience-database",
    storageBucket: "ambience-database.appspot.com",
    messagingSenderId: "953268091712",
    appId: "1:953268091712:web:806a6e5cf4181b5159d8a5"
  };
        //Initialising Firebase here
  firebase.initializeApp(firebaseConfig);
//    Console Logging firebase
  console.log(firebase);
//  Initialising the firebase database
 database = firebase.database();
 //Firebase stuff Ends Here   
    
    /*  ===========================Firebase stuff Ends Here=======================================   */

    
    nm = window.innerHeight/17
col = color(255,255,255,0)
    
nextButton = createButton(`→`)
 nextButton.position(width/2.1,-555)
  nextButton.style(`background`,`transparent`);
   nextButton.style(`font-size`,`50px`)
    nextButton.style(`border`,`0px`)
     nextButton.mousePressed(next)
     //Creating the name input
       input1 = createInput(``)
        input1.position(width/4,-555);
         input1.style(`background`,`transparent`)
          input1.style(`font-size`,`25px`)
           input1.style(`border-top-style`,`hidden`)
            input1.style(`border-bottom-style`,`groove`)
             input1.style(`border-right-style`,`hidden`)
              input1.style(`border-left-style`,`hidden`)
               input1.style(`padding-right`,`40px`)
                input1.style(`outline`,`0px`)
                 input1.style(`color`,`white`)
                  input2 = createInput(``,`password`)
                   input2.position(width/4,-555);
                    input2.style(`font-size`,`25px`)
                     input2.style(`background`,`transparent`)
                      input2.style(`border-top-style`,`hidden`)
                       input2.style(`border-bottom-style`,`groove`)
                        input2.style(`border-right-style`,`hidden`)
                         input2.style(`border-left-style`,`hidden`)
                           input2.style(`padding-right`,`40px`)
                             input2.style(`outline`,`0px`)
                               input2.style(`color`,`white`)
                                input3 = createInput(``)
                                 input3.position(width/4,-555);
                                  input3.style(`font-size`,`25px`)
                                   input3.style(`background`,`transparent`)
                                    input3.style(`border-top-style`,`hidden`)
                                      input3.style(`border-bottom-style`,`groove`)
                                        input3.style(`border-right-style`,`hidden`)
                                         input3.style(`border-left-style`,`hidden`)
                                          input3.style(`padding-right`,`40px`)
                                           input3.style(`outline`,`0px`)
                                              input3.style(`color`,`white`)     
                                                input4 = createInput(``)
                                                  input4.position(width/4,-555);
                                                    input4.style(`font-size`,`25px`)
                                                     input4.style(`background`,`transparent`)
                                                      input4.style(`border-top-style`,`hidden`)
                                                        input4.style(`border-bottom-style`,`groove`)
                                                         input4.style(`border-right-style`,`hidden`)
                                                           input4.style(`border-left-style`,`hidden`)
                                                             input4.style(`padding-right`,`40px`)
                                                               input4.style(`outline`,`0px`)
                                                                 input4.style(`color`,`white`)  
                                                                  input5 = createInput(``,`number`)
                                                                   input5.position(width/4,-555);
                                                                    input5.style(`font-size`,`25px`)
                                                                     input5.style(`background`,`transparent`)
                                                                       input5.style(`border-top-style`,`hidden`)
                                                                         input5.style(`border-bottom-style`,`groove`)
                                                                            input5.style(`border-right-style`,`hidden`)
                                                                             input5.style(`border-left-style`,`hidden`)
                                                                              input5.style(`padding-right`,`40px`)
                                                                               input5.style(`outline`,`0px`)
                                                                                input5.style(`color`,`white`)
                                                                                  input6 = createInput(``,`password`)
                                                                                     input6.position(width/4,-555);
                                                                                         input6.style(`font-size`,`25px`)
                                                                                           input6.style(`background`,`transparent`)
                                                                                              input6.style(`border-top-style`,`hidden`)
                                                                                                input6.style(`border-bottom-style`,`groove`)
                                                                                                 input6.style(`border-right-style`,`hidden`)
                                                                                                   input6.style(`border-left-style`,`hidden`)
                                                                                                     input6.style(`padding-right`,`40px`)
                                                                                                       input6.style(`outline`,`0px`)
                                                                                                        input6.style(`color`,`white`)
                                                                                                          input7 = createInput(``,`password`)
                                                                                                            input7.position(width/4,-555);
                                                                                                                input7.style(`font-size`,`25px`)
                                                                                                                    input7.style(`background`,`transparent`)
                                                                                                                      input7.style(`border-top-style`,`hidden`)
                                                                                                                          input7.style(`border-bottom-style`,`groove`)
                                                                                                                            input7.style(`border-right-style`,`hidden`)
                                                                                                                             input7.style(`border-left-style`,`hidden`)
                                                                                                                               input7.style(`padding-right`,`40px`)
                                                                                                                                 input7.style(`outline`,`0px`)
                                                                                                                                  input7.style(`color`,`white`)
                                                                                                                                     registerButton = createButton(`Log In`)
     registerButton.attribute('disabled', '');
                                                                                                                                       registerButton.position(width/2.1,-555)
                                                                                                                                           registerButton.style(`background-color`,`#5D9DFF`);
                                                                                                                                               registerButton.style(`font-size`,`35px`)
                                                                                                                                                  registerButton.style(`border`,`0px`)
                                                                                                                                                     registerButton.style(`color`,`white`)
                                                                                                                                                       registerButton.style(`padding-left`,`100px`)
                                                                                                                                                         registerButton.style(`padding-right`,`100px`)
                                                                                                                                                            registerButton.style(`padding-top`,`5px`)
                                                                                                                                                               registerButton.style(`padding-bottom`,`5px`)
                                                                                                                                                                   registerButton.style(`border-radius`,`6px`)
                                                                                                                                                                    registerButton.style(`box-shadow`,`0px 5px 10px rgba(93, 157, 255, 0.05)`)
                                                                                                                                                                   registerButton.mousePressed(login)
                                                                                                                                                                 success = createButton(`Register`)
                                                                                                                                                               success.position(width/2.1,-555)
                                                                                                                                                            success.style(`background-color`,`#5D9DFF`);
                                                                                                                                                           success.style(`font-size`,`35px`)
                                                                                                                                                         success.style(`border`,`0px`)
                                                                                                                                                       success.style(`color`,`white`)
                                                                                                                                                    success.style(`padding-left`,`100px`)
                                                                                                                                                 success.style(`padding-right`,`100px`)
                                                                                                                                               success.style(`padding-top`,`5px`)
                                                                                                                                           success.style(`padding-bottom`,`5px`)
                                                                                                                                       success.style(`border-radius`,`6px`)
                                                                                                                                   success.style(`box-shadow`,`0px 5px 10px rgba(93, 157, 255, 0.05)`)
                                                                                                                               success.mousePressed(send)
                                                                                                                            Health = createButton(`.`)
                                                                                                                         Health.style(`background-color`,col);
                                                                                                                     Health.position(15,-555)
                                                                                                                 Health.style(`border`,`2px`)
                                                                                                                Health.style(`border-radius`,`15px`)
                                                                                                               Health.style(`padding-left`,`15px`)
                                                                                                            Health.style(`padding-right`,`160px`)
                                                                                                        Health.style(`padding-top`,`50px`)
                                                                                                    Health.style(`padding-bottom`,`10px`) 
    
                                                                                                 Goals = createButton(`.`)
                                                                                               Goals.style(`background-color`,col);
                                                                                           Goals.position(width/1.95,-555)
                                                                                       Goals.style(`border`,`2px`)
                                                                                    Goals.style(`border-radius`,`15px`)
                                                                                 Goals.style(`padding-left`,`20px`)
                                                                            Goals.style(`padding-right`,`160px`)
                                                                         Goals.style(`padding-top`,`50px`)
                                                                     Goals.style(`padding-bottom`,`10px`)    
    
                                                                Bot= createButton(`.`)
                                                            Bot.style(`background-color`,col);
                                                         Bot.mousePressed(bring)
                                                       Bot.position(15,-555)
                                                     Bot.style(`border`,`2px`)
                                                   Bot.style(`border-radius`,`15px`)
                                                 Bot.style(`padding-left`,`20px`)
                                               Bot.style(`padding-right`,`160px`)
                                             Bot.style(`padding-top`,`50px`)
                                         Bot.style(`padding-bottom`,`10px`)   
    
                                      Reports= createButton(`.`)
                                   Reports.style(`background-color`,col);
                                 Reports.position(width/1.95,-555)
                                Reports.style(`border`,`2px`)
                             Reports.style(`border-radius`,`15px`)
                           Reports.style(`padding-left`,`20px`)
                         Reports.style(`padding-right`,`160px`)
                      Reports.style(`padding-top`,`50px`)
                   Reports.style(`padding-bottom`,`10px`)                                                                                                                                        
                newUser = createButton(`Create Account`)
             newUser.position(width/8,-555)    ;
           newUser.style(`background`,`transparent`);
         newUser.style(`color`,`white`);
        newUser.style(`border`,`0px`);
    newUser.style(`outline`,`0px`)
  newUser.style(`font-size`,`18px`)
newUser.mousePressed(newU);
talkbox = createInput(``).attribute(`placeholder`,`    Introduction to Ambibot`)
 talkbox.position(width/1.95,-555)
    talkbox.style(`font-size`,`28px`)
  talkbox.style(`padding-right`,`115px`)
talkbox.style("border","40px")
    talkbox.style(`border-radius`,`100px`)
            talkbox.style(`outline`,`0px`)
    talkbox.style(`background-color`,`#E5E5E5`);
    
    send = createButton(``)
    send.position(width/1.133,-555)
    send.mousePressed(tell)
           
    send.style(`background`,`url("send.png")`);
    send.style(`background-size`,`100%`)
//    send.style(`font-size`,`3-px`)
    send.style(`border`,`10000px`)
//        send.style(`border-radius`,`1500px`)
//    send.style(`padding-right`,`60px`)
//        send.style(`padding-bottom`,`350px`)
//        send.style(`padding-top`,`8px`)
    send.style(`padding`,`14px`)
                send.style(`outline`,`0px`)
    
     buttonA = createButton(`Book A Doctor`)
    buttonA.position(width/1.133,-555)
    buttonA.mousePressed(tell)
           
    buttonA.style(`background-color`,`#3744DE`);
    buttonA.style(`background-size`,`100%`)
//    send.style(`font-size`,`3-px`)
    buttonA.style(`border`,`10000px`)
buttonA.style(`padding`,`14px`)
                buttonA.style(`outline`,`0px`)
      buttonA.style(`font-size`,`20px`)
    buttonA.style(`color`,`white`)
buttonA.style(`border-radius`, `15px`)
    
     
     buttonB = createButton(`Medical Tests`)
    buttonB.position(width/1.133,-555)
    buttonB.style(`font-size`,`20px`)
    buttonB.style(`color`,`white`)
    buttonB.mousePressed(tell)
     buttonB.style(`background-color`,`#3744DE`);
    buttonB.style(`background-size`,`100%`)
    buttonB.style(`border-radius`, `15px`)
//    send.style(`font-size`,`3-px`)
    buttonB.style(`border`,`10000px`)
buttonB.style(`padding`,`14px`)
                buttonB.style(`outline`,`0px`)


  see = createButton(``)
    see.position(width/1.133,-5555)
    see.style(`font-size`,`20px`)
    see.style(`color`,`white`)
see.style(`background-color`,`rgba(255, 255, 255, 0.7)`);
    see.style(`border`,`0px`)
    see.style(`background-size`,`100%`)
    see.style(`border-radius`, `15px`)
    see.style(`padding-bottom`,`530px`)
        see.style(`padding-right`,`480px`)
    
     sum = createButton(`+`)
    sum.position(2,-5555)
    sum.style(`font-size`,`20px`)
    sum.mousePressed(waterUpdate)
    sum.style(`color`,`white`)
sum.style(`background-color`,`rgba(253, 106, 15, 1)`);
    sum.style(`border`,`0px`)
 sum.style(`border-radius`, `15px`)
sum.style(`outline`,`0px`)
    
      backButton = createButton(`←`)
    backButton.position(width/2.1,-555)
    backButton.style(`background`,`transparent`);
    backButton.style(`font-size`,`30px`)
    backButton.style(`border`,`0px`)
    backButton.mousePressed(back)


                see.style(`outline`,`0px`)
    nextButton.mousePressed(next)

  start = createButton(`Begin sleep`)
    start.position(width/1.9,-555);
    start.mousePressed(start_sleep)
       start.style(`background-color`,`#4aa4e8`);
     start.style(`border-radius`, `5px`)
    start.style(`font-size`,`14px`)
    start.style(`border`,`0px`)
    start.style(`color`,`white`)
    
    end = createButton(`End sleep`)
    end.position(width/1.9,-555);
       end.style(`background-color`,`#4aa4e8`);
     end.style(`border-radius`, `5px`)
    end.style(`font-size`,`14px`)
    end.style(`border`,`0px`)
    end.style(`color`,`white`)
    
    a2 = createButton(`Sign In`);
        a2.style(`color`,`white`)
    a2.style(`font-size`,`18px`)
       a2.style(`background`,`transparent`);
    a2.position(200,-555);
    a2.style(`border`,`0px`);
        a2.style(`outline`,`0px`);

               a2.mousePressed(back_1)

}
back_1 = function(){
    a = 2;
}
function newU(){
    a = 3;
}

start_sleep = function(){
    now = hour();
    min = minute();
    sec = second();
time =   now+":"+min+":"+sec
}

end_sleep = function(){
    
}

waterUpdate = function(){
    localStorage.water++
    if(localStorage.water>9){
        localStorage.water = 9;
    }
}
function bring(){
    localStorage.speed = 35;
}
function send(){
    console.log("kf;sd;")
    UserName = input3.value();
    email = input4.value();
    ag = input5.value();
    pass = input6.value();
        pass7 = input7.value();

         hr = hour();
    mn = minute();
    sc = second();
       dy = day();
    mt = month();
    yr = year();
year =   dy+"-"+mt+"-"+yr
time =   hr+":"+mn+":"+sc
    if(pass === pass7){
        console.log("You are great")
    }
        var data ={
          TIME :time,
    NAME : UserName,
           AGE :ag,
            EMAIL : email,
            Password: pass,
          DATE : year
  }
  database.ref(UserName).push(data,finished);
  console.log("send called");
    a=2;
}

function login(){
  localStorage.name = input1.value();
    localStorage.age = input2.value();
    name = input1.value();
    age = input2.value();

c = 2;
    console.log("hdsadkjdjas")
    
//      var data ={
//          TIME :time,
//    NAME : name,
//           AGE :age,
//          DATE : year
//  }
//  database.ref(name).push(data,finished);
//  console.log("send called");
//    if(uN == null){
//        console.log("dflhsdlfk")
//    }

//     alert(`You Have Registerd Successfully`)    

       var ref = database.ref(name);
ref.on("value", gotData, errData);
}
function update(){
    if(uN==input1.value()){
        console.log("success")
    }
     if(uP==input2.value()){
        console.log("successful")
    }
    if(uN==input1.value()&&uP==input2.value()){
     console.log("Name: "+localStorage.name)
        console.log("Age: "+localStorage.age)
    localStorage.speed = 34;
 input1.position(width/4,-555);
 input2.position(width/4,-555);
 registerButton.position(width/2.1,-555)
}
}

function gotData(data){
  let info = data.val();
var keys = Object.keys(info)
var k = keys[0]
  console.log(keys)
uN = info[k].NAME;
    uP = info[k].Password;
console.log("Name: "+uN+" Pass: "+uP)
    update();
}
function errData(err){
console.log("error: "+err)
    console.log("dljdjwkdwkhdkw")
}

function finished(error) {
  if (error) {
   alert(`Plz check your internet connection`)
  } else {
           alert(`You Have Registerd Successfully`)                     
  }
}
function next(){
    a = 2;
}
function draw(){
    background("white");
    let xyz = input1.value().length;
    let length = input2.value().length;
    if(xyz>1&&length>4){
        registerButton.removeAttribute('disabled')
            console.log(xyz)
    registerButton.style(`background-color`,`0065ff`);
                                                                                                                                                   registerButton.style(`background-color`,`#5D9DFF`);

    }else{
         registerButton.attribute('disabled', '');
            registerButton.style(`background-color`,"black");

    }                                                                                                                                           

//    if(deviceOrientation = `landscape`){
//        alert('please rotate your phone')
//    }
    drawSprites();
    
    if(localStorage.water==null){
        localStorage.water = 0;
    }
    
     if(localStorage.calories==null){
        localStorage.calories = 0;
    }
     if(localStorage.sleep==null){
        localStorage.sleep = 0;
    }
     if(localStorage.sleep_goal==null){
         localStorage.sleep_goal = 0;
     } 
    
     if(localStorage.calories_goal==null){
         localStorage.calories_goal = 0;
     } 
     if(localStorage.water_goal==null){
         localStorage.water_goal = 0;
     } 
  
//    if(quotes){
//        b = 2;
//    }
//    if(b===2){
//        better = quotes.body;
//        console.log(better)
//    }
 if(localStorage.speed==1){
     if(a===1){
         
    fill("black")
          image(smile,width/11,height/8,width/1.1,height/3)
    textSize(60)
     textStyle("bold")
   text("Welcome!",width/5,height/1.8)
          textStyle("normal")

     textSize(21);
    text("We are happy to have you & welcome",width/12,height/1.6)
         text(`you to experience the "Ambience Way"`,width/12,height/1.5)
        text(`towards Holistic Health, far avobe`,width/8,height/1.41)
             text(`weight loss/control`,width/3.5,height/1.34)
     fill("green")
     noStroke();
     rectMode(CENTER)
rect(width/1.9,height/1.28,width/9,3)
    nextButton.position(width/2.1,height/1.2)
     }
     if(a===2){
             nextButton.position(width/2.1,-555)
             input1.position(width/12,height/2.5);
         background("#313131")
    input2.position(width/12,height/1.71);
//          image(logo,width/5,height/16,width/1.6,height/3)
//          image(user,width/7,height/2.1,width/16,height/16,20)
//                   image(age,width/7,height/1.7,width/16,height/16)
             registerButton.position(width/8,height/1.4)
fill("white");
         textSize(45)
         textFont("arial")
         textStyle("bold")
         text("Hello.", width/14,height/8)
         text("Welcome Back.", width/14,height/5.15)
         fill("gray");
         textSize(width/23)
         textFont("arial")
         textStyle("normal")
         text("Username",width/12,height/2.65);
                  text("Password",width/12,height/1.78)
newUser.position(width/3,height/1.2)  
          input3.position(width/12,-555);
                  input4.position(width/12,-555);
         input5.position(width/12,-555);
         input6.position(width/12,-555);
         input7.position(width/12,-555);
         success.position(width/8-555)
         a2.position(width/20,-555);
         if(c==2){
             col = color(255,255,255,0.8)
             rectMode(CENTER)
                      tint(240,240,240)
 if(m==1){
    i = i+2
    w  =w-2;
  }
  if(m==2){
    i = i-2
    w  =w+2;
    
  }
  if(i ==215){
  m = 2
     r = random(0,255)
  g = random(0,255)
  b = random(0,255)
  }
  if(i==-1){
    m = 1
  }
 
  
  noStroke();
  fill("red")
  ellipse(width/2,height/2,i,i)
  fill("orange")
  ellipse(width/2,height/2,w,w)
         }
     }
     if(a===3){
                  background("#313131")

         input1.position(2,-5555);
                  input2.position(2,-5555);
newUser.position(width/3,-555)  
             registerButton.position(width/8,-555)
         fill("white");
         textSize(40)
         textFont("arial")
         textStyle("bold")
         text("Join Us.", width/14,height/8)
         input3.position(width/12,height/4);
                  input4.position(width/12,height/2.65);
         input5.position(width/12,height/2);
         input6.position(width/12,height/1.64);
         input7.position(width/12,height/1.39);
         success.position(width/8,height/1.2)
  fill("gray");
         textSize(20)
         textFont("arial")
         textStyle("normal")
         text("Username",width/12,height/4.2);
         text("Email",width/12,height/2.75);
         text("Age",width/12,height/2.06);
         text("Password",width/12,height/1.65);
         text("Confirm Password",width/12,height/1.4);
a2.position(width/3,height/1.07);
         fill("red")
//         ellipse(200,200,20,20)

     }
}
    if(localStorage.speed==34){
    if(deviceOrientation ==="landscape"){
//        alert("rotate your device")
    }
         a2.position(width/20,-555);

        if(window.innerWidth>550){
                     resizeCanvas(window.innerWidth,window.innerHeight)
            background(dk)
            textSize(width/30);
//            textStyle("bold");
            newUser.position(width/3,-555)  

            fill("white")
            text(localStorage.name,width/12,height/12)
Health.style(`padding-left`,`15px`)
           Health.style(`padding-right`,`280px`)
               Health.style(`padding-top`,`80px`)
                   Health.style(`padding-bottom`,`65px`)
 Goals.style(`padding-left`,`20px`)
           Goals.style(`padding-right`,`280px`)
               Goals.style(`padding-top`,`80px`)
                   Goals.style(`padding-bottom`,`65px`)
Bot.style(`padding-left`,`20px`)
Bot.style(`padding-right`,`280px`)
Bot.style(`padding-top`,`80px`)
Bot.style(`padding-bottom`,`65px`)
Reports.style(`padding-left`,`20px`)
Reports.style(`padding-right`,`280px`)
Reports.style(`padding-top`,`80px`)
Reports.style(`padding-bottom`,`65px`)
            Health.position(width/3.5,height/1.4)
Goals.position(width/1.32,height/1.4)
Bot.position(width/20,height/1.4)
Reports.position(width/1.91,height/1.4)
    
            desktop();
            console.log("wjhdw")
      
                

        }else{
                     resizeCanvas(window.innerWidth,window.innerHeight*1.1)
    start.position(width/1.9,height/1.384);
    end.position(width/1.9,height/1.384);
                                        sum.position(width/25,height/2.51)

            background(dark)
             fill("white")
        textSize(width/20);
//       text("There is no NOBILITY in fighting",width/6,height/5.2)
//                     textStyle("bold")
                    textSize(width/25);

                 text("Out of "+localStorage.sleep_goal+" glasses",width/9,height/2.41)

        text(localStorage.name,width/5,height/16.5)
                    textSize(width/6);
fill("#BB86FC")
            text(localStorage.water,width/5.65,height/2.9)
                            text(localStorage.calories,width/5.65,height/1.5)
                text(localStorage.sleep,width/1.48,height/1.5)
//   noFill();
//        stroke("gray")
//        strokeWeight(0.05)
//        rect(15,height/2.6,width/1.1,height/12)
//                rect(15,height/2.1,width/1.1,height/12)
//                        rect(15,height/1.75,width/1.1,height/12)
////                                 strokeWeight(1.1)
//        rect(15,height/1.5,width/1.1,height/12)

//         profile.position(width/12,height/5.4)



//                 textStyle("normal")
//                 textSize(width/36)
//                 text("0 out of 1800 cals consumed",width/5,height/2.2)
//                                  text("0 out of 8 glasses ",width/5,height/1.85)
//                                  text("0 out of 8 hours ",width/5,height/1.55)
//                                  text("Active for 0 hours ",width/5,height/1.35)
//
//      
////                    image(sample,width/2.5,6,width/5,height/10)
//                           image(food,17,height/2.55,width/8,height/15)
//                                                      image(water,17,height/2.06,width/8,height/15)
//                                                      image(sleep,20,height/1.74,width/8,height/15)
//                                                      image(run,17,height/1.49,width/8,height/15)
//                                                      image(qot,15,height/5.2,width/1.1,height/6.8)
//          textSize(width/20)
//text("Today's Status",8,height/2.7)
//
//        noFill();
//        stroke("white")
//        strokeWeight(3)
//        circle(width/2,height/17,width/5,height/40)
//        
//         fill("red")
//         circle(width/2,height/17,width/5,height/40)
//         fill("green")
//        
//         fill("white")
//textSize(width/27);
//textStyle("bold")
//        noStroke();
//text("There is no NOBILITY in fighting",width/7,height/4)
//text("Sometimes it is best to SMILE and",width/7,height/3.6)
//text("move on",width/2.5,height/3.25)
count = 0;
            Health.position(15,height/1.26)
Goals.position(width/1.95,height/1.26)
Bot.position(15,height/1.11)
Reports.position(width/1.95,height/1.11)
        }
        if(img){
image(img,0,0,width/6,height/12)
    image(frame,00,00,width/6,height/11)
            console.log("jfls")
        }
         buttonA.position(width/9,-555);
                                buttonB.position(width/2,-555);
        backButton.position(200,-555);
        talkbox.position(200,-555);
       
      newUser.position(width/8,-555)    ;

//        profile.position(width/5,12)
     
see.position(200,-5555)
    }
//console.log(localStorage.login)
        if(localStorage.speed==35){
         resizeCanvas(window.innerWidth,window.innerHeight)
Health.position(15,-555)
Goals.position(width/1.95,-555)
Bot.position(15,-555)
Reports.position(width/1.95,-555)
    background(bot)
            
            backButton.position(15,3)
             fill("white")
            rect(0,0,width,height/15)
            strokeWeight(0.2)
            fill(col1)
            textSize(width/27)
            textStyle("bold")
            text("Ambibot",width/2.5,height/25)
           
            
 talkbox.position(20,height/1.08);
fill("#3744DE")
    if(karna===1){
            count++
    }

            if(count>15){
                fill("#3744DE")
            noStroke();     
rect(width/19,height/15,width/3,height/20)
                textSize(width/40);
                console.log(width/30)
                   fill("white")
                text("Hello "+localStorage.name,width/12,height/10)
            }
              if(count>25){
                fill("#3744DE")
            noStroke();     
rect(width/19,height/8,width/2,height/8.5)
                textSize(width/38);
                   fill("white")
                  
                text("I am `Ambibot` your virtual guide",width/12.5,height/6.5)
                                  text("for all your health related queries",width/12.5,height/5.5)
                                                    text("and a coach for you to live a fit and  ",width/12.5,height/4.8)
                   text("a Healthy Life",width/12.5,height/4.25)


            }
              if(count>35){
                    fill(col1)
    textSize(width/30)
    text(window.innerWidth,width/2,height/12)
                fill("#3744DE")
            noStroke();     
rect(width/19,height/3.9,width/1.8,height/20)
                textSize(width/width*15);
                   fill("white")
                text("Tell me how can I help you "+localStorage.name,width/12,height/3.45)
            }
            if(count>40){
                buttonA.position(width/9,height/3);
                                buttonB.position(width/2,height/3);

            }
            
            if(count>40&&karna===1){
                talkbox.attribute(`placeholder`,`Choose One of the options`)
//                 send.position(width/1.2,height/1.075)
            }
            if(option1){
see.position(16,height/10)
                talkbox.position(200,-555)
            }
        }
}

function tell()
{
    count = 0;
    karna = 2;
     buttonA.position(width/9,-555);
                                buttonB.position(width/2,-555);
  option1 = true;
    
    }
function desktop()
{
}

function back(){
    localStorage.speed=34;
}
