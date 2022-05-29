import {
  PER_PAGE_ALL_ALBUM_COUNT,
  CHANGE_HOT_ALBUMS,
  CHANGE_TOP_ALBUMS,
  CHANGE_TOP_TOTAL,
} from "./constants";

import { getHotAlbums, getTopAlbums } from "@/services/album.js";

const changeHotAlbumsAction = (res) => ({
  type: CHANGE_HOT_ALBUMS,
  hotAlbums: (res && res.albums) || [],
});

const changeTopAlbumAction = (res) => ({
  type: CHANGE_TOP_ALBUMS,
  topAlbums: (res && res.albums) || [],
});

const changeTopTotalAction = (total) => ({
  type: CHANGE_TOP_TOTAL,
  total: total,
});

export const getHotAlbumsAction = () => {
  return (dispatch) => {
    dispatch({ type: "album/is_spinning", isSpinning: true });

    getHotAlbums().then((res) => {
      dispatch(changeHotAlbumsAction(res));

      dispatch({ type: "album/is_spinning", isSpinning: false });
    });
  };
};

export const getTopAlbumsAction = (page) => {
  return (dispatch) => {
    dispatch({
      type: "album/is_spinning_in_top_album",
      isSpinningInTopAlbum: true,
    });
    const offset = PER_PAGE_ALL_ALBUM_COUNT * (page - 1);
    getTopAlbums(offset).then((res) => {
      dispatch(changeTopAlbumAction(res));
      dispatch(changeTopTotalAction(res.total));

      dispatch({
        type: "album/is_spinning_in_top_album",
        isSpinningInTopAlbum: false,
      });
    });
  };
};
