let statusDisplay = (status)=>{
    if(status>=200 && status<300){
        console.log("Success")
    }else if(status>=300 && status<500){
        console.log("Client Error");
    }else if(status>=500 && status<600){
        console.log("Server Error");
    }else{
        console.log("API is not valid");
    }
}

statusDisplay(200);
statusDisplay(305);
statusDisplay(600);