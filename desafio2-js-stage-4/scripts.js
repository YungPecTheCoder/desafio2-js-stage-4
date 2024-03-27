
let students = [
    { 
        name: "Pec",
        testScore1: 10,
        testScore2: 10
    },
    {
        name: "Fefa",
        testScore1: 8.5,
        testScore2: 9.5
    },
    {
        name: "Lica",
        testScore1: 9.0,
        testScore2: 8.0
    },
    {
        name: "Ana",
        testScore1: 2.0,
        testScore2: 3.5
    }
];



students.forEach(function(student) {
    let media = (student.testScore1 + student.testScore2) / 2
    if(media >= 7) {
        alert("A média do(a) aluno(a) " + student.name + " é: " + media + "\n" + "Parabéns, " + student.name + "! Você foi aprovado(a) no concurso!");    
    } else {
        alert("A média do(a) aluno(a) " + student.name + " é: " + media + "\n" + "Não foi dessa vez, " + student.name + "! Tente novamente!");
    }
});
