# React & JavaScript — Advanced Quiz

**Difficulty: Hard**  
Tests: conceptual depth, logical reasoning, code output prediction, and edge cases.  
No peeking at answers until you’ve reasoned through each one.

---

## Part 1: JavaScript — Output & Logic

### 1. What is logged, and in what order?

```js
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
```

- A) A, B, C, D  
- B) A, D, B, C  
- C) A, D, C, B  
- D) A, B, D, C  

### 2. What is the value of `result`?

```js
const obj = { a: 1, b: 2 };
const fn = (x) => ({ ...x, c: 3 });
const result = fn(obj) === obj;
```

- A) `true`  
- B) `false`  
- C) `undefined`  
- D) Throws an error  

### 3. What is logged?

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

- A) 0, 1, 2  
- B) 3, 3, 3  
- C) undefined, undefined, undefined  
- D) 2, 2, 2  

### 4. What does `f() + f()` evaluate to?

```js
let n = 0;
function f() {
  return n++;
}
```

- A) 0  
- B) 1  
- C) 2  
- D) Depends on engine  

### 5. What is `typeof (typeof 42)`?

- A) `"number"`  
- B) `"string"`  
- C) `"undefined"`  
- D) `"object"`  

### 6. What is logged?

```js
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
a[b] = 111;
a[c] = 222;
console.log(a[b]);
```

- A) 111  
- B) 222  
- C) undefined  
- D) Throws (invalid key)  

### 7. What is the value of `r`?

```js
const r = [1, 2, 3].map(n => n * 2).filter(n => n > 2).reduce((a, b) => a + b, 0);
```

- A) 10  
- B) 6  
- C) 12  
- D) 4  

### 8. What is logged?

```js
function Foo() {}
Foo.prototype.bar = 1;
const f = new Foo();
Foo.prototype.bar = 2;
console.log(f.bar);
```

- A) 1  
- B) 2  
- C) undefined  
- D) Throws  

### 9. What is the output?

```js
console.log([] + []);
console.log([] + {});
console.log({} + []);
```

- A) `""`, `"[object Object]"`, `"[object Object]"`  
- B) `""`, `"[object Object]"`, `0`  
- C) `""`, `"[object Object]"`, `"[object Object]"` (all three)  
- D) `[]`, `"[object Object]"`, `"[object Object]"`  

### 10. What does this return?

```js
(function(a, b, c) {
  arguments[1] = 99;
  return b;
})(1, 2, 3);
```

- A) 2  
- B) 99  
- C) undefined  
- D) Strict mode: 2; non-strict: 99 (behavior differs)  

---

## Part 2: React — Behavior & Reasoning

### 11. A parent re-renders. When does a child wrapped in `React.memo` re-render?

- A) Never; memo prevents all re-renders.  
- B) Only when its props change (shallow compare).  
- C) Only when its state changes.  
- D) Whenever the parent’s state changes.  

### 12. What is the main problem here?

```jsx
function Search() {
  const [query, setQuery] = useState('');
  useEffect(() => {
    const id = setInterval(() => {
      console.log(query);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}
```

- A) Missing `query` in the dependency array — effect closes over stale `query`.  
- B) setInterval should not be used in React.  
- C) The cleanup is wrong.  
- D) There is no problem.  

### 13. User clicks the button once. How many times does "Render" get logged (approx.)?

```jsx
function Counter() {
  console.log('Render');
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const handleClick = () => {
    setA(1);
    setB(2);
  };
  return <button onClick={handleClick}>Click</button>;
}
```

- A) 1  
- B) 2  
- C) 3  
- D) 4 or more  

### 14. Why might this list cause bugs or bad UX?

```jsx
{items.map((item, index) => (
  <Item key={index} item={item} />
))}
```

- A) Keys must be strings.  
- B) Using index as key can break component state and reconciliation when list order or length changes.  
- C) Map requires a key on the parent only.  
- D) It’s correct; index is recommended.  

