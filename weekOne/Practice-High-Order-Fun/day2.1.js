function myMap1(){
    console.log("-------Map--------");
    let marks = [10, 20, 30, 40, 50];
    let newMarks = marks.map(function(mark){
        return mark + 5;
    });
    console.log("Original Marks:", marks);
    console.log("New Marks:", newMarks);


}
function myFilter1() {
    console.log("-------Filter--------");
    let balls = ["red", "blue", "green", "yellow", "purple", "red"];

    // Filter only "red" balls
    let newBalls = balls.filter(function(ball) {
        return ball === "rewwd";
    });

    // Check if we found any "red" balls
    if (newBalls.length === 0) {
        console.log("No Red Ball Found");
    } else {
        console.log("New Balls:", newBalls);
    }
}

myFilter1();
