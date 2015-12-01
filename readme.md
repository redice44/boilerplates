# My Personal Collection JS Stack Boilerplates

1. Install dependencies
  > npm install
2. (Optional) Update location file
3. Install selected boilerplate
  > follow instructions in each individual section

### Goal
- To create various JS Stack Boilerplates
- To have this collection accessible through a simple Gulp task
- Keep them up to date as my skills evolve

### Todo
- Figure out how to let gulp write to a separate file from CLI preferablly
  - Alternatively have a location file that gets required
- Add instructions
- Pull out this boilerplate into something that Gulp can generate

### Todo - Boilerplates
- Simple Express server with Mongoose
- Simple single page with jQuery, Bourbon, and Neat
- Simple single page with jQuery and Bootstrap
- Simple single page with jQuery and Foundation

## Minimal Express Server

### Install

> gulp generate:express-min

By default the boilerplate will be found _./../express-min/_. The location may 
be changed by updating the location.js file and changing the _express-min_ 
property.

### Opinions
- NodeJS
- Express
- Jade
- Sass