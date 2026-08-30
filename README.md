# 大肥鱼工作室 🐟

<p align="center">
  <b>手机上的 AI 智能体工作台</b><br>
  免 ROOT，在手机上本地运行 AI 智能体 —— 让 AI 不仅能聊天，还能亲手干活
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT">
  <img src="https://img.shields.io/badge/Android-8.0%2B-3DDC84?logo=android&logoColor=white" alt="android">
  <img src="https://img.shields.io/badge/arch-arm64--v8a-lightgrey" alt="arch">
</p>

## 这是什么

一个免 ROOT 的 Android 应用，把完整的 AI 智能体框架搬进了手机。装上之后，你的手机里会有一个本地运行的 Linux 环境，AI 在里面可以真正地**执行命令、读写文件、操作手机**——不只是问一句答一句的聊天。

深海蓝主题，配上「大肥鱼」IP 形象，是一款完全个人化的项目。

## 核心特性

- **免 ROOT、免 Termux**：通过 proot 模拟 root 权限，手机上直接跑 Linux
- **本地执行**：内置 Ubuntu 环境（约 300MB），Node.js + AI 智能体框架预装，开箱即用
- **AI 能动手**：不只是聊天，能让 AI 执行命令、操作文件、连接设备
- **插件机制**：内置插件系统，主题等扩展首启即用
- **深海主题**：大肥鱼工作室专属配色，蓝绿海洋风

## 技术原理

手机 → Android App 外壳（原生界面 + WebView 预览）→ proot（免 ROOT 跑 Linux）→ Ubuntu 环境（Node.js + AI 智能体框架）。大模型推理在云端（需要填 API key），执行环境在手机本地。

## 构建

需要 JDK 17、Android SDK 34、NDK 26、Gradle 8.5。完整构建需先在 ARM 环境生成离线 rootfs（见 `scripts/ci-make-offline-bundle.sh`），CI 工作流会自动完成。

```bash
# 精简包（不含内置环境，仅用于已装完整包的设备更新）
gradle :app:assembleDebug -Pslim
```

## 说明

- 仅支持 arm64-v8a（64 位手机）
- 包体约 370MB（内置 Linux 环境的代价）
- 首次启动需解压环境，约几分钟，属正常现象

## 作者

大肥鱼工作室 · [lwx20021120](https://github.com/lwx20021120)
