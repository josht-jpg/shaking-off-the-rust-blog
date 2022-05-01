import Image from "next/image";
import vectorExample from "./vector.gif";
import mrRogersWave from "./bye.gif";
import knnExample from "./knnExample.png";
import { useRef } from "react";
import styles from "../articleStyles.module.scss";
import ReactPlayer from "react-player";
import EMAIL_ADDRESS from "../../../constants/emailAddress";

const KNN = () => {
  const codeBlockABulletA = useRef(null);

  const codeBlockBBulletA = useRef(null);
  const codeBlockBBulletB = useRef(null);
  const codeBlockBBulletC = useRef(null);

  const codeBlockCBulletA = useRef(null);

  const codeBlockDBulletA = useRef(null);
  const codeBlockDBulletB = useRef(null);
  const codeBlockDBulletC = useRef(null);

  const codeBlockEBulletA = useRef(null);
  const codeBlockEBulletB = useRef(null);
  const codeBlockEBulletC = useRef(null);

  const codeBlockFBulletA = useRef(null);
  const codeBlockFBulletB = useRef(null);
  const codeBlockFBulletC = useRef(null);
  const codeBlockFBulletD = useRef(null);
  const codeBlockFBulletE = useRef(null);
  const codeBlockFBulletF = useRef(null);
  const codeBlockFBulletG = useRef(null);

  const scrollRefs = {
    codeBlockABulletA,
    codeBlockBBulletA,
    codeBlockBBulletB,
    codeBlockBBulletC,
    codeBlockCBulletA,
    codeBlockDBulletA,
    codeBlockDBulletB,
    codeBlockDBulletC,
    codeBlockEBulletA,
    codeBlockEBulletB,
    codeBlockEBulletC,
    codeBlockFBulletA,
    codeBlockFBulletB,
    codeBlockFBulletC,
    codeBlockFBulletD,
    codeBlockFBulletE,
    codeBlockFBulletF,
    codeBlockFBulletG,
  };

  const scrollTo = (ref) => {
    const yOffset = -45;

    const y =
      scrollRefs[ref].current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    /* scrollRefs[ref].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });*/
  };

  return (
    <div className="page-body">
      <p id="1806eeed-409d-4251-901c-16bd3c985513">
        <em>
          <strong>Shaking off the Rust</strong>
        </em>{" "}
        is a series of exercises with the Rust programing language. The purpose
        of the series is to improve both my and my dear reader’s abilities with
        Rust by building things. Plus, by actually building stuff, we{`'`}ll
        learn about an array of technological concepts in the process. In this
        installment, we’re going to implement a classic machine learning
        algorithm.
      </p>
      <p id="4e617317-1cd2-4247-83e8-5301670b2ab9"></p>
      <p id="e42cdcef-8043-4f54-960e-eb93b1fd7e79"></p>
      <p
        id="d7f99502-2333-4b70-9362-62692f0da3a0"
        style={{ fontWeight: "bold" }}
      >
        After reading this installment, you{`'`}ll have experience with:
        <ul id="197ba483-c44f-4861-a551-440967bab851" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>
            Rust’s <code>if let</code> syntax
          </li>
        </ul>
        <ul id="dfaacf20-acf1-4f29-98d7-82fa478026b2" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>
            Rust’s <code>Clone</code> trait
          </li>
        </ul>
        <ul id="27c53bc2-d6cf-4ec5-98c7-da4d8ad77a2b" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>Extension traits</li>
        </ul>
        <ul id="4d147db7-cabc-45e8-a7a8-d52b8a16bb2a" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>
            A little bit of lifetime parameters
          </li>
        </ul>
        <ul id="433e9128-ef11-4abe-87e7-a3f64edf23b9" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>
            Rust’s <code>where</code> clause
          </li>
        </ul>
        <ul id="4906964a-a5f0-4cb3-9d79-156922ca4c7d" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>
            The{" "}
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
                          <mi>k</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">k</annotation>
                      </semantics>
                    </math>
                  </span>
                  <span className="katex-html" aria-hidden="true">
                    <span className="base">
                      <span
                        className="strut"
                        style={{ height: "0.69444em", verticalAlign: "0em" }}
                      />
                      <span
                        className="mord mathnormal"
                        style={{ marginRight: "0.03148em" }}
                      >
                        k
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span>﻿</span>
            </span>{" "}
            nearest neighbors algorithm
          </li>
        </ul>
        <ul id="433e9128-ef11-4abe-87e7-a3fed623b9" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>Much more!</li>
        </ul>
      </p>
      <p
        style={{ marginTop: "2rem" }}
        id="9c52b663-8262-44e9-a57e-ba135afe71d6"
      >
        This installment’s Github repo:{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/josht-jpg/k-nearust-neighbors"
        >
          https://github.com/josht-jpg/k-nearust-neighbors
        </a>
      </p>
      <h3 id="a5ae1455-2629-4278-b753-29f30a754449">K Nearust Neighbors</h3>
      <hr id="856a809d-d175-4837-93b3-cffcc3a2ff70" />
      <p id="b08021bb-c91a-4d8e-9236-97ba8299ff28">
        The{" "}
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
                      <mi>k</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">k</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03148em" }}
                  >
                    k
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        nearest neighbors (KNN) algorithm is simple.
      </p>
      <p id="ac78c7ce-1af2-4ea9-8698-91898876192e">
        It’s a good algorithm for classifying data [
        <a
          target="_blank"
          rel="noreferrer"
          href="https://learning.oreilly.com/library/view/data-science-from/9781492041122/"
        >
          1
        </a>
        ]. Suppose we have a labeled dataset, which we{`'`}ll denote{" "}
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
                      <mi>D</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">D</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.68333em", verticalAlign: "0em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.02778em" }}
                  >
                    D
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        , and an unlabeled data point, which we{`'`}ll denote{" "}
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
                      <mi>d</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">d</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">d</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        , and we want to predict the correct label for{" "}
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
                      <mi>d</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">d</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">d</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        . We can do that with KNN.
      </p>
      <p id="0b307154-00f4-4b52-b83c-38ff57f5f34f">KNN works like this: </p>
      <p id="a08535ed-b85f-4eb3-8408-5bccb08a88b8">
        For some integer{" "}
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
                      <mi>k</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">k</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03148em" }}
                  >
                    k
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        , we find the{" "}
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
                      <mi>k</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">k</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03148em" }}
                  >
                    k
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        data points in{" "}
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
                      <mi>D</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">D</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.68333em", verticalAlign: "0em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.02778em" }}
                  >
                    D
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        nearest to{" "}
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
                      <mi>d</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">d</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">d</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        — the{" "}
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
                      <mi>k</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">k</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03148em" }}
                  >
                    k
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        nearest neighbors. For an example of what I mean by <em>nearest</em>: in
        the graph below, the blue data points are the 3 nearest neighbors of the
        red data point.
      </p>
      <Image src={knnExample} alt={"knn example"} />
      <p id="1c39e9ba-0b86-4e97-85bd-0290a71d7a7b">
        For our computer to find data points nearby{" "}
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
                      <mi>d</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">d</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">d</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        , we need a way to measure distance between data points. We can use the
        Pythagorean formula to do that [
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.manning.com/books/grokking-algorithms"
        >
          2
        </a>
        ]:{" "}
      </p>
      <p style={{ paddingLeft: "1.75rem" }}>
        The distance between two data points{" "}
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
                    </mrow>
                    <annotation encoding="application/x-tex">x</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.43056em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">x</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        and{" "}
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
                      <mi>y</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">y</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.625em", verticalAlign: "-0.19444em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03588em" }}
                  >
                    y
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        with features{" "}
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
                        <mi>x</mi>
                        <mn>1</mn>
                      </msub>
                      <mo separator="true">,</mo>
                      <mi mathvariant="normal">.</mi>
                      <mi mathvariant="normal">.</mi>
                      <mi mathvariant="normal">.</mi>
                      <mo separator="true">,</mo>
                      <msub>
                        <mi>x</mi>
                        <mi>n</mi>
                      </msub>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      x_1, ..., x_n
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.625em", verticalAlign: "-0.19444em" }}
                  />
                  <span className="mord">
                    <span className="mord mathnormal">x</span>
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
                                marginLeft: "0em",
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
                  <span className="mpunct">,</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.16666666666666666em" }}
                  />
                  <span className="mord">...</span>
                  <span className="mpunct">,</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.16666666666666666em" }}
                  />
                  <span className="mord">
                    <span className="mord mathnormal">x</span>
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
                                marginLeft: "0em",
                                marginRight: "0.05em",
                              }}
                            >
                              <span
                                className="pstrut"
                                style={{ height: "2.7em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mathnormal mtight">
                                  n
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
        and{" "}
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
                        <mi>y</mi>
                        <mn>1</mn>
                      </msub>
                      <mo separator="true">,</mo>
                      <mi mathvariant="normal">.</mi>
                      <mi mathvariant="normal">.</mi>
                      <mi mathvariant="normal">.</mi>
                      <mo separator="true">,</mo>
                      <msub>
                        <mi>y</mi>
                        <mi>n</mi>
                      </msub>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      y_1, ..., y_n
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.625em", verticalAlign: "-0.19444em" }}
                  />
                  <span className="mord">
                    <span
                      className="mord mathnormal"
                      style={{ marginRight: "0.03588em" }}
                    >
                      y
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
                                marginLeft: "-0.03588em",
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
                  <span className="mpunct">,</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.16666666666666666em" }}
                  />
                  <span className="mord">...</span>
                  <span className="mpunct">,</span>
                  <span
                    className="mspace"
                    style={{ marginRight: "0.16666666666666666em" }}
                  />
                  <span className="mord">
                    <span
                      className="mord mathnormal"
                      style={{ marginRight: "0.03588em" }}
                    >
                      y
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
                                marginLeft: "-0.03588em",
                                marginRight: "0.05em",
                              }}
                            >
                              <span
                                className="pstrut"
                                style={{ height: "2.7em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mathnormal mtight">
                                  n
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
        is{" "}
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
                      <msqrt>
                        <mrow>
                          <mo stretchy="false">(</mo>
                          <msub>
                            <mi>x</mi>
                            <mn>1</mn>
                          </msub>
                          <mo>−</mo>
                          <msub>
                            <mi>y</mi>
                            <mn>1</mn>
                          </msub>
                          <msup>
                            <mo stretchy="false">)</mo>
                            <mn>2</mn>
                          </msup>
                          <mo>+</mo>
                          <mi mathvariant="normal">.</mi>
                          <mi mathvariant="normal">.</mi>
                          <mi mathvariant="normal">.</mi>
                          <mo>+</mo>
                          <mo stretchy="false">(</mo>
                          <msub>
                            <mi>x</mi>
                            <mi>n</mi>
                          </msub>
                          <mo>−</mo>
                          <msub>
                            <mi>y</mi>
                            <mi>n</mi>
                          </msub>
                          <msup>
                            <mo stretchy="false">)</mo>
                            <mn>2</mn>
                          </msup>
                        </mrow>
                      </msqrt>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      \sqrt{"{"}(x_1 - y_1)^2 + ... + (x_n - y_n)^2{"}"}
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: "1.24em",
                      verticalAlign: "-0.30499999999999994em",
                    }}
                  />
                  <span className="mord sqrt">
                    <span className="vlist-t vlist-t2">
                      <span className="vlist-r">
                        <span className="vlist" style={{ height: "0.935em" }}>
                          <span className="svg-align" style={{ top: "-3.2em" }}>
                            <span
                              className="pstrut"
                              style={{ height: "3.2em" }}
                            />
                            <span
                              className="mord"
                              style={{ paddingLeft: "1em" }}
                            >
                              <span className="mopen">(</span>
                              <span className="mord">
                                <span className="mord mathnormal">x</span>
                                <span className="msupsub">
                                  <span className="vlist-t vlist-t2">
                                    <span className="vlist-r">
                                      <span
                                        className="vlist"
                                        style={{
                                          height: "0.30110799999999993em",
                                        }}
                                      >
                                        <span
                                          style={{
                                            top: "-2.5500000000000003em",
                                            marginLeft: "0em",
                                            marginRight: "0.05em",
                                          }}
                                        >
                                          <span
                                            className="pstrut"
                                            style={{ height: "2.7em" }}
                                          />
                                          <span className="sizing reset-size6 size3 mtight">
                                            <span className="mord mtight">
                                              1
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                      <span className="vlist-s">​</span>
                                    </span>
                                    <span className="vlist-r">
                                      <span
                                        className="vlist"
                                        style={{ height: "0.15em" }}
                                      >
                                        <span />
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
                              <span className="mord">
                                <span
                                  className="mord mathnormal"
                                  style={{ marginRight: "0.03588em" }}
                                >
                                  y
                                </span>
                                <span className="msupsub">
                                  <span className="vlist-t vlist-t2">
                                    <span className="vlist-r">
                                      <span
                                        className="vlist"
                                        style={{
                                          height: "0.30110799999999993em",
                                        }}
                                      >
                                        <span
                                          style={{
                                            top: "-2.5500000000000003em",
                                            marginLeft: "-0.03588em",
                                            marginRight: "0.05em",
                                          }}
                                        >
                                          <span
                                            className="pstrut"
                                            style={{ height: "2.7em" }}
                                          />
                                          <span className="sizing reset-size6 size3 mtight">
                                            <span className="mord mtight">
                                              1
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                      <span className="vlist-s">​</span>
                                    </span>
                                    <span className="vlist-r">
                                      <span
                                        className="vlist"
                                        style={{ height: "0.15em" }}
                                      >
                                        <span />
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                              <span className="mclose">
                                <span className="mclose">)</span>
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
                              <span className="mord">...</span>
                              <span
                                className="mspace"
                                style={{ marginRight: "0.2222222222222222em" }}
                              />
                              <span className="mbin">+</span>
                              <span
                                className="mspace"
                                style={{ marginRight: "0.2222222222222222em" }}
                              />
                              <span className="mopen">(</span>
                              <span className="mord">
                                <span className="mord mathnormal">x</span>
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
                                            marginLeft: "0em",
                                            marginRight: "0.05em",
                                          }}
                                        >
                                          <span
                                            className="pstrut"
                                            style={{ height: "2.7em" }}
                                          />
                                          <span className="sizing reset-size6 size3 mtight">
                                            <span className="mord mathnormal mtight">
                                              n
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                      <span className="vlist-s">​</span>
                                    </span>
                                    <span className="vlist-r">
                                      <span
                                        className="vlist"
                                        style={{ height: "0.15em" }}
                                      >
                                        <span />
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
                              <span className="mord">
                                <span
                                  className="mord mathnormal"
                                  style={{ marginRight: "0.03588em" }}
                                >
                                  y
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
                                            marginLeft: "-0.03588em",
                                            marginRight: "0.05em",
                                          }}
                                        >
                                          <span
                                            className="pstrut"
                                            style={{ height: "2.7em" }}
                                          />
                                          <span className="sizing reset-size6 size3 mtight">
                                            <span className="mord mathnormal mtight">
                                              n
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                      <span className="vlist-s">​</span>
                                    </span>
                                    <span className="vlist-r">
                                      <span
                                        className="vlist"
                                        style={{ height: "0.15em" }}
                                      >
                                        <span />
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                              <span className="mclose">
                                <span className="mclose">)</span>
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
                          <span style={{ top: "-2.8950000000000005em" }}>
                            <span
                              className="pstrut"
                              style={{ height: "3.2em" }}
                            />
                            <span
                              className="hide-tail"
                              style={{ minWidth: "1.02em", height: "1.28em" }}
                            >
                              <svg
                                width="400em"
                                height="1.28em"
                                viewBox="0 0 400000 1296"
                                preserveAspectRatio="xMinYMin slice"
                              >
                                <path
                                  d="M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z"
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
                          style={{ height: "0.30499999999999994em" }}
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
      <p id="36e1a70d-1c11-4b9b-9138-15526c603c71">
        And to predict the label for{" "}
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
                      <mi>d</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">d</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">d</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        , we pick the most common label from its{" "}
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
                      <mi>k</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">k</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03148em" }}
                  >
                    k
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        nearest labeled data points.
      </p>
      <p id="c4d6e340-8413-40d0-823f-15373d21b404">
        Finally, we have to handle the possible scenario of a tie for the most
        common label. There are a few ways to handle this. Our approach will be
        to decrement{" "}
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
                      <mi>k</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">k</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03148em" }}
                  >
                    k
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        until there’s no longer a tie. That is, we remove the furthest label
        from our nearest labels and recount the most common labels.
      </p>
      <p>
        We, the implementors of KNN, specify the value for{" "}
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
                      <mi>k</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">k</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03148em" }}
                  >
                    k
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        . Choosing a good value for{" "}
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
                      <mi>k</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">k</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03148em" }}
                  >
                    k
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        is usually a process of trying and testing several values [
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=HVXime0nQeI&t=253s"
        >
          3
        </a>
        ].{" "}
      </p>
      <p id="90b35c96-5cd1-4d55-9d80-877476d1e835">
        If you feel like watching a quick video on KNN, here’s a great one from{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw"
        >
          Stat Quest with Josh Starmer
        </a>{" "}
        (and I can’t say enough good things about that youtube channel. Thank
        you, Josh):
      </p>
      <p>
        <div className={styles.playerContainer}>
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=HVXime0nQeI"}
            controls={true}
          />
        </div>
      </p>
      <h3 id="fd0e59be-ace3-4ab6-8210-3123b2a43dac">Getting Started</h3>
      <hr id="68abd68b-231f-480c-b772-0a6c1ad119e3" />
      <p id="59aa2139-a7cb-4380-8831-ab1bf11d8318">
        To get started, we’ll create a new library called{" "}
        <code>k-nearust-neighbors</code>.
      </p>
      <pre id="50c98eae-f865-4f4c-a5aa-4a100ba29408" className="code">
        <code>
          cargo new k-nearust-neighbors --lib{"\n"}cd k-nearust-neighbors
        </code>
      </pre>
      <p id="124c1223-0832-4aae-98d1-370e92cf2e17"></p>
      <p id="88d62f81-a20c-43f6-92d8-75722d46826f">
        We’ll also bring in the following crates as{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#development-dependencies"
        >
          dev-dependencies
        </a>
        .
      </p>
      <pre id="7f9e4557-f2e9-48f9-9dc9-b2c976f1dd4f" className="code">
        <code>
          {`//`} Cargo.toml{"\n"}
          {"\n"}
          {`/*...*/`}
          {"\n"}
          {"\n"}[dev-dependencies]{"\n"}rand = {`"`}0.8.4{`"`}
          {"\n"}reqwest = {`"`}0.11.10{`"`}
          {"\n"}
          tokio-test = {`"`}*{`"`}
        </code>
      </pre>
      <p id="a40e6960-54f8-4290-8927-b1c7f75b6fe8">
        <code>rand</code> is a crate for random number generation. You can read
        more about it here:{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://crates.io/crates/rand"
        >
          https://crates.io/crates/rand
        </a>
        . <code>reqwest</code> and <code>tokio_test</code> will be used to get
        some data to test our KNN classifier on. You can read about the{" "}
        <code>reqwest</code> crate{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://crates.io/crates/reqwest"
        >
          here
        </a>{" "}
        and the <code>tokio_test</code> crate{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://crates.io/crates/tokio-test"
        >
          here
        </a>
        .{" "}
      </p>
      <p id="1433b039-2412-4cab-9d4a-a1bdc50b3486">
        And we’ll toss this <code>use</code> declaration into our{" "}
        <code>lib.rs</code> file.
      </p>
      <pre id="9a53d025-25c8-4688-8201-c50f014c531d" className="code">
        <code>
          {`//`} lib.rs{"\n"}
          {"\n"}use std::{"{"}
          {"\n"}
          {"    "}collections::HashMap,{"\n"}
          {"    "}ops::{"{"}Add, Sub{"}"},{" "}
          <a
            onClick={() => scrollTo("codeBlockABulletA")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➀
          </a>
          {"\n"}
          {"}"}
        </code>
      </pre>
      <p id="63e84358-b4b9-4611-bfe1-7267924fedae" className />
      <div className="indented">
        <ol>
          <p id="2af97008-a6c2-40cd-825b-02013dcb8d00">
            <strong ref={codeBlockABulletA}>➀</strong> -{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/stable/std/ops/trait.Add.html"
            >
              <code>Add</code>
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/std/ops/trait.Sub.html"
            >
              <code>Sub</code>
            </a>{" "}
            are traits that specify how the addition and subtraction operators
            work. If some type <code>T</code> implements <code>Add</code>, then
            for two values <code>a</code> and <code>b</code> of type{" "}
            <code>T</code>, we can write <code>a + b</code>. Same idea for{" "}
            <code>Sub</code> [
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/stable/std/ops/trait.Add.html"
            >
              4
            </a>
            ].
          </p>
        </ol>
      </div>
      <p />
      <h3 id="649ca960-29b3-416c-9c4a-d7a682119b0b">
        Representing a Data Point in our Code
      </h3>
      <hr id="28c9f106-a75b-48d2-b289-4b6ccbacb1ba" />
      <p id="957089c0-4b0f-4211-8637-9815d87afe79">
        We’ll use a <code>struct</code> to represent a data point. We’ll name it{" "}
        <code>LabeledPoint</code>. Each <code>LabeledPoint</code> will have
        fields:
      </p>
      <ul id="755e497e-feb7-4f33-b4e8-eac0ac3d1519" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          <code>label</code>: a string slice that categorizes the data,
        </li>
      </ul>
      <ul id="eec5d07e-0b8f-4031-a80c-0b92319f988d" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          <code>point</code>: a vector containing the data point’s features
          (which will be represented as <code>f64</code>s).
        </li>
      </ul>
      <p id="8fc9ab82-5258-4ed9-87aa-5fbbb4327915">
        Here is <code>LabeledPoint</code> in Rust:
      </p>
      <pre id="a6f69837-18a7-4a3f-93dd-445b29897ebf" className="code">
        <code>
          {`//`} lib.rs{"\n"}
          {"\n"}#[derive(Clone)]{" "}
          <a
            onClick={() => scrollTo("codeBlockBBulletA")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            {" "}
            ➀
          </a>
          {"\n"}struct LabeledPoint&lt;{`'`}a&gt; {"{"}{" "}
          <a
            onClick={() => scrollTo("codeBlockBBulletB")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➁
          </a>
          {"\n"}
          {"\t"}label: &amp;{`'`}a str,{" "}
          <a
            onClick={() => scrollTo("codeBlockBBulletC")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➂
          </a>
          {"    "}
          {"\n"}
          {"\t"}point: Vec&lt;f64&gt;,{"\n"}
          {"}"}
        </code>
      </pre>
      <p id="e94236bc-db2e-4061-b988-c1e8dc8ff6c4" className />
      <ol>
        <div className="indented">
          <p id="44885672-5e8a-4f8c-9f32-21dafb24f878">
            <strong ref={codeBlockBBulletA}>➀ - </strong>We’re using the{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/rust-by-example/trait/derive.html"
            >
              derive attribute
            </a>{" "}
            to implement the <code>Clone</code>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/book/ch10-02-traits.html"
            >
              trait
            </a>
            . This means we’re asking Rust to generate code for the{" "}
            <code>Clone</code> trait’s default implementation and apply it to{" "}
            <code>LabeledPoint</code>. The{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/book/appendix-03-derivable-traits.html?highlight=derive#clone-and-copy-for-duplicating-values"
            >
              <code>Clone</code>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/book/appendix-03-derivable-traits.html?highlight=derive#clone-and-copy-for-duplicating-values"
            >
              {" "}
              trait
            </a>{" "}
            will let us explicitly create deep copies of{" "}
            <code>LabeledPoint</code> instances [
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/book/appendix-03-derivable-traits.html?highlight=derive#clone-and-copy-for-duplicating-values"
            >
              5
            </a>
            ]. This will allow us to call the{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/std/primitive.slice.html#method.to_vec"
            >
              <code>to_vec</code>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/std/primitive.slice.html#method.to_vec"
            >
              {" "}
              method
            </a>{" "}
            on a slice of <code>LabelPoint</code>s (which we’ll do in our KNN
            implementation).
          </p>
          <p id="19b0ec71-c025-4c39-9d2e-d0b2eff27b0a">
            <strong ref={codeBlockBBulletB}>➁</strong> - We declare that our
            struct is generic over the <em>lifetime</em> parameter{" "}
            <code>{`'`}a</code>. In Rust, a lifetime is the scope for which a
            reference is valid [
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html"
            >
              5
            </a>
            ]. Rust’s lifetimes are part of what makes the language special. If
            you’d like to learn about them, I recommend reading{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html"
            >
              section 10.3 of The Rust Programming Language book
            </a>{" "}
            or watching{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=MSi3E5Z8oRw&t=2139s"
            >
              this stream from Ryan Levick
            </a>
            .
          </p>
          <ul
            id="639bebc8-1490-43df-8e64-a1bd1da0bd58"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              <em>
                Sidenote: I highly recommend all of Ryan Levick’s content.
                Thanks for doing what you do, Ryan
              </em>
              .
            </li>
          </ul>
          <p id="ecb5430b-2e16-4883-88f5-2b7ffca018cb">
            <strong ref={codeBlockBBulletC}>➂</strong> - For a{" "}
            <code>struct</code> to hold a reference, it must have a lifetime
            annotation for that reference [
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#lifetime-annotations-in-struct-definitions"
            >
              5
            </a>
            ]. <code>label</code> is a string slice, and string slices are
            references. Thus, we must add a lifetime annotation to{" "}
            <code>label</code>, which we do by putting <code>'a</code> after{" "}
            <code>&amp;</code> in <code>label: &amp;{`'`}a str</code>. Awesome.
          </p>
        </div>
      </ol>
      <p />
      <p id="ff3ce497-5e03-4fbf-9765-64611dd1812f"></p>
      <h3 id="0e25307e-aab3-4b0c-b1d3-724c284fd6fd">
        Smells like Linear Algebra{" "}
      </h3>
      <hr id="c43b504c-7489-43a6-ac82-2fc86a932ee4" />
      <p id="fe10a9ce-f18b-44f7-b4f3-1df434fa53c7">
        To implement KNN, we need to compare distances between data points. This
        calls for some{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://machinelearningmastery.com/gentle-introduction-linear-algebra/"
        >
          linear algebra
        </a>
        . Fun.{" "}
      </p>
      <p>
        <i>
          (But if linear algebra does not sound like fun to you, feel free to
          copy and paste{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://gist.github.com/josht-jpg/825662b6a90d4ae0282e998e4b27499a"
          >
            this code
          </a>{" "}
          into your <code>lib.rs</code> and skip to the next section - I’ll
          forgive you).{" "}
        </i>
      </p>
      <p id="01d0c550-63c2-4d04-b503-f997b83c6491"></p>
      <p id="3e1a7c09-9641-43dd-9722-2216b1db1383">
        A quick review of vectors may be helpful (here I’m talking about vectors
        from linear algebra, not vectors from Rust).
      </p>
      <div className="indented">
        <hr id="949341dd-92db-49ed-8358-908b23d838aa" />
        <p id="33790d1b-2a70-4981-8ebd-545614204424">
          A{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/vectors/v/vector-introduction-linear-algebra"
          >
            vector
          </a>{" "}
          can be thought of as a list of numbers.{" "}
        </p>
        <p id="58480492-794d-45ba-9677-419dde494f45">
          There are a few ways that a vector can be interpreted. One common
          interpretation is a point in space [
          <a
            target="_blank"
            rel="noreferrer"
            href="https://nostarch.com/linearalgebra"
          >
            6
          </a>
          ]. Take the vector{" "}
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
                        <mo stretchy="false">[</mo>
                        <mn>2.5</mn>
                        <mo separator="true">,</mo>
                        <mn>3</mn>
                        <mo separator="true">,</mo>
                        <mn>4</mn>
                        <mo stretchy="false">]</mo>
                      </mrow>
                      <annotation encoding="application/x-tex">
                        [2.5, 3, 4]
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
                    <span className="mopen">[</span>
                    <span className="mord">2.5</span>
                    <span className="mpunct">,</span>
                    <span
                      className="mspace"
                      style={{ marginRight: "0.16666666666666666em" }}
                    />
                    <span className="mord">3</span>
                    <span className="mpunct">,</span>
                    <span
                      className="mspace"
                      style={{ marginRight: "0.16666666666666666em" }}
                    />
                    <span className="mord">4</span>
                    <span className="mclose">]</span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>
          , for example. This is what it looks like as a point in space:
        </p>
        <figure>
          <Image src={vectorExample} alt={"Vector example"} />
        </figure>
        <p id="909c7e3f-9f0e-473e-9f61-8334e5668e41"></p>
        <p id="c5b67abd-e7b3-4ca0-b1b0-80a2d5687c8d">
          This is how we will interpret vectors: as points in space. Cool.
        </p>
        <div className="indented">
          <p id="346ee196-77e0-4a35-b7d9-35de7c1fe189">
            <em>
              Sidenote: the above plot was created with Rust! It was made with
              the{" "}
            </em>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.rs/plotters/latest/plotters/"
            >
              <em>plotters crate</em>
            </a>
            <em>
              . Feel free to take a look at the code I slapped together to
              generate this plot:{" "}
            </em>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/josht-jpg/vector_plot"
            >
              https://github.com/josht-jpg/vector_plot
            </a>
          </p>
        </div>
        <p />
      </div>
      <p />
      <hr id="9e645481-2c77-4818-9b1e-adaa66f826d5" />
      <p id="18f451a6-831c-4e3e-a1e5-e1c3c5279ffa">
        We’re going to define a trait called <code>LinearAlg</code>:
      </p>
      <pre id="f208c664-a82e-4386-b54f-7304b847a094" className="code">
        <code>
          trait LinearAlg&lt;T&gt;{"\n"}where{"\n"}
          {"    "}T: Add + Sub,{" "}
          <a
            onClick={() => scrollTo("codeBlockCBulletA")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            {" "}
            ➀
          </a>
          {"\n"}
          {"{"}
          {"\n"}
          {"    "}fn dot(&amp;self, w: &amp;[T]) -&gt; T;{"\n"}
          {"\n"}
          {"    "}fn subtract(&amp;self, w: &amp;[T]) -&gt; Vec&lt;T&gt;;{"\n"}
          {"\n"}
          {"    "}fn sum_of_squares(&amp;self) -&gt; T;{"\n"}
          {"\n"}
          {"    "}fn distance(&amp;self, w: &amp;[T]) -&gt; f64;{"\n"}
          {"}"}
        </code>
      </pre>
      <p id="fc0b429a-8d71-47cf-a45a-3827b836f4f0" className />
      <ol>
        <div className="indented">
          <p id="2e9438fb-11d5-44d5-9cbd-c641921dce9e">
            <strong ref={codeBlockCBulletA}>➀</strong> - Rust’s{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/std/keyword.where.html"
            >
              where clause
            </a>{" "}
            lets us specify that the{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/book/ch10-01-syntax.html"
            >
              generic type
            </a>{" "}
            <code>T</code> must implement the <code>Add</code> and{" "}
            <code>Sub</code> traits [
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/std/keyword.where.html"
            >
              7
            </a>
            ].
          </p>
        </div>
      </ol>
      <p />
      <p id="10d80368-31e7-42cf-b369-6cb2fbffcfae"></p>
      <p id="8318d33c-5384-45cb-bdde-6ca502839dcf">
        And we’ll make <code>LinearAlg</code> an{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://rust-lang.github.io/rfcs/0445-extension-trait-conventions.html"
        >
          extension trait
        </a>
        , implementing it for the standard library’s <code>Vec&lt;f64&gt;</code>{" "}
        type.{" "}
      </p>
      <pre id="c9fe7ed4-b2fc-48c5-964d-5787e64a6e3e" className="code">
        <code>
          impl LinearAlg&lt;f64&gt; for Vec&lt;f64&gt; {"{"} {`/*...*/`} {"}"}
        </code>
      </pre>
      <p id="93114c75-d2de-4dc3-8e21-d9f5d5eeef01">
        We’re going to take a test-first approach here. For each method in this
        implemetation of <code>LinearAlg</code>, I’ll go over the math behind
        the operation, then provide a test for the method, and then some code
        that implements the method.{" "}
      </p>
      <p id="13244999-f4d4-439d-9e96-22cebc74d475">
        It’s a good exercise to try writing each method yourself and running the
        test before looking at my implementation. There’s a good chance you’ll
        like your implementation more (and if you do, please share it with me at{" "}
        <a target="_blank" rel="noreferrer" href={`mailto: ${EMAIL_ADDRESS}`}>
          joshtaylor361@gmail.com
        </a>
        ).
      </p>
      <ul id="62337473-2ba2-4bf2-9434-6df05e284c73" className="bulleted-list">
        <li style={{ listStyleType: "disc", fontWeight: "bold" }}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/dot-cross-products/v/vector-dot-product-and-vector-length"
          >
            <span style={{ borderBottom: "0.05em solid" }}>Dot Product</span>
          </a>{" "}
          - For two vectors{" "}
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
                        <mi mathvariant="bold">v</mi>
                      </mrow>
                      <annotation encoding="application/x-tex">
                        \bold{"{"}v{"}"}
                      </annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{ height: "0.44444em", verticalAlign: "0em" }}
                    />
                    <span
                      className="mord mathbf"
                      style={{ marginRight: "0.01597em" }}
                    >
                      v
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>{" "}
          and{" "}
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
                        <mi mathvariant="bold">w</mi>
                      </mrow>
                      <annotation encoding="application/x-tex">
                        \bold{"{"}w{"}"}
                      </annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{ height: "0.44444em", verticalAlign: "0em" }}
                    />
                    <span
                      className="mord mathbf"
                      style={{ marginRight: "0.01597em" }}
                    >
                      w
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>{" "}
          of the same length, the dot product of{" "}
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
                        <mi mathvariant="bold">v</mi>
                      </mrow>
                      <annotation encoding="application/x-tex">
                        \bold{"{"}v{"}"}
                      </annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{ height: "0.44444em", verticalAlign: "0em" }}
                    />
                    <span
                      className="mord mathbf"
                      style={{ marginRight: "0.01597em" }}
                    >
                      v
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>{" "}
          and{" "}
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
                        <mi mathvariant="bold">w</mi>
                      </mrow>
                      <annotation encoding="application/x-tex">
                        \bold{"{"}w{"}"}
                      </annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{ height: "0.44444em", verticalAlign: "0em" }}
                    />
                    <span
                      className="mord mathbf"
                      style={{ marginRight: "0.01597em" }}
                    >
                      w
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>{" "}
          is the result of coupling up each corresponding element in{" "}
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
                        <mi mathvariant="bold">v</mi>
                      </mrow>
                      <annotation encoding="application/x-tex">
                        \bold{"{"}v{"}"}
                      </annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{ height: "0.44444em", verticalAlign: "0em" }}
                    />
                    <span
                      className="mord mathbf"
                      style={{ marginRight: "0.01597em" }}
                    >
                      v
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>{" "}
          and{" "}
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
                        <mi mathvariant="bold">w</mi>
                      </mrow>
                      <annotation encoding="application/x-tex">
                        \bold{"{"}w{"}"}
                      </annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{ height: "0.44444em", verticalAlign: "0em" }}
                    />
                    <span
                      className="mord mathbf"
                      style={{ marginRight: "0.01597em" }}
                    >
                      w
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>
          , multiplying those two elements together, and adding each result.{" "}
          <p id="1543853d-1130-4d18-aed3-fe0801a5e424">
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
                          <mi mathvariant="bold">v</mi>
                          <mo>⋅</mo>
                          <mi mathvariant="bold">w</mi>
                          <mo>=</mo>
                          <mrow>
                            <mo fence="true">[</mo>
                            <mtable
                              rowspacing="0.1600em"
                              columnalign="center"
                              columnspacing="1em"
                            >
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <msub>
                                      <mi mathvariant="bold">v</mi>
                                      <mn>1</mn>
                                    </msub>
                                  </mstyle>
                                </mtd>
                              </mtr>
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <msub>
                                      <mi mathvariant="bold">v</mi>
                                      <mn>2</mn>
                                    </msub>
                                  </mstyle>
                                </mtd>
                              </mtr>
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <mi>
                                      <mi mathvariant="normal">⋮</mi>
                                      <mpadded height="+0em" voffset="0em">
                                        <mspace
                                          mathbackground="black"
                                          width="0em"
                                          height="1.5em"
                                        />
                                      </mpadded>
                                    </mi>
                                  </mstyle>
                                </mtd>
                              </mtr>
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <msub>
                                      <mi mathvariant="bold">v</mi>
                                      <mi>n</mi>
                                    </msub>
                                  </mstyle>
                                </mtd>
                              </mtr>
                            </mtable>
                            <mo fence="true">]</mo>
                          </mrow>
                          <mo>⋅</mo>
                          <mrow>
                            <mo fence="true">[</mo>
                            <mtable
                              rowspacing="0.1600em"
                              columnalign="center"
                              columnspacing="1em"
                            >
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <msub>
                                      <mi mathvariant="bold">w</mi>
                                      <mn>1</mn>
                                    </msub>
                                  </mstyle>
                                </mtd>
                              </mtr>
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <msub>
                                      <mi mathvariant="bold">w</mi>
                                      <mn>2</mn>
                                    </msub>
                                  </mstyle>
                                </mtd>
                              </mtr>
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <mi>
                                      <mi mathvariant="normal">⋮</mi>
                                      <mpadded height="+0em" voffset="0em">
                                        <mspace
                                          mathbackground="black"
                                          width="0em"
                                          height="1.5em"
                                        />
                                      </mpadded>
                                    </mi>
                                  </mstyle>
                                </mtd>
                              </mtr>
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <msub>
                                      <mi mathvariant="bold">w</mi>
                                      <mi>n</mi>
                                    </msub>
                                  </mstyle>
                                </mtd>
                              </mtr>
                            </mtable>
                            <mo fence="true">]</mo>
                          </mrow>
                          <mo>=</mo>
                          <msub>
                            <mi mathvariant="bold">v</mi>
                            <mn>1</mn>
                          </msub>
                          <mo>⋅</mo>
                          <msub>
                            <mi mathvariant="bold">w</mi>
                            <mn>1</mn>
                          </msub>
                          <mo>+</mo>
                          <msub>
                            <mi mathvariant="bold">v</mi>
                            <mn>2</mn>
                          </msub>
                          <mo>⋅</mo>
                          <msub>
                            <mi mathvariant="bold">w</mi>
                            <mn>2</mn>
                          </msub>
                          <mo>+</mo>
                          <mi mathvariant="normal">.</mi>
                          <mi mathvariant="normal">.</mi>
                          <mi mathvariant="normal">.</mi>
                          <mo>+</mo>
                          <msub>
                            <mi mathvariant="bold">v</mi>
                            <mi>n</mi>
                          </msub>
                          <mo>⋅</mo>
                          <msub>
                            <mi mathvariant="bold">w</mi>
                            <mi>n</mi>
                          </msub>
                        </mrow>
                        <annotation encoding="application/x-tex">
                          \bold{"{"}v{"}"} \cdot \bold{"{"}w{"}"}= \begin{"{"}
                          bmatrix{"}"} \bold{"{"}v{"}"}_{"{"}1{"}"} \\ \bold
                          {"{"}v{"}"}_{"{"}2{"}"} \\ \vdots \\ \bold{"{"}v{"}"}_
                          {"{"}n{"}"}
                          \end{"{"}bmatrix{"}"} \cdot \begin{"{"}bmatrix{"}"}{" "}
                          \bold{"{"}w{"}"}_{"{"}1{"}"} \\ \bold{"{"}w{"}"}_{"{"}
                          2{"}"} \\ \vdots \\ \bold{"{"}w{"}"}_{"{"}n{"}"}
                          \end{"{"}bmatrix{"}"} = \bold{"{"}v{"}"}_1 \cdot \bold
                          {"{"}w{"}"}_1 + \bold{"{"}v{"}"}_2 \cdot \bold{"{"}w
                          {"}"}_2 + ... + \bold{"{"}v{"}"}_n \cdot \bold{"{"}w
                          {"}"}_n
                        </annotation>
                      </semantics>
                    </math>
                  </span>
                  <span className="katex-html" aria-hidden="true">
                    <span className="base">
                      <span
                        className="strut"
                        style={{ height: "0.44445em", verticalAlign: "0em" }}
                      />
                      <span
                        className="mord mathbf"
                        style={{ marginRight: "0.01597em" }}
                      >
                        v
                      </span>
                      <span
                        className="mspace"
                        style={{ marginRight: "0.2222222222222222em" }}
                      />
                      <span className="mbin">⋅</span>
                      <span
                        className="mspace"
                        style={{ marginRight: "0.2222222222222222em" }}
                      />
                    </span>
                    <span className="base">
                      <span
                        className="strut"
                        style={{ height: "0.44444em", verticalAlign: "0em" }}
                      />
                      <span
                        className="mord mathbf"
                        style={{ marginRight: "0.01597em" }}
                      >
                        w
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
                        style={{
                          height: "5.459999999999999em",
                          verticalAlign: "-2.4799999999999995em",
                        }}
                      />
                      <span className="minner">
                        <span className="mopen">
                          <span className="delimsizing mult">
                            <span className="vlist-t vlist-t2">
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.9500349999999997em" }}
                                >
                                  <span style={{ top: "-2.011015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎣</span>
                                    </span>
                                  </span>
                                  <span style={{ top: "-3.158015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span
                                      style={{
                                        height: "1.8160299999999996em",
                                        width: "0.667em",
                                      }}
                                    >
                                      <svg
                                        width="0.667em"
                                        height="1.8160299999999996em"
                                        style={{ width: "0.667em" }}
                                        viewBox="0 0 667 1816"
                                        preserveAspectRatio="xMinYMin"
                                      >
                                        <path d="M319 0 H403 V1816 H319z M319 0 H403 V1816 H319z" />
                                      </svg>
                                    </span>
                                  </span>
                                  <span style={{ top: "-5.611064999999999em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎡</span>
                                    </span>
                                  </span>
                                </span>
                                <span className="vlist-s">​</span>
                              </span>
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.4500349999999997em" }}
                                >
                                  <span />
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="mord">
                          <span className="mtable">
                            <span className="col-align-c">
                              <span className="vlist-t vlist-t2">
                                <span className="vlist-r">
                                  <span
                                    className="vlist"
                                    style={{ height: "2.9799999999999995em" }}
                                  >
                                    <span style={{ top: "-5.8275em" }}>
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            v
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height:
                                                      "0.30110799999999993em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mtight">
                                                          1
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
                                                >
                                                  <span />
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                    <span style={{ top: "-4.6275em" }}>
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            v
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height:
                                                      "0.30110799999999993em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mtight">
                                                          2
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
                                                >
                                                  <span />
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      style={{ top: "-2.7674999999999996em" }}
                                    >
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span className="mord">⋮</span>
                                          <span
                                            className="mord rule"
                                            style={{
                                              borderRightWidth: "0em",
                                              borderTopWidth: "1.5em",
                                              bottom: "0em",
                                            }}
                                          />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      style={{ top: "-1.5675000000000006em" }}
                                    >
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            v
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height: "0.151392em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mathnormal mtight">
                                                          n
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
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
                                  <span className="vlist-s">​</span>
                                </span>
                                <span className="vlist-r">
                                  <span
                                    className="vlist"
                                    style={{ height: "2.4799999999999995em" }}
                                  >
                                    <span />
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="mclose">
                          <span className="delimsizing mult">
                            <span className="vlist-t vlist-t2">
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.9500349999999997em" }}
                                >
                                  <span style={{ top: "-2.011015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎦</span>
                                    </span>
                                  </span>
                                  <span style={{ top: "-3.158015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span
                                      style={{
                                        height: "1.8160299999999996em",
                                        width: "0.667em",
                                      }}
                                    >
                                      <svg
                                        width="0.667em"
                                        height="1.8160299999999996em"
                                        style={{ width: "0.667em" }}
                                        viewBox="0 0 667 1816"
                                        preserveAspectRatio="xMinYMin"
                                      >
                                        <path d="M263 0 H347 V1816 H263z M263 0 H347 V1816 H263z" />
                                      </svg>
                                    </span>
                                  </span>
                                  <span style={{ top: "-5.611064999999999em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎤</span>
                                    </span>
                                  </span>
                                </span>
                                <span className="vlist-s">​</span>
                              </span>
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.4500349999999997em" }}
                                >
                                  <span />
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
                      <span className="mbin">⋅</span>
                      <span
                        className="mspace"
                        style={{ marginRight: "0.2222222222222222em" }}
                      />
                    </span>
                    <span className="base">
                      <span
                        className="strut"
                        style={{
                          height: "5.459999999999999em",
                          verticalAlign: "-2.4799999999999995em",
                        }}
                      />
                      <span className="minner">
                        <span className="mopen">
                          <span className="delimsizing mult">
                            <span className="vlist-t vlist-t2">
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.9500349999999997em" }}
                                >
                                  <span style={{ top: "-2.011015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎣</span>
                                    </span>
                                  </span>
                                  <span style={{ top: "-3.158015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span
                                      style={{
                                        height: "1.8160299999999996em",
                                        width: "0.667em",
                                      }}
                                    >
                                      <svg
                                        width="0.667em"
                                        height="1.8160299999999996em"
                                        style={{ width: "0.667em" }}
                                        viewBox="0 0 667 1816"
                                        preserveAspectRatio="xMinYMin"
                                      >
                                        <path d="M319 0 H403 V1816 H319z M319 0 H403 V1816 H319z" />
                                      </svg>
                                    </span>
                                  </span>
                                  <span style={{ top: "-5.611064999999999em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎡</span>
                                    </span>
                                  </span>
                                </span>
                                <span className="vlist-s">​</span>
                              </span>
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.4500349999999997em" }}
                                >
                                  <span />
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="mord">
                          <span className="mtable">
                            <span className="col-align-c">
                              <span className="vlist-t vlist-t2">
                                <span className="vlist-r">
                                  <span
                                    className="vlist"
                                    style={{ height: "2.9799999999999995em" }}
                                  >
                                    <span style={{ top: "-5.8275em" }}>
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            w
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height:
                                                      "0.30110799999999993em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mtight">
                                                          1
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
                                                >
                                                  <span />
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                    <span style={{ top: "-4.6275em" }}>
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            w
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height:
                                                      "0.30110799999999993em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mtight">
                                                          2
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
                                                >
                                                  <span />
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      style={{ top: "-2.7674999999999996em" }}
                                    >
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span className="mord">⋮</span>
                                          <span
                                            className="mord rule"
                                            style={{
                                              borderRightWidth: "0em",
                                              borderTopWidth: "1.5em",
                                              bottom: "0em",
                                            }}
                                          />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      style={{ top: "-1.5675000000000006em" }}
                                    >
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            w
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height: "0.151392em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mathnormal mtight">
                                                          n
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
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
                                  <span className="vlist-s">​</span>
                                </span>
                                <span className="vlist-r">
                                  <span
                                    className="vlist"
                                    style={{ height: "2.4799999999999995em" }}
                                  >
                                    <span />
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="mclose">
                          <span className="delimsizing mult">
                            <span className="vlist-t vlist-t2">
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.9500349999999997em" }}
                                >
                                  <span style={{ top: "-2.011015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎦</span>
                                    </span>
                                  </span>
                                  <span style={{ top: "-3.158015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span
                                      style={{
                                        height: "1.8160299999999996em",
                                        width: "0.667em",
                                      }}
                                    >
                                      <svg
                                        width="0.667em"
                                        height="1.8160299999999996em"
                                        style={{ width: "0.667em" }}
                                        viewBox="0 0 667 1816"
                                        preserveAspectRatio="xMinYMin"
                                      >
                                        <path d="M263 0 H347 V1816 H263z M263 0 H347 V1816 H263z" />
                                      </svg>
                                    </span>
                                  </span>
                                  <span style={{ top: "-5.611064999999999em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎤</span>
                                    </span>
                                  </span>
                                </span>
                                <span className="vlist-s">​</span>
                              </span>
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.4500349999999997em" }}
                                >
                                  <span />
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
                        style={{
                          height: "0.59445em",
                          verticalAlign: "-0.15em",
                        }}
                      />
                      <span className="mord">
                        <span
                          className="mord mathbf"
                          style={{ marginRight: "0.01597em" }}
                        >
                          v
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
                                    marginLeft: "-0.01597em",
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
                              <span
                                className="vlist"
                                style={{ height: "0.15em" }}
                              >
                                <span />
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span
                        className="mspace"
                        style={{ marginRight: "0.2222222222222222em" }}
                      />
                      <span className="mbin">⋅</span>
                      <span
                        className="mspace"
                        style={{ marginRight: "0.2222222222222222em" }}
                      />
                    </span>
                    <span className="base">
                      <span
                        className="strut"
                        style={{
                          height: "0.73333em",
                          verticalAlign: "-0.15em",
                        }}
                      />
                      <span className="mord">
                        <span
                          className="mord mathbf"
                          style={{ marginRight: "0.01597em" }}
                        >
                          w
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
                                    marginLeft: "-0.01597em",
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
                              <span
                                className="vlist"
                                style={{ height: "0.15em" }}
                              >
                                <span />
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
                        style={{
                          height: "0.59445em",
                          verticalAlign: "-0.15em",
                        }}
                      />
                      <span className="mord">
                        <span
                          className="mord mathbf"
                          style={{ marginRight: "0.01597em" }}
                        >
                          v
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
                                    marginLeft: "-0.01597em",
                                    marginRight: "0.05em",
                                  }}
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
                              <span className="vlist-s">​</span>
                            </span>
                            <span className="vlist-r">
                              <span
                                className="vlist"
                                style={{ height: "0.15em" }}
                              >
                                <span />
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span
                        className="mspace"
                        style={{ marginRight: "0.2222222222222222em" }}
                      />
                      <span className="mbin">⋅</span>
                      <span
                        className="mspace"
                        style={{ marginRight: "0.2222222222222222em" }}
                      />
                    </span>
                    <span className="base">
                      <span
                        className="strut"
                        style={{
                          height: "0.73333em",
                          verticalAlign: "-0.15em",
                        }}
                      />
                      <span className="mord">
                        <span
                          className="mord mathbf"
                          style={{ marginRight: "0.01597em" }}
                        >
                          w
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
                                    marginLeft: "-0.01597em",
                                    marginRight: "0.05em",
                                  }}
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
                              <span className="vlist-s">​</span>
                            </span>
                            <span className="vlist-r">
                              <span
                                className="vlist"
                                style={{ height: "0.15em" }}
                              >
                                <span />
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
                        style={{
                          height: "0.66666em",
                          verticalAlign: "-0.08333em",
                        }}
                      />
                      <span className="mord">...</span>
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
                          height: "0.59445em",
                          verticalAlign: "-0.15em",
                        }}
                      />
                      <span className="mord">
                        <span
                          className="mord mathbf"
                          style={{ marginRight: "0.01597em" }}
                        >
                          v
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
                                    marginLeft: "-0.01597em",
                                    marginRight: "0.05em",
                                  }}
                                >
                                  <span
                                    className="pstrut"
                                    style={{ height: "2.7em" }}
                                  />
                                  <span className="sizing reset-size6 size3 mtight">
                                    <span className="mord mathnormal mtight">
                                      n
                                    </span>
                                  </span>
                                </span>
                              </span>
                              <span className="vlist-s">​</span>
                            </span>
                            <span className="vlist-r">
                              <span
                                className="vlist"
                                style={{ height: "0.15em" }}
                              >
                                <span />
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span
                        className="mspace"
                        style={{ marginRight: "0.2222222222222222em" }}
                      />
                      <span className="mbin">⋅</span>
                      <span
                        className="mspace"
                        style={{ marginRight: "0.2222222222222222em" }}
                      />
                    </span>
                    <span className="base">
                      <span
                        className="strut"
                        style={{
                          height: "0.59444em",
                          verticalAlign: "-0.15em",
                        }}
                      />
                      <span className="mord">
                        <span
                          className="mord mathbf"
                          style={{ marginRight: "0.01597em" }}
                        >
                          w
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
                                    marginLeft: "-0.01597em",
                                    marginRight: "0.05em",
                                  }}
                                >
                                  <span
                                    className="pstrut"
                                    style={{ height: "2.7em" }}
                                  />
                                  <span className="sizing reset-size6 size3 mtight">
                                    <span className="mord mathnormal mtight">
                                      n
                                    </span>
                                  </span>
                                </span>
                              </span>
                              <span className="vlist-s">​</span>
                            </span>
                            <span className="vlist-r">
                              <span
                                className="vlist"
                                style={{ height: "0.15em" }}
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
              </span>
              <span>﻿</span>
            </span>{" "}
            [
            <a
              target="_blank"
              rel="noreferrer"
              href="http://ce.sharif.edu/courses/97-98/1/ce425-1/resources/root/Books/Linear%20Algebra%20Done%20Right.pdf"
            >
              8
            </a>
            ].
          </p>
          <p id="5c520bc6-b3cd-4be6-9890-8bdf67c0b816">
            Here’s our test for <code>dot</code>:
          </p>
          <pre id="51d7b1bf-64ce-4f11-9298-f905ea5ae525" className="code">
            <code>
              {`//`} lib.rs{"\n"}
              {"\n"}
              {`/*...*/`}
              {"\n"}
              {"\n"}#[cfg(test)]{"\n"}mod tests {"{"}
              {"\n"}
              {"    "}use super::*;{"\n"}
              {"\n"}
              {"    "}#[test]{"\n"}
              {"    "}fn linear_alg() {"{"}
              {"\n"}
              {"        "}let v = vec![1., 5., -3.];{"\n"}
              {"        "}let w = vec![0.5, 2., 3.];{"\n"}
              {"\n"}
              {"        "}assert_eq!(v.dot(&amp;w), 1.5){"\n"}
              {"    "}
              {"}"}
              {"\n"}
              {"}"}
            </code>
          </pre>
          <p id="7f4c301c-60bb-448b-b486-1db3d085dc5e">
            Run that test with the command <code>cargo test linear_alg</code> in
            the root of your <code>k_nearust_neighbors</code> folder.
            Congratulations if that passes for you.
          </p>
          <p id="0acf22b2-7ac8-4600-a83d-cbfdf5ce5d0c">
            Here is my implementation of <code>dot</code>:
          </p>
          <pre id="0c64e34f-38f8-4ef2-a497-9a9d4ccf16a1" className="code">
            <code>
              fn dot(&amp;self, w: &amp;[f64]) -&gt; f64 {"{"}
              {"\n"}
              {"\t"}assert_eq!(self.len(), w.len());{"\n"}
              {"\t"}self.iter().zip(w).map(|(v_i, w_i)| v_i * w_i).sum(){"\n"}
              {"}"}
            </code>
          </pre>
          <p id="a51ec1a8-f1b4-42df-8ae8-e2d9a5601b86"></p>
        </li>
      </ul>
      <ul id="a63144bd-2b3f-4246-8e7d-d8ded77f1b84" className="bulleted-list">
        <li style={{ listStyleType: "disc", fontWeight: "bold" }}>
          <span style={{ borderBottom: "0.05em solid" }}>Subtract</span> - This
          one’s simpler. For two vectors of the same length{" "}
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
                        <mi mathvariant="bold">v</mi>
                      </mrow>
                      <annotation encoding="application/x-tex">
                        \bold{"{"}v{"}"}
                      </annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{ height: "0.44444em", verticalAlign: "0em" }}
                    />
                    <span
                      className="mord mathbf"
                      style={{ marginRight: "0.01597em" }}
                    >
                      v
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>{" "}
          and{" "}
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
                        <mi mathvariant="bold">w</mi>
                      </mrow>
                      <annotation encoding="application/x-tex">
                        \bold{"{"}w{"}"}
                      </annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{ height: "0.44444em", verticalAlign: "0em" }}
                    />
                    <span
                      className="mord mathbf"
                      style={{ marginRight: "0.01597em" }}
                    >
                      w
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>
          ,{" "}
          <p id="91e47e79-f03c-418e-ad4d-16dc6a53ece5">
            {" "}
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
                          <mi mathvariant="bold">v</mi>
                          <mo>−</mo>
                          <mi mathvariant="bold">w</mi>
                          <mo>=</mo>
                          <mrow>
                            <mo fence="true">[</mo>
                            <mtable
                              rowspacing="0.1600em"
                              columnalign="center"
                              columnspacing="1em"
                            >
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <msub>
                                      <mi mathvariant="bold">v</mi>
                                      <mn>1</mn>
                                    </msub>
                                  </mstyle>
                                </mtd>
                              </mtr>
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <msub>
                                      <mi mathvariant="bold">v</mi>
                                      <mn>2</mn>
                                    </msub>
                                  </mstyle>
                                </mtd>
                              </mtr>
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <mi>
                                      <mi mathvariant="normal">⋮</mi>
                                      <mpadded height="+0em" voffset="0em">
                                        <mspace
                                          mathbackground="black"
                                          width="0em"
                                          height="1.5em"
                                        />
                                      </mpadded>
                                    </mi>
                                  </mstyle>
                                </mtd>
                              </mtr>
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <msub>
                                      <mi mathvariant="bold">v</mi>
                                      <mi>n</mi>
                                    </msub>
                                  </mstyle>
                                </mtd>
                              </mtr>
                            </mtable>
                            <mo fence="true">]</mo>
                          </mrow>
                          <mo>−</mo>
                          <mrow>
                            <mo fence="true">[</mo>
                            <mtable
                              rowspacing="0.1600em"
                              columnalign="center"
                              columnspacing="1em"
                            >
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <msub>
                                      <mi mathvariant="bold">w</mi>
                                      <mn>1</mn>
                                    </msub>
                                  </mstyle>
                                </mtd>
                              </mtr>
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <msub>
                                      <mi mathvariant="bold">w</mi>
                                      <mn>2</mn>
                                    </msub>
                                  </mstyle>
                                </mtd>
                              </mtr>
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <mi>
                                      <mi mathvariant="normal">⋮</mi>
                                      <mpadded height="+0em" voffset="0em">
                                        <mspace
                                          mathbackground="black"
                                          width="0em"
                                          height="1.5em"
                                        />
                                      </mpadded>
                                    </mi>
                                  </mstyle>
                                </mtd>
                              </mtr>
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <msub>
                                      <mi mathvariant="bold">w</mi>
                                      <mi>n</mi>
                                    </msub>
                                  </mstyle>
                                </mtd>
                              </mtr>
                            </mtable>
                            <mo fence="true">]</mo>
                          </mrow>
                          <mo>=</mo>
                          <mrow>
                            <mo fence="true">[</mo>
                            <mtable
                              rowspacing="0.1600em"
                              columnalign="center"
                              columnspacing="1em"
                            >
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <mrow>
                                      <msub>
                                        <mi mathvariant="bold">v</mi>
                                        <mn>1</mn>
                                      </msub>
                                      <mo>−</mo>
                                      <msub>
                                        <mi mathvariant="bold">w</mi>
                                        <mn>1</mn>
                                      </msub>
                                    </mrow>
                                  </mstyle>
                                </mtd>
                              </mtr>
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <mrow>
                                      <msub>
                                        <mi mathvariant="bold">v</mi>
                                        <mn>2</mn>
                                      </msub>
                                      <mo>−</mo>
                                      <msub>
                                        <mi mathvariant="bold">w</mi>
                                        <mn>2</mn>
                                      </msub>
                                    </mrow>
                                  </mstyle>
                                </mtd>
                              </mtr>
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <mi>
                                      <mi mathvariant="normal">⋮</mi>
                                      <mpadded height="+0em" voffset="0em">
                                        <mspace
                                          mathbackground="black"
                                          width="0em"
                                          height="1.5em"
                                        />
                                      </mpadded>
                                    </mi>
                                  </mstyle>
                                </mtd>
                              </mtr>
                              <mtr>
                                <mtd>
                                  <mstyle scriptlevel={0} displaystyle="false">
                                    <mrow>
                                      <msub>
                                        <mi mathvariant="bold">v</mi>
                                        <mi>n</mi>
                                      </msub>
                                      <mo>−</mo>
                                      <msub>
                                        <mi mathvariant="bold">w</mi>
                                        <mi>n</mi>
                                      </msub>
                                    </mrow>
                                  </mstyle>
                                </mtd>
                              </mtr>
                            </mtable>
                            <mo fence="true">]</mo>
                          </mrow>
                        </mrow>
                        <annotation encoding="application/x-tex">
                          \bold{"{"}v{"}"} - \bold{"{"}w{"}"} = \begin{"{"}
                          bmatrix{"}"} \bold{"{"}v{"}"}_{"{"}1{"}"} \\ \bold
                          {"{"}v{"}"}_{"{"}2{"}"} \\ \vdots \\ \bold{"{"}v{"}"}_
                          {"{"}m{"}"}
                          \end{"{"}bmatrix{"}"} - \begin{"{"}bmatrix{"}"} \bold
                          {"{"}w{"}"}_{"{"}1{"}"} \\ \bold{"{"}w{"}"}_{"{"}2
                          {"}"} \\ \vdots \\ \bold{"{"}w{"}"}_{"{"}m{"}"}
                          \end{"{"}bmatrix{"}"} = \begin{"{"}bmatrix{"}"} \bold
                          {"{"}v{"}"}_{"{"}1{"}"} - \bold{"{"}w{"}"}_{"{"}1{"}"}{" "}
                          \\ \bold{"{"}v{"}"}_{"{"}2{"}"} - \bold{"{"}w{"}"}_
                          {"{"}2{"}"} \\ \vdots \\ \bold{"{"}v{"}"}_{"{"}n{"}"}{" "}
                          - \bold{"{"}w{"}"}_{"{"}n{"}"}
                          \end{"{"}bmatrix{"}"}
                        </annotation>
                      </semantics>
                    </math>
                  </span>
                  <span className="katex-html" aria-hidden="true">
                    <span className="base">
                      <span
                        className="strut"
                        style={{
                          height: "0.66666em",
                          verticalAlign: "-0.08333em",
                        }}
                      />
                      <span
                        className="mord mathbf"
                        style={{ marginRight: "0.01597em" }}
                      >
                        v
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
                        style={{ height: "0.44444em", verticalAlign: "0em" }}
                      />
                      <span
                        className="mord mathbf"
                        style={{ marginRight: "0.01597em" }}
                      >
                        w
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
                        style={{
                          height: "5.459999999999999em",
                          verticalAlign: "-2.4799999999999995em",
                        }}
                      />
                      <span className="minner">
                        <span className="mopen">
                          <span className="delimsizing mult">
                            <span className="vlist-t vlist-t2">
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.9500349999999997em" }}
                                >
                                  <span style={{ top: "-2.011015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎣</span>
                                    </span>
                                  </span>
                                  <span style={{ top: "-3.158015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span
                                      style={{
                                        height: "1.8160299999999996em",
                                        width: "0.667em",
                                      }}
                                    >
                                      <svg
                                        width="0.667em"
                                        height="1.8160299999999996em"
                                        style={{ width: "0.667em" }}
                                        viewBox="0 0 667 1816"
                                        preserveAspectRatio="xMinYMin"
                                      >
                                        <path d="M319 0 H403 V1816 H319z M319 0 H403 V1816 H319z" />
                                      </svg>
                                    </span>
                                  </span>
                                  <span style={{ top: "-5.611064999999999em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎡</span>
                                    </span>
                                  </span>
                                </span>
                                <span className="vlist-s">​</span>
                              </span>
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.4500349999999997em" }}
                                >
                                  <span />
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="mord">
                          <span className="mtable">
                            <span className="col-align-c">
                              <span className="vlist-t vlist-t2">
                                <span className="vlist-r">
                                  <span
                                    className="vlist"
                                    style={{ height: "2.9799999999999995em" }}
                                  >
                                    <span style={{ top: "-5.8275em" }}>
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            v
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height:
                                                      "0.30110799999999993em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mtight">
                                                          1
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
                                                >
                                                  <span />
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                    <span style={{ top: "-4.6275em" }}>
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            v
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height:
                                                      "0.30110799999999993em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mtight">
                                                          2
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
                                                >
                                                  <span />
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      style={{ top: "-2.7674999999999996em" }}
                                    >
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span className="mord">⋮</span>
                                          <span
                                            className="mord rule"
                                            style={{
                                              borderRightWidth: "0em",
                                              borderTopWidth: "1.5em",
                                              bottom: "0em",
                                            }}
                                          />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      style={{ top: "-1.5675000000000006em" }}
                                    >
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            v
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height: "0.151392em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mathnormal mtight">
                                                          m
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
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
                                  <span className="vlist-s">​</span>
                                </span>
                                <span className="vlist-r">
                                  <span
                                    className="vlist"
                                    style={{ height: "2.4799999999999995em" }}
                                  >
                                    <span />
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="mclose">
                          <span className="delimsizing mult">
                            <span className="vlist-t vlist-t2">
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.9500349999999997em" }}
                                >
                                  <span style={{ top: "-2.011015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎦</span>
                                    </span>
                                  </span>
                                  <span style={{ top: "-3.158015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span
                                      style={{
                                        height: "1.8160299999999996em",
                                        width: "0.667em",
                                      }}
                                    >
                                      <svg
                                        width="0.667em"
                                        height="1.8160299999999996em"
                                        style={{ width: "0.667em" }}
                                        viewBox="0 0 667 1816"
                                        preserveAspectRatio="xMinYMin"
                                      >
                                        <path d="M263 0 H347 V1816 H263z M263 0 H347 V1816 H263z" />
                                      </svg>
                                    </span>
                                  </span>
                                  <span style={{ top: "-5.611064999999999em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎤</span>
                                    </span>
                                  </span>
                                </span>
                                <span className="vlist-s">​</span>
                              </span>
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.4500349999999997em" }}
                                >
                                  <span />
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
                        style={{
                          height: "5.459999999999999em",
                          verticalAlign: "-2.4799999999999995em",
                        }}
                      />
                      <span className="minner">
                        <span className="mopen">
                          <span className="delimsizing mult">
                            <span className="vlist-t vlist-t2">
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.9500349999999997em" }}
                                >
                                  <span style={{ top: "-2.011015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎣</span>
                                    </span>
                                  </span>
                                  <span style={{ top: "-3.158015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span
                                      style={{
                                        height: "1.8160299999999996em",
                                        width: "0.667em",
                                      }}
                                    >
                                      <svg
                                        width="0.667em"
                                        height="1.8160299999999996em"
                                        style={{ width: "0.667em" }}
                                        viewBox="0 0 667 1816"
                                        preserveAspectRatio="xMinYMin"
                                      >
                                        <path d="M319 0 H403 V1816 H319z M319 0 H403 V1816 H319z" />
                                      </svg>
                                    </span>
                                  </span>
                                  <span style={{ top: "-5.611064999999999em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎡</span>
                                    </span>
                                  </span>
                                </span>
                                <span className="vlist-s">​</span>
                              </span>
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.4500349999999997em" }}
                                >
                                  <span />
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="mord">
                          <span className="mtable">
                            <span className="col-align-c">
                              <span className="vlist-t vlist-t2">
                                <span className="vlist-r">
                                  <span
                                    className="vlist"
                                    style={{ height: "2.9799999999999995em" }}
                                  >
                                    <span style={{ top: "-5.8275em" }}>
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            w
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height:
                                                      "0.30110799999999993em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mtight">
                                                          1
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
                                                >
                                                  <span />
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                    <span style={{ top: "-4.6275em" }}>
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            w
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height:
                                                      "0.30110799999999993em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mtight">
                                                          2
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
                                                >
                                                  <span />
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      style={{ top: "-2.7674999999999996em" }}
                                    >
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span className="mord">⋮</span>
                                          <span
                                            className="mord rule"
                                            style={{
                                              borderRightWidth: "0em",
                                              borderTopWidth: "1.5em",
                                              bottom: "0em",
                                            }}
                                          />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      style={{ top: "-1.5675000000000006em" }}
                                    >
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            w
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height: "0.151392em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mathnormal mtight">
                                                          m
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
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
                                  <span className="vlist-s">​</span>
                                </span>
                                <span className="vlist-r">
                                  <span
                                    className="vlist"
                                    style={{ height: "2.4799999999999995em" }}
                                  >
                                    <span />
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="mclose">
                          <span className="delimsizing mult">
                            <span className="vlist-t vlist-t2">
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.9500349999999997em" }}
                                >
                                  <span style={{ top: "-2.011015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎦</span>
                                    </span>
                                  </span>
                                  <span style={{ top: "-3.158015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span
                                      style={{
                                        height: "1.8160299999999996em",
                                        width: "0.667em",
                                      }}
                                    >
                                      <svg
                                        width="0.667em"
                                        height="1.8160299999999996em"
                                        style={{ width: "0.667em" }}
                                        viewBox="0 0 667 1816"
                                        preserveAspectRatio="xMinYMin"
                                      >
                                        <path d="M263 0 H347 V1816 H263z M263 0 H347 V1816 H263z" />
                                      </svg>
                                    </span>
                                  </span>
                                  <span style={{ top: "-5.611064999999999em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎤</span>
                                    </span>
                                  </span>
                                </span>
                                <span className="vlist-s">​</span>
                              </span>
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.4500349999999997em" }}
                                >
                                  <span />
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
                        style={{
                          height: "5.459999999999999em",
                          verticalAlign: "-2.4799999999999995em",
                        }}
                      />
                      <span className="minner">
                        <span className="mopen">
                          <span className="delimsizing mult">
                            <span className="vlist-t vlist-t2">
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.9500349999999997em" }}
                                >
                                  <span style={{ top: "-2.011015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎣</span>
                                    </span>
                                  </span>
                                  <span style={{ top: "-3.158015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span
                                      style={{
                                        height: "1.8160299999999996em",
                                        width: "0.667em",
                                      }}
                                    >
                                      <svg
                                        width="0.667em"
                                        height="1.8160299999999996em"
                                        style={{ width: "0.667em" }}
                                        viewBox="0 0 667 1816"
                                        preserveAspectRatio="xMinYMin"
                                      >
                                        <path d="M319 0 H403 V1816 H319z M319 0 H403 V1816 H319z" />
                                      </svg>
                                    </span>
                                  </span>
                                  <span style={{ top: "-5.611064999999999em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎡</span>
                                    </span>
                                  </span>
                                </span>
                                <span className="vlist-s">​</span>
                              </span>
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.4500349999999997em" }}
                                >
                                  <span />
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="mord">
                          <span className="mtable">
                            <span className="col-align-c">
                              <span className="vlist-t vlist-t2">
                                <span className="vlist-r">
                                  <span
                                    className="vlist"
                                    style={{ height: "2.9799999999999995em" }}
                                  >
                                    <span style={{ top: "-5.8275em" }}>
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            v
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height:
                                                      "0.30110799999999993em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mtight">
                                                          1
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
                                                >
                                                  <span />
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                        <span
                                          className="mspace"
                                          style={{
                                            marginRight: "0.2222222222222222em",
                                          }}
                                        />
                                        <span className="mbin">−</span>
                                        <span
                                          className="mspace"
                                          style={{
                                            marginRight: "0.2222222222222222em",
                                          }}
                                        />
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            w
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height:
                                                      "0.30110799999999993em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mtight">
                                                          1
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
                                                >
                                                  <span />
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                    <span style={{ top: "-4.6275em" }}>
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            v
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height:
                                                      "0.30110799999999993em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mtight">
                                                          2
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
                                                >
                                                  <span />
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                        <span
                                          className="mspace"
                                          style={{
                                            marginRight: "0.2222222222222222em",
                                          }}
                                        />
                                        <span className="mbin">−</span>
                                        <span
                                          className="mspace"
                                          style={{
                                            marginRight: "0.2222222222222222em",
                                          }}
                                        />
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            w
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height:
                                                      "0.30110799999999993em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mtight">
                                                          2
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
                                                >
                                                  <span />
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      style={{ top: "-2.7674999999999996em" }}
                                    >
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span className="mord">⋮</span>
                                          <span
                                            className="mord rule"
                                            style={{
                                              borderRightWidth: "0em",
                                              borderTopWidth: "1.5em",
                                              bottom: "0em",
                                            }}
                                          />
                                        </span>
                                      </span>
                                    </span>
                                    <span
                                      style={{ top: "-1.5675000000000006em" }}
                                    >
                                      <span
                                        className="pstrut"
                                        style={{ height: "3.6875em" }}
                                      />
                                      <span className="mord">
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            v
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height: "0.151392em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mathnormal mtight">
                                                          n
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
                                                >
                                                  <span />
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                        <span
                                          className="mspace"
                                          style={{
                                            marginRight: "0.2222222222222222em",
                                          }}
                                        />
                                        <span className="mbin">−</span>
                                        <span
                                          className="mspace"
                                          style={{
                                            marginRight: "0.2222222222222222em",
                                          }}
                                        />
                                        <span className="mord">
                                          <span
                                            className="mord mathbf"
                                            style={{ marginRight: "0.01597em" }}
                                          >
                                            w
                                          </span>
                                          <span className="msupsub">
                                            <span className="vlist-t vlist-t2">
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{
                                                    height: "0.151392em",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      top: "-2.5500000000000003em",
                                                      marginLeft: "-0.01597em",
                                                      marginRight: "0.05em",
                                                    }}
                                                  >
                                                    <span
                                                      className="pstrut"
                                                      style={{
                                                        height: "2.7em",
                                                      }}
                                                    />
                                                    <span className="sizing reset-size6 size3 mtight">
                                                      <span className="mord mtight">
                                                        <span className="mord mathnormal mtight">
                                                          n
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </span>
                                                </span>
                                                <span className="vlist-s">
                                                  ​
                                                </span>
                                              </span>
                                              <span className="vlist-r">
                                                <span
                                                  className="vlist"
                                                  style={{ height: "0.15em" }}
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
                                  <span className="vlist-s">​</span>
                                </span>
                                <span className="vlist-r">
                                  <span
                                    className="vlist"
                                    style={{ height: "2.4799999999999995em" }}
                                  >
                                    <span />
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="mclose">
                          <span className="delimsizing mult">
                            <span className="vlist-t vlist-t2">
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.9500349999999997em" }}
                                >
                                  <span style={{ top: "-2.011015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎦</span>
                                    </span>
                                  </span>
                                  <span style={{ top: "-3.158015em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span
                                      style={{
                                        height: "1.8160299999999996em",
                                        width: "0.667em",
                                      }}
                                    >
                                      <svg
                                        width="0.667em"
                                        height="1.8160299999999996em"
                                        style={{ width: "0.667em" }}
                                        viewBox="0 0 667 1816"
                                        preserveAspectRatio="xMinYMin"
                                      >
                                        <path d="M263 0 H347 V1816 H263z M263 0 H347 V1816 H263z" />
                                      </svg>
                                    </span>
                                  </span>
                                  <span style={{ top: "-5.611064999999999em" }}>
                                    <span
                                      className="pstrut"
                                      style={{ height: "3.8160299999999996em" }}
                                    />
                                    <span className="delimsizinginner delim-size4">
                                      <span>⎤</span>
                                    </span>
                                  </span>
                                </span>
                                <span className="vlist-s">​</span>
                              </span>
                              <span className="vlist-r">
                                <span
                                  className="vlist"
                                  style={{ height: "2.4500349999999997em" }}
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
                </span>
              </span>
              <span>﻿</span>
            </span>{" "}
          </p>
          <p id="863a50af-8927-45b8-9ee0-32350de1ccdf">
            To test <code>subtract</code>, add the following assertion to your{" "}
            <code>linear_alg</code> test function:
          </p>
          <pre id="2978c81c-7748-472d-9304-d324c273b22e" className="code">
            <code>
              #[test]{"\n"}fn linear_alg() {"{"}
              {"\n"}
              {"\t"}/*...*/{"\n"}
              {"\t"}assert_eq!(v.subtract(&amp;w), vec![0.5, 3., -6.]);{"\n"}
              {"}"}
            </code>
          </pre>
          <p id="27270d15-22cc-44b5-86ed-f99ad09b7db2">
            Nice. I hope you were able to make that test pass (but of course no
            worries if you weren’t). Here’s an implementation of{" "}
            <code>subtract</code>:{" "}
          </p>
          <pre id="52171a79-7866-460c-b457-f2252efe6e21" className="code">
            <code>
              fn subtract(&amp;self, w: &amp;[f64]) -&gt; Vec&lt;f64&gt; {"{"}
              {"\n"}
              {"\t"}assert_eq!(self.len(), w.len());{"\n"}
              {"\t"}self.iter().zip(w).map(|(v_i, w_i)| v_i - w_i).collect()
              {"\n"}
              {"}"}
            </code>
          </pre>
        </li>
      </ul>
      <ul id="a7a38221-b6e5-4f59-8069-e56fba936be8" className="bulleted-list">
        <li style={{ listStyleType: "disc", fontWeight: "bold" }}>
          <span style={{ borderBottom: "0.05em solid" }}>Sum of Squares</span> -
          A vector’s <em>sum of squares</em> is the result of squaring each of
          its elements and adding everything up:
          <p id="fde389ef-665a-4705-ad86-73deb493f868">
            For some vector{" "}
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
                          <mi mathvariant="bold">v</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">
                          \bold{"{"}v{"}"}
                        </annotation>
                      </semantics>
                    </math>
                  </span>
                  <span className="katex-html" aria-hidden="true">
                    <span className="base">
                      <span
                        className="strut"
                        style={{ height: "0.44444em", verticalAlign: "0em" }}
                      />
                      <span
                        className="mord mathbf"
                        style={{ marginRight: "0.01597em" }}
                      >
                        v
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span>﻿</span>
            </span>{" "}
            with elements{" "}
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
                            <mi mathvariant="bold">v</mi>
                            <mn>1</mn>
                          </msub>
                          <mo separator="true">,</mo>
                          <mi mathvariant="normal">.</mi>
                          <mi mathvariant="normal">.</mi>
                          <mi mathvariant="normal">.</mi>
                          <mo separator="true">,</mo>
                          <msub>
                            <mi mathvariant="bold">v</mi>
                            <mi>n</mi>
                          </msub>
                        </mrow>
                        <annotation encoding="application/x-tex">
                          \bold{"{"}v{"}"}_1, ..., \bold{"{"}v{"}"}_n
                        </annotation>
                      </semantics>
                    </math>
                  </span>
                  <span className="katex-html" aria-hidden="true">
                    <span className="base">
                      <span
                        className="strut"
                        style={{
                          height: "0.63888em",
                          verticalAlign: "-0.19444em",
                        }}
                      />
                      <span className="mord">
                        <span
                          className="mord mathbf"
                          style={{ marginRight: "0.01597em" }}
                        >
                          v
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
                                    marginLeft: "-0.01597em",
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
                              <span
                                className="vlist"
                                style={{ height: "0.15em" }}
                              >
                                <span />
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="mpunct">,</span>
                      <span
                        className="mspace"
                        style={{ marginRight: "0.16666666666666666em" }}
                      />
                      <span className="mord">...</span>
                      <span className="mpunct">,</span>
                      <span
                        className="mspace"
                        style={{ marginRight: "0.16666666666666666em" }}
                      />
                      <span className="mord">
                        <span
                          className="mord mathbf"
                          style={{ marginRight: "0.01597em" }}
                        >
                          v
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
                                    marginLeft: "-0.01597em",
                                    marginRight: "0.05em",
                                  }}
                                >
                                  <span
                                    className="pstrut"
                                    style={{ height: "2.7em" }}
                                  />
                                  <span className="sizing reset-size6 size3 mtight">
                                    <span className="mord mathnormal mtight">
                                      n
                                    </span>
                                  </span>
                                </span>
                              </span>
                              <span className="vlist-s">​</span>
                            </span>
                            <span className="vlist-r">
                              <span
                                className="vlist"
                                style={{ height: "0.15em" }}
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
              </span>
              <span>﻿</span>
            </span>
            ,{" "}
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
                          <mi>s</mi>
                          <mi>u</mi>
                          <mi>m</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>o</mi>
                          <mi>f</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>s</mi>
                          <mi>q</mi>
                          <mi>u</mi>
                          <mi>a</mi>
                          <mi>r</mi>
                          <mi>e</mi>
                          <mi>s</mi>
                          <mo stretchy="false">(</mo>
                          <mi mathvariant="bold">v</mi>
                          <mo stretchy="false">)</mo>
                          <mo>=</mo>
                          <mo stretchy="false">(</mo>
                          <msub>
                            <mi mathvariant="bold">v</mi>
                            <mn>1</mn>
                          </msub>
                          <msup>
                            <mo stretchy="false">)</mo>
                            <mn>2</mn>
                          </msup>
                          <mo>+</mo>
                          <mi mathvariant="normal">.</mi>
                          <mi mathvariant="normal">.</mi>
                          <mi mathvariant="normal">.</mi>
                          <mo>+</mo>
                          <mo stretchy="false">(</mo>
                          <msub>
                            <mi mathvariant="bold">v</mi>
                            <mi>n</mi>
                          </msub>
                          <msup>
                            <mo stretchy="false">)</mo>
                            <mn>2</mn>
                          </msup>
                        </mrow>
                        <annotation encoding="application/x-tex">
                          sum \hspace{"{"}1mm{"}"} of \hspace{"{"}1mm{"}"}{" "}
                          squares(\bold{"{"}v{"}"}) = (\bold{"{"}v{"}"}_1)^2 +
                          ... + (\bold{"{"}v{"}"}_n)^2
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
                      <span className="mord mathnormal">s</span>
                      <span className="mord mathnormal">u</span>
                      <span className="mord mathnormal">m</span>
                      <span
                        className="mspace"
                        style={{ marginRight: "0.2845275590551181em" }}
                      />
                      <span className="mord mathnormal">o</span>
                      <span
                        className="mord mathnormal"
                        style={{ marginRight: "0.10764em" }}
                      >
                        f
                      </span>
                      <span
                        className="mspace"
                        style={{ marginRight: "0.2845275590551181em" }}
                      />
                      <span className="mord mathnormal">s</span>
                      <span
                        className="mord mathnormal"
                        style={{ marginRight: "0.03588em" }}
                      >
                        q
                      </span>
                      <span className="mord mathnormal">u</span>
                      <span className="mord mathnormal">a</span>
                      <span className="mord mathnormal">res</span>
                      <span className="mopen">(</span>
                      <span
                        className="mord mathbf"
                        style={{ marginRight: "0.01597em" }}
                      >
                        v
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
                          height: "1.064108em",
                          verticalAlign: "-0.25em",
                        }}
                      />
                      <span className="mopen">(</span>
                      <span className="mord">
                        <span
                          className="mord mathbf"
                          style={{ marginRight: "0.01597em" }}
                        >
                          v
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
                                    marginLeft: "-0.01597em",
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
                              <span
                                className="vlist"
                                style={{ height: "0.15em" }}
                              >
                                <span />
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
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
                        style={{
                          height: "0.66666em",
                          verticalAlign: "-0.08333em",
                        }}
                      />
                      <span className="mord">...</span>
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
                          height: "1.064108em",
                          verticalAlign: "-0.25em",
                        }}
                      />
                      <span className="mopen">(</span>
                      <span className="mord">
                        <span
                          className="mord mathbf"
                          style={{ marginRight: "0.01597em" }}
                        >
                          v
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
                                    marginLeft: "-0.01597em",
                                    marginRight: "0.05em",
                                  }}
                                >
                                  <span
                                    className="pstrut"
                                    style={{ height: "2.7em" }}
                                  />
                                  <span className="sizing reset-size6 size3 mtight">
                                    <span className="mord mathnormal mtight">
                                      n
                                    </span>
                                  </span>
                                </span>
                              </span>
                              <span className="vlist-s">​</span>
                            </span>
                            <span className="vlist-r">
                              <span
                                className="vlist"
                                style={{ height: "0.15em" }}
                              >
                                <span />
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
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
                                    <span className="mord mtight">2</span>
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
              <span>﻿</span>
            </span>{" "}
          </p>
          <p id="36113b0c-d8d9-44fa-8abe-a4059726b2a3">
            Here’s a test for <code>sum_of_squares</code>:
          </p>
          <pre id="a4fe2f86-dd20-49e6-926a-eb7866724825" className="code">
            <code>
              #[test]{"\n"}fn linear_alg() {"{"}
              {"\n"}
              {"\t"}/*...*/{"\n"}
              {"\t"}assert_eq!(v.sum_of_squares(), 35.);{"\n"}
              {"}"}
            </code>
          </pre>
          <p id="e302f491-cced-4cc8-a0e4-fb2f3577604c">
            And here’s my implementation:
          </p>
          <pre id="700eb9e2-d685-4bd6-b4a5-78d0a6d75dd2" className="code">
            <code>
              fn sum_of_squares(&amp;self) -&gt; f64 {"{"}
              {"\n"}
              {"\t"}self.dot(&amp;self){"\n"}
              {"}"}
            </code>
          </pre>
        </li>
      </ul>
      <ul id="1d8de283-67ff-467a-9314-643b294e8dbb" className="bulleted-list">
        <li style={{ listStyleType: "disc", fontWeight: "bold" }}>
          <span style={{ borderBottom: "0.05em solid" }}>Distance</span> - The
          distance between two vectors{" "}
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
                        <mi mathvariant="bold">v</mi>
                      </mrow>
                      <annotation encoding="application/x-tex">
                        \bold{"{"}v{"}"}
                      </annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{ height: "0.44444em", verticalAlign: "0em" }}
                    />
                    <span
                      className="mord mathbf"
                      style={{ marginRight: "0.01597em" }}
                    >
                      v
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>{" "}
          and{" "}
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
                        <mi mathvariant="bold">w</mi>
                      </mrow>
                      <annotation encoding="application/x-tex">
                        \bold{"{"}w{"}"}
                      </annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{ height: "0.44444em", verticalAlign: "0em" }}
                    />
                    <span
                      className="mord mathbf"
                      style={{ marginRight: "0.01597em" }}
                    >
                      w
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>{" "}
          is defined as
          <p id="b8c5bb1d-7132-46bc-888f-922a1971d004">
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
                          <msqrt>
                            <mrow>
                              <mo stretchy="false">(</mo>
                              <msub>
                                <mi mathvariant="bold">v</mi>
                                <mn>1</mn>
                              </msub>
                              <mo>−</mo>
                              <msub>
                                <mi mathvariant="bold">w</mi>
                                <mn>1</mn>
                              </msub>
                              <msup>
                                <mo stretchy="false">)</mo>
                                <mn>2</mn>
                              </msup>
                              <mo>+</mo>
                              <mi mathvariant="normal">.</mi>
                              <mi mathvariant="normal">.</mi>
                              <mi mathvariant="normal">.</mi>
                              <mo>+</mo>
                              <mo stretchy="false">(</mo>
                              <msub>
                                <mi mathvariant="bold">v</mi>
                                <mi>n</mi>
                              </msub>
                              <mo>−</mo>
                              <msub>
                                <mi mathvariant="bold">w</mi>
                                <mi>n</mi>
                              </msub>
                              <msup>
                                <mo stretchy="false">)</mo>
                                <mn>2</mn>
                              </msup>
                            </mrow>
                          </msqrt>
                        </mrow>
                        <annotation encoding="application/x-tex">
                          \sqrt{"{"}(\bold{"{"}v{"}"}_1 - \bold{"{"}w{"}"}_1)^2
                          + ... + (\bold{"{"}v{"}"}_n - \bold{"{"}w{"}"}_n)^2
                          {"}"}{" "}
                        </annotation>
                      </semantics>
                    </math>
                  </span>
                  <span className="katex-html" aria-hidden="true">
                    <span className="base">
                      <span
                        className="strut"
                        style={{
                          height: "1.24em",
                          verticalAlign: "-0.30499999999999994em",
                        }}
                      />
                      <span className="mord sqrt">
                        <span className="vlist-t vlist-t2">
                          <span className="vlist-r">
                            <span
                              className="vlist"
                              style={{ height: "0.935em" }}
                            >
                              <span
                                className="svg-align"
                                style={{ top: "-3.2em" }}
                              >
                                <span
                                  className="pstrut"
                                  style={{ height: "3.2em" }}
                                />
                                <span
                                  className="mord"
                                  style={{ paddingLeft: "1em" }}
                                >
                                  <span className="mopen">(</span>
                                  <span className="mord">
                                    <span
                                      className="mord mathbf"
                                      style={{ marginRight: "0.01597em" }}
                                    >
                                      v
                                    </span>
                                    <span className="msupsub">
                                      <span className="vlist-t vlist-t2">
                                        <span className="vlist-r">
                                          <span
                                            className="vlist"
                                            style={{
                                              height: "0.30110799999999993em",
                                            }}
                                          >
                                            <span
                                              style={{
                                                top: "-2.5500000000000003em",
                                                marginLeft: "-0.01597em",
                                                marginRight: "0.05em",
                                              }}
                                            >
                                              <span
                                                className="pstrut"
                                                style={{ height: "2.7em" }}
                                              />
                                              <span className="sizing reset-size6 size3 mtight">
                                                <span className="mord mtight">
                                                  1
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                          <span className="vlist-s">​</span>
                                        </span>
                                        <span className="vlist-r">
                                          <span
                                            className="vlist"
                                            style={{ height: "0.15em" }}
                                          >
                                            <span />
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                  <span
                                    className="mspace"
                                    style={{
                                      marginRight: "0.2222222222222222em",
                                    }}
                                  />
                                  <span className="mbin">−</span>
                                  <span
                                    className="mspace"
                                    style={{
                                      marginRight: "0.2222222222222222em",
                                    }}
                                  />
                                  <span className="mord">
                                    <span
                                      className="mord mathbf"
                                      style={{ marginRight: "0.01597em" }}
                                    >
                                      w
                                    </span>
                                    <span className="msupsub">
                                      <span className="vlist-t vlist-t2">
                                        <span className="vlist-r">
                                          <span
                                            className="vlist"
                                            style={{
                                              height: "0.30110799999999993em",
                                            }}
                                          >
                                            <span
                                              style={{
                                                top: "-2.5500000000000003em",
                                                marginLeft: "-0.01597em",
                                                marginRight: "0.05em",
                                              }}
                                            >
                                              <span
                                                className="pstrut"
                                                style={{ height: "2.7em" }}
                                              />
                                              <span className="sizing reset-size6 size3 mtight">
                                                <span className="mord mtight">
                                                  1
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                          <span className="vlist-s">​</span>
                                        </span>
                                        <span className="vlist-r">
                                          <span
                                            className="vlist"
                                            style={{ height: "0.15em" }}
                                          >
                                            <span />
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                  <span className="mclose">
                                    <span className="mclose">)</span>
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
                                    style={{
                                      marginRight: "0.2222222222222222em",
                                    }}
                                  />
                                  <span className="mbin">+</span>
                                  <span
                                    className="mspace"
                                    style={{
                                      marginRight: "0.2222222222222222em",
                                    }}
                                  />
                                  <span className="mord">...</span>
                                  <span
                                    className="mspace"
                                    style={{
                                      marginRight: "0.2222222222222222em",
                                    }}
                                  />
                                  <span className="mbin">+</span>
                                  <span
                                    className="mspace"
                                    style={{
                                      marginRight: "0.2222222222222222em",
                                    }}
                                  />
                                  <span className="mopen">(</span>
                                  <span className="mord">
                                    <span
                                      className="mord mathbf"
                                      style={{ marginRight: "0.01597em" }}
                                    >
                                      v
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
                                                marginLeft: "-0.01597em",
                                                marginRight: "0.05em",
                                              }}
                                            >
                                              <span
                                                className="pstrut"
                                                style={{ height: "2.7em" }}
                                              />
                                              <span className="sizing reset-size6 size3 mtight">
                                                <span className="mord mathnormal mtight">
                                                  n
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                          <span className="vlist-s">​</span>
                                        </span>
                                        <span className="vlist-r">
                                          <span
                                            className="vlist"
                                            style={{ height: "0.15em" }}
                                          >
                                            <span />
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                  <span
                                    className="mspace"
                                    style={{
                                      marginRight: "0.2222222222222222em",
                                    }}
                                  />
                                  <span className="mbin">−</span>
                                  <span
                                    className="mspace"
                                    style={{
                                      marginRight: "0.2222222222222222em",
                                    }}
                                  />
                                  <span className="mord">
                                    <span
                                      className="mord mathbf"
                                      style={{ marginRight: "0.01597em" }}
                                    >
                                      w
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
                                                marginLeft: "-0.01597em",
                                                marginRight: "0.05em",
                                              }}
                                            >
                                              <span
                                                className="pstrut"
                                                style={{ height: "2.7em" }}
                                              />
                                              <span className="sizing reset-size6 size3 mtight">
                                                <span className="mord mathnormal mtight">
                                                  n
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                          <span className="vlist-s">​</span>
                                        </span>
                                        <span className="vlist-r">
                                          <span
                                            className="vlist"
                                            style={{ height: "0.15em" }}
                                          >
                                            <span />
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                  <span className="mclose">
                                    <span className="mclose">)</span>
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
                              <span style={{ top: "-2.8950000000000005em" }}>
                                <span
                                  className="pstrut"
                                  style={{ height: "3.2em" }}
                                />
                                <span
                                  className="hide-tail"
                                  style={{
                                    minWidth: "1.02em",
                                    height: "1.28em",
                                  }}
                                >
                                  <svg
                                    width="400em"
                                    height="1.28em"
                                    viewBox="0 0 400000 1296"
                                    preserveAspectRatio="xMinYMin slice"
                                  >
                                    <path
                                      d="M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z"
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
                              style={{ height: "0.30499999999999994em" }}
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
            </span>{" "}
          </p>
          <p id="68ffad91-75bb-4d8a-bc8e-f7ba6f23c93d">
            As usual, here’s a test for <code>distance</code>:
          </p>
          <pre id="9b704694-2604-4abb-954c-e3692348940a" className="code">
            <code>assert_eq!(v.distance(&amp;w), 45.25f64.sqrt())</code>
          </pre>
          <p id="bcdaf1ee-89b6-4bbb-a29b-d74b0c5549cb">
            Hallelujah. Here’s some Rust:
          </p>
          <pre id="4a3c5d53-bf7b-461c-872c-829fcc175b6d" className="code">
            <code>
              fn distance(&amp;self, w: &amp;[f64]) -&gt; f64 {"{"}
              {"\n"}
              {"\t"}assert_eq!(self.len(), w.len());{"\n"}
              {"\t"}self.subtract(w).sum_of_squares().sqrt(){"\n"}
              {"}"}
            </code>
          </pre>
        </li>
      </ul>
      <p id="dccf7ab7-0753-4d5d-8b9d-ba5295a72e42"></p>
      <p id="fd5dbcb8-fbd5-4d74-a792-7ed5c1419310">
        Implementing <code>LinearAlgbra</code> for the{" "}
        <code>Vec&lt;f64&gt;</code> type is all we need for our KNN
        implementation, so we’ll leave it there. Great.
      </p>
      <h3 id="eb9fc233-0f12-4a0d-92fa-8af1b4bc4122">
        Loading Data, Processing Data, and Splitting Data. Gnarly.
      </h3>
      <hr id="9ee28049-63d6-45eb-8437-388fdf42b70e" />
      <p id="1b47d3cb-3c33-489d-9d38-2ee2fa2c15a4">
        I’d like to continue our test-first approach. So before we get to the
        most important function of this installment, which will be called{" "}
        <code>knn_classify</code>, we’ll write a test for it.{" "}
      </p>
      <p id="30f7fe21-cdc0-4bfe-9634-369e50feb750">
        But we’re going to need some data to test on. A classic dataset to test
        KNN on is the{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Iris_flower_data_set"
        >
          iris flower dataset
        </a>
        . This data set contains 150 rows, where each row contains a flower’s
        petal length, petal width, sepal length, sepal width, and type. The
        dataset has three types of iris: Setosa, Versicolor, and Virginica.
      </p>
      <p id="e20fe897-b5ac-4971-b0a7-6f40966e2706">
        Here’s some code for you to put in <code>lib.rs</code>. It gets the iris
        dataset and converts it to a format we can work with. Look through the
        code if you’re curious, but I won’t be explaining any of it. I’d like to
        save time for more interesting stuff.
      </p>
      <pre id="27ad6ab0-ba82-4ee4-a141-47ff7dc2ac9a" className="code">
        <code>
          #[cfg(test)]{"\n"}mod tests {"{"}
          {"\n"}
          {"    "}use super::*;{"\n"}
          {"\n"}
          {"\t"}
          {"\t"}/*...*/{"\n"}
          {"\n"}
          {"    "}macro_rules! await_fn {"{"}
          {"\n"}
          {"        "}($arg:expr) =&gt; {"{"}
          {"{"}
          {"\n"}
          {"            "}tokio_test::block_on($arg){"\n"}
          {"        "}
          {"}"}
          {"}"};{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"\n"}
          {"    "}async fn get_iris_data() -&gt; Result&lt;String,
          reqwest::Error&gt; {"{"}
          {"\n"}
          {"        "}let body = reqwest::get({"\n"}
          {"            "}
          "https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data",
          {"\n"}
          {"        "}){"\n"}
          {"        "}.await?{"\n"}
          {"        "}.text(){"\n"}
          {"        "}.await?;{"\n"}
          {"\n"}
          {"        "}Ok(body){"\n"}
          {"    "}
          {"}"}
          {"\n\n"}
          {"    "}type GenericResult&lt;T&gt; = Result&lt;T, Box&lt;dyn
          std::error::Error&gt;&gt;;{"\n"}
          {"\n"}
          {"    "}fn process_iris_data&lt;{`'`}a&gt;(body: &amp;str) -&gt;
          GenericResult&lt;Vec&lt;LabeledPoint&gt;&gt; {"{"}
          {"\n"}
          {"        "}body.split("\n"){"\n"}
          {"            "}.filter(|data_point| data_point.len() &gt; 0){"\n"}
          {"            "}.map(|data_point| -&gt;
          GenericResult&lt;LabeledPoint&gt; {"{"}
          {"\n"}
          {"                "}let columns = data_point.split({`"`},{`"`}
          ).collect::&lt;Vec&lt;&amp;str&gt;&gt;();{"\n"}
          {"                "}let (label, point) = columns.split_last().ok_or(
          {`"`}Cannot split last{`"`})?;{"\n"}
          {"                "}let point = point{"\n"}
          {"                    "}.iter(){"\n"}
          {"                    "}.map(|feature| feature.parse::&lt;f64&gt;())
          {"\n"}
          {"                    "}.collect::&lt;Result&lt;Vec&lt;f64&gt;,
          std::num::ParseFloatError&gt;&gt;()?;{"\n"}
          {"\n"}
          {"                "}Ok(LabeledPoint {"{"} label, point {"}"}){"\n"}
          {"            "}
          {"}"}){"\n"}
          {"            "}
          .collect::&lt;GenericResult&lt;Vec&lt;LabeledPoint&gt;&gt;&gt;(){"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"}
        </code>
      </pre>
      <p id="dd470655-fe53-4b20-8566-b645063182d0">Sweet.</p>
      <p id="d3186277-f2f9-48e6-9661-6c6dd71e9284">
        Next, we need to split that data into{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://developers.google.com/machine-learning/crash-course/training-and-test-sets/splitting-data"
        >
          a training set and a testing set
        </a>
        . Here’s a function to do just that:
      </p>
      <pre id="44ab38c9-67b5-4b36-b0e4-5bda41e47226" className="code">
        <code>
          mod tests {"{"}
          {"\n"}
          {"\n"}
          {"\t"}
          {`/*...*/`}
          {"\n"}
          {"\n"}
          {"\t"}use rand::{"{"}seq::SliceRandom, thread_rng{"}"};{"\n"}
          {"\n"}
          {"\t"}fn split_data&lt;T&gt;(data: &amp;[T], prob: f64) -&gt;
          (Vec&lt;T&gt;, Vec&lt;T&gt;){"\n"}
          {"  "}where{"\n"}
          {"      "}T: Clone,{" "}
          <a
            onClick={() => scrollTo("codeBlockDBulletA")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➀
          </a>
          {"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}let mut data_copy = data.to_vec();{" "}
          <a
            onClick={() => scrollTo("codeBlockDBulletB")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➁
          </a>
          {"\n"}
          {"      "}data_copy.shuffle(&amp;mut thread_rng());{" "}
          <a
            onClick={() => scrollTo("codeBlockDBulletC")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➂
          </a>
          {"\n"}
          {"      "}let split_index = ((data.len() as f64) * prob).round() as
          usize;{"\n"}
          {"\n"}
          {"      "}({"\n"}
          {"          "}data_copy[..split_index].to_vec(),{"\n"}
          {"          "}data_copy[split_index..].to_vec(),{"\n"}
          {"      "}){"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"\n"}
          {"}"}
        </code>
      </pre>
      <p id="73a94dda-3fa8-440c-b65d-f974ed2fda82" className />
      <ol>
        <div className="indented">
          <p id="662e9e84-4098-4a5b-af13-2c1750a70e62">
            <strong ref={codeBlockDBulletA}>➀</strong> - Using the{" "}
            <code>where</code> clause to specify that <code>T</code> must
            implement the <code>Clone</code> trait.
          </p>
          <p id="7ad26a92-001c-4029-a614-c748c06b0b9b">
            <strong ref={codeBlockDBulletB}>➁</strong> -{" "}
            <code>data.to_vec()</code> copies the <code>data</code> slice into a
            new <code>Vec</code> [
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/std/primitive.slice.html#method.to_vec"
            >
              9
            </a>
            ]. This allows us to shuffle our data without taking a mutable
            reference to the data.
          </p>
          <p id="cf9722c6-dfe1-42a9-a9c2-467974b44717">
            <strong ref={codeBlockDBulletC}>➂</strong> - The{" "}
            <code>shuffle</code> method will shuffle up a mutable slice in place
            [
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.rs/rand/0.6.5/rand/seq/trait.SliceRandom.html#tymethod.shuffle"
            >
              10
            </a>
            ]. <code>shuffle</code> is from the <code>rand</code> crate’s{" "}
            <code>SliceRandom</code> trait, which is an{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://rust-lang.github.io/rfcs/0445-extension-trait-conventions.html"
            >
              extension trait
            </a>{" "}
            on slices. So we get to use <code>shuffle</code> on mutable slices
            after importing the trait.
          </p>
          <p id="296acd4f-ebf2-4584-8678-228e95e8bb38">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.rs/rand/0.6.3/rand/fn.thread_rng.html"
            >
              The{" "}
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.rs/rand/0.6.3/rand/fn.thread_rng.html"
            >
              <code>thread_rng</code>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.rs/rand/0.6.3/rand/fn.thread_rng.html"
            >
              {" "}
              function
            </a>
            , which also comes from <code>rand</code>, is a random number
            generator.{" "}
          </p>
        </div>
      </ol>
      <p />
      <p id="1b69f8ae-6be8-4974-931c-ef8361a3ce76"></p>
      <p id="7ff8c397-064d-4bae-b01d-c83e5c669cce">
        Great. We’ve got everything we need to test our (currently
        unimplemented) <code>knn_classify</code> function.
      </p>{" "}
      <p>
        We’re going to set{" "}
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
                      <mi>k</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">k</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03148em" }}
                  >
                    k
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        to 5; we’ll classify new data points based on their 5 nearest neighbors.
        In a real application of KNN, it would be a good idea to test out a few
        more values of{" "}
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
                      <mi>k</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">k</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.69444em", verticalAlign: "0em" }}
                  />
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.03148em" }}
                  >
                    k
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        .
      </p>
      <p id="d01841b0-a3f3-462f-933c-ef0b8fadcc36">Here’s the test:</p>
      <pre id="8daac5f6-3454-48ae-a232-bd4149104019" className="code">
        <code>
          fn knn_classify(k: u8, data_points: &amp;[LabeledPoint], new_point:
          &amp;[f64]) -&gt; Option&lt;String&gt; {"{"}
          {"\n"}
          {"\t"}todo!(){"\n"}
          {"}"}
          {"\n"}
          {"\n"}#[cfg(test)]{"\n"}mod tests {"{"}
          {"\n"}
          {"\t"}
          {"\t"}
          {`/*...*/`}
          {"\n"}
          {"\n"}
          {"\t"}
          {"\t"}fn count_correct_classifications({"\n"}
          {"        "}train_set: &amp;[LabeledPoint],{"\n"}
          {"        "}test_set: &amp;[LabeledPoint],{"\n"}
          {"        "}k: u8,{"\n"}
          {"    "}) -&gt; u32 {"{"}
          {"\n"}
          {"        "}let mut num_correct: u32 = 0;{"\n"}
          {"\n"}
          {"        "}for iris in test_set.iter() {"{"}
          {"\n"}
          {"            "}let predicted = knn_classify(k, &amp;train_set,
          &amp;iris.point);{"\n"}
          {"            "}let actual = iris.label;{"\n"}
          {"\n"}
          {"            "}if let Some(predicted) = predicted {"{"}{" "}
          <a
            onClick={() => scrollTo("codeBlockEBulletA")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➀
          </a>
          {"\n"}
          {"                "}if predicted == actual {"{"}
          {"\n"}
          {"                    "}num_correct += 1;{"\n"}
          {"                "}
          {"}"}
          {"\n"}
          {"            "}
          {"}"}
          {"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"\n"}
          {"        "}num_correct{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"\n"}
          {"\t"}
          {"\t"}#[test]{"\n"}
          {"    "}fn iris() -&gt; GenericResult&lt;()&gt; {"{"}
          {"\n"}
          {"        "}let raw_iris_data = await_fn!(get_iris_data())?;{"\n"}
          {"        "}let iris_data = process_iris_data(&amp;raw_iris_data)?;
          {"\n"}
          {"\n"}
          {"        "}let (train_set, test_set) = split_data(&amp;iris_data,
          0.70);{" "}
          <a
            onClick={() => scrollTo("codeBlockEBulletB")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➁
          </a>
          {"\n"}
          {"        "}assert_eq!(train_set.len(), 105);{"\n"}
          {"        "}assert_eq!(test_set.len(), 45);{"\n"}
          {"\n"}
          {"        "}let k = 5;{"\n"}
          {"        "}let num_correct =
          count_correct_classifications(&amp;train_set, &amp;test_set, k);{"\n"}
          {"        "}let percent_corrent = num_correct as f32 / test_set.len()
          as f32;{"\n"}
          {"\n"}
          {"        "}assert!(percent_corrent &gt; 0.9);{" "}
          <a
            onClick={() => scrollTo("codeBlockEBulletC")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➂
          </a>
          {"\n"}
          {"\n"}
          {"        "}Ok(()){"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"\n"}
          {"}"}
        </code>
      </pre>
      <p id="42e6ad93-a172-4db4-9658-5a90cf5b7194" className />
      <ol>
        <div className="indented">
          <p id="1a5e0dd6-c7af-4a26-b5ac-d29fb8967ccd">
            <strong ref={codeBlockEBulletA}>➀</strong> - The <code>if let</code>{" "}
            syntax is a lovely way for us to match one pattern and ignore all
            other patterns [
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/book/ch06-03-if-let.html"
            >
              5
            </a>
            ]. So an alternative (but less Rustic) way to write this block is:
          </p>
          <pre id="3792a49e-5ba2-4a46-a924-a1be1578ea3a" className="code">
            <code>
              match predicted {"{"}
              {"\n"}
              {"\t"}Some(predicted) =&gt; {"{"}
              {"\n"}
              {"\t"}
              {"\t"}if predicted == actual {"{"}
              {"\n"}
              {"\t"}
              {"\t"}
              {"\t"}num_correct += 1;{"\n"}
              {"\t"}
              {"\t"}
              {"}"}
              {"\n"}
              {"\t"}
              {"}"}
              {"\n"}
              {"\t"}_ =&gt; (),{"\n"}
              {"}"}
            </code>
          </pre>
          <p id="043ef7ed-6f55-4b36-befe-4b7dcbd1be94">
            <strong ref={codeBlockEBulletB}>➁</strong> - Splitting 70% of the
            data into a set for training the classifier, and 30% into a set for
            testing.
          </p>
          <p id="9bb07312-1212-4f9e-bf52-4b7d16a8977d">
            <strong ref={codeBlockEBulletC}>➂</strong> - If our classifier is
            working, it should correctly classify at least 90% of the testing
            set.
          </p>
        </div>
      </ol>
      <p />
      <p id="d9bf7160-d9c3-45bd-925c-b5da314d34e7"></p>
      <h3 id="f65cfe96-71c3-44c1-a43b-23cd6b251888">
        Won’t you be my Neighbor? Implementing KNN
      </h3>
      <hr id="2a3d34c1-6476-418c-99e4-d16da6234970" />
      <p id="1e154dfd-b586-4909-9a2a-af04af2d7aeb">
        I’ll start with pseudocode for our KNN classifier. Try to write your own
        Rust implementation based on this pseudocode, and run the test we wrote
        to see if your implementation works.
      </p>
      <pre id="7e4b2037-4885-406f-95a7-661c2ad76c9b" className="code">
        <code>
          function knn_classify(k, data_points, new_point) {"\n"}arguments {"{"}
          {"\n"}
          {"\t"}k: number of neighbors we use to classify our new data point
          {"\n"}
          {"\t"}data_points: our labeled data points{"\n"}
          {"\t"}new_point: the data point we want to classify{"\t"}
          {"\n"}
          {"}"}
          {"\n"}returning: predicted label for new_point{"\n"}
          {"{"} {"\n"}
          {"\t"}sorted_data_points = sort_by_distance_from(data_points,
          new_point){"\t"}
          {"\n"}
          {"  "}
          {"\n"}
          {"\t"}k_nearest_labels = empty list{"\n"}
          {"\n"}
          {"\t"}for i from 0 to k {"{"}
          {"\n"}
          {"\t"}
          {"\t"}k_nearest_labels.append(data_points[i].label){"\n"}
          {"\t"}
          {"}"}
          {"\n"}
          {"\n"}
          {"\t"}predicted_label = find_most_common_label(k_nearest_labels){"\n"}
          {"\t"}return predicted_label{"\n"}
          {"}"}
          {"\n"}
          {"\n"}function find_most_common_label(labels) {"\n"}arguments {"{"}
          {"\n"}
          {"\t"}labels: a list of labels{"\n"}
          {"}"}
          {"\n"}returning: most common value in the passed in list of labels
          {"\n"}
          {"{"}
          {"\n"}
          {"  "}label_counts = new Hash Map{"\n"}
          {"\n"}
          {"  "}for label in labels {"{"}
          {"\n"}
          {"\t"}
          {"\t"}if label is a key in label_counts {"{"}
          {"\n"}
          {"\t"}
          {"\t"}
          {"\t"}label_counts[label] += 1{"\n"}
          {"\t"}
          {"\t"}
          {"}"} else {"{"}
          {"\n"}
          {"\t"}
          {"\t"}
          {"\t"}label_counts.add_key_value_pair((label, 1)){"\n"}
          {"\t"}
          {"\t"}
          {"}"}
          {"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"\n"}
          {"\t"}if there are no ties for most common label in label_counts {"{"}
          {"\n"}
          {"\t"}
          {"\t"}return key with highest value in label_counts{"\n"}
          {"\t"}
          {"}"} else {"{"}
          {"\n"}
          {"\t"}
          {"\t"}new_labels = all elements in labels but the last{"\n"}
          {"\t"}
          {"\t"}return find_most_common_label(new_labels){"\n"}
          {"\t"}
          {"}"}
          {"\n"}
          {"}"}
        </code>
      </pre>
      <p id="e83c8a82-f466-418e-bb5b-5d4dee2e9d10"></p>
      <p id="c712be8b-6d11-4093-a457-79d7b661be47">
        Great. Now here is some Rust for you.
      </p>
      <pre id="a9dd2ee5-138e-48c2-a18f-eb7d09cd5531" className="code">
        <code>
          fn knn_classify(k: u8, data_points: &amp;[LabeledPoint], new_point:
          &amp;[f64]) -&gt; Option&lt;String&gt; {"{"}
          {"\n"}
          {"    "}let mut data_points_copy = data_points.to_vec();{"\n"}
          {"\n"}
          {"    "}data_points_copy.sort_unstable_by(|a, b| {"{"}{" "}
          <a
            onClick={() => scrollTo("codeBlockFBulletA")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➀
          </a>
          {"\n"}
          {"        "}let dist_a = a.point.distance(new_point);{"\n"}
          {"        "}let dist_b = b.point.distance(new_point);{"\n"}
          {"\n"}
          {"        "}dist_a{"\n"}
          {"            "}.partial_cmp(&amp;dist_b){"\n"}
          {"            "}.expect({`"`}Cannot compare floating point numbers,
          encoutered a NAN{`"`}){" "}
          <a
            onClick={() => scrollTo("codeBlockFBulletB")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➁
          </a>
          {"\n"}
          {"    "}
          {"}"});{"\n"}
          {"\n"}
          {"    "}let k_nearest_labels = &amp;data_points_copy[..(k as usize)]
          {"\n"}
          {"        "}.iter(){"\n"}
          {"        "}.map(|a| a.label){"\n"}
          {"        "}.collect::&lt;Vec&lt;&amp;str&gt;&gt;();{"\n"}
          {"\n"}
          {"    "}let predicted_label =
          find_most_common_label(&amp;k_nearest_labels);{"\n"}
          {"    "}predicted_label{"\n"}
          {"}"}
          {"\n"}
          {"\n"}fn find_most_common_label(labels: &amp;[&amp;str]) -&gt;
          Option&lt;String&gt; {"{"}
          {"\n"}
          {"    "}let mut label_counts: HashMap&lt;&amp;str, u32&gt; =
          HashMap::new();{" "}
          <a
            onClick={() => scrollTo("codeBlockFBulletC")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➂
          </a>
          {"\n"}
          {"\n"}
          {"    "}for label in labels.iter() {"{"}
          {"\n"}
          {"        "}let current_label_count = if let Some(current_label_count)
          = label_counts.get(label) {"{"}{" "}
          <a
            onClick={() => scrollTo("codeBlockFBulletD")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➃
          </a>
          {"\n"}
          {"            "}*current_label_count{"\n"}
          {"        "}
          {"}"} else {"{"}
          {"\n"}
          {"            "}0{"\n"}
          {"        "}
          {"}"};{"\n"}
          {"        "}label_counts.insert(label, current_label_count + 1);{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"\n"}
          {"    "}let most_common = label_counts{"\n"}
          {"        "}.iter(){"\n"}
          {"        "}.max_by(|(_label_a, count_a), (_label_b, count_b)|
          count_a.cmp(&amp;count_b));{" "}
          <a
            onClick={() => scrollTo("codeBlockFBulletE")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➄
          </a>
          {"\n"}
          {"\n"}
          {"    "}if let Some((most_common_label, most_common_label_count)) =
          most_common {"{"}
          {"\n"}
          {"        "}let is_tie_for_most_common = label_counts{"\n"}
          {"            "}.iter(){"\n"}
          {"            "}.any(|(label, count)| count == most_common_label_count
          &amp;&amp; label != most_common_label);{" "}
          <a
            onClick={() => scrollTo("codeBlockFBulletF")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➅
          </a>
          {"\n"}
          {"\n"}
          {"        "}if !is_tie_for_most_common {"{"}
          {"\n"}
          {"            "}return Some((*most_common_label).to_string());{"\n"}
          {"        "}
          {"}"} else {"{"}
          {"\n"}
          {"            "}let (_last, labels) = labels.split_last()?;{" "}
          <a
            onClick={() => scrollTo("codeBlockFBulletG")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➆
          </a>
          {"\n"}
          {"            "}return find_most_common_label(&amp;labels);{"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"\n"}
          {"    "}None{"\n"}
          {"}"}
        </code>
      </pre>
      <p id="7baec06f-42ba-4726-bcf2-9ed45a07b6a1" className />
      <div className="indented">
        <ol id="4ef0bd3d-5d98-4cda-83d9-75c85214a2f3" className="bulleted-list">
          <p id="a405603a-5512-45d5-8523-824d85600f16">
            <strong ref={codeBlockFBulletA}>➀</strong> -{" "}
            <code>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://doc.rust-lang.org/std/primitive.slice.html#method.sort_unstable_by"
              >
                sort_unstable_by
              </a>
            </code>{" "}
            allows us to specify the way we want our vector sorted. We’re using
            this to sort the data points in <code>data_copy</code> by their
            distance from the data point we’re classifying.
          </p>
          <p
            style={{ marginBottom: "2px" }}
            id="3b06b737-fc26-4b2a-981d-b1f390edabd5"
          >
            <em>Digression on stable vs. unstable sorting:</em>
          </p>
          <hr
            style={{ marginBottom: 0 }}
            id="afa19f26-c05a-4c56-92d9-8e62e38e61ac"
          />
          <div style={{ marginLeft: "1rem" }}>
            <p
              style={{ marginTop: "2px" }}
              id="6b8373a6-4f84-4499-8fcd-3548fb23fb8a"
            >
              As the name suggests, <code>sort_unstable_by</code> is unstable [
              <a
                target="_blank"
                rel="noreferrer"
                href="https://doc.rust-lang.org/std/primitive.slice.html#method.sort_unstable_by"
              >
                11
              </a>
              ]. This means that when the sorting algorithm comes across two
              equal elements, it is allowed to swap them - whereas a stable sort
              will not swap equal elements [
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/watch?v=h4RkCyJyXmM&t=408s"
              >
                12
              </a>
              ].{" "}
            </p>
            <p id="07cf8d69-10fb-4cdb-bb79-117133c6aca7">
              Unstable sorting is generally faster and requires less memory than
              stable sorting.{" "}
            </p>
            <p
              style={{ marginBottom: "2px" }}
              id="6cbdf764-8d30-410a-aa6d-dc7d427f6234"
            >
              Rust’s <code>sort_by</code> method is stable. So in cases like
              ours where you don’t care if equal elements are swapped, it’s
              preferable to use <code>sort_unstable_by</code> over{" "}
              <code>sort_by</code>.
            </p>
          </div>
          <hr id="b4bba4df-39b5-4fe8-aae5-c2c831fcb07f" />
          <p id="43e2c8dd-2895-4eb2-8f34-b1027537aac6">
            <strong ref={codeBlockFBulletB}>➁</strong> -{" "}
            <code>partial_ord</code> returns a value specifying whether{" "}
            <code>dist_a</code> is greater to, less than, or equal to{" "}
            <code>dist_b</code>, if such a comparison can be made.{" "}
          </p>
          <p id="8cc3e626-b212-4581-9522-ff1764f61755">
            In more gory details, <code>partial_ord</code> returns an{" "}
            <code>Option</code> containing a variant of the{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/std/cmp/enum.Ordering.html#"
            >
              <code>Ordering</code>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/std/cmp/enum.Ordering.html#"
            >
              {" "}
              enum
            </a>
            , if an ordering exists (if not it will return <code>None</code>).
          </p>
          <p id="d8e0cd8d-9f38-4b8e-a468-598d535a34f8">
            The creators of Rust have intentionally not implemented{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/std/cmp/trait.Ord.html"
            >
              <code>Ord</code>
            </a>{" "}
            for <code>f64</code>. This is because an <code>f64</code> can be a{" "}
            <code>NAN</code> (
            <a
              target="_blank"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/NaN"
            >
              not a number
            </a>
            ), and in Rust <code>NAN != NAN</code>. So <code>f64</code> does not
            form a{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Total_order"
            >
              total order
            </a>
            .
          </p>
          <p id="05c888e0-e95d-458f-8772-5f122a07d528">
            <em>
              If some or all of that didn’t make sense, do not worry. Just note
              that we have to use{" "}
            </em>
            <code>partial_cmp</code>
            <em> for </em>
            <code>f64</code>
            <em> types rather than </em>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/std/cmp/trait.Ord.html#tymethod.cmp"
            >
              <code>cmp</code>
            </a>
            <em>.</em>
          </p>
          <p id="4343d504-c988-418e-bf36-c27d31d08df6">
            <strong ref={codeBlockFBulletC}>➂</strong> - We create a{" "}
            <code>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://doc.rust-lang.org/std/collections/struct.HashMap.html#"
              >
                HashMap
              </a>
            </code>{" "}
            with <code>&amp;str</code> keys and <code>u32</code> values. The
            keys are the distinct elements in the <code>labels</code> slice. The
            values are the number of times each label shows up in{" "}
            <code>labels</code>.
          </p>
          <p id="4bfae4b6-fca5-4e28-ba36-f128755f8586">
            <strong ref={codeBlockFBulletD}>➃</strong> - Rust is an{" "}
            <em>expression language </em>[
            <a
              target="_blank"
              rel="noreferrer"
              href="https://learning.oreilly.com/library/view/programming-rust-2nd/9781492052586/"
            >
              13
            </a>
            ]. This means that things like <code>if</code> and{" "}
            <code>match</code> will produce values. So we can assign a variable
            to the result of an <code>if-else</code> block. Cool.
          </p>
          <p id="d41fc30a-2cd0-4117-876f-45cfed5ed501">
            <strong ref={codeBlockFBulletE}>➄</strong> - Here we want to find
            the most common label in <code>label_counts</code>. We iterate
            through each key-value pair of <code>label_counts</code> and use{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.max_by"
            >
              <code>max_by</code>
            </a>{" "}
            to find the key-value pair with the highest value.{" "}
            <code>max_by</code> returns the element with the maximum value with
            respect to a custom comparison function [
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.max_by"
            >
              14
            </a>
            ].
          </p>
          <p id="3ca61c57-3e16-441b-9a54-2d1dc40a61f8">
            <strong ref={codeBlockFBulletF}>➅</strong> - The{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.any"
            >
              <code>any</code>
            </a>{" "}
            method checks if the provided predicate is <code>true</code> for any
            elements in the iterator [
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.any"
            >
              15
            </a>
            ]. We use <code>any</code> to see if there are any ties for most
            common label in <code>label_counts</code>.
          </p>
          <p id="7c68b49c-e305-4c9b-900e-94985dfabf4f">
            <strong ref={codeBlockFBulletG}>➆</strong> - <code>split_last</code>{" "}
            returns an <code>Option</code> containing a tuple of the last
            element of a vector, and a slice containing the rest of that vector.
          </p>
        </ol>
      </div>
      <p />
      <p id="37319930-3849-4a88-92ef-36bf2da60fdc"></p>
      <p id="1f0de798-1555-4206-9a90-f8175cf10a66">
        And that’s our K Nea<em>rust</em> Neighbors classifier. Amazing.{" "}
      </p>
      <p id="a43d9cea-714c-42d1-b04a-9acadc6ba959">
        As always, questions and feedback are welcome and appreciated:{" "}
        <a target="_blank" rel="noreferrer" href={`mailto: ${EMAIL_ADDRESS}`}>
          joshtaylor361@gmail.com
        </a>
        .
      </p>
      <p id="9429674e-19e2-43c5-b683-c60632bbf0b8">
        Have a great rest of your day.{" "}
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src={mrRogersWave}
          height={200}
          width={267}
          alt={"Mr Rogers Wave"}
        />
      </div>
      <p id="92d8953d-532f-44e7-bc77-eab019a0921b"></p>
      <h3 id="1e8a6c22-0782-4a09-b8bf-b69b011c06a9">References</h3>
      <hr id="c2bbf08c-8275-4f82-b57a-bd0ee8771635" />
      <p id="368fc2a6-d730-4d74-8018-ac0196430dc6">
        [1] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://learning.oreilly.com/library/view/data-science-from/9781492041122/"
        >
          Joel Grus. (2019).{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://learning.oreilly.com/library/view/data-science-from/9781492041122/"
        >
          <em>
            Data Science from Scratch: First Principles with Python, 2nd
            edition.{" "}
          </em>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://learning.oreilly.com/library/view/data-science-from/9781492041122/"
        >
          O’Reilly Media.
        </a>
      </p>
      <p id="15b70fb7-ca5c-42dd-9907-b742177e56b2">
        [2] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.manning.com/books/grokking-algorithms"
        >
          Aditya Y. Bhargava. (2015).{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.manning.com/books/grokking-algorithms"
        >
          <em>Grokking Algorithms. </em>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.manning.com/books/grokking-algorithms"
        >
          Manning Publications.
        </a>
      </p>
      <p id="22cc0d75-ebe0-4c87-8234-3a8dabb14268">
        [3] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=HVXime0nQeI&t=253s"
        >
          Josh Starmer. (2017).{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=HVXime0nQeI&t=253s"
        >
          <em>StatQuest: K-nearest neighbors, Clearly Explained. </em>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=HVXime0nQeI&t=253s"
        >
          StatQuest with Josh Starmer.
        </a>
      </p>
      <p id="2b317190-a63f-4d64-9ce2-932600908759">
        [4] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/stable/std/ops/trait.Add.html"
        >
          Rust Documentation for Trait std::ops::Add.
        </a>
      </p>
      <p id="4d879b3b-b631-4ff3-8568-144f71122e03">
        [5] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/book/"
        >
          Steve Klabnik and Carol Nichols. (2018).{" "}
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
      <p id="3cab3c4b-d875-432d-a1ec-38cf96d72023">
        [6] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://nostarch.com/linearalgebra"
        >
          Shin Takahashi and Iroha Inoue. (2012).{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://nostarch.com/linearalgebra"
        >
          <em>The Manga Guide to Linear Algebra. </em>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://nostarch.com/linearalgebra"
        >
          No Starch Press.
        </a>
      </p>
      <p id="9ccea1cd-1d65-4b81-b5a7-018adda34668">
        [7] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/std/keyword.where.html"
        >
          Rust documentation for the where clause.
        </a>
      </p>
      <p id="0cde7cc3-0132-4d40-9222-ed33b681b658">
        [8] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="http://ce.sharif.edu/courses/97-98/1/ce425-1/resources/root/Books/Linear%20Algebra%20Done%20Right.pdf"
        >
          Sheldon Axler. (1995).{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://ce.sharif.edu/courses/97-98/1/ce425-1/resources/root/Books/Linear%20Algebra%20Done%20Right.pdf"
        >
          <em>Linear Algebra Done Right. </em>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://ce.sharif.edu/courses/97-98/1/ce425-1/resources/root/Books/Linear%20Algebra%20Done%20Right.pdf"
        >
          Springer.
        </a>
      </p>
      <p id="4743ba8f-3a7d-46f6-aa67-676bce3c998c">
        [9] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/std/primitive.slice.html#method.to_vec"
        >
          Rust documentation for to_vec.
        </a>
      </p>
      <p id="b54675f0-208e-4ef3-84d5-08cba93cea89">
        [10] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.rs/rand/0.6.5/rand/seq/trait.SliceRandom.html#tymethod.shuffle"
        >
          rand crate documentation of shuffle.
        </a>
      </p>
      <p id="584be0bd-afb0-4aac-a77e-8bfd332520da">
        [11] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/std/primitive.slice.html#method.sort_unstable_by"
        >
          Rust documentation for sort_unstable_by.
        </a>
      </p>
      <p id="e32c2c55-e795-420d-88b7-86e33682634d">
        [12] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=h4RkCyJyXmM&t=408s"
        >
          Jon Gjengset. (2020).{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=h4RkCyJyXmM&t=408s"
        >
          <em>Crust of Rust: Sorting Algorithms.</em>
        </a>
        <em> </em>
      </p>
      <p id="0bbe5683-9ed1-4a4c-bd1c-5f07247efe50">
        [13] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://learning.oreilly.com/library/view/programming-rust-2nd/9781492052586/"
        >
          Jason Orendorff, Jim Blandy, and Leonora F .S. Tindall. (2021).{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://learning.oreilly.com/library/view/programming-rust-2nd/9781492052586/"
        >
          <em>Programming Rust. </em>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://learning.oreilly.com/library/view/programming-rust-2nd/9781492052586/"
        >
          O’Reilly Media.
        </a>
      </p>
      <p id="6e565a5c-eb5b-4ab1-9161-07e068a106b3">
        [14] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.max_by"
        >
          Rust documentation for max_by.
        </a>
      </p>
      <p id="d96af9e8-8431-498c-942d-b7a251414dde">
        [15] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.any"
        >
          Rust documentation for any.
        </a>
      </p>
      <p id="3c933501-54d1-400d-bff0-cf3e3c1967e5"></p>
    </div>
  );
};

export default KNN;
