/**
 * A simple SplitText utility for GSAP animations
 * This is a simplified version of the GSAP SplitText plugin
 */
export class SplitText {
  chars: HTMLElement[] = []
  words: HTMLElement[] = []
  lines: HTMLElement[] = []
  originalHTML: string
  element: HTMLElement

  constructor(element: HTMLElement, config: { type: string }) {
    this.element = element
    this.originalHTML = element.innerHTML

    if (config.type.includes("chars")) {
      this.splitChars()
    }

    if (config.type.includes("words")) {
      this.splitWords()
    }

    if (config.type.includes("lines")) {
      this.splitLines()
    }
  }

  splitChars() {
    const words = this.element.innerText.split(" ")
    let html = ""

    words.forEach((word, wordIndex) => {
      html += '<span class="word">'

      for (let i = 0; i < word.length; i++) {
        html += `<span class="char">${word[i]}</span>`
      }

      html += "</span>"

      if (wordIndex < words.length - 1) {
        html += " "
      }
    })

    this.element.innerHTML = html
    this.chars = Array.from(this.element.querySelectorAll(".char"))
  }

  splitWords() {
    if (!this.element.querySelector(".word")) {
      const words = this.element.innerText.split(" ")
      let html = ""

      words.forEach((word, index) => {
        html += `<span class="word">${word}</span>`
        if (index < words.length - 1) {
          html += " "
        }
      })

      this.element.innerHTML = html
    }

    this.words = Array.from(this.element.querySelectorAll(".word"))
  }

  splitLines() {
    // This is a simplified version that doesn't actually split by lines
    // For a real implementation, you would need to check element positions
    this.lines = [this.element]
  }

  revert() {
    this.element.innerHTML = this.originalHTML
  }
}
