---
title: "Update"
date: 2021-12-30T10:36:51+08:00
weight: 4
---

# Update

If you want to change the content or style of the textbox, try `update`.

## Overview

```javascript
textbox({
    title: 'Original Title',
    btn_text: 'Change Title',
    btn_callback(tb) {
        tb.update({
            title: 'Updated Title',
        });
    },
});
```

{{< button class="try-btn" >}} TRY {{< /button >}}
