# approve-pull-request-action

A GitHub Action for approving pull requests.

## Usage

```yaml
steps:
  - name: Approve Pull Request
    uses: pipe-technologies/approve-pull-request-action@master 
    with:
      github-token: ${{ secrets.GITHUB_TOKEN }}
      approve-label: bypass
```

## Related

- [find-pull-request-action](https://github.com/juliangruber/find-pull-request-action) &mdash; Find a Pull Request
- [merge-pull-request-action](https://github.com/juliangruber/merge-pull-request-action) &mdash; Merge a Pull Request
- [octokit-action](https://github.com/juliangruber/octokit-action) &mdash; Generic Octokit.js Action

## License

MIT
