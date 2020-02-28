const element = React.createElement("div", {
  title: "Novia Lim",
  className: "container"
}, React.createElement("div", {
  className: "content"
}, React.createElement("h1", null, "About me"), React.createElement("img", {
  className: "avatar",
  src: "https://i.imgur.com/2LULMNE.jpg",
  alt: "Novia Lim"
}), React.createElement("p", null, "Hi, my name is Novia Lim."), React.createElement("p", null, "I'm a software engineer based in San Diego, CA ", React.createElement("br", null), "specializing in building exceptional, high-quality websites and applications."), React.createElement("a", {
  id: "button-1",
  className: "button",
  href: "https://github.com/novialim",
  target: "_blank"
}, "Github", React.createElement("img", {
  id: "arrow-hover",
  src: "https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-paper-plane-1-120.png?raw=true"
}))));
ReactDOM.render(element, document.getElementById('contents'));