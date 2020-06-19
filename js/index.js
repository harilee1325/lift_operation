$(document).ready(function () {


    var marginTopIntial = 50;
    var counter = 0;
    var isMoving = true;
    var value = 0;
    var isDown = true;
    var isUp = false;
    var levelUpValue = [];
    var levelDownValue = [];

    $('.bt_1').click(function () {
        if (isMoving) {
            if (marginTopIntial != 700) {
                levelDownValue.push(700);
                value = 700;
                callDownMotion();

            }
        }
    })
    $('.bt_2').click(function () {

        if (isMoving) {
            if (marginTopIntial > 490) {
                levelUpValue.push(490);
                value = 490;
                callUpMotion();

            } else if (marginTopIntial < 490) {
                levelDownValue.push(490);
                value = 490;
                callDownMotion();

            }
        } else {
            //condition to check wether the lift has crossed the floor during the floor selection
            if (marginTopIntial < 490 && isDown) {
                value = 490;
                levelDownValue.push(490);


            }
            if (marginTopIntial > 490 && isUp) {
                value = 490;
                levelUpValue.push(490);

            }
        }

    })
    $('.bt_3').click(function () {
        if (isMoving) {
            if (marginTopIntial > 270) {
                levelDownValue.push(270);
                value = 270;
                callUpMotion();

            } else if (marginTopIntial < 270) {
                levelUpValue.push(270);
                value = 270;
                callDownMotion();

            }
        } else {
            //condition to check wether the lift has crossed the floor during the floor selection
            if (marginTopIntial > 270 && isUp) {
                value = 270;
                levelUpValue.push(270)


            }
            if (marginTopIntial < 270 && isDown) {
                value = 270;
                levelDownValue.push(270);

            }
        }

    })

    $('.bt_4').click(function () {
        if (isMoving) {
            if (marginTopIntial != 50) {
                levelUpValue.push(50);
                value = 50;
                callUpMotion();

            }
        }

    });
    function callUpMotion() {
       
        counter++;
        isDown = false;
        isUp = true;
        isMoving = false;
        setTimeout(function () {
            $('.lift_image').css('margin-top', `${marginTopIntial - 10}px`);
            marginTopIntial = marginTopIntial - 10;

            if (marginTopIntial != value) {
                callUpMotion();
            }
            if (marginTopIntial == value) {
                $('.lift_image').attr('src', '/img/liftopen.png');
                setTimeout(function(){
                    isMoving = true;
                    $('.lift_image').attr('src', '/img/liftclose.png');
                }, 2000);

            }

        }, 100)

    }

 
    function callDownMotion() {
       
        counter++;
        isDown = true;
        isUp = false;
        isMoving = false;
        setTimeout(function () {
            $('.lift_image').css('margin-top', `${marginTopIntial + 10}px`);
            marginTopIntial = marginTopIntial + 10;

            if (marginTopIntial != value) {
                callDownMotion();
            }

            if (marginTopIntial == value) {
                $('.lift_image').attr('src', '/img/liftopen.png');
                setTimeout(function(){
                    isMoving = true;

                    $('.lift_image').attr('src', '/img/liftclose.png');
                }, 2000);

            }


        }, 100);

    }

});