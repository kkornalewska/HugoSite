---
title: "Shortcode Test"
date: 2021-03-19T16:13:39+01:00
draft: false
---

# SHORTCODE TEST

{{< youtube kdM2YA-SVyA >}}


Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Fringilla 
phasellus faucibus scelerisque eleifend donec pretium. Fames ac turpis egestas integer eget aliquet 
nibh praesent. Urna porttitor rhoncus dolor purus non. Mattis molestie a iaculis at erat pellentesque 
adipiscing. Sodales neque sodales ut etiam sit amet. Amet risus nullam eget felis eget nunc. 
Consectetur lorem donec massa sapien faucibus et molestie. Ullamcorper eget nulla facilisi 
etiam dignissim diam. Integer enim neque volutpat ac tincidunt vitae. Enim eu turpis egestas 
pretium. Ultrices sagittis orci a scelerisque purus semper eget duis at. Euismod nisi porta 
lorem mollis aliquam. Lobortis feugiat vivamus at augue eget arcu dictum. Interdum varius sit 
amet mattis vulputate enim nulla aliquet. Fames ac turpis egestas sed tempus urna et pharetra 
pharetra. Est sit amet facilisis magna.


### html syntax highlighting


{{< highlight html >}}
<h1 class="post-title" style="color:{{ $titleColor }};" >{{ .Title }}</h1>
<div class="post-line"></div>
{{< /highlight >}}


### js syntax highlighting
{{< highlight js >}}
function () {
    return('JS is the best!');
}
{{< /highlight >}}


### custom shortcodes
File: layouts/shortcodes/img-placehold.html:

{{< img-placehold 700 100>}}
{{< img-placehold2 width="500" height="200" >}}
