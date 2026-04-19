"use strict";

export class AppError extends Error {
  constructor(message) {
    super(message);
    this.name = "AppError";
  }

  sendUserMessage() {
    return "Something went wrong. Please try again";
  }
}

export class ValidationError extends AppError {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }

  sendUserMessage() {
    return `Invalid input: ${this.message}`;
  }
}

export class ApiError extends AppError {
  constructor(message, statusCode) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
  }

  sendUserMessage() {
    if (this.statusCode === 400) {
      return "Invalid URL. Please enter a valid web address!";
    }

    if (this.statusCode === 429) {
      return "Request limit reached. Try again later!";
    }

    if (this.statusCode >= 500) {
      return "Server error. Try again later!";
    }

    console.error(this.statusCode);
    return "Something went wrong. Please try again!";
  }
}

export class NetworkError extends AppError {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }

  sendUserMessage() {
    return "No network connection. Check your internet and try again.";
  }
}
