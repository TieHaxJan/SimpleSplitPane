# Simple Split Pane Component

## Introduction
The `SimpleSplitPane` component is a React component designed to create a resizable split layout in your application. This component allows for both horizontal and vertical orientations and provides a dynamic way to divide your UI into two separate panels.

## Features
- **Orientation:** Can be set to either 'horizontal' or 'vertical'.
- **Initial Split:** Customizable initial split percentage.
- **Resizable:** Users can adjust the size of each panel.

## Installation
To use the `SimpleSplitPane` component, first, ensure you have React and its dependencies set up in your project. Then, include the `splitPane.css` in your project for the required styling.

## Usage
1. **Import the Component:**
   ```javascript
   import SimpleSplitPane from 'path-to/SimpleSplitPane';
   ```

2. **Implement the Component:**
   ```jsx
   <SimpleSplitPane orientation="horizontal" initialSplit={50}>
     <div>Panel 1 Content</div>
     <div>Panel 2 Content</div>
   </SimpleSplitPane>
   ```

## Props
- **children:** An array of two React elements to display in each pane.
- **orientation (optional):** 'horizontal' or 'vertical' (default is 'horizontal').
- **initialSplit (optional):** Initial size of the first panel as a percentage (default is 50).

## Requirements
- The component requires exactly two children elements.
- The `orientation` prop must be either 'horizontal' or 'vertical'.
- The `initialSplit` prop must be a number between 0 and 100.

## Error Handling
- Throws an error if more or less than two children are provided.
- Throws an error if an invalid orientation is provided.
- Throws an error if the initial split value is outside the 0-100 range.

## Customization
- The styling can be customized via `splitPane.css`.
- The behavior can be modified by adjusting the component code.