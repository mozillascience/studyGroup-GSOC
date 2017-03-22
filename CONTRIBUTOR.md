# Contribution Guidelines

## Reporting issues

- **Search for existing issues.** Please check to see if someone else has reported the same issue.
- **Share as much information as possible.** Include operating system and version, browser and version. Also, include steps to reproduce the bug.

There is an [ISSUE TEMPLATE](ISSUE_TEMPLATE.md) in the repo, which should help you organize your thoughts, it will pre-populate as a guide when you create a new issue.

## Project Setup

Refer to the [README](README.md).

## Code Style

### Code Editor
If working in Javascript, please use an editor with support for [ESLint](http://eslint.org/) and [EditorConfig](http://editorconfig.org/). If working in HTML, consider checking your code with the [Nu Validator](https://validator.w3.org/nu/).

### JavaScript

See [Mozilla Foundation JavaScript Style Guide](https://www.npmjs.com/package/mofo-style)

This project is currently _in transition_ to fully support the latest
[mofo-style](https://www.npmjs.com/package/mofo-style) version. 

#### Variable Naming

- `lowerCamelCase` General variables
- `UpperCamelCase` Constructor functions
- Use semantic and descriptive variables names (e.g. `colors` *not* `clrs` or `c`). Avoid abbreviations except in cases of industry wide usage (e.g. `AJAX` and `JSON`).

### HTML

- 2 space indentation
- Class names use hypenated case (e.g. `my-class-name`)

### LESS / CSS

- 2 space indentation
- Always a space after a property's colon (e.g. `display: block;` *not* `display:block;`)
- End all lines with a semi-colon
- For multiple, comma-separated selectors, place each selector on it's own line

## Testing

Any patch or pull request should be manually tested in as many of our supported browsers as possible. Access to all devices is rare, so just aim for the best coverage possible. At a minimum please test in all available desktop browsers.

## Pull requests

- Try not to pollute your pull request with unintended changes – keep them simple and small. If possible, squash your commits.
- Try to share which browsers and devices your code has been tested in before submitting a pull request.
- If your PR resolves an issue, include **closes #ISSUE_NUMBER** in your commit message (or a [synonym](https://help.github.com/articles/closing-issues-via-commit-messages)).
- Review
    - If your PR is ready for review, another contributor will be assigned to review your PR within 1 business day
    - The reviewer will comment on the PR with a final r+ or r-, along with inline comments on the code (if any)
        - r-: address the comments left by the reviewer. Once you're ready to continue the review, ping the reviewer in a comment.
        - r+: You code will be merged to `master` on whichever repo it references (as there are many repos in the Study Group Project)
- Kudos
    - Provide your twitter handle for a public "thank you" for your PR on social media :)