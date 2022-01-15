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
    <p id="91aa551d-ee50-4f25-8214-aa53a16824c2">
      <strong>What is a Naive Bayes Classifier?</strong>
    </p>
    <p id="0b59301e-d6a2-4dfb-acb5-0123b4fca9fc">
      Skip to ___ if you can answer that yourself.{" "}
    </p>
    <p id="68ebdcc2-0d3c-481b-92ff-2ff0ca963279"></p>
    <p id="f86661a0-dbb6-4884-b90f-08d51e612b3d">
      The Naive Bayes classifier is my favoruite machine learnign algorithm.
    </p>
    <p id="aa3a846c-5d08-4195-8cb4-946d47b65eab">
      At the heart of the Naive Bayes classifier is Bayes’ Theorem. Bayes’
      Theorem given us a way to update the probability of a hypothesis H, given
      some data D. Expressed mathicatically:
    </p>
    <p id="424ce114-f8c0-4f73-97fa-06a0fdfdca57">
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
      </span>{" "}
      where{" "}
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
                  <annotation encoding="application/x-tex">
                    P(H|D) ={" "}
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
              </span>
            </span>
          </span>
        </span>
        <span>﻿</span>
      </span>{" "}
      the probability of H given D.
    </p>
    <p id="f8015a9d-9d64-4c75-b3e6-f621d0b6ae94">
      If we accumulate more data, we can update P(H|D) accordingly.
    </p>
    <p id="ccd392b5-811d-4ac5-b62d-cee7dab6fe53"></p>
    <p id="ca660520-6377-4745-af1a-2296da53762b">
      Naive Bayes models rest on a big assumption: the presence of all data
      points are independent of one another [1]. That is, each piece of data it
      receives conveys no information about any other data points. We do not
      actually expect this assumption to be true; it is an extremely weak
      assumption. But it’s still useful, allowing us to create fast classifiers
      that work quite well ([3], page 82).
    </p>
    <p id="bc7a7671-6af6-4d34-8f6f-dd053f218478"></p>
    <p id="b1f844be-03b0-4562-b42b-b90ce96ee86b">
      Naive Bayes is one of the fastest machine learning algorithms around, both
      in computation and in the time it takes to implement [7].
    </p>
    <p id="ed775237-8892-4229-856b-c4102110c3f8"></p>
    <p id="a2fff61f-3e37-4ac2-bf76-f996b577214f">
      We’ll leave of description of Naive Bayes there - alot more could be said,
      but the main point of this article is to get better with Rust. If you’d
      like to learn more about the algorithm, here are some resources:
    </p>
    <ul id="a9c62ee9-7722-46cf-924e-5c4b08688715" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Can’t say enough good things about this video from Josh Starmer:{" "}
        <a href="https://www.youtube.com/watch?v=O2L2Uv9pdDA&t=657s">
          https://www.youtube.com/watch?v=O2L2Uv9pdDA&amp;t=657s
        </a>
      </li>
    </ul>
    <ul id="8ee41175-bfc1-4b18-ab2e-49c1fd074f09" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        <a href="https://joelgrus.com/books/">Joel Grus</a> has written a
        chapter on Naive Bayes in his great book{" "}
        <em>Data Science from Scratch, </em>which was the main inspiration for
        this implamention:
        <p id="ff8958b1-c6ba-4fe3-b914-8d27d3f72eb0">
          <a href="https://learning.oreilly.com/library/view/data-science-from/9781492041122/">
            https://learning.oreilly.com/library/view/data-science-from/9781492041122/
          </a>
        </p>
      </li>
    </ul>
    <ul id="3ab863d0-6ad9-428f-aaa9-e3b8f9726500" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Jake VanderPlas has written a great chapter on the subject in his book{" "}
        <em>Python Data Science Handbook:</em>
        <p id="400486a3-cab5-486d-bc5d-2127bdd5fb3f">
          <a href="https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html">
            https://jakevdp.github.io/PythonDataScienceHandbook/05.05-naive-bayes.html
          </a>
        </p>
      </li>
    </ul>
    <ul id="f1f73adf-32bd-4449-8169-8d8948b82807" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        If mathematical notion is your thing, try section 6.6.3 of{" "}
        <em>The Elements of Statisical Learning</em>:
        <p id="76b735a2-2122-444d-a4d4-77cdf40886a4">
          <a href="https://hastie.su.domains/Papers/ESLII.pdf">
            https://hastie.su.domains/Papers/ESLII.pdf
          </a>
        </p>
      </li>
    </ul>
    <p id="8377115a-23a4-49be-8792-c5ab3fdadbb6"></p>
    <p id="c8d9f51e-a125-44aa-a0d5-7a571bd2d358">
      The canonical application of the Naive Bayes Classifier is a spam
      classifier. That is what we’ll build. All code can be found here:{" "}
    </p>
    <p id="219af82e-ad73-45ec-a804-3ed8da688008"></p>
    <p id="be0ed8ef-6110-4c4c-aacb-d72398499699">
      We’ll begin by creating a new library with Cargo.{" "}
    </p>
    <pre id="51556f7b-a6eb-4616-bd6a-f310bb5ded18" className="code">
      <code>cargo new naive_bayes --lib{"\n"}cd naive_bayes</code>
    </pre>
    <h3 id="10a0ef0f-edbe-4554-94cc-01b2479793b8">Tokenization</h3>
    <p id="56ecb7df-c627-4f21-9788-afe0a39a476a">
      Our classifier will take in a message as input and return and
      classification as spam or not spam. To work with the message we’re given,
      we’ll want to <em>tokenize</em> it, Meaning, we’ll want to represent it as
      a set of lower case words where order and number of repeated entries do
      not matter. Rust’s{" "}
      <code>
        <strong>std::collections::HashSet</strong>
      </code>{" "}
      structure is a great way to achieve this.
    </p>
    <p id="024365d2-b810-4420-a69a-1099b29c09eb"></p>
    <p id="f6e79a26-2efa-488b-9469-eed000fd8ae4">
      The function we’ll write to preform tokenization will require the use of
      the <a href="https://docs.rs/regex/latest/regex/">regex</a> crates. Make
      sure you include this dependency in your <code>Cargo.toml</code> file:
    </p>
    <pre id="3d05cb44-b29f-45b4-a262-c9156cb58cbc" className="code">
      <code>[dependencies]{"\n"}regex = "^1.5.4"</code>
    </pre>
    <p id="1b318af9-a6fb-4684-b23b-25d1223ee731"></p>
    <p id="e84d6532-f33b-4a63-936d-bbd6a9e9004d">
      And here’s the tokenize function:
    </p>
    <pre id="cc310016-e715-4100-ab83-50ce380aba53" className="code">
      <code>
        // lib.rs{"\n"}
        {"\n"}// We'll need HashMap later{"\n"}use std::collections::{"{"}
        HashMap, HashSet{"}"};{"\n"}
        {"\n"}extern crate regex;{"\n"}use regex::Regex;{"\n"}
        {"\n"}pub fn tokenize(lower_case_text: &amp;str) -&gt;
        HashSet&lt;&amp;str&gt; {"{"}
        {"\n"}
        {"  "}Regex::new(r"[a-z0-9']+{"\n"}
        {"        "}.unwrap(){"\n"}
        {"        "}.find_iter(lower_case_text){"\n"}
        {"        "}.map(|mat| mat.as_str()){"\n"}
        {"        "}.collect(){"\n"}
        {"}"}
      </code>
    </pre>
    <p id="76edd241-92a8-4115-8d30-1de57653d912">
      This function uses a regaular expression to match all lowercase letter and
      numbers. Whenever a we come across a symbol that is not a lowercase letter
      or number, we split the input and group together all symbols encountered
      since the last split [4].
    </p>
    <p id="b5127eba-7cdf-48be-9ef7-263272705580"></p>
    <h3 id="d0625e0f-99c2-4cc0-bb22-6819a29c7ca5">Some Handy Structures</h3>
    <p id="096e6105-d31a-4eaa-9e21-f32efc94023f">
      Using a struct to represent a message will be helpful. This stuct will
      contain a string slice for the message’s text, and a boolean to indicate
      whether or not the message is classified as spam:
    </p>
    <pre id="5eaf37d8-9423-4f24-9483-a2ca2c06ad28" className="code">
      <code>
        struct Message&lt;'a&gt; {"{"}
        {"\n"}
        {"    "}pub text: &amp;'a str,{"\n"}
        {"    "}pub is_spam: bool,{"\n"}
        {"}"}
      </code>
    </pre>
    <p id="f05b1955-ee88-49d1-8ed8-5dbcd19a54a8">
      The <code>'a</code> is a lifetime parameter annotaion. If you’re
      unfamiliar with lifetimes, and want to learn about them, I recommend
      reading{" "}
      <a href="https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html">
        section 10.3 of The Rust Programming Language Book
      </a>
      .
    </p>
    <p id="4228691e-2a5e-4ade-be84-dd73941d859a"></p>
    <p id="11fe7f7d-3275-4980-94ec-53e20a2df497">
      A struct will also be useful to represent our classifier. Before
      introducing with struct, a short digression on Laplacian smoothing is
      necessary (skip to <em>here</em> if you're familiar with Laplacian
      smoothing or aren’t interested).
    </p>
    <p id="0183a588-241e-4a59-be86-264809d941d2">
      <strong>Digression on Laplace Smoothing:</strong>
    </p>
    <div className="indented">
      <p id="50f18ace-7cea-462c-ba97-5b2409fb476a">
        Assume that our training data set does not contain any spam messages
        with the word <strong>fubar</strong>. Then, the Naive Bayes classifier
        will assign a probability 0 of spam to any message that contains the
        word fubar. (either explain why or point to resource).{" "}
      </p>
      <p id="cea1f94b-0463-4821-9b1e-241db86fd87a">
        Unless we’re talking about my success with online dating, it’s not smart
        to assign a probability of 0 to an event just because it hasn’t happened
        yet.
      </p>
      <p id="4756fe41-34b3-4bf1-8269-62332a1b15f5">
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
        to the number of observations of each token. Let’s see this
        mathematically: without Laplace Smoothing, the probability of seeing a
        word w in a spam message is:
      </p>
      <p id="cd1ef6a4-c48b-479d-96f3-0738e0aa8683">
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
      <p id="cf5928dc-c754-43a4-9d99-92017388b6fc">
        With Laplace Smoothing, it’s:
      </p>
      <p id="259d52ac-f5ed-4f73-b2a8-a1de6e83da59">
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
      <p id="7a5a00a8-f3a2-4153-86cd-01028a04cdaa"></p>
    </div>
    <p />
    <p id="03d851ff-59be-4b34-9a58-c844ca1c9397">
      Back to our classifier struct:
    </p>
    <pre id="08ab785a-1efc-4cc4-9be2-6dde7b0f6e5f" className="code">
      <code>
        struct NaiveBayesClassifier {"{"}
        {"\n"}
        {"    "}alpha: f64,{"\n"}
        {"    "}tokens: HashSet&lt;String&gt;,{"\n"}
        {"    "}token_ham_counts: HashMap&lt;String, i32&gt;,{"\n"}
        {"    "}token_spam_counts: HashMap&lt;String, i32&gt;,{"\n"}
        {"    "}spam_messages_count: i32,{"\n"}
        {"    "}ham_messages_count: i32,{"\n"}
        {"}"}
      </code>
    </pre>
    <p id="e3b16b97-490b-4835-b5c7-2f8acca58b59"></p>
    <p id="ad16efda-41d0-45c6-857d-584858136a88">
      The implementation block for <code>NaiveBayesClassifier</code> will center
      around a <code>train</code> method and a <code>predict</code> method.
    </p>
    <h3 id="914f0ac5-c9e4-4654-b712-962f0843db69">
      <strong>Training our classifier</strong>
    </h3>
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
        <p id="4f6ebdc2-5211-4fd5-81c8-dfa157cb57c9"></p>
      </li>
    </ul>
    <p id="45bae9f7-bc03-4cab-a661-a0332f3de453">
      Here’s psudocode for our <code>train</code> method. If you feel like it,
      try and convert this into Rust before looking at my implementation below.
      Feel free to send me your implementation, I’d love to see it!
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
        {"                "}self.increment_word_counts(token, message.is_spam)
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
        {"    "}fn increment_message_count(&amp;mut self, message: &amp;Message){" "}
        {"{"}
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
        {"    "}fn increment_word_counts(&amp;mut self, token: &amp;str,
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
        {"            "}self.increment_token_spam_count(token);{"\n"}
        {"        "}
        {"}"} else {"{"}
        {"\n"}
        {"            "}self.increment_token_ham_count(token);{"\n"}
        {"        "}
        {"}"}
        {"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"\n"}
        {"    "}fn increment_token_spam_count(&amp;mut self, token: &amp;str){" "}
        {"{"}
        {"\n"}
        {"        "}*self.token_spam_counts.get_mut(token).unwrap() += 1;{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"\n"}
        {"    "}fn increment_token_ham_count(&amp;mut self, token: &amp;str){" "}
        {"{"}
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
      what <code>*self.token_spam_counts.get_mut(token).unwrap() += 1</code> is
      doing. In an attempt to make the code more explicit, I’ve created the{" "}
      <code>increment_token_spam_count</code> and{" "}
      <code>increment_token_ham_count</code> functions. But I’m not happy with
      that - still feels cumbersome. Reach me if you have a better idea.
    </p>
    <p id="65cf2f62-ca5e-47a1-8a3e-3d2a7854a77e"></p>
    <h3 id="1893d24d-863f-4134-a42a-b204aaaa3783">
      <strong>Predicting with our classifier</strong>
    </h3>
    <p id="d5e580e5-3a1a-4fc7-a9bd-9a5f726672fb">
      The <code>predict</code> method will take a <em>string slice</em> and
      return the model’s calculated probability of spam.
    </p>
    <p id="1acb24d4-7342-45d5-994f-00d4c6cd5eb1">
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
      multiplying each word’s probability of occurring in a spam message.
    </p>
    <p id="9ddf1be7-f76e-4fbb-a0ff-71b6f45380c4">
      Since probabilities are floating point numbers &lt; 1, multiplying many
      probabilities together can result in <strong>underflow</strong> [1], which
      is when an operation results in a number smaller than what the computer
      can accurately store [5][6]. Thus, we’ll use logarithms and exponentials
      to transform the task into a series of additions:
    </p>
    <p id="f16cacf6-02bd-4340-a733-ca8dfff69053"></p>
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
    <p id="20b7a858-1cf7-4b4d-a026-cc3fbe928812"></p>
    <p id="c7ef783d-7f58-4d6e-97a2-90974423e570"></p>
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
      </span>
      .
    </p>
    <p id="fb4c7700-95c0-466e-9729-a727ef415d91"></p>
    <p id="8fe4e5c1-5d4e-43c3-b4af-7adaef2675e6">
      Once again I’ll start with pseudocode for the predict method:
    </p>
    <pre id="45664255-f580-4053-ba79-4c3f9b1b4769" className="code">
      <code>
        implementation block for NaiveBayesCalssifier {"{"}
        {"\n"}
        {"\n"}
        {"\t"}predict(self, text) {"{"}
        {"\n"}
        {"\t"}
        {"\t"}message_tokens = tokenize(text){"\n"}
        {"\t"}
        {"\t"}(prob_if_spam, prob_if_ham) =
        self.probabilities_of_message(message_tokens){"\n"}
        {"    "}return prob_if_spam / (prob_if_spam + prob_if_ham){"\n"}
        {"\t"}
        {"}"}
        {"\n"}
        {"\t"}
        {"\n"}
        {"\t"}probabilities_of_message(self, message_tokens) {"{"}
        {"\n"}
        {"        "}log_prob_if_spam = 0{"\n"}
        {"        "}log_prob_if_ham = 0{"\n"}
        {"\n"}
        {"        "}for each token in self.tokens {"{"}
        {"\n"}
        {"            "}(prob_if_spam, prob_if_ham) =
        self.probabilites_of_token(token){"\n"}
        {"\n"}
        {"            "}if message_tokens contains token {"{"}
        {"\n"}
        {"                "}log_prob_if_spam = log_prob_if_spam +
        ln(prob_if_spam){"\n"}
        {"                "}log_prob_if_ham = log_prob_if_ham + ln(prob_if_ham)
        {"\n"}
        {"            "}
        {"}"} else {"{"}
        {"\n"}
        {"                "}log_prob_if_spam = log_prob_if_spam + ln(1 -
        prob_if_spam){"\n"}
        {"                "}log_prob_if_ham = log_prob_if_ham + ln(1 -
        prob_if_ham){"\n"}
        {"            "}
        {"}"}
        {"\n"}
        {"        "}
        {"}"}
        {"\n"}
        {"\n"}
        {"        "}prob_if_spam = exp(log_prob_if_spam);{"\n"}
        {"        "}prob_if_ham = exp(log_prob_if_ham);{"\n"}
        {"\n"}
        {"        "}return (prob_if_spam, prob_if_ham);{"\n"}
        {"  "}
        {"}"}
        {"\n"}
        {"\n"}
        {"\t"}probabilites_of_token(self, token) {"{"}
        {"\n"}
        {"        "}prob_of_token_spam = (self.token_spam_counts[token] as f64 +
        self.alpha) {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}/ (self.spam_messages_count as f64 + 2. * self.alpha);{"\n"}
        {"        "}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}prob_of_token_ham = (self.token_ham_counts[token] as f64 +
        self.alpha) {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}/ (self.ham_messages_count as f64 + 2. * self.alpha);{"\n"}
        {"\n"}
        {"        "}return (prob_of_token_spam, prob_of_token_ham);{"\n"}
        {"  "}
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
        {"\t"}/*...*/{"\n"}
        {"\n"}
        {"\t"}
        {"\t"}pub fn predict(&amp;self, text: &amp;str) -&gt; f64 {"{"}
        {"\n"}
        {"        "}let message_tokens = tokenize(text);{"\n"}
        {"        "}let (log_prob_if_spam, log_prob_if_ham) =
        self.probabilities_of_message(message_tokens);{"\n"}
        {"\n"}
        {"        "}let prob_if_spam = log_prob_if_spam.exp();{"\n"}
        {"        "}let prob_if_ham = log_prob_if_ham.exp();{"\n"}
        {"\n"}
        {"        "}return prob_if_spam / (prob_if_spam + prob_if_ham);{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"\n"}
        {"    "}fn probabilities_of_message(&amp;self, text_tokens:
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
        {"            "}if text_tokens.contains(token.as_str()) {"{"}
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
        {"        "}return (log_prob_if_spam, log_prob_if_ham);{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"\n"}
        {"    "}fn probabilites_of_token(&amp;self, token: &amp;str) -&gt; (f64,
        f64) {"{"}
        {"\n"}
        {"        "}let spam = self.token_spam_counts[token];{"\n"}
        {"        "}let ham = self.token_ham_counts[token];{"\n"}
        {"\n"}
        {"        "}let prob_of_token_spam ={"\n"}
        {"            "}(spam as f64 + self.alpha) / (self.spam_messages_count
        as f64 + 2. * self.alpha);{"\n"}
        {"        "}let prob_of_token_ham ={"\n"}
        {"            "}(ham as f64 + self.alpha) / (self.ham_messages_count as
        f64 + 2. * self.alpha);{"\n"}
        {"        "}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}return (prob_of_token_spam, prob_of_token_ham);{"\n"}
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
    <p id="6ec5acbe-dd9e-4ce3-a6a3-d1733404e018">
      Let’s give our model a test. The test below goes through Naive Bayes
      manually, then checks that our model gives the same result. You may find
      it worth while it go through the test’s logic, or you may just want to
      paste it to the bottom of your <a href="http://lib.rs">lib.rs</a> file.{" "}
    </p>
    <pre id="51e14e25-0373-4aae-b480-7dd74dc2e62b" className="code">
      <code>
        // ...lib.r{"\n"}
        {"\n"}#[cfg(test)]{"\n"}mod tests {"{"}
        {"\n"}
        {"    "}use super::*;{"\n"}
        {"\n"}
        {"    "}#[test]{"\n"}
        {"    "}fn naive_bayes() {"{"}
        {"\n"}
        {"        "}//Maybe make overlap between spam messages{"\n"}
        {"        "}let train_messages = [{"\n"}
        {"            "}Message {"{"}
        {"\n"}
        {"                "}text: "Free Bitcoin viagra XXX christmas deals
        😻😻😻",{"\n"}
        {"                "}is_spam: true,{"\n"}
        {"            "}
        {"}"},{"\n"}
        {"            "}Message {"{"}
        {"\n"}
        {"                "}text: "Dear Granddaughter, please explain Bitcoin
        over Christmas dinner",{"\n"}
        {"                "}is_spam: false,{"\n"}
        {"            "}
        {"}"},{"\n"}
        {"            "}Message {"{"}
        {"\n"}
        {"                "}text: "Our dear alumni, please consider making a
        donation...",{"\n"}
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
        {"        "}let input_text = "Bitcoin crypto academy Christmas deals";
        {"\n"}
        {"\n"}
        {"        "}let probs_if_spam = [{"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        "Free"{"  "}(not present){"\n"}
        {"            "}(1. + alpha) / (num_spam_messages + 2. * alpha),
        {"      "}// "bitcoin"{"  "}(present){"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        "viagra"{"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        "xxx"{"  "}(not present){"\n"}
        {"            "}(1. + alpha) / (num_spam_messages + 2. * alpha),
        {"      "}// "christmas"{"  "}(present){"\n"}
        {"            "}(1. + alpha) / (num_spam_messages + 2. * alpha),
        {"      "}// "deals"{"  "}(present){"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        "dear"{"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_spam_messages + 2. * alpha), //
        "granddaughter"{"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        "please"{"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_spam_messages + 2. * alpha), //
        "explain"{"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_spam_messages + 2. * alpha), //
        "over"{"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_spam_messages + 2. * alpha), //
        "dinner"{"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        "our"{"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        "alumni"{"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        "consider"{"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        "making"{"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        "a"{"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_spam_messages + 2. * alpha), //
        "donation"{"  "}(not present){"\n"}
        {"        "}];{"\n"}
        {"\n"}
        {"        "}let probs_if_ham = [{"\n"}
        {"            "}1. - (0. + alpha) / (num_ham_messages + 2. * alpha), //
        "Free"{"  "}(not present){"\n"}
        {"            "}(1. + alpha) / (num_ham_messages + 2. * alpha),
        {"      "}// "bitcoin"{"  "}(present){"\n"}
        {"            "}1. - (0. + alpha) / (num_ham_messages + 2. * alpha), //
        "viagra"{"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_ham_messages + 2. * alpha), //
        "xxx"{"  "}(not present){"\n"}
        {"            "}(1. + alpha) / (num_ham_messages + 2. * alpha),
        {"      "}// "christmas"{"  "}(present){"\n"}
        {"            "}(0. + alpha) / (num_ham_messages + 2. * alpha),
        {"      "}// "deals"{"  "}(present){"\n"}
        {"            "}1. - (1. + alpha) / (num_ham_messages + 2. * alpha), //
        "dear"{"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_ham_messages + 2. * alpha), //
        "granddaughter"{"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_ham_messages + 2. * alpha), //
        "please"{"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_ham_messages + 2. * alpha), //
        "explain"{"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_ham_messages + 2. * alpha), //
        "over"{"  "}(not present){"\n"}
        {"            "}1. - (1. + alpha) / (num_ham_messages + 2. * alpha), //
        "dinner"{"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_ham_messages + 2. * alpha), //
        "our"{"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_ham_messages + 2. * alpha), //
        "alumni"{"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_ham_messages + 2. * alpha), //
        "consider"{"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_ham_messages + 2. * alpha), //
        "making"{"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_ham_messages + 2. * alpha), //
        "a"{"  "}(not present){"\n"}
        {"            "}1. - (0. + alpha) / (num_ham_messages + 2. * alpha), //
        "donation"{"  "}(not present){"\n"}
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
        {"        "}// P(message | spam) / (P(messge | spam) + P(message | ham))
        rounds to 0.79{"\n"}
        {"        "}assert!((model.predict(input_text) - p_if_spam / (p_if_spam
        + p_if_ham)).abs() &lt; 0.000001);{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"}"}
      </code>
    </pre>
    <p id="d605d621-7711-472d-8cb0-1c74e1a5bdcb">
      Now run <code>cargo test</code>. If that passes for you, well done, you’ve
      implemented a Naive Bayes classifier in Rust!
    </p>
    <p id="bd958620-07ea-468d-9851-af7267782131"></p>
    <p id="aaa1378f-319a-4871-a168-f101bce06464">
      Thank you for coding with me, friends. Feel free reach out if you have any
      questions or suggestions.
    </p>
    <p id="d4a621c4-9298-414d-bd83-a45e9db87e56"></p>
    <h3 id="9f0ff2e8-07b8-436e-a18f-2233ece34735">References</h3>
    <p id="368fc2a6-d730-4d74-8018-ac0196430dc6">
      [1] - Data Science from Scratch
    </p>
    <p id="099f9024-352d-4d06-86bd-cf5380fc8772">[2] - Think Bayes</p>
    <p id="e68ca83a-eeb9-4e1d-a8be-5c2feb09a8e8">
      [3] - <strong>Machine_Learning_A_Probabilistic_Perspective</strong>
    </p>
    <p id="4b917c0c-776c-4465-8818-554076da93d0">
      [4] -{" "}
      <a href="https://rust-lang-nursery.github.io/rust-cookbook/text/regex.html">
        https://rust-lang-nursery.github.io/rust-cookbook/text/regex.html
      </a>
    </p>
    <p id="541604f8-3033-4d68-be9d-7eb9f18e9154">
      [5] - Numerical analysis text
    </p>
    <p id="d1032a2c-65f5-4edb-88e8-396c8f3517d9">
      [6] -{" "}
      <a href="https://www.techopedia.com/definition/712/underflow">
        https://www.techopedia.com/definition/712/underflow
      </a>
    </p>
    <p id="4e8496be-8678-4752-861c-705ae8724088">
      [7] -{" "}
      <a href="https://www.youtube.com/watch?v=nt63k3bfXS0">
        https://www.youtube.com/watch?v=nt63k3bfXS0
      </a>
    </p>
    <p id="11edfe9f-2b1d-4e6d-9afc-0cfc9ec71105"></p>
    <p id="24623be3-724d-45e6-aafb-b45b6b913ec0"></p>
    <p id="66a02255-0aee-44b6-96ab-385d1b36dc27">TODO:</p>
    <ul id="613c5b06-c99d-4075-a5fa-153d377effb7" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Make sure all use crates are included
      </li>
    </ul>
    <ul id="1e6c8f8d-c634-42f5-9660-3bf6303b3a54" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>Remove lazy_static macro</li>
    </ul>
    <ul id="a4d6ac93-b79f-45b8-a582-8219fda42781" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>Mention</li>
    </ul>
    <ul id="bdb1181e-97fe-45a9-9069-aaf1920675c2" className="bulleted-list">
      <li style={{ listStyleType: "disc" }}>
        Maybe annotate inputs and outputs for pseudocode
      </li>
    </ul>
    <p id="38f26c3b-8596-4799-9e8a-e8c69c449e31"></p>
    <p id="d4777dbb-61d7-4953-af47-0c7dd0cc3a73">
      Notes: “It is especially appropriate when the dimension p of the feature
      space is high, making density estimation unattractive.” from Elements of
      Stat learning
    </p>
    <p id="574ef15e-e0b1-4562-8671-68f641dde3c7"></p>
    <p id="626c257a-bd18-4038-95cf-42def5c9a3f1">
      Shaking off the Rust: Implementing a Naive Bayes classifier with Rust
    </p>
    <p id="87a5a865-e1ab-4ff6-a651-ec434e03099e"></p>
  </div>
);

export default NaiveBayes;
