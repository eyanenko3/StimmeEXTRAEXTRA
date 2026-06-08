import('./src/app/page.js').then((module) => {
  console.log("Imports successful");
}).catch(err => {
  console.error("Error importing page.js:", err);
});
