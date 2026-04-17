import { RAPIDAPI_KEY, RAPIDAPI_HOST } from "./secret.js";

export default class ApiService {
  async fetchScreenshot(url) {
    const endpoint = `https://website-screenshot6.p.rapidapi.com/screenshot?url=${encodeURI(url)}`;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": RAPIDAPI_KEY,
        "x-rapidapi-host": RAPIDAPI_HOST,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();
      return result.screenshotUrl;
    } catch (error) {
      console.error(error);
    }
  }

  // Use localStorage because CrudCrud throws cors error
  saveScreenshot(inputUrl, screenshotUrl) {
    if (!inputUrl || !screenshotUrl) return;

    const screenshots = JSON.parse(localStorage.getItem("screenshots"));

    if (!screenshots || screenshots.length === 0) {
      localStorage.setItem(
        "screenshots",
        JSON.stringify([{ inputUrl, screenshotUrl }]),
      );
    } else {
      const doesScreenshotExist = screenshots.some(
        (screenshot) => screenshot.screenshotUrl === screenshotUrl,
      );
      if (doesScreenshotExist) {
        return;
      }
      const newScreenshots = [...screenshots, { inputUrl, screenshotUrl }];
      localStorage.setItem("screenshots", JSON.stringify(newScreenshots));
    }
  }

  deleteScreenshot(url) {
    const screenshots = JSON.parse(localStorage.getItem("screenshots"));

    localStorage.setItem(
      "screenshots",
      JSON.stringify(
        screenshots.filter((screenshot) => screenshot.screenshotUrl !== url),
      ),
    );
  }

  listAllScreenshots() {
    return JSON.parse(localStorage.getItem("screenshots"));
  }
}