### 15. What is the intention of this pattern?

```jsx
const handleSubmit = useCallback(() => {
  submit(formData);
}, [formData]);
```

- A) To memoize `formData`.  
- B) To give a stable function reference so children that depend on `handleSubmit` don’t re-render when other state changes; the function updates when `formData` changes.  
- C) To prevent `submit` from being called twice.  
- D) To debounce submit.  

### 16. Parent passes `onClick={() => doSomething(id)}`. Child is wrapped in `React.memo`. When does the child re-render?

- A) Only when `id` changes.  
- B) On every parent re-render, because a new function reference is passed each time.  
- C) Only when the child’s own state changes.  
- D) Never, because it’s memoized.  

### 17. What is logged when the component mounts?

```jsx
function Example() {
  const [n, setN] = useState(0);
  useEffect(() => {
    setN(1);
    console.log('effect', n);
  }, []);
  console.log('render', n);
  return null;
}
```

- A) render 0, effect 0  
- B) render 0, effect 1  
- C) render 1, effect 1  
- D) render 0, effect 0, then render 1 (effect runs after commit; log sees stale n)  

### 18. When is it correct to omit a value from `useEffect`’s dependency array?

- A) When the linter allows it.  
- B) When you intentionally want to read a stale value or run only on mount, and you understand the tradeoff.  
- C) Never; the array must list every value used inside the effect.  
- D) Only for refs and setState.  

### 19. What does React guarantee about state updates from event handlers?

- A) Each setState runs in a separate render.  
- B) Multiple setState calls from the same event can be batched into one re-render.  
- C) setState is always synchronous.  
- D) setState from useEffect is never batched.  

### 20. Why might you use `useRef` instead of `useState` for a value that changes?

- A) useRef is faster.  
- B) When you need the latest value in callbacks/effects without triggering re-renders (e.g. for comparisons or cleanup).  
- C) useRef is for DOM only.  
- D) useState cannot hold objects.  

---

## Part 3: Conceptual & Design

### 21. Throttle vs debounce: "Run at most once per 200ms" while the user scrolls. Which do you use, and why?

- A) Debounce — wait until scrolling stops.  
- B) Throttle — guarantee a run every 200ms while scrolling.  
- C) Either is fine.  
- D) Neither; use requestAnimationFrame only.  

### 22. When is `useMemo`/`useCallback` actually useful (vs unnecessary)?

- A) Always; React recommends it everywhere.  
- B) When you’ve measured or have a clear need: expensive computation, referential equality for memoized children or dependency arrays.  
- C) Only for primitive values.  
- D) Only in class components.  

### 23. What is the main risk of fetching in useEffect without cleanup?

- A) Memory leak only.  
- B) Race condition: an older response can overwrite a newer one after state update.  
- C) No risk; React cancels in-flight fetches.  
- D) It blocks the main thread.  

### 24. Why does React need a stable "key" for list items?

- A) For accessibility.  
- B) To match elements across renders and reuse DOM/state correctly when the list changes.  
- C) For CSS.  
- D) To improve performance only.  

### 25. In which order does React run: render, commit (DOM update), layout effects, effect cleanup, effects?

- A) Render → effects → commit → cleanup.  
- B) Render → commit → layout effects → effects; cleanup runs before next effect or unmount.  
- C) Commit → render → effects.  
- D) Effects run before commit.  

---

## Answers & Explanations

| # | Answer | # | Answer |
|---|--------|---|--------|
| 1 | C | 14 | B |
| 2 | B | 15 | B |
| 3 | B | 16 | B |
| 4 | B | 17 | D |
| 5 | B | 18 | B |
| 6 | B | 19 | B |
| 7 | A | 20 | B |
| 8 | B | 21 | B |
| 9 | C | 22 | B |
| 10 | D | 23 | B |
| 11 | B | 24 | B |
| 12 | A | 25 | B |
| 13 | B |   |   |

---

### Explanations (conceptual / logical)

