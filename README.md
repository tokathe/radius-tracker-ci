# radius-tracker-ci
Validating setting up radius tracker to periodically run and track multiple repositories. The goal is to be able to cache historical runs so that subsequent runs are much faster to process.

Github Actions provide a caching mechanism as describe in the [Caching Documentation](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows). This may be sufficient for a small set of libraries.

## Open Questions

- What are if any are the limitations here e.g. storage limitations.
