import { defineConfig } from 'vitepress'

// Will be displayed in left side bar and navigation
const links = [
  { text: 'Introduction', link: '/introduction' },
  { text: 'Languages', items: [
    { text: 'Rust', link: '/languages/rust'},
    { text: 'HTML et CSS', link: '/languages/html-css'},
    { text: 'Java', link: '/languages/java'},
    { text: 'JavaScript', link: '/languages/javascript'},
  ]},
  { text: 'Projects', items: [
    { text: 'Todo list', link: '/projects/rust-todo'},
    { text: 'Site statique', link: '/projects/site-statique'},
    { text: 'TicTacToe', link: '/projects/java-tictactoe'},
    { text: 'Client Mockup', link: '/projects/client-mockup'},
    { text: 'Grade Calculator', link: '/projects/grade-calculator'},
    { text: 'Time Tracking', link: '/projects/time-tracking-cmd'},
      { text: 'Ascencio', link: '/projects/ascencio'},


    ]},
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Update your title and description with user name
  title: "Beznoskovych Dmytro",
  description: "My report outlines all the skills acquired during the CFC of computer scientist applications development.",
  cleanUrls: true,
  lang: 'en',
  base: "/report/",
  lastUpdated: true,
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      ...links,
      { text: 'How to', link: '/how-to-use' }
    ],

    outline: [2,3],
    sidebar: [
      ...links,
      {
        text: 'Others',
        items: [
          { text: 'How to use', link: '/how-to-use'}
        ]
      }
    ],

    search: {
      provider: 'local',
    },

    socialLinks: [
      // Replace link with yor own GitHub repo or github profile
      { icon: 'github', link: 'https://github.com/dbeznos2' }
    ],

    editLink: {
      // Change first part of path to your repo name
      pattern: 'https://github.com/jobtrek/report/edit/main/src/:path',
      text: 'report'
    }
  }
})
