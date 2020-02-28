const element = (
  <div title="Novia Lim" className="container">
    <div className="content">
      <h1>About me</h1>
      <img className="avatar" src="https://i.imgur.com/2LULMNE.jpg" alt="Novia Lim" />
      <p>Hi, my name is Novia Lim.</p>
      <p>
        I'm a software engineer based in San Diego, CA <br />
        specializing in building exceptional, high-quality websites and applications.
      </p>
      <a id="button-1" className="button" href="https://github.com/novialim" target="_blank">
        Github
        <img
          id="arrow-hover"
          src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-paper-plane-1-120.png?raw=true"
        />
      </a>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('contents'))
