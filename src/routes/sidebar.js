/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/home', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Home', // name that appear in Sidebar
  },
  {
    path: '/codereviews',
    icon: 'FormsIcon',
    name: 'Code Reviews',
  },
  {
    path: '/question',
    icon: 'CardsIcon',
    name: 'Questions',
  },
  {
    path: '/vote',
    icon: 'ChartsIcon',
    name: 'Votes',
  },
  {
    path: '/studygroup',
    icon: 'ButtonsIcon',
    name: 'Study Group',
  },
  {
    icon: 'PagesIcon',
    name: 'Pages',
    routes: [
      // submenu
      {
        path: '/login',
        name: 'Login',
      },
      {
        path: '/create-account',
        name: 'Create account',
      },
      {
        path: '/forgot-password',
        name: 'Forgot password',
      },
      {
        path: '/app/404',
        name: '404',
      },
      {
        path: '/app/blank',
        name: 'Blank',
      },
    ],
  },
]

export default routes