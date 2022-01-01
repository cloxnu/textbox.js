---
title: "Button"
date: 2021-12-31T20:45:36+08:00
---

# Button

The button component.

## Declaration

```
Button: {{< raw >}}<a href="../">Component</a>{{< /raw >}}
```

## Configuration

```
text: string
```

The text content of button component.

```
callback: (_?: BaseBox) => boolean
```

The called callback after the button is clicked.

```
style: string
```

The style of button. Valid values:

- `default` (default)
- `submit`
- `cancel`
- `waiting`
- `destroy`
- `img`
- `none`
