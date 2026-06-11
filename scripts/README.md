# K6 Setup on macOS (From Scratch)

## 1. Install Homebrew (Package Manager)

Open Terminal and run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Verify installation:

```bash
brew --version
```
-----------------------------------

## 2. Install Node.js

Install Node.js using Homebrew:

```bash
brew install node
```

Verify installation:

```bash
node --version
npm --version
```
-----------------------------------
## 3. Install k6

Install k6 using Homebrew:

```bash
brew install k6
```
-----------------------------------
## 4. Running k6 script

```bash
k6 run <file_name>
```
-----------------------------------