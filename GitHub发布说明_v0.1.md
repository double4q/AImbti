# GitHub 发布说明 v0.1

## 目标

把完整版 Prompt 放到 GitHub 公开链接中，让用户只需要复制一小段「短启动词 + 链接」即可运行测试。

---

## 推荐方式：公开 GitHub 仓库 + Raw 链接

### 第一步：创建 GitHub 仓库

在 GitHub 新建一个公开仓库，建议名称：

```text
AImbti
```

仓库设为 Public。

---

### 第二步：上传文件

上传本地这个目录里的内容：

```text
/Users/hanqiu/Documents/AImbti/public
```

至少需要上传：

```text
public/ai-user-personality-test-prompt.md
public/README.md
```

---

### 第三步：拿到 Raw 链接

文件上传后，完整 Prompt 的 Raw 链接通常是：

```text
https://raw.githubusercontent.com/你的GitHub用户名/AImbti/main/public/ai-user-personality-test-prompt.md
```

如果默认分支叫 `master`，则是：

```text
https://raw.githubusercontent.com/你的GitHub用户名/AImbti/master/public/ai-user-personality-test-prompt.md
```

---

## 给用户复制的短启动词

把下面的链接替换成真实 Raw 链接：

```text
请打开并阅读这个链接里的完整规则，然后严格按照它执行「AI 使用者人格测试」：
https://raw.githubusercontent.com/你的GitHub用户名/AImbti/main/public/ai-user-personality-test-prompt.md

现在请先用开场白开始，不要一次性问完 10 个问题。
```

---

## 更适合展示的 GitHub 页面链接

如果用户不是发给模型，而是自己查看，可以用普通页面链接：

```text
https://github.com/你的GitHub用户名/AImbti/blob/main/public/ai-user-personality-test-prompt.md
```

但如果是让 AI 读取，优先使用 Raw 链接。

---

## 注意事项

1. 仓库必须是 Public，否则大部分模型读不到。
2. 链接最好用 Raw 链接，不要用需要登录的页面。
3. 有些模型不能联网，即使有链接也读不到；这种情况下要用短 Prompt 启动版。
4. 如果模型没有读取链接，而是直接说“我无法访问链接”，就把短启动版发给它。
