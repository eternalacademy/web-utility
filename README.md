# web-utility
This project is meant to provide web utility features like common helper methods/services to ease web development.

## Installation
Install the package via npm using following command -<br/>
`npm install @eternalacademy/web-utility --save`

## Components
Components are created as generic web components that can be consumed in any web project.

### eawu-iframe-root-link
This component is used to trigger iframe navigation event to root application.

#### Usage
Put this component inside iframe page.<br/>
`<eawu-iframe-root-link url='/test/url'>`<br/>
  `<button>Test Button</button>`<br/>
`</eawu-iframe-root-link>`<br/>

In Root Page use following code to subscribe for its click event -<br/>
`MessageHelper.receive('iframe-link', (data) => {`<br/>
    `console.log('iframe-link - ' + data.url);`<br/>
    `// Do whatever you want with the url recieved.`<br/>
  `});`



## Helpers
Helpers are some pre developed code can be used anywhere in your project, and serves their own purpose.

### Messsage Helper
TODO.
