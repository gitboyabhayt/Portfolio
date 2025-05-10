const { execSync } = require('child_process');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n===== 3D Portfolio Deployment Setup =====\n');

rl.question('Enter your GitHub username: ', (username) => {
  rl.question('Enter your repository name: ', (repoName) => {
    rl.question('Do you want to initialize Git repository? (y/n): ', (initGit) => {
      if (initGit.toLowerCase() === 'y') {
        try {
          console.log('\nInitializing Git repository...');
          execSync('git init', { stdio: 'inherit' });
          execSync('git add .', { stdio: 'inherit' });
          execSync('git commit -m "Initial commit"', { stdio: 'inherit' });
          
          console.log('\nGit repository initialized successfully!');
          
          rl.question('Do you want to add a remote repository? (y/n): ', (addRemote) => {
            if (addRemote.toLowerCase() === 'y') {
              const remoteUrl = `https://github.com/${username}/${repoName}.git`;
              
              try {
                console.log(`\nAdding remote repository: ${remoteUrl}`);
                execSync(`git remote add origin ${remoteUrl}`, { stdio: 'inherit' });
                console.log('Remote repository added successfully!');
                
                rl.question('Do you want to push to GitHub now? (y/n): ', (pushNow) => {
                  if (pushNow.toLowerCase() === 'y') {
                    try {
                      console.log('\nPushing to GitHub...');
                      execSync('git push -u origin main', { stdio: 'inherit' });
                      console.log('Successfully pushed to GitHub!');
                      
                      console.log(`\nYour repository is now available at: https://github.com/${username}/${repoName}`);
                      console.log(`Once GitHub Pages is set up, your site will be available at: https://${username}.github.io/${repoName}`);
                      
                      rl.close();
                    } catch (error) {
                      console.error('\nError pushing to GitHub:', error.message);
                      console.log('You can push manually later using: git push -u origin main');
                      rl.close();
                    }
                  } else {
                    console.log('\nYou can push to GitHub later using: git push -u origin main');
                    rl.close();
                  }
                });
              } catch (error) {
                console.error('\nError adding remote repository:', error.message);
                rl.close();
              }
            } else {
              console.log('\nYou can add a remote repository later using: git remote add origin https://github.com/username/repo.git');
              rl.close();
            }
          });
        } catch (error) {
          console.error('\nError initializing Git repository:', error.message);
          rl.close();
        }
      } else {
        console.log('\nSkipping Git initialization.');
        
        rl.question('Do you want to prepare for Vercel deployment? (y/n): ', (prepareVercel) => {
          if (prepareVercel.toLowerCase() === 'y') {
            console.log('\nTo deploy to Vercel, follow these steps:');
            console.log('1. Install Vercel CLI: npm install -g vercel');
            console.log('2. Login to Vercel: vercel login');
            console.log('3. Deploy your project: vercel');
            console.log('4. For production deployment: vercel --prod');
            console.log('\nMake sure to add your environment variables in the Vercel dashboard!');
          }
          
          rl.close();
        });
      }
    });
  });
});