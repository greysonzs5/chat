import logo from "/assets/logo.svg?raw"
import ThemeToggle from "./ThemeToggle"
export default function Header() {
  return (
    <header class="sticky top--100px z-99 px-2em">
      <div id="logo" class="w-100px h-100px" innerHTML={logo} />
      <div class="flex justify-between items-center">
        <div
          id="title"
          class="flex items-center mt-2 pb-2 text-2xl cursor-pointer"
        >
          <span class="text-transparent font-extrabold bg-clip-text bg-gradient-to-r dark:from-yellow-300 from-yellow-600 dark:to-red-700 to-red-700 mr-1">
            ChatGPT
          </span>
          <span class="ml-1 font-extrabold text-slate-7 dark:text-slate">
            Vercel
          </span>
          <a
            class="ml-2 <sm:hidden"
            href="https://github.com/ourongxing/chatgpt-vercel"
          >
            <img
              alt="GitHub forks badge"
              src="https://img.shields.io/github/stars/ourongxing/chatgpt-vercel?logo=github"
            />
          </a>
          <a
            class="ml-2"
            href="https://github.com/ourongxing/chatgpt-vercel/fork"
          >
            <img
              alt="GitHub forks badge"
              src="https://img.shields.io/github/forks/ourongxing/chatgpt-vercel?logo=github"
            />
          </a>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}