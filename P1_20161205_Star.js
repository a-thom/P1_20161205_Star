
function drawStar (centerX, centerY, arms, outerRadius, innerRadius){
    var angle = Math.PI / arms;
    var xPoint=[]; // array that will contain all the x coordinates for all points
    var yPoint=[]; // array for the y coordinates

    //create corners... 2 for each arm, inner and outer
    for (var i = 0; i < 2 * arms; i++) {
        // Use outer or inner radius depending on what iteration we are in.
        var radius;
        var innerOrOuter = (i & 1); //changes between 0 and 1
        if (innerOrOuter === 0){
            radius = innerRadius;
        }else if(innerOrOuter ===1){
            radius = outerRadius;
        }
        var currX = round(centerX + Math.sin(i * angle) * radius);
        var currY = round(centerY + Math.cos(i * angle) * radius);
        //push coordinates into the vectors
        xPoint.push(currX);
        yPoint.push(currY);
    }
    // draw star
    noStroke();
    fill(255, 234, 0);
    beginShape();
        for(var k=0; k<2*arms;k++){ // two points per arm
            vertex(xPoint[k], yPoint[k]); //paint each point
        }
    endShape(CLOSE);
}

//call the function for each star
drawStar(100, 100, 5, 60, 23); // classic 5-armed star
drawStar(253, 166, 6, 60, 23); // 6 arms
drawStar(172, 289, 10, 60, 40); // 10 arms, wide inner radius
drawStar(384, 266, 12, 60, 10); //12 Arms, small inner radius

