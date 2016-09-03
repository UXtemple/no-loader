# no loader

Because we shouldn't punish new browsers with old code.
Punish old browsers instead :).

To use it, add a script tag like this:

```
<script id=no-loader
  data-legacy=/path/to/non-es6-version.js
  data-timeout=60000
  src=https://unpkg.com/no-loader@latest/index.min.js></script>
```

Then insert your app's script tag pointing to the modern version of your code.
```
<script src=/path/to/es6-version.js></script>
```

See `playground` for an example.

License MIT.
With <3 by UXtemple.
