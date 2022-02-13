const ComplexNumbers = () => {
  return (
    <div className="page-body">
      <p id="ce28f9db-666e-4adf-8081-21131ca7f73b">
        <em>
          <strong>Shaking off the Rust</strong>
        </em>{" "}
        is a series of exercises with the Rust programing language. The purpose
        of the series is to improve both my and my dear reader’s abilities with
        Rust by building things. Plus, by actually building stuff, we'll learn
        about an array of technological concepts in the process. In this
        installment, we’re going to dig into complex numbers.
      </p>
      <h3 id="225ef24d-6186-442a-9991-54511af34e57">
        Intro to Complex Numbers (feel free to skip if you’re already familiar)
      </h3>
      <hr id="4e737ab4-9ff7-4c81-9432-18cba998f5f2" />
      <p id="2af27b57-9e78-4ab7-9b23-fd84167d9059">
        Complex numbers are simple. They have the form{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mi>a</mi>
                      <mo>+</mo>
                      <mi>b</mi>
                      <mi>i</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">a + bi</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.66666em", verticalAlign: "-0.08333em" }}
                  />
                  <span className="mord mathnormal">a</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">bi</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        , where{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mi>a</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">a</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.43056em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">a</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        and{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mi>b</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">b</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">b</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        are real numbers, and{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mi>i</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">i</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.65952em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">i</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        , called the <em>imaginary unit</em>, has the property{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <msup>
                        <mi>i</mi>
                        <mn>2</mn>
                      </msup>
                      <mo>=</mo>
                      <mo>−</mo>
                      <mn>1</mn>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      i^2 = -1
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: "0.8141079999999999em",
                      verticalAlign: "0em",
                    }}
                  />
                  <span className="mord">
                    <span className="mord mathnormal">i</span>
                    <span className="msupsub">
                      <span className="vlist-t">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.8141079999999999em" }}
                          >
                            <span
                              style={{ top: "-3.063em", marginRight: "0.05em" }}
                            >
                              <span
                                className="pstrut"
                                style={{ height: "2.7em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">2</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                  <span className="mrel">=</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.72777em", verticalAlign: "-0.08333em" }}
                  />
                  <span className="mord">−</span>
                  <span className="mord">1</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        [
        <a href="https://www.maa.org/press/maa-reviews/visual-complex-analysis">
          1
        </a>
        ]. We call{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mi>a</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">a</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.43056em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">a</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        the real part of the complex number and{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mi>b</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">b</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">b</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        the imaginary part. Real numbers and complex numbers follow the same
        laws of arithmetic [
        <a href="https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf">
          2
        </a>
        ]. Let’s explore complex numbers, and learn some stuff about Rust along
        the way.
      </p>
      <h3 id="1d7d69bc-13c9-4762-94ae-434913c0464b">Getting Started</h3>
      <hr id="cee036c2-a82c-46f3-86bf-952e5c224f83" />
      <p id="1d34903d-d094-49f3-8862-020b48c32a46">
        As usual, we’ll begin by creating a new library with Cargo.{" "}
      </p>
      <pre id="1ecfa223-ea95-4ddc-b8fa-63171946c131" className="code">
        <code>cargo new complex_numbers --lib{"\n"}cd complex_numbers</code>
      </pre>
      <h3 id="b132c52e-0004-4cae-9c93-d17da08952ff">
        Defining the Complex Tuple Struct
      </h3>
      <hr id="5906a5c5-d999-49ce-bd1b-eeabf82eb22a" />
      <p id="a87777fc-4400-4612-86fa-0a6fb1cf766d">
        I’m going to use a <em>tuple struct</em> to represent Complex numbers.
        Tuple structs are structs that do not have names for their fields. Tuple
        structs are useful when you want to give a name to the tuple, but naming
        each field would be verbose [
        <a href="https://doc.rust-lang.org/book/">3</a>].
      </p>
      <p id="27627bcc-0232-47e1-8b90-015ab3858593">
        Here’s what our <code>Complex</code> tuple struct looks like:
      </p>
      <pre id="41981c7a-bea4-417f-8ef8-cf813a6ab967" className="code">
        <code>
          // lib.rs{"\n"}
          {"\n"}#[derive(Debug, PartialEq, Clone, Copy)]{"\n"}pub struct
          Complex(pub f64, pub f64);
        </code>
      </pre>
      <p id="12039110-94d3-49c1-aee9-459d99e28b93">
        The first number in the Complex tuple struct represents the real part of
        the complex number and the second number represents the imaginary part.
      </p>
      <p id="52275958-f392-4983-9683-4eed14611739"></p>
      <p id="f6ecf2e1-8f66-4790-b632-5cc77ceae27b">
        I’ve talked about each of those derived traits in the DNA Analysis
        installment of <em>Shaking off the Rust</em>, so I won’t repeat myself
        here.{" "}
      </p>
      <p id="a4368add-886d-43e5-867b-077488922c5b">
        If the traits being derived are unfamiliar to you, I urge you to give
        some of the Rust documentation a quick read:
      </p>
      <ul id="56c12e3e-fc11-4b3e-bbb6-82d85afdacbe" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          Debug -{" "}
          <a href="https://doc.rust-lang.org/std/fmt/trait.Debug.html">
            https://doc.rust-lang.org/std/fmt/trait.Debug.html
          </a>
        </li>
      </ul>
      <ul id="8e534acf-4cfe-4a8d-8899-fce872e136b9" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          PartialEq -{" "}
          <a href="https://doc.rust-lang.org/std/cmp/trait.PartialEq.html">
            https://doc.rust-lang.org/std/cmp/trait.PartialEq.html
          </a>
        </li>
      </ul>
      <ul id="9e329758-c5cb-44f8-a2db-4902319dc01d" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          Clone -{" "}
          <a href="https://doc.rust-lang.org/std/clone/trait.Clone.html">
            https://doc.rust-lang.org/std/clone/trait.Clone.html
          </a>
        </li>
      </ul>
      <ul id="89a86d59-18f4-4d97-906f-560377a19b2f" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          Copy -{" "}
          <a href="https://doc.rust-lang.org/std/marker/trait.Copy.html">
            https://doc.rust-lang.org/std/marker/trait.Copy.html
          </a>
        </li>
      </ul>
      <p id="2f1d416b-cd5e-422a-9fe9-cda559f77ef2">
        These are common traits that you will see many times while working with
        Rust.
      </p>
      <h3 id="37b213f9-46a0-47d8-862e-53b6e4095a0f">Adding Complex Numbers</h3>
      <hr id="2d438f23-bad3-4c48-b92e-35820860f084" />
      <p id="4202642b-2df9-4899-ae22-27eae852c836">
        You can probably guess how adding complex numbers works. For any two
        complex numbers
      </p>
      <p id="9422a804-8f42-460e-bd7b-f821add4477a">
        {" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mi>a</mi>
                      <mo>+</mo>
                      <mi>b</mi>
                      <mi>i</mi>
                      <mo separator="true">,</mo>
                      <mi>c</mi>
                      <mo>+</mo>
                      <mi>d</mi>
                      <mi>i</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      a + bi, c + di
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.66666em", verticalAlign: "-0.08333em" }}
                  />
                  <span className="mord mathnormal">a</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: "0.8888799999999999em",
                      verticalAlign: "-0.19444em",
                    }}
                  />
                  <span className="mord mathnormal">bi</span>
                  <span className="mpunct">,</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.16666666666666666em" }}
                  />
                  <span className="mord mathnormal">c</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">d</span>
                  <span className="mord mathnormal">i</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        , we have that{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mo stretchy="false">(</mo>
                      <mi>a</mi>
                      <mo>+</mo>
                      <mi>b</mi>
                      <mi>i</mi>
                      <mo stretchy="false">)</mo>
                      <mo>+</mo>
                      <mo stretchy="false">(</mo>
                      <mi>c</mi>
                      <mo>+</mo>
                      <mi>d</mi>
                      <mi>i</mi>
                      <mo stretchy="false">)</mo>
                      <mo>=</mo>
                      <mo stretchy="false">(</mo>
                      <mi>a</mi>
                      <mo>+</mo>
                      <mi>c</mi>
                      <mo stretchy="false">)</mo>
                      <mo>+</mo>
                      <mo stretchy="false">(</mo>
                      <mi>b</mi>
                      <mo>+</mo>
                      <mi>d</mi>
                      <mo stretchy="false">)</mo>
                      <mi>i</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      (a + bi) + (c + di) = (a + c) + (b + d)i
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord mathnormal">a</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord mathnormal">bi</span>
                  <span className="mclose">)</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord mathnormal">c</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord mathnormal">d</span>
                  <span className="mord mathnormal">i</span>
                  <span className="mclose">)</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                  <span className="mrel">=</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord mathnormal">a</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord mathnormal">c</span>
                  <span className="mclose">)</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord mathnormal">b</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord mathnormal">d</span>
                  <span className="mclose">)</span>
                  <span className="mord mathnormal">i</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        [
        <a href="https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf">
          2
        </a>
        ].
      </p>
      <p id="e28446dd-bf71-4880-a162-15b0b46316b3">Let’s try it in Rust:</p>
      <pre id="5950ad18-afe9-4bce-8ceb-30f55461fd71" className="code">
        <code>
          pub fn add(z1: &amp;Complex, z2: &amp;Complex) -&gt; Complex {"{"}
          {"\n"}
          {"    "}let Complex(a, b) = z1;{"\n"}
          {"    "}let Complex(c, d) = z2;{"\n"}
          {"\n"}
          {"    "}Complex(a + c, b + d){"\n"}
          {"}"}
        </code>
      </pre>
      <p id="7908700c-653b-4af6-9ba3-453a702cf938">
        If this is your first time seeing a tuple struct being destructured, the
        syntax may be confusing{" "}
      </p>
      <p id="23f2bf98-d560-4f94-b3a9-0068b876ae3e">
        <code>let Complex(a, b) = z1;</code>
      </p>
      <p id="1dd02703-61cf-49cc-aed3-70e9ef1245b7">
        By the end of this session of SOTR, that syntax will be second nature to
        you.
      </p>
      <p id="091098e3-054b-4b51-9153-97909807de46">
        Let’s give the <code>add</code> function a short test. We’ll see how it
        adds{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mo stretchy="false">(</mo>
                      <mo>−</mo>
                      <mn>2.5</mn>
                      <mo>+</mo>
                      <mn>4</mn>
                      <mi>i</mi>
                      <mo stretchy="false">)</mo>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      (-2.5 + 4i)
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord">−</span>
                  <span className="mord">2.5</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord">4</span>
                  <span className="mord mathnormal">i</span>
                  <span className="mclose">)</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        and{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mo stretchy="false">(</mo>
                      <mn>5.5</mn>
                      <mo>+</mo>
                      <mn>1.5</mn>
                      <mi>i</mi>
                      <mo stretchy="false">)</mo>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      (5.5 + 1.5i)
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord">5.5</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord">1.5</span>
                  <span className="mord mathnormal">i</span>
                  <span className="mclose">)</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        together (we should get back{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mo stretchy="false">(</mo>
                      <mn>3</mn>
                      <mo>+</mo>
                      <mn>5.5</mn>
                      <mi>i</mi>
                      <mo stretchy="false">)</mo>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      (3 + 5.5i)
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord">3</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord">5.5</span>
                  <span className="mord mathnormal">i</span>
                  <span className="mclose">)</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        ).
      </p>
      <pre id="c7c3c432-f63c-470f-a310-58f51741fcf6" className="code">
        <code>
          // lib.rs{"\n"}
          {"\n"}/*...*/{"\n"}
          {"\n"}#[cfg(test)]{"\n"}mod tests {"{"}
          {"\n"}
          {"    "}use super::*;{"\n"}
          {"\n"}
          {"    "}#[test]{"\n"}
          {"    "}fn add_test() {"{"}
          {"\n"}
          {"        "}let z1 = Complex(-2.5, 4.);{"\n"}
          {"        "}let z2 = Complex(5.5, 1.5);{"\n"}
          {"        "}assert_eq!(add(&amp;z1, &amp;z2), Complex(3., 5.5));{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"}
        </code>
      </pre>
      <p id="cf74737c-5ef0-4092-93ae-dca4e762fd67">
        As you can see, we instantiate tuple structs with round brackets:{" "}
        <code>let z1 = Complex(-2.5, 4.);</code>, rather than the curly braces
        we use for regular structs.
      </p>
      <h3 id="72502af6-02e9-4082-9b62-33fe868528bf">
        Multiplying Complex Numbers
      </h3>
      <hr id="5aec4914-c899-4a30-98ce-75b9a374422b" />
      <p id="dfc8089a-e02b-48e6-8ac8-4519aad71661">
        Multiplying complex numbers is also straight forward:
      </p>
      <p id="36903732-80b7-409a-82ef-fd5ed83dbb7f">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mo stretchy="false">(</mo>
                      <mi>a</mi>
                      <mo>+</mo>
                      <mi>b</mi>
                      <mi>i</mi>
                      <mo stretchy="false">)</mo>
                      <mo stretchy="false">(</mo>
                      <mi>c</mi>
                      <mo>+</mo>
                      <mi>d</mi>
                      <mi>i</mi>
                      <mo stretchy="false">)</mo>
                      <mo>=</mo>
                      <mi>a</mi>
                      <mi>c</mi>
                      <mo>+</mo>
                      <mi>a</mi>
                      <mi>d</mi>
                      <mi>i</mi>
                      <mo>+</mo>
                      <mi>c</mi>
                      <mi>b</mi>
                      <mi>i</mi>
                      <mo>−</mo>
                      <mi>b</mi>
                      <mi>d</mi>
                      <mo>=</mo>
                      <mo stretchy="false">(</mo>
                      <mi>a</mi>
                      <mi>c</mi>
                      <mo>−</mo>
                      <mi>b</mi>
                      <mi>d</mi>
                      <mo stretchy="false">)</mo>
                      <mo>+</mo>
                      <mo stretchy="false">(</mo>
                      <mi>a</mi>
                      <mi>d</mi>
                      <mo>+</mo>
                      <mi>c</mi>
                      <mi>b</mi>
                      <mo stretchy="false">)</mo>
                      <mi>i</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      (a + bi)(c + di) = ac + adi + cbi - bd = (ac - bd) + (ad +
                      cb)i
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord mathnormal">a</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord mathnormal">bi</span>
                  <span className="mclose">)</span>
                  <span className="mopen">(</span>
                  <span className="mord mathnormal">c</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord mathnormal">d</span>
                  <span className="mord mathnormal">i</span>
                  <span className="mclose">)</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                  <span className="mrel">=</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.66666em", verticalAlign: "-0.08333em" }}
                  />
                  <span className="mord mathnormal">a</span>
                  <span className="mord mathnormal">c</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.77777em", verticalAlign: "-0.08333em" }}
                  />
                  <span className="mord mathnormal">a</span>
                  <span className="mord mathnormal">d</span>
                  <span className="mord mathnormal">i</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.77777em", verticalAlign: "-0.08333em" }}
                  />
                  <span className="mord mathnormal">c</span>
                  <span className="mord mathnormal">bi</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">−</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">b</span>
                  <span className="mord mathnormal">d</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                  <span className="mrel">=</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord mathnormal">a</span>
                  <span className="mord mathnormal">c</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">−</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord mathnormal">b</span>
                  <span className="mord mathnormal">d</span>
                  <span className="mclose">)</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord mathnormal">a</span>
                  <span className="mord mathnormal">d</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord mathnormal">c</span>
                  <span className="mord mathnormal">b</span>
                  <span className="mclose">)</span>
                  <span className="mord mathnormal">i</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
      </p>
      <p id="f093504f-39ea-4874-b79c-2d163803e392">
        which follows from the relation{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <msup>
                        <mi>i</mi>
                        <mn>2</mn>
                      </msup>
                      <mo>=</mo>
                      <mo>−</mo>
                      <mn>1</mn>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      i^2 = -1
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: "0.8141079999999999em",
                      verticalAlign: "0em",
                    }}
                  />
                  <span className="mord">
                    <span className="mord mathnormal">i</span>
                    <span className="msupsub">
                      <span className="vlist-t">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.8141079999999999em" }}
                          >
                            <span
                              style={{ top: "-3.063em", marginRight: "0.05em" }}
                            >
                              <span
                                className="pstrut"
                                style={{ height: "2.7em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">2</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                  <span className="mrel">=</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.72777em", verticalAlign: "-0.08333em" }}
                  />
                  <span className="mord">−</span>
                  <span className="mord">1</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        . Cool.
      </p>
      <p id="75cca763-acde-49ce-9378-15312d90628a">
        Again, trying that in Rust:
      </p>
      <pre id="9444cf4e-beb2-4365-b0a1-3c92d291f7e2" className="code">
        <code>
          pub fn mult(z1: &amp;Complex, z2: &amp;Complex) -&gt; Complex {"{"}
          {"\n"}
          {"    "}let Complex(a, b) = z1;{"\n"}
          {"    "}let Complex(c, d) = z2;{"\n"}
          {"\n"}
          {"    "}Complex(a * c - b * d, a * d + b * c){"\n"}
          {"}"}
        </code>
      </pre>
      <p id="61123291-9371-4561-9cf2-7c1c41f6a537">
        Cool cool cool. Not too hard.
      </p>
      <p id="8bc139b5-d265-4255-bf2e-dc735cc8a5ab">
        Testing this with{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mo stretchy="false">(</mo>
                      <mo>−</mo>
                      <mn>2</mn>
                      <mo>+</mo>
                      <mn>4</mn>
                      <mi>i</mi>
                      <mo stretchy="false">)</mo>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      (-2 + 4i)
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord">−</span>
                  <span className="mord">2</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord">4</span>
                  <span className="mord mathnormal">i</span>
                  <span className="mclose">)</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        and{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mo stretchy="false">(</mo>
                      <mn>2.5</mn>
                      <mo>+</mo>
                      <mn>0.5</mn>
                      <mi>i</mi>
                      <mo stretchy="false">)</mo>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      (2.5 + 0.5i)
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord">2.5</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord">0.5</span>
                  <span className="mord mathnormal">i</span>
                  <span className="mclose">)</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        , we looking for a result of{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mo stretchy="false">(</mo>
                      <mo>−</mo>
                      <mn>7</mn>
                      <mo>+</mo>
                      <mn>9</mn>
                      <mi>i</mi>
                      <mo stretchy="false">)</mo>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      (-7 + 9i)
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord">−</span>
                  <span className="mord">7</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord">9</span>
                  <span className="mord mathnormal">i</span>
                  <span className="mclose">)</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        :
      </p>
      <pre id="d4018be9-5df4-469c-b0fe-a5136c38229d" className="code">
        <code>
          #[cfg(test)]{"\n"}mod tests {"{"}
          {"\n"}
          {"\n"}
          {"    "}/*...*/{"\n"}
          {"\n"}
          {"    "}#[test]{"\n"}
          {"    "}fn mult_test() {"{"}
          {"\n"}
          {"        "}let z1 = Complex(-2., 4.);{"\n"}
          {"        "}let z2 = Complex(2.5, 0.5);{"\n"}
          {"        "}assert_eq!(mult(&amp;z1, &amp;z2), Complex(-7., 9.));
          {"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"}
        </code>
      </pre>
      <p id="84399406-4d85-4973-ab87-865974f38372"></p>
      <h3 id="45ad522b-0dda-4ae1-b7aa-fd969fa6da31">
        Dividing Complex Numbers
      </h3>
      <hr id="df39e069-3fe4-4beb-a39d-224daca72003" />
      <p id="0746ea89-31dc-43ed-9cf2-28d5ebd2e40a">
        Dividing complex numbers is more complex than the previous two
        operations.
      </p>
      <p id="3b694aac-c0eb-47f9-b08e-eda5118ca52d">
        Let’s say we want to find the result of{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mfrac>
                        <mrow>
                          <mi>a</mi>
                          <mo>+</mo>
                          <mi>b</mi>
                          <mi>i</mi>
                        </mrow>
                        <mrow>
                          <mi>c</mi>
                          <mo>+</mo>
                          <mi>d</mi>
                          <mi>i</mi>
                        </mrow>
                      </mfrac>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      \frac{"{"}a+bi{"}"}
                      {"{"}c+di{"}"}
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: "1.283439em",
                      verticalAlign: "-0.403331em",
                    }}
                  />
                  <span className="mord">
                    <span className="mopen nulldelimiter" />
                    <span className="mfrac">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.8801079999999999em" }}
                          >
                            <span style={{ top: "-2.655em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">
                                  <span className="mord mathnormal mtight">
                                    c
                                  </span>
                                  <span className="mbin mtight">+</span>
                                  <span className="mord mathnormal mtight">
                                    d
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    i
                                  </span>
                                </span>
                              </span>
                            </span>
                            <span style={{ top: "-3.23em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span
                                className="frac-line"
                                style={{ borderBottomWidth: "0.04em" }}
                              />
                            </span>
                            <span style={{ top: "-3.394em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">
                                  <span className="mord mathnormal mtight">
                                    a
                                  </span>
                                  <span className="mbin mtight">+</span>
                                  <span className="mord mathnormal mtight">
                                    bi
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="vlist-s">​</span>
                        </span>
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.403331em" }}
                          >
                            <span />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="mclose nulldelimiter" />
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        (here we are assuming{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mi>c</mi>
                      <mo>+</mo>
                      <mi>d</mi>
                      <mi>i</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">c + di</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.66666em", verticalAlign: "-0.08333em" }}
                  />
                  <span className="mord mathnormal">c</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">d</span>
                  <span className="mord mathnormal">i</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        is not equal to{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mn>0</mn>
                    </mrow>
                    <annotation encoding="application/x-tex">0</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.64444em", verticalAlign: "0em" }}
                  />
                  <span className="mord">0</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        ). Let{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mi>x</mi>
                      <mo>+</mo>
                      <mi>y</mi>
                      <mi>i</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">x + yi</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.66666em", verticalAlign: "-0.08333em" }}
                  />
                  <span className="mord mathnormal">x</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.85396em", verticalAlign: "-0.19444em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03588em" }}
                  >
                    y
                  </span>
                  <span className="mord mathnormal">i</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        be the quotient:{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mfrac>
                        <mrow>
                          <mi>a</mi>
                          <mo>+</mo>
                          <mi>b</mi>
                          <mi>i</mi>
                        </mrow>
                        <mrow>
                          <mi>c</mi>
                          <mo>+</mo>
                          <mi>d</mi>
                          <mi>i</mi>
                        </mrow>
                      </mfrac>
                      <mo>=</mo>
                      <mi>x</mi>
                      <mo>+</mo>
                      <mi>y</mi>
                      <mi>i</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      \frac{"{"}a+bi{"}"}
                      {"{"}c+di{"}"} = x+yi
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: "1.283439em",
                      verticalAlign: "-0.403331em",
                    }}
                  />
                  <span className="mord">
                    <span className="mopen nulldelimiter" />
                    <span className="mfrac">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.8801079999999999em" }}
                          >
                            <span style={{ top: "-2.655em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">
                                  <span className="mord mathnormal mtight">
                                    c
                                  </span>
                                  <span className="mbin mtight">+</span>
                                  <span className="mord mathnormal mtight">
                                    d
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    i
                                  </span>
                                </span>
                              </span>
                            </span>
                            <span style={{ top: "-3.23em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span
                                className="frac-line"
                                style={{ borderBottomWidth: "0.04em" }}
                              />
                            </span>
                            <span style={{ top: "-3.394em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">
                                  <span className="mord mathnormal mtight">
                                    a
                                  </span>
                                  <span className="mbin mtight">+</span>
                                  <span className="mord mathnormal mtight">
                                    bi
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="vlist-s">​</span>
                        </span>
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.403331em" }}
                          >
                            <span />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="mclose nulldelimiter" />
                  </span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                  <span className="mrel">=</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.66666em", verticalAlign: "-0.08333em" }}
                  />
                  <span className="mord mathnormal">x</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.85396em", verticalAlign: "-0.19444em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03588em" }}
                  >
                    y
                  </span>
                  <span className="mord mathnormal">i</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        .{" "}
      </p>
      <p id="3c3c5bd2-5624-49d4-9dcf-e128ad0ca031">
        So{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mi>a</mi>
                      <mo>+</mo>
                      <mi>b</mi>
                      <mi>i</mi>
                      <mo>=</mo>
                      <mo stretchy="false">(</mo>
                      <mi>c</mi>
                      <mo>+</mo>
                      <mi>d</mi>
                      <mi>i</mi>
                      <mo stretchy="false">)</mo>
                      <mo stretchy="false">(</mo>
                      <mi>x</mi>
                      <mo>+</mo>
                      <mi>y</mi>
                      <mi>i</mi>
                      <mo stretchy="false">)</mo>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      a+bi = (c+di)(x+yi)
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.66666em", verticalAlign: "-0.08333em" }}
                  />
                  <span className="mord mathnormal">a</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">bi</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                  <span className="mrel">=</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord mathnormal">c</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord mathnormal">d</span>
                  <span className="mord mathnormal">i</span>
                  <span className="mclose">)</span>
                  <span className="mopen">(</span>
                  <span className="mord mathnormal">x</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03588em" }}
                  >
                    y
                  </span>
                  <span className="mord mathnormal">i</span>
                  <span className="mclose">)</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        , which can be rewritten as{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mi>a</mi>
                      <mo>+</mo>
                      <mi>b</mi>
                      <mi>i</mi>
                      <mo>=</mo>
                      <mo stretchy="false">(</mo>
                      <mi>c</mi>
                      <mi>x</mi>
                      <mo>−</mo>
                      <mi>d</mi>
                      <mi>y</mi>
                      <mo stretchy="false">)</mo>
                      <mo>+</mo>
                      <mo stretchy="false">(</mo>
                      <mi>c</mi>
                      <mi>y</mi>
                      <mo>+</mo>
                      <mi>d</mi>
                      <mi>x</mi>
                      <mo stretchy="false">)</mo>
                      <mi>i</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      a+bi = (cx - dy) + (cy + dx)i{" "}
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.66666em", verticalAlign: "-0.08333em" }}
                  />
                  <span className="mord mathnormal">a</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">bi</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                  <span className="mrel">=</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord mathnormal">c</span>
                  <span className="mord mathnormal">x</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">−</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord mathnormal">d</span>
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03588em" }}
                  >
                    y
                  </span>
                  <span className="mclose">)</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03588em" }}
                  >
                    cy
                  </span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord mathnormal">d</span>
                  <span className="mord mathnormal">x</span>
                  <span className="mclose">)</span>
                  <span className="mord mathnormal">i</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        .
      </p>
      <p id="2a91c974-413f-4806-8bf3-d49d27371c98">
        Thus, we have the system of equations:{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mi>a</mi>
                      <mo>=</mo>
                      <mi>c</mi>
                      <mi>d</mi>
                      <mo>−</mo>
                      <mi>d</mi>
                      <mi>y</mi>
                      <mo separator="true">,</mo>
                      <mi>b</mi>
                      <mo>=</mo>
                      <mi>c</mi>
                      <mi>y</mi>
                      <mo>+</mo>
                      <mi>d</mi>
                      <mi>x</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      a = cd - dy, b = cy + dx
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.43056em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">a</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                  <span className="mrel">=</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.77777em", verticalAlign: "-0.08333em" }}
                  />
                  <span className="mord mathnormal">c</span>
                  <span className="mord mathnormal">d</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">−</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: "0.8888799999999999em",
                      verticalAlign: "-0.19444em",
                    }}
                  />
                  <span className="mord mathnormal">d</span>
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03588em" }}
                  >
                    y
                  </span>
                  <span className="mpunct">,</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.16666666666666666em" }}
                  />
                  <span className="mord mathnormal">b</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                  <span className="mrel">=</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: "0.7777700000000001em",
                      verticalAlign: "-0.19444em",
                    }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03588em" }}
                  >
                    cy
                  </span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">d</span>
                  <span className="mord mathnormal">x</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        .
      </p>
      <p id="20889119-ab35-4a78-ba13-2279ddcd1589">
        The unique solution to this system is:{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mi>a</mi>
                      <mo>=</mo>
                      <mfrac>
                        <mrow>
                          <mi>a</mi>
                          <mi>c</mi>
                          <mo>+</mo>
                          <mi>b</mi>
                          <mi>d</mi>
                        </mrow>
                        <mrow>
                          <msup>
                            <mi>c</mi>
                            <mn>2</mn>
                          </msup>
                          <mo>+</mo>
                          <msup>
                            <mi>d</mi>
                            <mn>2</mn>
                          </msup>
                        </mrow>
                      </mfrac>
                      <mo separator="true">,</mo>
                      <mi>b</mi>
                      <mo>=</mo>
                      <mfrac>
                        <mrow>
                          <mi>b</mi>
                          <mi>c</mi>
                          <mo>−</mo>
                          <mi>a</mi>
                          <mi>d</mi>
                        </mrow>
                        <mrow>
                          <msup>
                            <mi>c</mi>
                            <mn>2</mn>
                          </msup>
                          <mo>+</mo>
                          <msup>
                            <mi>d</mi>
                            <mn>2</mn>
                          </msup>
                        </mrow>
                      </mfrac>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      a = \frac{"{"}ac + bd{"}"}
                      {"{"}c^2 + d^2{"}"}, b = \frac{"{"}bc - ad{"}"}
                      {"{"}c^2 + d^2{"}"}
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.43056em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">a</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                  <span className="mrel">=</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: "1.283439em",
                      verticalAlign: "-0.403331em",
                    }}
                  />
                  <span className="mord">
                    <span className="mopen nulldelimiter" />
                    <span className="mfrac">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.8801079999999999em" }}
                          >
                            <span style={{ top: "-2.655em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">
                                  <span className="mord mtight">
                                    <span className="mord mathnormal mtight">
                                      c
                                    </span>
                                    <span className="msupsub">
                                      <span className="vlist-t">
                                        <span className="vlist-r">
                                          <span
                                            className="vlist"
                                            style={{
                                              height: "0.7463142857142857em",
                                            }}
                                          >
                                            <span
                                              style={{
                                                top: "-2.786em",
                                                marginRight:
                                                  "0.07142857142857144em",
                                              }}
                                            >
                                              <span
                                                className="pstrut"
                                                style={{ height: "2.5em" }}
                                              />
                                              <span className="sizing reset-size3 size1 mtight">
                                                <span className="mord mtight">
                                                  2
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                  <span className="mbin mtight">+</span>
                                  <span className="mord mtight">
                                    <span className="mord mathnormal mtight">
                                      d
                                    </span>
                                    <span className="msupsub">
                                      <span className="vlist-t">
                                        <span className="vlist-r">
                                          <span
                                            className="vlist"
                                            style={{
                                              height: "0.7463142857142857em",
                                            }}
                                          >
                                            <span
                                              style={{
                                                top: "-2.786em",
                                                marginRight:
                                                  "0.07142857142857144em",
                                              }}
                                            >
                                              <span
                                                className="pstrut"
                                                style={{ height: "2.5em" }}
                                              />
                                              <span className="sizing reset-size3 size1 mtight">
                                                <span className="mord mtight">
                                                  2
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                            <span style={{ top: "-3.23em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span
                                className="frac-line"
                                style={{ borderBottomWidth: "0.04em" }}
                              />
                            </span>
                            <span style={{ top: "-3.394em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">
                                  <span className="mord mathnormal mtight">
                                    a
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    c
                                  </span>
                                  <span className="mbin mtight">+</span>
                                  <span className="mord mathnormal mtight">
                                    b
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    d
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="vlist-s">​</span>
                        </span>
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.403331em" }}
                          >
                            <span />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="mclose nulldelimiter" />
                  </span>
                  <span className="mpunct">,</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.16666666666666666em" }}
                  />
                  <span className="mord mathnormal">b</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                  <span className="mrel">=</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: "1.283439em",
                      verticalAlign: "-0.403331em",
                    }}
                  />
                  <span className="mord">
                    <span className="mopen nulldelimiter" />
                    <span className="mfrac">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.8801079999999999em" }}
                          >
                            <span style={{ top: "-2.655em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">
                                  <span className="mord mtight">
                                    <span className="mord mathnormal mtight">
                                      c
                                    </span>
                                    <span className="msupsub">
                                      <span className="vlist-t">
                                        <span className="vlist-r">
                                          <span
                                            className="vlist"
                                            style={{
                                              height: "0.7463142857142857em",
                                            }}
                                          >
                                            <span
                                              style={{
                                                top: "-2.786em",
                                                marginRight:
                                                  "0.07142857142857144em",
                                              }}
                                            >
                                              <span
                                                className="pstrut"
                                                style={{ height: "2.5em" }}
                                              />
                                              <span className="sizing reset-size3 size1 mtight">
                                                <span className="mord mtight">
                                                  2
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                  <span className="mbin mtight">+</span>
                                  <span className="mord mtight">
                                    <span className="mord mathnormal mtight">
                                      d
                                    </span>
                                    <span className="msupsub">
                                      <span className="vlist-t">
                                        <span className="vlist-r">
                                          <span
                                            className="vlist"
                                            style={{
                                              height: "0.7463142857142857em",
                                            }}
                                          >
                                            <span
                                              style={{
                                                top: "-2.786em",
                                                marginRight:
                                                  "0.07142857142857144em",
                                              }}
                                            >
                                              <span
                                                className="pstrut"
                                                style={{ height: "2.5em" }}
                                              />
                                              <span className="sizing reset-size3 size1 mtight">
                                                <span className="mord mtight">
                                                  2
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                            <span style={{ top: "-3.23em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span
                                className="frac-line"
                                style={{ borderBottomWidth: "0.04em" }}
                              />
                            </span>
                            <span style={{ top: "-3.394em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">
                                  <span className="mord mathnormal mtight">
                                    b
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    c
                                  </span>
                                  <span className="mbin mtight">−</span>
                                  <span className="mord mathnormal mtight">
                                    a
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    d
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="vlist-s">​</span>
                        </span>
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.403331em" }}
                          >
                            <span />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="mclose nulldelimiter" />
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        [
        <a href="https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf">
          2
        </a>
        ].
      </p>
      <p id="543029c6-f9d1-4361-bcc8-c74a419b4660">
        Congrats if you got through that. Let’s see what a Rust implementation
        looks like.
      </p>
      <pre id="401f2d3a-6506-4532-95b5-ec0da66f4327" className="code">
        <code>
          pub fn div(z1: &amp;Complex, z2: &amp;Complex) -&gt; Complex {"{"}
          {"\n"}
          {"    "}let Complex(a, b) = z1;{"\n"}
          {"    "}let Complex(c, d) = z2;{"\n"}
          {"\n"}
          {"    "}Complex({"\n"}
          {"        "}(a * c + b * d) / (c.powi(2) + d.powi(2)),{"\n"}
          {"        "}(b * c - a * d) / (c.powi(2) + d.powi(2)),{"\n"}
          {"    "}){"\n"}
          {"}"}
        </code>
      </pre>
      <p id="82e56574-8ffb-4629-a321-7391ca0b7830">
        If this is the first time you’ve seen Rust’s <code>powi</code> method,
        note that it raises numbers to an integer power [
        <a href="https://doc.rust-lang.org/std/primitive.f64.html#method.powi">
          4
        </a>
        ]. You could probably guess that from reading the code - I bring it up
        to point out there also exists a <code>powf</code> method, which raises
        numbers to a floating-point number (but is generally slower than{" "}
        <code>powi</code>).
      </p>
      <p id="d02680d4-885f-4d3d-802e-2f2006fd66a3">
        As per usual, we’ll run a test. Using a dividend of{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mo stretchy="false">(</mo>
                      <mn>8</mn>
                      <mo>+</mo>
                      <mn>4</mn>
                      <mi>i</mi>
                      <mo stretchy="false">)</mo>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      (8 + 4i)
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord">8</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord">4</span>
                  <span className="mord mathnormal">i</span>
                  <span className="mclose">)</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        and a divisor of{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mo stretchy="false">(</mo>
                      <mn>3</mn>
                      <mo>−</mo>
                      <mn>3</mn>
                      <mi>i</mi>
                      <mo stretchy="false">)</mo>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      (3 -3i)
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord">3</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">−</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord">3</span>
                  <span className="mord mathnormal">i</span>
                  <span className="mclose">)</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        , we expect our program to return{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mo stretchy="false">(</mo>
                      <mfrac>
                        <mn>2</mn>
                        <mn>3</mn>
                      </mfrac>
                      <mo>+</mo>
                      <mn>2</mn>
                      <mi>i</mi>
                      <mo stretchy="false">)</mo>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      (\frac{"{"}2{"}"}
                      {"{"}3{"}"} + 2i)
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1.190108em", verticalAlign: "-0.345em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord">
                    <span className="mopen nulldelimiter" />
                    <span className="mfrac">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.845108em" }}
                          >
                            <span style={{ top: "-2.6550000000000002em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">
                                  <span className="mord mtight">3</span>
                                </span>
                              </span>
                            </span>
                            <span style={{ top: "-3.23em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span
                                className="frac-line"
                                style={{ borderBottomWidth: "0.04em" }}
                              />
                            </span>
                            <span style={{ top: "-3.394em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">
                                  <span className="mord mtight">2</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="vlist-s">​</span>
                        </span>
                        <span className="vlist-r">
                          <span className="vlist" style={{ height: "0.345em" }}>
                            <span />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="mclose nulldelimiter" />
                  </span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord">2</span>
                  <span className="mord mathnormal">i</span>
                  <span className="mclose">)</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        .
      </p>
      <pre id="52ede38d-14e7-43d7-80aa-730bfd08b4c2" className="code">
        <code>
          #[cfg(test)]{"\n"}mod tests {"{"}
          {"\n"}
          {"\n"}
          {"    "}/*...*/{"\n"}
          {"\n"}
          {"    "}#[test]{"\n"}
          {"    "}fn div_test() {"{"}
          {"\n"}
          {"        "}let z1 = Complex(8., 4.);{"\n"}
          {"        "}let z2 = Complex(3., -3.);{"\n"}
          {"\n"}
          {"        "}assert_eq!(div(&amp;z1, &amp;z2), Complex(2. / 3., 2.))
          {"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"}
          {"\n"}
          {"\t"}
          {"\t"}
        </code>
      </pre>
      <p id="f89b8adf-d4b6-4929-9d51-5546e29d1b71"></p>
      <h3 id="362af02d-fbe6-407b-9cf4-793d17078165">Magnitude </h3>
      <hr id="7583f8de-9dc0-4d83-8993-146ae3b33954" />
      <p id="f555229d-e9d2-40b4-bca5-362bc109913b">
        There’s something I haven’t told you. This installment of SOTR is a
        setup for next week’s. Here’s a hint on what we’ll be doing:{" "}
      </p>
      <p id="2ae153f2-05c8-40f9-b66d-4a17cb79fb2b"></p>
      <figure id="12e9bd4c-0504-47a4-b08a-a0adc36e8089" className="image">
        <img
          style={{ width: "432px" }}
          src="https://cdn-images-1.medium.com/max/800/1*cMv6pKdAceKZYKWrJc7MCw.png"
        />
      </figure>
      <p id="d31f29ed-99c6-489b-b556-18461eb3a051">
        We’ll need one more operation on complex numbers for next week: the
        magnitude.{" "}
      </p>
      <p id="30650e62-b56c-4203-8516-4487ed06f95d">
        The magnitude of a complex number{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mi>z</mi>
                      <mo>=</mo>
                      <mi>a</mi>
                      <mo>+</mo>
                      <mi>b</mi>
                      <mi>i</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      z = a+bi
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.43056em", verticalAlign: "0em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.04398em" }}
                  >
                    z
                  </span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                  <span className="mrel">=</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.66666em", verticalAlign: "-0.08333em" }}
                  />
                  <span className="mord mathnormal">a</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                  <span className="mbin">+</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2222222222222222em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">bi</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        is{" "}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.2/katex.min.css')",
          }}
        />
        <span
          data-token-index={0}
          contentEditable="false"
          className="notion-text-equation-token"
          style={{
            userSelect: "all",
            WebkitUserSelect: "all",
            MozUserSelect: "all",
          }}
        >
          <span />
          <span>
            <span className="katex">
              <span className="katex-mathml">
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <semantics>
                    <mrow>
                      <mi mathvariant="normal">∣</mi>
                      <mi>z</mi>
                      <mi mathvariant="normal">∣</mi>
                      <mo>=</mo>
                      <msqrt>
                        <mrow>
                          <msup>
                            <mi>a</mi>
                            <mn>2</mn>
                          </msup>
                          <mo>+</mo>
                          <msup>
                            <mi>b</mi>
                            <mn>2</mn>
                          </msup>
                        </mrow>
                      </msqrt>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      |z| = \sqrt{"{"}a^2 + b^2{"}"}
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mord">∣</span>
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.04398em" }}
                  >
                    z
                  </span>
                  <span className="mord">∣</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                  <span className="mrel">=</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.2777777777777778em" }}
                  />
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: "1.04em",
                      verticalAlign: "-0.12661100000000003em",
                    }}
                  />
                  <span className="mord sqrt">
                    <span className="vlist-t vlist-t2">
                      <span className="vlist-r">
                        <span
                          className="vlist"
                          style={{ height: "0.913389em" }}
                        >
                          <span className="svg-align" style={{ top: "-3em" }}>
                            <span
                              className="pstrut"
                              style={{ height: "3em" }}
                            />
                            <span
                              className="mord"
                              style={{ paddingLeft: "0.833em" }}
                            >
                              <span className="mord">
                                <span className="mord mathnormal">a</span>
                                <span className="msupsub">
                                  <span className="vlist-t">
                                    <span className="vlist-r">
                                      <span
                                        className="vlist"
                                        style={{ height: "0.740108em" }}
                                      >
                                        <span
                                          style={{
                                            top: "-2.9890000000000003em",
                                            marginRight: "0.05em",
                                          }}
                                        >
                                          <span
                                            className="pstrut"
                                            style={{ height: "2.7em" }}
                                          />
                                          <span className="sizing reset-size6 size3 mtight">
                                            <span className="mord mtight">
                                              2
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                              <span
                                className="mspace"
                                style={{ marginRight: "0.2222222222222222em" }}
                              />
                              <span className="mbin">+</span>
                              <span
                                className="mspace"
                                style={{ marginRight: "0.2222222222222222em" }}
                              />
                              <span className="mord">
                                <span className="mord mathnormal">b</span>
                                <span className="msupsub">
                                  <span className="vlist-t">
                                    <span className="vlist-r">
                                      <span
                                        className="vlist"
                                        style={{ height: "0.740108em" }}
                                      >
                                        <span
                                          style={{
                                            top: "-2.9890000000000003em",
                                            marginRight: "0.05em",
                                          }}
                                        >
                                          <span
                                            className="pstrut"
                                            style={{ height: "2.7em" }}
                                          />
                                          <span className="sizing reset-size6 size3 mtight">
                                            <span className="mord mtight">
                                              2
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span style={{ top: "-2.873389em" }}>
                            <span
                              className="pstrut"
                              style={{ height: "3em" }}
                            />
                            <span
                              className="hide-tail"
                              style={{ minWidth: "0.853em", height: "1.08em" }}
                            >
                              <svg
                                width="400em"
                                height="1.08em"
                                viewBox="0 0 400000 1080"
                                preserveAspectRatio="xMinYMin slice"
                              >
                                <path
                                  d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"
                                />
                              </svg>
                            </span>
                          </span>
                        </span>
                        <span className="vlist-s">​</span>
                      </span>
                      <span className="vlist-r">
                        <span
                          className="vlist"
                          style={{ height: "0.12661100000000003em" }}
                        >
                          <span />
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        .
      </p>
      <p id="85884b11-684d-4ebb-ad91-0a625e6e1c96">
        This is easy to implement in Rust:
      </p>
      <pre id="8fbdf14b-1e84-4442-814e-41fa16d47122" className="code">
        <code>
          pub fn magnitude(z: &amp;Complex) -&gt; f64 {"{"}
          {"\n"}
          {"    "}let Complex(a, b) = z;{"\n"}
          {"\n"}
          {"    "}(a.powi(2) + b.powi(2)).sqrt(){"\n"}
          {"}"}
        </code>
      </pre>
      <p id="91957d2a-940a-4331-a44c-1dabbe89147c">
        And we’ll finish off with a test:
      </p>
      <pre id="0e23e866-6e69-4e66-b804-409049e6b39c" className="code">
        <code>
          #[cfg(test)]{"\n"}mod tests {"{"}
          {"\n"}
          {"    "}
          {"\n"}
          {"\t"}
          {"  "}/*...*/{"\n"}
          {"\n"}
          {"    "}#[test]{"\n"}
          {"    "}fn magnitude_test() {"{"}
          {"\n"}
          {"        "}let z = Complex(-3., 4.);{"\n"}
          {"        "}assert_eq!(magnitude(&amp;z), 5.);{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"}
        </code>
      </pre>
      <p id="3f387a00-b5ac-4d9b-b474-c952169c3cde">
        If that passed for you then congratulations! You’ve completed this
        week’s exercises and are ready for next week’s admittedly more exciting
        installment.
      </p>
      <p id="e9b4fd89-fabb-474f-87ca-504e17c52e6b"></p>
      <p id="8cba6cf8-9e99-4f7e-bd2c-5ab6ed7c3fbd">
        Thank you for coding with me, friends. I hope this post has left you one
        step closer to becoming the best programmer you can be.{" "}
      </p>
      <p id="962270a6-9ca9-49da-b3c7-7eac84e60e10"></p>
      <h3 id="b815d19d-ffa4-402f-9f24-c8cbae0ba512">References</h3>
      <hr id="c89fbc3f-5a58-43a4-b6b6-eefd3292888d" />
      <p id="7fb88330-c239-4db8-9da2-c26b18ec6481">
        [1]{" "}
        <a href="https://www.maa.org/press/maa-reviews/visual-complex-analysis">
          Needham, T. (2009).{" "}
        </a>
        <a href="https://www.maa.org/press/maa-reviews/visual-complex-analysis">
          <em>Visual Complex Analysis. </em>
        </a>
        <a href="https://www.maa.org/press/maa-reviews/visual-complex-analysis">
          Oxford University Press.
        </a>
      </p>
      <p id="22d619cc-79f3-42b8-9f5d-7a0c7dc71753">
        [2]{" "}
        <a href="https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf">
          Ahlfors, L. (1953).{" "}
        </a>
        <a href="https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf">
          <em>
            Complex Analysis: An Introduction to The Theory of Analytic
            Functions of One Complex Variable.{" "}
          </em>
        </a>
        <a href="https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf">
          McGraw-Hill Education.
        </a>
      </p>
      <p id="b1ea6fa6-2707-4a3c-83c3-abbbe223707a">
        [3]{" "}
        <a href="https://doc.rust-lang.org/book/">
          Nichols, C. and Klabnik, S. (2018).{" "}
        </a>
        <a href="https://doc.rust-lang.org/book/">
          <em>The Rust Programming Language.</em>
        </a>
        <a href="https://doc.rust-lang.org/book/"> No Starch Press.</a>
      </p>
      <p id="104de9b1-d068-43c0-88bd-cae9ed389387">
        [4]{" "}
        <a href="https://doc.rust-lang.org/std/primitive.f64.html#method.powi">
          Rust Documation on{" "}
        </a>
        <a href="https://doc.rust-lang.org/std/primitive.f64.html#method.powi">
          <code>powi</code>
        </a>
      </p>
      <p id="d89f071e-ab57-47e1-8843-d243e4b378d3"></p>
    </div>
  );
};

export default ComplexNumbers;
