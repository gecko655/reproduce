# reproduce

## problem
How can I create the string `"./bazel-out/darwin-fastbuild/bin/js/foo.js ./bazel-out/darwin-fastbuild/bin/js/bar.js"` from `$(execpaths js_library)` ( `"bazel-out/darwin-fastbuild/bin/js/foo.js bazel-out/darwin-fastbuild/bin/js/bar.js"` ) to pass them to the webpack cli?

Passing `$(execpaths :rule_name)` to `webpack()` rule will cause an error like:
> Did you mean './bazel-out/darwin-fastbuild/bin/js/bar.js'

## Sample build output

```bash
$ bazelisk version
Bazelisk version: development
Build label: 4.1.0
Build target: bazel-out/darwin-opt/bin/src/main/java/com/google/devtools/build/lib/bazel/BazelServer_deploy.jar
Build time: Fri May 21 11:16:55 2021 (1621595815)
Build timestamp: 1621595815
Build timestamp as int: 1621595815

$ bazelisk build //:webpack
INFO: Analyzed target //:webpack (1 packages loaded, 5 targets configured).
INFO: Found 1 target...
ERROR: /Users/***********/git/reproduce/BUILD.bazel:12:8: Action dist failed: (Exit 1): webpack-cli.sh failed: error executing command bazel-out/host/bin/external/npm/webpack-cli/bin/webpack-cli.sh --entry bazel-out/darwin-fastbuild/bin/js/bar.js bazel-out/darwin-fastbuild/bin/js/foo.js --config ./webpack.config.js -o ... (remaining 3 argument(s) skipped)

Use --sandbox_debug to see verbose messages from the sandbox
assets by status 0 bytes [cached] 1 asset

ERROR in main
Module not found: Error: Can't resolve 'bazel-out/darwin-fastbuild/bin/js/bar.js' in '/private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/darwin-sandbox/7/execroot/__main__'
Did you mean './bazel-out/darwin-fastbuild/bin/js/bar.js'?
Requests that should resolve in the current directory need to start with './'.
Requests that start with a name are treated as module requests and resolve within module directories (node_modules).
If changing the source code is not an option there is also a resolve options called 'preferRelative' which tries to resolve these kind of requests in the current directory too.
resolve 'bazel-out/darwin-fastbuild/bin/js/bar.js' in '/private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/darwin-sandbox/7/execroot/__main__'
  Parsed request is a module
  No description file found in /private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/darwin-sandbox/7/execroot/__main__ or above
  resolve as module
    looking for modules in /private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/darwin-sandbox/7/execroot/__main__/node_modules
      /private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/darwin-sandbox/7/execroot/__main__/node_modules/bazel-out doesn't exist
    /private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/darwin-sandbox/7/execroot/node_modules doesn't exist or is not a directory
    /private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/darwin-sandbox/7/node_modules doesn't exist or is not a directory
    /private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/darwin-sandbox/node_modules doesn't exist or is not a directory
    /private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/node_modules doesn't exist or is not a directory
    /private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/node_modules doesn't exist or is not a directory
    /private/var/tmp/_bazel_***********/node_modules doesn't exist or is not a directory
    /private/var/tmp/node_modules doesn't exist or is not a directory
    /private/var/node_modules doesn't exist or is not a directory
    /private/node_modules doesn't exist or is not a directory
    /node_modules doesn't exist or is not a directory

ERROR in main
Module not found: Error: Can't resolve 'bazel-out/darwin-fastbuild/bin/js/foo.js' in '/private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/darwin-sandbox/7/execroot/__main__'
Did you mean './bazel-out/darwin-fastbuild/bin/js/foo.js'?
Requests that should resolve in the current directory need to start with './'.
Requests that start with a name are treated as module requests and resolve within module directories (node_modules).
If changing the source code is not an option there is also a resolve options called 'preferRelative' which tries to resolve these kind of requests in the current directory too.
resolve 'bazel-out/darwin-fastbuild/bin/js/foo.js' in '/private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/darwin-sandbox/7/execroot/__main__'
  Parsed request is a module
  No description file found in /private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/darwin-sandbox/7/execroot/__main__ or above
  resolve as module
    looking for modules in /private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/darwin-sandbox/7/execroot/__main__/node_modules
      /private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/darwin-sandbox/7/execroot/__main__/node_modules/bazel-out doesn't exist
    /private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/darwin-sandbox/7/execroot/node_modules doesn't exist or is not a directory
    /private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/darwin-sandbox/7/node_modules doesn't exist or is not a directory
    /private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/darwin-sandbox/node_modules doesn't exist or is not a directory
    /private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/sandbox/node_modules doesn't exist or is not a directory
    /private/var/tmp/_bazel_***********/3971ad369dc6b54229d6cf4c7f66194c/node_modules doesn't exist or is not a directory
    /private/var/tmp/_bazel_***********/node_modules doesn't exist or is not a directory
    /private/var/tmp/node_modules doesn't exist or is not a directory
    /private/var/node_modules doesn't exist or is not a directory
    /private/node_modules doesn't exist or is not a directory
    /node_modules doesn't exist or is not a directory

webpack 5.44.0 compiled with 2 errors in 141 ms
Target //:webpack failed to build
Use --verbose_failures to see the command lines of failed build steps.
INFO: Elapsed time: 9.242s, Critical Path: 8.81s
INFO: 2 processes: 2 internal.
FAILED: Build did NOT complete successfully
```
