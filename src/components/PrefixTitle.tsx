import type { JSXElement } from "solid-js"
import { Title } from "solid-start"

export default function (props: { children?: JSXElement }) {
  return <Title>AI聊天免费版{props.children ? " | " + props.children : ""}</Title>
}
