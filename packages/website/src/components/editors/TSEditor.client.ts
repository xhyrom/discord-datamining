import { editor, Uri } from "monaco-editor";
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import TsWorker from "./TSEditor.worker.js?worker";
/* ========================================================================== */

window.MonacoEnvironment = {
  getWorker(moduleId, label) {
    switch (label) {
      case "editorWorkerService":
        return new EditorWorker();
      case "ts":
        return new TsWorker();
      default:
        throw new Error(`Unknown label ${label}`);
    }
  },
};

export default class TSEditor extends HTMLDivElement {
  model: editor.ITextModel | undefined;

  connectedCallback() {
    const { value, theme } = this.dataset;

    // The uri is used for the schema file match.
    const modelUriParsed = Uri.parse("a://b/foo.ts");

    const model = editor.createModel(
      value ?? "/* empty */",
      "typescript",
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
customElements.define("code-editor", TSEditor, { extends: "div" });
