function PrintOdds1to255() {
    for(var i=1; i <= 255; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}
PrintOdds1to255();