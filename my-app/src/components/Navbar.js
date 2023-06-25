import React from 'react';

export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><h1>Medico</h1></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/"><h3>Home</h3></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/About"><h3>About</h3></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Services"><h3>Services</h3></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Contact"><h3>Contact</h3></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><h3>Dropdown</h3>
            </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
}
