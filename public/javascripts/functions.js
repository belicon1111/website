function appendAlert(message, type) {
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");
    alertPlaceholder.append(wrapper);
  }
  
  function validateForm(event) {
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    alertPlaceholder.innerHTML = '';

    const age = document.getElementById("age").value;
    const react = document.getElementById("react").value;
    const angular = document.getElementById("angular").value;
    const django = document.getElementById("django").value;
    const express = document.getElementById("express").value;
    const others = document.getElementById("others").value;
    console.log(react)

    let valid1 = true
    let valid2 = true

    if (age < 18)
    {
        appendAlert("Invalid age, must be 18 or older");
        valid1 = false
    }

    if (react == null && angular == null && django == null & express == null && others == null)
    {
      appendAlert("Select at least one framework");
      valid2 = false
    }


   return valid1 && valid2
}