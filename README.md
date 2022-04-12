<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 

# BarterLand

* *Date Created*: 12 APR 2022
* *Last Modification Date*: 12 APR 2022
* *GitLab  Front-End Application URL*: https://git.cs.dal.ca/vrajendran/group_16csci5709/-/tree/master
* *GitLab  Back-End Application URL*: https://git.cs.dal.ca/vrajendran/group_16csci5709_backend/-/tree/master
* *Deployment URL Back-End*: https://barterland-backend.herokuapp.com/
* *Deployment URL Front-End*: https://barterland.herokuapp.com/

## Authors
* [Vikram Babu Rajendran](vk712598@dal.ca) - *(Developer)*
* [Sowjanya Mani](sw891064@dal.ca) - *(Developer)*
* [Hardik Mesvania](hr860663@dal.ca) - *(Developer)*
* [Hirva Patel](hirva.patel@dal.ca) - *(Developer)*
* [Shivam Barot](shivam@dal.ca) - *(Developer)*

#### Features and Tasks

###### User Profile Management [Author : Sowjanya Mani]
* Login
* Register
* Forgot Password
* User Profile update - Email, Password, Name and Address.
* Delete User Account
* Logout

###### Search Feature [Author : Sowjanya Mani]
* Search for Ads based on the name, title or location keywords.

######  Deal Management [Author : Vikram Babu Rajendran]
* Propose a deal.
* Update a deal.
* Delete a deal.

######  Home Page [Author : Vikram Babu Rajendran]
* Title Section
* Menu Section
* Footer Section
* List all Ads.

###### My Deals [Author : Vikram Babu Rajendran]
* List all the deals.

######  MyAdvertisement [Author : Hirva Patel]
The advertisements added by the user is displayed in the MyAds web page. The ads webpage enables the user to open any particular advertisement and perform edit, delete operations on their advertisement.
* View Advertisements
* View any Advertisement
* Edit Advertisement
* Delete Advertisement

###### Feedbacks [Author : Hirva Patel]
The feedback webpage is created to list all the feedbacks added by the user. The user can update or delete the feedback if they wish the detail needs to be modified.
* View any Feedbacks
* Edit Feedback
* Delete Feedback

###### Admin [Author : Hardik Mesvania]
When user login to the application using the Admin credentials, home page will show a button "Admin" which will redirect to the admin module of the application.
* user profile update,register and delete.
* Ads mangement
* Shows new user widgets
* Shows recent adds widgets
* shows graph of location specific deals
* shows total number of ads and users in the application 

##### Wishlist
* Add to Wishist
You can click on add to wishlist button below the product and the item will be added to your wishlist.
* Displaying all the items of the Wishlist 
You can click on the wishlist button where you can see your wishlisted products.
* Remove from Wishlist 
In the wishlist section, you can click on remove from wishlist button below any wishlisted item and the item will be removed from your wishlist.

