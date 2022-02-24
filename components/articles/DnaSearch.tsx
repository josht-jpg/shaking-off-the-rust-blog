const DnaSearch = () => (
  <div className="page-body">
    <p id="b1f61357-5c08-42b7-b35e-71207bb548db">
      <em>
        <strong>Shaking off the Rust</strong>
      </em>{" "}
      is a series of exercises with the Rust programing language. The purpose of
      the series is to improve both my and my dear reader’s abilities with Rust
      by building things. Plus, by actually building stuff, we'll learn about an
      array of technological concepts in the process. In this installment, we’re
      doing a bit of bioinformatics.
    </p>
    <p id="e3c4df7d-d0fb-4727-8a13-b9d2f4326d16"></p>
    <p id="1ca48208-ef6c-4f6b-a019-00380853de23">
      This installment's Github repo:{" "}
      <a href="https://github.com/josht-jpg/rust_dna_search">
        https://github.com/josht-jpg/rust_dna_search
      </a>
    </p>
    <h3 id="0e8a08e4-5f2c-4be4-acd3-291d847aa831">Biology Primer</h3>
    <hr id="43e10c41-860d-48ef-872b-02255e0e2f8d" />
    <p id="d0e69e96-4fa4-4148-b667-ec2ea6be9af2">
      Before beginning, you may find a short biology session worthwhile.{" "}
    </p>
    <p id="2fcf2927-dc18-45d9-b9c6-427533a0660f">
      <em>Deoxyribonucleic acid</em> (DNA) consists of a chain of sugars and
      phosphates which string together nitrogenous bases [
      <a href="https://www.amazon.ca/Gene-Intimate-History-Siddhartha-Mukherjee/dp/1476733503">
        1
      </a>
      ]. These bases, called <em>nucleotides</em>, come in four types: adenine,
      guanine, cytosine, and thymine, often abbreviated to A, G, C, and T.
      Genetic information is encoded by the sequence of nucleotides in DNA [
      <a href="https://www.macmillanlearning.com/college/ca/product/Genetics-A-Conceptual-Approach/p/1319216803">
        2
      </a>
      ].
    </p>
    <p id="0fade017-6020-438a-b5f6-effbdeca64ea">
      A set of three nucleotides is a <em>codon</em>. Codons specify amino
      acids, which are the building blocks of proteins [
      <a href="https://www.macmillanlearning.com/college/ca/product/Genetics-A-Conceptual-Approach/p/1319216803">
        2
      </a>
      ].
    </p>
    <p id="64c64111-dfcf-4a88-9fad-7335537bbdc0">
      In computer programs, we can represent a DNA molecule as a string of
      nucleotides (here I’m using <em>string</em> in the computational sense).
      This makes the analysis of DNA particularly well suited to the area of
      algorithms and computation.
    </p>
    <h3 id="e10ba781-3e3e-4127-a886-292dcad56bdc">Getting Started</h3>
    <hr id="99ad4339-5ecb-4839-9e0f-ed620342a552" />
    <p id="81d9cb7a-101c-45df-b568-e0e9d8d1c791">
      We’ll begin by creating a new library with Cargo.{" "}
    </p>
    <pre id="c4acaa9a-19c3-45d1-8fd1-5ccd4bf919ac" className="code">
      <code>cargo new dna_search --lib{"\n"}cd dna_search</code>
    </pre>
    <h3 id="505cc283-7636-474c-ac07-09a14b1b055c">Declaring some Types</h3>
    <hr id="2879b24d-948c-40ef-89d3-624b4ee2d7cd" />
    <p id="1e5dbcf3-de01-49db-b2f7-722c99d3ca03">
      A great way to represent a nucleotide in our Rust program is with an{" "}
      <code>enum</code>:
    </p>
    <pre id="d5567174-922f-4469-919f-548c0df11cf0" className="code">
      <code>
        //lib.rs{"\n"}
        {"\n"}#[derive(Copy, Clone, PartialEq, Eq, PartialOrd, Ord, Hash)]
        {"\n"}enum Nucleotide {"{"}
        {"\n"}
        {"    "}A,{"\n"}
        {"    "}C,{"\n"}
        {"    "}G,{"\n"}
        {"    "}T,{"\n"}
        {"}"}
      </code>
    </pre>
    <p id="aa4ec0b7-658d-40e4-8cc8-33a711780d8f">
      If the <code>derive</code> attribute is new to you, I recommend taking a
      glance at{" "}
      <a href="https://doc.rust-lang.org/book/appendix-03-derivable-traits.html?highlight=%5Bderive#appendix-c-derivable-traits">
        Appendix C of The Rust Programming Language Book.
      </a>{" "}
      As we go through the code, I’ll explain when and why we need each of these
      traits.
    </p>
    <p id="445e8702-63ff-4472-a26f-350bc1e99cca"></p>
    <p id="774656f2-da32-4e5f-8faa-57e504a6f7f8">
      To prevent contaminating our code with{" "}
      <a href="https://refactoring.com/catalog/replaceMagicLiteral.html">
        <em>magic literals</em>
      </a>
      , I’ve created a constant for the number of nucleotides in a codon:
    </p>
    <pre id="90645e51-e94e-400d-abd5-739aa2063b70" className="code">
      <code>const NUCLEOTIDES_IN_CODON: usize = 3;</code>
    </pre>
    <p id="8c051fd9-d232-4918-b80b-38d70779ddb2"></p>
    <p id="ccb81b63-8c90-46a7-9d57-4cb5adf66b63">
      We’ll declare types for a codon and a gene. A codon can be represented as
      a tuple of three nucleotides, and a gene can be represented as a vector of
      codons.
    </p>
    <pre id="cc418bd4-7929-4970-9b9e-f5aa3da9537a" className="code">
      <code>
        type Codon = (Nucleotide, Nucleotide, Nucleotide);{"\n"}type Gene =
        Vec&lt;Codon&gt;;
      </code>
    </pre>
    <p id="fec9d76d-98ee-4649-a69a-c7ce6026b8c6"></p>
    <h3 id="4d303c5c-24aa-4c47-af9c-6f0d965c2838">
      Converting a String to Nucleotides
    </h3>
    <hr id="c74a8efe-81b7-474c-ab15-501a1199a518" />
    <p id="315e2ca3-f870-4206-a31f-bf60e1d57509">
      We’re going to assume that the data we are working with is a string of
      nucleotides, e.g.
    </p>
    <p id="c92a19a1-7849-48bc-b5e9-a326ed09e915">
      {" "}
      <code>let gene_str = "ATTCGCA";</code>. So we’ll want a helper function to
      convert a <em>string slice</em> into a vector of <code>Nucleotide</code>s.
      We’ll call this <code>str_to_nucleotides</code>.{" "}
    </p>
    <pre id="dee0b2ae-0306-4e8c-b356-72602c71994f" className="code">
      <code>
        fn str_to_nucleotides(s: &amp;str) -&gt; Vec&lt;Nucleotide&gt; {"{"}
        {"\n"}
        {"    "}s.chars(){"\n"}
        {"        "}.map(|c| match c {"{"}
        {"\n"}
        {"            "}'A' =&gt; Nucleotide::A,{"\n"}
        {"            "}'C' =&gt; Nucleotide::C,{"\n"}
        {"            "}'G' =&gt; Nucleotide::G,{"\n"}
        {"            "}'T' =&gt; Nucleotide::T,{"\n"}
        {"            "}_ =&gt; panic!("Not a nucleotide"),{"\n"}
        {"        "}
        {"}"}){"\n"}
        {"        "}.collect(){"\n"}
        {"}"}
      </code>
    </pre>
    <p id="88c0c0e3-02ac-4db8-898d-bb33ed13f991">
      The ability to use abstractions like <code>map</code> without hurting
      performance is one of the reasons why I love Rust so darn much.{" "}
    </p>
    <h3 id="9273f8a2-72c6-440c-8196-f21fec492e40">Nucleotide Frequencies</h3>
    <hr id="c518deb7-1408-4fa3-9119-af56788aabc9" />
    <p id="a6955098-2fd6-41bd-b7d8-bbe6c50adb05">
      Let’s warm up with a program to calculate nucleotide frequencies of a
      piece of DNA. That is, we’ll count the number of occurrences of each
      nucleotide. Here’s some pseudocode for this algorithm:
    </p>
    <pre id="078d06c9-c796-41a7-8cc9-a9a81ca16ab2" className="code">
      <code>
        nucleotide_frequency(dna) returning hash map with keys of type
        Nucleotide and values of type integer {"{"}
        {"\n"}
        {"    "}frequencies = empty HashMap;{"\n"}
        {"\t"}
        {"\t"}insert (A, 0) into frequencies{"\n"}
        {"\t"}
        {"\t"}insert (T, 0) into frequencies{"\n"}
        {"\t"}
        {"\t"}insert (G, 0) into frequencies{"\n"}
        {"\t"}
        {"\t"}insert (C, 0) into frequencies{"\n"}
        {"\n"}
        {"    "}for each nucleotide in dna {"{"}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}frequencies[nucleotide] = frequenices[nucleotide] + 1{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"\n"}
        {"    "}return frequencies{"\n"}
        {"}"}
      </code>
    </pre>
    <p id="5fe71756-fd80-468d-812f-0400f5b90c00"></p>
    <p id="a377dbe7-8193-439a-a2eb-e6da33c38f3a">
      And here’s the Rust implementation:
    </p>
    <pre id="80146a15-2cae-46fd-9bf3-0d48ea461fae" className="code">
      <code>
        use std::collections::HashMap;{"\n"}
        {"\n"}fn nucleotide_frequency(dna: &amp;[Nucleotide]) -&gt;
        HashMap&lt;Nucleotide, u32&gt; {"{"}
        {"\n"}
        {"    "}let mut frequencies: HashMap&lt;Nucleotide, u32&gt; =
        HashMap::from([{"\n"}
        {"        "}(Nucleotide::A, 0),{"\n"}
        {"        "}(Nucleotide::T, 0),{"\n"}
        {"        "}(Nucleotide::G, 0),{"\n"}
        {"        "}(Nucleotide::C, 0),{"\n"}
        {"    "}]);{"\n"}
        {"\n"}
        {"    "}for nucleotide in dna {"{"}
        {"\n"}
        {"        "}increment_nucleotide_count(&amp;mut frequencies,
        nucleotide);{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"\n"}
        {"    "}return frequencies;{"\n"}
        {"}"}
        {"\n"}
        {"\n"}fn increment_nucleotide_count(frequencies: &amp;mut
        HashMap&lt;Nucleotide, u32&gt;, nucleotide: &amp;Nucleotide) {"{"}
        {"\n"}
        {"    "}*frequencies.get_mut(nucleotide).unwrap() += 1;{"\n"}
        {"}"}
      </code>
    </pre>
    <p id="9f0ee30f-a3c1-4085-89ea-9e72bc711423">
      The need arises for our <code>Nucleotide</code> <code>enum</code> to
      derive the <code>Hash</code> trait. Implementing <code>Hash</code> allows
      us to use <code>Nucleotide</code>s as keys in a <code>HashMap</code> [
      <a href="https://doc.rust-lang.org/std/hash/trait.Hash.html">3</a>].
      Without deriving <code>Hash</code>, the compiler will throw this error:{" "}
      <code>the trait bound Nucleotide: Hash is not satisfied</code>.
    </p>
    <p id="f483c94f-4e6c-4baf-8235-204f1df15408"></p>
    <p id="384015a5-405e-44ac-a5a4-9e4c6a7659e1">
      I’ll also make note of this ugly line of code:
    </p>
    <p id="9200748f-be4c-4a50-92e8-1260ff7253f3">
      <code>*frequencies.get_mut(nucleotide).unwrap() += 1;</code>
    </p>
    <p id="22477e7b-6214-4b82-a156-4640a7305dbe">
      This increments a value within our <code>frequencies</code>{" "}
      <code>HashMap</code>. I’ll go into some gory details. Skip ahead if you
      aren’t curious.
    </p>
    <div className="indented">
      <hr id="7661b44a-3597-4dcb-900b-597c1ff9bbc1" />
      <p id="d1283421-60e8-4105-8c35-39a06d7fb4a0">
        The Rust docs tell us that the <code>get_mut</code> method takes a
        possible key and “returns a mutable reference to the value corresponding
        to the key” [
        <a href="https://doc.rust-lang.org/std/collections/struct.HashMap.html#method.get_mut">
          4
        </a>
        ].{" "}
      </p>
      <p id="345758f0-57e7-4151-ba12-14e34aef7c94">
        There is generally no guarantee that a <code>HashMap</code> contains the
        key given to <code>get_mut</code>. Thus, <code>get_mut</code> returns an{" "}
        <code>Option</code>. If you’re unfamiliar with <code>Option</code>s in
        Rust, I suggest reading{" "}
        <a href="https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html?highlight=option#the-option-enum-and-its-advantages-over-null-values">
          this section of the Rust Programming Language Book
        </a>
        .{" "}
      </p>
      <p id="b153a41d-6968-4120-a484-d303c7847e64">
        Since <code>get_mut</code> returns an <code>Option</code>, the{" "}
        <code>unwrap</code> method is necessary. The <code>unwrap</code> method
        accesses the data within the <code>Option</code>’s <code>Some</code>{" "}
        value [<a href="https://doc.rust-lang.org/book/">5</a>].{" "}
      </p>
      <p id="fb73f79e-5999-4219-9238-9421a641b4ad">
        There’s a similar method to <code>unwrap</code> that we could use here -
        the <code>expect</code> method. <code>expect</code> is similar to{" "}
        <code>unwrap</code>, but allows us to specify an error message if the{" "}
        <code>Option</code> it is operating on holds <code>None</code> [
        <a href="https://doc.rust-lang.org/book/">5</a>]. In most cases, I
        prefer using the <code>expect</code> method because it makes the code
        more explicit and helps with debugging. But in this case, we actually
        know that the <code>Option</code> returned from <code>get_mut</code>{" "}
        won’t be <code>None</code> (since we’ve initialized{" "}
        <code>frequencies</code> with values for each kind of{" "}
        <code>Nucleotide</code>). This makes <code>expect</code> unnecessary.
      </p>
      <p id="94efc9f3-54c2-4b44-a041-1bc6c9ca67fe">
        Finally, note that we cannot preform the <code>+=</code> operation on
        the <code>&amp;mut i32</code> type. This is why we dereference (in Rust,
        we deference with <code>*</code>):{" "}
        <code>*frequencies.get_mut(nucleotide).unwrap() += 1</code>
      </p>
      <hr id="6c30328d-0763-4171-a320-d8d6301e049e" />
    </div>
    <p />
    <p id="3eb1110f-b06e-4594-be91-d988640f2825"></p>
    <p id="abc428b7-9386-42bd-ad8c-5b3376c60072">
      Here’s a test for our <code>nucleotide_frequency</code> function:
    </p>
    <pre id="9ea59a1f-6464-44b4-8855-b2f79c084e43" className="code">
      <code>
        // lib.rs{"\n"}
        {"\n"}mod tests {"{"}
        {"\t"}
        {"\n"}
        {"\t"}
        {"\t"}use super::*;{"\n"}
        {"\t"}
        {"\n"}
        {"\t"}
        {"\t"}#[test]{"\n"}
        {"    "}fn nucleotide_frequency_test() {"{"}
        {"\n"}
        {"        "}let dna_str = "ATATCTTAGAGGGAG";{"\n"}
        {"        "}let freq =
        nucleotide_frequency(&amp;str_to_nucleotides(&amp;dna_str));{"\n"}
        {"\n"}
        {"        "}assert_eq!(freq.get(&amp;Nucleotide::A), Some(&amp;5));
        {"\n"}
        {"        "}assert_eq!(freq.get(&amp;Nucleotide::T), Some(&amp;4));
        {"\n"}
        {"        "}assert_eq!(freq.get(&amp;Nucleotide::C), Some(&amp;1));
        {"\n"}
        {"        "}assert_eq!(freq.get(&amp;Nucleotide::G), Some(&amp;5));
        {"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"}"}
      </code>
    </pre>
    <h3 id="56bb5820-e772-4161-80d4-541a76888c30">Searching DNA for a Codon</h3>
    <hr id="6b7c377f-7dbb-44ba-bf54-f9ee630b17fc" />
    <p id="b74fdb2b-fb21-4e1b-b1be-26ee44520b33">
      Much like the bit is the fundamental unit of computation, the gene, which
      is a section of DNA, is the fundamental unit of biological information [
      <a href="https://www.macmillanlearning.com/college/ca/product/Introduction-to-Genetic-Analysis/p/1319114784">
        6
      </a>
      ][
      <a href="https://www.amazon.ca/Gene-Intimate-History-Siddhartha-Mukherjee/dp/1476733503">
        1
      </a>
      ]. Searching through a gene for a specific codon is a common problem in
      bioinformatics [
      <a href="https://www.manning.com/books/classic-computer-science-problems-in-python">
        7
      </a>
      ]. Let’s try it.
    </p>
    <p id="8054015f-0f47-407e-9c33-fbd223dcc886"></p>
    <p id="fd9ce548-71a9-408c-ad71-d0ec967dfbcd">
      We’ll make another helper function, similar to{" "}
      <code>str_to_nucleotides</code>, to convert a string slice representing
      DNA into a <code>Gene</code>. We’ll call the function{" "}
      <code>str_to_gene</code>:
    </p>
    <pre id="52e62e03-f69f-4fb6-b44f-6460c7e014a5" className="code">
      <code>
        fn str_to_gene(s: &amp;str) -&gt; Gene {"{"}
        {"\n"}
        {"    "}let nucleotides = str_to_nucleotides(s);{"\n"}
        {"    "}let num_nucleotides_in_codons = nucleotides.len() -
        (nucleotides.len() % NUCLEOTIDES_IN_CODON);{"\n"}
        {"\n"}
        {"    "}return (0..num_nucleotides_in_codons){"\n"}
        {"        "}.step_by(NUCLEOTIDES_IN_CODON){"\n"}
        {"        "}.map(|i| (nucleotides[i], nucleotides[i + 1], nucleotides[i
        + 2])){"\n"}
        {"        "}.collect();{"\n"}
        {"}"}
      </code>
    </pre>
    <p id="371cb6f2-5b96-4537-9870-29cde0d56829">
      We are not considering any nucleotides that are not a part of a codon. For
      example, if we are given <code>ATTCACGG</code>, the nucleotides{" "}
      <code>GG</code> will be ignored as they do not fit within a multiple of
      three. This is why <code>num_nucleotides_in_codons</code> exists.
    </p>
    <p id="1729c7f8-809a-4dfb-9b40-3651b86231a6"></p>
    <p id="309d2bbd-94e2-47ad-abc0-22a25f8e614e">
      We group the remaining nucleotides into codons with the{" "}
      <code>step_by</code> method, which allows us to take custom sized steps.{" "}
    </p>
    <p id="2d4ff19b-14ca-422a-aa5d-2b1e37a8cace"></p>
    <p id="45080f3a-9df9-49bd-b05b-7fdfabee1715">
      The line{" "}
      <code>
        .map(|i| (nucleotides[i], nucleotides[i + 1], nucleotides[i + 2]))
      </code>{" "}
      requires implementation of <code>Copy</code> and <code>Clone</code>{" "}
      triats. The Rust docs tell us that <code>Clone</code> provides the ability
      to explicitly duplicate an object [
      <a href="https://doc.rust-lang.org/std/clone/trait.Clone.html">8</a>] and
      that Copy (which requires <code>Clone</code>) provides the ability to
      duplicate values by copying bits [
      <a href="https://doc.rust-lang.org/std/marker/trait.Copy.html">9</a>].{" "}
    </p>
    <p id="8e9b0ca1-b086-4939-b9ca-61e396429493">
      If <code>Nucleotide</code> did not implement these traits, the compiler
      would scold us with:{" "}
    </p>
    <p id="6f52fa86-71ce-4cfd-82e9-52f28603e47a">
      <code>cannot move out of index of `Vec&lt;Nucleotide&gt;`</code>
    </p>
    <p id="e6445c28-553e-4c22-8d5d-e9e474d12d9b">
      <code>
        move occurs because value has type `Nucleotide`, which does not
        implement the `Copy` trait
      </code>
    </p>
    <p id="25e6f9fc-2ca0-4608-8364-bbd5e6fa6435"></p>
    <p id="6ff80da8-5f80-4257-beae-a2f5c43082bd">
      To search the given gene for a codon, we’ll use <em>binary search:</em>{" "}
    </p>
    <div className="indented">
      <p id="a18fe044-2026-44e6-a8ef-e555053d9f5a">
        Binary search requires the structure it’s operating on to be sorted [
        <a href="https://www.manning.com/books/classic-computer-science-problems-in-python">
          7
        </a>
        ]. So we’ll start by sorting the codons in our gene by alphabetical
        order.{" "}
      </p>
      <p id="bf4968e7-b99d-417c-ba8b-f139c0d62998">
        We’ll continue the binary search algorithm by comparing our target
        codon,{" "}
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
        , with the middle codon in the sorted gene (that is, the (
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
                        <mi>n</mi>
                        <mn>2</mn>
                      </mfrac>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      \frac{"{"}n{"}"}
                      {"{"}2{"}"}
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: "1.040392em",
                      verticalAlign: "-0.345em",
                    }}
                  />
                  <span className="mord">
                    <span className="mopen nulldelimiter" />
                    <span className="mfrac">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.695392em" }}
                          >
                            <span style={{ top: "-2.6550000000000002em" }}>
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
                                    n
                                  </span>
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
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        )nd codon, where{" "}
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
                      <mi>n</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">n</annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: "0.43056em", verticalAlign: "0em" }}
                  />
                  <span className="mord mathnormal">n</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        is the number of codons in the gene).{" "}
      </p>
      <p id="9899bb70-4c51-485d-9fba-6d5a90c4fb49">
        If{" "}
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
        is less* than the gene’s (
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
                        <mi>n</mi>
                        <mn>2</mn>
                      </mfrac>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      \frac{"{"}n{"}"}
                      {"{"}2{"}"}
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: "1.040392em",
                      verticalAlign: "-0.345em",
                    }}
                  />
                  <span className="mord">
                    <span className="mopen nulldelimiter" />
                    <span className="mfrac">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.695392em" }}
                          >
                            <span style={{ top: "-2.6550000000000002em" }}>
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
                                    n
                                  </span>
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
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        )nd codon, we discard the second half of the sorted gene. If{" "}
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
        is greater, we discard the first half.{" "}
      </p>
      <p id="7113ef42-13b6-4f3b-93c5-c62e0c5fd6c6">
        Binary search works by repeating this process until we either find the
        target codon or complete{" "}
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
                        <mrow>
                          <mi>log</mi>
                          <mo>⁡</mo>
                        </mrow>
                        <mn>2</mn>
                      </msub>
                      <mi>n</mi>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      \log_2 n
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: "0.93858em",
                      verticalAlign: "-0.24414em",
                    }}
                  />
                  <span className="mop">
                    <span className="mop">
                      lo<span style={{ marginRight: "0.01389em" }}>g</span>
                    </span>
                    <span className="msupsub">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.20696799999999996em" }}
                          >
                            <span
                              style={{
                                top: "-2.4558600000000004em",
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
                            style={{ height: "0.24414em" }}
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
                  <span className="mord mathnormal">n</span>
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>{" "}
        steps (if the target codon is not present in the gene) [
        <a href="https://www.algorist.com/">10</a>].
      </p>
      <p id="d9edb729-3361-421b-a3a0-e305052829fa">
        *By <em>less</em>, I mean{" "}
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
        proceeds the gene’s (
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
                        <mi>n</mi>
                        <mn>2</mn>
                      </mfrac>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      \frac{"{"}n{"}"}
                      {"{"}2{"}"}
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: "1.040392em",
                      verticalAlign: "-0.345em",
                    }}
                  />
                  <span className="mord">
                    <span className="mopen nulldelimiter" />
                    <span className="mfrac">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: "0.695392em" }}
                          >
                            <span style={{ top: "-2.6550000000000002em" }}>
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
                                    n
                                  </span>
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
                </span>
              </span>
            </span>
          </span>
          <span>﻿</span>
        </span>
        )nd codon in lexical order.
      </p>
    </div>
    <p />
    <p id="3e9cdaa0-d776-43d6-ac7a-f92032f55c67"></p>
    <p id="c2f26aa3-f71c-4ca3-b468-eedabcc3c09b">
      We’ll create a function called <code>binary_search_for_codon</code> to do
      all that. Again, I’ll provide pseudocode, followed by a Rust
      implementation.
    </p>
    <pre id="9d6443fa-cb9b-4976-98c2-45086250f3cb" className="code">
      <code>
        binary_search_for_codon(gene, target_codon) returning bool {"{"}
        {"\n"}
        {"\t"}
        {"\t"}sort(gene){"\n"}
        {"\t"}
        {"\n"}
        {"\t"}
        {"\t"}low = 0{"\n"}
        {"\t"}
        {"\t"}high = length(gene) - 1{"\n"}
        {"\n"}
        {"\t"}
        {"\t"}while low &lt;= high {"{"}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}middle_codon_index = floor((low + high) / 2){"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}middle_codon = gene[middle_codon_indedx]{"\n"}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}if gene[middle_codon_index] &lt; target_codon {"{"}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}low = middle_codon_index + 1{"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"}"} else if gene[middle_codon_index] &gt; target_codon {"{"}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}high = middle_codon_index - 1{"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"}"} else {"{"}
        {"\n"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}
        {"\t"}return true{"\n"}
        {"\t"}
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
        {"\t"}return false{"\n"}
        {"}"}
      </code>
    </pre>
    <hr id="1ec090be-bf37-4ad8-85a2-6b495a2b15a4" />
    <pre id="97bed3a3-123f-4631-a0ba-54eb606b1c82" className="code">
      <code>
        fn binary_search_for_codon(sorted_gene: &amp;Gene, target_codon:
        &amp;Codon) -&gt; bool {"{"}
        {"\n"}
        {"    "}let mut low = 0;{"\n"}
        {"    "}let mut high = sorted_gene.len() - 1;{"\n"}
        {"\n"}
        {"    "}while low &lt;= high {"{"}
        {"\n"}
        {"        "}let middle_codon_index = (low + high) / 2;{"\n"}
        {"        "}let middle_codon = &amp;sorted_gene[middle_codon_index];
        {"\n"}
        {"\n"}
        {"        "}if middle_codon &lt; target_codon {"{"}
        {"\n"}
        {"            "}low = middle_codon_index + 1;{"\n"}
        {"        "}
        {"}"} else if middle_codon &gt; target_codon {"{"}
        {"\n"}
        {"            "}high = middle_codon_index - 1;{"\n"}
        {"        "}
        {"}"} else {"{"}
        {"\n"}
        {"            "}return true;{"\n"}
        {"        "}
        {"}"}
        {"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"\n"}
        {"    "}return false;{"\n"}
        {"}"}
      </code>
    </pre>
    <p id="e3b07a0f-1018-4d41-992a-3a325dd3d398"></p>
    <p id="4fb71784-0dad-4a70-b24e-204b0f636761">
      Here’s a test for <code>binary_search_for_codon</code>:
    </p>
    <pre id="e43c5156-c506-4dfe-b9ab-068889299f58" className="code">
      <code>
        mod test {"{"}
        {"\n"}
        {"\n"}
        {"\t"}
        {"\t"}/*...*/{"\n"}
        {"\t"}
        {"\t"}
        {"\n"}
        {"\t"}
        {"\t"}#[test]{"\n"}
        {"    "}fn binary_search() {"{"}
        {"\n"}
        {"        "}let gene_str = "ATATCTTAGAGGGAGGGCTGAGGGTTTGAAGTCC";{"\n"}
        {"        "}let mut gene = str_to_gene(gene_str);{"\n"}
        {"        "}gene.sort();{"\n"}
        {"\n"}
        {"        "}let ata: Codon = (Nucleotide::A, Nucleotide::T,
        Nucleotide::A);{"\n"}
        {"        "}let atc: Codon = (Nucleotide::A, Nucleotide::T,
        Nucleotide::C);{"\n"}
        {"        "}let agg: Codon = (Nucleotide::A, Nucleotide::G,
        Nucleotide::G);{"\n"}
        {"        "}let tcc: Codon = (Nucleotide::T, Nucleotide::C,
        Nucleotide::C);{"\n"}
        {"\n"}
        {"        "}assert!(binary_search_for_codon(&amp;gene, &amp;ata));
        {"\n"}
        {"        "}assert!(!binary_search_for_codon(&amp;gene, &amp;atc));
        {"\n"}
        {"        "}assert!(binary_search_for_codon(&amp;gene, &amp;agg));
        {"\n"}
        {"        "}assert!(!binary_search_for_codon(&amp;gene, &amp;tcc));
        {"\n"}
        {"    "}
        {"}"}
      </code>
    </pre>
    <p id="92c6e8b3-9fb2-466d-b618-fa04377d02e1">
      For <code>gene.sort()</code> to work, <code>Nucleotide</code> needs to
      implement the <code>Ord</code> trait. Values of a type that implements{" "}
      <code>Ord</code> can be compared relative to one another [
      <a href="https://www.youtube.com/watch?v=h4RkCyJyXmM&t=259s">11</a>]. To
      implement <code>Ord</code>, the traits{" "}
      <a href="https://doc.rust-lang.org/std/cmp/trait.PartialOrd.html">
        <code>PartialOrd</code>
      </a>{" "}
      and{" "}
      <a href="https://doc.rust-lang.org/std/cmp/trait.Eq.html">
        <code>Eq</code>
      </a>{" "}
      are required (and <code>Eq</code> requires{" "}
      <a href="https://doc.rust-lang.org/std/cmp/trait.PartialEq.html">
        <code>PartialEq</code>
      </a>
      ).
    </p>
    <h3 id="4e731d1f-558d-419e-89b3-b24197dbd2bf">Naive Exact Matching</h3>
    <hr id="425480a0-c4e6-4a3a-810c-5ed2b3ed0bb2" />
    <p id="ebca8e18-a19f-488c-9aee-a675050c49c9">
      The <em>exact matching problem</em> consists of finding all occurrences of
      a <em>pattern</em> string{" "}
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
                  style={{ height: "0.625em", verticalAlign: "-0.19444em" }}
                />
                <span className="mord mathnormal">p</span>
              </span>
            </span>
          </span>
        </span>
        <span>﻿</span>
      </span>{" "}
      within a larger <em>text</em> string{" "}
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
                    <mi>t</mi>
                  </mrow>
                  <annotation encoding="application/x-tex">t</annotation>
                </semantics>
              </math>
            </span>
            <span className="katex-html" aria-hidden="true">
              <span className="base">
                <span
                  className="strut"
                  style={{ height: "0.61508em", verticalAlign: "0em" }}
                />
                <span className="mord mathnormal">t</span>
              </span>
            </span>
          </span>
        </span>
        <span>﻿</span>
      </span>
      , where the length of{" "}
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
                  style={{ height: "0.625em", verticalAlign: "-0.19444em" }}
                />
                <span className="mord mathnormal">p</span>
              </span>
            </span>
          </span>
        </span>
        <span>﻿</span>
      </span>{" "}
      is necessarily less than the length of{" "}
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
                    <mi>t</mi>
                  </mrow>
                  <annotation encoding="application/x-tex">t</annotation>
                </semantics>
              </math>
            </span>
            <span className="katex-html" aria-hidden="true">
              <span className="base">
                <span
                  className="strut"
                  style={{ height: "0.61508em", verticalAlign: "0em" }}
                />
                <span className="mord mathnormal">t</span>
              </span>
            </span>
          </span>
        </span>
        <span>﻿</span>
      </span>
      . To record the occurrences of{" "}
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
                  style={{ height: "0.625em", verticalAlign: "-0.19444em" }}
                />
                <span className="mord mathnormal">p</span>
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
                    <mi>t</mi>
                  </mrow>
                  <annotation encoding="application/x-tex">t</annotation>
                </semantics>
              </math>
            </span>
            <span className="katex-html" aria-hidden="true">
              <span className="base">
                <span
                  className="strut"
                  style={{ height: "0.61508em", verticalAlign: "0em" }}
                />
                <span className="mord mathnormal">t</span>
              </span>
            </span>
          </span>
        </span>
        <span>﻿</span>
      </span>
      , we’ll record the <em>offests</em>, which are the leftmost occurrences of{" "}
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
                  style={{ height: "0.625em", verticalAlign: "-0.19444em" }}
                />
                <span className="mord mathnormal">p</span>
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
                    <mi>t</mi>
                  </mrow>
                  <annotation encoding="application/x-tex">t</annotation>
                </semantics>
              </math>
            </span>
            <span className="katex-html" aria-hidden="true">
              <span className="base">
                <span
                  className="strut"
                  style={{ height: "0.61508em", verticalAlign: "0em" }}
                />
                <span className="mord mathnormal">t</span>
              </span>
            </span>
          </span>
        </span>
        <span>﻿</span>
      </span>{" "}
      [<a href="https://www.coursera.org/learn/dna-sequencing">12</a>].
    </p>
    <p id="ce374f26-6ff3-4615-9f6a-2ddf722d3829">
      For example, if we have a <em>pattern</em> <code>'ATT'</code> and{" "}
      <em>text </em>
      <code>'ATTGATTC'</code>, the offsets will be 0 and 4.
    </p>
    <p id="ce6a16e1-59ef-4668-9a0f-a95314344e07"></p>
    <p id="44fef7d8-3ac3-45a1-8962-f5162113a677">
      Optimizations for the exact matching problem can get complex. For now,
      we’ll only concern ourselves with a <em>naive</em> or <em>brute force</em>{" "}
      solution. The naive solution consists of looking at all possible positions
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
                    <mi>t</mi>
                  </mrow>
                  <annotation encoding="application/x-tex">t</annotation>
                </semantics>
              </math>
            </span>
            <span className="katex-html" aria-hidden="true">
              <span className="base">
                <span
                  className="strut"
                  style={{ height: "0.61508em", verticalAlign: "0em" }}
                />
                <span className="mord mathnormal">t</span>
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
                  style={{ height: "0.625em", verticalAlign: "-0.19444em" }}
                />
                <span className="mord mathnormal">p</span>
              </span>
            </span>
          </span>
        </span>
        <span>﻿</span>
      </span>{" "}
      could occur and checking if there is a match [
      <a href="https://www.amazon.com/Handbook-Exact-String-Matching-Algorithms/dp/0954300645">
        13
      </a>
      ].{" "}
    </p>
    <p id="95ccdf13-ad43-4d04-93a1-f0b034a52cb3"></p>
    <p id="fcb5a7ea-b51a-4a12-a57c-eed7feb1658b">
      Let’s finish this session by using the naive matching algorithm to find
      the positions of a pattern of nucleotides within a larger strand of DNA.
      As always, we’ll start with pseudocode:
    </p>
    <pre id="52d2650b-7aeb-4cfe-bc70-1cd8008f6c31" className="code">
      <code>
        naive_match(dna, target_sequence) returning list of integers {"{"}
        {"\n"}
        {"    "}target_occurance_at = empty list{"\n"}
        {"\n"}
        {"\t"}
        {"\t"}possible_starting_positions = 0 to (length(dna) -
        length(target_sequence) + 1){"\n"}
        {"\n"}
        {"    "}for i in possible_starting_possitions {"{"}
        {"\n"}
        {"        "}for j in 0 to length(target_sequence) {"{"}
        {"\n"}
        {"            "}if dna[i + j] != target_sequence[j] {"{"}
        {"\n"}
        {"                "}break{"\n"}
        {"            "}
        {"}"}
        {"\n"}
        {"\n"}
        {"            "}if j == length(target_sequence) - 1 {"{"}
        {"\n"}
        {"                "}target_occurance_at.push(i){"\n"}
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
        {"    "}return target_occurance_at{"\n"}
        {"}"}
      </code>
    </pre>
    <p id="834722a9-aecf-43f3-b8ab-9b30f929e1c0">
      And now for the Rust implementation:
    </p>
    <pre id="b5a336b2-e844-498d-ba55-8049e02d3eed" className="code">
      <code>
        fn naive_match(dna: &amp;[Nucleotide], target_sequence:
        &amp;[Nucleotide]) -&gt; Vec&lt;usize&gt; {"{"}
        {"\n"}
        {"    "}assert!(dna.len() &gt;= target_sequence.len());{"\n"}
        {"\n"}
        {"    "}let mut target_occurance_at = Vec::new();{"\n"}
        {"\n"}
        {"    "}let possible_starting_positions = 0..(dna.len() -
        target_sequence.len() + 1);{"\n"}
        {"\n"}
        {"    "}for i in possible_starting_positions {"{"}
        {"\n"}
        {"        "}for j in 0..target_sequence.len() {"{"}
        {"\n"}
        {"            "}if dna[i + j] != target_sequence[j] {"{"}
        {"\n"}
        {"                "}break;{"\n"}
        {"            "}
        {"}"}
        {"\n"}
        {"\n"}
        {"            "}if j == target_sequence.len() - 1 {"{"}
        {"\n"}
        {"                "}target_occurance_at.push(i);{"\n"}
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
        {"    "}return target_occurance_at;{"\n"}
        {"}"}
      </code>
    </pre>
    <p id="0fa89457-0236-4263-aec5-39da211f0d1f"></p>
    <p id="7a44947c-a2db-47e3-9143-6cf3ab9bbbd5">
      This implementation is pretty straightforward - no tricky Rust maneuvers
      required.
    </p>
    <p id="810b64c6-6528-4e1e-b4a3-88ba42f7b794">
      Let’s write a test to see if that’s working:
    </p>
    <pre id="7a0eaa46-5950-4fcd-a03c-1ae3c31c6f9d" className="code">
      <code>
        mod tests {"{"}
        {"\n"}
        {"\n"}
        {"\t"}
        {"\t"}/*...*/{"\n"}
        {"\n"}
        {"\t"}
        {"\t"}#[test]{"\n"}
        {"    "}fn naive_match_test() {"{"}
        {"\n"}
        {"        "}let dna = str_to_nucleotides("ATATCTTAGAGGGAGGGAGG");
        {"\n"}
        {"        "}let target_sequence = str_to_nucleotides("AGG");{"\n"}
        {"\n"}
        {"        "}let match_indices = naive_match(&amp;dna,
        &amp;target_sequence);{"\n"}
        {"\n"}
        {"        "}assert_eq!(match_indices.len(), 3);{"\n"}
        {"        "}assert_eq!(match_indices[0], 9);{"\n"}
        {"        "}assert_eq!(match_indices[1], 13);{"\n"}
        {"        "}assert_eq!(match_indices[2], 17);{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"}"}
      </code>
    </pre>
    <p id="46dcb35a-84ae-4936-a515-af9909751164">
      If that passes for you, then congratulation, today's set of exercises are
      complete!
    </p>
    <p id="8e2b923e-381e-4498-a23a-a08c3d8eb24d"></p>
    <p id="5729ad04-d84e-452f-bb95-34f4b4bc743e">
      Thanks for coding with me, friends. Becoming a great Rust programmer is a
      marathon - I hope this session has brought you one step closer.
    </p>
    <p id="abcdd191-1315-4c9d-bd27-efe2a49192b4"></p>
    <p id="54ba145c-b0f3-4dcf-8dc3-0b671db7fe1d"></p>
    <p id="f3494113-aafa-4a44-a509-60891819b71d">
      [1]{" "}
      <a href="https://www.amazon.ca/Gene-Intimate-History-Siddhartha-Mukherjee/dp/1476733503">
        Mukherjee, S. (2016).{" "}
      </a>
      <a href="https://www.amazon.ca/Gene-Intimate-History-Siddhartha-Mukherjee/dp/1476733503">
        <em>The Gene: An Intimate History. </em>
      </a>
      <a href="https://www.amazon.ca/Gene-Intimate-History-Siddhartha-Mukherjee/dp/1476733503">
        Scribner.
      </a>
    </p>
    <p id="018478a7-f279-4120-a4b9-8fef3bc603fa">
      [2]{" "}
      <a href="https://www.macmillanlearning.com/college/ca/product/Genetics-A-Conceptual-Approach/p/1319216803">
        Benjamin, P. (2003).{" "}
      </a>
      <a href="https://www.macmillanlearning.com/college/ca/product/Genetics-A-Conceptual-Approach/p/1319216803">
        <em>Genetics: A Conceptual Approach.</em>
      </a>
      <a href="https://www.macmillanlearning.com/college/ca/product/Genetics-A-Conceptual-Approach/p/1319216803">
        {" "}
        Macmillan Learning.
      </a>
    </p>
    <p id="380d1be8-5f1d-47ca-becb-f4b37e45fb07">
      [3]{" "}
      <a href="https://doc.rust-lang.org/std/hash/trait.Hash.html">
        Rust docs for the{" "}
      </a>
      <code>
        <a href="https://doc.rust-lang.org/std/hash/trait.Hash.html">Hash</a>
      </code>
      <a href="https://doc.rust-lang.org/std/hash/trait.Hash.html"> Trait</a>
    </p>
    <p id="cd0feb95-04e8-4302-8799-7d43f7227f98">
      [4]{" "}
      <a href="https://doc.rust-lang.org/std/collections/struct.HashMap.html#method.get_mut">
        Rust docs for{" "}
      </a>
      <a href="https://doc.rust-lang.org/std/collections/struct.HashMap.html#method.get_mut">
        <code>get_mut</code>
      </a>{" "}
    </p>
    <p id="4322ddd0-f22e-4547-93d3-07bbfc049f5e">
      [5]{" "}
      <a href="https://doc.rust-lang.org/book/">
        Nichols, C. and Klabnik, S. (2018).{" "}
      </a>
      <a href="https://doc.rust-lang.org/book/">
        <em>The Rust Programming Language.</em>
      </a>
      <a href="https://doc.rust-lang.org/book/"> No Starch Press.</a>
    </p>
    <p id="e0a8c28e-0943-4e6c-9d71-c23aaa8b6442">
      [6]{" "}
      <a href="https://www.macmillanlearning.com/college/ca/product/Introduction-to-Genetic-Analysis/p/1319114784">
        Griffiths, A., Doebley, J., Peichel, C., and Wassarman, D. (2015).{" "}
      </a>
      <a href="https://www.macmillanlearning.com/college/ca/product/Introduction-to-Genetic-Analysis/p/1319114784">
        <em>Introduction to Genetic Analysis</em>
      </a>
      <a href="https://www.macmillanlearning.com/college/ca/product/Introduction-to-Genetic-Analysis/p/1319114784">
        . Macmillan Learning.
      </a>
    </p>
    <p id="8d4d7fa4-e472-4e12-b8a0-a0a46e8aac50">
      [7]{" "}
      <a href="https://www.manning.com/books/classic-computer-science-problems-in-python">
        Kopec, D. (2018).{" "}
      </a>
      <a href="https://www.manning.com/books/classic-computer-science-problems-in-python">
        <em>Classic Computer Science Problems in Python. </em>
      </a>
      <a href="https://www.manning.com/books/classic-computer-science-problems-in-python">
        Manning.
      </a>
    </p>
    <p id="0034bacc-847b-4372-9660-e27191e7151b">
      [8]{" "}
      <a href="https://doc.rust-lang.org/std/clone/trait.Clone.html">
        Rust docs for the Clone trait
      </a>
    </p>
    <p id="50de1afa-9941-4810-b559-fbf49c4a4a09">
      [9]{" "}
      <a href="https://doc.rust-lang.org/std/marker/trait.Copy.html">
        Rust docs for the Copy trait
      </a>
    </p>
    <p id="03846ed8-6938-49ed-b6b7-e4ba44d90cc0">
      [10] <a href="https://www.algorist.com/">Skiena, S. (2021). </a>
      <a href="https://www.algorist.com/">
        <em>The Algorithm Design Manual, 3rd edition. </em>
      </a>
      <a href="https://www.algorist.com/">Springer Nature.</a>
    </p>
    <p id="ce830b4a-7986-4665-b11a-ff2dfe95cd0c">
      [11]{" "}
      <a href="https://www.youtube.com/watch?v=h4RkCyJyXmM&t=259s">
        Crust of Rust: Sorting Algorithms
      </a>{" "}
    </p>
    <p id="1325de04-6c05-4328-ae2b-083a714194f6">
      [12]{" "}
      <a href="https://www.coursera.org/learn/dna-sequencing">Langmead, B. </a>
      <em>
        <a href="https://www.coursera.org/learn/dna-sequencing">
          Algorithms for DNA Sequencing.
        </a>
      </em>
      <a href="https://www.coursera.org/learn/dna-sequencing"> Coursera.</a>
    </p>
    <p id="bd515c7c-a1f9-49c2-8944-b94bb54c7634">
      [13]{" "}
      <a href="https://www.amazon.com/Handbook-Exact-String-Matching-Algorithms/dp/0954300645">
        Charras, C. and Lecroq, T. (2004).{" "}
      </a>
      <a href="https://www.amazon.com/Handbook-Exact-String-Matching-Algorithms/dp/0954300645">
        <em>Handbook of Exact String-Matching Algorithms. </em>
      </a>
      <a href="https://www.amazon.com/Handbook-Exact-String-Matching-Algorithms/dp/0954300645">
        College Publications.
      </a>
    </p>
    <p id="e9915722-23cf-4557-8eb0-13409ae4c3fc"></p>
    <p id="4d6047a0-f8c6-4b13-8c9f-8e7bcb8c065d"></p>
    <p id="0527a559-ad7b-4729-a563-ae8f925ab9c7"></p>
    <p id="eeb6a1c9-443e-4996-8ca4-5152eb6974f5"></p>
    <p id="fc3d2c50-e3a8-475a-ae6f-381a56665764"></p>
  </div>
);

export default DnaSearch;
