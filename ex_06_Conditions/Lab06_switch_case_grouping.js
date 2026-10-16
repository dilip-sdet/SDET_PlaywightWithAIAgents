let cricketer = "Dilip Kumar K";
switch(cricketer){
    case "Sachin Tendulkar":
    case "Rahul Dravid":
    case "Anil Kumble":
    case "Saurav Ganguly":
    case "Yuvraj Singh":
        console.log("Players belongs to Indian Team");
        break;  
    case "Mahela Jayavardene":
    case "Sanath Jayasuriya":
    case "Marvan Attapattu":
    case "Tillakaratne Dilshan":
    case "Mutthaiah Muralidharan":
        console.log("Players belongs to Sri Lankan Team");
        break;
    case "Viv Richards":
    case "Brian Lara":
    case "Chris Gayle":
    case "Shivnarine Chandrapaul":
    case "Ramnaresh Saravan":
        console.log("Players belongs to West Indian Team");
        break;
    default:
        console.log("Provide the valid cricketer name");
}