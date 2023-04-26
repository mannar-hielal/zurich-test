# Code Challenge - Form Component

#### 1. Create a simple registration form with following fields:

- Username (required)
- Password (required)
- Confirm password (required)
- Email (required)
- Phone number
- Newsletter subscription (checkbox)
- Submit button

#### 2. Send your form once submit button is clicked as an asynchronous POST request to URL:

[https://5e8c6579e61fbd00164aebec.mockapi.io/register](https://5e8c6579e61fbd00164aebec.mockapi.io/register) with the following structure:

    {
      "username": "<username>",
      "password": "<password>",
      "email": "<email>",
      "phone": "<phone>",
      "newsletter": <newsletter>
    }

#### 3. Show the response in the DOM

- Use vanilla JS
- Use standard HTML form validation

#### 4. BONUS TASK: Style the form according to this screenshot

[screenshot URL](https://i.imgur.com/CGzuOmK.png)
![form-preview](https://i.imgur.com/CGzuOmK.png)
