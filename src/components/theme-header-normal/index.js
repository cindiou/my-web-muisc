import React, { memo, Fragment } from "react";
import PropTypes from "prop-types";

import { HeaderWrapper } from "./style";

function WMThemeHeaderNormal(props) {
  const { title, sub } = props;

  return (
    <HeaderWrapper>
      <div className="title">{title}</div>
      <div className="right">
        {sub &&
          sub.map((item, index) => {
            return (
              <Fragment key={item}>
                <span className="link">{item}</span>
                {index < sub.length - 1 && <span className="divider">|</span>}
              </Fragment>
            );
          })}
      </div>
    </HeaderWrapper>
  );
}

WMThemeHeaderNormal.propTypes = {
  title: PropTypes.string.isRequired,
  sub: PropTypes.array,
};

export default memo(WMThemeHeaderNormal);
