---
title: 概论
---

## vitepress 测试

[链接](https://vitepress.vuejs.org/)

由于最近一直在用`vuepress`进行文档开发，随着里面用到的组件越来越多，文件新增删除等，导致使用体验越来越差。却一直间也没有更好地替代方法。然而当知道`vitepress` 时，这个还不是很稳定，现想试试看看，能否达到自己的需求，考虑将基于`vuepress`的内容迁移到 `vitepress` 中。

+ `Table`

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

+ `Emoji`

:tada: :100:

[按道理支持的emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

[emoji](./emoji.md)


+ custom containers

:::tip
 tip内容
:::

:::warning
 warning内容
:::

:::danger
 danger内容
:::

:::danger custom
  只是对 `tip`,`warning`,`danger` 进行换名称，配色还是原有的三种类型之一
:::

+ 语法高亮

```html
 <html></html>
```

```js{2}
  export default {
    data() {
      return {}
    }
  }
```

## 总结

`vitepress` 目前使用的体验还不是很完美。若是单纯写文档，估计会很ok，但若是想进行文档书写会是不错的选择，可若是想类似 `vuepress` 那样可以改主题，可以引入组件等操作，还得再琢磨一二，目前文档并没有相应的方案。只能通过 `vitepress` 的 `issue` 里的内容进行查看了。

综上建议是 持续观望吧，看了`issue` 说是未来 `vuepress` 会基于 `vite` 开发，听起来是个不错的消息。

## 参考

+ [github:vitepress-demo](https://github.com/veaba/vitepress-demo)
+ [github:blog](https://github.com/CrazyMrYan/blog)