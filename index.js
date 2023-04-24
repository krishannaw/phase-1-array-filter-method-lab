function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  function matchName(drivers, name) {
    // Find the driver whose name matches the provided name
    const driver = drivers.find(driver => driver.name === name);
    
    if (driver) {
      // If a matching driver was found, return an object with their name and hometown
      return { name: driver.name, hometown: driver.hometown };
    } else {
      // If no matching driver was found, return null
      return null;
    }
  }
  const drivers = [
    { name: "John", hometown: "New York" },
    { name: "Sarah", hometown: "Los Angeles" }
  ];
  expect(matchName(drivers, "John")).to.deep.equal({ name: "John", hometown: "New York" });

  
  
   
