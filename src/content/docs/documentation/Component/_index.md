---
title: "Component"
date: 2021-12-31T17:21:53+08:00
weight: 2
bookCollapseSection: true
---

# Component

The most basic component, corresponding to an element.

## Configuration

### Attributes

```
id: string
```

The value of element's id content attribute.

```
class: string[] | string
```

The value of element's class content attribute.

### Basic

```
innerHTML: string => innerHTML
```

Configuration item => corresponding element property.

### Styles

```
color: string => color
bgColor: string => backgroundColor
```

Configuration item => corresponding style property.

```
css: {{< raw >}}<a>CssProperty</a>{{< /raw >}}
```


