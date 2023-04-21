import type { Model } from "./types"

/**
 * 用于创建 .env.example 文件，不要直接填写敏感信息。
 * 以 CLIENT_ 开头的变量会暴露给前端
 */
export const defaultEnv = {
  CLIENT_GLOBAL_SETTINGS: {
    APIKey: "",
    password: "",
    enterToSend: true
  },
  CLIENT_SESSION_SETTINGS: {
    // 0-2
    title: "",
    saveSession: true,
    APITemperature: 0.6,
    continuousDialogue: true,
    APIModel: "gpt-3.5-turbo" as Model
  },
  CLIENT_DEFAULT_MESSAGE: `- [[Shift]] + [[Enter]] 换行。本站完全免费无次数限制，如果可以希望大家多多分享给身边的朋友给支持，谢谢！！
- 为了自己的安全着想请各位千千万万不要提一些敏感词，已经有案例了！！！
- 使用问题或交流讨论GPT4.0可以[加入QQ群](https://jq.qq.com/?_wv=1027&k=a7IXPtfD)
- 如果本项目对你有帮助，可以给老弟[买瓶可乐](https://www.lianmenghao.cn/reward.png)
- ChatBox战略合作伙伴公众号有学Python大数据的可以关注一个波[信息技术智能库](https://app.yinxiang.com/fx/13ce6bbd-f36f-4e92-be53-92dd381ed729)
- 版本更新了想快速熟悉更多细节功能可以[点我查看玩转教程](https://docs.qq.com/doc/DT093aUJRS3hYQ2lw)
- 免费时间现在改为12-22点需要全时段使用可以[点我购买API](https://www.lianmenghao.cn/zb_users/upload/2023/03/20230327141734167989785492356.jpg)
- 对画图有需要的用户可以[点我访问独享版](https://ctgpt2.xyz)
- [安卓端下载](https://wwji.lanzouf.com/i2gyT0qz28he) | [IOS端下载](https://wwji.lanzouf.com/i7bJz0tcb69i)
`,
  CLIENT_MAX_INPUT_TOKENS: {
    "gpt-3.5-turbo": 4 * 1024,
    "gpt-4": 8 * 1024,
    "gpt-4-32k": 32 * 1024
  } as Record<Model, number>,
  OPENAI_API_BASE_URL: "api.openai.com",
  OPENAI_API_KEY: "",
  TIMEOUT: 30000,
  PASSWORD: "",
  SEND_KEY: "",
  SEND_CHANNEL: 9,
  NO_GFW: false
}

export type SessionSettings = typeof defaultEnv.CLIENT_SESSION_SETTINGS
