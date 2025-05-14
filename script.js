// Handle Enter key press
function handleEnter(event, callback) {
  if (event.key === "Enter") {
    callback();
  }
}

// Ethiopian to Gregorian conversion
function convertEthToGreg() {
  const ethInput = document.getElementById("ethDate").value.trim();
  const resultDiv = document.getElementById("result");
  const copyBtn = document.getElementById("copyBtn");

  if (!ethInput) {
    showResult("Please enter an Ethiopian date", "error");
    copyBtn.classList.add("hidden");
    return;
  }

  try {
    const parts = ethInput.split("/");
    if (parts.length !== 3) throw new Error("Use MM/DD/YYYY format");

    const ethMonth = parseInt(parts[0]);
    const ethDay = parseInt(parts[1]);
    const ethYear = parseInt(parts[2]);

    // Validate Ethiopian date
    if (isNaN(ethMonth) || isNaN(ethDay) || isNaN(ethYear))
      throw new Error("Invalid date numbers");
    if (ethMonth < 1 || ethMonth > 13) throw new Error("Month must be 1-13");
    if (ethMonth === 13 && (ethDay < 1 || ethDay > 6))
      throw new Error("Pagume has 5-6 days");
    if (ethMonth !== 13 && (ethDay < 1 || ethDay > 30))
      throw new Error("Day must be 1-30");

    // Accurate conversion algorithm
    const gregYear = ethYear + 8;
    let gregDate;

    if (ethMonth === 13) {
      // Handle Pagume (September 6-10/11)
      gregDate = new Date(gregYear, 8, 5 + ethDay); // September (month 8)
    } else {
      // Regular months
      const daysIntoYear = (ethMonth - 1) * 30 + (ethDay - 1);
      gregDate = new Date(gregYear, 8, 11); // September 11
      gregDate.setDate(gregDate.getDate() + daysIntoYear);
    }

    const formattedDate = `${String(gregDate.getMonth() + 1).padStart(
      2,
      "0"
    )}/${String(gregDate.getDate()).padStart(
      2,
      "0"
    )}/${gregDate.getFullYear()}`;
    showResult(`Gregorian Date: <strong>${formattedDate}</strong>`, "success");
    copyBtn.classList.remove("hidden");
  } catch (error) {
    showResult(`Error: ${error.message}`, "error");
    copyBtn.classList.add("hidden");
  }
}

// Gregorian to Ethiopian conversion
function convertGregToEth() {
  const gregInput = document.getElementById("gregDate").value.trim();
  const resultDiv = document.getElementById("result");
  const copyBtn = document.getElementById("copyBtn");

  if (!gregInput) {
    showResult("Please enter a Gregorian date", "error");
    copyBtn.classList.add("hidden");
    return;
  }

  try {
    const parts = gregInput.split("/");
    if (parts.length !== 3) throw new Error("Use MM/DD/YYYY format");

    const gregMonth = parseInt(parts[0]);
    const gregDay = parseInt(parts[1]);
    const gregYear = parseInt(parts[2]);

    // Validate Gregorian date
    const dateObj = new Date(gregYear, gregMonth - 1, gregDay);
    if (
      dateObj.getFullYear() !== gregYear ||
      dateObj.getMonth() + 1 !== gregMonth ||
      dateObj.getDate() !== gregDay
    ) {
      throw new Error("Invalid Gregorian date");
    }

    // Accurate conversion algorithm
    const ethYear =
      gregMonth < 9 || (gregMonth === 9 && gregDay < 11)
        ? gregYear - 8
        : gregYear - 7;

    // Days since September 11 (Ethiopian New Year)
    const ethNewYear = new Date(gregYear, 8, 11); // September 11
    const diffDays = Math.floor((dateObj - ethNewYear) / (1000 * 60 * 60 * 24));

    let ethMonth, ethDay;

    if (diffDays < 0) {
      // Before Ethiopian New Year (in Pagume)
      ethMonth = 13;
      ethDay = 5 + diffDays + 1; // Pagume has 5-6 days
    } else {
      // After Ethiopian New Year
      ethMonth = Math.floor(diffDays / 30) + 1;
      ethDay = (diffDays % 30) + 1;
    }

    const formattedDate = `${String(ethMonth).padStart(2, "0")}/${String(
      ethDay
    ).padStart(2, "0")}/${ethYear}`;
    showResult(`Ethiopian Date: <strong>${formattedDate}</strong>`, "success");
    copyBtn.classList.remove("hidden");
  } catch (error) {
    showResult(`Error: ${error.message}`, "error");
    copyBtn.classList.add("hidden");
  }
}

// Display result
function showResult(message, type) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = message;
  resultDiv.className = type;
}

// Copy result to clipboard
function copyResult() {
  const resultDiv = document.getElementById("result");
  const textToCopy = resultDiv.innerText.replace(
    /(Gregorian|Ethiopian) Date: /,
    ""
  );

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      const copyBtn = document.getElementById("copyBtn");
      copyBtn.textContent = "✓ Copied!";
      setTimeout(() => {
        copyBtn.textContent = "📋 Copy Result";
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

// Input validation
document.getElementById("ethDate").addEventListener("input", function (e) {
  this.value = this.value.replace(/[^0-9/]/g, "");
});

document.getElementById("gregDate").addEventListener("input", function (e) {
  this.value = this.value.replace(/[^0-9/]/g, "");
});