```
The application can be tested by either registering yourself as a user or with the credentials given below. This is one of the registerd user in the application.
Login Credentials:

User Login:
    Email    :  karol@123
    Password :  Password@123

Admin Login:
    Email: admin@gmail.com
    Password: Admin@123

```
#### Files and thier Authors
    ===========================================================================================
            Folder             ||      File Name                ||      Author               ||
    ===========================================================================================
        src/home/js             ||  HomePage.js                  ||  Vikram Babu Rajendran    ||
        src/home/js             ||  TitleSection.js              ||  Vikram Babu Rajendran    ||
        src/home/js             ||  MenuSection.js               ||  Vikram Babu Rajendran    ||
        src/home/js             ||  FooterSection.js             ||  Vikram Babu Rajendran    ||
        src/home/js             ||  ComingSoonPage.js            ||  Vikram Babu Rajendran    ||
                                ||                               ||                           || 
        src/home/css            ||  HomePage.css                 ||  Vikram Babu Rajendran    ||
        src/home/css            ||  ComingSoon.css               ||  Vikram Babu Rajendran    ||
                                ||                               ||                           || 
        src/individual_ad/js    ||  IndividualAdPage.js          ||  Vikram Babu Rajendran    ||
        src/individual_ad/js    ||  firebase.js   	       ||  Vikram Babu Rajendran    ||
        src/individual_ad/css   ||  IndividualAdPage.css         ||  Vikram Babu Rajendran    ||
                                ||                               ||                           ||
        src/deals/js            ||   MyDeals.js                  ||  Vikram Babu Rajendran    ||
        src/deals/css           ||   MyDeals.css                 ||  Vikram Babu Rajendran    ||
                                ||                               ||                           ||
        src/Authentication/js   ||   LoginPage.js                ||   Sowjanya Mani           ||
        src/Authentication/js   ||   RegisterForm.js             ||   Sowjanya Mani           ||
        src/Authentication/js   ||   EmailValidation.js          ||   Sowjanya Mani           ||
        src/Authentication/js   ||   ForgotPassword.js           ||   Sowjanya Mani           ||
        src/Authentication/js   ||   UserUpdate.js               ||   Sowjanya Mani           ||
        src/Authentication/js   ||   EmailUpdate.js              ||   Sowjanya Mani           || 
        src/Authentication/js   ||   AddressUpdate.js            ||   Sowjanya Mani           ||
        src/Authentication/js   ||   PasswordUpdate.js           ||   Sowjanya Mani           ||
        src/Authentication/js   ||   NameUpdate.js               ||   Sowjanya Mani           ||  
        src/Authentication/js   ||   Logout.js                   ||   Sowjanya Mani           ||                  
                                ||                               ||                           ||
        src/Autentication/css   ||   LoginPage.css               ||   Sowjanya Mani           ||
        src/Autentication/css   ||   RegisterForm.css            ||   Sowjanya Mani           ||
        src/Autentication/css   ||   UserUpdate.css              ||   Sowjanya Mani           ||
                                ||                               ||                           ||
        src/Admin/components    ||  charts/Chart.js              ||   Hardik Mesvania         ||
        src/Admin/components    ||  charts/Chart.css             ||   Hardik Mesvania	     ||
        src/Admin/components    ||  featuredInfo/FeaturedInfo.css||   Hardik Mesvania	     ||
        src/Admin/components    ||  featuredInfo/FeaturedInfo.js ||   Hardik Mesvania	     ||
        src/Admin/components    ||  Sidebar/Sidebar.js           ||   Hardik Mesvania	     ||
        src/Admin/components    ||  Sidebar/Sidebar.css          ||   Hardik Mesvania	     ||
        src/Admin/components    ||  Titlebar/Titlebar.css        ||   Hardik Mesvania 	     ||
        src/Admin/components    ||  Titlebar/Titlebar.js         ||   Hardik Mesvania 	     ||
        src/Admin/components    ||  widgetslg/widgetslg.js       ||   Hardik Mesvania 	     || 
        src/Admin/components    ||  widgetslg/widgetslg.css      ||   Hardik Mesvania	     ||
        src/Admin/components    ||  widgetssm/widgetslg.css      ||   Hardik Mesvania	     ||
        src/Admin/components    ||  widgetssm/widgetssm.js       ||   Hardik Mesvania	     ||
                                ||                               ||                  	     ||    
        src/Admin/pages         ||  user/User.js                 ||   Hardik Mesvania 	     ||
        src/Admin/pages         ||  user/user.css                ||   Hardik Mesvania 	     ||
        src/Admin/pages         ||  userList/userList.css        ||   Hardik Mesvania	     ||
        src/Admin/pages         ||  userList/UserList.js         ||   Hardik Mesvania 	     ||
        src/Admin/pages         ||  home.js                      ||   Hardik Mesvania 	     ||
        src/Admin/pages         ||  home.css                     ||   Hardik Mesvania 	     ||
        src/feedback/js         ||  PostAds.js                   ||   Hardik Mesvania         ||
        src/feedback/css        ||  PostAds.css                  ||   Hardik Mesvania         ||
                                ||                               ||                           ||
        src/myAdvertisements/js ||  Ad.js                        ||   Hirva Patel             ||
        src/myAdvertisements/js ||  MyAdEdit.js                  ||   Hirva Patel             ||
        src/myAdvertisements/js ||  MyAdsHome.js                 ||   Hirva Patel             ||
        src/myAdvertisements/js ||  MyIndividualAd.js            ||   Hirva Patel             ||
                                ||                               ||                           ||
        src/myAdvertisements/css||  MyAds.css                    ||   Hirva Patel             ||
        src/myAdvertisements/css||  MyIndividualAd.css           ||   Hirva Patel             ||
        src/myAdvertisements/css||  MyIndividualAdEdit.css       ||   Hirva Patel             ||
        src/feedback/js         ||  Feedback.js		             ||   Hirva Patel	          ||
        src/feedback/js	     ||  FeedbackEdit.js	             ||   Hirva Patel	          ||
        src/feedback/js	     ||  ListFeedbacks.js	             ||   Hirva Patel	          ||
        src/feedback/js	     ||  NewFeedback.js	                 ||   Hirva Patel	          ||
        src/feedback/css	     ||  Feedback.css		         ||   Hirva Patel	          ||
        src/feedback/css	     ||  FeedbackEdit.css	         ||   Hirva Patel	          ||
                                ||                               ||                           ||
         src/Wishlist           ||  Wishlist.js                  ||   Shivam Barot            ||
         src/Wishlist           ||  WishlistProducts.js          ||   Shivam Barot            ||
         src/Wishlist/css       ||  WishlistProducts.css         ||   Shivam Barot            ||
         src/home/js            ||  HomePage.js                  ||   Shivam Barot            ||
                                ||  (Only handleclickadd())      ||                           ||
                                ||                               ||                           ||
          src/Blog/js           ||  AddBlog.js                   ||   Shivam Barot            ||        
          src/Blog/js           ||  AddBlogForm.js               ||   Shivam Barot            ||            
          src/Blog/js           ||  Blog.js                      ||   Shivam Barot            ||     
          src/Blog/js           ||  ShowArticle.js               ||   Shivam Barot            ||            
          src/Blog/js           ||  ShowSpecificArticle.js       ||   Shivam Barot            ||                    
          src/Blog/css          ||  AddBlogForm.css              ||   Shivam Barot            ||             
          src/Blog/css          ||  ViewBlog.css                 ||   Shivam Barot            ||

