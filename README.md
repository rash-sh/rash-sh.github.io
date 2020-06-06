# Home

The homepage is `index.html` in the root.

## Docs

Docs live in `/docs/{ project }/{ version }`.  Simply copy a directory full of markdown files with front matter
and place them in the relevant project / version.  After the docs are copied, a build is required for the frontend
to pick up the new version for cross linking between versions of the same project.

## Build

To run the build you must be running a docker host.  Run `make build` which will build a container
with all required dependencies and then run the script to preprocess the project versions and store them statically.

## Publish

Simply commit your changes and do a git push.  There is also `make publish` which integrates with the rash `Makefile`
nicely, and is meant to be run in conjunction with Jenkins CI -- and expects environment variable `DOCS_VERSION`.

## Test

To test your changes to the Rash website locally before committing to the Rash repo, you can generate the docs locally and start a local web server.

To generate the docs:
```bash
# Remove the old master docs and copy your updated docs from your rash repo
rm -fr docs/rash/master
mkdir docs/rash/master
cp -r ../rash/Documentation/* docs/rash/master/

# Starts a live-reloading server that serves the docs at [http://0.0.0.0:4000/docs/rash/master](http://0.0.0.0:4000/docs/rash/master). This requires Docker installed on your machine.
make run
```

When you are done, revert the changes to the repo:
```bash
rm docs/rash/master
git checkout -- docs/rash/master
```

## Github Pages & Jekyll

To avoid additional pre-processing work, we push a project to `rash-sh.github.io` which recognizes the project
is a Jekyll project and processes the static site after the code is pushed.  While this saves us time
processing the Jekyll site manually, it does limit our ability to run custom code such as custom Jekyll
plugins.  Github only allows for [public popular whitelisted gems](https://help.github.com/articles/adding-jekyll-plugins-to-a-github-pages-site/).

Improvements in the future may include setting up our own build step to process the static site and test before pushing.
