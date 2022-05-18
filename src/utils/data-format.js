export function getFormaPlayCount(count) {
  if (count < Math.pow(10, 5)) return count;
  else {
    return (count / 10000).toFixed(1) + "万";
  }
}

export function getSizeSongsCover(url, size) {
  return url?.replace(
    /(\.jpg|\.jpeg|\.png)(.*)$/,
    (match, $1, $2, index, s) => {
      return `${$1}?param=${size}x${size}`;
    }
  );
}

export function getBlurImage(src) {
  return src.replace(/(\.jpg|\.jpeg|\.png)(.*)$/, (match, $1, $2, index, s) => {
    return $1 + "?imageView&blur=40x20";
  });
}

export function getBlurOfBgImage(topBanner, index) {
  return topBanner[index]?.imageUrl?.replace(
    /(\.jpg|\.jpeg|\.png)(.*)$/,
    (match, $1, $2, index, s) => {
      return $1 + "?imageView&blur=40x20";
    }
  );
}

export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}

export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss");
}

export function getUrlOfPlaySong(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}