## Built With

* [React](https://reactjs.org/) - Javascript Library (Front End)
* [Heroku](https://www.heroku.com/) - Deployment
* [NodeJs](https://nodejs.org/en/) - JavaScript Runtime Environment (Back End)
* [MongoDB](https://www.mongodb.com/) - Database
* [ExpressJs](https://www.mongodb.com/) - Web Application Framework for NodeJS

## Code Integration and Working flow of each task in the feature.

##### Login page: 
Once the user logins into the application, the backend api retuns the userid, username, email and role along with the success response. These values are set inside a Reactsession variable with a set method which will be used by other features in the application using the reactsession get method. While developing other features, it is important to know which user is currently using the application. 
##### Register page: 
Once the user is registered into application, they are redirected to the login page of the application.
##### EmailValidation: 
Once the user clicks on the forgot password, the user will be asked to provide the email id they used during the time of registration, which will be evaluated and the message user verifired will be shown to the user and they will be redirected to the Forgot password page of the application.
##### ForgotPassword:
Once the user is verified, they will be shown with the security question they choose during the time of registration. The user will be asked to provide the security answer and the new password. The security password will be evaluated against the value present in the database and the user will be not be able to give the old password as the new password. Once the password is updated, the user will be redirected to the login page of the application.
##### UserUpdate:
Once the user clicks on the profile they will be able to see their details and are provided with an option to update the information such as name, email id, password and address. In addition, the user is also provided with an option to delete the user account. If the the user clicks on delete user account, the user account will be deleted and they will be redirected to the home page of the application.
##### Logout:
Once the user clicks on the logout, all the session values will be cleared and the user will be redirected to the homepage of the application.
##### Search:
Once the user search for an item, all the related Ads  will be displayed to the user.

##### MyAdvertisement and Feedback
The component is integrated with the template and the home page. From the main menu of the home page MyAds page is redirected. The webpage is developed using the template for the header manu page and the footer component. The user session management is integrated with the local storage where the user database is stored. If and viewer of the website opens the MyAds page without logging in, the user will be asked to login first and they will have an option to redirect to the login or the home page.

##### HomePage
The following components are developed to be reused in all the pages, these can be reused as follows :
```
            <TitleSection />
            <MenuSection />
             .... // Add your main page components here
            <FooterSection />
```
The title section component will return a component which will render the title section of the application with various links. It uses the user data to do conditional rendering, i.e., whether to show Login and Register or to show User Profile Link and Logout links.
The Menu section component will return a component which will render the menu section which will have various links suchs as, My Deals, My Ads, etc..
The Footer Section component will return a component which will render the footer section which will have various links such as About Us, Contact Us, etc..

```
<MainSectionGenerator ads={ads} userData={data} />
```
Pass the list of Ads as input to the above mentioned component, and it will render multiple rows with each row containing three Ads. Use this when developing features such as Search, to pass the list of Ads. Refer the API References section to find the structure of the list to pass.

##### Wishlist
To integrate this feature: First we have to add the add to wishlist button into all products of the home page. Then we have to set route for the wishlist button to view the wishlisted products. Then we have to do the session management in the wishlist page so we can know which user is logged in the wishlist page. At last, we need the same database setup so we can update the data of each user in whole application.

## Image References

- https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fdynamic.brandcrowd.com%2Fasset%2Flogo%2F4d45d323-391a-4243-9fc1-7d4bf8305937%2Flogo-search-grid-desktop%3Fv%3D637649238610270000&imgrefurl=https%3A%2F%2Fwww.brandcrowd.com%2Fmaker%2Ftag%2Fbuy-and-sell&tbnid=6Sx_pe_sou3aiM&vet=1&docid=0mlvXcMx-LGHtM&w=278&h=222&source=sh%2Fx%2Fim
- https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fca%2Fshop%2Fbuy-iphone%2Fiphone-11%2F6.1-inch-display-64gb-black&psig=AOvVaw3IlypjfckVpIbRr-Q6aajQ&ust=1643983410913000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjI0svZ4_UCFQAAAAAdAAAAABAG
- https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.ca%2FMaster-Your-Focus-Practical-Chasing-ebook%2Fdp%2FB07Y364MTR&psig=AOvVaw0jBe-9gla0hL4UGIdLp-Oj&ust=1643981914626000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODYvoLU4_UCFQAAAAAdAAAAABAM
- https://cdn.shopify.com/s/files/1/2235/7925/products/Littmann-Classic-III-Stethoscope-Medical-Clinic-Supplies-MOBB-Grey-3M5621GR-2_740x.jpg?v=1638459276
- https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bestbuy.com%2Fsite%2Fdell-inspiron-7000-2-in-1-14-touch-screen-laptop-amd-ryzen-7-16gb-memory-512gb-solid-state-drive-blue%2F6458906.p%3FskuId%3D6458906&psig=AOvVaw0fpXXkq_q-o7JbYZI9favj&ust=1643986740654000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODb-bLn4_UCFQAAAAAdAAAAABAK
 
## Sources Used
##### Resources used for reading purpose to complete this assignment
*  https://www.w3schools.com/nodejs/nodejs_intro.asp
*  https://www.codecademy.com/learn/learn-node-js
*  https://axios-http.com/docs/intro
*  https://jasonwatmore.com/post/2021/06/25/axios-http-post-request-examples
*  https://reactjs.org/docs/hooks-reference.html
*  https://code.visualstudio.com/docs/nodejs/nodejs-tutorial
*  https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
*  https://www.youtube.com/watch?v=yKV1IGahXqA
*  https://create-react-app.dev/docs/adding-custom-environment-variables/
*  https://stackoverflow.com/questions/47476186/when-user-is-not-logged-in-redirect-to-login-reactjs
*  https://stackoverflow.com/questions/60688411/assign-local-storage-to-react-state-react-hooks
*  https://stackoverflow.com/questions/32682962/javascript-loop-through-array-backwards-with-foreach
*  https://reactjs.org/docs/forms.html
*  https://fonts.google.com/specimen/Rajdhani
*  https://stackoverflow.com/questions/41296668/reactjs-form-input-validation
*  https://www.npmjs.com/package/axios#installing
*  https://www.positronx.io/react-axios-tutorial-make-http-get-post-requests/
*  https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
*  https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
*  https://medium.com/geekculture/how-to-use-react-router-useparams-436851fd5ef6
*  https://v5.reactrouter.com/web/api/Hooks/useparams
*  https://www.w3schools.com/react/react_useeffect.asp
*  https://github.com/safak/youtube2022/tree/react-admin/src/components/chart.scss
*  https://github.com/safak/youtube2022/tree/react-admin/src/components/Chart.jsx
*  https://github.com/safak/youtube2022/tree/react-admin/src/components/featured.scss
*  https://github.com/safak/youtube2022/tree/react-admin/src/components/Featured.jsx
*  https://github.com/safak/youtube2022/tree/react-admin/src/components/Sidebar.jsx
*  https://github.com/safak/youtube2022/tree/react-admin/src/components/sidebar.scss
*  https://github.com/safak/youtube2022/tree/react-admin/src/pages/Single.jsx 

##### Resources from where code has been taken and modified
* https://stackoverflow.com/questions/42420531/what-is-the-best-way-to-manage-a-users-session-in-react
* https://stackoverflow.com/questions/21733847/react-jsx-selecting-selected-on-selected-select-option
* https://stackoverflow.com/questions/54743525/deleting-session-variables-after-the-user-logout-in-reactjs
* https://www.educative.io/edpresso/how-to-make-an-axios-post-request
* https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
* https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks
* https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
* https://thinkster.io/tutorials/mean-stack/creating-schemas-with-mongoose
* https://www.npmjs.com/package/uuid
* https://stackoverflow.com/questions/14588032/mongoose-password-hashing

#### LoginPage.js (Front-End)

```
ReactSession.setStoreType("localStorage");
ReactSession.set("user_id", response.data.user_id);

```

The code above was created by adapting the code in [StackOverFlow](https://stackoverflow.com/questions/42420531/what-is-the-best-way-to-manage-a-users-session-in-react) as shown below: 

```
ReactSession.set("username", "Bob");
ReactSession.get("username");  // Returns "Bob"

```

- The code in [StackOverFlow](https://stackoverflow.com/questions/42420531/what-is-the-best-way-to-manage-a-users-session-in-react) was implemented by Grizzthedj.
-  [StackOverFlow](https://stackoverflow.com/questions/42420531/what-is-the-best-way-to-manage-a-users-session-in-react)'s Code was used because I wanted to understand the usage of how session variables are set in react.
-  [StackOverFlow](https://stackoverflow.com/questions/42420531/what-is-the-best-way-to-manage-a-users-session-in-react)'s Code was modified by according to my need by setting the user id inside the session variable to use them at a later stage. 



#### RegisterForm.js (Front-End)

```
 <select id="securityquestion" className="selection" name="securityquestion" value ={securityquestion.value} onChange={handleChange} >
                  <option value="DEFAULT">Choose your question</option>
                  <option value="Name of your favourite color">Name of your favourite color</option> 
                  <option value="Name of your first pet">Name of your first pet</option> 
                  <option value="Name of your school">Name of your school</option>
 </select>

```

The code above was created by adapting the code in [StackOverFlow](https://stackoverflow.com/questions/21733847/react-jsx-selecting-selected-on-selected-select-option) as shown below: 

```
<select value={optionsState}>
  <option value="A">Apple</option>
  <option value="B">Banana</option>
  <option value="C">Cranberry</option>
</select>

```

- The code in [StackOverFlow](https://stackoverflow.com/questions/21733847/react-jsx-selecting-selected-on-selected-select-option) was implemented by Sophie Alpert.
- [StackOverFlow](https://stackoverflow.com/questions/21733847/react-jsx-selecting-selected-on-selected-select-option)'s Code was used because my feature had a requirement to implemet a select dropdown and before actually writing the logic, I wanted to understand how it is written and how it works.
- [StackOverFlow](https://stackoverflow.com/questions/21733847/react-jsx-selecting-selected-on-selected-select-option)'s Code was modified by passing different inputs and adding a default option to the select option.


#### Logout.js (Front-End)

```
localStorage.clear();
sessionStorage.removeItem('user_id');

```

The code above was created by adapting the code in [StackOverFlow](https://stackoverflow.com/questions/54743525/deleting-session-variables-after-the-user-logout-in-reactjs) as shown below: 

```
// Remove saved data from sessionStorage
sessionStorage.removeItem('Username');

```

- The code in [StackOverFlow](https://stackoverflow.com/questions/54743525/deleting-session-variables-after-the-user-logout-in-reactjs) was implemented by Shubham Khatri
- [StackOverFlow](https://stackoverflow.com/questions/54743525/deleting-session-variables-after-the-user-logout-in-reactjs)'s Code was used because I wanted to understand and learn how the removal of session storage works.
- [StackOverFlow](https://stackoverflow.com/questions/54743525/deleting-session-variables-after-the-user-logout-in-reactjs)'s Code was modified by passing the right value that matches with my requirement and also tried to remove of all the session values by clearing the local storgae.

#### ForgotPassword.js (Front-End)

```
 const user = {
        email: email,
        security_ans: securityanswer.value.toLowerCase(),
        password: password.value
      };
      const url = process.env.REACT_APP_BACKEND_URL + '/api/forgotpassword';
      axios.post(url, user).then((response) => {
        if (response.data.success) {
          alert(response.data.message);
          navigate("/loginpage");
        }
```

The code above was created by adapting the code in [educative](https://www.educative.io/edpresso/how-to-make-an-axios-post-request) as shown below: 

```
 const axios = require('axios')

axios.post('https:sample-endpoint.com/user', {
    Name: 'Fred',
    Age: '23'
  })
  .then(function (response) {
    console.log(response);
  })
```

-  The code in [educative](https://www.educative.io/edpresso/how-to-make-an-axios-post-request) was implemented by educative.
-  [educative](https://www.educative.io/edpresso/how-to-make-an-axios-post-request)'s Code was used because to have better understanding of how the axios post works
-  [educative](https://www.educative.io/edpresso/how-to-make-an-axios-post-request)'s Code was modified by passing the body to the API and checking the status of the response and returning an alert based on that response.

### EmailUpdate.js (Front-End)

```
function validateEmail(email) {
  return String(email) .toLowerCase() .match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

```

The code above was created by adapting the code in [StackOverFlow](https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript) as shown below: 

```
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
```

- The code in [StackOverFlow](https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript) was implemented by a random user.
- [StackOverFlow](https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript)'s Code was used because I wanted to find an efficient way to validate email and found this in stackoverflow, which was fully understood before using it.
- [StackOverFlow](https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript)'s Code was modified by writing it in a seperate function and it has been completely understood before writing into my program.


### RegisterForm.js (Front-End)

```
 handleChange(event) {

    const err = []
    let state = this.state;
    const { name, value } = event.target;

    
    switch (name) {....}
    
    }

```

The code above was created by adapting the code in [StackOverFlow](https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks) as shown below: 

```
const handleOnChange = event => {
  const { name, value } = event.target;
  setInputValues({ [name]: value });
};

```

- The code in [StackOverFlow](https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks) was implemented by Aprillion.
- [StackOverFlow](https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks)'s Code was used because I was unsure about the base structure of handleOnChange event.
-  [StackOverFlow](https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks)'s Code was modified according to my requirements by adding variables such as err and state along with the switch cases by passing the name value.

### PasswordUpdate.js (Front-End)

```
function validatePassword(password) {
  return String(password).match(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/

  );
}

```

The code above was created by adapting the code in [StackOverFlow](https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a) as shown below: 

```
^(?=.*[A-Za-z])(?=.*\d).{8,}$

```

- The code in [StackOverFlow](https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a) was implemented by deathwombat.
-  [StackOverFlow](https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a)'s Code was used because I was trying to build my own regular expression and this code was the base for it.
-  [StackOverFlow](https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a)'s Code was modified by writing it in a different format to try if that works (It did work!!) and written as a function.


### model/users.js (Back-End)

```
const userSchema = {
_id: mongoose.Schema.Types.ObjectId,
user_id :{type: String, required : true},
email: {type: String, required : true},
}

module.exports = mongoose.model("users",userSchema)

```

The code above was created by adapting the code in  [thinkster](https://thinkster.io/tutorials/mean-stack/creating-schemas-with-mongoose) as shown below: 

```
var PostSchema = new mongoose.Schema({
  title: String,
  link: String,
  upvotes: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});


```

- The code in [thinkster](https://thinkster.io/tutorials/mean-stack/creating-schemas-with-mongoose) was implemented by thinkster
- [thinkster](https://thinkster.io/tutorials/mean-stack/creating-schemas-with-mongoose)'s Code was used because I wanted to understand and learn about creating a schema in mongoose.
- [thinkster](https://thinkster.io/tutorials/mean-stack/creating-schemas-with-mongoose)'s Code was modified by creating my own schema that fits with my requirements, also it was modified by adding mongoose schema types objectId to the id property.


#### routes/users.js (Back-End)

```
   var user_id = uuid.v4();
   var email = req.body.email;
    
```

The code above was created by adapting the code in [npm](https://www.npmjs.com/package/uuid) as shown below: 

```
const { v4: uuidv4 } = require('uuid');
uuidv4();

```

-  The code in [npm](https://www.npmjs.com/package/uuid) was implemented by npm.
-  [npm](https://www.npmjs.com/package/uuid)'s Code was used because to understand how uuid works to generate the random id and its correct way of using it in the code.
-  [npm](https://www.npmjs.com/package/uuid)'s Code was modified by using it against ID value to genrate a random ID to the user.


### routes/users.js (Back-End)

```
bcrypt.compare(req.body.password, user.password).then((passwordCheck) => {
      if (!passwordCheck) {
        return res.status(400).send({
          message: "Passwords does not match",
          error,
          success: false
        });
      }

```

The code above was created by adapting the code in [Stackoverflow](https://stackoverflow.com/questions/14588032/mongoose-password-hashing) as shown below: 

```
// hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });

```

- The code in [Stackoverflow](https://stackoverflow.com/questions/14588032/mongoose-password-hashing) was implemented by Jnovack.
- [Stackoverflow](https://stackoverflow.com/questions/14588032/mongoose-password-hashing)'s Code was used because I wanted to gain knowledge on hashing passwords in node js.
- [Stackoverflow](https://stackoverflow.com/questions/14588032/mongoose-password-hashing)'s Code was modified by using the compare funtion to check the password coming in the request body with the hashed password present in the database against the user.



## Acknowledgments
* Thank you to Professor Gabriella Mosquera and TA's for teachning me about web development and guiding me about the subject. 
* Special thanks to  Lama Dev for the React tutorials which helped me to understand the design concepts of the application.

