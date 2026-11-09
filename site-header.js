class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <div>
          <img src="assets/images/logo.svg" width="80" height="80">
        </div>

        <div>
          <a href="index.html#projects">
            <button class="pcb-button">
              <span class="btn-text">Projects</span>
              <span class="trace-border"></span>
            </button>
          </a>

          <a href="index.html#about">
            <button class="pcb-button">
              <span class="btn-text">Skills222</span>
              <span class="trace-border"></span>
            </button>
          </a>

          <a href="index.html#contact">
            <button class="pcb-button">
              <span class="btn-text">Contact Me</span>
              <span class="trace-border"></span>
            </button>
          </a>
        </div>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);
