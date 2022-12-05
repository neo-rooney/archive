/// <reference types="react" />
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
declare const Button: ({ theme, layoutMode, label, ...props }: ButtonProps) => JSX.Element;
export default Button;
