# Swiping Header
## Install

``` 
npm install swiping-header@latest 
```

... to Install the latest version of the Swiping Header component library

## Usage
### Swiping Header

Import the ```<SwipingHeader />``` component and put it at the root of your page.

```
import SwipingHeader from "..."

const header = () =>{
  return <div />
}

const body = () =>{
  return <div />
}

export const MyPage = () => {
  return (
    <body> {/** make sure that this element has the whole page as its width and is `position: "static" or "relative"` */}
      <SwipingHeader headercomponent={header} bodycomponent={body} />
    </body>
  )
}
```
### scrollToId

Since the internal logic breaks the ```<a href="#someid">``` navigational system, the library also includes a "scrollToId()" function:
```
export const scrollToId = (elementId: string, smooth?: boolean) => {...}
```
```
<a onClick={() => scrollToId("someId", true)} >Scroll to ID smoothly</a>
<a onClick={() => scrollToId("someId")} >Scroll to ID instantly</a>

<button onClick={() => scrollToId("someId", true)} >Scroll to ID </button>
<button onClick={() => scrollToId("someId")} >Scroll to ID instantly</button>
```

## Content

The Library contains a <SwipingHeader ... /> custom component that takes in a body and a header React component as its arguments:
```
export interface SwipingHeaderProps {
  headercomponent: ReactNode;
  bodycomponent: ReactNode;
}
```
```
<SwipingHeader 
  headercomponent={<div>I am a Header Component</div>} 
  bodycomponent={<div>I am a Body Component</div>}
/>
```
<br>

Since the internal logic breaks the ```<a href="#someid">``` navigational system the library also includes a "scrollToId()" function:
```
export const scrollToId = (elementId: string, smooth?: boolean) => {...}
```
```
<a onClick={() => scrollToId("someId", true)} >Scroll to ID </a>
<button onClick={() => scrollToId("someId", true)} >Scroll to ID </button>
```
