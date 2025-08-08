function fetchDataWithCallback(callback) {
  setTimeout(function() {
    let error = true; // Change to false to simulate success

    try {
      if (error) {
        throw new Error("Fetch failed");
      }

      const data = "Data fetched";
      callback(data);
    } catch (err) {
      console.log("Error:", err.message); // Logs: Error: Fetch failed
    }
  }, 2000);
}

// Using the function
 fetchDataWithCallback(function(result) {
  if (result) {
     console.log(result); //Log "Data fetched" if no error
   }
 });
