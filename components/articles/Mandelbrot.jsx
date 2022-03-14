import styles from "./articleStyles.module.scss";
import ReactPlayer from "react-player";
import EMAIL_ADDRESS from "../../constants/emailAddress";

const Mandelbrot = () => {
  return (
    <div className="page-body">
      <p id="4bb70788-7b72-4d33-a7fe-c73fcccbfaca">
        <em>
          <strong>Shaking off the Rust</strong>
        </em>{" "}
        is a series of exercises with the Rust programing language. The purpose
        of the series is to improve both my and my dear reader’s abilities with
        Rust by building things. Plus, by actually building stuff, we{`'`}ll
        learn about an array of technological concepts in the process. In this
        installment, we’re going to create our own Mandelbrot set.
      </p>
      <p id="af041a60-5413-435f-9283-8cf2ddeb60d3"></p>
      <p id="20582875-f4d6-440e-8b1d-29b59b3f125d">
        This installment’s Github repo:{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/josht-jpg/rust_mandelbrot_set"
        >
          https://github.com/josht-jpg/rust_mandelbrot_set
        </a>
      </p>
      <h3 id="e0769af2-99ee-49da-a303-575bf67e790c">
        What is a Mandelbrot Set?
      </h3>
      <hr id="b281e081-412d-4d3f-9a42-40abe789d593" />
      <p id="73d90ffe-ee56-48b0-916d-00531e7f6916">
        The Mandelbrot set is a mathematical object discovered by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.theguardian.com/science/2010/oct/17/benoit-mandelbrot-obituary"
        >
          Benoit Mandelbrot
        </a>{" "}
        in 1980 [
        <a
          href="https://link.springer.com/book/10.1007/978-1-4757-4740-9"
          target="_blank"
          rel="noreferrer"
        >
          1
        </a>
        ].{" "}
      </p>
      <p id="f703a6b4-c252-448d-8453-944bf2220eb6">
        The Mandelbrot set lives in the domain of complex numbers. Last week’s
        installment of SOTR was all about complex numbers. This installment will
        build on last week’s. If you haven’t gone through it already, you may
        want to give it a read, or just grab the code from Github:
      </p>
      <ul id="5e9ed3f8-1f39-4058-85fa-ab339dc5c52b" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          Last week’s installment on complex numbers:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.sotr.blog/articles/complex-numbers"
          >
            https://www.sotr.blog/articles/complex-numbers
          </a>
        </li>
      </ul>
      <ul id="6c0b44bf-1dab-42a6-899f-d8d57ebf7083" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          Github repo from last week’s installment:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/josht-jpg/rust-complex-numbers"
          >
            https://github.com/josht-jpg/rust-complex-numbers
          </a>
        </li>
      </ul>
      <p id="7f579876-049d-46aa-8dac-15c8aea55f04"></p>
      <p id="9f4e549c-dc72-410e-b7f9-cd5e59a7d0a7">
        To understand what the Mandelbrot set actually is, first consider the
        function{" "}
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
                      <msub>
                        <mi>f</mi>
                        <mi>c</mi>
                      </msub>
                      <mo stretchy="false">(</mo>
                      <mi>z</mi>
                      <mo stretchy="false">)</mo>
                      <mo>=</mo>
                      <msup>
                        <mi>z</mi>
                        <mn>2</mn>
                      </msup>
                      <mo>+</mo>
                      <mi>c</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      f_c(z) = z^2 + c
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
                  <span className="mord">
                    <span
                      className="mord mathnormal"
                      style={{ marginRight: "0.10764em" }}
                    >
                      f
                    </span>
                    <span className="msupsub">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.151392em" }}
                          >
                            <span
                              style={{
                                top: "-2.5500000000000003em",
                                marginLeft: "-0.10764em",
                                marginRight: "0.05em",
                              }}
                            >
                              <span
                                className="pstrut"
                                style={{ height: "2.7em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mathnormal mtight">
                                  c
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="vlist-s">​</span>
                        </span>
                        <span className="vlist-r">
                          <span className="vlist" style={{ height: "0.15em" }}>
                            <span />
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="mopen">(</span>
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.04398em" }}
                  >
                    z
                  </span>
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
                    style={{
                      height: "0.897438em",
                      verticalAlign: "-0.08333em",
                    }}
                  />
                  <span className="mord">
                    <span
                      className="mord mathnormal"
                      style={{ marginRight: "0.04398em" }}
                    >
                      z
                    </span>
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
                    style={{ height: "0.43056em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">c</span>
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
                      <mi>z</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">z</annotation>
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
                      <mi>c</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">c</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.43056em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">c</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        are complex numbers.
      </p>
      <p id="9f5e69ac-ad74-489d-bf10-b62bc87ea1c2">
        Let{" "}
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
                      <mo>=</mo>
                      <mo>−</mo>
                      <mn>1</mn>
                    </mrow>
                    <annotation encoding="application/x-tex">c = -1</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.43056em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">c</span>
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
        , and consider{" "}
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
                      <mi>f</mi>
                      <mo stretchy="false">(</mo>
                      <mn>0</mn>
                      <mo stretchy="false">)</mo>
                    </mrow>
                    <annotation encoding="application/x-tex">f(0)</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.10764em" }}
                  >
                    f
                  </span>
                  <span className="mopen">(</span>
                  <span className="mord">0</span>
                  <span className="mclose">)</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        . We have that{" "}
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
                      <mi>f</mi>
                      <mo stretchy="false">(</mo>
                      <mn>0</mn>
                      <mo stretchy="false">)</mo>
                      <mo>=</mo>
                      <msup>
                        <mn>0</mn>
                        <mn>2</mn>
                      </msup>
                      <mo>+</mo>
                      <mo stretchy="false">(</mo>
                      <mo>−</mo>
                      <mn>1</mn>
                      <mo stretchy="false">)</mo>
                      <mo>=</mo>
                      <mo>−</mo>
                      <mn>1</mn>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      f(0) = 0^2 + (-1) = -1
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
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.10764em" }}
                  >
                    f
                  </span>
                  <span className="mopen">(</span>
                  <span className="mord">0</span>
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
                    style={{
                      height: "0.897438em",
                      verticalAlign: "-0.08333em",
                    }}
                  />
                  <span className="mord">
                    <span className="mord">0</span>
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
                  <span className="mord">−</span>
                  <span className="mord">1</span>
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
        . Now plug the result,{" "}
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
                      <mo>−</mo>
                      <mn>1</mn>
                    </mrow>
                    <annotation encoding="application/x-tex">-1</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
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
        , back into{" "}
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
                      <mi>f</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">f</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: "0.8888799999999999em",
                      verticalAlign: "-0.19444em",
                    }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.10764em" }}
                  >
                    f
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        :
      </p>
      <p id="c62abb45-fd05-46c2-bc16-9632fcc0f62c">
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
                      <msub>
                        <mi>f</mi>
                        <mrow>
                          <mo>−</mo>
                          <mn>1</mn>
                        </mrow>
                      </msub>
                      <mo stretchy="false">(</mo>
                      <mo>−</mo>
                      <mn>1</mn>
                      <mo stretchy="false">)</mo>
                      <mo>=</mo>
                      <mo stretchy="false">(</mo>
                      <mo>−</mo>
                      <mn>1</mn>
                      <msup>
                        <mo stretchy="false">)</mo>
                        <mn>2</mn>
                      </msup>
                      <mo>+</mo>
                      <mo stretchy="false">(</mo>
                      <mo>−</mo>
                      <mn>1</mn>
                      <mo stretchy="false">)</mo>
                      <mo>=</mo>
                      <mn>0</mn>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      f_{"{"}-1{"}"}(-1) = (-1)^2 + (-1) = 0
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
                  <span className="mord">
                    <span
                      className="mord mathnormal"
                      style={{ marginRight: "0.10764em" }}
                    >
                      f
                    </span>
                    <span className="msupsub">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.301108em" }}
                          >
                            <span
                              style={{
                                top: "-2.5500000000000003em",
                                marginLeft: "-0.10764em",
                                marginRight: "0.05em",
                              }}
                            >
                              <span
                                className="pstrut"
                                style={{ height: "2.7em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">
                                  <span className="mord mtight">−</span>
                                  <span className="mord mtight">1</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="vlist-s">​</span>
                        </span>
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.208331em" }}
                          >
                            <span />
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="mopen">(</span>
                  <span className="mord">−</span>
                  <span className="mord">1</span>
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
                    style={{ height: "1.064108em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord">−</span>
                  <span className="mord">1</span>
                  <span className="mclose">
                    <span className="mclose">)</span>
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
                  <span className="mord">−</span>
                  <span className="mord">1</span>
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
                    style={{ height: "0.64444em", verticalAlign: "0em" }}
                  />
                  <span className="mord">0</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        .
      </p>
      <p id="24d1f7ae-a143-4525-90a9-6b73375dd332">
        So when{" "}
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
                      <mo>=</mo>
                      <mo>−</mo>
                      <mn>1</mn>
                    </mrow>
                    <annotation encoding="application/x-tex">c = -1</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.43056em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">c</span>
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
        and we start with{" "}
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
                      <mi>f</mi>
                      <mo stretchy="false">(</mo>
                      <mn>0</mn>
                      <mo stretchy="false">)</mo>
                    </mrow>
                    <annotation encoding="application/x-tex">f(0)</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.10764em" }}
                  >
                    f
                  </span>
                  <span className="mopen">(</span>
                  <span className="mord">0</span>
                  <span className="mclose">)</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        , we can keep plugging the previous result of the function back into
        itself, and we will not encounter any numbers with a large{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://web.stanford.edu/~boyd/ee102/complex-primer.pdf"
        >
          magnitude
        </a>
        . But if we do the same with{" "}
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
                      <mo>=</mo>
                      <mn>1</mn>
                    </mrow>
                    <annotation encoding="application/x-tex">c=1</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.43056em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">c</span>
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
                    style={{ height: "0.64444em", verticalAlign: "0em" }}
                  />
                  <span className="mord">1</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        , the results will become increasingly larger:
      </p>
      <p id="f09c49ee-6549-40b6-ab08-37a75ad64b04">
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
                      <msub>
                        <mi>f</mi>
                        <mn>1</mn>
                      </msub>
                      <mo stretchy="false">(</mo>
                      <mn>0</mn>
                      <mo stretchy="false">)</mo>
                      <mo>=</mo>
                      <mo stretchy="false">(</mo>
                      <mn>0</mn>
                      <msup>
                        <mo stretchy="false">)</mo>
                        <mn>2</mn>
                      </msup>
                      <mo>+</mo>
                      <mn>1</mn>
                      <mo>=</mo>
                      <mn>1.</mn>
                      <mspace width="0.8535826771653543em" />
                      <msub>
                        <mi>f</mi>
                        <mn>1</mn>
                      </msub>
                      <mo stretchy="false">(</mo>
                      <mn>1</mn>
                      <mo stretchy="false">)</mo>
                      <mo>=</mo>
                      <mo stretchy="false">(</mo>
                      <mn>1</mn>
                      <msup>
                        <mo stretchy="false">)</mo>
                        <mn>2</mn>
                      </msup>
                      <mo>+</mo>
                      <mn>1</mn>
                      <mo>=</mo>
                      <mn>2.</mn>
                      <mspace width="0.8535826771653543em" />
                      <msub>
                        <mi>f</mi>
                        <mn>1</mn>
                      </msub>
                      <mo stretchy="false">(</mo>
                      <mn>2</mn>
                      <mo stretchy="false">)</mo>
                      <mo>=</mo>
                      <mo stretchy="false">(</mo>
                      <mn>2</mn>
                      <msup>
                        <mo stretchy="false">)</mo>
                        <mn>2</mn>
                      </msup>
                      <mo>+</mo>
                      <mn>1</mn>
                      <mo>=</mo>
                      <mn>5...</mn>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      f_1(0) = (0)^2 + 1 = 1. \hspace{"{"}3mm{"}"} f_1(1) =
                      (1)^2 + 1 = 2. \hspace{"{"}3mm{"}"} f_1(2) = (2)^2 + 1 =
                      5...{" "}
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
                  <span className="mord">
                    <span
                      className="mord mathnormal"
                      style={{ marginRight: "0.10764em" }}
                    >
                      f
                    </span>
                    <span className="msupsub">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.30110799999999993em" }}
                          >
                            <span
                              style={{
                                top: "-2.5500000000000003em",
                                marginLeft: "-0.10764em",
                                marginRight: "0.05em",
                              }}
                            >
                              <span
                                className="pstrut"
                                style={{ height: "2.7em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">1</span>
                              </span>
                            </span>
                          </span>
                          <span className="vlist-s">​</span>
                        </span>
                        <span className="vlist-r">
                          <span className="vlist" style={{ height: "0.15em" }}>
                            <span />
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="mopen">(</span>
                  <span className="mord">0</span>
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
                    style={{ height: "1.064108em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord">0</span>
                  <span className="mclose">
                    <span className="mclose">)</span>
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
                    style={{ height: "0.64444em", verticalAlign: "0em" }}
                  />
                  <span className="mord">1</span>
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
                  <span className="mord">1.</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.8535826771653543em" }}
                  />
                  <span className="mord">
                    <span
                      className="mord mathnormal"
                      style={{ marginRight: "0.10764em" }}
                    >
                      f
                    </span>
                    <span className="msupsub">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.30110799999999993em" }}
                          >
                            <span
                              style={{
                                top: "-2.5500000000000003em",
                                marginLeft: "-0.10764em",
                                marginRight: "0.05em",
                              }}
                            >
                              <span
                                className="pstrut"
                                style={{ height: "2.7em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">1</span>
                              </span>
                            </span>
                          </span>
                          <span className="vlist-s">​</span>
                        </span>
                        <span className="vlist-r">
                          <span className="vlist" style={{ height: "0.15em" }}>
                            <span />
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="mopen">(</span>
                  <span className="mord">1</span>
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
                    style={{ height: "1.064108em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord">1</span>
                  <span className="mclose">
                    <span className="mclose">)</span>
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
                    style={{ height: "0.64444em", verticalAlign: "0em" }}
                  />
                  <span className="mord">1</span>
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
                  <span className="mord">2.</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.8535826771653543em" }}
                  />
                  <span className="mord">
                    <span
                      className="mord mathnormal"
                      style={{ marginRight: "0.10764em" }}
                    >
                      f
                    </span>
                    <span className="msupsub">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.30110799999999993em" }}
                          >
                            <span
                              style={{
                                top: "-2.5500000000000003em",
                                marginLeft: "-0.10764em",
                                marginRight: "0.05em",
                              }}
                            >
                              <span
                                className="pstrut"
                                style={{ height: "2.7em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">1</span>
                              </span>
                            </span>
                          </span>
                          <span className="vlist-s">​</span>
                        </span>
                        <span className="vlist-r">
                          <span className="vlist" style={{ height: "0.15em" }}>
                            <span />
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="mopen">(</span>
                  <span className="mord">2</span>
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
                    style={{ height: "1.064108em", verticalAlign: "-0.25em" }}
                  />
                  <span className="mopen">(</span>
                  <span className="mord">2</span>
                  <span className="mclose">
                    <span className="mclose">)</span>
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
                    style={{ height: "0.64444em", verticalAlign: "0em" }}
                  />
                  <span className="mord">1</span>
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
                    style={{ height: "0.64444em", verticalAlign: "0em" }}
                  />
                  <span className="mord">5...</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
      </p>
      <p id="9ce2099d-3dfc-46f5-bff0-91febeecd1e3">
        So, depending on{" "}
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
                    </mrow>
                    <annotation encoding="application/x-tex">c</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.43056em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">c</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        , one of two things will happen when we begin with{" "}
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
                      <mi>f</mi>
                      <mo stretchy="false">(</mo>
                      <mn>0</mn>
                      <mo stretchy="false">)</mo>
                    </mrow>
                    <annotation encoding="application/x-tex">f(0)</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "1em", verticalAlign: "-0.25em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.10764em" }}
                  >
                    f
                  </span>
                  <span className="mopen">(</span>
                  <span className="mord">0</span>
                  <span className="mclose">)</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        and repeatedly plug the previous result of the function back into
        itself:
      </p>
      <ol
        type={1}
        id="c114fbd3-6e0c-44c8-8540-e63a3100a773"
        className="numbered-list"
        start={1}
      >
        <li>
          The results of{" "}
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
                        <mi>f</mi>
                      </mrow>
                      <annotation encoding="application/x-tex">f</annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{
                        height: "0.8888799999999999em",
                        verticalAlign: "-0.19444em",
                      }}
                    />
                    <span
                      className="mord mathnormal"
                      style={{ marginRight: "0.10764em" }}
                    >
                      f
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>{" "}
          under iteration will eventually have a magnitude larger than 2.
        </li>
      </ol>
      <ol
        type={1}
        id="877cc0b3-b5a6-4d12-90f8-863bbb54e8fa"
        className="numbered-list"
        start={2}
      >
        <li>
          The results of{" "}
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
                        <mi>f</mi>
                      </mrow>
                      <annotation encoding="application/x-tex">f</annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{
                        height: "0.8888799999999999em",
                        verticalAlign: "-0.19444em",
                      }}
                    />
                    <span
                      className="mord mathnormal"
                      style={{ marginRight: "0.10764em" }}
                    >
                      f
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>{" "}
          under iteration will always have a magnitude less than or equal to 2.
        </li>
      </ol>
      <p id="80abd4e7-680f-4f38-a77c-2dbd834de897">
        The Mandelbrot set is the set of all complex numbers where case 2 holds
        [
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=NGMRB4O922I&t=324s"
        >
          2
        </a>
        ].
      </p>
      <p id="7562de2e-b25d-493b-988a-bd3dc9ab8d8e">
        If you’d like an explanation of the Mandelbrot set on video, this one
        from{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.dpmms.cam.ac.uk/~hk439/"
        >
          Holly Krieger
        </a>{" "}
        on{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCoxcjq-8xIDTYp3uz647V5A"
        >
          Numberphile
        </a>{" "}
        is the best you’ll get:
      </p>
      <div className={styles.playerContainer}>
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=NGMRB4O922I&t=324s"}
          controls={true}
        />
      </div>
      <p id="a08ab778-2ec8-443e-9324-cb5be7830180"></p>
      <h3 id="a6d6d1ed-366f-4dd8-b81a-e87e33e67d2f">Getting Started</h3>
      <hr id="255477ad-1d78-4815-98c3-7b731f4de41d" />
      <p id="6333ae74-85cd-4395-a70a-3252db6c51da">
        We’ll start by creating a new library in Cargo:
      </p>
      <pre id="61320594-4d74-4e20-a078-11703d150cb4" className="code">
        <code>cargo new mandelbrot --lib{"\n"}cd mandelbrot</code>
      </pre>
      <p id="88c4abfd-c351-45ec-ab8b-648423fe19b3">
        There are two dependencies we’ll need.{" "}
      </p>
      <p id="3cf56eb6-154c-4464-91fe-9cfbe5342073">
        The first is our suite of functions on complex numbers from last week’s
        installment of SOTR. Make sure the <code>complex_numbers</code> library
        from last week is in the same directory as your <code>mandelbrot</code>{" "}
        library.
      </p>
      <p id="e8d5d766-76ce-402a-bc3b-7216d850dcb8">
        The second dependency is the{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.rs/plotters/latest/plotters/"
        >
          plotters library
        </a>
        , which is a lovely library for rendering figures, plots, and charts.
        We’ll use it to visualize the Mandelbrot set.
      </p>
      <p id="3a1c1081-5fb1-40c6-8424-ba25547eec29">
        So add those dependencies to your <code>Cargo.toml</code> file:
      </p>
      <pre id="d5d26621-65f9-406d-bd18-5a179d5288eb" className="code">
        <code>
          {"// "} Cargo.toml{"\n"}
          {"\n"}
          {"/*...*/"}
          {"\n"}
          {"\n"}[dependencies]{"\n"}complex_numbers={"{"}
          path={`"`}../complex_numbers{`"`}
          {"}"}
          {"\n"}plotters={`"`}^0.3.1{`"`}
        </code>
      </pre>
      <p id="8fb6f444-2a2d-4854-ac6e-c0153ac44435"></p>
      <p id="9e8810d5-501a-44fc-83cd-5248635c0b0b">
        And in our <code>lib.rs</code>, we’ll bring in everything we need from
        those dependencies:
      </p>
      <pre id="43b8410e-2649-41a6-812e-6858695be3fc" className="code">
        <code>
          {`// `} lib.rs{"\n"}
          {"\n"}use complex_numbers::{"{"}add, magnitude, mult, Complex{"}"};
          {"\n"}use plotters::prelude::*;
        </code>
      </pre>
      <h3 id="b612ad6a-35dd-4ab7-921c-7b69b9358eb3">
        Coding the Mandelbrot Set
      </h3>
      <hr id="9d595ac6-aaef-4c8a-9f11-5327c84b9d74" />
      <p id="a5befebe-22b6-451d-9061-f54b9161f625">
        We’ll start by creating a function called <code>mandelbrot</code>, which
        will calculate the number of iterations before the magnitude of{" "}
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
                      <msub>
                        <mi>f</mi>
                        <mi>z</mi>
                      </msub>
                    </mrow>
                    <annotation encoding="application/x-tex">f_z</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: "0.8888799999999999em",
                      verticalAlign: "-0.19444em",
                    }}
                  />
                  <span className="mord">
                    <span
                      className="mord mathnormal"
                      style={{ marginRight: "0.10764em" }}
                    >
                      f
                    </span>
                    <span className="msupsub">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.151392em" }}
                          >
                            <span
                              style={{
                                top: "-2.5500000000000003em",
                                marginLeft: "-0.10764em",
                                marginRight: "0.05em",
                              }}
                            >
                              <span
                                className="pstrut"
                                style={{ height: "2.7em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span
                                  className="mord mathnormal mtight"
                                  style={{ marginRight: "0.04398em" }}
                                >
                                  z
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="vlist-s">​</span>
                        </span>
                        <span className="vlist-r">
                          <span className="vlist" style={{ height: "0.15em" }}>
                            <span />
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        becomes larger than{" "}
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
                      <mn>2</mn>
                    </mrow>
                    <annotation encoding="application/x-tex">2</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.64444em", verticalAlign: "0em" }}
                  />
                  <span className="mord">2</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        (if it does become larger than{" "}
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
                      <mn>2</mn>
                    </mrow>
                    <annotation encoding="application/x-tex">2</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.64444em", verticalAlign: "0em" }}
                  />
                  <span className="mord">2</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        ).
      </p>
      <p id="fcddabcb-e95c-4864-860a-95e68fc08d64">
        <code>mandelbrot</code> takes in
      </p>
      <div className="indented">
        <ul id="dbb8c08e-eeae-4f51-b5ce-7e68002752ab" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>
            <code>z</code> - a complex number,{" "}
          </li>
        </ul>
        <p id="d368502d-575a-4edb-a428-a527ed79ea4d"> and</p>
        <ul id="a71bc07e-eb78-4169-b93f-f7b9308ee450" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>
            <code>num_iterations</code> - the number of iterations before{" "}
            <code>z</code> is determined to be a member of the Mandelbrot set.{" "}
          </li>
        </ul>
      </div>
      <p />
      <p id="3592ecd6-d7d3-4148-b745-1cbbfee256d8">
        So if <code>mandelbrot(z, num_iterations) == num_iterations</code>, then
        we classify <code>z</code> as being a member of the Mandelbrot set.
      </p>
      <p id="12bf05c5-0a85-4129-bc01-ff55afa8c759"></p>
      <p id="9f46242f-7f3a-4dc5-b31f-e28a56d2fa97">
        I’ll begin with pseudocode for <code>mandelbrot</code>, followed by a
        Rust implementation.
      </p>
      <pre id="14a334f5-b92f-4d40-854e-a9b8149d8ba9" className="code">
        <code>
          mandelbrot arguments {"{"}
          {"\n"}
          {"\t"}z: a complex number,{"\n"}
          {"\t"}num_iterations: the number of iterations before z is determined
          to be a member of the Mandelbrot set{"\n"}
          {"}"}
          {"\n"}
          {"\n"}function mandelbrot(z, num_iterations) {"\n"}returning the
          number of iterations it takes z to diverge (or num_iterations, if z
          does not diverge){"\n"}
          {"{"}
          {"\n"}
          {"\t"}diverge_count = 0{"\n"}
          {"\t"}
          {"\n"}
          {"\t"}z1 = z{"\n"}
          {"\t"}while diverge_count &lt;= num_iterations {"{"}
          {"\n"}
          {"\t"}
          {"\t"}if magnitude(z1) &gt; 2 {"{"}
          {"\n"}
          {"\t"}
          {"\t"}
          {"\t"}return diverge_count{"\n"}
          {"\t"}
          {"\t"}
          {"}"}
          {"\n"}
          {"\n"}
          {"\t"}
          {"\t"}z1 = z1^2 + z{"\n"}
          {"\t"}
          {"\t"}diverge_count = diverge_count + 1{"\n"}
          {"\t"}
          {"}"}
          {"\n"}
          {"\t"}return num_iterations{"\n"}
          {"}"}
          {"\n"}
        </code>
      </pre>
      <p id="7f20b519-5afb-4dcf-b7a6-f282ceab30f2"></p>
      <p id="b5e226f7-c893-47ae-bb28-815fd1ce34a5">
        And here’s some Rust for ya:
      </p>
      <pre id="26b6d4f4-03f6-444a-aad4-627607639e33" className="code">
        <code>
          {`// `} lib.rs{"\n"}
          {"\n"}
          {"/*...*/"}
          {"\n"}
          {"\n"}fn mandelbrot(z: &amp;Complex, num_iterations: u32) -&gt; u32{" "}
          {"{"}
          {"\n"}
          {"    "}let mut diverge_count: u32 = 0;{"\n"}
          {"\n"}
          {"    "}let mut z1 = Complex(0., 0.);{"\n"}
          {"    "}while diverge_count &lt;= num_iterations {"{"}
          {"\n"}
          {"        "}if magnitude(&amp;z1) &gt; 2. {"{"}
          {"\n"}
          {"            "}return diverge_count;{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"\n"}
          {"        "}z1 = add(&amp;mult(&amp;z1, &amp;z1), &amp;z);{"\n"}
          {"        "}diverge_count += 1;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}num_iterations{"\n"}
          {"}"}
        </code>
      </pre>
      <p id="f1171641-6d83-476a-b439-1f7d939c00fc">
        I’ll note a few things about this code. If you have an intermediate or
        better understanding of Rust, these bullets won’t contain anything new
        for you (and you won’t be any worse off by skipping them).
      </p>
      <ul id="82186b45-87ec-4f1d-9dc3-9bb4554009d4" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          The first argument, <code>z: &amp;Complex</code> is a{" "}
          <strong>reference </strong>to a complex number (using the{" "}
          <code>Complex</code> type we defined in the{" "}
          <code>complex_numbers</code> library). In Rust, a reference is a
          memory address that will lead us to a value of a particular type. And
          because Rust is incredible, that value is guaranteed to be valid [
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html"
          >
            3
          </a>
          ]. References are created by the ampersand operator <code>&amp;</code>
          . References are an integral part of Rust. If you are unfamiliar with
          them, I recommend reading{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html"
          >
            chapter 4.2 of The Rust Programming Language
          </a>
          .
        </li>
      </ul>
      <ul id="16b46335-589f-4ad7-b708-97d02d022479" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          The second argument, <code>num_iterations: u32</code>, is a 32-bit
          unsigned integer. Meaning, it can be any integer from{" "}
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
          </span>{" "}
          to{" "}
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
                          <mn>2</mn>
                          <mn>32</mn>
                        </msup>
                        <mo>−</mo>
                        <mn>1</mn>
                      </mrow>
                      <annotation encoding="application/x-tex">
                        2^{"{"}32{"}"} - 1
                      </annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{
                        height: "0.897438em",
                        verticalAlign: "-0.08333em",
                      }}
                    />
                    <span className="mord">
                      <span className="mord">2</span>
                      <span className="msupsub">
                        <span className="vlist-t">
                          <span className="vlist-r">
                            <span
                              className="vlist"
                              style={{ height: "0.8141079999999999em" }}
                            >
                              <span
                                style={{
                                  top: "-3.063em",
                                  marginRight: "0.05em",
                                }}
                              >
                                <span
                                  className="pstrut"
                                  style={{ height: "2.7em" }}
                                />
                                <span className="sizing reset-size6 size3 mtight">
                                  <span className="mord mtight">
                                    <span className="mord mtight">32</span>
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
                    <span className="mbin">−</span>
                    <span
                      className="mspace"
                      style={{ marginRight: "0.2222222222222222em" }}
                    />
                  </span>
                  <span className="base">
                    <span
                      className="strut"
                      style={{ height: "0.64444em", verticalAlign: "0em" }}
                    />
                    <span className="mord">1</span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>{" "}
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
                        <msup>
                          <mn>2</mn>
                          <mn>32</mn>
                        </msup>
                        <mo>−</mo>
                        <mn>1</mn>
                        <mo>=</mo>
                        <mn>4</mn>
                        <mo separator="true">,</mo>
                        <mn>294</mn>
                        <mo separator="true">,</mo>
                        <mn>967</mn>
                        <mo separator="true">,</mo>
                        <mn>295</mn>
                        <mo stretchy="false">)</mo>
                      </mrow>
                      <annotation encoding="application/x-tex">
                        (2^{"{"}32{"}"} - 1 = 4,294,967,295)
                      </annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{ height: "1.064108em", verticalAlign: "-0.25em" }}
                    />
                    <span className="mopen">(</span>
                    <span className="mord">
                      <span className="mord">2</span>
                      <span className="msupsub">
                        <span className="vlist-t">
                          <span className="vlist-r">
                            <span
                              className="vlist"
                              style={{ height: "0.8141079999999999em" }}
                            >
                              <span
                                style={{
                                  top: "-3.063em",
                                  marginRight: "0.05em",
                                }}
                              >
                                <span
                                  className="pstrut"
                                  style={{ height: "2.7em" }}
                                />
                                <span className="sizing reset-size6 size3 mtight">
                                  <span className="mord mtight">
                                    <span className="mord mtight">32</span>
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
                    <span className="mbin">−</span>
                    <span
                      className="mspace"
                      style={{ marginRight: "0.2222222222222222em" }}
                    />
                  </span>
                  <span className="base">
                    <span
                      className="strut"
                      style={{ height: "0.64444em", verticalAlign: "0em" }}
                    />
                    <span className="mord">1</span>
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
                    <span className="mord">4</span>
                    <span className="mpunct">,</span>
                    <span
                      className="mspace"
                      style={{ marginRight: "0.16666666666666666em" }}
                    />
                    <span className="mord">294</span>
                    <span className="mpunct">,</span>
                    <span
                      className="mspace"
                      style={{ marginRight: "0.16666666666666666em" }}
                    />
                    <span className="mord">967</span>
                    <span className="mpunct">,</span>
                    <span
                      className="mspace"
                      style={{ marginRight: "0.16666666666666666em" }}
                    />
                    <span className="mord">295</span>
                    <span className="mclose">)</span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>
          . If we wanted a 32-bit interger that could be negative, we’d use a
          signed integer type: <code>i32</code>.
        </li>
      </ul>
      <ul id="958d96a6-159c-4309-a875-271735240d87" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          We declare the <code>diverge_count</code> variable with{" "}
          <code>let mut</code>. In Rust, variables are immutable by default.
          That is, if we declare a value like this:{" "}
          <code>let foo = some_expression</code>, we will not be able to change{" "}
          <code>foo</code>. Declaring variables with <code>let mut</code> allows
          us to change them.
        </li>
      </ul>
      <p id="d9ed53d3-b2a5-424c-b8bd-4443a217bbb9"></p>
      <p id="660abbf2-7b14-4e93-88e5-b228370688cf">
        Before we begin bragging that we’ve created our very own Mandelbrot set
        with Rust, let’s run some tests to make sure we got it right:
      </p>
      <pre id="5af449e2-f159-45b8-840c-0a0ab71c4e1c" className="code">
        <code>
          {`// `} lib.rs{"\n"}
          {"\n"}
          {"/*...*/"}
          {"\n"}
          {"\n"}#[cfg(test)]{"\n"}mod tests {"{"}
          {"\n"}
          {"    "}use super::*;{"\n"}
          {"\n"}
          {"    "}#[test]{"\n"}
          {"    "}fn mandelbrot_test() {"{"}
          {"\n"}
          {"        "}const NUM_ITERATIONS: u32 = 20;{"\n"}
          {"\n"}
          {"        "}
          {`// `} Not in the mandelbrot set{"\n"}
          {"        "}let z1 = Complex(0.25, 0.75);{"\n"}
          {"        "}assert_ne!(mandelbrot(&amp;z1, NUM_ITERATIONS),
          NUM_ITERATIONS);{"\n"}
          {"\n"}
          {"        "}let z2 = Complex(-1., 0.5);{"\n"}
          {"        "}assert_ne!(mandelbrot(&amp;z2, NUM_ITERATIONS),
          NUM_ITERATIONS);{"\n"}
          {"\n"}
          {"        "}
          {`// `} In the mandelbrot set{"\n"}
          {"        "}let z3 = Complex(0., 0.);{"\n"}
          {"        "}assert_eq!(mandelbrot(&amp;z3, NUM_ITERATIONS),
          NUM_ITERATIONS);{"\n"}
          {"\n"}
          {"        "}let z4 = Complex(1. / 8., -1. / 8.);{"\n"}
          {"        "}assert_eq!(mandelbrot(&amp;z4, NUM_ITERATIONS),
          NUM_ITERATIONS);{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"\n"}
          {"}"}
        </code>
      </pre>
      <p id="ca7af5ff-d60e-4d6a-84f0-f2c2a91019b6">
        If running <code>cargo test</code> succeeds, you are free to start
        bragging.
      </p>
      <h3 id="55d043fa-4841-4f0e-85d3-b586080cd98f">
        Plotting our Mandelbrot Set
      </h3>
      <hr id="892d90d7-9174-47f6-bbe1-c2ef72d04df4" />
      <p id="1bdd016a-0c2c-437b-8cc6-e6d8bf95ea28">
        The fine people who created the Plotters library have provided an
        example of how the Mandelbrot set looks with the plotters library. I’ve
        adapted the code to work with our <code>mandelbrot</code> function:
      </p>
      <pre id="098eb887-a183-4ec3-92b6-4735663024af" className="code">
        <code>
          {`// `} lib.rs{"\n"}
          {"\n"}
          {"/*...*/"}
          {"\n"}
          {"\n"}const OUT_FILE_NAME: &amp;{`'`}static str = {`"`}mandelbrot.png
          {`"`};{"\n"}
          fn draw_mandelbrot() -&gt; Result&lt;(), Box&lt;dyn
          std::error::Error&gt;&gt; {"{"}
          {"\n"}
          {"    "}let root = BitMapBackend::new(OUT_FILE_NAME, (800,
          600)).into_drawing_area();{"\n"}
          {"\n"}
          {"    "}root.fill(&amp;WHITE)?;{"\n"}
          {"\n"}
          {"    "}let mut chart = ChartBuilder::on(&amp;root){"\n"}
          {"        "}.margin(20 as i32){"\n"}
          {"        "}.x_label_area_size(10 as i32){"\n"}
          {"        "}.y_label_area_size(10 as i32){"\n"}
          {"        "}.build_cartesian_2d(-2.1f64..0.6f64, -1.2f64..1.2f64)?;
          {"\n"}
          {"\n"}
          {"    "}chart{"\n"}
          {"        "}.configure_mesh(){"\n"}
          {"        "}.disable_x_mesh(){"\n"}
          {"        "}.disable_y_mesh(){"\n"}
          {"        "}.draw()?;{"\n"}
          {"\n"}
          {"    "}let plotting_area = chart.plotting_area();{"\n"}
          {"\n"}
          {"    "}let range = plotting_area.get_pixel_range();{"\n"}
          {"\n"}
          {"    "}let samples = (range.0.end - range.0.start, range.1.end -
          range.1.start);{"\n"}
          {"    "}let (real, complex) = (chart.x_range(), chart.y_range());
          {"\n"}
          {"\n"}
          {"    "}let step = ({"\n"}
          {"        "}(real.end - real.start) / samples.0 as f64,{"\n"}
          {"        "}(complex.end - complex.start) / samples.1 as f64,{"\n"}
          {"    "});{"\n"}
          {"\n"}
          {"    "}const NUM_CONVERGE: u32 = 100;{"\n"}
          {"\n"}
          {"    "}for k in 0..(samples.0 * samples.1) {"{"}
          {"\n"}
          {"        "}let z = Complex({"\n"}
          {"            "}real.start + step.0 * (k % samples.0) as f64,{"\n"}
          {"            "}complex.start + step.1 * (k / samples.0) as f64,{"\n"}
          {"        "});{"\n"}
          {"\n"}
          {"        "}let count = mandelbrot(&amp;z, NUM_CONVERGE);{"\n"}
          {"\n"}
          {"        "}let Complex(a, b) = z;{"\n"}
          {"\n"}
          {"        "}if count != NUM_CONVERGE {"{"}
          {"\n"}
          {"            "}plotting_area.draw_pixel((a, b), &amp;HSLColor(count
          as f64 / 100.0, 1.0, 0.5))?;{"\n"}
          {"        "}
          {"}"} else {"{"}
          {"\n"}
          {"            "}plotting_area.draw_pixel((a, b), &amp;BLACK)?;{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"\n"}
          {"    "}root.present().expect({`"`}Unable to write result to file,
          please make sure {`'`}plotters-doc-data{`'`} dir exists under current
          dir{`"`});{"\n"}
          {"    "}println!({`"`}Result has been saved to {"{"}
          {"}"}
          {`"`}, OUT_FILE_NAME);{"\n"}
          {"\n"}
          {"    "}Ok(()){"\n"}
          {"}"}
        </code>
      </pre>
      <p id="4a598bb7-8384-43d7-a588-29b632e1a74f"></p>
      <p id="db0dc653-2b38-4126-9d23-dfc6ce1df3b4">
        To plot your own Mandelbrot set, put this test function in{" "}
        <code>lib.rs</code> and run <code>cargo test</code>:
      </p>
      <pre id="dce28372-ca0a-48a9-ad3b-369a4137379e" className="code">
        <code>
          #[cfg(test)]{"\n"}mod tests {"{"}
          {"\n"}
          {"    "}
          {"\n"}
          {"\t"}
          {"\t"}
          {"/*...*/"}
          {"\n"}
          {"\n"}
          {"    "}#[test]{"\n"}
          {"    "}fn draw_mandelbrot_test() {"{"}
          {"\n"}
          {"        "}draw_mandelbrot().unwrap(){"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"}
        </code>
      </pre>
      <p id="c056873d-fe23-442c-9e20-90690969417b">
        You should see a file called <code>mandelbrot.png</code> in your{" "}
        <code>/mandelbrot</code> directory, and it should look lovely.
      </p>

      <img
        className={styles.image}
        src="https://cdn-images-1.medium.com/max/800/1*cMv6pKdAceKZYKWrJc7MCw.png"
      />

      <p id="645ad4e8-432a-4309-adee-f785c425c151">
        Feel free to email me if you have any issues:{" "}
        <a target="_blank" rel="noreferrer" href={`mailto: ${EMAIL_ADDRESS}`}>
          joshtaylor361@gmail.com
        </a>
        .
      </p>
      <p id="b98c767e-f2fa-4092-b4fe-912641fbc609">
        I’m hoping to create an installment of SOTR where we use Rust and
        WebAssembly to build an applet in which users can interact with the
        Mandelbrot set.
      </p>
      <p id="7bf5de54-07de-4fe2-97f2-7578a87b8904">
        Thanks again for coding with me. Like any other skill, it takes
        countless practice sessions to become a great programmer. I hope you
        found this one enjoyable.
      </p>
      <p id="4622b5d1-dfef-4725-8bf3-57f18a89af00"></p>
      <h3 id="73795628-4ae0-4cc1-8afc-120aafba58f2">References</h3>
      <hr id="2cc54410-b2d7-461b-bb6c-6127601a65cc" />
      <p id="dba87b74-47c0-4e3a-902a-2dc9b4e76373">
        [1] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://link.springer.com/book/10.1007/978-1-4757-4740-9"
        >
          Peitgen, H., Jürgens, H., and Saupe, D. (1992).{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://link.springer.com/book/10.1007/978-1-4757-4740-9"
        >
          <em>Chaos and Fractals. </em>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://link.springer.com/book/10.1007/978-1-4757-4740-9"
        >
          Springer.
        </a>
      </p>
      <p id="18ea3c53-2482-490a-9ea5-c50b1e9c40c2">
        [2] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=NGMRB4O922I&t=324s"
        >
          Krieger, H. (2014).{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=NGMRB4O922I&t=324s"
        >
          <em>The Mandelbrot Set - Numberphile. </em>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=NGMRB4O922I&t=324s"
        >
          Numberphile.{" "}
        </a>
      </p>
      <p id="0e151f9d-f7ef-450b-92a1-da2e3fe98853">
        [3] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/book/"
        >
          Nichols, C. and Klabnik, S. (2018).{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/book/"
        >
          <em>The Rust Programming Language.</em>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/book/"
        >
          {" "}
          No Starch Press.
        </a>
      </p>
      <p id="ca62dce4-a117-44dc-9031-bdaf3b6c3203"></p>
    </div>
  );
};

export default Mandelbrot;
