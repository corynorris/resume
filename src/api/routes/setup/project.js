import Project from '../../models/project';

export default (id) => {
  const data = [{
    resumeId: id,
    title: 'Ant Simulator',
    imageUrl: 'https://images.corynorris.me/projects/ant-simulator.jpg',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.lasthackergames.antsimulator.android&hl=en',
    sourceUrl: '',
    completionDate: new Date('January 18, 2016'),
    summary: 'Lead a colony of ants while trying to oust the enemy ant colony.',
    tags: ['java', 'game', 'libgdx', 'android-app', 'path-finding', 'ai'],
  }, {
    resumeId: id,
    title: 'Css Line Drawing',
    imageUrl: 'https://images.corynorris.me/projects/bear.jpg',
    demoUrl: 'https://codepen.io/corynorris/full/ZQLJrx/',
    sourceUrl: 'https://codepen.io/corynorris/pen/ZQLJrx',
    completionDate: new Date('December 1, 2016'),
    summary: 'An svg line animation of a bear.',
    tags: ['svg', 'css', 'line-animation', 'javascript'],
  }, {
    resumeId: id,
    title: 'Multi-Textured Terrain',
    imageUrl: 'https://images.corynorris.me/projects/textured-terrain.jpg',
    demoUrl: '',
    sourceUrl: 'https://bitbucket.org/corynorris/multi-textured-terrain',
    completionDate: new Date('January 24, 2014'),
    summary: 'Height map and texturing demonstration with modern OpenGL',
    tags: ['texturing', 'height-map', 'java', 'opengl'],
  }, {
    resumeId: id,
    title: 'Real-Time Chat',
    imageUrl: 'https://images.corynorris.me/projects/chat.jpg',
    demoUrl: 'https://chat.corynorris.me/',
    sourceUrl: 'https://github.com/corynorris/socket-io-chat-app',
    completionDate: new Date('September 18, 2016'),
    summary: 'A real time chat application.',
    tags: ['css', 'socket-io', 'vue-js', 'javascript'],
  }, {
    resumeId: id,
    title: 'Augmented Reality',
    imageUrl: 'https://images.corynorris.me/projects/augmented-reality.jpg',
    demoUrl: '',
    sourceUrl: '',
    completionDate: new Date('March 1, 2014'),
    summary: 'Height map and texturing demonstration with modern OpenGL.',
    tags: ['c++', 'augmented-reality', 'computer-vision', 'opengl'],
  }, {
    resumeId: id,
    title: 'Simon the Game',
    imageUrl: 'https://images.corynorris.me/projects/simon.jpg',
    demoUrl: 'https://codepen.io/corynorris/full/KVzBZZ/',
    sourceUrl: 'https://codepen.io/corynorris/pen/KVzBZZ',
    completionDate: new Date('December 1, 2016'),
    summary: 'A game where you you attempt to remember an ever growing sequence.',
    tags: ['css', 'game', 'sass', 'scss', 'javascript'],
  }, {
    resumeId: id,
    title: 'Link Hover Effects',
    imageUrl: 'https://images.corynorris.me/projects/button-styles.jpg',
    demoUrl: 'https://codepen.io/corynorris/full/MKJrwm/',
    sourceUrl: 'https://codepen.io/corynorris/pen/MKJrwm',
    completionDate: new Date('December 1, 2016'),
    summary: '10 css-only effects for the mouse hover event.',
    tags: ['css', 'sass', 'scss', 'svg', 'effects'],
  }, {
    resumeId: id,
    title: 'Wobble Rocket',
    imageUrl: 'https://images.corynorris.me/projects/wobble-rocket.jpg',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.LastHackerGames.WobbleRocket',
    sourceUrl: 'https://bitbucket.org/corynorris/wobblerocket/overview',
    completionDate: new Date('December 1, 2015'),
    summary: 'A game of dodging obstacles to unlock new rockets.',
    tags: ['java', 'game', 'libgdx', 'android-app'],
  }, {
    resumeId: id,
    title: 'Roman Calculator',
    imageUrl: 'https://images.corynorris.me/projects/roman-calculator.jpg',
    demoUrl: 'https://codepen.io/corynorris/full/wMBKwx/',
    sourceUrl: 'https://codepen.io/corynorris/pen/wMBKwx/',
    completionDate: new Date('December 1, 2015'),
    summary: 'A calculator that uses roman numerals.',
    tags: ['css', 'javascript'],
  }, {
    resumeId: id,
    title: 'Quote Machine',
    imageUrl: 'https://images.corynorris.me/projects/quote-machine.jpg',
    demoUrl: 'https://codepen.io/corynorris/full/MKgzGJ/',
    sourceUrl: 'https://codepen.io/corynorris/pen/MKgzGJ/',
    completionDate: new Date('December 1, 2015'),
    summary: 'A random quote generator.',
    tags: ['css', 'javascript'],
  }, {
    resumeId: id,
    title: 'Pomodoro Timer',
    imageUrl: 'https://images.corynorris.me/projects/pomodoro.jpg',
    demoUrl: 'https://codepen.io/corynorris/full/EPxjGP/',
    sourceUrl: 'https://codepen.io/corynorris/pen/EPxjGP/',
    completionDate: new Date('December 1, 2015'),
    summary: 'A timer that rotates between rest and work periods.',
    tags: ['css', 'javascript'],
  }, {
    resumeId: id,
    title: 'Tic-Tac-Toe',
    imageUrl: 'https://images.corynorris.me/projects/tic-tac-toe.jpg',
    demoUrl: 'https://codepen.io/corynorris/full/OMyMEe/',
    sourceUrl: 'https://codepen.io/corynorris/pen/OMyMEe/',
    completionDate: new Date('December 1, 2015'),
    summary: 'A game of tic-tac-toe against an AI.',
    tags: ['css', 'sass', 'scss', 'game', 'ai'],
  }, {
    resumeId: id,
    title: 'Recipe Box',
    imageUrl: 'https://images.corynorris.me/projects/recipe-box.jpg',
    demoUrl: 'https://recipebox.corynorris.me',
    sourceUrl: 'https://github.com/corynorris/recipebox',
    completionDate: new Date('December 1, 2016'),
    summary: 'Store, rate and edit recipes.',
    tags: ['css', 'javscript', 'local-storage', 'single-page-app', 'react-router', 'react'],
  }, {
    resumeId: id,
    title: 'Timed Memorization',
    imageUrl: 'https://images.corynorris.me/projects/memory-app.jpg',
    demoUrl: 'http://corynorris.github.io/angularjs-memory-app/app',
    sourceUrl: 'https://github.com/corynorris/angularjs-memory-app',
    completionDate: new Date('February 14, 2016'),
    summary: 'Add words, and get prompted to remember them at intervals based on how well you remember them.',
    tags: ['css', 'javscript', 'local-storage', 'single-page-app', 'angular-1.5'],
  }, {
    resumeId: id,
    title: 'Parker Mobile',
    imageUrl: 'https://images.corynorris.me/projects/parker-mobile-2.jpg',
    demoUrl: '',
    sourceUrl: 'https://github.com/corynorris/traffic-tickets-ionic-2',
    completionDate: new Date('May 1, 2016'),
    summary: 'An Ionic 2 app that plots traffic ticket density accross Toronto.',
    tags: ['css', 'javscript', 'map', 'ionic-2', 'angular-2'],
  }];

  return Promise.all(data.map(projectData => new Promise((resolve, reject) => {
    Project.update(
      projectData,
      { $setOnInsert: projectData },
      { upsert: true },
      (err, project) => {
        if (err) reject(err);
        resolve(project);
      });
  })));
};
