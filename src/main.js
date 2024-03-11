import markdownit from 'markdown-it'

const { CONTENT } = window.PP_VARIABLES || {};

class PP {
  constructor(props) {
    this.md = markdownit();
    this.content = props.content;
  }

  renderContent() {
    const content = this.md.render(this.content);
    document.getElementById('pp-content').innerHTML = content;
  }

  init() {
    this.renderContent();
  }
}

const pp = new PP({ content: CONTENT }).init();
