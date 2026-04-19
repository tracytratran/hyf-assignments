"use strict";

import Screenshot from "./screenshot.js";
import ApiService from "./api-service.js";
import { AppError, ValidationError } from "./error-system.js";

export default class App {
  constructor() {
    this.input = document.getElementById("url");
    this.generateButton = document.querySelector(".generate-btn");
    this.listAllButton = document.querySelector(".list-all-btn");
    this.screenshotContainer = document.querySelector(".screenshot-container");
    this.errorMessage = document.querySelector(".error-message");
    this.currentScreenshot = null;
    this.apiService = new ApiService();

    if (
      !this.input ||
      !this.generateButton ||
      !this.listAllButton ||
      !this.screenshotContainer ||
      !this.errorMessage
    ) {
      throw new AppError("Required DOM element not found!");
    }
  }

  init() {
    this.generateButton.addEventListener(
      "click",
      async () => await this.handleGenerateClick(),
    );
    this.listAllButton.addEventListener("click", () =>
      this.handleListAllClick(),
    );
  }

  async handleGenerateClick() {
    try {
      this.clearError();
      const inputUrl = this.input.value.trim();
      if (!inputUrl) {
        throw new ValidationError("Please enter a valid URL!");
      }

      const screenshotUrl = await this.apiService.fetchScreenshot(inputUrl);
      this.clearPreview();
      this.currentScreenshot = new Screenshot(
        inputUrl,
        screenshotUrl,
        (error) => this.showError(error),
      );
      this.currentScreenshot.render();
    } catch (error) {
      console.error(error);
      this.showError(error);
    }
  }

  handleListAllClick() {
    try {
      this.clearError();
      const screenshots = this.apiService.listAllScreenshots();
      if (!screenshots || screenshots.length === 0) {
        throw new ValidationError("No screenshots found!");
      }

      this.clearPreview();
      screenshots.forEach((item) => {
        this.currentScreenshot = new Screenshot(
          item.inputUrl,
          item.screenshotUrl,
          (error) => this.showError(error),
          true,
        );
        this.currentScreenshot.render();
      });
    } catch (error) {
      console.error(error);
      this.showError(error);
    }
  }

  showError(error) {
    this.errorMessage.textContent = error.sendUserMessage
      ? error.sendUserMessage()
      : "Something went wrong. Please try again!";
    this.errorMessage.classList.remove("hidden");
  }

  clearError() {
    this.errorMessage.textContent = "";
    this.errorMessage.classList.add("hidden");
  }

  clearPreview() {
    this.screenshotContainer.innerHTML = "";
  }
}

const app = new App();
app.init();
