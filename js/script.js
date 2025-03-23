// Copyright (c) 2025 kyle.matthew.magnaye All rights reserved
//
// Created by: kyle.matthew.magnaye
// Created on: Feb 2025
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function enterClicked() {
  // input
  const firstName = document.getElementById("first-name").value
  const userAge = parseInt(document.getElementById("age-entered").value)
  // output
  document.getElementById("user-info").innerHTML =
    "Your info is: " + firstName + ", " + userAge + "."
}
