export const systemApi = {
  system: [
    {
      name: 'loginIn',
      method: 'POST',
      path: '/loginIn/getData',
      mockPath: '/loginIn/getData',
      params: {
        role: []
      },
      desc: '用户登录'
    }
  ],
  game: [
    {
      name: 'getGames',
      method: 'POST',
      path: '/app/gamestj.getData',
      mockPath: '/app/gamestj.getData',
      params: {
        role: []
      },
      desc: '用户登录'
    }
  ]
}
