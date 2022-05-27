## 项目介绍

使用 React 全家桶编写 的云音乐 **PC** Web 项目，接口来源于开源接口[Binaryify/NeteaseCloudMusicApi](https://neteasecloudmusicapi.vercel.app/#/?id=%e5%ae%89%e8%a3%85)，自己在`vercel`已经做了部署[地址](https://vercel.com/cindiou/netease-cloud-music-api)。页面样式仿写参照[网易云音乐](https://music.163.com)官网本身。

此外，由于通过部署在 vercel 的接口的方式主要是通过代理的方式间接访问网易云官方 API，导致整体项目的响应速度偏慢。

[项目预览](https://music.biubiu.fans/)

## 项目完成度

项目已经完成功能如下，主要是发现页面中以下几个子页面：

- 推荐
  > 轮播图
  > 底部播放栏
  > 回到顶部
- 排行榜
- 歌单
- 主播电台
- 歌手
- 新碟上架
- 单首歌曲详情页面
- 404 页面
- 等等

### 推荐页面

![推荐页面](https://i.postimg.cc/W3s3DBSg/image.png)
![底部播放栏](https://i.postimg.cc/6QQKDC6J/image.png)

1. 目前做了榜单中歌曲的点击播放；

- 做了歌曲的各种控制（暂停、播放、上一首、下一首、进度改变）；
- 做了播放循序切换：顺序播放、随机播放、单曲循环；
- 做了歌词的展示；
- 做了歌曲音量调节

1. 底部播放栏的升降功能：
   ![底部播放栏:升降演示](https://i.postimg.cc/Njcm7jsr/playbar-updown.gif)

2. 歌词的细节展示：
   ![歌词的细节展示](https://i.postimg.cc/J0KV6nw4/image.png)

### 排行榜页面：

![排行榜页面](https://i.postimg.cc/pXxKKdX5/image.png)

- 各种榜单的切换；

### 歌单页面

- 选择分类、选择分类后根据分类切换歌单；
- 根据分类，歌单列表的展示；
- 分页功能；

![歌单页面](https://i.postimg.cc/0jZjYPc7/image.png)

### 主播电台页面：

- 电台分类的展示、滚动；
- 不同分类展示不同的数据；
- 电台排行榜展示、分页；

![主播电台](https://i.postimg.cc/g27DyP79/image.png)

### 歌手页面：

- 各种歌手分类
- 歌手字母分类、对应歌手展示；

  ![歌手页面](https://i.postimg.cc/2SWqJR6N/image.png)

### 新碟上架页面：

- 热门新碟；
- 全部新碟
- 分页展示；

![新碟上架页面](https://i.postimg.cc/v89ZbLy5/image.png)

### 单首歌曲详情页面

- 推荐歌曲、收录歌单
- 歌词展示
- 评论：精彩评论、最新评论、分页

  ![进入提示](https://i.postimg.cc/FHGjGXnF/image.png)
  ![详情显示-part1](https://i.postimg.cc/GtYfsmKm/image.png)
  ![详情显示-part2](https://i.postimg.cc/cCmQjq4c/image.png)
