# 🌱 goGreen 

Make your GitHub profile **completely GREEN** for the entire year! 

With **goGreen**, you can fill your entire 2025 contribution graph with commits, making it look like you've been coding every single day of the year.

## About

**goGreen** automatically creates commits for **every day of 2025** (all 365 days) with multiple commits per day (1-10 random commits) to ensure varied green intensity on your GitHub contribution graph. The script backdates commits to fill your entire year!

## Getting Started

Follow these steps to bring your contribution graph to life:

1. **Clone this repository**
```bash
git clone https://github.com/fenrir2608/goGreen.git
cd goGreen
```
3. **Set up your project**
Initialize a new Node.js project:
```bash
npm init -y
  ```
3. **Install the required npm modules**
You'll need a few modules to get everything running smoothly. Install them all with:
  ```bash
  npm install moment simple-git random jsonfile
  ```
4. **Run the script to make 2025 GREEN!**
Simply run the script and watch as it fills every day of 2025:
  ```bash
  node index.js
  ```
The script will:
- Create commits for all 365 days of 2025
- Add 1-10 random commits per day for varied intensity
- Show progress updates every 50 commits
- Automatically push all commits to GitHub

## Room for Improvement

So, you've got the basics down. What's next?

- **Custom Patterns:** Experiment with different patterns on your contribution graph. Maybe spell out your name or create some cool designs.
- **Density Control:** Play around with the number of commits per day to adjust the shades of green.
- **Input Strings:** Convert input strings to X-Y mapped contributions.

## npm Modules Used

- [`moment`](https://www.npmjs.com/package/moment) - Handles date and time manipulation.
- [`simple-git`](https://www.npmjs.com/package/simple-git) - For easy Git commands.
- [`random`](https://www.npmjs.com/package/random) - To generate random numbers for the commits.

## Credits

Huge thanks to [Akshay Saini](https://github.com/akshaymarch7) for the original video behind this project.
