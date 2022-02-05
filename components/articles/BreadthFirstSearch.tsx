import dynamic from "next/dynamic";
import GraphTheoryIndex from "../../graphTheory";

const WasmComponent = dynamic({
  loader: async () => {
    const wasmModule = await import("../../main.wasm");
    return () => (
      <div>{`bfs: ${wasmModule.bfs(
        [[1, 2], [0, 3, 4], [0, 4], [1, 4, 5], [1, 2, 3, 5], [3, 4], [7], [6]],
        0,
        5
      )}`}</div>
    );
  },
});

const BreadthFirstSearch = () => {
  return (
    <>
      <div className="page-body">
        <p id="3b64c364-7f40-4a0b-b5f0-5679301d98cd">
          <em>
            <strong>Shaking off the Rust</strong>
          </em>{" "}
          is a series of exercises with the Rust programing language. The
          purpose of the series is to improve both my and my dear reader’s
          abilities with Rust by building things. Plus, by actually building
          stuff, we'll learn about an array of technological concepts in the
          process. In this installment, we’re going to perform breadth-first
          search.
        </p>
        <p id="37e9ad52-b000-454c-80c1-ce9687c6aae5"></p>
        <h3 id="7ccff436-2d87-4764-b17c-aa4cc0ebe962">
          The structure of this lesson
        </h3>
        <hr id="5e454948-245a-4a6d-be43-7fb327f2d3a4" />
        <p id="3836972b-b1ed-47c5-8866-a3b39ca1bbb8">
          This lesson will deal with a number of fundamental subjects in
          computer science. Since many readers will already be familiar with
          these concepts, I do not want to spend a lot of time on them - the
          main point of the series is to practice Rust.
        </p>
        <p id="9486ad01-54bf-41ff-af81-0fe7ba4a7285">
          So I’ll run this installment like this: when we encounter one of these
          fundamental computer science topics, I’ll give an accelerated
          description. The description will be followed by a few references for
          the reader who is unfamiliar and wants to learn more.{" "}
        </p>
        <h3 id="7c57aaa2-3920-4f27-b005-d3b7a19b0274">
          Blazingly Fast Intro to Graphs
        </h3>
        <hr id="9706ef8c-a0a2-42d4-9358-aed08e1c9275" />
        <p id="d10780d2-385a-4e53-8829-779b278fdc78">
          If we’re dealing with graph algorithms, when we refer to a graph,
          we’re talking about a mathematical structure that models a set of
          connections [1].{" "}
        </p>
        <p id="7a4e31aa-0715-4a61-a731-349b5c3b3eff">
          Graphs consist of nodes and edges. Let’s say you raise alpacas, and
          you want to find your closest LinkedIn connection in the market for a
          handsome young alpaca.
        </p>
        <p id="249024ee-c628-4b10-aa03-06861e877a9c"></p>
        <figure id="60df204d-ca20-41c6-a37e-24ee95e6dacc" className="image">
          <a href="https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
            <img
              style={{ width: "288px" }}
              src="https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </a>
        </figure>
        <p id="18aa694c-8dad-4bc7-9bc3-9d3d6bc3324a"></p>
        <p id="32069913-f913-4fcf-8a11-f89d22745fbb">
          Using a graph to model the situation, a node will represent a person,
          and an edge will represent a connection between two people. Here’s
          what that could look like //(Maybe say Megan is looking for an Alpaca
          or something?):{" "}
        </p>
        <figure id="57080998-c6c8-44ab-ab2a-10d487196b80" className="image">
          <a href="https://cdn-images-1.medium.com/max/800/1*wD4pe5RuEfiYnTwl4J9ETw.png">
            <img
              style={{ width: "980px", marginLeft: "-25px" }}
              src="https://cdn-images-1.medium.com/max/800/1*wD4pe5RuEfiYnTwl4J9ETw.png"
            />
          </a>
        </figure>
        <h3 id="6cd43688-4be4-4d7d-881a-bb616e02e8df">
          Blazingly Fast Intro to Breadth-First Search
        </h3>
        <hr id="90a86fba-4f64-42fe-9fea-197c9e2b7031" />
        <p id="b55999b8-bf20-4274-8b70-eb9752da47e3">
          The Breadth-First Search algorithm begins at a chosen node{" "}
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
          </span>
          . It explores all of the nodes directly connected to{" "}
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
          </span>
          . It then explores all the nodes that are two connections away from{" "}
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
          </span>
          . Then three connections away, and so on until the search is complete
          [2]. That is, it explores all nodes{" "}
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
          edges away from{" "}
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
          before exploring any nodes{" "}
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
                        <mi>d</mi>
                        <mo>+</mo>
                        <mn>1</mn>
                      </mrow>
                      <annotation encoding="application/x-tex">d+1</annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{
                        height: "0.77777em",
                        verticalAlign: "-0.08333em",
                      }}
                    />
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
                      style={{ height: "0.64444em", verticalAlign: "0em" }}
                    />
                    <span className="mord">1</span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>{" "}
          edges away from x; it explores nodes in layers [7].
        </p>
        <p id="82c6bc7b-ca81-4962-ae0c-bf7d4554fc4f">
          Breadth-First search is helpful when we want to{" "}
        </p>
        <ol
          type={1}
          id="a4f801d6-45bc-4149-b5a7-e54b3d622287"
          className="numbered-list"
          start={1}
        >
          <li>
            Determine if there is a path from node{" "}
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
            to node{" "}
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
                        style={{
                          height: "0.625em",
                          verticalAlign: "-0.19444em",
                        }}
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
            </span>
            .
          </li>
        </ol>
        <p id="77eed195-585b-4aa2-bbcd-6b63b886f7b7">or</p>
        <ol
          type={1}
          id="7552535b-8fe8-488a-8750-5c87a991f80f"
          className="numbered-list"
          start={2}
        >
          <li>
            Find the shortest path from node{" "}
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
            to node{" "}
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
                        style={{
                          height: "0.625em",
                          verticalAlign: "-0.19444em",
                        }}
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
            [1].
          </li>
        </ol>
        <p id="66b5fdb8-593d-4696-a36e-3d3cb1bb9749"></p>
        <p id="6af26a99-cd07-44b3-b630-b42add01f2a1">
          Going back to our alpaca farm, we’ll suppose Megan wants to buy an
          alpaca. Let’s visualize how breath first search looks in this
          scenario:
        </p>
        <div
          style={{
            marginLeft: "-18vw",
            marginTop: "4rem",
            marginBottom: "4rem",
          }}
        >
          <div
            id={"graph-container"}
            style={{
              width: "75vw",
              height: "85vh",
              boxShadow:
                "0px 1px 8px -1px rgb(0 0 0 / 20%), 0px 3px 24px -2px rgb(0 0 0 / 5%)",
              position: "relative",
              marginBottom: "4rem",
            }}
          >
            <GraphTheoryIndex /*example={"ALPACA"}*/ />
          </div>
        </div>

        <p id="9190a15d-c170-4959-ad83-40f8b5f38bb1"></p>
        <p id="d6283a53-f9c6-4d16-8f37-1c82a2d3dcbb"></p>
        <p id="7abcebe0-6d4b-4dbd-94d0-a0ad68ac9e4b"></p>
        <p id="ca8e6541-7134-4eec-8386-797cc3c7f116"></p>
        <p id="1d7e5b1c-5838-4d71-ab9e-f941171eed69">
          Before getting into the working of BFS and our Rust implementation,
          we’ll need a <em>blazingly fast introduction</em>
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
                          <mrow />
                          <mtext>TM</mtext>
                        </msup>
                      </mrow>
                      <annotation encoding="application/x-tex">
                        ^{"{"}\text{"{"}TM{"}"}
                        {"}"}
                      </annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{
                        height: "0.8413309999999999em",
                        verticalAlign: "0em",
                      }}
                    />
                    <span className="mord">
                      <span />
                      <span className="msupsub">
                        <span className="vlist-t">
                          <span className="vlist-r">
                            <span
                              className="vlist"
                              style={{ height: "0.8413309999999999em" }}
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
                                    <span className="mord text mtight">
                                      <span className="mord mtight">TM</span>
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
              </span>
            </span>
            <span>﻿</span>
          </span>{" "}
          to the Queue data structure.
        </p>
        <h3 id="ad798dcd-e86f-4316-a118-06412a9686b2">
          Blazingly Fast Introduction to Queues
        </h3>
        <hr id="e00018ed-0c9c-4b9e-94a7-2e6d5fd280a1" />
        <p id="39882b19-1ddc-4f05-acf8-7f49390d7fc0">
          Queues store a collection of data items, which are accessed in a
          first-in, first-out (FIFO) order [3]. The queue supports two
          operations:{" "}
        </p>
        <p id="5c209b23-8171-4018-8523-92debf12225d">
          {" "}
          - Enqueue: insert a data item into the back of the queue.
        </p>
        <p id="a70d3852-5c46-4e80-ac41-0dfba1de8e1a">
          {" "}
          - Dequeue: remove and return an item from the front of the queue.
        </p>
        <p id="1e32e869-2f5e-43c8-bf48-d986e0ece75b"></p>
        <h3 id="80483acd-d54e-4674-b7aa-ad8021e8b7d2">Getting Started</h3>
        <hr id="cacef74e-e84d-4ab8-9b53-ff47558173da" />
        <p id="ac7fecac-5458-474f-a8a5-b13aac494595">
          We’ll begin by creating a new library with Cargo.
        </p>
        <pre id="e800192a-a3e0-4c72-8348-7af3328d53fa" className="code">
          <code>cargo new bfs --lib{"\n"}cd bfs</code>
        </pre>
        <p id="be10be30-4fea-4035-928f-bc9fc34c9d9f"></p>
        <h3 id="84febca4-ac83-42f2-9cb2-65c3eb9b8d68">Implementing a Queue</h3>
        <hr id="6b5e0e89-0fd2-41e6-a473-6e4ff6fe2fe1" />
        <p id="d4ff3751-967e-42f8-8338-8947e2a69175">
          Breadth-first search uses a queue to keep track of the nodes it has
          visited.{" "}
        </p>
        <p id="10fe70bb-c199-4c98-8240-5e2acd38c22d">
          We’ll use a <code>struct</code> to implement the queue.
        </p>
        <pre id="4e8631b1-9a51-4dde-b73d-e807774b8aac" className="code">
          <code>
            struct Queue&lt;T&gt; {"{"}
            {"\n"}
            {"    "}pub items: Vec&lt;T&gt;,{"\n"}
            {"}"}
            {"\n"}
            {"\n"}impl&lt;T&gt; Queue&lt;T&gt; {"{"}
            {"\n"}
            {"\t"}
            {"\t"}pub fn new() -&gt; Queue&lt;T&gt; {"{"}
            {"\n"}
            {"        "}Queue {"{"} items: Vec::new() {"}"}
            {"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"\n"}
            {"    "}pub fn enqueue(&amp;mut self, v: T) {"{"}
            {"\n"}
            {"        "}self.items.push(v){"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"\n"}
            {"    "}pub fn dequeue(&amp;mut self) -&gt; T {"{"}
            {"\n"}
            {"        "}self.items.remove(0){"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"\n"}
            {"    "}pub fn is_empty(&amp;self) -&gt; bool {"{"}
            {"\n"}
            {"        "}self.items.len() == 0{"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"}"}
          </code>
        </pre>
        <p id="a64d8040-4a91-4a2e-b93a-9441b286d574">
          Since queues support storage of data independent of the type of data,
          we are implementing the queue struct with a generic. Generics are
          stand-ins that allow us to write code that operates on multiple
          concrete types or other properties [4]. If you’re unfamiliar with
          Rust’s generic types, I suggest reading{" "}
          <a href="https://doc.rust-lang.org/book/ch10-01-syntax.html">
            section 10.1 of the Rust programming language book
          </a>
          .
        </p>
        <p id="e2064650-0662-4c56-b6f7-54003ea2f364"></p>
        <p id="1d9445a9-1f10-4e96-ac03-4289e546178f">
          ...talk about enquing and dequing... I dunno seems pretty
          straightforward... also constructor
        </p>
        <p id="a2bd420a-32ab-4d54-83ca-24b057db43f6"></p>
        <p id="b597ae85-53f4-44f6-b2c6-d2737b5be21b"></p>
        <h3 id="b6f3403f-e319-4a29-a726-06e1df0fd59d">
          Representing a Graph in Rust
        </h3>
        <hr id="ff34fbec-68b8-46e7-a9d4-d44290f8b70c" />
        <p id="4398ab86-1f28-4f00-950c-d308fbea248b">
          We will use a <em>collection of adjacency lists</em> to represent a
          graph in our code. This collection of adjacency lists will be a vector
          of size{" "}
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
                        <mi>V</mi>
                        <mi mathvariant="normal">∣</mi>
                      </mrow>
                      <annotation encoding="application/x-tex">|V|</annotation>
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
                      style={{ marginRight: "0.22222em" }}
                    >
                      V
                    </span>
                    <span className="mord">∣</span>
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
                        <mi mathvariant="normal">∣</mi>
                        <mi>V</mi>
                        <mi mathvariant="normal">∣</mi>
                      </mrow>
                      <annotation encoding="application/x-tex">|V|</annotation>
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
                      style={{ marginRight: "0.22222em" }}
                    >
                      V
                    </span>
                    <span className="mord">∣</span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>{" "}
          is the number of vertices in the graph. Let G denote the collection of
          adjacency lists. For every vertex{" "}
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
                        <mi>v</mi>
                      </mrow>
                      <annotation encoding="application/x-tex">v</annotation>
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
                      style={{ marginRight: "0.03588em" }}
                    >
                      v
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>{" "}
          in{" "}
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
                        <mi>G</mi>
                      </mrow>
                      <annotation encoding="application/x-tex">G</annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{ height: "0.68333em", verticalAlign: "0em" }}
                    />
                    <span className="mord mathnormal">G</span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>
          ,{" "}
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
                        <mi>G</mi>
                        <mo stretchy="false">[</mo>
                        <mi>v</mi>
                        <mo stretchy="false">]</mo>
                      </mrow>
                      <annotation encoding="application/x-tex">G[v]</annotation>
                    </semantics>
                  </math>
                </span>
                <span className="katex-html" aria-hidden="true">
                  <span className="base">
                    <span
                      className="strut"
                      style={{ height: "1em", verticalAlign: "-0.25em" }}
                    />
                    <span className="mord mathnormal">G</span>
                    <span className="mopen">[</span>
                    <span
                      className="mord mathnormal"
                      style={{ marginRight: "0.03588em" }}
                    >
                      v
                    </span>
                    <span className="mclose">]</span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>{" "}
          will be a vector containing all vertices that{" "}
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
                        <mi>v</mi>
                      </mrow>
                      <annotation encoding="application/x-tex">v</annotation>
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
                      style={{ marginRight: "0.03588em" }}
                    >
                      v
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span>﻿</span>
          </span>{" "}
          is connected to.
        </p>
        <p id="3699376a-32c2-4609-b2c5-2ac5c8f9c270">
          We’ll use Rust’s custom types to help us implement our adjacentcy list
          representation.
        </p>
        <pre id="cfa3c4a6-1d47-4c60-a6f2-87f3f42615f8" className="code">
          <code>
            type Vertex = Vec&lt;u32&gt;;{"\n"}type Graph = Vec&lt;Vertex&gt;;
          </code>
        </pre>
        <p id="702130cd-961e-4538-b8c4-dc39f8339f57">Nice.</p>
        <h3 id="09d37338-e05c-48b0-a50f-f6ec76f6c364">
          O l'oun t'awa se n'yara Je k'abere
        </h3>
        <hr id="bd9515d2-1a6e-4344-b34b-411327bd7afb" />
        <p id="fa655706-24f7-4ba1-a7d4-1dfb1e43aea8">
          We’re ready to do what we came to do.
        </p>
        <p id="7afcd822-d57b-43f9-8a0c-65c7773e896a"></p>
        <p id="8693d593-d486-40af-9c74-870428461b6a"></p>
        <p id="1ad94b81-0b8d-41bb-9f4b-1c423973a699">
          Here’s psudeocode for the algorithm, which will be followed by a Rust
          implementation.
        </p>
        <p id="816bb6b7-948f-48fd-b3c1-d2f3595069fe">//Give argument types</p>
        <pre id="5d1dc2e2-a92b-4d71-8250-97185e92691a" className="code">
          <code>
            bfs(graph, start_node, end_node) returning path from start_node to
            end_node if path exists, otherwise empty list {"{"}
            {"\n"}
            {"\t"}q = empty queue{"\n"}
            {"\t"}q.enqueue(start_node){"\n"}
            {"\n"}
            {"\t"}visited_vertices = initialize list of false values of length
            |V|{"\n"}
            {"\t"}visited_vertices[0] = true{"\n"}
            {"\n"}
            {"\t"}prev = initialize list of null values of length |V|{"\n"}
            {"\n"}
            {"\t"}while queue is not empty {"{"}
            {"\n"}
            {"\t"}
            {"\t"}current_node = queue.dequeue(){"\n"}
            {"\t"}
            {"\t"}for each v ib graph[current_node] {"{"}
            {"\n"}
            {"\t"}
            {"\t"}
            {"\t"}if !visited_vertices[v] {"{"}
            {"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}queue.enqueue(v){"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}visited_vertcies[v] = true{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}prev[v] = current_node{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"}"}
            {"\n"}
            {"\t"}
            {"\t"}
            {"}"}
            {"\n"}
            {"\t"}
            {"}"}
            {"\n"}
            {"\n"}
            {"\t"}path = empty list{"\n"}
            {"\t"}at = end_node{"\n"}
            {"\n"}
            {"\t"}while at is not null {"{"}
            {"\n"}
            {"\t"}
            {"\t"}path.push(at){"\n"}
            {"\t"}
            {"\t"}at = prev[at]{"\n"}
            {"\t"}
            {"}"}
            {"\n"}
            {"\n"}
            {"\t"}reverse(path){"\n"}
            {"\t"}
            {"\n"}
            {"\t"}if path[0] == start_node {"{"}
            {"\n"}
            {"\t"}
            {"\t"}return path{"\n"}
            {"\t"}
            {"}"}
            {"\n"}
            {"\n"}
            {"\t"}return empty list{"\n"}
            {"\t"}
            {"\n"}
            {"}"}
          </code>
        </pre>
        <p id="a1bc0bd1-ef1f-42a8-a19a-228fe981c81c"></p>
        <p id="f9f2e9b5-a8f6-43b4-9429-45cfd6fed114">
          And here’s our Rust implementation:
        </p>
        <pre id="14db5333-f342-4f08-a61c-70c2447934bc" className="code">
          <code>
            fn bfs(graph: Graph, start_node: u32, end_node: u32) -&gt;
            Vec&lt;Option&lt;u32&gt;&gt; {"{"}
            {"\n"}
            {"    "}let mut queue = Queue::new();{"\n"}
            {"    "}queue.enqueue(start_node);{"\n"}
            {"\n"}
            {"    "}let mut visisted_vertices = vec![false; graph.len()];{"\n"}
            {"    "}visisted_vertices[0] = true;{"\n"}
            {"\n"}
            {"    "}let mut prev: Vec&lt;Option&lt;u32&gt;&gt; = vec![None;
            graph.len()];{"\n"}
            {"\n"}
            {"    "}while !queue.is_empty() {"{"}
            {"\n"}
            {"        "}let current_node = queue.dequeue();{"\n"}
            {"        "}for v in graph[current_node as usize].iter() {"{"}
            {"\n"}
            {"            "}if !visisted_vertices[*v as usize] {"{"}
            {"\n"}
            {"                "}queue.enqueue(*v);{"\n"}
            {"                "}visisted_vertices[*v as usize] = true;{"\n"}
            {"                "}prev[*v as usize] = Some(current_node);{"\n"}
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
            {"    "}let mut path = Vec::new();{"\n"}
            {"    "}let mut at = Some(end_node);{"\n"}
            {"    "}while at != None {"{"}
            {"\n"}
            {"        "}path.push(at);{"\n"}
            {"        "}at = prev[at.unwrap_or(0) as usize];{"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"\n"}
            {"    "}path.reverse();{"\n"}
            {"\n"}
            {"    "}if path[0].unwrap() == start_node {"{"}
            {"\n"}
            {"        "}return path;{"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"    "}return vec![];{"\n"}
            {"}"}
          </code>
        </pre>
        <p id="1478c3e5-45e5-4ac0-892f-dd886d51314e">
          I’ll go through the implementation, and highlight features of Rust I
          think could use illumination. If I miss something you don’t
          understand, feel free to email me at ...
        </p>
        <ul id="4ef0bd3d-5d98-4cda-83d9-75c85214a2f3" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>
            {" "}
            <code>let mut visisted_vertices = vec![false; graph.len()];</code> -
            initializes a <code>Vector</code> of <code>false</code> values of
            length <code>graph.len()</code>.
          </li>
        </ul>
        <ul id="3b2b06ff-1174-438e-a540-ba8e961f6614" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>
            {" "}
            <code>
              let mut prev: Vec&lt;Option&lt;u32&gt;&gt; = vec![None;
              graph.len()];
            </code>{" "}
            - initializes a <code>Vector</code> of <code>None</code> values.{" "}
            <p id="3af31b88-bdff-4292-93f8-7c572dfaf041">
              In the Rust standard library, <code>None</code> is a variant of
              the <code>Option</code> <code>enum</code>. The <code>Option</code>{" "}
              <code>enum</code> represents a value that may or may not exist; an
              optional value. An instance of an <code>Option</code> is either{" "}
              <code>None</code> or <code>Some</code>. If it is <code>Some</code>
              , then it contains a value [5]. We can see an example of{" "}
              <code>Some</code> a few lines down:{" "}
              <code>prev[*v as usize] = Some(current_node);</code>. //See how
              much needs to be explained here
            </p>
          </li>
        </ul>
        <ul id="7bcb616d-f48e-469e-9618-e8858918ee0a" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>
            <code>[*v as usize]</code> - You can see a few points where we
            access an element of a vector with <code>[*v as usize]</code>.{" "}
            <code>usize</code> is a primitive type for pointer-sized unsigned
            integers. It’s size is the number of bytes it takes to reference any
            location in memory [6]. In Rust, vectors must be indexed by numbers
            of type <code>usize</code>. Thus, we preform the type conversion
            into <code>usize</code>.
          </li>
        </ul>
        <ul id="e9ace2af-1f25-41b1-b8e6-57805d812702" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>
            {" "}
            <code>at = prev[at.unwrap_or(0) as usize];</code> -{" "}
            <code>unwrap_or</code> is a method on the <code>Option</code>{" "}
            <code>enum</code>. If the <code>Option</code> is <code>Some</code>,{" "}
            <code>unwrap_or</code> will return the contained Some value. If the
            the <code>Option</code> is <code>None</code>, <code>unwrap_or</code>{" "}
            returns the provided default, which is 0 in our case.
          </li>
        </ul>
        <ul id="8d5da7db-5191-41d4-9574-5b38e6d3ad57" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>
            {" "}
            <code>path.reverse();</code> -{" "}
          </li>
        </ul>

        <div
          style={{
            marginLeft: "-18vw",
            marginTop: "4rem",
            marginBottom: "4rem",
          }}
        >
          <div
            id={"graph-container"}
            style={{
              width: "75vw",
              height: "85vh",
              boxShadow:
                "0px 1px 8px -1px rgb(0 0 0 / 20%), 0px 3px 24px -2px rgb(0 0 0 / 5%)",
              position: "relative",
              marginBottom: "4rem",
            }}
          >
            <GraphTheoryIndex /*example={"ALPACA"}*/ />
          </div>
        </div>
        <p id="5a57d7fc-6768-4e08-b29b-e461f745e89b"></p>
        <p id="fa78692f-007e-4335-8ff0-48e42be4597d"></p>
        <p id="a2a652a4-9849-4bc1-b6b2-cccf15f6b0e2"></p>
        <p id="a791a631-c398-4207-9158-fe1aa9834adb">[1] Grokking Algorithms</p>
        <p id="f7ddf4c2-1bab-4bf8-94c0-8c2f9c9c714c">
          [2] <strong>Graph Algorithms neo4j</strong>
        </p>
        <p id="d762da41-9059-4066-90ca-43e5a149c012">
          [3] Algorithm Design manual
        </p>
        <p id="4252f5ee-cc8e-43e8-986b-c88712679445">
          [4] Rust programming language book
        </p>
        <p id="ff442d90-1a6d-4dba-83d7-5885215aa08a">
          [5]{" "}
          <a href="https://doc.rust-lang.org/std/option/enum.Option.html#variant.None">
            https://doc.rust-lang.org/std/option/enum.Option.html#variant.None
          </a>
        </p>
        <p id="68b89cf9-d20a-47db-bbf0-f0ea024bae29">
          [6]{" "}
          <a href="https://doc.rust-lang.org/std/primitive.usize.html">
            https://doc.rust-lang.org/std/primitive.usize.html
          </a>
        </p>
        <p id="23258063-8a47-4127-9652-4b6cdd70a346">
          [7] <strong>Introduction to Algorithms</strong>
        </p>
      </div>

      {/* <div
        id={"graph-container"}
        style={{
          width: "75vw",
          height: "85vh",
          boxShadow:
            "0px 1px 8px -1px rgb(0 0 0 / 20%), 0px 3px 24px -2px rgb(0 0 0 / 5%)",
          position: "relative",
        }}
      >
    
        <GraphTheoryIndex />
      </div>*/}
    </>
  );
};

export default BreadthFirstSearch;
