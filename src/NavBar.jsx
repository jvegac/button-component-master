
export function NavBar(){
    return(
        <div> <header>
        <nav className="nav">
          <h3 className="name"><span className="span">Dev</span>challenges.io</h3>
          <a className="nav-link">Colors</a>
          <a className="nav-link">Typography</a>
          <a className="nav-link">Spaces</a>
          <a className="nav-link">Buttons</a>
          <a id="selected" className="nav-link">Inputs</a>
          <a className="nav-link">Grid</a>
        </nav>
      </header></div>
    )
}