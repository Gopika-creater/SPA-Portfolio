function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  let recommendName = document.getElementById("Name");
  let recommendationnameadded = recommendation.value + "  -" + recommendName.value;
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    

    //Call showPopup here
    showPopup(true);

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendationnameadded + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }

}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
function toggleCGPA(id,btn) {
    const cgpa = document.getElementById(id);

     if (cgpa.style.display === "none" || cgpa.style.display === "") {
        cgpa.style.display = "inline";
        btn.textContent = "Hide";              
    } else {
        cgpa.style.display = "none";
        btn.textContent = "Show Percentage";  
}

}