---
title: "Assets Test"
date: 2021-03-19T15:07:38+01:00
draft: false
authhor: Katarzyna Kornalewska
type: "assets"
---



### html syntax highlighting
{{< highlight html >}}
<h1 class="post-title" style="color:{{ $titleColor }};">{{ .Title }}</h1>
<div class="post-line"></div>
{{</ highlight >}}

### js syntax highlighting
{{< highlight js >}}
function () {
    return('JS is the best!');
}
{{</ highlight >}}
