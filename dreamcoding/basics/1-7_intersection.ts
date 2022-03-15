{
  // Intersection Types: &

  type student = {
    name: string;
    score: number;
  };

  type worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: student & worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: "gom",
    score: 1,
    employeeId: 111,
    work: () => {},
  });
}
