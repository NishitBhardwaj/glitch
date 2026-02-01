import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

// Function to create a commit for a specific date
const makeCommit = (date) => {
  const data = {
    date: date,
  };

  return new Promise((resolve, reject) => {
    jsonfile.writeFile(path, data, (err) => {
      if (err) {
        reject(err);
        return;
      }

      simpleGit()
        .add([path])
        .commit(date, { "--date": date }, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
};

// Main function to fill GitHub contribution graph
const fillGitHubContributions = async () => {
  // Start from November 5, 2022 (when you joined GitHub)
  const startDate = moment("2022-11-05");

  // End at today (February 1, 2026)
  const endDate = moment("2026-02-01");

  // Split point: 2025 onwards will be fully green
  const fullyGreenStartDate = moment("2025-01-01");

  let currentDate = startDate.clone();
  let totalCommits = 0;

  console.log("🌱 Starting to fill your GitHub contribution graph! 🌱");
  console.log(`📅 Period: ${startDate.format("YYYY-MM-DD")} to ${endDate.format("YYYY-MM-DD")}`);
  console.log(`🎯 Strategy:`);
  console.log(`   - ${startDate.format("YYYY-MM-DD")} to 2024-12-31: Random commits (70% probability)`);
  console.log(`   - ${fullyGreenStartDate.format("YYYY-MM-DD")} to ${endDate.format("YYYY-MM-DD")}: Fully GREEN (every day)!\n`);

  while (currentDate.isSameOrBefore(endDate)) {
    let shouldCommit = false;
    let commitsPerDay = 0;

    // Determine commit strategy based on date
    if (currentDate.isBefore(fullyGreenStartDate)) {
      // Before 2025: Random commits with 70% probability
      shouldCommit = random.float() < 0.7; // 70% chance
      commitsPerDay = shouldCommit ? random.int(1, 8) : 0; // 1-8 commits if active
    } else {
      // From 2025 onwards: Fully green every day
      shouldCommit = true;
      commitsPerDay = random.int(3, 12); // 3-12 commits per day for darker green
    }

    // Create commits for this day
    if (shouldCommit && commitsPerDay > 0) {
      for (let i = 0; i < commitsPerDay; i++) {
        // Add random hours/minutes to spread commits throughout the day
        const commitDate = currentDate
          .clone()
          .add(random.int(0, 23), "hours")
          .add(random.int(0, 59), "minutes")
          .add(random.int(0, 59), "seconds")
          .format();

        try {
          await makeCommit(commitDate);
          totalCommits++;

          // Show progress every 100 commits
          if (totalCommits % 100 === 0) {
            console.log(
              `✅ Progress: ${totalCommits} commits | Currently at: ${currentDate.format("YYYY-MM-DD")}`
            );
          }
        } catch (error) {
          console.error(`❌ Error creating commit for ${commitDate}:`, error);
        }
      }
    }

    // Move to next day
    currentDate.add(1, "day");
  }

  console.log(`\n🎉 Total commits created: ${totalCommits}`);
  console.log(`📊 Breakdown:`);

  const daysInPeriod = endDate.diff(startDate, "days") + 1;
  const days2022to2024 = fullyGreenStartDate.diff(startDate, "days");
  const days2025onwards = endDate.diff(fullyGreenStartDate, "days") + 1;

  console.log(`   - Total days covered: ${daysInPeriod}`);
  console.log(`   - 2022-2024 period: ~${Math.floor(days2022to2024 * 0.7)} days (random)`);
  console.log(`   - 2025-2026 period: ${days2025onwards} days (fully green)`);

  console.log("\n📤 Pushing all commits to GitHub...");
  console.log("⚠️  This may take a while...\n");

  try {
    await simpleGit().push();
    console.log("✨ SUCCESS! Your GitHub is now GREEN! ✨");
    console.log("🎊 Check your profile contribution graph!");
  } catch (error) {
    console.error("❌ Error pushing to GitHub:", error);
    console.log("\n💡 Please authenticate and push manually:");
    console.log("   git push origin main");
  }
};

// Start the process
console.log("=".repeat(60));
console.log("  🚀 GitHub Contribution Graph Filler 🚀");
console.log("=".repeat(60) + "\n");

fillGitHubContributions().catch((error) => {
  console.error("❌ Fatal error:", error);
  process.exit(1);
});
