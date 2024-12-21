const evenBtn = document.getElementById('evenBtn');
    const oddBtn = document.getElementById('oddBtn');
    const evenArrayDiv = document.getElementById('evenArray');
    const oddArrayDiv = document.getElementById('oddArray');

    // Arrays to store even and odd numbers
    const evenNumbers = [];
    const oddNumbers = [];

    // Counters for even and odd numbers
    let currentEven = 0;
    let currentOdd = 1;


    evenBtn.addEventListener('click', () => {
      evenNumbers.push(currentEven); 
      evenArrayDiv.textContent = `Even Numbers: [${evenNumbers.join(', ')}]`; 
      currentEven += 2; 
    });


    
     oddBtn.addEventListener('click', () => {
      oddNumbers.push(currentOdd); // Add the current odd number to the array
      oddArrayDiv.textContent = `Odd Numbers: [${oddNumbers.join(', ')}]`; // Update the display
      currentOdd += 2; 
    });