---
title: "Getting Started"
date: 2021-12-19T20:17:04+08:00
weight: 1
---

# Getting Started

Welcome again, this page will introduce the simplest usage of *textbox* and hopefully it will bring you the desire to continue exploring or to contribute to this [project](https://github.com/cloxnu/textbox.js).

{{< hint warning >}}
For now, *textbox* is still in beta, but you can still copy the `textbox.js` code [here](/textbox.js).
{{< /hint >}}

## The simplest usage

```javascript
textbox();
```

{{< button class="try-btn" >}} TRY {{< /button >}}

If everything works, you will see the following result after pressing {{< raw >}}<kbd>TRY</kbd>{{< /raw >}}. If not, please [contact us](mailto:hi@clox.nu).

![simplest](assets/simplest.png)

Your HTML code may look like:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>...</title>
        ...
    </head>
    <body>
        ...
    </body>
    <script src="textbox.js"></script>
</html>
```

## Equivalent usage

`textbox()` will generate a empty `TextBox` object, and render it to screen. So you can also realize it yourself.

```javascript
let tb = new TextBox();
tb.render();
```

{{< button class="try-btn" >}} TRY {{< /button >}}

## What's next



