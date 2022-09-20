import * as React from "react";
import { SVGProps } from "react";

const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="m18 1-6 4-6-4-6 5v7l12 10 12-10V6z" />
  </svg>
);

export default SvgHeart;
