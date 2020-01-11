function solve(name, age, weight, height) {
    let info = {};
    info.name = name;
    info.personalInfo = {age: age, weight: weight, height: height};
    info.BMI = Math.round(weight / ((height / 100) * (height / 100)));
    info.status = info.BMI < 18.5 ? "underweight"
        :
        (info.BMI >= 18.5 && info.BMI < 25) ? "normal"
            :
            (info.BMI >= 25 && info.BMI < 30) ? "overweight"
                :
                "obese";
    if (info.status === "obese") info.recommendation = "admission required";

    return info;

}

console.log(solve("Peter", 29, 75, 182));;