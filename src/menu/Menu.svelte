<script>
  import Home from "./Home.svelte";
  import Today from "./Today.svelte";
  import Weekly from "./Weekly.svelte";
  import Monthly from "./Monthly.svelte";

  export let menu = 1;
</script>

<nav id="menu">
  <ul>
    <li><a href="/" on:click|preventDefault={() => (menu = 1)}>Home</a></li>

    <li><a href="/" on:click|preventDefault={() => (menu = 2)}>Today</a></li>

    <li>
      <a href="/" on:click|preventDefault={() => (menu = 3)}>This Week</a>
    </li>

    <li>
      <a href="/" on:click|preventDefault={() => (menu = 4)}>This Month</a>
    </li>
  </ul>
</nav>

{#if menu === 1}
  <Home />
{:else if menu === 2}
  <Today />
{:else if menu === 3}
  <Weekly />
{:else if menu === 4}
  <Monthly />
{:else}
  <h1>Page Not Found</h1>
{/if}

<style>
  #menu {
    background: #7c95ab;
    height: 80px;
    padding-left: 100px;
    border-radius: 20px;
  }
  #menu ul,
  #menu li {
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }
  #menu ul {
    width: 100%;
    text-align: center;
  }
  #menu li {
    display: inline-block;
    position: relative;
  }
  #menu a {
    display: block;
    line-height: 80px;
    padding: 0 14px;
    text-decoration: none;
    color: #ffffff;
    font-size: 32px;
    text-transform: uppercase;
  }
  #menu a.dropdown-arrow:after {
    content: "\25BE";
    margin-left: 5px;
  }
  #menu li a:hover {
    color: #cfe2f3;
    background: #7c95ab;
  }
  #menu input {
    display: none;
    margin: 0;
    padding: 0;
    height: 80px;
    width: 100%;
    opacity: 0;
    cursor: pointer;
  }
  #menu label {
    display: none;
    line-height: 80px;
    text-align: center;
    position: absolute;
    left: 35px;
  }
  #menu label:before {
    font-size: 1.6em;
    color: #ffffff;
    content: "\2261";
    margin-left: 20px;
  }
  #menu ul.sub-menus {
    height: auto;
    overflow: hidden;
    width: 170px;
    background: #7c95ab;
    position: absolute;
    z-index: 99;
    display: none;
  }
  #menu ul.sub-menus li {
    display: block;
    text-align: left;
    width: 100%;
  }
  #menu ul.sub-menus a {
    color: #ffffff;
    font-size: 22px;
    text-transform: uppercase;
  }
  #menu li:hover ul.sub-menus {
    display: block;
  }
  #menu ul.sub-menus a:hover {
    background: #7c95ab;
    color: #cfe2f3;
  }
  @media screen and (max-width: 800px) {
    #menu {
      position: relative;
    }
    #menu ul {
      background: #7c95ab;
      position: absolute;
      top: 100%;
      right: 0;
      left: 0;
      z-index: 3;
      height: auto;
      display: none;
      text-align: left;
    }
    #menu ul.sub-menus {
      width: 100%;
      position: static;
    }
    #menu ul.sub-menus a {
      padding-left: 30px;
    }
    #menu li {
      display: block;
      float: none;
      width: auto;
    }
    #menu input,
    #menu label {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
    }
    #menu input {
      z-index: 4;
    }
    #menu input:checked + label {
      color: #ffffff;
    }
    #menu input:checked + label:before {
      content: "\00d7";
    }
    #menu input:checked ~ ul {
      display: block;
    }
  }
</style>
