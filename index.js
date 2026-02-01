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

// Function to fill entire year 2025 with commits
const fillYear2025 = async () => {
  const startDate = moment("2025-01-01");
  const endDate = moment("2025-12-31");

  let currentDate = startDate.clone();
  let totalCommits = 0;

  console.log("🌱 Starting to make 2025 completely GREEN! 🌱");
  console.log(`📅 Period: ${startDate.format("YYYY-MM-DD")} to ${endDate.format("YYYY-MM-DD")}\n`);

  while (currentDate.isSameOrBefore(endDate)) {
    // Create 1-10 random commits per day for varied green intensity
    const commitsPerDay = random.int(1, 10);

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

        if (totalCommits % 50 === 0) {
          console.log(`✅ Progress: ${totalCommits} commits created (Currently at: ${currentDate.format("YYYY-MM-DD")})`);
        }
      } catch (error) {
        console.error(`❌ Error creating commit for ${commitDate}:`, error);
      }
    }

    // Move to next day
    currentDate.add(1, "day");
  }

  console.log(`\n🎉 Total commits created: ${totalCommits}`);
  console.log("📤 Pushing all commits to GitHub...");

  try {
    await simpleGit().push();
    console.log("✨ SUCCESS! Your 2025 is now completely GREEN! ✨");
  } catch (error) {
    console.error("❌ Error pushing to GitHub:", error);
    console.log("💡 Try running: git push manually");
  }
};

// Start the process
fillYear2025().catch((error) => {
  console.error("❌ Fatal error:", error);
  process.exit(1);
});
