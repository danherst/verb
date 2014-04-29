Update Verb's `runner` metadata with info about the tool currently running Verb, such as [grunt-verb][grunt], [gulp-verb][gulp], [verb-cli][cli], or a custom runner.

Verb exposes certain runner metadata such as `runner.name` and `runner.url` so that it can be used in templates.

Usage:

```js
var verb = require('verb');
verb.runner = {
  name: 'Verb',
  url: 'https://github.com/assemble/verb'
};
```

used with this template

```markdown
_This file was generated by [{%%= runner.name %}]({%%= runner.url %}) on {%%= date() %}._
```

would render to:

```markdown
_This file was generated by [verb](https://github.com/assemble/verb) on 4/16/2014._
```

e.g.

_This file was generated by [verb](https://github.com/assemble/verb) on 4/16/2014._


[cli]: https://github.com/assemble/verb-cli "verb-cli: the command line interface for Verb."
[grunt]: https://github.com/assemble/grunt-verb "grunt-verb: the Grunt plugin for Verb."
[gulp]: https://github.com/assemble/gulp-verb "gulp-verb: the gulp plugin for Verb."