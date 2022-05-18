function recursiva(max) {
    console.log(max);
    if (max >= 30000) return;
    max++;
    recursiva(max);
}

recursiva(0);