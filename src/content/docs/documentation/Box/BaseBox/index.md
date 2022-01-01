---
title: "BaseBox"
date: 2021-12-31T18:13:32+08:00
---

# BaseBox

The most basic box.

## Declaration

```
BaseBox: {{< raw >}}<a href="../../component/">Component</a>{{< /raw >}}
```

## Prototype

```
render: () => void
```

Render and display this box. (Animate)

```
show: () => void
```

Show this box from hidden state. (Animate)

```
hide: () => void
```

Hide this box from non-hidden state. (Animate)

```
destroy: (completion?: () => void) => void
```

Destroy this box, and `completion` will be called when box is completely destroyed. (Animate)

```
remove: () => void
```

Remove this box instantly.

```
update: (config?: object) => void
```

Update this box with new config.

## Configuration

### Components

```
backdrop: {{< raw >}}<a href="../../component/container/">Container</a>{{< /raw >}}
```

```
box: {{< raw >}}<a href="../../component/container/">Container</a>{{< /raw >}}
```

```
title_bar: {{< raw >}}<a href="../../component/container/">Container</a>{{< /raw >}}
```

```
box_content: {{< raw >}}<a href="../../component/container/">Container</a>{{< /raw >}}
```

```
title: {{< raw >}}<a href="../../component/message/">Message</a>{{< /raw >}}
```

```
x: {{< raw >}}<a href="../../component/button/">Button</a>{{< /raw >}}
```

The close button.

### Basic

```
log: boolean
```

## Example

```javascript
let box = new BaseBox();
box.render();
```

{{< button class="try-btn" >}} TRY {{< /button >}}
