import { RAPIDAPI_KEY } from "./secret.js";
import {
  AppError,
  ApiError,
  NetworkError,
  ValidationError,
} from "./error-system.js";

export default class ApiService {
  async fetchScreenshot(url) {
    const endpoint = `https://website-screenshot6.p.rapidapi.com/screenshot?url=${encodeURI(url)}`;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": RAPIDAPI_KEY,
        "x-rapidapi-host": "website-screenshot6.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(endpoint, options);

      if (!response.ok) {
        throw new ApiError(
          `API error: ${response.statusText}`,
          response.status,
        );
      }

      const result = await response.json();

      if (!result.screenshotUrl) {
        throw new ApiError("No screenshot URL in response", 500);
      }

      return result.screenshotUrl;
    } catch (error) {
      if (error instanceof ApiError) throw error;
      if (error instanceof TypeError) {
        throw new NetworkError("Network error: Failed to fetch screenshot");
      }
      throw new ApiError(error.message, 500);
    }
  }

  // Use localStorage because CrudCrud throws cors error
  saveScreenshot(inputUrl, screenshotUrl) {
    if (!inputUrl || !screenshotUrl) {
      throw new ValidationError("URL and screenshot are required!");
    }

    try {
      const screenshotsJson = localStorage.getItem("screenshots");
      const screenshots = screenshotsJson ? JSON.parse(screenshotsJson) : [];

      const doesScreenshotExist = screenshots.some(
        (screenshot) => screenshot.screenshotUrl === screenshotUrl,
      );

      if (doesScreenshotExist) {
        return;
      }

      const newScreenshots = [...screenshots, { inputUrl, screenshotUrl }];
      localStorage.setItem("screenshots", JSON.stringify(newScreenshots));
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      throw new AppError("Failed to save screenshot. Storage may be full.");
    }
  }

  deleteScreenshot(url) {
    try {
      const screenshotsJson = localStorage.getItem("screenshots");
      const screenshots = screenshotsJson ? JSON.parse(screenshotsJson) : [];

      localStorage.setItem(
        "screenshots",
        JSON.stringify(
          screenshots.filter((screenshot) => screenshot.screenshotUrl !== url),
        ),
      );
    } catch (error) {
      throw new AppError("Failed to delete screenshot");
    }
  }

  listAllScreenshots() {
    try {
      const screenshotsJson = localStorage.getItem("screenshots");
      return screenshotsJson ? JSON.parse(screenshotsJson) : [];
    } catch (error) {
      console.error("Error retrieving screenshots:", error);
      return [];
    }
  }
}
