$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", (event) => {
    event.preventDefault();
    const email = emailInput.val().trim();
    const password = passwordInput.val().trim();

    if (email || password) {
      console.error(
        "You must have an email and/or password in order to sign up."
      );
    }
    // If we have an email and password, run the signUpUser function
    signUp(email, password)
      .then((res) => {
        window.location.replace("/members");
      })
      .catch((err) => {
        const { status, responseText } = err;

        if (responseText.errors[0].message === "users.email must be unique") {
          return handleLoginErr("Email must be unique.");
        }

        console.error("Sign Up Error", {
          status,
          message: responseText.errors[0].message,
        });
      });
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors

  // async await example
  // const signUp = async (email, password) => {
  //   try {
  //     const signedUp = await $.post("/api/signup", {
  //       email: email,
  //       password,
  //     });
  //   } catch (err) {
  //     console.error("error: ", error);
  //   }
  // };

  // promise example
  const signUp = (email, password) => {
    return new Promise((resolve, reject) => {
      $.post("/api/signup", {
        email: email,
        password: password,
      })
        .then((res) => {
          const { email, id } = res;

          resolve({
            email,
            id,
          });
        })
        .catch((err) => {
          const { status, responseText } = err;

          reject({
            status,
            responseText: JSON.parse(responseText),
          });
        });
    });
  };

  // function signUpUser(email, password) {
  //   $.post("/api/signup", {
  //     email: email,
  //     password: password,
  //   })
  //     .then(() => {
  //       window.location.replace("/members");
  //       // If there's an error, handle it by throwing up a bootstrap alert
  //     })
  //     .catch((err) => handleLoginErr(err));
  // }

  function handleLoginErr(err) {
    $("#alert .msg").text(err);

    // $("#alert .msg").text(err.responseText.errors[0].message);
    $("#alert").fadeIn(500);
  }
});
