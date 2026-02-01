# 🌱 GitHub Contribution Graph Filler

Transform your GitHub profile with a **completely GREEN** contribution graph!

## 📊 What This Does

This script fills your GitHub contribution graph from **November 5, 2022** (your join date) to **February 1, 2026** with commits:

### Strategy:
- **Nov 5, 2022 - Dec 31, 2024**: Random commits with gaps
  - 70% probability of commits on any given day
  - 1-8 commits per active day
  - Creates a natural-looking pattern
  
- **Jan 1, 2025 - Feb 1, 2026**: Fully GREEN
  - Every single day has commits
  - 3-12 commits per day for darker intensity
  - No gaps!

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- Git repository initialized
- GitHub repository connected

### Installation

1. **Clone/Navigate to this repository**
```bash
cd c:\Users\nishi\Documents\GitHub\Glitch\glitch
```

2. **Install dependencies** (if not already installed)
```bash
npm install
```

Required packages:
- `jsonfile` - Read/write JSON files
- `moment` - Date manipulation
- `simple-git` - Git operations
- `random` - Random number generation

### Usage

Simply run the script:
```bash
node index.js
```

The script will:
1. ✅ Create commits for ~1,200+ days
2. ✅ Generate approximately 5,000-8,000 total commits
3. ✅ Show progress updates every 100 commits
4. ✅ Automatically push to GitHub (if authenticated)

## 📝 How It Works

### The Process:
1. **Iterates through each day** from Nov 5, 2022 to Feb 1, 2026
2. **Determines commit strategy** based on the date:
   - Before 2025: 70% chance of having commits
   - From 2025 onwards: 100% commits (fully green)
3. **Creates multiple commits per day** with random timestamps
4. **Updates `data.json`** with each commit's timestamp
5. **Makes Git commits** with backdated `--date` flags
6. **Pushes everything** to GitHub

### data.json
This file stores the timestamp of the last commit. Each commit updates this file, which is then committed to Git. The file format:
```json
{"date":"2023-09-15T18:29:53+05:30"}
```

## 🎯 Expected Results

After running this script, your GitHub profile will show:
- **~800+ days** with commits (2022-2024 period with gaps)
- **397 days** fully green (2025-2026 period - no gaps)
- **5,000-8,000 total commits** across the entire period
- A beautiful gradient of green shades

## ⚠️ Important Notes

### Authentication
If GitHub push fails due to authentication:
```bash
git push origin main
```
You may need to configure Git credentials or use a Personal Access Token.

### Backup
This creates **real Git commits**. Make sure you're working in the correct repository!

### Ethics
This script creates backdated commits for demonstration purposes. Use responsibly!

## 🛠️ Technical Details

- **Language**: JavaScript (ES6 Modules)
- **Date Library**: Moment.js
- **Git Interface**: simple-git
- **Random Generation**: random package

## 📦 Files

- `index.js` - Main script with all logic
- `data.json` - Stores commit timestamps (updated with each commit)
- `package.json` - Dependencies and project metadata
- `README.md` - This file!

## 🎨 Customization

Want to modify the behavior? Edit these values in `index.js`:

```javascript
// Change probability for 2022-2024 (currently 70%)
shouldCommit = random.float() < 0.7;

// Change commits per day for 2022-2024 (currently 1-8)
commitsPerDay = shouldCommit ? random.int(1, 8) : 0;

// Change commits per day for 2025-2026 (currently 3-12)
commitsPerDay = random.int(3, 12);
```

## 🏆 Results Preview

After running, check your GitHub profile:
```
https://github.com/YOUR_USERNAME
```

Your contribution graph should now be beautifully green! 🌱

## 📄 License

MIT License - Use freely!

## 🙏 Credits

Created to help demonstrate Git's `--date` flag functionality and GitHub's contribution tracking system.

---

**Happy Green Coding! 💚**