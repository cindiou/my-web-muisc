export const headerLinks = [
  {
    title: "发现音乐",
    link: "/discover",
  },
  {
    title: "我的音乐",
    link: "/mine",
  },
  {
    title: "朋友",
    link: "/friend",
  },
  {
    title: "商城",
    link: "https://music.163.com/store/product",
  },
  {
    title: "音乐人",
    link: "https://music.163.com/st/musician",
  },
  {
    title: "下载客户端",
    link: "https://music.163.com/#/download",
  },
];

export const footerLinks = [
  {
    title: "服务条款",
    link: "https://st.music.163.com/official-terms/service",
  },
  {
    title: "隐私政策",
    link: "https://st.music.163.com/official-terms/privacy",
  },
  {
    title: "儿童隐私政策",
    link: "https://st.music.163.com/official-terms/children",
  },
  {
    title: "版权投诉指引",
    link: "https://music.163.com/st/staticdeal/complaints.html",
  },
  {
    title: "意见反馈",
    link: "#",
  },
];

export const footerImages = [
  {
    link: "https://web-amped.music.163.com/",
  },
  {
    link: "https://music.163.com/st/userbasic#/auth",
  },
  {
    link: "https://music.163.com/st/musician",
  },
  {
    link: "https://music.163.com/web/reward",
  },
  {
    link: "https://music.163.com/#/login?targetUrl=https%3A%2F%2Fmusic.163.com%2Fuservideo%23%2Fplan",
  },
];

export const discoverMenu = [
  {
    title: "推荐",
    link: "/discover/recommend",
  },
  {
    title: "排行榜",
    link: "/discover/ranking",
  },
  {
    title: "歌单",
    link: "/discover/songs",
  },
  {
    title: "主播电台",
    link: "/discover/djradio",
  },
  {
    title: "歌手",
    link: "/discover/artist",
  },
  {
    title: "新碟上架",
    link: "/discover/album",
  },
];

export const hotRadios = [
  {
    picUrl:
      "http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40",
    name: "陈立",
    position: "心理学家、美食家陈立教授",
    url: "/user/home?id=278438485",
  },
  {
    picUrl:
      "https://p1.music.126.net/GgXkjCzeH4rqPCsrkBV1kg==/109951164843970584.jpg?param=40y40",
    name: "刘维-Julius",
    position: "歌手、播客节目《维维道来》主理人",
    url: "/user/home?id=559210341",
  },
  {
    picUrl:
      "http://p1.music.126.net/S7dd9GvTPwl5IHym8qF8VA==/109951164999332400.jpg?param=40y40",
    name: "莫非定律MoreFeel",
    position: "男女双人全创作独立乐团",
    url: "/user/home?id=259292486",
  },
  {
    picUrl:
      "http://p1.music.126.net/NHjNoFpLDEZ-3OR9h35z1w==/109951165825466770.jpg?param=40y40",
    name: "碎嘴许美达",
    position: "脱口秀网络红人",
    url: "/user/home?id=1450418799",
  },
  {
    picUrl:
      "http://p1.music.126.net/CpUdHPNvBvN7kebvL21TTA==/109951163676573083.jpg?param=40y40",
    name: "银临Rachel",
    position: "古风音乐人",
    url: "/user/home?id=2688170",
  },
];

export const settleSingers = [
  {
    imgUrl:
      "http://p2.music.126.net/rCsLFXha6SLis0tV7yZ5fA==/109951165588539704.jpg?param=62y62",
    alias: "张惠妹aMEI",
    name: "台湾歌手张惠妹",
  },
  {
    imgUrl:
      "http://p2.music.126.net/wDxCsT3YEYdNg-UZU_ZKeg==/109951166047225823.jpg?param=62y62",
    alias: "Fine乐团",
    name: "独立音乐人",
  },
  {
    imgUrl:
      "http://p2.music.126.net/TiRAIiIihOgtBgYB6DZRXA==/109951162916034289.jpg?param=62y62",
    alias: "萬曉利",
    name: "民谣歌手、中国现代民谣的代表人物之一",
  },
  {
    imgUrl:
      "http://p2.music.126.net/w_UWOls2uCkFN_U62788Xg==/18806046882229308.jpg?param=62y62",
    alias: "音乐人赵雷",
    name: "民谣歌手",
  },
  {
    imgUrl:
      "http://p2.music.126.net/NDsX060FnCtiDMZN-c_9Gw==/3438172872737957.jpg?param=62y62",
    alias: "王三溥",
    name: "音乐人",
  },
];

// 歌手类别
export const artistCategories = [
  {
    title: "推荐",
    area: -1,
    artists: [
      {
        name: "推荐歌手",
        type: 1,
        url: "/discover/artist",
        id: 0,
      },
      {
        name: "入驻歌手",
        type: 2,
        url: "/discover/artist?cat=5001",
        dataPath: "/artist/list?cat=5001",
      },
    ],
  },
  {
    title: "华语",
    area: 7,
    artists: [
      {
        name: "华语男歌手",
        url: "/discover/artist?id=1001",
        type: 1,
      },
      {
        name: "华语女歌手",
        url: "/discover/artist?id=1002",
        type: 2,
      },
      {
        name: "华语组合/乐队",
        url: "/discover/artist?id=1003",
        type: 3,
      },
    ],
  },
  {
    title: "欧美",
    area: 96,
    artists: [
      {
        name: "欧美男歌手",
        url: "/discover/artist?id=2001",
        type: 1,
      },
      {
        name: "欧美女歌手",
        url: "/discover/artist?id=2002",
        type: 2,
      },
      {
        name: "欧美组合乐队",
        url: "/discover/artist?id=2003",
        type: 3,
      },
    ],
  },
  {
    title: "日本",
    area: 8,
    artists: [
      {
        name: "日本男歌手",
        url: "/discover/artist?id=6001",
        type: 1,
      },
      {
        name: "日本女歌手",
        url: "/discover/artist?id=6002",
        type: 2,
      },
      {
        name: "日本组合/乐队",
        url: "/discover/artist?id=6003",
        type: 3,
      },
    ],
  },
  {
    title: "韩国",
    area: 16,
    artists: [
      {
        name: "韩国男歌手",
        url: "/discover/artist?id=7001",
        type: 1,
      },
      {
        name: "韩国女歌手",
        url: "/discover/artist?id=7002",
        type: 2,
      },
      {
        name: "韩国组合/乐队",
        url: "/discover/artist?id=7003",
        type: 3,
      },
    ],
  },
  {
    title: "其他",
    area: 0,
    artists: [
      {
        name: "其他男歌手",
        url: "/discover/artist?id=4001",
        type: 1,
      },
      {
        name: "其他女歌手",
        url: "/discover/artist?id=4002",
        type: 2,
      },
      {
        name: "其他组合乐队",
        url: "/discover/artist?id=4003",
        type: 3,
      },
    ],
  },
];
