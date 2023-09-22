# typescript-sample-programs

## Resolve issues with includes array method

- This `"lib": ["es2016", "dom"],` should be added in `tsconfig.json` file because `includes()` method is supported in ECMAScript2016 (ES7)
- Make sure that tsconfig.json file is in same directory as your `.ts` file