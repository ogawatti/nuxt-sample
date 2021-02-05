<template>
  <div>
    <div>
      <b-navbar type="light" variant="light">
        <b-navbar-brand><nuxt-link to="/">Top</nuxt-link></b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-nav>
            <b-nav-item>
              <nuxt-link to="/news">News</nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/form">Form (Netlify)</nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/form2">Form (Formspree)</nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/links">Links</nuxt-link>
            </b-nav-item>
          </b-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