**1.** Sync runs first: A, D. Microtasks (Promise) before macrotasks (setTimeout): C then B. So A, D, C, B.

**2.** `fn(obj)` returns a **new** object `{ a: 1, b: 2, c: 3 }`. New object !== `obj`, so `result` is `false`.

**3.** `var i` is one shared variable. After the loop, `i === 3`. All three timeouts log that same `i` → 3, 3, 3.

**4.** First `f()` returns 0 and sets `n = 1`; second `f()` returns 1 and sets `n = 2`. So `0 + 1 === 1`. Post-increment: return then increment.

**5.** `typeof 42` is `"number"`. `typeof "number"` is `"string"`.

**6.** Object keys are stringified. `a[b]` and `a[c]` both become `a["[object Object]"]`. The second assignment overwrites the first, so `a[b]` is 222.

**7.** `[2,4,6]` → filter `> 2` → `[4,6]` → reduce `0+4+6` → 10.

**8.** `f` inherits from `Foo.prototype`. We change the **same** prototype object’s `bar` to 2, so `f.bar` is 2 (prototype is shared).

**9.** `[] + []` → `"" + ""` → `""`. `[] + {}` → `"" + "[object Object]"` → `"[object Object]"`. `{} + []` can be parsed as block + `+[]` (0) in some contexts, but in expression position `{} + []` is usually `"[object Object]"` (both coerced to string). The quiz accepts C as the intended “all string concat” interpretation.

**10.** In non-strict mode, `arguments` and params are linked; changing `arguments[1]` changes `b` → 99. In strict mode they’re not linked, so `b` stays 2. So behavior differs by mode.

**11.** `React.memo` re-renders only when **props** change (shallow). Parent re-render with same props → no child re-render.

**12.** The effect runs once (empty deps) and closes over the initial `query` (""). So the interval always logs the stale `query`. Fix: add `query` to the dependency array (and consider if you really want an interval logging it).

**13.** In React 18, multiple setState calls in the same event handler are batched → one re-render. So "Render" logs once (or twice if you count initial mount: mount + one after click).

**14.** Using `index` as key can reuse the wrong component instance when items are reordered or removed, so state and DOM get out of sync. Prefer a stable id from the data.

**15.** `useCallback` keeps the same function reference until `formData` changes. That helps when passing the callback to memoized children or as a dependency; it’s not for memoizing `formData` (that would be `useMemo`).

**16.** `() => doSomething(id)` creates a **new function** every render. Props change (new function reference) → shallow compare fails → memoized child re-renders every time.

**17.** First: render with n=0 ("render 0"). Then effect runs: setN(1) is scheduled, `console.log('effect', n)` runs with current n (0). Then React re-renders (n=1). So: render 0, effect 0, then render 1. Effect always sees the n from its render.

**18.** You may omit a value when you explicitly want “run once on mount” or “read latest ref” and accept stale values in the effect. It’s intentional escape hatch, not “never”.

**19.** In React 18, updates from the same event (and from same synchronous block in some cases) are batched into one re-render.

**20.** Updating a ref doesn’t re-render. Useful when you need the latest value in a callback or effect for comparison/cleanup without forcing re-renders.

**21.** Throttle: “at most once per 200ms” while the action is ongoing. Debounce: “once after they stop”. So throttle.

**22.** Use when it solves a real problem: expensive computation, or referential equality for memo/useEffect/useCallback. Don’t use everywhere by default.

**23.** Without cleanup (e.g. ignore or abort), an older request can resolve after a newer one and overwrite state → race condition.

**24.** Keys tell React which item is which across renders so it can reuse and move component instances correctly and preserve local state.

**25.** Render (compute tree) → commit (apply to DOM) → layout effects (useLayoutEffect) → effects (useEffect). Cleanup runs before the next effect run or on unmount.

---

*Score: 0–10 solid, 11–18 strong, 19–25 very strong. Revisit any wrong answer and reason through the explanation.*
