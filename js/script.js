// Copyright (c) 2025 kyle.matthew.magnaye All rights reserved
//
// Created by: kyle.matthew.magnaye
// Created on: Feb 2025
// This file contains the JS functions for index.html

/**
 * Handles the user input for street number and street name,
 * saves them to variables, and outputs the information.
 */

"use strict"

function enterClicked() {
  // input
  const streetNumber = document.getElementById("street-number").value
  const streetName = document.getElementById("street-name").value
  // output
  document.getElementById("user-info").innerHTML =
    "Your address is: " + streetNumber + " " + streetName + "."
}
