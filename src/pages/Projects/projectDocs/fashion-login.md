[Fashion Login Form](http://www.royledford.com/fashion-login-form/) is a study in applying
micro-animations to a login / sign up form. The overall goal was to both improve the user experience
and to help inform them of incorrect entries in the form controls.

Special attention was paid to the informational messages displayed on validation of the form controls.
A slight shake was added to the input and a color coordinated message displayed to help the user understand
the entered information required their attention.

The source code is available on [Github](https://github.com/royledford/fashion-login-form)

The study is built using react and react-router. A custom HOC was used to manage transitions between routed pages.
The HOC uses ReactCssTransitions to control enter and leave animations.


### Static View
<img src="/images/fashion-login/signup-email.jpg" alt="Example Login form" style="width: 600px">

### Enter Email
<video width="600"  controls autoplay loop>
  <source src="/images/fashion-login/email.mp4" type="video/mp4" >
</video>


### Incorrect Password
<video width="600"  controls autoplay loop>
  <source src="/images/fashion-login/password.mp4" type="video/mp4" >
</video>

