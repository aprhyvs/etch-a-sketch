## JavaScript project built to teach myself more:
1. Dom Manipulation
2. Events
## Some interesting stuff I learned along the way:
### 1. forEach() and NodeList
When using document.querySelectorAll(), it returns a NodeList. Even though NodeList is not a real array, you can use forEach() on it, making it easy to loop through and manipulate DOM elements.
### 2. DOM properties applies inline styles
I got confused about on styling when manipulating DOM elements. But after checking devtools, I learned that styles applied using element.style are added as inline styles, not through CSS classes.