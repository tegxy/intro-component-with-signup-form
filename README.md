# Frontend Mentor - Intro component with sign up form

![Design preview for the Intro component with sign up form coding challenge](preview.jpg)

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

#### What I learnt

- you can use css without adding media query and it would still be responsive
  example:
  <style>
    ...
    width: min(56rem, 50%);
    ...
  </style>
- how to select multiple classes using querySelectorAll
- how to use .forEach() function to loop
- understanding DOM manipulation using .forEach(), .toggle(), .add(), .remove().
- got a little more understanding about if else loops.
<script>
  if(){}
     else if (input.name === "email") {
      if (content === "" || !emailPattern.test(content)) {}}
</script>
- how to create reusable functions to avoid repeating codes.

##### Useful resources

- Free code camp - https://www.freecodecamp.org/learn/
- Udemy - https://www.udemy.com/course-dashboard-redirect/?course_id=764164 -

###### Author

- Website - Tega Lucky-Fiakpa (https://heisenberg-signup-form.netlify.app/)
- Frontend Mentor - @tegxy(https://www.frontendmentor.io/profile/tegxy)
- Twitter - @tegxy(https://www.twitter.com/tegxy)

###### Acknowledgments

- KFC
- Victor Adeyemo
