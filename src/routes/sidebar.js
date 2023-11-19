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
    name: '코드 리뷰',
  },
  {
    path: '/question',
    icon: 'CardsIcon',
    name: '질문',
  },
  {
    path: '/vote',
    icon: 'ChartsIcon',
    name: '투표',
  },
  {
    path: '/studygroup',
    icon: 'ButtonsIcon',
    name: '스터디 그룹',
  },
  {
    icon: 'PagesIcon',
    name: '계정 관리',
    routes: [
      // submenu
      {
        path: '/login',
        name: '로그인',
      },
      {
        path: '/create-account',
        name: '회원 가입',
      },
      {
        path: '/forgot-password',
        name: '비밀번호 찾기/변경',
      },
      // {
      //   path: '/app/404',
      //   name: '404',
      // },
      // {
      //   path: '/blank',
      //   name: 'Blank',
      // },
    ],
  },
]

export default routes