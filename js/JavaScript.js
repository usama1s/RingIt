// for floating calling box
const placeCallDiv = document.querySelector("#place-call-div");
const ringingcalldiv = document.querySelector("#ringing-call-div");
const callinprogressdiv = document.querySelector("#call-in-progress-div");
const endCalldiv = document.querySelector("#end-call-div");

const floatingCallDialogueBox = document.querySelector("#calling-dialogue-box-mob");

const floatingMobBtnIconPhone = document.querySelector(".floating-mob-section .place-call-floating-btn button .fa-phone");
const floatingMobBtnIconCross = document.querySelector(".floating-mob-section .place-call-floating-btn button .fa-times");


function openFloatingCallDialogue(){
  // shows the main floating dialogue box when floating phone buttons is clicked
  // and hides it if it is already shown
  floatingCallDialogueBox.classList.toggle("hideIt");
  floatingCallDialogueBox.classList.toggle("slideInAnimation");
  floatingMobBtnIconPhone.classList.toggle("hideIt");
  floatingMobBtnIconCross.classList.toggle("hideIt");

}

function openPlaceCallBox(){
  // shows place call box and hides rest of the boxes
  placeCallDiv.classList.remove("hideIt");
  placeCallDiv.classList.add("slideInAnimation");

  ringingcalldiv.classList.remove("slideInAnimation");
  endCalldiv.classList.remove("slideInAnimation");
  callinprogressdiv.classList.remove("slideInAnimation");

  ringingcalldiv.classList.add("slideOutAnimation");
  endCalldiv.classList.add("slideOutAnimation");
  callinprogressdiv.classList.add("slideOutAnimation");

  setTimeout(function () {
    placeCallDiv.classList.remove("slideInAnimation");

    ringingcalldiv.classList.add("hideIt");
    endCalldiv.classList.add("hideIt");
    callinprogressdiv.classList.add("hideIt");

    ringingcalldiv.classList.remove("slideOutAnimation");
    endCalldiv.classList.remove("slideOutAnimation");
    callinprogressdiv.classList.remove("slideOutAnimation");

  }, 1000);



}
function showRingingCallBox() {
    //shows ringing call box and hides rest
    ringingcalldiv.classList.remove("hideIt");
    ringingcalldiv.classList.add("slideInAnimation");

    placeCallDiv.classList.remove("slideInAnimation");
    endCalldiv.classList.remove("slideInAnimation");
    callinprogressdiv.classList.remove("slideInAnimation");

    placeCallDiv.classList.add("slideOutAnimation");
    endCalldiv.classList.add("slideOutAnimation");
    callinprogressdiv.classList.add("slideOutAnimation");

    setTimeout(function () {
      ringingcalldiv.classList.remove("slideInAnimation");

      placeCallDiv.classList.add("hideIt");
      endCalldiv.classList.add("hideIt");
      callinprogressdiv.classList.add("hideIt");

      placeCallDiv.classList.remove("slideOutAnimation");
      endCalldiv.classList.remove("slideOutAnimation");
      callinprogressdiv.classList.remove("slideOutAnimation");

    }, 1000);



    setTimeout(function () {
      //after some time (2second) shows progress call box
      showProgressCallBox();

    }, 2000);

}


function showProgressCallBox(){
  // shows progress call box and hides rest of the boxes
  callinprogressdiv.classList.remove("hideIt");
  callinprogressdiv.classList.add("slideInAnimation");

  placeCallDiv.classList.remove("slideInAnimation");
  endCalldiv.classList.remove("slideInAnimation");
  ringingcalldiv.classList.remove("slideInAnimation");

  placeCallDiv.classList.add("slideOutAnimation");
  endCalldiv.classList.add("slideOutAnimation");
  ringingcalldiv.classList.add("slideOutAnimation");

  setTimeout(function () {
    callinprogressdiv.classList.remove("slideInAnimation");

    placeCallDiv.classList.add("hideIt");
    ringingcalldiv.classList.add("hideIt");
    endCalldiv.classList.add("hideIt");

    placeCallDiv.classList.remove("slideOutAnimation");
    endCalldiv.classList.remove("slideOutAnimation");
    ringingcalldiv.classList.remove("slideOutAnimation");

  }, 1000);

stopwatch.start(); //stopwatch start
}

