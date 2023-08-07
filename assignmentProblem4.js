let marks=75;

switch(true){

    case (marks<=100 && marks>=90):
        console.log("A");
    break;
    case (marks<=89 && marks>=80):
        console.log("B");
    break;
    case (marks<=79 && marks>=70):
        console.log("C");
    break;
    case (marks<=69 && marks>=60):
        console.log("D");
    break;
    default:
        console.log("F");

}