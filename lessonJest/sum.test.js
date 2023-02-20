const filis =require("./Homework_Js/ObjectsArray")

const PeopleInfo = [{"name": "Arman", "age": 20, "job":  "Programmer", "investments": 1000},
                     {"name": "Avetiq", "age": 23, "job":  "Lawyer:", "investments": 2000},
                     {"name": "Minas", "age": 23, "job":  "Lecturer", "investments": 1500},
                     {"name": "Meri", "age": 21, "job":  "President Npua ", "investments": 1300},
                     {"name": "Mushegh", "age": 18, "job":  "Chess player", "investments": 5500},
                     {"name": "Heghine", "age": 18, "job":  "Designer", "investments": 3500}]

test("return sum money", () => {
    expect(filis.getInvestmentMoney(PeopleInfo)).toBe(9000);
})
test("return name and investments", () => {
    expect(Array.isArray(filis.getInvestmentInfo(PeopleInfo))).toBe(true);
})
test("return max investments", () => {
    const res=filis.getThreeMaxInvestors(PeopleInfo)
    expect(res.length).toBe(3)
})
