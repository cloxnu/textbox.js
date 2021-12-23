---
title: "Title, Message and Buttons"
date: 2021-12-20T00:19:25+08:00
weight: 1
---

# Title, Message and Buttons

As a powerful ⚡️ UI component that can display a variety of different styles, we definitely don't want to just use the default configuration, so here we start with three basic configurations: title, message and buttons.

## Title

Let's start with the title.

```javascript
textbox({
    title: 'Hello',
});
```

{{< button class="try-btn" >}} TRY {{< /button >}}

Did you see it? The title 'Hello' appears in the title bar, let's turn it to red:

```javascript
textbox({
    title: {
        content: 'Hello',
        color: 'red',
    },
});
```

{{< button class="try-btn" >}} TRY {{< /button >}}

## Message

Like title, message has the same properties, so let's put together 'Hello World'.

```javascript
textbox({
    title: 'Hello',
    message: 'World',
});
```

{{< button class="try-btn" >}} TRY {{< /button >}}

## Buttons

Let's have some interactivity with the textbox. Change the default 'OK' button, we want to click it and then pop up a new textbox.

```javascript
textbox({
    title: 'Hello',
    message: 'World',
    button: {
        text: 'New TextBox',
        callback() {
            textbox();
        },
    },
});
```

{{< button class="try-btn" >}} TRY {{< /button >}}

Here you can have a second button to finish the cancel task.

```javascript
textbox({
    title: 'Hello',
    message: 'World',
    button: [{
        text: 'New TextBox',
        callback() {
            textbox();
        },
    }, 'Cancel'],
});
```

{{< button class="try-btn" >}} TRY {{< /button >}}

Let's have an advanced interaction. Can we make the current textbox disappear and then pop up a textbox with the same configuration after clicking this button?

> If we want to make the textbox disappear after clicking the button, try `return true` in the callback.

```javascript
function generate() {
    textbox({
        title: 'Hello',
        message: 'World',
        button: {
            text: 'Generate',
            callback() {
                generate();
                return true;
            },
        },
    });
};
generate();
```

{{< button class="try-btn" >}} TRY {{< /button >}}

