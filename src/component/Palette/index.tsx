import React from "react";
import classnames from "classnames/bind";
import styled from "styled-components";
import styles from "./index.scss";
const moduleName = "PaletteBox";
const cx = classnames.bind(styles);

// const Li = styled.li`
// :hover {
//     color: ${palette.color};
//   }
// `
/** @type {{hover: React.CSSProperties}} */

interface Props {
  paletteBox: Array<{ color: string; name: string }>;
  handleColorChange(color: string): void;
}

const Palette: React.SFC<Props> = ({ paletteBox, handleColorChange }) => (
  <div className={cx(`${moduleName}`)}>
    <ul className={cx(`${moduleName}-wrap`)}>
      {paletteBox.map(palette => (
        <li className={cx(`${moduleName}-palettes`)}>
          <div
            className={cx(`${moduleName}-palette`)}
            style={{
              color: "#868e96"
            }}
            onClick={() => handleColorChange(palette.color)}
          >
            <span
              className={cx(`${moduleName}-palette-box`)}
              style={{ backgroundColor: palette.color }}
            />
            {palette.name}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Palette;
