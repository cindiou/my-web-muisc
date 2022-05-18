export function parseLyric(s) {
  const reg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
  const strArr = s.split("\n");
  let index = 0;

  const res = [];
  for (const line of strArr) {
    if (line) {
      const perLineRes = reg.exec(line);
      const minutes = perLineRes[1];
      const second = perLineRes[2];
      const millisecond = perLineRes[3];

      if (minutes !== undefined) {
        const time =
          (minutes * 60 + second * 1) * 1000 +
          millisecond * (millisecond.length === 3 ? 1 : 10);

        const content = line.replace(reg, "").trim();
        res.push({ index, time, content });
        index++;
      }
    }
  }
  return res;
}

/*
function parseLyric(s) {
  //存在错误
  //正则.不能匹配多字节的字符，即一些utf-8编码
  const reg = /^\[(\d{2}):(\d{2})\.(\d{2,3})\]([ .:]+)$/gm;
  const res = [];
  let index = 0;

  s.replace(reg, (match, $1, $2, $3, $4, matchIndex, origin) => {
    //后台传的歌曲总时长duration单位为毫秒
    //audio监听onTimeUpdate传的是秒；
    console.log($1, $2, $3, $4);

    const time =
      ($1 * 60 + $2 * 1) * 1000 + $3.length * ($3.length === 3 ? 1 : 10);
    const text = $4.trim();

    if (!$1) return "";
    res.push({ index, text, time });
    index++;

    return "";
  });


  return res;
}
*/