function showEndCallBox(){

    endCalldiv.classList.remove("hideIt");
    endCalldiv.classList.add("slideInAnimation");

    placeCallDiv.classList.remove("slideInAnimation");
    callinprogressdiv.classList.remove("slideInAnimation");
    ringingcalldiv.classList.remove("slideInAnimation");

    placeCallDiv.classList.add("slideOutAnimation");
    callinprogressdiv.classList.add("slideOutAnimation");
    ringingcalldiv.classList.add("slideOutAnimation");

    setTimeout(function () {
      endCalldiv.classList.remove("slideInAnimation");

      placeCallDiv.classList.add("hideIt");
      ringingcalldiv.classList.add("hideIt");
      callinprogressdiv.classList.add("hideIt");

      placeCallDiv.classList.remove("slideOutAnimation");
      callinprogressdiv.classList.remove("slideOutAnimation");
      ringingcalldiv.classList.remove("slideOutAnimation");

    }, 1000);


    stopwatch.stop(); //stopwatch stop
}




// for desktop calls
const ringingCallBoxDesktop = document.querySelector("#ringing-call");
const callInProgressBoxDesktop = document.querySelector("#call-in-progress");
const callEndedBoxDesktop = document.querySelector("#call-ended");


function openDesktopRingingCall(){
  // shos ringing call box and hides rest of the boxes
  ringingCallBoxDesktop.classList.remove("hideIt");
  ringingCallBoxDesktop.classList.add("slideInAnimation");

  callInProgressBoxDesktop.classList.remove("slideInAnimation");
  callEndedBoxDesktop.classList.remove("slideInAnimation");

  callInProgressBoxDesktop.classList.add("slideOutAnimation12");
  callEndedBoxDesktop.classList.add("slideOutAnimation12");

  setTimeout(function () {
    ringingCallBoxDesktop.classList.remove("slideInAnimation");

    callInProgressBoxDesktop.classList.add("hideIt");
    callEndedBoxDesktop.classList.add("hideIt");

    callInProgressBoxDesktop.classList.remove("slideOutAnimation12");
    callEndedBoxDesktop.classList.remove("slideOutAnimation12");

  }, 1000);


  setTimeout(function () {
    // after some time (2second) shows call in progress box
    openDesktopCallInProgressBox()
  }, 5000);
}
function openDesktopCallInProgressBox(){
  // shows call in progresss box and hides rest of the boxes
  callInProgressBoxDesktop.classList.remove("hideIt");
  callInProgressBoxDesktop.classList.add("slideInAnimation");

  ringingCallBoxDesktop.classList.remove("slideInAnimation");
  callEndedBoxDesktop.classList.remove("slideInAnimation");

  ringingCallBoxDesktop.classList.add("slideOutAnimation12");
  callEndedBoxDesktop.classList.add("slideOutAnimation12");

  setTimeout(function () {
    callInProgressBoxDesktop.classList.remove("slideInAnimation");

    ringingCallBoxDesktop.classList.add("hideIt");
    callEndedBoxDesktop.classList.add("hideIt");

    ringingCallBoxDesktop.classList.remove("slideOutAnimation12");
    callEndedBoxDesktop.classList.remove("slideOutAnimation12");

  }, 1000);

  // ringingCallBoxDesktop.classList.add("hideIt");
  // callEndedBoxDesktop.classList.add("hideIt");
  stopwatch.start(); // stopwatch start
}
function openDesktopCallEndedBox(){
  // shows call ended box and hides rest of the boxes
  callEndedBoxDesktop.classList.remove("hideIt");
  callEndedBoxDesktop.classList.add("slideInAnimation");

  ringingCallBoxDesktop.classList.remove("slideInAnimation");
  callInProgressBoxDesktop.classList.remove("slideInAnimation");

  ringingCallBoxDesktop.classList.add("slideOutAnimation12");
  callInProgressBoxDesktop.classList.add("slideOutAnimation12");

  setTimeout(function () {
    callEndedBoxDesktop.classList.remove("slideInAnimation");

    ringingCallBoxDesktop.classList.add("hideIt");
    callInProgressBoxDesktop.classList.add("hideIt");

    ringingCallBoxDesktop.classList.remove("slideOutAnimation12");
    callInProgressBoxDesktop.classList.remove("slideOutAnimation12");

  }, 1000);

  // ringingCallBoxDesktop.classList.add("hideIt");
  // callInProgressBoxDesktop.classList.add("hideIt");
  stopwatch.stop(); //stopwatch stop
}



var granimInstance = new Granim({
    element: '#canvas-complex',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                [
                    { color: '#833ab4', pos: .2 },
                    { color: '#fd1d1d', pos: .8 },
                    { color: '#38ef7d', pos: 1 }
                ], [
                    { color: '#40e0d0', pos: 0 },
                    { color: '#ff8c00', pos: .2 },
                    { color: '#ff0080', pos: .75 }
                ],
            ]
        }
    }
});
