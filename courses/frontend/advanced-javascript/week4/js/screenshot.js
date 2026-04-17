"use strict";

import ApiService from "./api-service.js";
import { ValidationError, AppError } from "./error-system.js";

export default class Screenshot {
  constructor(inputUrl, screenshotUrl, onError) {
    if (!inputUrl || !screenshotUrl) {
      throw new ValidationError("Input URL and screenshot URL are required!");
    }

    this.inputUrl = inputUrl;
    this.screenshotUrl = screenshotUrl;
    this.onError = onError;
    this.apiService = new ApiService();
    this.screenshotContainer = document.querySelector(".screenshot-container");

    if (!this.screenshotContainer) {
      throw new AppError("Screenshot container element not found!");
    }
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

    this.screenshotContainer.appendChild(this.screenshotContainer);
  }

  save() {
    try {
      return this.apiService.saveScreenshot(this.inputUrl, this.screenshotUrl);
    } catch (error) {
      console.error("Save error:", error);
      this.onError?.(error);
    }
  }

  delete() {
    try {
      this.apiService.deleteScreenshot(this.screenshotUrl);
      this.screenshotContainer.remove();
    } catch (error) {
      console.error("Delete error:", error);
      this.onError?.(error);
    }
  }
}
