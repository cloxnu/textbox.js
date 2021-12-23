---
title: "Alias"
date: 2021-12-21T15:00:00+08:00
weight: 3
---

# Alias

> You'll be surprised to know that when you want to use buttons, it works fine whether you use `button` or `buttons` in the textbox configuration.

Alias helps to replace complex key with simpler one in the configuration. For example, you can alias `m` to `message`, so you can configure messages with `m` in the configuration.

```javascript
textbox({
    alias: {
        m: 'message',
    },
    m: 'I am message!',
})
```

{{< button class="try-btn" >}} TRY {{< /button >}}
