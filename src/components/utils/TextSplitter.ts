export interface SplitTextOptions {
  type?: string;
  linesClass?: string;
  wordsClass?: string;
  charsClass?: string;
}

export class SplitText {
  elements: HTMLElement[] = [];
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  private _originals: { el: HTMLElement; html: string }[] = [];

  constructor(
    target:
      | string
      | HTMLElement
      | (string | HTMLElement)[]
      | NodeListOf<HTMLElement>,
    options: SplitTextOptions = {}
  ) {
    const targets: HTMLElement[] = [];
    if (typeof target === "string") {
      targets.push(
        ...Array.from(document.querySelectorAll<HTMLElement>(target))
      );
    } else if (Array.isArray(target)) {
      target.forEach((item) => {
        if (typeof item === "string") {
          targets.push(
            ...Array.from(document.querySelectorAll<HTMLElement>(item))
          );
        } else if (item instanceof HTMLElement) {
          targets.push(item);
        }
      });
    } else if (target instanceof HTMLElement) {
      targets.push(target);
    } else if (target && typeof (target as any).forEach === "function") {
      (target as NodeListOf<HTMLElement>).forEach((el) => {
        if (el instanceof HTMLElement) targets.push(el);
      });
    }

    this.elements = targets;
    this.split(options);
  }

  split(options: SplitTextOptions = {}) {
    this.revert();
    this.chars = [];
    this.words = [];
    this.lines = [];

    const type = options.type || "chars,words,lines";
    const wantChars = type.includes("chars");
    const wantWords = type.includes("words");
    const wantLines = type.includes("lines");
    const linesClass = options.linesClass || "split-line";
    const wordsClass = options.wordsClass || "split-word";
    const charsClass = options.charsClass || "split-char";

    this.elements.forEach((el) => {
      this._originals.push({ el, html: el.innerHTML });

      const html = el.innerHTML;
      const lineSegments = html.split(/<br\s*[\/]?>/gi);
      const fragment = document.createDocumentFragment();

      lineSegments.forEach((segmentHtml, lineIndex) => {
        const lineWrapper = document.createElement("div");
        if (wantLines) {
          lineWrapper.className = linesClass;
          lineWrapper.style.overflow = "hidden";
        } else {
          lineWrapper.style.display = "inline";
        }

        const temp = document.createElement("div");
        temp.innerHTML = segmentHtml;

        this.processNodes(temp, lineWrapper, {
          wantChars,
          wantWords,
          wordsClass,
          charsClass,
        });

        fragment.appendChild(lineWrapper);
        this.lines.push(lineWrapper);

        if (!wantLines && lineIndex < lineSegments.length - 1) {
          fragment.appendChild(document.createElement("br"));
        }
      });

      el.innerHTML = "";
      el.appendChild(fragment);
    });

    return this;
  }

  private processNodes(
    source: Node,
    destination: HTMLElement,
    cfg: {
      wantChars: boolean;
      wantWords: boolean;
      wordsClass: string;
      charsClass: string;
    }
  ) {
    source.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || "";
        if (!text) return;

        const parts = text.split(/(\s+)/);

        parts.forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            const spaceSpan = document.createElement("span");
            spaceSpan.innerHTML = "&nbsp;";
            spaceSpan.style.display = "inline-block";
            destination.appendChild(spaceSpan);
          } else {
            const wordSpan = document.createElement("span");
            wordSpan.className = cfg.wordsClass;
            wordSpan.style.display = "inline-block";
            wordSpan.style.whiteSpace = "nowrap";

            if (cfg.wantChars) {
              Array.from(part).forEach((char) => {
                const charSpan = document.createElement("span");
                charSpan.className = cfg.charsClass;
                charSpan.style.display = "inline-block";
                charSpan.textContent = char;
                wordSpan.appendChild(charSpan);
                this.chars.push(charSpan);
              });
            } else {
              wordSpan.textContent = part;
            }

            destination.appendChild(wordSpan);
            this.words.push(wordSpan);
          }
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        const clone = el.cloneNode(false) as HTMLElement;
        this.processNodes(el, clone, cfg);
        destination.appendChild(clone);
      }
    });
  }

  revert() {
    this._originals.forEach(({ el, html }) => {
      el.innerHTML = html;
    });
    this._originals = [];
    this.chars = [];
    this.words = [];
    this.lines = [];
  }
}

export default SplitText;

