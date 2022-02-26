import { useContext } from "react";
import EMAIL_ADDRESS from "../../constants/emailAddress";
import { IsLightModeContext } from "../../context/IsLightModeProvider";
import GraphTheoryIndex from "../../graphTheory";
import styles from "./articleStyles.module.scss";
import ReactPlayer from "react-player";

/*const WasmComponent = dynamic({
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
});*/

const BreadthFirstSearch = () => {
  const { isLightMode } = useContext(IsLightModeContext);

  return (
    <>
      <div className="page-body">
        <p id="3b64c364-7f40-4a0b-b5f0-5679301d98cd">
          <em>
            <strong>Shaking off the Rust</strong>
          </em>{" "}
          is a series of exercises with the Rust programing language. The
          purpose of the series is to improve both my and my dear reader{`'`}s
          abilities with Rust by building things. Plus, by actually building
          stuff, we{`'`}ll learn about an array of technological concepts in the
          process. In this installment, we{`'`}re going to perform breadth-first
          search.
        </p>
        <p id="85654351-75a2-4653-a241-38e43c36d322"></p>
        <p>
          This installment{`'`}s Github repo:{" "}
          <a
            href={"https://github.com/josht-jpg/rust-breadth-first-search"}
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/josht-jpg/rust-breadth-first-search
          </a>
        </p>
        <p id="85654351-75a2-4653-a241--38e43c36d324"></p>
        <p id="8832f5aa-1951-4e41-89b9-3e34040e9148">
          Rust is good. Breadth-first search is good. Good.
        </p>
        <h3
          style={{ marginBottom: "2px" }}
          id="7c57aaa2-3920-4f27-b005-d3b7a19b0274"
        >
          Blazingly Fast Intro to Graphs
        </h3>
        <hr
          style={{ marginTop: "0" }}
          id="9706ef8c-a0a2-42d4-9358-aed08e1c9275"
        />
        <p id="d10780d2-385a-4e53-8829-779b278fdc78">
          Whenever we{`'`}re dealing with graph algorithms, a <em>graph</em>{" "}
          refers to a mathematical structure that models a set of connections [
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.manning.com/books/grokking-algorithms"
          >
            1
          </a>
          ].{" "}
        </p>
        <p id="7a4e31aa-0715-4a61-a731-349b5c3b3eff">
          Graphs consist of nodes and edges. Let{`'`}s say you raise alpacas,
          and you want to find your closest LinkedIn connection that{`'`}s in
          the market for a handsome young alpaca.
        </p>
        <p id="249024ee-c628-4b10-aa03-06861e877a9c"></p>
        <figure id="60df204d-ca20-41c6-a37e-24ee95e6dacc" className="image">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          >
            <img
              style={{ width: "288px" }}
              src="https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </a>
        </figure>
        <p id="18aa694c-8dad-4bc7-9bc3-9d3d6bc3324a"></p>
        <p id="32069913-f913-4fcf-8a11-f89d22745fbb">
          Using a graph to model the situation, a node will represent a person,
          and an edge will represent a connection between two people. That could
          look like this:
        </p>
        <figure id="57080998-c6c8-44ab-ab2a-10d487196b80" className="image">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://cdn-images-1.medium.com/max/800/1*ylHE5u8l5eOSk9M8mjr0NA.png"
          >
            <img
              style={{ width: "980px", marginLeft: "-25px" }}
              src="https://cdn-images-1.medium.com/max/800/1*ylHE5u8l5eOSk9M8mjr0NA.png"
            />
          </a>
        </figure>
        <p id="6cd43688-4be4-4d7d-881a-bb616e02e8df">
          Suppose that Megan wants to buy an alpaca. We{`'`}ll see how
          breadth-first search can help us discover Megan, and the connections
          that lead us to Megan.
        </p>
        <h3 id="0205a55f-e170-4300-9566-a6fa4130cbea">
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
          [
          <a
            target="_blank"
            rel="noreferrer"
            href="https://neo4j.com/graph-algorithms-book/"
          >
            2
          </a>
          ]. That is, it explores all nodes{" "}
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
          </span>
          ; it explores nodes in layers [
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mitpress.mit.edu/books/introduction-algorithms-third-edition"
          >
            3
          </a>
          ].
        </p>
        <p id="82c6bc7b-ca81-4962-ae0c-bf7d4554fc4f">
          Breadth-first search is helpful when we want to{" "}
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
            .<p id="77eed195-585b-4aa2-bbcd-6b63b886f7b7">or</p>
          </li>
        </ol>
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
            [
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.manning.com/books/grokking-algorithms"
            >
              1
            </a>
            ].
          </li>
        </ol>
        <p id="66b5fdb8-593d-4696-a36e-3d3cb1bb9749"></p>
        <p id="6af26a99-cd07-44b3-b630-b42add01f2a1">
          Going back to our alpaca farm, let{`'`}s visualize how breath-first
          search will find Megan, our closest potential customer (shown below is
          an applet I made for playing around with Breadth First Search, scroll
          to the bottom of this article to give it a whirl).
        </p>
        <div className={styles.playerContainer}>
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=ALQRD2HceVM"}
            controls={true}
          />
        </div>
        <p id="1d7e5b1c-5838-4d71-ab9e-f941171eed69">
          Before getting into the workings of breadth-first search and coding
          our Rust implementation, we{`'`}ll need a{" "}
          <em>blazingly fast introduction</em>
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
          to the queue data structure.
        </p>
        <h3 id="ad798dcd-e86f-4316-a118-06412a9686b2">
          Blazingly Fast Intro to Queues
        </h3>
        <hr id="e00018ed-0c9c-4b9e-94a7-2e6d5fd280a1" />
        <p id="39882b19-1ddc-4f05-acf8-7f49390d7fc0">
          Queues store a collection of data items, which are accessed in a
          first-in, first-out (FIFO) order [
          <a target="_blank" rel="noreferrer" href="https://www.algorist.com/">
            4
          </a>
          ]. The queue supports at least two operations:{" "}
        </p>
        <p id="5c209b23-8171-4018-8523-92debf12225d">
          {" "}
          - Enqueue: insert an item into the back of the queue.
        </p>
        <p id="a70d3852-5c46-4e80-ac41-0dfba1de8e1a">
          {" "}
          - Dequeue: remove and return an item from the front of the queue.
        </p>
        <p id="1e32e869-2f5e-43c8-bf48-d986e0ece75b">
          A queue is an integral piece of breadth-first search: the algorithm
          uses a queue to keep track of the nodes it has visited.
        </p>
        <h3 id="80483acd-d54e-4674-b7aa-ad8021e8b7d2">Getting Started</h3>
        <hr id="cacef74e-e84d-4ab8-9b53-ff47558173da" />
        <p id="ac7fecac-5458-474f-a8a5-b13aac494595">
          We{`'`}ll begin by creating a new library with Cargo.
        </p>
        <pre id="e800192a-a3e0-4c72-8348-7af3328d53fa" className="code">
          <code>cargo new bfs --lib{"\n"}cd bfs</code>
        </pre>
        <p id="be10be30-4fea-4035-928f-bc9fc34c9d9f"></p>
        <h3 id="84febca4-ac83-42f2-9cb2-65c3eb9b8d68">Implementing a Queue</h3>
        <hr id="6b5e0e89-0fd2-41e6-a473-6e4ff6fe2fe1" />
        <p id="10fe70bb-c199-4c98-8240-5e2acd38c22d">
          We{`'`}ll use a <code>struct</code> to implement our queue.
        </p>
        <pre id="4e8631b1-9a51-4dde-b73d-e807774b8aac" className="code">
          <code>
            {"//"} lib.rs {"\n"}
            {"\n"}struct Queue&lt;T&gt; {"{"}
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
          we are implementing the <code>Queue</code> <code>struct</code> with a
          generic. Generics are stand-ins that allow us to write code that
          operates on multiple concrete types or other properties [
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doc.rust-lang.org/book/"
          >
            5
          </a>
          ].{" "}
        </p>
        <p id="cd37bfe2-120f-4567-9fa3-0ce857931eba">
          If you{`'`}re unfamiliar with Rust{`'`}s generic types, I suggest
          reading{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doc.rust-lang.org/book/ch10-01-syntax.html"
          >
            section 10.1 of the Rust programming language book
          </a>
          . Generics are an essential component of a Rust programmer{`'`}s
          toolkit.
        </p>
        <p id="1f8e8012-a2c0-4702-a4b7-8ac917bdf8b9">
          The rest of our queue implementation seems self-explanatory to me, but
          please don{`'`}t hesitate to email me at{" "}
          <a href={`mailto: ${EMAIL_ADDRESS}`}>joshtaylor361@gmail.com</a> if
          something doesn{`'`}t make sense.
        </p>
        <h3 id="b6f3403f-e319-4a29-a726-06e1df0fd59d">
          Representing a Graph in Rust
        </h3>
        <hr id="ff34fbec-68b8-46e7-a9d4-d44290f8b70c" />
        <p id="4398ab86-1f28-4f00-950c-d308fbea248b">
          We will use a <em>collection of adjacency lists</em> to represent a
          graph in our code. This collection of adjacency lists is a vector of
          size{" "}
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
          is the number of nodes in the graph. Let{" "}
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
          </span>{" "}
          denote the collection of adjacency lists. For every list{" "}
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
          We can use Rust{`'`}s custom types to help us implement our adjacency
          list representation.
        </p>
        <pre id="cfa3c4a6-1d47-4c60-a6f2-87f3f42615f8" className="code">
          <code>
            {"// "}lib.rs{"\n"}
            {"\n"}
            {"/*...*/"}
            {"\n"}
            {"\n"}type Vertex = Vec&lt;u32&gt;;{"\n"}type Graph =
            Vec&lt;Vertex&gt;;
          </code>
        </pre>
        <p id="702130cd-961e-4538-b8c4-dc39f8339f57">Nice.</p>
        <h3 id="09d37338-e05c-48b0-a50f-f6ec76f6c364">
          O l{`'`}oun t{`'`}awa se n{`'`}yara Je k{`'`}abere
        </h3>
        <hr id="bd9515d2-1a6e-4344-b34b-411327bd7afb" />
        <p id="fa655706-24f7-4ba1-a7d4-1dfb1e43aea8">
          We{`'`}ll use our alpaca example once again to help describe
          breadth-first search. The algorithm can be broken into six steps [
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.manning.com/books/grokking-algorithms"
          >
            1
          </a>
          ]:
        </p>
        <ol
          type={1}
          id="13dd5d7b-1eef-48ec-a5e4-d0b4d5557169"
          className="numbered-list"
          start={1}
        >
          <li>
            Initialize an empty queue{" "}
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
                          <mi>Q</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">Q</annotation>
                      </semantics>
                    </math>
                  </span>
                  <span className="katex-html" aria-hidden="true">
                    <span className="base">
                      <span
                        className="strut"
                        style={{
                          height: "0.8777699999999999em",
                          verticalAlign: "-0.19444em",
                        }}
                      />
                      <span className="mord mathnormal">Q</span>
                    </span>
                  </span>
                </span>
              </span>
              <span>﻿</span>
            </span>
            . This will eventually contain people we find on LinkedIn. Enqueue
            yourself.{" "}
          </li>
        </ol>
        <ol
          type={1}
          id="7afcd822-d57b-43f9-8a0c-65c7773e896a"
          className="numbered-list"
          start={2}
        >
          <li>
            Dequeue a person{" "}
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
                          <mi>p</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">p</annotation>
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
                      <span className="mord mathnormal">p</span>
                    </span>
                  </span>
                </span>
              </span>
              <span>﻿</span>
            </span>{" "}
            from{" "}
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
                          <mi>Q</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">Q</annotation>
                      </semantics>
                    </math>
                  </span>
                  <span className="katex-html" aria-hidden="true">
                    <span className="base">
                      <span
                        className="strut"
                        style={{
                          height: "0.8777699999999999em",
                          verticalAlign: "-0.19444em",
                        }}
                      />
                      <span className="mord mathnormal">Q</span>
                    </span>
                  </span>
                </span>
              </span>
              <span>﻿</span>
            </span>
            .{" "}
          </li>
        </ol>
        <ol
          type={1}
          id="6f33e804-d71b-4113-8c6f-593d1cfcd4e1"
          className="numbered-list"
          start={3}
        >
          <li>
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
                          <msub>
                            <mi>p</mi>
                            <mn>1</mn>
                          </msub>
                          <mi mathvariant="normal">.</mi>
                          <mi mathvariant="normal">.</mi>
                          <mi mathvariant="normal">.</mi>
                          <msub>
                            <mi>p</mi>
                            <mi>n</mi>
                          </msub>
                        </mrow>
                        <annotation encoding="application/x-tex">
                          p_1...p_n
                        </annotation>
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
                      <span className="mord">
                        <span className="mord mathnormal">p</span>
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
                      <span className="mord">...</span>
                      <span className="mord">
                        <span className="mord mathnormal">p</span>
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
                    </span>
                  </span>
                </span>
              </span>
              <span>﻿</span>
            </span>{" "}
            denote the people connected to{" "}
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
                          <mi>p</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">p</annotation>
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
                      <span className="mord mathnormal">p</span>
                    </span>
                  </span>
                </span>
              </span>
              <span>﻿</span>
            </span>
            . For each person{" "}
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
                            <mi>p</mi>
                            <mi>i</mi>
                          </msub>
                        </mrow>
                        <annotation encoding="application/x-tex">
                          p_i
                        </annotation>
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
                                    <span className="mord mathnormal mtight">
                                      i
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
                          <msub>
                            <mi>p</mi>
                            <mn>1</mn>
                          </msub>
                          <mi mathvariant="normal">.</mi>
                          <mi mathvariant="normal">.</mi>
                          <mi mathvariant="normal">.</mi>
                          <msub>
                            <mi>p</mi>
                            <mi>n</mi>
                          </msub>
                        </mrow>
                        <annotation encoding="application/x-tex">
                          p_1...p_n
                        </annotation>
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
                      <span className="mord">
                        <span className="mord mathnormal">p</span>
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
                      <span className="mord">...</span>
                      <span className="mord">
                        <span className="mord mathnormal">p</span>
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
                    </span>
                  </span>
                </span>
              </span>
              <span>﻿</span>
            </span>
            , check if we{`'`}ve already asked{" "}
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
                            <mi>p</mi>
                            <mi>i</mi>
                          </msub>
                        </mrow>
                        <annotation encoding="application/x-tex">
                          p_i
                        </annotation>
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
                                    <span className="mord mathnormal mtight">
                                      i
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
            if they{`'`}re interested in purchasing an alpaca. If we have
            already asked, skip to step 5.
          </li>
        </ol>
        <ol
          type={1}
          id="e6e25787-087e-4042-a40d-6a169878026b"
          className="numbered-list"
          start={4}
        >
          <li>
            Ask{" "}
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
                            <mi>p</mi>
                            <mi>i</mi>
                          </msub>
                        </mrow>
                        <annotation encoding="application/x-tex">
                          p_i
                        </annotation>
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
                                    <span className="mord mathnormal mtight">
                                      i
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
            if they want an alpaca. If so, mission accomplished - we can stop
            our search! Otherise, if{" "}
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
                            <mi>p</mi>
                            <mi>i</mi>
                          </msub>
                        </mrow>
                        <annotation encoding="application/x-tex">
                          p_i
                        </annotation>
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
                                    <span className="mord mathnormal mtight">
                                      i
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
            does not care to buy an alpaca, add{" "}
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
                            <mi>p</mi>
                            <mi>i</mi>
                          </msub>
                        </mrow>
                        <annotation encoding="application/x-tex">
                          p_i
                        </annotation>
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
                                    <span className="mord mathnormal mtight">
                                      i
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
                          <mi>Q</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">Q</annotation>
                      </semantics>
                    </math>
                  </span>
                  <span className="katex-html" aria-hidden="true">
                    <span className="base">
                      <span
                        className="strut"
                        style={{
                          height: "0.8777699999999999em",
                          verticalAlign: "-0.19444em",
                        }}
                      />
                      <span className="mord mathnormal">Q</span>
                    </span>
                  </span>
                </span>
              </span>
              <span>﻿</span>
            </span>{" "}
            and record that we have already asked them about our alpacas.
          </li>
        </ol>
        <ol
          type={1}
          id="8693d593-d486-40af-9c74-870428461b6a"
          className="numbered-list"
          start={5}
        >
          <li>
            Loop back to step 2 until{" "}
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
                          <mi>Q</mi>
                        </mrow>
                        <annotation encoding="application/x-tex">Q</annotation>
                      </semantics>
                    </math>
                  </span>
                  <span className="katex-html" aria-hidden="true">
                    <span className="base">
                      <span
                        className="strut"
                        style={{
                          height: "0.8777699999999999em",
                          verticalAlign: "-0.19444em",
                        }}
                      />
                      <span className="mord mathnormal">Q</span>
                    </span>
                  </span>
                </span>
              </span>
              <span>﻿</span>
            </span>{" "}
            is empty.
          </li>
        </ol>
        <ol
          type={1}
          id="82c7e22c-5374-4561-b542-959ef1910117"
          className="numbered-list"
          start={6}
        >
          <li>
            If the queue is empty, then we have not found any potential
            customers and we will starve.
          </li>
        </ol>
        <p id="7165cb5b-5b65-4b28-ac99-d7e468a858c2"></p>
        <p id="1ad94b81-0b8d-41bb-9f4b-1c423973a699">
          Here{`'`}s pseudocode for the algorithm, which will be followed by a
          Rust implementation. Note that we{`'`}re also recording the path from
          the <code>start_node</code> to the <code>end_node</code>, should that
          path exist. This is what the <code>prev</code> list is for, which
          records the order in which we visit nodes.
        </p>
        <pre id="5d1dc2e2-a92b-4d71-8250-97185e92691a" className="code">
          <code>
            bfs arguments {"{"}
            {"\n"}
            {"\t"}graph: an adjacency list representation of a graph,{"\n"}
            {"\t"}start_node: integer,{"\n"}
            {"\t"}end_node: integer{"\n"}
            {"}"}
            {"\n"}
            {"\n"}bfs(graph, start_node, end_node) returning path from
            start_node to end_node if path exists, otherwise empty list {"{"}
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
            {"\t"}for each v in graph[current_node] {"{"}
            {"\n"}
            {"\t"}
            {"\t"}
            {"\t"}if v == end_node {"{"}
            {"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}prev[v] = current_node{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\t"}break outer loop{"\n"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"}"}
            {"\n"}
            {"\t"}
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
            {"\t"}prev[v] = current_node{"\t"}
            {"\t"}
            {"\t"}
            {"\t"}
            {"\n"}
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
          And here{`'`}s our Rust implementation:
        </p>
        <pre id="14db5333-f342-4f08-a61c-70c2447934bc" className="code">
          <code>
            {"// "}lib.rs{"\n"}
            {"\n"}
            {"/*...*/"}
            {"\n"}
            {"\n"}fn bfs(graph: Graph, start_node: u32, end_node: u32) -&gt;
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
            {"    "}
            {`'`}outer: while !queue.is_empty() {"{"}
            {"\n"}
            {"        "}let current_node = queue.dequeue();{"\n"}
            {"        "}for v in graph[current_node as usize].iter() {"{"}
            {"\n"}
            {"            "}if *v == end_node {"{"}
            {"\n"}
            {"                "}prev[*v as usize] = Some(current_node);{"\n"}
            {"                "}break {`'`}outer;{"\n"}
            {"            "}
            {"}"}
            {"\n"}
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
            {"    "}return match path[0] {"{"}
            {"\n"}
            {"        "}Some(x) if x == start_node =&gt; path,{"\n"}
            {"        "}_ =&gt; vec![],{"\n"}
            {"    "}
            {"}"};{"\n"}
            {"}"}
          </code>
        </pre>
        <p id="1478c3e5-45e5-4ac0-892f-dd886d51314e">
          I{`'`}ll go through the implementation, and highlight features of Rust
          that could use illumination. If I miss something you don{`'`}t
          understand, again, feel free to email me at{" "}
          <a href={`mailto: ${EMAIL_ADDRESS}`}>joshtaylor361@gmail.com</a>.
        </p>
        <div style={{ fontWeight: "bold", fontSize: "1.11rem" }}>
          <ul
            id="4ef0bd3d-5d98-4cda-83d9-75c85214a2f3"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              {" "}
              <code>
                let mut visisted_vertices = vec![false; graph.len()];
              </code>{" "}
              - initializes a <code>Vector</code> of <code>false</code> values
              of length <code>graph.len()</code>.
            </li>
          </ul>
          <ul
            id="3b2b06ff-1174-438e-a540-ba8e961f6614"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              {" "}
              <code>
                let mut prev: Vec&lt;Option&lt;u32&gt;&gt; = vec![None;
                graph.len()];
              </code>{" "}
              - initializes a <code>Vector</code> of <code>None</code> values.{" "}
              <p id="3af31b88-bdff-4292-93f8-7c572dfaf041">
                In the Rust standard library, <code>None</code> is a variant of
                the <code>Option</code> <code>enum</code>. The{" "}
                <code>Option</code> <code>enum</code> represents a value that
                may or may not exist - an optional value. An instance of an{" "}
                <code>Option</code> is either <code>None</code> or{" "}
                <code>Some</code>. If it is <code>Some</code>, then it contains
                a value [
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://doc.rust-lang.org/std/option/enum.Option.html#variant.None"
                >
                  6
                </a>
                ]. We can see an example of <code>Some</code> a few lines down:{" "}
                <code>prev[*v as usize] = Some(current_node);</code>.{" "}
              </p>
            </li>
          </ul>
          <ul
            id="8390d0e2-0527-403c-8265-8c45f5d02bad"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              <code>{`'`}outer: while !queue.is_empty()</code> and{" "}
              <code>break {`'`}outer;</code> - Rust allows us to{" "}
              <code>break</code> out of an outer loop from within a nested loop
              [
              <a
                target="_blank"
                rel="noreferrer"
                href="https://doc.rust-lang.org/rust-by-example/"
              >
                7
              </a>
              ]. This is accomplished by annotating our outer loop with a{" "}
              <code>{`'`}label</code> and passing that label into the break
              statement. Note that <code>outer</code> is not a key word here -{" "}
              <code>{`'`}foo: while !queue.is_empty()</code>,{" "}
              <code>break {`'`}foo;</code> would work just as well.
            </li>
          </ul>
          <ul
            id="7bcb616d-f48e-469e-9618-e8858918ee0a"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              <code>[*v as usize]</code> - You can see a few points where we
              access an element of a vector with <code>[*v as usize]</code>.{" "}
              <code>usize</code> is a primitive type for pointer-sized unsigned
              integers. Its size is the number of bytes it takes to reference
              any location in memory [
              <a
                target="_blank"
                rel="noreferrer"
                href="https://doc.rust-lang.org/std/primitive.usize.html"
              >
                8
              </a>
              ]. In Rust, vectors must be indexed by numbers of type{" "}
              <code>usize</code>. Thus, we perform the type conversion to{" "}
              <code>usize</code>.
            </li>
          </ul>
          <ul
            id="e9ace2af-1f25-41b1-b8e6-57805d812702"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              <code>at = prev[at.unwrap_or(0) as usize];</code> -{" "}
              <code>unwrap_or</code> is a method on the <code>Option</code>{" "}
              <code>enum</code>. If the <code>Option</code> is <code>Some</code>
              , <code>unwrap_or</code> will return the contained{" "}
              <code>Some</code> value. If the the <code>Option</code> is{" "}
              <code>None</code>, <code>unwrap_or</code> returns the provided
              default, which is 0 in our case.
            </li>
          </ul>
          <ul
            id="8d5da7db-5191-41d4-9574-5b38e6d3ad57"
            className="bulleted-list"
          >
            <li style={{ listStyleType: "disc" }}>
              <pre id="156c48a6-4ab0-41f6-a394-995d384a3f32" className="code">
                <code>
                  {"\t"}
                  {"\t"}return match path[0] {"{"}
                  {"\n"}
                  {"        "}Some(p) if p == start_node =&gt; path,{"\n"}
                  {"        "}_ =&gt; vec![],{"\n"}
                  {"    "}
                  {"}"};
                </code>
              </pre>
              <p id="5a57d7fc-6768-4e08-b29b-e461f745e89b">
                Recall that <code>path</code> is a vector of type{" "}
                <code>Vec&lt;Option&lt;u32&gt;&gt;</code>. This{" "}
                <code>match</code> expression checks if the first element in{" "}
                <code>path</code> is the <code>start_node</code> we provided. If
                so, the function will return the path. If the first element is
                either <code>None</code> or not <code>start_node</code>, meaning
                there is no path from <code>start_node</code> to{" "}
                <code>end_node</code>, the function returns an empty vector.
              </p>
            </li>
          </ul>
        </div>
        <p id="fa78692f-007e-4335-8ff0-48e42be4597d"></p>
        <h3 id="b02ab199-a9aa-4409-8b5c-28675887f431">Testing</h3>
        <hr id="109ab471-4ca5-40e3-9003-31590cfb0cfe" />
        <p id="db93d331-1803-4199-9731-7c97537e3054">
          Here are two tests for our algorithm - one where there exists a path
          from <code>start_node</code> to <code>end_node</code>, and one where
          there does not.
        </p>
        <pre id="2830de18-fb7d-4ff6-8c88-934cac2ac102" className="code">
          <code>
            {"// "}lib.rs{"\n"}
            {"\n"}
            {"/*...*/"}
            {"\n"}
            {"\n"}#[cfg(test)]{"\n"}mod tests {"{"}
            {"\n"}
            {"    "}use super::*;{"\n"}
            {"\n"}
            {"    "}#[test]{"\n"}
            {"    "}fn existing_path() {"{"}
            {"\n"}
            {"        "}let G: Graph = vec![{"\n"}
            {"            "}vec![1, 2],{"\n"}
            {"            "}vec![0, 3, 4, 1],{"\n"}
            {"            "}vec![0, 4],{"\n"}
            {"            "}vec![1, 4, 5],{"\n"}
            {"            "}vec![1, 2, 3, 5],{"\n"}
            {"            "}vec![3, 4, 6],{"\n"}
            {"            "}vec![7, 5],{"\n"}
            {"            "}vec![6],{"\n"}
            {"        "}];{"\n"}
            {"\n"}
            {"        "}assert_eq!({"\n"}
            {"            "}bfs(G, 0, 7),{"\n"}
            {"            "}vec![Some(0), Some(1), Some(3), Some(5), Some(6),
            Some(7)]{"\n"}
            {"        "}){"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"\n"}
            {"    "}#[test]{"\n"}
            {"    "}fn no_existing_path() {"{"}
            {"\n"}
            {"        "}let G: Graph = vec![{"\n"}
            {"            "}vec![1, 2, 5],{"\n"}
            {"            "}vec![0, 1, 3, 4],{"\n"}
            {"            "}vec![0, 3],{"\n"}
            {"            "}vec![1, 4, 5, 2],{"\n"}
            {"            "}vec![1, 3, 5],{"\n"}
            {"            "}vec![0, 3, 4, 1],{"\n"}
            {"            "}vec![7],{"\n"}
            {"            "}vec![6],{"\n"}
            {"        "}];{"\n"}
            {"\n"}
            {"        "}assert_eq!(bfs(G, 0, 7), vec![]){"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"}"}
          </code>
        </pre>
        <p id="a2a652a4-9849-4bc1-b6b2-cccf15f6b0e2">
          If running <code>cargo test</code> doesn{`'`}t fail, then
          congratulations, you{`'`}ve implemented breadth-first search in Rust!
        </p>
        <p id="b89f1660-fb4d-4423-b4b9-40cdc20e70e6">
          I{`'`}ve made an applet for playing around with breadth-first search.
          You may wish to test your understanding of graphs and breadth-first
          search by recreating the test cases in the applet.
        </p>
        <p id="a5fd9a14-fc23-45fa-acde-43e87389e3a1">
          In a future installment of SOTR, we{`'`}ll see how to power this
          applet with WebAssembly.
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
              boxShadow: isLightMode
                ? "0px 1px 8px -1px rgb(0 0 0 / 20%), 0px 3px 24px -2px rgb(0 0 0 / 5%)"
                : "white 0 0 7px",
              position: "relative",
              marginBottom: "4rem",
            }}
          >
            <GraphTheoryIndex
            //example={"ALPACA"}
            />
          </div>
        </div>
        <p id="734142d9-28d0-4bc5-b22a-86569780c6e4">
          Thanks for coding through another installment. I hope this post has
          left you one step closer to becoming the best programmer you can be.{" "}
        </p>
        <p id="d34d30ea-f5bd-4ef2-a13a-1b6cd9b8f9f9"></p>
        <h3 id="48e8658d-89cf-40ab-bed4-7da6fd5d95ec">References </h3>
        <hr id="6e5e4a11-59d2-41ea-a617-a71bff76675f" />
        <p id="a791a631-c398-4207-9158-fe1aa9834adb">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.manning.com/books/grokking-algorithms"
          >
            [1] Bhargava, A. (2015).{" "}
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
        <p id="f7ddf4c2-1bab-4bf8-94c0-8c2f9c9c714c">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://neo4j.com/graph-algorithms-book/"
          >
            [2] Hodler, A. and Needham, M. (2019).{" "}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://neo4j.com/graph-algorithms-book/"
          >
            <em>
              Graph Algorithms: Practical Examples in Apache Spark and Neo4j.{" "}
            </em>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://neo4j.com/graph-algorithms-book/"
          >
            O{`'`}Reilly Media.
          </a>
        </p>
        <p id="76c40a4d-bbfe-4cd9-9b4b-9eb0b27025a0">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mitpress.mit.edu/books/introduction-algorithms-third-edition"
          >
            [3]
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mitpress.mit.edu/books/introduction-algorithms-third-edition"
          >
            <strong> </strong>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mitpress.mit.edu/books/introduction-algorithms-third-edition"
          >
            Cormen, T. Leiserson, C. Rivest, R. Stein, C. (2009).{" "}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mitpress.mit.edu/books/introduction-algorithms-third-edition"
          >
            <em>Introduction to Algorithms, 3rd edition.</em>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mitpress.mit.edu/books/introduction-algorithms-third-edition"
          >
            {" "}
            MIT Press.
          </a>
        </p>
        <p id="d762da41-9059-4066-90ca-43e5a149c012">
          <a target="_blank" rel="noreferrer" href="https://www.algorist.com/">
            [4] Skiena, S. (2020).{" "}
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.algorist.com/">
            <em>The Algorithm Design Manual, 3rd edition</em>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.algorist.com/">
            . Springer.
          </a>
        </p>
        <p id="4252f5ee-cc8e-43e8-986b-c88712679445">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doc.rust-lang.org/book/"
          >
            [5] Nichols, C. and Klabnik, S. (2018).{" "}
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
        <p id="ff442d90-1a6d-4dba-83d7-5885215aa08a">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doc.rust-lang.org/std/option/enum.Option.html#variant.None"
          >
            [6] Rust Documentation on Enum std::option::Option
          </a>
          .
        </p>
        <p id="f523466f-dd5e-4e92-be22-552848103f0e">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doc.rust-lang.org/rust-by-example/"
          >
            [7] Rust by Example.
          </a>
        </p>
        <p id="68b89cf9-d20a-47db-bbf0-f0ea024bae29">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doc.rust-lang.org/std/primitive.usize.html"
          >
            [8] Rust Documentation on usize.
          </a>
        </p>
        <p id="23258063-8a47-4127-9652-4b6cdd70a346"></p>
        <p id="3f034cbe-ae0d-4532-87c3-d80629899b99"></p>
      </div>
    </>
  );
};

export default BreadthFirstSearch;
