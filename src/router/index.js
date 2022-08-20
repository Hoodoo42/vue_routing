import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage.vue";
import MenuPage from "@/views/MenuPage.vue";
// import { compile, component } from "vue/types/umd";
// import { component } from "vue/types/umd";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomePage,

    meta: [
      {
        title: `Home`,
      },
      {
        name: `description`,
        content: `Welcome to my Page!`,
      },
      {
        name: `author`,
        content: `Colleen Vereschagin`,
      },
    ],
  },
  {
    path: "/Menu",
    component: MenuPage,

    meta: [
      {
        title: `Menu`,
      },
      {
        name: `description`,
        content: `Welcome to the Menu!`,
      },
      {
        name: `author`,
        content: `Colleen Vereschagin`,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});
// router.beforeEach handles selecting which "page" we are going to, and which "page" we are coming from,
// it will remove the old meta, inject the new meta and also change the title to match the to page title

// first getting all meta from the document
// then loop through it to then delete
router.beforeEach((to, from, next) => {
  let current_meta_tags = document.querySelectorAll(`meta`);
  for (let i = 0; i < current_meta_tags.length; i++) {
    current_meta_tags[i].remove();
  }

  // next is to get the new meta tag for the desitination "page"
  let new_meta_tags = to[`meta`];
  // changing the title
  document.querySelector(`title`)[`innerText`] = new_meta_tags[0][`title`];

  // and then insert the new meta tags with another loop
  // starting with 1 this time, as 0 is the title that has already been injected

  for (let i = 1; i < new_meta_tags.length; i++) {
    document.querySelector(`head`).insertAdjacentHTML(
      `beforeend`,
      `
    <meta name = "${new_meta_tags[i][`name`]}"
    content = "${new_meta_tags[i][`content`]}">`
    );
  }
  // this adds all the standard meta tags
  document.querySelector(`head`).insertAdjacentHTML(
    `afterbegin`,
    `
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0"`
  );
  // this next ushes the code along and doesnt just stop at the meta switch it will proceed to whats needed for displaying the page.
  next();
});

export default router;
