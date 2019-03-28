const fetch = require("node-fetch");
const url = "http://admin:admin@localhost:9090/pivot/rest/v4/cube/discovery";

const printDimensions = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const data = json.data;
    // Loop through the catalogs
    data.catalogs.map(c => {
      // Loop through the cubes
      c.cubes.map(cube => {
        console.log(cube.name);
        // loop over the measures
        cube.dimensions.map(d => console.log(d.name));
        console.log("\n");
      });
    });
  } catch (error) {
    console.log(error);
  }
};
printDimensions(url);
