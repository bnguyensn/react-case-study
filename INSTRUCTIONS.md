# React Case Study - Instructions

*Note: you can view the formatted version of this on [GitHub](https://github.com/bnguyensn/react-case-study/blob/master/INSTRUCTIONS.md).*

## Packages

- Apart from the latest React library, the package [`clsx`](https://www.npmjs.com/package/clsx) is installed to help with manipulating CSS classes. However, you're free to use whatever method you're familiar with e.g. string template or some other packages.
- You shouldn't need to install further external packages for the exercises. However, feel free to discuss with the interviewer should you want to use something extra.

## Exercise #1. Light Switch

Your task is to create a button ("light switch") that behaves like the .gif
below:

![Light switch](light-switch.gif)

### Details

- The light switch starts out black
- When clicked, the light switch should become white
- When clicked again, the light switch should become black again

## Exercise #2. Like Button

Your task is to create a "Like" button that behaves like the .gif
below:

![Like button](like-button.gif)

### Details

- The button should have the "like-button" CSS class.
- The like count should start at 100.
- When the button is clicked:
  - The like count should increase by 1 (i.e. to 101).
  - The like button should have the CSS class "liked" in addition to having the CSS class "like-button".
- When the button is clicked again:
  - The button should revert to its original state. In essence, the like count should be 100 and the only CSS class should be "like-button".

## Exercise #3. Color Box

Your task is to create a color box that changes color on click like the .gif
below:

![Color box](color-box.gif)

### Details

- The box component should have the "color-box" CSS class.
- When the box component is clicked, it should fetch a new random color from GitHub's color API. API details are provided in `src/components/color-box/ColorBox.js`.
- The box's background color should change to this new random color once it has been successfully fetched.
- Stylings are provided in `src/components/color-box/color-box.css`. No additional stylings are required.

## Exercise #4. Timer

Your task is to create a timer like the .gif below:

![Timer](timer.gif)

### Details

There are 4 components in play:

- A "progress bar", displaying how much time has elapsed. The progress bar stops growing when the timer finishes.
- An elapsed time counter, showing how much time has elapsed. The counter stops when the timer finishes.
- A slider that controls how long the timer should run before it finishes.
- A reset button that resets the elapsed time back to 0 when clicked. If the timer has stopped when the reset button is clicked, it should now run again.

When updating the progress bar or elapsed time counter, use a 60FPS frame rate.
