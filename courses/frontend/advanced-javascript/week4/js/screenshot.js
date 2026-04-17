"use strict";

import ApiService from "./api-service.js";

export default class Screenshot {
  constructor(inputUrl, screenshotUrl) {
    this.inputUrl = inputUrl;
    this.screenshotUrl = screenshotUrl;
    this.apiService = new ApiService();
    this.screenshotContainer = document.getElementById("screenshot-container");
  }

  render() {
    const screenshot = document.createElement("img");
    screenshot.src = this.screenshotUrl;
    this.screenshotContainer.appendChild(screenshot);

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save this screenshot";
    saveButton.classList.add("save-btn");
    this.screenshotContainer.appendChild(saveButton);
    saveButton.addEventListener("click", () => this.save());

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete this screenshot";
    deleteButton.classList.add("delete-btn");
    this.screenshotContainer.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => this.delete());
  }

  save() {
    return this.apiService.saveScreenshot(this.inputUrl, this.screenshotUrl);
  }

  delete() {
    this.screenshotContainer.remove();

    return this.apiService.deleteScreenshot(this.screenshotUrl);
  }
}
