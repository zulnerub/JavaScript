function solve(input) {
    let data = {};
    while ((line = input.shift()) !== "Ave Cesar") {
         if (!line.includes(' vs ')){
            let [name, technique, points] = line.split(" -> ");
            points = Number(points);

            if (!(name in data)) {
                data[name] = { totalSkill: 0};
                data[name][technique] = points;
                data[name].totalSkill += points;
            }else{
                if (!(technique in data[name])) {
                    data[name][technique] = points;
                    data[name].totalSkill += points;
                }else{
                    if (data[name][technique] < points) {
                        data[name].totalSkill += points - data[name][technique];
                        data[name][technique] = points;
                    }
                }
            }
        } else  {
            let [gladiator1, gladiator2] = line.split(" vs ");
            if ((gladiator1 in data) && (gladiator2 in data)) {
                let techs1 = Object.keys(data[gladiator1]);
                let techs2 = Object.keys(data[gladiator2]);
                for (let tech of techs1) {
                    if (techs2.includes(tech) && tech !== "totalSkill") {
                        if (data[gladiator1].totalSkill > data[gladiator2].totalSkill) {
                            delete data[gladiator2];
                        } else {
                            delete data[gladiator1];
                        }
                        break;
                    }
                }
            }

        }

    }

    Object.entries(data)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => b[1].totalSkill - a[1].totalSkill)
        .forEach(gladiator => {
            console.log(`${gladiator[0]}: ${gladiator[1].totalSkill} skill`);
            delete gladiator[1].totalSkill;
            Object.entries(gladiator[1])
                .sort((a, b) => a[0].localeCompare(b[0]))
                .sort((a, b) => b[1] - a[1])
                .forEach(a => console.log(`- ${a[0]} <!> ${a[1]}`))
        });

}

let test0 = ["Pesho -> BattleCry -> 400",
"Gosho -> PowerPunch -> 300",
"Stamat -> Duck -> 200",
"Stamat -> Tiger -> 250",
"Ave Cesar"];

let test1 = ["Pesho -> Duck -> 400",
"Julius -> Shield -> 150",
"Gladius -> Heal -> 200",
"Gladius -> Support -> 250",
"Gladius -> Shield -> 250",
"Pesho vs Gladius",
"Gladius vs Julius",
"Gladius vs Gosho",
"Ave Cesar"];


solve(test0);
solve(test1);