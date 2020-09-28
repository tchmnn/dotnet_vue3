<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-sm navbar-light border-bottom shadow-sm mb-3">
        <div class="container">
          <router-link class="navbar-brand" to="/">
            dotnet_vue
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-sm-inline-flex flex-sm-row-reverse collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav flex-grow">
              <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/counter">Counter</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/fetch-data">Fetch Data</router-link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>