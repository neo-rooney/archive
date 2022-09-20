/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../Colors/colors";

interface ButtonProps {
  /** 버튼의 생김새를 설정합니다. */
  theme: "primary" | "secondary" | "tertiary";
  /**
   * 버튼 안의 내용
   */
  label: string;
  /**
   * inline 또는 FullWidth
   */
  layoutMode?: "inline" | "fullWidth";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * 버튼을 구성 할 때 `Button` 컴포넌트를 사용하세요.
 *
 * - `fullWidth` 값을 `true`로 설정하면 **100%로** 나타납니다.
 * - `onClick`을 props로 설정하여 버튼이 클릭했을 때 호출 할 함수를 지정 할 수 있습니다.
 */
export const Button = ({
  theme,
  layoutMode = "inline",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      css={[style, themes[theme], layoutModes[layoutMode]]}
      type="button"
      {...props}
    >
      {label}
    </button>
  );
};

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0 1rem;
  border-radius: 15px;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;

const themes = {
  primary: css`
    background: ${colors.primary};
    color: white;
    &:hover {
      background: #38d9a9;
    }
    &:active {
      background: #12b886;
    }
  `,
  secondary: css`
    background: ${colors.secondary};
    color: white;
    &:hover {
      background: #f1f3f5;
    }
    &:active {
      background: #dee2e6;
    }
  `,
  tertiary: css`
    background: ${colors.tertiary};
    color: white;
    &:hover {
      background: #e6fcf5;
    }
    &:active {
      background: #c3fae8;
    }
  `,
};

const layoutModes = {
  inline: css``,
  fullWidth: css`
    width: 100%;
  `,
};
