// Crie uma lista de usuários (você decide quais propriedades existem na sua tipagem) e desenvolva um teste garantindo que o Astrodev está presente nessa lista.
// Crie pelo menos um teste que valida sua implementação.

export const subjectsStudens: string[][] = [];
export const mathStudents = ["Fulano", "Ciclano", "Astrodev"];
export const englishStudents = ["Fulano", "Ciclano", "Beltrana"];
export const techStudents = ["Fulano", "Ciclano", "Astrodev"];

subjectsStudens.push(mathStudents, englishStudents, techStudents);

const sub1 = "Math";
const sub2 = "English";
const sub3 = "Tech";

export const exercicio3 = (student: string): any[] => {
  const enroledSubjects = [];
  for (let subjectStudent of subjectsStudens) {
    if (subjectStudent.includes(student)) {
      const index = subjectsStudens.indexOf(subjectStudent);

      if (index === 0) {
        enroledSubjects.push(sub1);
      } else if (index === 1) {
        enroledSubjects.push(sub2);
      } else if (index == 2) {
        enroledSubjects.push(sub3);
      }
    }
  }
  console.log(student, enroledSubjects);
  return enroledSubjects;
};

// export const exercicio3 = (input:) => {
//   const array = [1, "Labenu", false, "Astrodev", !100];
//   if (array.includes(input)) {
//     return input;
//   } else {
//     return null;
//   }
// };
