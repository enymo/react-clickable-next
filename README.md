# React Clickable for use with Next.js

Simple React Component providing a unified API for working with Buttons, Anchors and Next.js Links.

## Installation
The library may be installed from npm using
```bash
npm i @enymo/react-clickable-next
```

## Features
* Write custom, clickable UI Elements that can be used both as buttons and hyperlinks without additional coding
* Create cleaner applications that adhere to common guidelines by having it pick the correct html tag for a given situation automatically

## Usage
Note: This library is intended to be used in conjunction with Next.js, incorporating their ```<Link />``` component so that clickables may be used to navigate between routes.

The component supports the following props:
| Prop      | Description                                                                                                                                                                                                                                                                                                              |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| className | Additional class(es) for the component. Note that a disabled Clickable will always gain the ```disabled``` class in addition to those specified with this prop.                                                                                                                                                          |
| style     | A custom style may be specified for the component                                                                                                                                                                                                                                                                        |
| to        | The target when using the Clickable as a hyperlink. Passing this prop will cause the Clickable to render a ```<Link>``` or ```<a>``` tag, even if onClick is specified as well.                                                                                                                                          |
| linkType  | May be ```normal```, ```no-next``` or ```new-tab```. Default is ```normal```.  ```no-next``` will disable the use of Next.js for the clickable and render an ```<a>``` tag instead of a ```<Link>``` if applicable. ```new-tab``` will open the link in a new tab, which also disabled the use of Next.js' Link. |
| disabled  | Disables the clickable. A button will be set to disabled via prop. Since ```<a>``` tags cannot be disabled without some rather sketchy meddling with event propagation, the clickable will render a ```<div>``` instead of an Anchor in this case. The ```disabled``` class will be added regardless of type.            |
| submit    | If the clickable renders a button, this prop sets the button type from 'button' to 'submit'. Otherwise, this prop has no effect.                                                                                                                                                                                         |