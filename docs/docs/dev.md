# 开发中遇到的问题

为了提高开发速度，特记录开发中遇到的问题。

## Typescript 类型转换问题

你的问题是一个常见的 TypeScript 类型错误，它发生在你试图将一个可能是 undefined 的值赋给一个必须是 string 的变量。例如¹：

```ts
var x: string | undefined;
var y: string = x; // 错误
console.log(y);
```

这里，x 的类型是 `string | undefined`，意思是它可以是一个字符串或者 undefined。y 的类型是 `string`，意思是它只能是一个字符串。当你试图将 x 赋给 y 时，TypeScript 会报错，因为它不能保证 x 不是 undefined。

有几种方法可以解决这个问题，取决于你的具体情况：

- 你可以使用 **非空断言操作符** (!) 来告诉 TypeScript 你确定 x 不是 undefined。例如¹：

```ts
var x: string | undefined;
var y: string = x!; // 没有错误
console.log(y);
```

这种方法的风险是，如果 x 真的是 undefined，你的程序可能会出现运行时错误。

- 你可以使用 **类型断言** (as) 来将 x 强制转换为 string 类型。例如²：

```ts
var x: string | undefined;
var y: string = x as string; // 没有错误
console.log(y);
```

这种方法的风险和上一种类似，如果 x 真的是 undefined，你的程序可能会出现运行时错误。

- 你可以使用 **类型守卫** (if) 来检查 x 是否是 undefined，然后再赋给 y。例如²：

```ts
var x: string | undefined;
var y: string;
if (x !== undefined) {
  y = x; // 没有错误
} else {
  y = ""; // 或者其他默认值
}
console.log(y);
```

这种方法的好处是，你可以避免运行时错误，但是需要多写一些代码。

- 你可以使用 **空值合并操作符** (??) 来提供一个默认值，如果 x 是 undefined。例如¹：

```ts
var x: string | undefined;
var y: string = x ?? ""; // 没有错误
console.log(y);
```

这种方法的好处是，它比类型守卫更简洁，但是需要 TypeScript 3.7 或更高版本才支持。

希望这些方法能帮助你解决问题。如果还有其他问题，请随时提问。😊

¹: [Typescript: Type 'string | undefined' is not assignable to type 'string'](https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string)
²: [TypeScript: Type 'string | undefined' is not assignable to type 'string'](https://stackoverflow.com/questions/61130603/typescript-type-string-undefined-is-not-assignable-to-type-string)

源: 与必应的对话， 2023/7/9
(1) Typescript: Type 'string | undefined' is not assignable to type 'string .... https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string.
(2) TypeScript: Type 'string | undefined' is not assignable to type 'string .... https://stackoverflow.com/questions/61130603/typescript-type-string-undefined-is-not-assignable-to-type-string.
(3) Angular TypeScript: "Type ' (string | undefined) []' is not assignable .... https://stackoverflow.com/questions/65053723/angular-typescript-type-string-undefined-is-not-assignable-to-type-st.