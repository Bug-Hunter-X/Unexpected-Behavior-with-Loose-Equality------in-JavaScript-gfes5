# JavaScript Loose Equality Bug

This repository demonstrates a common JavaScript bug involving loose equality (`==`) and its unexpected behavior when comparing `null`, `undefined`, and other data types.

## Bug Description
The `foo` function uses loose equality (`==`) to check for null values. This can lead to unexpected results when comparing values of different types, especially with null and undefined.  The issue stems from JavaScript's type coercion during loose equality comparisons.

## Bug Reproduction
1. Clone this repository.
2. Run `bug.js`.
3. Observe the unexpected output for the `NaN` input.