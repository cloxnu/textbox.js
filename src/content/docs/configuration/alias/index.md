---
title: "Alias"
date: 2021-12-21T15:00:00+08:00
weight: 3
---

# Alias

> You'll be surprised to know that when you want to use buttons, it works fine whether you use `button` or `buttons` in the textbox configuration.

## Overview

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

## Priority

Alias will not overwrite the part of the configuration after the alias that overlaps with the current configuration, i.e., the current configuration has a higher priority than the alias.


```javascript
textbox({
    alias: {
        m: 'message',
    },
    m: 'Alias',
    message: 'Current',
});
```

{{< button class="try-btn" >}} TRY {{< /button >}}

## Multi-level alias

### value

Alias was originally designed to reduce multi-level indentation, and in fact there are a large number of pre-defined aliases that use multi-level alias.

It is written as follows:

```javascript
{
    alias: {
        name: ['first', 'second', 'third'],
    },
    name: '123',
}
```

and will be translated as:

```javascript
{
    first: {
        second: {
            third: '123',
        },
    },
}
```

In the real world, for example:

```javascript
textbox({
    alias: {
        m_cont: ['message', 'content'],
        m_color: ['message', 'color'],
    },
    m_cont: 'I am message content',
    m_color: 'green',
});
```

{{< button class="try-btn" >}} TRY {{< /button >}}

### key

If you want to alias a multi-level key, just put the alias inside that key.

```javascript
textbox({
    message: {
        alias: {
            c: 'color',
        },
        content: 'I am message',
    },
    alias: {
        mc: ['message', 'c'],
    },
    mc: 'red',
});
```

{{< button class="try-btn" >}} TRY {{< /button >}}

## Use with preset

[Preset](../preset/) can set the preset value of the configuration, and likewise, it can set the alias in advance.

```javascript
const msgAlias = {
    alias: {
        m: 'message',
    },
};

textbox({
    m: 'I am message',
    preset: msgAlias,
});
```

{{< button class="try-btn" >}} TRY {{< /button >}}

{{< hint warning >}}
**⚠️ Warning: Unable to alias 'preset'**

`alias: { p: 'preset' }` will not work.
{{< /hint >}}

## Alias itself

It's OK to alias itself.

```javascript
textbox({
    alias: {
        a: 'alias',
    },
    a: {
        m: 'message',
    },
    m: 'I am message',
});
```

{{< button class="try-btn" >}} TRY {{< /button >}}

{{< hint warning >}}
**⚠️ Warning: Invalid alias**

Aliasing a value to the same value, or the same value at the first level, the alias is invalid.
{{< /hint >}}

{{< hint warning >}}
**⚠️ Warning: Avoid alias loops**

If there is an alias loop in the alias configuration, you will get an unexpected result. As protection, aliases can be executed up to **10 times**.
{{< /hint >}}
