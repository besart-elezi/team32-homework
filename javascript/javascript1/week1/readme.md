# Readme

# Smart-ease - We help where we can

## About Smart-ease
Smart-ease is a tech startup dedicated to solving real-world problems through innovative software solutions. Our mission is to create sustainable business solutions that genuinely help people in their everyday lives. Visit us at [smart-ease.io](https://smart-ease.io) to learn more about our initiatives!

## Project Overview
This repository contains JavaScript-based solutions for real-world problems, including age calculations, dog age estimations, and house price evaluations. Each solution aims to simplify daily life by automating tedious calculations.

### Features
1. **Age-ify** (Future Age Calculator)
2. **Goodboy-Oldboy** (Dog Age Calculator)
3. **Housey Pricey** (House Price Estimator)

## Getting Started
To use or contribute to this project, follow these steps:

### Prerequisites
Ensure you have the following installed:
- Node.js (for running JavaScript locally)
- Git (for version control)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/smart-ease.git
   ```
2. Navigate into the project directory:
   ```sh
   cd smart-ease
   ```
3. Open the files in a code editor and start experimenting with JavaScript!

## Solutions
### 1. Age-ify (Future Age Calculator)
**Problem:** Quickly calculate your age in a future year.

**Implementation:**
- Define two variables: `yearOfBirth` and `yearFuture`.
- Compute the future age: `age = yearFuture - yearOfBirth`.
- Output the result:
  ```js
  console.log("You will be " + age + " years old in " + yearFuture);
  ```

### 2. Goodboy-Oldboy (Dog Age Calculator)
**Problem:** Convert a dog’s age into human years or dog years.

**Implementation:**
- Define `dogYearOfBirth`, `dogYearFuture`, and `shouldShowResultInDogYears`.
- Compute the age in human years (`age = dogYearFuture - dogYearOfBirth`).
- If `shouldShowResultInDogYears` is true, multiply age by 7.
- Output the result accordingly.

### 3. Housey Pricey (House Price Estimator)
**Problem:** Estimate if a house is overpriced based on a simple formula.

**Implementation:**
- Compute house price using:
  ```js
  housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
  ```
- Compare with the actual price to determine if it's over or underpriced.


