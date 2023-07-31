

function regester(callback) {
    setTimeout( () => {
        console.log("Regester end...");
        callback();

    }, 3000);
}


function sendEmail(callback2) {
    setTimeout( () => {
        console.log("Email end...");
        callback2();

    }, 2000);

}


function login(callback3) {
    setTimeout( () => {
        console.log("Login end...");
        callback3();

    }, 1500);


}


function getUserData(callback4) {
    setTimeout( () => {
        console.log("Got User Data...");
        callback4();

    }, 1400);

}


function displayUserData(callback5) {
    setTimeout( () => {
        console.log("Display User data...");
        callback5();

    }, 1000);

}
regester( () => {
    sendEmail( () =>{
        login( () =>{
            getUserData( () => {
                 displayUserData( () => {
                        appWork( () => {

                        });

                    });
                });
         });
    });
});

function appWork(finalCall) {
    setTimeout( () =>{
        console.log("Applocation working Start...");
    },2000);
    finalCall();
  
};