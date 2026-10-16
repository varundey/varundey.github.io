import ghPages from 'gh-pages';

ghPages.publish(
  'dist',
  {
    user: { name: 'Varun Dey', email: 'varundey20@gmail.com' },
    branch: 'master',
    dotfiles: true,
    message: 'Deploy commit from gh-pages'
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log('Published dist/ to master');
  }
);
