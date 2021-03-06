    // Challenge 1
    // Print all of the students and their cohort.
    let students = [
      {name: 'Remy', cohort: 'Jan'},
      {name: 'Genevieve', cohort: 'March'},
      {name: 'Chuck', cohort: 'Jan'},
      {name: 'Osmund', cohort: 'June'},
      {name: 'Nikki', cohort: 'June'},
      {name: 'Boris', cohort: 'June'}
    ];
    // for (let student in students) {
    //   console.log(`Name: ${students[student].name}, Cohort: ${students[student].cohort}`);
    // };
    // Print out the below object to match the example.
    // EMPLOYEES
    // 1 - JONES, MIGUEL - 11
    // 2 - BERTSON, ERNIE - 12
    // 3 - LU, NORA - 6
    // 4 - BARKYOUMB, SALLY - 14
    // MANAGERS
    // 1 - CHAMBERS, LILLIAN - 15
    // 2 - POE, GORDON - 9
    let users = {
        employees: [
            {'first_name':  'Miguel', 'last_name' : 'Jones'},
            {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
            {'first_name' : 'Nora', 'last_name' : 'Lu'},
            {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
        ],
        managers: [
           {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
           {'first_name' : 'Gordon', 'last_name' : 'Poe'}
        ]
    };
    for(let type in users) {
      console.log(type.toUpperCase());
      var count = 1;
      for(let person in users[type]) {
        let name = users[type][person].first_name+users[type][person].last_name;
        console.log(`${count} - ${users[type][person].last_name.toUpperCase()}, ${users[type][person].first_name.toUpperCase()} - ${name.length}`);
        count++;
      }
    }
