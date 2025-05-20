basic.showString ("mode?")
input.onButtonPressed(Button.A, function() {
    samojezditko ()    
})
input.onButtonPressed(Button.B, function (){
    nasledovani ()
})
input.onButtonPressed(Button.AB, function (){
    linka ()
})

input.onLogoEvent(TouchButtonEvent.Pressed, function (){
    ovladac ()
})


function samojezditko () {
    let vzdalenost = 0
    let vzdalenostl = 0
    let vzdalenostp = 0

    function zpet() {
        mecanumRobot.Motor(LR.Upper_left, MD.Back, 75)
        mecanumRobot.Motor(LR.Upper_right, MD.Back, 75)
        mecanumRobot.Motor(LR.Lower_left, MD.Back, 75)
        mecanumRobot.Motor(LR.Lower_right, MD.Forward, 75)
    }
    function dopredu() {
        mecanumRobot.Motor(LR.Upper_left, MD.Forward, 75)
        mecanumRobot.Motor(LR.Upper_right, MD.Forward, 75)
        mecanumRobot.Motor(LR.Lower_left, MD.Forward, 75)
        mecanumRobot.Motor(LR.Lower_right, MD.Back, 75)
    }
    function doleva() {
        mecanumRobot.Motor(LR.Upper_left, MD.Back, 75)
        mecanumRobot.Motor(LR.Upper_right, MD.Forward, 75)
        mecanumRobot.Motor(LR.Lower_left, MD.Back, 75)
        mecanumRobot.Motor(LR.Lower_right, MD.Back, 75)
    }
    function doprava() {
        mecanumRobot.Motor(LR.Upper_left, MD.Forward, 75)
        mecanumRobot.Motor(LR.Upper_right, MD.Back, 75)
        mecanumRobot.Motor(LR.Lower_left, MD.Forward, 75)
        mecanumRobot.Motor(LR.Lower_right, MD.Forward, 75)
    }

    mecanumRobot.setServo(90)
    basic.showString ("mode 1")
    basic.pause(1000)
    basic.forever(function () {
        vzdalenost = mecanumRobot.ultra()
        if (vzdalenost < 30) {
            mecanumRobot.state(MotorState.stop)
            basic.pause(1000)
            mecanumRobot.setServo(0)
            basic.pause(1000)
            vzdalenostp = mecanumRobot.ultra()
            mecanumRobot.setServo(180)
            basic.pause(1000)
            vzdalenostl = mecanumRobot.ultra()
            if (vzdalenostl < vzdalenostp) {
                doprava()
                mecanumRobot.setServo(90)
                basic.pause(400)
            }
            else {
                doleva()
                mecanumRobot.setServo(90)
                basic.pause(400)
            }

        }
        else {
            dopredu()
        }
    })
    
}

function nasledovani () {

}

function linka (){

}

function ovladac() {

}