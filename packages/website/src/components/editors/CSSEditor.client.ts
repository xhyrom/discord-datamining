import { editor, Uri } from "monaco-editor";
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import CssWorker from "./CSSEditor.worker.js?worker";
/* ========================================================================== */

window.MonacoEnvironment = {
  getWorker(moduleId, label) {
    switch (label) {
      case "editorWorkerService":
        return new EditorWorker();
      case "css":
        return new CssWorker();
      default:
        throw new Error(`Unknown label ${label}`);
    }
  },
};

export default class CSSEditor extends HTMLDivElement {
  model: editor.ITextModel | undefined;

  connectedCallback() {
    const { value, theme } = this.dataset;

    // The uri is used for the schema file match.
    const modelUriParsed = Uri.parse("a://b/foo.css");

    const model = editor.createModel(
      value ?? "/* empty */",
      "css",
      modelUriParsed
    );
    editor.create(this, {
      automaticLayout: true,
      model,
      theme: theme,
      tabSize: 2,
    });

    this.model = model;
  }
}

/* Monaco needs a DIV, not working with a generic custom root element */
customElements.define("code-editor", CSSEditor, { extends: "div" });
