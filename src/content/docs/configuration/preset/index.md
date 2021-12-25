---
title: "Preset"
date: 2021-12-21T13:20:36+08:00
weight: 2
---

# Preset

## Overview

Preset can add a 'preset' value to the configuration in advance, for example, you can preset the function of the button, and then you don't need to specify the button in the real configuration. Sometimes a lot of common code can be eliminated.

```javascript
let oneDollarPayment = {
    btn_text: 'Pay $1',
    btn_callback() {
        textbox({
            title: 'Thanks!',
            message: 'Successful payment!',
        });
        return true;
    },
};

textbox({
    title: 'Check the order',
    message: 'Buy 5 diamonds',
    preset: oneDollarPayment,
});
```

{{< button class="try-btn" >}} TRY {{< /button >}}

## Priority

Preset will not overwrite the part of the current configuration that overlaps with the preset configuration, i.e. the current configuration has a higher priority than preset's.

```javascript
textbox({
    preset: {
        message: 'Preset',
    },
    message: 'Current',
});
```

{{< button class="try-btn" >}} TRY {{< /button >}}

{{< hint warning >}}
Preset can only be used at the first level of the configuration. In the future, this warning may change.
{{< /hint >}}
