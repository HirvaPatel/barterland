# Assignment1

- _Date Created_: 02 Feb 2022
- _Last Modification Date_: 02 Feb 2022
- _Git URL_: https://git.cs.dal.ca/hirva/csci5709-hirva-patel.git

## Authors

- [Hirva Patel](hirva.patel@dal.ca) - _(Student)_

## Getting Started

- npm install react --save

### Installing

- Download and install nodejs from https://nodejs.org/en/

## Deployment

- Deployment URL: http://csci5709-hirva-assignment1.herokuapp.com/

## Built With

- [React](https://reactjs.org/docs/getting-started.html) - The Java Script library for frontend development
- [Bootstrap](https://getbootstrap.com/) - CSS Framework
- [Material UI](https://mui.com/) - React library to use UI components

## Sources Used

### footer.js

_Lines 10 - 57_

```
<div>
<div className="b-example-divider"></div>

<div className="container">
    <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
            Home
        </a>
        </li>
        <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
            My Advertisements
        </a>
        </li>
        <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
            Trade Requests
        </a>
        </li>
        <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
            Blog
        </a>
        </li>
        <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
            About Us
        </a>
        </li>
        <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
            Contact Us
        </a>
        </li>
        <li className="nav-item">
        <a href="#" className="nav-link px-2 text-muted">
            About
        </a>
        </li>
    </ul>
    <p className="text-center text-muted">
        &copy; 2022 Easy Barter, Inc
    </p>
    </footer>
</div>
</div>

```

The code above was created by adapting the code in [Bootstrap](https://getbootstrap.com/docs/5.1/examples/footers/ https://getbootstrap.com/docs/5.1/examples/ [Accessed: 03- Feb- 2022]) as shown below:

```

<div class="b-example-divider"></div>

<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-muted">&copy; 2021 Company, Inc</p>
  </footer>
</div>

```

- <!---How---> The code in [Bootstrap](https://getbootstrap.com/docs/5.1/examples/footers/) was implemented by Bootstrap official community
- <!---Why---> [Bootstrap](https://getbootstrap.com/docs/5.1/examples/footers/)'s Code was used because I liked the structure of the footer provided by the bootstrap community and it suited my design
- <!---How---> [Bootstrap](https://getbootstrap.com/docs/5.1/examples/footers/)'s Code was modified by replacing the links relevant to my projects requirement

### nav.js

_Lines 12 - 81_

```
<header className="p-3 bg-dark text-white">
    <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a
        href="/"
        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
        <img
            id="logo"
            className="bi me-2"
            width="70"
            height="50"
            src={logo}
        ></img>
        </a>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
            <a href="#" className="nav-link px-2 text-white">
            Home
            </a>
        </li>
        <li>
            <a href="#" className="nav-link px-2 text-secondary">
            My Advertisements
            </a>
        </li>
        <li>
            <a href="#" className="nav-link px-2 text-white">
            Trade Requests
            </a>
        </li>
        <li>
            <a href="#" className="nav-link px-2 text-white">
            About Us
            </a>
        </li>
        </ul>

        <div className="text-end">
        Hi, Hirva
        <svg
            id="userProfile"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="-1 1 16 16"
        >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
        <svg
            id="wishlist"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            className="bi bi-heart-fill ml-3"
            viewBox="0 0 16 16"
            type="button"
        >
            <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
        </svg>
        </div>
    </div>
    </div>
</header>

```

The code above was created by adapting the code in [Bootstrap](https://getbootstrap.com/docs/5.1/examples/headers/ https://getbootstrap.com/docs/5.1/examples/ [Accessed: 02- Feb- 2022]) as shown below:

```
<header class="p-3 bg-dark text-white">
<div class="container">
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
    </a>

    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
        <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
        <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
        <li><a href="#" class="nav-link px-2 text-white">About</a></li>
    </ul>

    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
    </form>

    <div class="text-end">
        <button type="button" class="btn btn-outline-light me-2">Login</button>
        <button type="button" class="btn btn-warning">Sign-up</button>
    </div>
    </div>
</div>
</header>

```

- <!---How---> The code in [Bootstrap](https://getbootstrap.com/docs/5.1/examples/headers/) was implemented by Bootstrap official community
- <!---Why---> [Bootstrap](https://getbootstrap.com/docs/5.1/examples/headers/)'s Code was used because I liked the structure of the header provided by the bootstrap community and it suited my design
- <!---How---> [Bootstrap](https://getbootstrap.com/docs/5.1/examples/headers/)'s Code was modified by replacing the links relevant to my projects requirement. The logo placeholder is modified according to my project's decided logo. I have changed the given design of having search bar as I didn't think that was the right place in my design. I also replaced the Sign up and Login buttons with the Wishlist button and Profile links.

### product.js

_Lines 15 - 55_

```
 <div className="col">
    <div className="card shadow-sm">
        <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        preserveAspectRatio="xMidYMid slice"
        focusable="true"
        >
        <image
            width="100%"
            height="225"
            xlinkHref={productData.img}
        ></image>
        </svg>
        <div className="card-body">
        <p className="card-text">{productData.productName}</p>
        <p className="card-category">{productData.category}</p>
        <div className="d-flex justify-content-between align-items-center">
            <p>
            <a
                class="btn btn-secondary"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
            >
                Description
            </a>
            </p>
            <div class="collapse" id="collapseExample">
            <div class="card card-body">{productData.description}</div>
            </div>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </div>
        </div>
    </div>
</div>

```

The code above was created by adapting the code in [Bootstrap](https://getbootstrap.com/docs/5.1/examples/album/# https://getbootstrap.com/docs/5.1/examples/ [Accessed: 02- Feb- 2022]) as shown below:

```
 <div class="col">
    <div class="card shadow-sm">
    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

    <div class="card-body">
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
        </div>
        <small class="text-muted">9 mins</small>
        </div>
    </div>
    </div>
</div>

```

- <!---How---> The code in [Bootstrap](https://getbootstrap.com/docs/5.1/examples/album/#) was implemented by Bootstrap official community
- <!---Why---> [Bootstrap](https://getbootstrap.com/docs/5.1/examples/album/#)'s Code was used because I liked the structure of the albums provided by the bootstrap community and it suited my design
- <!---How---> [Bootstrap](https://getbootstrap.com/docs/5.1/examples/album/#)'s Code was modified by replacing the links relevant to my projects requirement. The image placeholder is modified according to my project's relevant product images. I have changed the given design of having view and edit buttons at the end to have a description button which will collapse to reveal the further details of the product. I have added a favorite icon provided my material ui to add the product into the wishlist.

### product.js

_Lines 36 - 50_

```
<p>
    <a
    className="btn btn-secondary"
    data-bs-toggle="collapse"
    href="#collapseExample"
    role="button"
    aria-expanded="false"
    aria-controls="collapseExample">
    Description
    </a>
</p>
<div class="collapse" id="collapseExample">
    <div class="card card-body">{productData.description}</div>
</div>
```

The code above was created by adapting the code in [Bootstrap](https://getbootstrap.com/docs/5.1/components/collapse/ [Accessed: 03- Feb- 2022]) as shown below:

```
 <p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>

```

- <!---How---> The code in [Bootstrap](https://getbootstrap.com/docs/5.1/components/collapse/) was implemented by Bootstrap official community
- <!---Why---> [Bootstrap](https://getbootstrap.com/docs/5.1/components/collapse/)'s Code was used because I liked the structure of the collapse feature provided by the bootstrap community and it suited my design
- <!---How---> [Bootstrap](https://getbootstrap.com/docs/5.1/components/collapse/)'s Code was modified by replacing the links relevant to my projects requirement. A single button is placed as per the requirement called description. The unnecessary button is removed and the placeholder for the details is replaced by the samples text to display on click of the button.

### product.js

_Lines 51_

```
  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
```

The code above was created by adapting the code in [Material UI](https://mui.com/components/checkboxes/ [Accessed: 06- Feb- 2022]) as shown below:

```
 <div>
    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
    <Checkbox
    {...label}
    icon={<BookmarkBorderIcon />}
    checkedIcon={<BookmarkIcon />}
    />
</div>

```

- <!---How---> The code in [Material UI]( https://mui.com/components/checkboxes/) was implemented by Material UI framework
- <!---Why---> [Material UI]( https://mui.com/components/checkboxes/)'s Code was used because material ui provides amazing icons and checkboxes
- <!---How---> [Material UI]( https://mui.com/components/checkboxes/)'s Code was modified by selecting the favorite checkbox from the list available.

### productList.js

_Lines 17-36_

```
 <div className="sidebar">
    <div className="category">
        <b>Lorem ipsum</b>
        <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Lorem ipsum" />
        <FormControlLabel control={<Checkbox />} label="Lorem ipsum" />
        <FormControlLabel control={<Checkbox />} label="Lorem ipsum" />
        <FormControlLabel control={<Checkbox />} label="Lorem ipsum" />
        </FormGroup>
    </div>
    <div className="category">
        <b>Lorem ipsum</b>
        <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Lorem ipsum" />
        <FormControlLabel control={<Checkbox />} label="Lorem ipsum" />
        <FormControlLabel control={<Checkbox />} label="Lorem ipsum" />
        <FormControlLabel control={<Checkbox />} label="Lorem ipsum" />
        </FormGroup>
    </div>
</div>
```

The code above was created by adapting the code in [Material UI](https://mui.com/components/checkboxes/ [Accessed: 06- Feb- 2022]) as shown below:

```
<FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
  <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
</FormGroup>

```

- <!---How---> The code in [Material UI]( https://mui.com/components/checkboxes/) was implemented by Material UI framework
- <!---Why---> [Material UI]( https://mui.com/components/checkboxes/)'s Code was used because material ui provides code to make a list of checkboxes
- <!---How---> [Material UI]( https://mui.com/components/checkboxes/)'s Code was modified by selecting the form group of the checkboxes. The labels for the checkboxes are changed. Changed the size of the list as per the requirement.

### searchOptions.js

_Lines 17-26_

```
 <div className="search">
    <form className="col-12 col-lg-15 mb-3 mb-lg-0 me-lg-3">
    <input
        type="search"
        className="form-control form-control-dark"
        placeholder="Search..."
        aria-label="Search"
    />
    </form>
</div>
```

The code above was created by adapting the code in [Bootstrap](https://getbootstrap.com/docs/5.1/examples/headers/ https://getbootstrap.com/docs/5.1/examples/ [Accessed: 02- Feb- 2022]) as shown below:

```
<form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
    <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
</form>

```

- <!---How---> The code in [Bootstrap]( https://getbootstrap.com/docs/5.1/examples/headers/) was implemented by Bootstrap framework
- <!---Why---> [Bootstrap]( https://getbootstrap.com/docs/5.1/examples/headers/)'s Code was used because I needed a search bar for the application which I found well designed by bootstrap framework
- <!---How---> [Bootstrap]( https://getbootstrap.com/docs/5.1/examples/headers/)'s Code was modified by changing the size to fit the webpage.

### searchOptions.js

_Lines 27-53_

```
<div className="sortBy">
    <FormControl>
    <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        className="radioGroup"
    >
        <FormControlLabel
        value="date"
        control={<Switch />}
        label="Sort By:"
        />
        <FormControlLabel value="date" control={<Radio />} label="Date" />
        <FormControlLabel
        value="price"
        control={<Radio />}
        label="Price"
        />
        <FormControlLabel
        value="other"
        control={<Radio />}
        label="Other"
        />
    </RadioGroup>
    </FormControl>
</div>

```

The code above was created by adapting the code in [Material UI](https://mui.com/components/radio-buttons/ [Accessed: ]) as shown below:

```
<FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>

```

- <!---How---> The code in [Material UI]( https://mui.com/components/radio-buttons/) was implemented by Material UI framework
- <!---Why---> [Material UI]( https://mui.com/components/radio-buttons/)'s Code was used because I a list of radio buttons for the 'sort by' listing for the application which I found well designed by Material UI framework
- <!---How---> [Material UI]( https://mui.com/components/radio-buttons/)'s Code was modified by changing the details as per the application requirements. Added the label to the list of radio buttons as Sort by.

## Image References

- https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fdynamic.brandcrowd.com%2Fasset%2Flogo%2F4d45d323-391a-4243-9fc1-7d4bf8305937%2Flogo-search-grid-desktop%3Fv%3D637649238610270000&imgrefurl=https%3A%2F%2Fwww.brandcrowd.com%2Fmaker%2Ftag%2Fbuy-and-sell&tbnid=6Sx_pe_sou3aiM&vet=1&docid=0mlvXcMx-LGHtM&w=278&h=222&source=sh%2Fx%2Fim
- https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fca%2Fshop%2Fbuy-iphone%2Fiphone-11%2F6.1-inch-display-64gb-black&psig=AOvVaw3IlypjfckVpIbRr-Q6aajQ&ust=1643983410913000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjI0svZ4_UCFQAAAAAdAAAAABAG
- https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.ca%2FMaster-Your-Focus-Practical-Chasing-ebook%2Fdp%2FB07Y364MTR&psig=AOvVaw0jBe-9gla0hL4UGIdLp-Oj&ust=1643981914626000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODYvoLU4_UCFQAAAAAdAAAAABAM
- https://cdn.shopify.com/s/files/1/2235/7925/products/Littmann-Classic-III-Stethoscope-Medical-Clinic-Supplies-MOBB-Grey-3M5621GR-2_740x.jpg?v=1638459276
- https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bestbuy.com%2Fsite%2Fdell-inspiron-7000-2-in-1-14-touch-screen-laptop-amd-ryzen-7-16gb-memory-512gb-solid-state-drive-blue%2F6458906.p%3FskuId%3D6458906&psig=AOvVaw0fpXXkq_q-o7JbYZI9favj&ust=1643986740654000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODb-bLn4_UCFQAAAAAdAAAAABAK

## Other References

- https://youtu.be/4UZrsTqkcW4
- https://tools.picsart.com/background-removal/?utm_source=google&utm_medium=ppc&utm_campaign=14951530756&adgroupid=133798918532&utm_term=background%20remover%20png&gclid=CjwKCAiAo4OQBhBBEiwA5KWu_6Ja5IyAt1EmaDX0HF2WVZl0ISlK6oHyOIQlYtsSH5IIS4VMqAbmLhoCteYQAvD_BwE
- https://icons.getbootstrap.com/
- https://getbootstrap.com/docs/5.1/examples/

## Note

- Sometimes the developed application is throwing "heroku[web.1]: Error R14 (Memory quota exceeded)" error
- Solution: Reloading twice will open the application
  Alternative Solution: If reloading doesn't help please contact me on hirva.patel@dal.ca, I will have to run a command to increase the heap size.
