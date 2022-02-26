import EMAIL_ADDRESS from "../../constants/emailAddress";

const NaiveBayes = () => (
  <div className="page-body">
    <p id="775a65f8-47bd-44e9-bbe5-cccf66e19652"></p>
    <p id="774d0042-4b4f-4506-8c53-357cce5f2071">
      <em>
        <strong>Shaking off the Rust</strong>
      </em>{" "}
      is a series of exercises with the Rust programing language. Its purpose is
      to improve both my and my dear reader’s abilities with Rust by building
      interesting things. Plus, by actually building stuff, we get the bonus
      benefit of learning about an array of technological concepts in the
      process. In this installment, we’ll implement the Naive Bayes classifier.{" "}
    </p>
    <p id="18c7f7ff-2dff-4c98-9507-67c42183e788"></p>
    <p id="7ad6fde9-f42f-48a7-9c99-ced0752eb51d">
      You may encounter a few unfamiliar terms or concepts in this article.
      Don’t be discouraged. Look these up if you have the time. But either way,
      this article’s main ideas will not be lost on you.
    </p>
    <p id="2d9cfbb9-154f-4232-a68a-56aa559e07b2"></p>
    <h3 id="91aa551d-ee50-4f25-8214-aa53a16824c2">
      <strong>What is a Naive Bayes Classifier?</strong>
    </h3>
    <hr id="2646473e-4b00-430c-9303-86df2b4c439e" />
    <p id="1a6378ea-c91f-44db-be00-e228697c4f72">
      The Naive Bayes classifier is a machine learning algorithm based on Bayes’
      Theorem.{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://greenteapress.com/wp/think-bayes/"
      >
        Bayes’ Theorem
      </a>{" "}
      gives us a way to update the probability of a hypothesis{" "}
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
                    <mi>H</mi>
                  </mrow>
                  <annotation encoding="application/x-tex">H</annotation>
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
                  style={{ marginRight: "0.08125em" }}
                >
                  H
                </span>
              </span>
            </span>
          </span>
        </span>
        <span>﻿</span>
      </span>
      <em>, </em>given some data{" "}
      <em>
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
      </em>
      <em>.</em>
    </p>
    <p id="801ce8c5-0868-4882-99f0-3d9afbc4a5f5">
      Expressed mathematically, we have:{" "}
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
                    <mi>P</mi>
                    <mo stretchy="false">(</mo>
                    <mi>H</mi>
                    <mi mathvariant="normal">∣</mi>
                    <mi>D</mi>
                    <mo stretchy="false">)</mo>
                    <mo>=</mo>
                    <mfrac>
                      <mrow>
                        <mi>P</mi>
                        <mo stretchy="false">(</mo>
                        <mi>D</mi>
                        <mi mathvariant="normal">∣</mi>
                        <mi>H</mi>
                        <mo stretchy="false">)</mo>
                        <mi>P</mi>
                        <mo stretchy="false">(</mo>
                        <mi>H</mi>
                        <mo stretchy="false">)</mo>
                      </mrow>
                      <mrow>
                        <mi>P</mi>
                        <mo stretchy="false">(</mo>
                        <mi>D</mi>
                        <mo stretchy="false">)</mo>
                      </mrow>
                    </mfrac>
                  </mrow>
                  <annotation encoding="application/x-tex">
                    P(H|D) = \frac{"{"}P(D|H)P(H){"}"}
                    {"{"}P(D){"}"}
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
                  style={{ marginRight: "0.13889em" }}
                >
                  P
                </span>
                <span className="mopen">(</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.08125em" }}
                >
                  H
                </span>
                <span className="mord">∣</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.02778em" }}
                >
                  D
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
                  style={{ height: "1.53em", verticalAlign: "-0.52em" }}
                />
                <span className="mord">
                  <span className="mopen nulldelimiter" />
                  <span className="mfrac">
                    <span className="vlist-t vlist-t2">
                      <span className="vlist-r">
                        <span className="vlist" style={{ height: "1.01em" }}>
                          <span style={{ top: "-2.655em" }}>
                            <span
                              className="pstrut"
                              style={{ height: "3em" }}
                            />
                            <span className="sizing reset-size6 size3 mtight">
                              <span className="mord mtight">
                                <span
                                  className="mord mathnormal mtight"
                                  style={{ marginRight: "0.13889em" }}
                                >
                                  P
                                </span>
                                <span className="mopen mtight">(</span>
                                <span
                                  className="mord mathnormal mtight"
                                  style={{ marginRight: "0.02778em" }}
                                >
                                  D
                                </span>
                                <span className="mclose mtight">)</span>
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
                          <span style={{ top: "-3.485em" }}>
                            <span
                              className="pstrut"
                              style={{ height: "3em" }}
                            />
                            <span className="sizing reset-size6 size3 mtight">
                              <span className="mord mtight">
                                <span
                                  className="mord mathnormal mtight"
                                  style={{ marginRight: "0.13889em" }}
                                >
                                  P
                                </span>
                                <span className="mopen mtight">(</span>
                                <span
                                  className="mord mathnormal mtight"
                                  style={{ marginRight: "0.02778em" }}
                                >
                                  D
                                </span>
                                <span className="mord mtight">∣</span>
                                <span
                                  className="mord mathnormal mtight"
                                  style={{ marginRight: "0.08125em" }}
                                >
                                  H
                                </span>
                                <span className="mclose mtight">)</span>
                                <span
                                  className="mord mathnormal mtight"
                                  style={{ marginRight: "0.13889em" }}
                                >
                                  P
                                </span>
                                <span className="mopen mtight">(</span>
                                <span
                                  className="mord mathnormal mtight"
                                  style={{ marginRight: "0.08125em" }}
                                >
                                  H
                                </span>
                                <span className="mclose mtight">)</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="vlist-s">​</span>
                      </span>
                      <span className="vlist-r">
                        <span className="vlist" style={{ height: "0.52em" }}>
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
      </span>
      . Where{" "}
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
                    <mi>P</mi>
                    <mo stretchy="false">(</mo>
                    <mi>H</mi>
                    <mi mathvariant="normal">∣</mi>
                    <mi>D</mi>
                    <mo stretchy="false">)</mo>
                    <mo>=</mo>
                  </mrow>
                  <annotation encoding="application/x-tex">P(H|D) =</annotation>
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
                  style={{ marginRight: "0.13889em" }}
                >
                  P
                </span>
                <span className="mopen">(</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.08125em" }}
                >
                  H
                </span>
                <span className="mord">∣</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.02778em" }}
                >
                  D
                </span>
                <span className="mclose">)</span>
                <span
                  className="mspace"
                  style={{ marginRight: "0.2777777777777778em" }}
                />
                <span className="mrel">=</span>
              </span>
            </span>
          </span>
        </span>
        <span>﻿</span>
      </span>
      <em> </em>the probability of{" "}
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
                    <mi>H</mi>
                  </mrow>
                  <annotation encoding="application/x-tex">H</annotation>
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
                  style={{ marginRight: "0.08125em" }}
                >
                  H
                </span>
              </span>
            </span>
          </span>
        </span>
        <span>﻿</span>
      </span>
      <em> </em>given{" "}
      <em>
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
      </em>
      . If we accumulate more data, we can update{" "}
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
                    <mi>P</mi>
                    <mo stretchy="false">(</mo>
                    <mi>H</mi>
                    <mi mathvariant="normal">∣</mi>
                    <mi>D</mi>
                    <mo stretchy="false">)</mo>
                  </mrow>
                  <annotation encoding="application/x-tex">P(H|D)</annotation>
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
                  style={{ marginRight: "0.13889em" }}
                >
                  P
                </span>
                <span className="mopen">(</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.08125em" }}
                >
                  H
                </span>
                <span className="mord">∣</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.02778em" }}
                >
                  D
                </span>
                <span className="mclose">)</span>
              </span>
            </span>
          </span>
        </span>
        <span>﻿</span>
      </span>{" "}
      accordingly.
    </p>
    <p id="ccd392b5-811d-4ac5-b62d-cee7dab6fe53"></p>
    <p id="ca660520-6377-4745-af1a-2296da53762b">
      Naive Bayesian models rest on a big assumption: whether a data point is
      present or absent from the data set is independent from data already in
      that set [
      <a
        target="_blank"
        rel="noreferrer"
        href="https://learning.oreilly.com/library/view/data-science-from/9781492041122/"
      >
        1
      </a>
      ]. That is, each piece of data conveys no information about any other data
      points.
    </p>
    <p id="71449fcc-32d9-4a5f-be86-db3dff4c6fd4"></p>
    <p id="98d59d5a-f86b-4794-b292-fb9c6da036f9">
      We do not expect this assumption to be true – it is weak. But it’s still
      useful, allowing us to create efficient classifiers that work quite well [
      <a
        target="_blank"
        rel="noreferrer"
        href="https://greenteapress.com/wp/think-bayes/"
      >
        2
      </a>
      ].
    </p>
    <p id="1ae72c9f-96a3-479a-9af4-1c6d2e566d96"></p>
    <p id="ed775237-8892-4229-856b-c4102110c3f8">
      We’ll leave our description of Naive Bayes there. A lot more could be
      said, but the main point of this article is to practice Rust.
    </p>
    <p id="b6ed926b-a761-4e4e-ba90-548ec849a761"></p>
    <p id="84b2ab12-0183-4aad-8898-dc36385ca110">
      If you’d like to learn more about the algorithm, here are some resources:
    </p>
    <ul id="bf109bac-3cb3-434e-9c24-6d8125607561" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        I can’t say enough good things{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=O2L2Uv9pdDA&t=657s"
        >
          about this video from Josh Starmer
        </a>
        .
      </li>
    </ul>
    <ul id="e5931edc-729b-4280-a482-862bc58b171a" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Joel Grus has{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://learning.oreilly.com/library/view/data-science-from/9781492041122/"
        >
          written a chapter on Naive Bayes
        </a>{" "}
        in his great book <em>Data Science from Scratch,</em> which was the main
        inspiration for this implementation.
      </li>
    </ul>
    <ul id="e3fd0362-f07d-43a3-821f-4f14a7952566" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        If mathematical notation is your thing,{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://hastie.su.domains/Papers/ESLII.pdf"
        >
          try section 6.6.3 of{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://hastie.su.domains/Papers/ESLII.pdf"
        >
          <em>The Elements of Statisical Learning</em>
        </a>
        <em>.</em>
      </li>
    </ul>
    <ul id="40ad9c12-3a9b-43eb-a083-33f5e933eff6" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        And{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.freecodecamp.org/news/how-naive-bayes-classifiers-work/"
        >
          here{`'`}s a helpful article
        </a>{" "}
        on the basics of how the algorithm works
      </li>
    </ul>
    <p id="3da4ca1f-3f59-436b-9197-b1b7d4d3deb6"></p>
    <p id="bea6c5b4-6438-4998-9300-5116621664cc">
      The canonical application of the Naive Bayes classifier is a spam
      classifier. That is what we’ll build. You can find all the code here:{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/josht-jpg/shaking-off-the-rust"
      >
        https://github.com/josht-jpg/shaking-off-the-rust
      </a>
    </p>
    <h3 id="332754c4-b503-4771-9609-f8f7b02bc1b2">Getting Started </h3>
    <hr id="40939f36-d7cb-4921-911b-1caaf9ecaf26" />
    <p id="be0ed8ef-6110-4c4c-aacb-d72398499699">
      We’ll begin by creating a new library with Cargo.
    </p>
    <pre id="51556f7b-a6eb-4616-bd6a-f310bb5ded18" className="code">
      <code>cargo new naive_bayes --lib{"\n"}cd naive_bayes</code>
    </pre>
    <h3 id="10a0ef0f-edbe-4554-94cc-01b2479793b8">Tokenization</h3>
    <hr id="1eb3b5a2-341b-4203-bf02-b4e789f1aaf2" />
    <p id="cbc9a611-6efc-46db-93a4-b1dddc547dca">
      Our classifier will take in a message as input and return a classification
      of spam or not spam.
    </p>
    <p id="76355d62-fdd5-48c9-ad83-395fd8854984">
      To work with the message we’re given, we’ll want to <em>tokenized </em>it.
      Our tokenized representation will be a set of words in lower case where
      order and repeat entries are disregarded. Rust’s{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://doc.rust-lang.org/std/collections/struct.HashSet.html"
      >
        <code>
          <strong>std::collections::HashSet</strong>
        </code>
      </a>{" "}
      structure is a great way to achieve this.
    </p>
    <p id="0937be70-6bdf-4a82-8a88-47a50174243d">
      The function we’ll write to perform tokenization will require the use of
      the{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://docs.rs/regex/latest/regex/"
      >
        regex
      </a>{" "}
      crate. Make sure you include this dependency in your{" "}
      <code>Cargo.toml</code> file:
    </p>
    <pre id="3d05cb44-b29f-45b4-a262-c9156cb58cbc" className="code">
      <code>
        [dependencies]{"\n"}regex = {'"'}^1.5.4{'"'}
      </code>
    </pre>
    <p id="1b318af9-a6fb-4684-b23b-25d1223ee731"></p>
    <p id="e84d6532-f33b-4a63-936d-bbd6a9e9004d">
      And here’s the <code>tokenize</code> function:
    </p>
    <pre id="cc310016-e715-4100-ab83-50ce380aba53" className="code">
      <code>
        {`// `}lib.rs{"\n"}
        {"\n"}
        {`// `}We{`'`}ll need HashMap later{"\n"}use std::collections::{"{"}
        HashMap, HashSet{"}"};{"\n"}
        {"\n"}extern crate regex;{"\n"}use regex::Regex;{"\n"}
        {"\n"}pub fn tokenize(lower_case_text: &amp;str) -&gt;
        HashSet&lt;&amp;str&gt; {"{"}
        {"\n"}
        {"    "}Regex::new(r{'"'}[a-z0-9{`'`}]+{'"'}){"\n"}
        {"        "}.unwrap(){"\n"}
        {"        "}.find_iter(lower_case_text){"\n"}
        {"        "}.map(|mat| mat.as_str()){"\n"}
        {"        "}.collect(){"\n"}
        {"}"}
      </code>
    </pre>
    <p id="76edd241-92a8-4115-8d30-1de57653d912">
      This function uses a regular expression to match all numbers and lowercase
      letters. Whenever we come across a different type of symbol (often
      whitespace or punctuation), we split the input and group together all
      numbers and letters encountered since the last split (you can{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://rust-lang-nursery.github.io/rust-cookbook/text/regex.html"
      >
        read more about regex in Rust here
      </a>
      ) [
      <a
        target="_blank"
        rel="noreferrer"
        href="https://rust-lang-nursery.github.io/rust-cookbook/text/regex.html"
      >
        4
      </a>
      ]. That is, we{`'`}re identifying and isolating words in the input text.
    </p>
    <h3 id="d0625e0f-99c2-4cc0-bb22-6819a29c7ca5">Some Handy Structures</h3>
    <hr id="7169ed14-5623-454d-9135-b6b154e49b47" />
    <p id="096e6105-d31a-4eaa-9e21-f32efc94023f">
      Using a <code>struct</code> to represent a message will be helpful. This{" "}
      <code>struct</code> will contain a <em>string slice</em>
      for the message’s text, and a Boolean value to indicate whether or not the
      message is spam:
    </p>
    <pre id="5eaf37d8-9423-4f24-9483-a2ca2c06ad28" className="code">
      <code>
        struct Message&lt;{`'`}a&gt; {"{"}
        {"\n"}
        {"    "}pub text: &amp;{`'`}a str,{"\n"}
        {"    "}pub is_spam: bool,{"\n"}
        {"}"}
      </code>
    </pre>
    <p id="f05b1955-ee88-49d1-8ed8-5dbcd19a54a8">
      The <code>{`'`}a</code> is a lifetime parameter annotation. If you’re
      unfamiliar with lifetimes, and want to learn about them, I recommend
      reading{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html"
      >
        section 10.3 of The Rust Programming Language Book
      </a>
      .
    </p>
    <p id="4228691e-2a5e-4ade-be84-dd73941d859a">
      A <code>struct</code> will also be useful to represent our classifier.
      Before creating the <code>struct</code>, we need a short digression on
      Laplacian Smoothing.
    </p>
    <p id="0183a588-241e-4a59-be86-264809d941d2">
      <strong>Digression on Laplace Smoothing:</strong>
    </p>
    <div className="indented">
      <hr id="bba5c0ca-ade2-4b1b-ab71-85c5483569d0" />
      <p id="feabb2d2-fb4a-459a-b361-4cfe01435d14">
        Assume that, in our training data, the word <em>fubar</em> appears in
        some non-spam messages, but does not appear in any spam messages. Then,
        the Naive Bayes classifier will assign a probability <strong>0</strong>{" "}
        of spam to any message that contains the word <em>fubar</em> [
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=nt63k3bfXS0"
        >
          5
        </a>
        ].
      </p>
      <p id="ad9503b6-5c02-4c4e-a47b-92155a73ebab">
        Unless we’re talking about my success with online dating, it’s not smart
        to assign a probability of <strong>0</strong> to an event just because
        it hasn’t happened yet.
      </p>
      <p id="1c64fa0f-e533-47fa-9c10-a68575b22465">
        Enter Laplace Smoothing. This is the technique of adding{" "}
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
                      <mi>α</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">\alpha</annotation>
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
                    style={{ marginRight: "0.0037em" }}
                  >
                    α
                  </span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        to the number of observations of each token [
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=nt63k3bfXS0"
        >
          5
        </a>
        ]. Let’s see this mathematically: without Laplace Smoothing, the
        probability of seeing a word <em>w</em> in a spam message is:
      </p>
      <p id="c9a1792f-a318-4a5a-a566-884c2f4c75d2">
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
                      <mi>P</mi>
                      <mo stretchy="false">(</mo>
                      <mi>w</mi>
                      <mi mathvariant="normal">∣</mi>
                      <mi>S</mi>
                      <mo stretchy="false">)</mo>
                      <mo>=</mo>
                      <mfrac>
                        <mrow>
                          <mi>n</mi>
                          <mi>u</mi>
                          <mi>m</mi>
                          <mi>b</mi>
                          <mi>e</mi>
                          <mi>r</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>o</mi>
                          <mi>f</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>s</mi>
                          <mi>p</mi>
                          <mi>a</mi>
                          <mi>m</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>m</mi>
                          <mi>e</mi>
                          <mi>s</mi>
                          <mi>s</mi>
                          <mi>a</mi>
                          <mi>g</mi>
                          <mi>e</mi>
                          <mi>s</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>c</mi>
                          <mi>o</mi>
                          <mi>n</mi>
                          <mi>t</mi>
                          <mi>a</mi>
                          <mi>i</mi>
                          <mi>n</mi>
                          <mi>i</mi>
                          <mi>n</mi>
                          <mi>g</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>w</mi>
                          <mspace width="0.2845275590551181em" />
                        </mrow>
                        <mrow>
                          <mspace width="0.2845275590551181em" />
                          <mi>t</mi>
                          <mi>o</mi>
                          <mi>t</mi>
                          <mi>a</mi>
                          <mi>l</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>n</mi>
                          <mi>u</mi>
                          <mi>m</mi>
                          <mi>b</mi>
                          <mi>e</mi>
                          <mi>r</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>o</mi>
                          <mi>f</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>s</mi>
                          <mi>p</mi>
                          <mi>a</mi>
                          <mi>m</mi>
                          <mi>s</mi>
                        </mrow>
                      </mfrac>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      P(w|S) = \frac{"{"}number\hspace{"{"}1mm{"}"}of\hspace
                      {"{"}1mm{"}"}spam\hspace{"{"}1mm{"}"}messages\hspace{"{"}
                      1mm{"}"}containing\hspace{"{"}1mm{"}"}w\hspace{"{"}1mm
                      {"}"}
                      {"}"}
                      {"{"}\hspace{"{"}1mm{"}"}total\hspace{"{"}1mm{"}"}
                      number\hspace{"{"}1mm{"}"}of\hspace{"{"}1mm{"}"}spams{"}"}{" "}
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
                    style={{ marginRight: "0.13889em" }}
                  >
                    P
                  </span>
                  <span className="mopen">(</span>
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.02691em" }}
                  >
                    w
                  </span>
                  <span className="mord">∣</span>
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.05764em" }}
                  >
                    S
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
                      height: "1.4133239999999998em",
                      verticalAlign: "-0.481108em",
                    }}
                  />
                  <span className="mord">
                    <span className="mopen nulldelimiter" />
                    <span className="mfrac">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.9322159999999999em" }}
                          >
                            <span style={{ top: "-2.6550000000000002em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span className="mord mathnormal mtight">
                                    t
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    o
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    t
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    a
                                  </span>
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.01968em" }}
                                  >
                                    l
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span className="mord mathnormal mtight">
                                    n
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    u
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    mb
                                  </span>
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.02778em" }}
                                  >
                                    er
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span className="mord mathnormal mtight">
                                    o
                                  </span>
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.10764em" }}
                                  >
                                    f
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span className="mord mathnormal mtight">
                                    s
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    p
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    am
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    s
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
                            <span style={{ top: "-3.446108em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">
                                  <span className="mord mathnormal mtight">
                                    n
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    u
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    mb
                                  </span>
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.02778em" }}
                                  >
                                    er
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span className="mord mathnormal mtight">
                                    o
                                  </span>
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.10764em" }}
                                  >
                                    f
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span className="mord mathnormal mtight">
                                    s
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    p
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    am
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span className="mord mathnormal mtight">
                                    m
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    ess
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    a
                                  </span>
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.03588em" }}
                                  >
                                    g
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    es
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span className="mord mathnormal mtight">
                                    co
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    n
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    t
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    ainin
                                  </span>
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.03588em" }}
                                  >
                                    g
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.02691em" }}
                                  >
                                    w
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="vlist-s">​</span>
                        </span>
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.481108em" }}
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
        </span>
      </p>
      <p id="4bcf9a2f-cea4-426e-a39d-fd97412e172d">
        With Laplace Smoothing, it’s:
      </p>
      <p id="0d6dbf2e-450b-4400-be7f-09ebe2a3620f">
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
                      <mi>P</mi>
                      <mo stretchy="false">(</mo>
                      <mi>w</mi>
                      <mi mathvariant="normal">∣</mi>
                      <mi>S</mi>
                      <mo stretchy="false">)</mo>
                      <mo>=</mo>
                      <mfrac>
                        <mrow>
                          <mo stretchy="false">(</mo>
                          <mi>α</mi>
                          <mo>+</mo>
                          <mi>n</mi>
                          <mi>u</mi>
                          <mi>m</mi>
                          <mi>b</mi>
                          <mi>e</mi>
                          <mi>r</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>o</mi>
                          <mi>f</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>s</mi>
                          <mi>p</mi>
                          <mi>a</mi>
                          <mi>m</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>m</mi>
                          <mi>e</mi>
                          <mi>s</mi>
                          <mi>s</mi>
                          <mi>a</mi>
                          <mi>g</mi>
                          <mi>e</mi>
                          <mi>s</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>c</mi>
                          <mi>o</mi>
                          <mi>n</mi>
                          <mi>t</mi>
                          <mi>a</mi>
                          <mi>i</mi>
                          <mi>n</mi>
                          <mi>i</mi>
                          <mi>n</mi>
                          <mi>g</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>w</mi>
                          <mspace width="0.2845275590551181em" />
                          <mo stretchy="false">)</mo>
                        </mrow>
                        <mrow>
                          <mo stretchy="false">(</mo>
                          <mn>2</mn>
                          <mi>α</mi>
                          <mo>+</mo>
                          <mspace width="0.2845275590551181em" />
                          <mi>t</mi>
                          <mi>o</mi>
                          <mi>t</mi>
                          <mi>a</mi>
                          <mi>l</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>n</mi>
                          <mi>u</mi>
                          <mi>m</mi>
                          <mi>b</mi>
                          <mi>e</mi>
                          <mi>r</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>o</mi>
                          <mi>f</mi>
                          <mspace width="0.2845275590551181em" />
                          <mi>s</mi>
                          <mi>p</mi>
                          <mi>a</mi>
                          <mi>m</mi>
                          <mi>s</mi>
                          <mo stretchy="false">)</mo>
                        </mrow>
                      </mfrac>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      P(w|S) = \frac{"{"} (\alpha + number\hspace{"{"}1mm{"}"}
                      of\hspace{"{"}1mm{"}"}spam\hspace{"{"}1mm{"}"}
                      messages\hspace{"{"}1mm{"}"}containing\hspace{"{"}1mm{"}"}
                      w\hspace{"{"}1mm{"}"}){"}"}
                      {"{"}(2\alpha + \hspace{"{"}1mm{"}"}total\hspace{"{"}1mm
                      {"}"}number\hspace{"{"}1mm{"}"}of\hspace{"{"}1mm{"}"}
                      spams){"}"}{" "}
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
                    style={{ marginRight: "0.13889em" }}
                  >
                    P
                  </span>
                  <span className="mopen">(</span>
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.02691em" }}
                  >
                    w
                  </span>
                  <span className="mord">∣</span>
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: "0.05764em" }}
                  >
                    S
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
                    style={{ height: "1.53em", verticalAlign: "-0.52em" }}
                  />
                  <span className="mord">
                    <span className="mopen nulldelimiter" />
                    <span className="mfrac">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span className="vlist" style={{ height: "1.01em" }}>
                            <span style={{ top: "-2.655em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">
                                  <span className="mopen mtight">(</span>
                                  <span className="mord mtight">2</span>
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.0037em" }}
                                  >
                                    α
                                  </span>
                                  <span className="mbin mtight">+</span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span className="mord mathnormal mtight">
                                    t
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    o
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    t
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    a
                                  </span>
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.01968em" }}
                                  >
                                    l
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span className="mord mathnormal mtight">
                                    n
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    u
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    mb
                                  </span>
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.02778em" }}
                                  >
                                    er
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span className="mord mathnormal mtight">
                                    o
                                  </span>
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.10764em" }}
                                  >
                                    f
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span className="mord mathnormal mtight">
                                    s
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    p
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    am
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    s
                                  </span>
                                  <span className="mclose mtight">)</span>
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
                            <span style={{ top: "-3.485em" }}>
                              <span
                                className="pstrut"
                                style={{ height: "3em" }}
                              />
                              <span className="sizing reset-size6 size3 mtight">
                                <span className="mord mtight">
                                  <span className="mopen mtight">(</span>
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.0037em" }}
                                  >
                                    α
                                  </span>
                                  <span className="mbin mtight">+</span>
                                  <span className="mord mathnormal mtight">
                                    n
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    u
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    mb
                                  </span>
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.02778em" }}
                                  >
                                    er
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span className="mord mathnormal mtight">
                                    o
                                  </span>
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.10764em" }}
                                  >
                                    f
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span className="mord mathnormal mtight">
                                    s
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    p
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    am
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span className="mord mathnormal mtight">
                                    m
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    ess
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    a
                                  </span>
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.03588em" }}
                                  >
                                    g
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    es
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span className="mord mathnormal mtight">
                                    co
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    n
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    t
                                  </span>
                                  <span className="mord mathnormal mtight">
                                    ainin
                                  </span>
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.03588em" }}
                                  >
                                    g
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span
                                    className="mord mathnormal mtight"
                                    style={{ marginRight: "0.02691em" }}
                                  >
                                    w
                                  </span>
                                  <span
                                    className="mspace mtight"
                                    style={{
                                      marginRight: "0.40646794150731164em",
                                    }}
                                  />
                                  <span className="mclose mtight">)</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="vlist-s">​</span>
                        </span>
                        <span className="vlist-r">
                          <span className="vlist" style={{ height: "0.52em" }}>
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
        </span>
      </p>
      <hr id="17ab9b35-3c2b-4d46-ab2f-8bd93d019cb5" />
      <p id="62c335ef-0c20-4558-a674-908e63bbf26c"></p>
    </div>
    <p />
    <p id="f9dd7b59-719f-4cca-ae4f-87dfed5abaa3">
      Back to our classifier <code>struct</code>:
    </p>
    <pre id="08ab785a-1efc-4cc4-9be2-6dde7b0f6e5f" className="code">
      <code>
        pub struct NaiveBayesClassifier {"{"}
        {"\n"}
        {"    "}pub alpha: f64,{"\n"}
        {"    "}pub tokens: HashSet&lt;String&gt;,{"\n"}
        {"    "}pub token_ham_counts: HashMap&lt;String, i32&gt;,{"\n"}
        {"    "}pub token_spam_counts: HashMap&lt;String, i32&gt;,{"\n"}
        {"    "}pub spam_messages_count: i32,{"\n"}
        {"    "}pub ham_messages_count: i32,{"\n"}
        {"}"}
      </code>
    </pre>
    <p id="e3b16b97-490b-4835-b5c7-2f8acca58b59">
      The implementation block for <code>NaiveBayesClassifier</code> will center
      around a <code>train</code> method and a <code>predict</code> method.
    </p>
    <h3 id="914f0ac5-c9e4-4654-b712-962f0843db69">
      <strong>Training our classifier</strong>
    </h3>
    <hr id="a14bc87a-386c-47f1-b5cc-0eee8d193fcd" />
    <p id="8235735f-79e3-44d4-82d3-54831e2f583a">
      The <code>train</code> method will take in a slice of <code>Message</code>
      s and loop through each <code>Message</code>, doing the following:
    </p>
    <ul id="4cb9f7eb-6014-4226-bb08-6bb85af51ee2" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Checks whether the message is spam and updates{" "}
        <code>spam_messages_count</code> or <code>ham_messages_count</code>{" "}
        accordingly. We’ll create the helper function{" "}
        <code>increment_message_classifications_count</code> for this.
      </li>
    </ul>
    <ul id="6cf1cb0a-dedf-4e4b-8211-43436e431354" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Tokenizes the message’s contents with our <code>tokenize</code> function
      </li>
    </ul>
    <ul id="9efc5f46-d2ed-48f4-84fc-90b246b08790" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Loops through each token in the message and:
        <ul id="0a4e2838-08ac-499e-af79-d2b3873b150f" className="bulleted-list">
          <li style={{ listStyleType: "circle" }}>
            Inserts the token into the <code>tokens</code> <code>HashSet</code>
          </li>
        </ul>
        <ul id="da1e6cc5-88a2-4c6c-b981-6e983869a706" className="bulleted-list">
          <li style={{ listStyleType: "circle" }}>
            Updates the <code>token_spam_counts</code> or{" "}
            <code>token_ham_counts</code>. We’ll create the hepler function{" "}
            <code>increment_word_counts</code> for this.
          </li>
        </ul>
        <p id="90ef306f-1dd0-4939-9061-867f93158930"></p>
      </li>
    </ul>
    <p id="4f6ebdc2-5211-4fd5-81c8-dfa157cb57c9">
      Here’s the pseudocode for our <code>train</code> method. If you feel like
      it, try to convert the pseudocode into Rust before looking at my
      implementation below. Don{`'`}t hesitate to send me your implementation,
      I’d love to see it!
    </p>
    <pre id="1fe496c0-c392-4cbc-a3bb-c7dc207f686e" className="code">
      <code>
        implemention block for NaiveBayesClassifier {"{"}
        {"\n"}
        {"\n"}
        {"\t"}train(self, messages) {"{"}
        {"\n"}
        {"\t"}
        {"\t"}for each message in messages {"{"}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}self.increment_message_classifications_count(message){"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}lowercase_text = to_lowercase( message.text ){"\n"}
        {"\t"}
        {"\t"}
        {"\t"}for each token in tokenize(lower_case_text) {"{"}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}self.tokens.insert(tokens){"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}self.increment_word_counts(token, message.is_spam){"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"}"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\n"}
        {"\t"}
        {"\t"}
        {"}"}
        {"\n"}
        {"\t"}
        {"}"}
        {"\n"}
        {"\n"}
        {"\t"}increment_message_classifications_count(self, message) {"{"}
        {"\n"}
        {"\t"}
        {"  "}if message.is_spam {"{"}
        {"\n"}
        {"\t"}
        {"    "}self.spam_messages_count = self.spam_messages_count + 1{"\n"}
        {"    "}
        {"}"} else {"{"}
        {"\n"}
        {"\t"}
        {"    "}self.ham_messages_count = self.ham_messages_count + 1{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"  "}
        {"}"}
        {"\n"}
        {"\n"}
        {"\t"}increment_word_counts(&amp;mut self, token, is_spam) {"{"}
        {"\n"}
        {"\t"}
        {"  "}if token is not a key of self.token_spam_counts {"{"}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}insert record with key=token and value=0 into
        self.token_spam_counts{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"\n"}
        {"\t"}
        {"  "}if token is not a key of self.token_ham_counts {"{"}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}insert record with key=token and value=0 into
        self.token_ham_counts{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"\n"}
        {"    "}if is_spam {"{"}
        {"\n"}
        {"\t"}
        {"     "}self.token_spam_counts[token] = self.token_spam_counts[token] +
        1{"\n"}
        {"    "}
        {"}"} else {"{"}
        {"\n"}
        {"       "}self.token_ham_counts[token] = self.token_ham_counts[token] +
        1{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"  "}
        {"}"}
        {"\n"}
        {"\n"}
        {"}"}
      </code>
    </pre>
    <p id="c8940e00-0774-492a-8958-17af2df82cb6"></p>
    <p id="3a282753-2450-4ecc-9526-836e483ec197">
      And here’s my Rust implementation:
    </p>
    <pre id="02f8316a-3b26-4c36-aa03-f61f22a9fa76" className="code">
      <code>
        impl NaiveBayesClassifier {"{"}
        {"\n"}
        {"    "}pub fn train(&amp;mut self, messages: &amp;[Message]) {"{"}
        {"\n"}
        {"        "}for message in messages.iter() {"{"}
        {"\n"}
        {"            "}self.increment_message_classifications_count(message);
        {"\n"}
        {"            "}for token in tokenize(&amp;message.text.to_lowercase()){" "}
        {"{"}
        {"\n"}
        {"                "}self.tokens.insert(token.to_string());{"\n"}
        {"                "}self.increment_token_count(token, message.is_spam)
        {"\n"}
        {"            "}
        {"}"}
        {"\n"}
        {"        "}
        {"}"}
        {"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"\n"}
        {"    "}fn increment_message_classifications_count(&amp;mut self,
        message: &amp;Message) {"{"}
        {"\n"}
        {"        "}if message.is_spam {"{"}
        {"\n"}
        {"            "}self.spam_messages_count += 1;{"\n"}
        {"        "}
        {"}"} else {"{"}
        {"\n"}
        {"            "}self.ham_messages_count += 1;{"\n"}
        {"        "}
        {"}"}
        {"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"\n"}
        {"    "}fn increment_token_count(&amp;mut self, token: &amp;str,
        is_spam: bool) {"{"}
        {"\n"}
        {"        "}if !self.token_spam_counts.contains_key(token) {"{"}
        {"\n"}
        {"            "}self.token_spam_counts.insert(token.to_string(), 0);
        {"\n"}
        {"        "}
        {"}"}
        {"\n"}
        {"\n"}
        {"        "}if !self.token_ham_counts.contains_key(token) {"{"}
        {"\n"}
        {"            "}self.token_ham_counts.insert(token.to_string(), 0);
        {"\n"}
        {"        "}
        {"}"}
        {"\n"}
        {"\n"}
        {"        "}if is_spam {"{"}
        {"\n"}
        {"            "}self.increment_spam_count(token);{"\n"}
        {"        "}
        {"}"} else {"{"}
        {"\n"}
        {"            "}self.increment_ham_count(token);{"\n"}
        {"        "}
        {"}"}
        {"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"\n"}
        {"    "}fn increment_spam_count(&amp;mut self, token: &amp;str) {"{"}
        {"\n"}
        {"        "}*self.token_spam_counts.get_mut(token).unwrap() += 1;{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"\n"}
        {"    "}fn increment_ham_count(&amp;mut self, token: &amp;str) {"{"}
        {"\n"}
        {"        "}*self.token_ham_counts.get_mut(token).unwrap() += 1;{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"}"}
      </code>
    </pre>
    <p id="3f6f4764-85e7-41b1-86e2-4fab3f1467b7">
      Notice that incrementing a value in a <code>HashMap</code> is pretty
      cumbersome. A novice Rust programmer would have difficulty understanding
      what <code>self.token_spam_counts.get_mut(token).unwrap() += 1 </code>is
      doing.
    </p>
    <p id="d0817a94-a3ed-4875-acfc-5f9160270688">
      In an attempt to make the code more explicit, I’ve created the{" "}
      <code>increment_spam_count</code> and <code>increment_ham_count</code>
      functions. But I’m not happy with that – it still feels cumbersome. Reach
      out to me if you have suggestions for a better approach.
    </p>
    <h3 id="1893d24d-863f-4134-a42a-b204aaaa3783">
      <strong>Predicting with our classifier</strong>
    </h3>
    <hr id="a00bc799-e17f-4579-b8ca-600523502931" />
    <p id="eb6b3f70-1019-4f63-8a08-f590e2081294">
      The <code>predict</code> method will take a <em>string slice</em> and
      return the model’s calculated probability of spam.
    </p>
    <p id="1f5a9d20-4598-403b-91b3-0708d37dc33a">
      We’ll create two helper functions <code>probabilities_of_message</code>{" "}
      and <code>probabilites_of_token</code> to do the heavy lifting for{" "}
      <code>predict</code>.
    </p>
    <p id="1bd74656-9e61-4d78-b026-8be3ed269976">
      <code>probabilities_of_message</code> returns{" "}
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
                    <mi>P</mi>
                    <mo stretchy="false">(</mo>
                    <mi>M</mi>
                    <mi>e</mi>
                    <mi>s</mi>
                    <mi>s</mi>
                    <mi>a</mi>
                    <mi>g</mi>
                    <mi>e</mi>
                    <mi mathvariant="normal">∣</mi>
                    <mi>S</mi>
                    <mi>p</mi>
                    <mi>a</mi>
                    <mi>m</mi>
                    <mo stretchy="false">)</mo>
                  </mrow>
                  <annotation encoding="application/x-tex">
                    P(Message|Spam)
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
                  style={{ marginRight: "0.13889em" }}
                >
                  P
                </span>
                <span className="mopen">(</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.10903em" }}
                >
                  M
                </span>
                <span className="mord mathnormal">ess</span>
                <span className="mord mathnormal">a</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.03588em" }}
                >
                  g
                </span>
                <span className="mord mathnormal">e</span>
                <span className="mord">∣</span>
                <span className="mord mathnormal">Sp</span>
                <span className="mord mathnormal">am</span>
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
                    <mi>P</mi>
                    <mo stretchy="false">(</mo>
                    <mi>M</mi>
                    <mi>e</mi>
                    <mi>s</mi>
                    <mi>s</mi>
                    <mi>a</mi>
                    <mi>g</mi>
                    <mi>e</mi>
                    <mi mathvariant="normal">∣</mi>
                    <mi>h</mi>
                    <mi>a</mi>
                    <mi>m</mi>
                    <mo stretchy="false">)</mo>
                  </mrow>
                  <annotation encoding="application/x-tex">
                    P(Message|ham)
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
                  style={{ marginRight: "0.13889em" }}
                >
                  P
                </span>
                <span className="mopen">(</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.10903em" }}
                >
                  M
                </span>
                <span className="mord mathnormal">ess</span>
                <span className="mord mathnormal">a</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.03588em" }}
                >
                  g
                </span>
                <span className="mord mathnormal">e</span>
                <span className="mord">∣</span>
                <span className="mord mathnormal">ham</span>
                <span className="mclose">)</span>
              </span>
            </span>
          </span>
        </span>
        <span>﻿</span>
      </span>
      .
    </p>
    <p id="e74ca7c5-eec6-4e78-9500-5b93781b4f5e">
      <code>probabilities_of_token</code> returns{" "}
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
                    <mi>P</mi>
                    <mo stretchy="false">(</mo>
                    <mi>T</mi>
                    <mi>o</mi>
                    <mi>k</mi>
                    <mi>e</mi>
                    <mi>n</mi>
                    <mi mathvariant="normal">∣</mi>
                    <mi>S</mi>
                    <mi>p</mi>
                    <mi>a</mi>
                    <mi>m</mi>
                    <mo stretchy="false">)</mo>
                  </mrow>
                  <annotation encoding="application/x-tex">
                    P(Token|Spam)
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
                  style={{ marginRight: "0.13889em" }}
                >
                  P
                </span>
                <span className="mopen">(</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.13889em" }}
                >
                  T
                </span>
                <span className="mord mathnormal">o</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.03148em" }}
                >
                  k
                </span>
                <span className="mord mathnormal">e</span>
                <span className="mord mathnormal">n</span>
                <span className="mord">∣</span>
                <span className="mord mathnormal">Sp</span>
                <span className="mord mathnormal">am</span>
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
                    <mi>P</mi>
                    <mo stretchy="false">(</mo>
                    <mi>T</mi>
                    <mi>o</mi>
                    <mi>k</mi>
                    <mi>e</mi>
                    <mi>n</mi>
                    <mi mathvariant="normal">∣</mi>
                    <mi>h</mi>
                    <mi>a</mi>
                    <mi>m</mi>
                    <mo stretchy="false">)</mo>
                  </mrow>
                  <annotation encoding="application/x-tex">
                    P(Token|ham)
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
                  style={{ marginRight: "0.13889em" }}
                >
                  P
                </span>
                <span className="mopen">(</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.13889em" }}
                >
                  T
                </span>
                <span className="mord mathnormal">o</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.03148em" }}
                >
                  k
                </span>
                <span className="mord mathnormal">e</span>
                <span className="mord mathnormal">n</span>
                <span className="mord">∣</span>
                <span className="mord mathnormal">ham</span>
                <span className="mclose">)</span>
              </span>
            </span>
          </span>
        </span>
        <span>﻿</span>
      </span>
      .
    </p>
    <p id="bb8fed76-dd80-47b9-8584-90d25d151c19">
      Calculating the probability that the input message is spam involves
      multiplying together each word’s probability of occurring in a spam
      message.
    </p>
    <p id="80951064-c206-40e5-8b75-7bedee45ebdc">
      Since probabilities are floating point numbers between 0 and 1,
      multiplying many probabilities together can result in{" "}
      <strong>underflow </strong>[
      <a
        target="_blank"
        rel="noreferrer"
        href="https://learning.oreilly.com/library/view/data-science-from/9781492041122/"
      >
        1
      </a>
      ]. This is when an operation results in a number smaller than what the
      computer can accurately store [
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.amazon.ca/Numerical-Analysis-Richard-Burden/dp/1305253663/ref=asc_df_1305253663/?tag=googleshopc0c-20&linkCode=df0&hvadid=293014842916&hvpos=&hvnetw=g&hvrand=9862733826869340686&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9001551&hvtargid=pla-450666638521&psc=1"
      >
        6
      </a>
      ][
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.techopedia.com/definition/712/underflow"
      >
        7
      </a>
      ]. Thus, we’ll use logarithms and exponentials to transform the task into
      a series of additions:
    </p>
    <p id="805e1f1e-9610-4150-a91c-e4b880370ad8">
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
                    <msubsup>
                      <mi mathvariant="normal">Π</mi>
                      <mrow>
                        <mi>i</mi>
                        <mo>=</mo>
                        <mn>0</mn>
                      </mrow>
                      <mi>n</mi>
                    </msubsup>
                    <msub>
                      <mi>p</mi>
                      <mi>i</mi>
                    </msub>
                    <mo>=</mo>
                    <mi>e</mi>
                    <mi>x</mi>
                    <mi>p</mi>
                    <mo stretchy="false">(</mo>
                    <msubsup>
                      <mi mathvariant="normal">Σ</mi>
                      <mrow>
                        <mi>i</mi>
                        <mo>=</mo>
                        <mn>0</mn>
                      </mrow>
                      <mi>n</mi>
                    </msubsup>
                    <mi>log</mi>
                    <mo>⁡</mo>
                    <mo stretchy="false">(</mo>
                    <msub>
                      <mi>p</mi>
                      <mi>i</mi>
                    </msub>
                    <mo stretchy="false">)</mo>
                    <mo stretchy="false">)</mo>
                  </mrow>
                  <annotation encoding="application/x-tex">
                    \Pi^n_{"{"}i = 0{"}"}p_i = exp(\Sigma^n_{"{"}i=0{"}"}{" "}
                    \log(p_i))
                  </annotation>
                </semantics>
              </math>
            </span>
            <span className="katex-html" aria-hidden="true">
              <span className="base">
                <span
                  className="strut"
                  style={{ height: "0.941994em", verticalAlign: "-0.258664em" }}
                />
                <span className="mord">
                  <span className="mord">Π</span>
                  <span className="msupsub">
                    <span className="vlist-t vlist-t2">
                      <span className="vlist-r">
                        <span
                          className="vlist"
                          style={{ height: "0.664392em" }}
                        >
                          <span
                            style={{
                              top: "-2.441336em",
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
                                <span className="mord mathnormal mtight">
                                  i
                                </span>
                                <span className="mrel mtight">=</span>
                                <span className="mord mtight">0</span>
                              </span>
                            </span>
                          </span>
                          <span
                            style={{ top: "-3.063em", marginRight: "0.05em" }}
                          >
                            <span
                              className="pstrut"
                              style={{ height: "2.7em" }}
                            />
                            <span className="sizing reset-size6 size3 mtight">
                              <span className="mord mathnormal mtight">n</span>
                            </span>
                          </span>
                        </span>
                        <span className="vlist-s">​</span>
                      </span>
                      <span className="vlist-r">
                        <span
                          className="vlist"
                          style={{ height: "0.258664em" }}
                        >
                          <span />
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
                <span className="mord">
                  <span className="mord mathnormal">p</span>
                  <span className="msupsub">
                    <span className="vlist-t vlist-t2">
                      <span className="vlist-r">
                        <span
                          className="vlist"
                          style={{ height: "0.31166399999999994em" }}
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
                              <span className="mord mathnormal mtight">i</span>
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
                  style={{ height: "1.008664em", verticalAlign: "-0.258664em" }}
                />
                <span className="mord mathnormal">e</span>
                <span className="mord mathnormal">x</span>
                <span className="mord mathnormal">p</span>
                <span className="mopen">(</span>
                <span className="mord">
                  <span className="mord">Σ</span>
                  <span className="msupsub">
                    <span className="vlist-t vlist-t2">
                      <span className="vlist-r">
                        <span
                          className="vlist"
                          style={{ height: "0.664392em" }}
                        >
                          <span
                            style={{
                              top: "-2.441336em",
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
                                <span className="mord mathnormal mtight">
                                  i
                                </span>
                                <span className="mrel mtight">=</span>
                                <span className="mord mtight">0</span>
                              </span>
                            </span>
                          </span>
                          <span
                            style={{ top: "-3.063em", marginRight: "0.05em" }}
                          >
                            <span
                              className="pstrut"
                              style={{ height: "2.7em" }}
                            />
                            <span className="sizing reset-size6 size3 mtight">
                              <span className="mord mathnormal mtight">n</span>
                            </span>
                          </span>
                        </span>
                        <span className="vlist-s">​</span>
                      </span>
                      <span className="vlist-r">
                        <span
                          className="vlist"
                          style={{ height: "0.258664em" }}
                        >
                          <span />
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className="mspace"
                  style={{ marginRight: "0.16666666666666666em" }}
                />
                <span className="mop">
                  lo<span style={{ marginRight: "0.01389em" }}>g</span>
                </span>
                <span className="mopen">(</span>
                <span className="mord">
                  <span className="mord mathnormal">p</span>
                  <span className="msupsub">
                    <span className="vlist-t vlist-t2">
                      <span className="vlist-r">
                        <span
                          className="vlist"
                          style={{ height: "0.31166399999999994em" }}
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
                              <span className="mord mathnormal mtight">i</span>
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
                <span className="mclose">))</span>
              </span>
            </span>
          </span>
        </span>
        <span>﻿</span>
      </span>
    </p>
    <p id="34930bf8-19b7-4720-9678-0c191639cc9d">
      Which we can do because for any{" "}
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
                    <mo separator="true">,</mo>
                    <mi>b</mi>
                    <mo>∈</mo>
                    <mi mathvariant="double-struck">R</mi>
                    <mo separator="true">,</mo>
                    <mi>a</mi>
                    <mi>b</mi>
                    <mo>=</mo>
                    <mi>e</mi>
                    <mi>x</mi>
                    <mi>p</mi>
                    <mo stretchy="false">(</mo>
                    <mi>l</mi>
                    <mi>o</mi>
                    <mi>g</mi>
                    <mo stretchy="false">(</mo>
                    <mi>a</mi>
                    <mi>b</mi>
                    <mo stretchy="false">)</mo>
                    <mo stretchy="false">)</mo>
                    <mo>=</mo>
                    <mi>e</mi>
                    <mi>x</mi>
                    <mi>p</mi>
                    <mo stretchy="false">(</mo>
                    <mi>l</mi>
                    <mi>o</mi>
                    <mi>g</mi>
                    <mo stretchy="false">(</mo>
                    <mi>a</mi>
                    <mo stretchy="false">)</mo>
                    <mo>+</mo>
                    <mi>log</mi>
                    <mo>⁡</mo>
                    <mo stretchy="false">(</mo>
                    <mi>b</mi>
                    <mo stretchy="false">)</mo>
                    <mo stretchy="false">)</mo>
                  </mrow>
                  <annotation encoding="application/x-tex">
                    a, b \in \mathbb{"{"}R{"}"}, ab = exp(log(ab)) = exp(log(a)
                    + \log(b))
                  </annotation>
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
                <span className="mord mathnormal">a</span>
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
                <span className="mrel">∈</span>
                <span
                  className="mspace"
                  style={{ marginRight: "0.2777777777777778em" }}
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
                <span className="mord mathbb">R</span>
                <span className="mpunct">,</span>
                <span
                  className="mspace"
                  style={{ marginRight: "0.16666666666666666em" }}
                />
                <span className="mord mathnormal">ab</span>
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
                <span className="mord mathnormal">e</span>
                <span className="mord mathnormal">x</span>
                <span className="mord mathnormal">p</span>
                <span className="mopen">(</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.01968em" }}
                >
                  l
                </span>
                <span className="mord mathnormal">o</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.03588em" }}
                >
                  g
                </span>
                <span className="mopen">(</span>
                <span className="mord mathnormal">ab</span>
                <span className="mclose">))</span>
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
                <span className="mord mathnormal">e</span>
                <span className="mord mathnormal">x</span>
                <span className="mord mathnormal">p</span>
                <span className="mopen">(</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.01968em" }}
                >
                  l
                </span>
                <span className="mord mathnormal">o</span>
                <span
                  className="mord mathnormal"
                  style={{ marginRight: "0.03588em" }}
                >
                  g
                </span>
                <span className="mopen">(</span>
                <span className="mord mathnormal">a</span>
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
                <span className="mop">
                  lo<span style={{ marginRight: "0.01389em" }}>g</span>
                </span>
                <span className="mopen">(</span>
                <span className="mord mathnormal">b</span>
                <span className="mclose">))</span>
              </span>
            </span>
          </span>
        </span>
        <span>﻿</span>
      </span>{" "}
      (if you find that math physically painful to look at, don’t worry, it’s by
      no means crucial to this article).
    </p>
    <p id="fb4c7700-95c0-466e-9729-a727ef415d91"></p>
    <p id="8fe4e5c1-5d4e-43c3-b4af-7adaef2675e6">
      Once again I’ll start with pseudocode for the predict method:
    </p>
    <pre id="45664255-f580-4053-ba79-4c3f9b1b4769" className="code">
      <code>
        implementation block for NaiveBayesCalssifier {"{"}
        {"\n"}
        {"\t"}
        {`/*...*/`}
        {"\n"}
        {"\n"}
        {"\t"}predict(self, text) {"{"}
        {"\n"}
        {"\t"}
        {"\t"}lower_case_text = to_lowercase(text){"\n"}
        {"\t"}
        {"\t"}message_tokens = tokenize(text){"\n"}
        {"\t"}
        {"\t"}(prob_if_spam, prob_if_ham) =
        self.probabilities_of_message(message_tokens){"\n"}
        {"\t"}
        {"\t"}return prob_if_spam / (prob_if_spam + prob_if_ham){"\n"}
        {"\t"}
        {"}"}
        {"\n"}
        {"\t"}
        {"\n"}
        {"\t"}probabilities_of_message(self, message_tokens) {"{"}
        {"\n"}
        {"\t"}
        {"\t"}log_prob_if_spam = 0{"\n"}
        {"\t"}
        {"\t"}log_prob_if_ham = 0{"\n"}
        {"\n"}
        {"\t"}
        {"\t"}for each token in self.tokens {"{"}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}(prob_if_spam, prob_if_ham) = self.probabilites_of_token(token)
        {"\n"}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}if message_tokens contains token {"{"}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}log_prob_if_spam = log_prob_if_spam + ln(prob_if_spam){"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}log_prob_if_ham = log_prob_if_ham + ln(prob_if_ham){"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"}"} else {"{"}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}log_prob_if_spam = log_prob_if_spam + ln(1 - prob_if_spam){"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}log_prob_if_ham = log_prob_if_ham + ln(1 - prob_if_ham){"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"}"}
        {"\n"}
        {"\t"}
        {"\t"}
        {"}"}
        {"\n"}
        {"\n"}
        {"\t"}
        {"\t"}prob_if_spam = exp(log_prob_if_spam){"\n"}
        {"\t"}
        {"\t"}prob_if_ham = exp(log_prob_if_ham){"\n"}
        {"\n"}
        {"\t"}
        {"\t"}return (prob_if_spam, prob_if_ham){"\n"}
        {"\t"}
        {"}"}
        {"\n"}
        {"\n"}
        {"\t"}probabilites_of_token(self, token) {"{"}
        {"\n"}
        {"\t"}
        {"\t"}prob_of_token_spam = (self.token_spam_counts[token] + self.alpha){" "}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}/ (self.spam_messages_count + 2 * self.alpha){"\n"}
        {"        "}
        {"\n"}
        {"\t"}
        {"\t"}prob_of_token_ham = (self.token_ham_counts[token] + self.alpha){" "}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}/ (self.ham_messages_count + 2 * self.alpha){"\n"}
        {"\n"}
        {"\t"}
        {"\t"}return (prob_of_token_spam, prob_of_token_ham){"\n"}
        {"\t"}
        {"}"}
        {"\n"}
        {"\t"}
        {"\n"}
        {"\t"}
        {"\n"}
        {"}"}
      </code>
    </pre>
    <p id="c66b0b57-b080-41d0-b1f4-1f9ccfd1ff51"></p>
    <p id="25f8c12b-2a1b-4117-8c5e-432ed6bb3fe6">And here’s the Rust code:</p>
    <pre id="526acec4-d4bd-46cc-a929-9f5acae5b4dc" className="code">
      <code>
        impl NaiveBayesClassifier {"{"}
        {"\n"}
        {"\n"}
        {"\t"}
        {"\t"}
        {`/*...*/`}
        {"\n"}
        {"\n"}
        {"\t"}pub fn predict(&amp;self, text: &amp;str) -&gt; f64 {"{"}
        {"\n"}
        {"        "}let lower_case_text = text.to_lowercase();{"\n"}
        {"        "}let message_tokens = tokenize(&amp;lower_case_text);{"\n"}
        {"        "}let (prob_if_spam, prob_if_ham) =
        self.probabilities_of_message(message_tokens);{"\n"}
        {"\n"}
        {"        "}return prob_if_spam / (prob_if_spam + prob_if_ham);{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"\n"}
        {"    "}fn probabilities_of_message(&amp;self, message_tokens:
        HashSet&lt;&amp;str&gt;) -&gt; (f64, f64) {"{"}
        {"\n"}
        {"        "}let mut log_prob_if_spam = 0.;{"\n"}
        {"        "}let mut log_prob_if_ham = 0.;{"\n"}
        {"\n"}
        {"        "}for token in self.tokens.iter() {"{"}
        {"\n"}
        {"            "}let (prob_if_spam, prob_if_ham) =
        self.probabilites_of_token(&amp;token);{"\n"}
        {"\n"}
        {"            "}if message_tokens.contains(token.as_str()) {"{"}
        {"\n"}
        {"                "}log_prob_if_spam += prob_if_spam.ln();{"\n"}
        {"                "}log_prob_if_ham += prob_if_ham.ln();{"\n"}
        {"            "}
        {"}"} else {"{"}
        {"\n"}
        {"                "}log_prob_if_spam += (1. - prob_if_spam).ln();{"\n"}
        {"                "}log_prob_if_ham += (1. - prob_if_ham).ln();{"\n"}
        {"            "}
        {"}"}
        {"\n"}
        {"        "}
        {"}"}
        {"\n"}
        {"\n"}
        {"        "}let prob_if_spam = log_prob_if_spam.exp();{"\n"}
        {"        "}let prob_if_ham = log_prob_if_ham.exp();{"\n"}
        {"\n"}
        {"        "}return (prob_if_spam, prob_if_ham);{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"\n"}
        {"    "}fn probabilites_of_token(&amp;self, token: &amp;str) -&gt; (f64,
        f64) {"{"}
        {"\n"}
        {"        "}let prob_of_token_spam = (self.token_spam_counts[token] as
        f64 + self.alpha){"\n"}
        {"            "}/ (self.spam_messages_count as f64 + 2. * self.alpha);
        {"\n"}
        {"\n"}
        {"        "}let prob_of_token_ham = (self.token_ham_counts[token] as f64
        + self.alpha){"\n"}
        {"            "}/ (self.ham_messages_count as f64 + 2. * self.alpha);
        {"\n"}
        {"\n"}
        {"        "}return (prob_of_token_spam, prob_of_token_ham);{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"}"}
      </code>
    </pre>
    <p id="49c20e47-0184-4f2e-9260-a2c95f3578f4"></p>
    <h3 id="2d232fff-8866-4e87-91f5-74fc4f3ddc40">
      <strong>Testing our Classifier</strong>
    </h3>
    <hr id="35739060-a560-4c36-9e9a-3c2b80ef085b" />
    <p id="6ec5acbe-dd9e-4ce3-a6a3-d1733404e018">
      Let’s give our model a test. The test below goes through Naive Bayes
      manually, then checks that our model gives the same result.
    </p>
    <p id="aa8cb9d4-1e5b-4a5e-a7ea-827a8e1993d4">
      You may find it worthwhile to go through the test’s logic, or you may just
      want to paste the code to the bottom of your lib.rs file to check that
      your code works.
    </p>
    <pre id="51e14e25-0373-4aae-b480-7dd74dc2e62b" className="code">
      <code>
        {`// `}...lib.rs{"\n"}
        {"\n"}pub fn new_classifier(alpha: f64) -&gt; NaiveBayesClassifier {"{"}
        {"\n"}
        {"    "}return NaiveBayesClassifier {"{"}
        {"\n"}
        {"        "}alpha,{"\n"}
        {"        "}tokens: HashSet::new(),{"\n"}
        {"        "}token_ham_counts: HashMap::new(),{"\n"}
        {"        "}token_spam_counts: HashMap::new(),{"\n"}
        {"        "}spam_messages_count: 0,{"\n"}
        {"        "}ham_messages_count: 0,{"\n"}
        {"    "}
        {"}"};{"\n"}
        {"}"}
        {"\n"}
        {"\n"}#[cfg(test)]{"\n"}mod tests {"{"}
        {"\n"}
        {"    "}use super::*;{"\n"}
        {"\n"}
        {"    "}#[test]{"\n"}
        {"    "}fn naive_bayes() {"{"}
        {"\n"}
        {"        "}let train_messages = [{"\n"}
        {"            "}Message {"{"}
        {"\n"}
        {"                "}text: {'"'}Free Bitcoin viagra XXX christmas deals
        😻😻😻{'"'},{"\n"}
        {"                "}is_spam: true,{"\n"}
        {"            "}
        {"}"},{"\n"}
        {"            "}Message {"{"}
        {"\n"}
        {"                "}text: {'"'}My dear Granddaughter, please explain
        Bitcoin over Christmas dinner{'"'},{"\n"}
        {"                "}is_spam: false,{"\n"}
        {"            "}
        {"}"},{"\n"}
        {"            "}Message {"{"}
        {"\n"}
        {"                "}text: {'"'}Here in my garage...{'"'},{"\n"}
        {"                "}is_spam: true,{"\n"}
        {"            "}
        {"}"},{"\n"}
        {"        "}];{"\n"}
        {"\n"}
        {"        "}let alpha = 1.;{"\n"}
        {"        "}let num_spam_messages = 2.;{"\n"}
        {"        "}let num_ham_messages = 1.;{"\n"}
        {"\n"}
        {"        "}let mut model = new_classifier(alpha);{"\n"}
        {"        "}model.train(&amp;train_messages);{"\n"}
        {"\n"}
        {"        "}let mut expected_tokens: HashSet&lt;String&gt; =
        HashSet::new();{"\n"}
        {"        "}for message in train_messages.iter() {"{"}
        {"\n"}
        {"            "}for token in tokenize(&amp;message.text.to_lowercase()){" "}
        {"{"}
        {"\n"}
        {"                "}expected_tokens.insert(token.to_string());{"\n"}
        {"            "}
        {"}"}
        {"\n"}
        {"        "}
        {"}"}
        {"\n"}
        {"\n"}
        {"        "}let input_text = {'"'}Bitcoin crypto academy Christmas deals
        {'"'};{"\n"}
        {"\n"}
        {"        "}let probs_if_spam = [{"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        {'"'}Free{'"'}
        {"  "}(not present){"\n"}
        {"            "}(1. + alpha) / (num_spam_messages + 2. * alpha),
        {"      "}
        {`// `}
        {'"'}Bitcoin{'"'}
        {"  "}(present){"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        {'"'}viagra{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        {'"'}XXX{'"'}
        {"  "}(not present){"\n"}
        {"            "}(1. + alpha) / (num_spam_messages + 2. * alpha),
        {"      "}
        {`// `}
        {'"'}christmas{'"'}
        {"  "}(present){"\n"}
        {"            "}(1. + alpha) / (num_spam_messages + 2. * alpha),
        {"      "}
        {`// `}
        {'"'}deals{'"'}
        {"  "}(present){"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        {'"'}my{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_spam_messages + 2. * alpha), //
        {'"'}dear{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_spam_messages + 2. * alpha), //
        {'"'}granddaughter{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_spam_messages + 2. * alpha), //
        {'"'}please{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_spam_messages + 2. * alpha), //
        {'"'}explain{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_spam_messages + 2. * alpha), //
        {'"'}over{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_spam_messages + 2. * alpha), //
        {'"'}dinner{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        {'"'}here{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        {'"'}in{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        {'"'}garage{'"'}
        {"  "}(not present){"\n"}
        {"        "}];{"\n"}
        {"\n"}
        {"        "}let probs_if_ham = [{"\n"}
        {"            "}1. - (0. + alpha) / (num_ham_messages + 2. * alpha), //
        {'"'}Free{'"'}
        {"  "}(not present){"\n"}
        {"            "}(1. + alpha) / (num_ham_messages + 2. * alpha),
        {"      "}
        {`// `}
        {'"'}Bitcoin{'"'}
        {"  "}(present){"\n"}
        {"            "}1. - (0. + alpha) / (num_ham_messages + 2. * alpha), //
        {'"'}viagra{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_ham_messages + 2. * alpha), //
        {'"'}XXX{'"'}
        {"  "}(not present){"\n"}
        {"            "}(1. + alpha) / (num_ham_messages + 2. * alpha),
        {"      "}
        {`// `}
        {'"'}christmas{'"'}
        {"  "}(present){"\n"}
        {"            "}(0. + alpha) / (num_ham_messages + 2. * alpha),
        {"      "}
        {`// `}
        {'"'}deals{'"'}
        {"  "}(present){"\n"}
        {"            "}1. - (1. + alpha) / (num_ham_messages + 2. * alpha), //
        {'"'}my{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_ham_messages + 2. * alpha), //
        {'"'}dear{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_ham_messages + 2. * alpha), //
        {'"'}granddaughter{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_ham_messages + 2. * alpha), //
        {'"'}please{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_ham_messages + 2. * alpha), //
        {'"'}explain{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_ham_messages + 2. * alpha), //
        {'"'}over{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_ham_messages + 2. * alpha), //
        {'"'}dinner{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_ham_messages + 2. * alpha), //
        {'"'}here{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_ham_messages + 2. * alpha), //
        {'"'}in{'"'}
        {"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_ham_messages + 2. * alpha), //
        {'"'}garage{'"'}
        {"  "}(not present){"\n"}
        {"        "}];{"\n"}
        {"\n"}
        {"        "}let p_if_spam_log: f64 = probs_if_spam.iter().map(|p|
        p.ln()).sum();{"\n"}
        {"        "}let p_if_spam = p_if_spam_log.exp();{"\n"}
        {"\n"}
        {"        "}let p_if_ham_log: f64 = probs_if_ham.iter().map(|p|
        p.ln()).sum();{"\n"}
        {"        "}let p_if_ham = p_if_ham_log.exp();{"\n"}
        {"\n"}
        {"        "}
        {`// `}P(message | spam) / (P(messge | spam) + P(message | ham)) rounds
        to 0.97{"\n"}
        {"        "}assert!((model.predict(input_text) - p_if_spam / (p_if_spam
        + p_if_ham)).abs() &lt; 0.000001);{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"}"}
      </code>
    </pre>
    <p id="89c3da77-0c3c-41b7-b065-b43f02760bab">
      Now run <code>cargo test</code>. If that passes for you, well done, you’ve
      implemented a Naive Bayes classifier in Rust!
    </p>
    <p id="d330862a-4854-4524-9200-cbda215c621a">
      Thank you for coding with me, friends. Feel free to reach out if you have
      any feedback or questions:{" "}
      <a target="_blank" rel="noreferrer" href={`mailto: ${EMAIL_ADDRESS}`}>
        joshtaylor361@gmail.com
      </a>
      . Cheers!
    </p>
    <h3 id="9f0ff2e8-07b8-436e-a18f-2233ece34735">References</h3>
    <hr id="872db108-f110-4379-941d-8a5f38dcf9ef" />
    <p id="368fc2a6-d730-4d74-8018-ac0196430dc6">
      [1]{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://learning.oreilly.com/library/view/data-science-from/9781492041122/"
      >
        Grus, J. (2019).{" "}
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://learning.oreilly.com/library/view/data-science-from/9781492041122/"
      >
        <em>
          Data Science from Scratch: First Principles with Python, 2nd edition.{" "}
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
    <p id="099f9024-352d-4d06-86bd-cf5380fc8772">
      [2]{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://greenteapress.com/wp/think-bayes/"
      >
        Downey, A. (2021).{" "}
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://greenteapress.com/wp/think-bayes/"
      >
        <em>Think Bayes: Bayesian Statistics in Python, 2nd edition.</em>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://greenteapress.com/wp/think-bayes/"
      >
        O’Reilly Media.
      </a>
    </p>
    <p id="e68ca83a-eeb9-4e1d-a8be-5c2feb09a8e8">
      [3]{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://probml.github.io/pml-book/book0.html"
      >
        Murphy, K. (2012).{" "}
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://probml.github.io/pml-book/book0.html"
      >
        <em>Machine Learning: A Probabilistic Perspective. </em>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://probml.github.io/pml-book/book0.html"
      >
        MIT Press.
      </a>
    </p>
    <p id="4b917c0c-776c-4465-8818-554076da93d0">
      [4]{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://rust-lang-nursery.github.io/rust-cookbook/text/regex.html"
      >
        Dhinakaran, V. (2017).{" "}
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://rust-lang-nursery.github.io/rust-cookbook/text/regex.html"
      >
        <em>Rust Cookbook. </em>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://rust-lang-nursery.github.io/rust-cookbook/text/regex.html"
      >
        Packt.
      </a>
    </p>
    <p id="541604f8-3033-4d68-be9d-7eb9f18e9154">
      [5]{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/watch?v=nt63k3bfXS0"
      >
        Ng, A. (2018).{" "}
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/watch?v=nt63k3bfXS0"
      >
        <em>Stanford CS229: Lecture 5 - GDA &amp; Naive Bayes.</em>
      </a>
    </p>
    <p id="d1032a2c-65f5-4edb-88e8-396c8f3517d9">
      [6]{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.amazon.ca/Numerical-Analysis-Richard-Burden/dp/1305253663/ref=asc_df_1305253663/?tag=googleshopc0c-20&linkCode=df0&hvadid=293014842916&hvpos=&hvnetw=g&hvrand=9862733826869340686&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9001551&hvtargid=pla-450666638521&psc=1"
      >
        Burden, R. Faires, J. Burden, A. (2015).{" "}
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.amazon.ca/Numerical-Analysis-Richard-Burden/dp/1305253663/ref=asc_df_1305253663/?tag=googleshopc0c-20&linkCode=df0&hvadid=293014842916&hvpos=&hvnetw=g&hvrand=9862733826869340686&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9001551&hvtargid=pla-450666638521&psc=1"
      >
        <em>Numerical Analysis, 10th edition. </em>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.amazon.ca/Numerical-Analysis-Richard-Burden/dp/1305253663/ref=asc_df_1305253663/?tag=googleshopc0c-20&linkCode=df0&hvadid=293014842916&hvpos=&hvnetw=g&hvrand=9862733826869340686&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9001551&hvtargid=pla-450666638521&psc=1"
      >
        Brooks Cole.
      </a>
    </p>
    <p id="4e8496be-8678-4752-861c-705ae8724088">
      [7]{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.techopedia.com/definition/712/underflow"
      >
        <em>Underflow.</em>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.techopedia.com/definition/712/underflow"
      >
        {" "}
        Technopedia.
      </a>
    </p>
    <p id="87a5a865-e1ab-4ff6-a651-ec434e03099e"></p>
  </div>
);

export default NaiveBayes;
