import regis from "./regis.jpg";
import Image from "next/image";
import { useRef } from "react";
import EMAIL_ADDRESS from "../../../constants/emailAddress";

const CliGame = () => {
  const codeBlockABulletA = useRef(null);
  const codeBlockABulletB = useRef(null);
  const codeBlockABulletC = useRef(null);
  const codeBlockABulletD = useRef(null);
  const codeBlockABulletE = useRef(null);
  const codeBlockABulletF = useRef(null);
  const codeBlockABulletG = useRef(null);
  const codeBlockABulletH = useRef(null);

  const codeBlockBBulletA = useRef(null);
  const codeBlockBBulletB = useRef(null);

  const codeBlockCBulletA = useRef(null);
  const codeBlockCBulletB = useRef(null);
  const codeBlockCBulletC = useRef(null);
  const codeBlockCBulletD = useRef(null);
  const codeBlockCBulletE = useRef(null);
  const codeBlockCBulletF = useRef(null);
  const codeBlockCBulletG = useRef(null);
  const codeBlockCBulletH = useRef(null);

  const codeBlockDBulletA = useRef(null);
  const codeBlockDBulletB = useRef(null);
  const codeBlockDBulletC = useRef(null);

  const scrollRefs = {
    codeBlockABulletA,
    codeBlockABulletB,
    codeBlockABulletC,
    codeBlockABulletD,
    codeBlockABulletE,
    codeBlockABulletF,
    codeBlockABulletG,
    codeBlockABulletH,
    codeBlockBBulletA,
    codeBlockBBulletB,
    codeBlockCBulletA,
    codeBlockCBulletB,
    codeBlockCBulletC,
    codeBlockCBulletD,
    codeBlockCBulletE,
    codeBlockCBulletF,
    codeBlockCBulletG,
    codeBlockCBulletH,
    codeBlockDBulletA,
    codeBlockDBulletB,
    codeBlockDBulletC,
  };

  const scrollTo = (ref) => {
    const yOffset = -45;

    const y =
      scrollRefs[ref].current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="page-body">
      <p id="9a3fcb63-842d-4729-8bf1-b4aed874af7b">
        <em>
          <strong>Shaking off the Rust</strong>
        </em>{" "}
        is a series of exercises with the Rust programing language. The purpose
        of the series is to improve both my and my dear reader{"’"}s abilities
        with Rust by building things. Plus, by actually building stuff, we{`'`}
        ll learn about an array of technological concepts in the process. In
        this installment, we’ll practice making command-line applications by
        creating a Rustacean edition of <em>Who Wants to Be a Millionaire?</em>
      </p>
      <p id="44c87702-e31d-4f66-9e55-55d16535379b"></p>
      <p id="984aa53f-5792-4ea3-be79-c25115432e4d">
        After reading this installment, you{`'`}ll have experience with:
      </p>
      <ul id="340b5f80-fc29-4d06-8714-e54312b2da51" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          The <code>clap</code> (Command-line Argument Parser) crate.{" "}
        </li>
      </ul>
      <ul id="b551c6b4-fd77-40d0-b684-0873ac9c23ab" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          Reading from a process’ standard input stream.
        </li>
      </ul>
      <ul id="559a976a-5b86-4a14-850a-e7f1a5abe70b" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          Printing to a program’s standard error stream.
        </li>
      </ul>
      <ul id="987893a2-b9b8-4a44-b942-fb936c060256" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          Generating a random number within a given range.
        </li>
      </ul>
      <ul id="c8820cc4-7a27-48fc-a87e-609cf3f15c6d" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          Converting strings to integers.
        </li>
      </ul>
      <p id="3bf50738-34b3-4517-8b54-f818359c4650"></p>
      <p id="aa844b59-c156-4447-ab13-d1ef5d4c8914">
        This installment{`'`}s Github repo:{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/josht-jpg/rustis_philbin"
        >
          https://github.com/josht-jpg/rustis_philbin
        </a>
      </p>
      <p id="b6d37829-bb9c-4524-a03b-f7a5e28c66c7"></p>
      <p id="c76cb112-c2cc-4b4b-bc23-78abed5168fd">
        My favorite programming Youtuber,{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/c/Fireship"
        >
          Fireship
        </a>
        , recently uploaded a{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=_oHByo8tiEY&t=20s"
        >
          video
        </a>{" "}
        about using Node.js to create a command-line edition of{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Who_Wants_to_Be_a_Millionaire_(American_game_show)#Hosts"
        >
          <em>Who Wants to Be a Millionaire?</em>
        </a>
        <em> </em>(with only JavaScript-related questions)<em>. </em>I’m going
        to steal this idea.
      </p>
      <p id="24f866b8-0c30-4954-8f0f-5b25c6aa19e7"></p>
      <p id="81a658bf-0080-4cb7-bde8-1e52194e0be2">
        Rust is the best language for building command-line applications. Let’s
        practice building command-line apps in Rust by creating a Rustacean
        edition of <em>Who Wants to be a Millionaire?</em>
      </p>
      <h3 id="d745251d-e0c0-4c4a-aad5-dc9f071e3f0d">
        The Rustacean Edition of Who Wants to Be a Millionaire?
      </h3>
      <hr id="a96998d2-2c3a-4d04-819d-e5ff72d02b49" />
      <p id="8bda84a3-a87f-4a10-a6bf-b92f63e62d1b">
        Here’s how the Rusteacan edition of{" "}
        <em style={{ marginRight: "5px" }}>Who Wants to Be a Millionaire?</em>
        will work.
      </p>
      <p id="666cbbb7-5b21-445c-9808-9f8198c1cda5">
        We’ll have three sets of questions: easy, medium, and hard. When
        starting the app, users can specify what level of difficulty they want
        to play. Starting the app and passing in <code>-easy</code> or{" "}
        <code>-e</code> as a command-line argument indicates the user wants only
        easy questions. <code>-medium</code> or <code>-m</code> means they want
        medium questions, <code>-hard</code> or <code>-h</code> means they went
        hard questions. No arguments indicate they want all difficulty levels.
      </p>
      <p id="07dbbfdb-21e3-4291-bc6f-3ae569f4e3ea">
        Once the user has started the game, their knowledge of Rust is put to
        the test with a series of multiple-choice questions. If the user answers
        any questions incorrectly, the game will end and they will be deemed
        forever unworthy of love or respect.
      </p>
      <h3 id="d4fd5039-6728-475f-a2f1-d93788f81e89">Getting Started</h3>
      <hr id="aca8b352-e181-4170-a49d-bd056b38f5ce" />
      <p id="c5176ee8-38e1-4660-bcf2-d9baf4e9eb2c">
        In honor of Regis Philbin - the late host of{" "}
        <em>Who Wants to Be a Millionaire? - </em>we’ll call our program{" "}
        <code>rustis_philbin</code>:
      </p>
      <pre id="4294a35f-1829-42ff-a6ae-5da55c688791" className="code">
        <code>cargo new rustis_philbin{"\n"}cd rustis_philbin</code>
      </pre>

      <div
        style={{
          margin: "2rem auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src={regis} alt="regis philbin" />
      </div>
      <p id="ddb91b35-57d7-496e-a41a-ffccbf134da7"></p>
      <p id="cf48431e-65a8-42a9-9a1a-fd0b185f7829">
        And we’ll add these dependencies to our <code>Cargo.toml</code>:
      </p>
      <pre id="4a1614a6-6757-455d-be0c-bd49e6b314fe" className="code">
        <code>
          {"// "} Cargo.toml{"\n"}
          {"\n"}
          {"/*...*/"}
          {"\n"}
          {"\n"}[dependencies]{"\n"}clap = {`"`}3{`"`}
          {"\n"}rand = {`"`}0.8.5{`"`}
          {"\n"}
        </code>
      </pre>
      <p id="de33abbe-1340-4130-b251-769f12ed892e">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.rs/clap/2.33.3/clap/"
        >
          <code>clap</code>
        </a>{" "}
        is a lovely library that (among other things) takes a lot of the
        boilerplate code out of parsing command-line arguments.
      </p>
      <p id="75d98e96-8e2d-43ca-81d9-be2d948fb39a">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://rust-random.github.io/book/"
        >
          <code>rand</code>
        </a>{" "}
        is a lovely library for random number generation.
      </p>
      <p id="8ccde5f3-4151-4316-b0b7-60efd233dc75"></p>
      <p id="560d863c-05c7-4009-9567-ab6659445815">
        We’ll split our code into three files:
      </p>
      <ul id="3e0106ef-d310-4487-9127-4fe40e0e588f" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          <code>src/main.rs</code> for our binary
        </li>
      </ul>
      <ul id="7b6d2073-d874-49e7-8f6b-34bed0e8db7f" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          <code>src/lib.rs</code> for the majority of our code
        </li>
      </ul>
      <ul id="ad95a731-6049-4f8a-aed6-d02434c95be5" className="bulleted-list">
        <li style={{ listStyleType: "disc" }}>
          <code>src/questions.rs</code> for holding the game’s multiple-choice
          questions
        </li>
      </ul>
      <p id="88f3d033-93a5-42b3-a9e9-ae59b3a8c9c1"></p>
      <h3 id="f355b678-1ac9-4227-a63e-9a5f8425e180">
        Parsing Command-Line Arguments
      </h3>
      <hr id="1b652a7e-4f7b-4ed4-91d2-843c02a57605" />
      <p id="81349cbb-da09-47e1-8079-f74614755704">
        In <code>lib.rs</code> we’ll define a <code>Settings</code> struct to
        store the difficulty settings the user provides as command-line
        arguments:
      </p>
      <pre id="d02c31d8-4073-4d47-bcaf-5f99e5155dda" className="code">
        <code>
          {`// `} lib.rs{"\n"}
          {"\n"}pub struct Settings {"{"}
          {"\n"}
          {"    "}include_easy: bool,{"\n"}
          {"    "}include_medium: bool,{"\n"}
          {"    "}include_hard: bool,{"\n"}
          {"}"}
        </code>
      </pre>
      <p id="364da590-523c-4377-88b9-bd50d4466095">
        Nice. Now let’s get some practice with <code>clap</code> by parsing the
        user’s command-line arguments.
      </p>
      <pre id="f6aa2485-501f-4617-8db2-087c64fd6971" className="code">
        <code>
          {`// `} lib.rs{"\n"}
          {"\n"}use clap::{"{"}Arg, Command{"}"}; {"\n"}
          {"\n"}
          {`/*...*/`}
          {"\n"}
          {"\n"}pub fn get_game_settings() -&gt; Settings {"{"}
          {"\n"}
          {"    "}let matches = Command::new({`"`}Who Wants to Be a Millionaire?
          (Rustacean edition){`"`}){" "}
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
          {"        "}.version({`"`}0.1.0{`"`}){"\n"}
          {"        "}.author({`"`}Joshua Taylor, joshtaylor361@gmail.com{`"`})
          {"\n"}
          {"        "}.about({`"`}Test your Rust knowledge in the command-line!
          {`"`}){"\n"}
          {"        "}.arg({" "}
          <a
            onClick={() => scrollTo("codeBlockABulletB")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➁
          </a>
          {"\n"}
          {"            "}Arg::new({`"`}easy{`"`}){" "}
          <a
            onClick={() => scrollTo("codeBlockABulletC")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➂
          </a>
          {"\n"}
          {"                "}.short({`'`}e{`'`}){" "}
          <a
            onClick={() => scrollTo("codeBlockABulletD")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➃
          </a>
          {"\n"}
          {"                "}.long({`"`}easy{`"`}){" "}
          <a
            onClick={() => scrollTo("codeBlockABulletE")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➄
          </a>
          {"\n"}
          {"                "}.help({`"`}Flags that you would like to include
          easy answers in your quiz{`"`}),{" "}
          <a
            onClick={() => scrollTo("codeBlockABulletF")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➅
          </a>
          {"\n"}
          {"        "}){"\n"}
          {"        "}.arg({"\n"}
          {"            "}Arg::new({`"`}medium{`"`}){"\n"}
          {"                "}.short({`'`}m{`'`}){"\n"}
          {"                "}.long({`"`}medium{`"`}){"\n"}
          {"                "}.help({"\n"}
          {"                    "}
          {`"`}Flags that you would like to include medium difficulty answers in
          your quiz{`"`},{"\n"}
          {"                "}),{"\n"}
          {"        "}){"\n"}
          {"        "}.arg({"\n"}
          {"            "}Arg::new({`"`}hard{`"`}){"\n"}
          {"                "}.short({`'`}h{`'`}){"\n"}
          {"                "}.long({`"`}hard{`"`}){"\n"}
          {"                "}.help({`"`}Flags that you would like to include
          hard answers in your quiz{`"`}),{"\n"}
          {"        "}){"\n"}
          {"        "}.get_matches();{"\n"}
          {"\n"}
          {"    "}let include_easy = matches.is_present({`"`}easy{`"`});{" "}
          <a
            onClick={() => scrollTo("codeBlockABulletG")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➆
          </a>
          {"\n"}
          {"    "}let include_medium = matches.is_present({`"`}medium{`"`});
          {"\n"}
          {"    "}let include_hard = matches.is_present({`"`}hard{`"`});{"\n"}
          {"\n"}
          {"    "}let include_all_difficulties = [include_easy, include_medium,
          include_hard]{"\n"}
          {"        "}.iter(){"\n"}
          {"        "}.all(|flag| !flag);{" "}
          <a
            onClick={() => scrollTo("codeBlockABulletH")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➇
          </a>
          {"\n"}
          {"\n"}
          {"    "}Settings {"{"}
          {"\n"}
          {"        "}include_easy: include_easy || include_all_difficulties,
          {"\n"}
          {"        "}include_medium: include_medium ||
          include_all_difficulties,{"\n"}
          {"        "}include_hard: include_hard || include_all_difficulties,
          {"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"}
        </code>
      </pre>
      <p id="1d08f1ad-cf00-4899-9bfc-39f89d5a6ecb" className />
      <div className="indented">
        <p id="2e3761ae-1b6a-4f4d-9869-4027a7fa2ed5">
          <strong ref={codeBlockABulletA}>➀ -</strong>{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.rs/clap/latest/clap/type.Command.html"
          >
            <code>Command</code>
          </a>{" "}
          is clap’s main type for building command-line interfaces [
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.rs/clap/latest/clap/type.Command.html"
          >
            1
          </a>
          ]. We use the <code>new</code> method to create a new{" "}
          <code>Command</code> instance.
        </p>
        <p id="5463eef0-db47-488a-8cd3-3ad0fc32f322">
          <strong ref={codeBlockABulletB}>➁ - </strong>The{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.rs/clap/latest/clap/struct.App.html#method.arg"
          >
            <code>arg</code>
          </a>{" "}
          method adds a command-line argument to the list of arguments our
          application accepts [
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.rs/clap/latest/clap/type.Command.html"
          >
            1
          </a>
          ].
        </p>
        <p id="28656222-7e84-49aa-9aa9-21b9de0063c8">
          <strong ref={codeBlockABulletC}>➂ - </strong>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.rs/clap/latest/clap/struct.Arg.html"
          >
            <code>Arg</code>
          </a>{" "}
          is a <code>struct</code> that represents a command-line argument.
        </p>
        <p id="a968f7ba-c3ac-4a1a-9f50-cac61630d5d7">
          <strong ref={codeBlockABulletD}>➃ - </strong>The <code>short</code>{" "}
          method on <code>Arg</code> sets the short version of the argument. So
          this lets users specify that they want easy questions by just entering{" "}
          <code>-e</code> when starting the game (<code>cargo run -- -e</code>).
        </p>
        <p id="dd19e6b4-c210-4c02-93f1-547bc8b06b01">
          <strong ref={codeBlockABulletE}>➄ - </strong>Just like the{" "}
          <code>short</code> method, <code>long</code> sets the long version of
          the argument: <code>cargo run -- --easy</code>. It’s traditional that
          shortened arguments are preceded with a single dash, and full-length
          arguments are preceded with two dashes [
          <a
            target="_blank"
            rel="noreferrer"
            href="https://learning.oreilly.com/library/view/command-line-rust/9781098109424/"
          >
            2
          </a>
          ]. For example, we have <code>-e</code> and <code>--easy</code>.
          Great.
        </p>
        <p id="cae2ddd3-90a3-48fd-9e9a-5d2daeed5cfd">
          <strong ref={codeBlockABulletF}>➅ - </strong>
          <code>help</code> lets the user see a description of the argument. So,
          once we get our app running, this will be printed out when the user
          enters <code>cargo run -- --help</code>:
        </p>
        <pre id="7bee3308-100d-45bc-a839-dbdca24a724e" className="code">
          <code>
            rustis_philbin 0.1.0{"\n"}Joshua Taylor, joshtaylor361@gmail.com
            {"\n"}Who Wants to Be a Millionaire? (Rustacean edition){"\n"}
            {"\n"}USAGE:{"\n"}
            {"    "}rustis_philbin.exe [OPTIONS]{"\n"}
            {"\n"}OPTIONS:{"\n"}
            {"    "}-e, --easy{"       "}Flags that you would like to include
            easy answers in your quiz{"\n"}
            {"    "}-h, --hard{"       "}Flags that you would like to include
            hard answers in your quiz{"\n"}
            {"        "}--help{"       "}Print help information{"\n"}
            {"    "}-m, --medium{"     "}Flags that you would like to include
            medium difficulty answers in your quiz{"\n"}
            {"    "}-V, --version{"    "}Print version information
          </code>
        </pre>
        <p id="a3e1bf1b-4592-4a88-a7d4-5e00cfd6ef70"></p>
        <p id="0d7fa8ef-f484-460d-94cd-10a1188c2097">
          <strong ref={codeBlockABulletG}>➆ - </strong>
          <code>is_present</code> checks if the user has entered a specified
          argument.
        </p>
        <p id="903a2e67-fc92-4c0f-86d6-a769428e4540">
          <strong>
            <strong ref={codeBlockABulletH}>➇ - </strong>
          </strong>
          If the user doesn’t specify any difficulty levels, they will receive
          questions from every difficulty level.{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.all"
          >
            <code>all</code>
          </a>{" "}
          is a method on the{" "}
          <code>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/std/iter/trait.Iterator.html#"
            >
              Iterator
            </a>
          </code>{" "}
          trait that checks if every element of an iterator matches a specified
          predicate. <code>all</code> returns a <code>bool</code> indicating
          whether or not all elements match the predicate [
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.all"
          >
            3
          </a>
          ].
        </p>
      </div>
      <p />
      <p id="4de7f175-847e-438c-8ce1-1b06fe994dbd"></p>
      <h3 id="34dee7d8-6538-4441-9672-163bf8331117">Questions</h3>
      <hr id="e1f08850-98e6-4d36-9a45-354fa0fd559a" />
      <p id="e68a370c-5f32-4de0-8a5a-72f35447b8bc">
        I’m going to store our multiple-choice questions inside a file that I’ll
        call <code>questions.rs</code>. You can place <code>questions.rs</code>{" "}
        in the <code>src</code> directory.
      </p>
      <p id="bc015937-479e-469e-a3f8-3f7a41d63fb8">
        Here are the contents of <code>questions.rs</code>. The code is boring,
        so I won’t describe or explain any of it. But please email me if you’d
        like anything here explained (
        <a href={`mailto: ${EMAIL_ADDRESS}`}>joshtaylor361@gmail.com</a>).{" "}
      </p>
      <pre id="b460aac1-fb9a-4ff7-8d2f-68172400ac08" className="code">
        <code>
          {"// "} questions.rs{"\n"}
          {"\n"}pub struct Question {"{"}
          {"\n"}
          {"    "}pub prompt: &amp;{`'`}static str,{"\n"}
          {"    "}pub incorrect_answers: [&amp;{`'`}static str; 3],{"\n"}
          {"    "}pub corrent_answer: &amp;{`'`}static str,{"\n"}
          {"}"}
          {"\n"}
          {"\n"}const NUM_QUESTIONS_PER_SET: usize = 3;{"\n"}type
          QuestionSet&lt;{`'`}a&gt; = [Question; NUM_QUESTIONS_PER_SET];{"\n"}
          {"\n"}pub const EASY_QUESTIONS: QuestionSet = [{"\n"}
          {"    "}Question {"{"}
          {"\n"}
          {"        "}prompt: {`"`}What type is this: str?{`"`},{"\n"}
          {"        "}incorrect_answers: [{`"`}Stir fry{`"`}, {`"`}String{`"`},{" "}
          {`"`}Software Test Report{`"`}],{"\n"}
          {"        "}corrent_answer: {`"`}String slice{`"`},{"\n"}
          {"    "}
          {"}"},{"\n"}
          {"    "}Question {"{"}
          {"\n"}
          {"        "}prompt: {`"`}What is a trait?{`"`},{"\n"}
          {"        "}incorrect_answers: [{"\n"}
          {"            "}
          {`"`}A data type that helps structure code by packaging related values
          together{`"`},{"\n"}
          {"            "}
          {`"`}A feature that allows you to enumerate all of a type{`'`}s
          variant
          {`"`},{"\n"}
          {"            "}
          {`"`}Stir Fry{`"`},{"\n"}
          {"        "}],{"\n"}
          {"        "}corrent_answer: {`"`}A set of method signatures that can
          be implemented by multiple types{`"`},{"\n"}
          {"    "}
          {"}"},{"\n"}
          {"    "}Question {"{"}
          {"\n"}
          {"        "}prompt: {`"`}What are the varients of Rust{`'`}s Result
          type?
          {`"`},{"\n"}
          {"        "}incorrect_answers: [{"\n"}
          {"            "}
          {`"`}Some(T), None{`"`},{"\n"}
          {"            "}
          {`"`}Some(T), Err(E){`"`},{"\n"}
          {"            "}
          {`"`}LooksGoodMate(T), HeadsUpCheifWeGotIssues(E){`"`},{"\n"}
          {"        "}],{"\n"}
          {"        "}corrent_answer: {`"`}Ok(T), Err(E){`"`},{"\n"}
          {"    "}
          {"}"},{"\n"}];{"\n"}
          {"\n"}pub const MEDIUM_QUESTIONS: QuestionSet = [{"\n"}
          {"    "}Question {"{"}
          {"\n"}
          {"        "}prompt: {`"`}Which of the following types does not
          implement the Copy trait{`"`},{"\n"}
          {"        "}incorrect_answers: [{`"`}i32{`"`}, {`"`}char{`"`}, {`"`}
          bool{`"`}],{"\n"}
          {"        "}corrent_answer: {`"`}Box{`"`},{"\n"}
          {"    "}
          {"}"},{"\n"}
          {"    "}Question {"{"}
          {"\n"}
          {"        "}prompt: {`"`}When would we use Rust{`'`}s Box type?{`"`},
          {"\n"}
          {"        "}incorrect_answers: [{"\n"}
          {"            "}
          {`"`}When we want to interact with and store data on the stack{`"`},
          {"\n"}
          {"            "}
          {`"`}When we want to access or modify a mutable static variable{`"`},
          {"\n"}
          {"            "}
          {`"`}When we want to enable multiple ownership{`"`},{"\n"}
          {"        "}],{"\n"}
          {"        "}corrent_answer: {`"`}When we want to interact with and
          store data on the heap{`"`},{"\n"}
          {"    "}
          {"}"},{"\n"}
          {"    "}Question {"{"}
          {"\n"}
          {"        "}prompt: {`"`}When is a value dropped?{`"`},{"\n"}
          {"        "}incorrect_answers: [{"\n"}
          {"            "}
          {`"`}When the program ends{`"`},{"\n"}
          {"            "}
          {`"`}When the function it{`'`}s declared in finishes execution{`"`},
          {"\n"}
          {"            "}
          {`"`}And let all the fly skimmies feel the beat Hmmmmmmm, Drrrrrop!
          {`"`},{"\n"}
          {"        "}],{"\n"}
          {"        "}corrent_answer: {`"`}When the variable that holds it goes
          out of scope{`"`},{"\n"}
          {"    "}
          {"}"},{"\n"}];{"\n"}
          {"\n"}pub const HARD_QUESTIONS: QuestionSet = [{"\n"}
          {"\t"}
          {"\t"}Question {"{"}
          {"\n"}
          {"        "}prompt: {`"`}When can a type T be Sync?{`"`},{"\n"}
          {"\t"}
          {"      "}incorrect_answers: [{"\n"}
          {"          "}
          {`"`}When T can be transferred across thread boundaries{`"`}, {"\n"}
          {"          "}
          {`"`}When T is a plumbing fixture where one can wash their hands or
          clean kitchenware{`"`}, {"\n"}
          {"          "}
          {`"`}When T is safe to be sent to another thread{`"`}
          {"\n"}
          {"        "}],{"\n"}
          {"        "}corrent_answer: {`"`}T can be Sync if and only if &amp;T
          is Send{`"`},{"\n"}
          {"    "}
          {"}"},{"\n"}
          {"    "}Question {"{"}
          {"\n"}
          {"        "}prompt: {`"`}What is the difference between these two
          loops?
          {"\n"}a) for e in some_vec {"{"}
          {"\n"}
          {"     "}...{"\n"}
          {"}"}
          {"\n"}
          {"\n"}b) for e in some_vec.iter() {"{"}
          {"\n"}
          {"    "}...{"\n"}
          {"}"}
          {`"`},{"\n"}
          {"        "}incorrect_answers: [{`"`}They are equivolent{`"`}, {`"`}
          Loop (a) will not work, loop (b) will work{`"`}, {`"`}Loop (b) will
          not work, loop (a) will work{`"`}],{"\n"}
          {"        "}corrent_answer: {`"`}loop (a) consumes some_vec, and loop
          (b) borrows some_vec{`"`},{"\n"}
          {"    "}
          {"}"},{"\n"}
          {"    "}Question {"{"}
          {"\n"}
          {"        "}prompt: {`"`}What is the difference between Rc and Arc?
          {`"`},{"\n"}
          {"        "}incorrect_answers: [{"\n"}
          {"            "}
          {`"`}Arc is used for multiple ownership. Rc is also used for multiple
          ownership, but is threadsafe.{`"`}, {"\n"}
          {"            "}
          {`"`}Rc is used for interior immutability. Arc is also used for
          interior immutability, but is threadsafe{`"`}, {"\n"}
          {"            "}
          {`"`}Rc stands for \{`"`}Reference Counted\{`"`}, and Arc stands for \
          {`"`}Async Reference Counted\{`""`}
          {"\n"}
          {"        "}],{"\n"}
          {"        "}corrent_answer: {`"`}Rc is used for multiple ownership.
          Arc is also used for multiple ownership, but is threadsafe.{`"`},
          {"\n"}
          {"    "}
          {"}"},{"\n"}];
        </code>
      </pre>
      <p id="e5fdae02-2ec4-4708-bb3f-716f0796e68b">Cool.</p>
      <p id="23c990fe-fa40-4850-8b60-0633fb7d0fd2">
        As mentioned, the user can choose which difficulty levels they want to
        play through. Let’s write a function in <code>lib.rs</code> that
        prepares the right set of questions, based on the user’s input.
      </p>
      <pre id="46cb9c72-a8b0-4a78-844c-4256725a77b8" className="code">
        <code>
          {"// "} lib.rs{"\n"}
          {"\n"}mod questions;{"\n"}use questions::*;{"\n"}
          {"\n"}fn get_questions(settings: Settings) -&gt; Vec&lt;Question&gt;{" "}
          {"{"}
          {"\n"}
          {"    "}let mut questions = vec![];{"\n"}
          {"\n"}
          {"    "}if settings.include_easy {"{"}
          {"\n"}
          {"        "}questions.extend(EASY_QUESTIONS);{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}if settings.include_medium {"{"}
          {"\n"}
          {"        "}questions.extend(MEDIUM_QUESTIONS);{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"    "}if settings.include_hard {"{"}
          {"\n"}
          {"        "}questions.extend(HARD_QUESTIONS);{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"\n"}
          {"    "}questions{"\n"}
          {"}"}
        </code>
      </pre>
      <p id="7422a6b8-bf1f-4ff2-87b0-6863bca203bb">
        Pretty straightforward I think.{" "}
      </p>
      <h3 id="822b36ea-5c6b-4b1e-ad5f-87cfbfd790a2">Running the Game</h3>
      <hr id="8106fb29-04bf-4ff5-8103-25fbd35c9f4e" />
      <p id="6baf4993-4060-45dd-962b-20ebc254f871">
        Let’s write a function to run the game.
      </p>
      <pre id="cf74008b-3ca8-472a-abd0-527c05aa8cf7" className="code">
        <code>
          pub fn run_game(settings: Settings) -&gt; Result&lt;(), io::Error&gt;{" "}
          {"{"}
          {"\n"}
          {"    "}println!({'"'}\nWho Wants to Be a Millionaire?\nLet{"'"}s
          start!\n{'"'});
          {"\n"}
          {"\n"}
          {"    "}println!({`"`}
          {`"`}\nCongratulations, you won Who Wants to Be a Millionaire!
          (Rustacean edition)\n{`"`});{"\n"}
          {"    "}Ok(()){"\n"}
          {"}"}
        </code>
      </pre>
      <p id="42275961-6335-416e-bb47-ee47d7701897">
        That’s an awful game. We should add to this function.
      </p>
      <p id="69368fdf-84ad-41e1-8890-9fc7206be682">
        We’ll start by employing that <code>get_questions</code> function we
        wrote.
      </p>
      <pre id="61bc289c-ffda-4302-8eea-1c88f2e9ecfb" className="code">
        <code>
          pub fn run_game(settings: Settings) -&gt; Result&lt;(), io::Error&gt;{" "}
          {"{"}
          {"\n"}
          {"    "}println!({`"`}\nWho Wants to Be a Millionaire?\nLet{`'`}s
          start!\n
          {`"`});
          {"\n"}
          {"\n"}
          {"\t"}
          {"\t"}let questions = get_questions(settings);{"\n"}
          {"\n"}
          {"    "}println!({`"`}\nCongratulations, You won Who Wants to Be a
          Millionaire! (Rustacean edition)\n{`"`});{"\n"}
          {"    "}Ok(()){"\n"}
          {"}"}
        </code>
      </pre>
      <p id="c33917b9-7a6f-4c06-b88c-b41f12e16aaf">
        Ok. Now we’ll print out each question. I’m going to present each
        question to the user in the following format:
      </p>
      <pre id="050a1bfb-ebfb-4e81-a011-5a8b1f731c6d" className="code">
        <code>
          What are the variants of Rust{`'`}s Result type?{"\n"}
          {"\n"}1){"      "}Some(T), None{"\n"}
          {"\n"}2){"      "}Some(T), Err(E){"\n"}
          {"\n"}3){"      "}Ok(T), Err(E){"\n"}
          {"\n"}4){"      "}LooksGoodMate(T), HeadsUpCheifWeGotIssues(E)
        </code>
      </pre>
      <p id="506a641e-8b98-4f50-974c-141e1685b8bb">
        We’ll want to randomize the placement of the correct answer (if the
        correct answer was always 3, the user may begin to discern a pattern).
        Here’s some code that does that:
      </p>
      <pre id="c4720923-09ce-4da2-baa8-9317b40359a0" className="code">
        <code>
          use rand::{"{"}thread_rng, Rng{"}"};{"\n"}
          {"\n"}pub fn run_game(settings: Settings) -&gt; Result&lt;(),
          io::Error&gt; {"{"}
          {"\n"}
          {"    "}println!({`"`}\nWho Wants to Be a Millionaire?\nLet{`'`}s
          start!\n
          {`"`});
          {"\n"}
          {"\n"}
          {"    "}let questions = get_questions(settings);{"\n"}
          {"\n"}
          {"    "}for (i, question) in questions.iter().enumerate() {"{"}
          {"\n"}
          {"        "}println!({`"`}
          {"{"}
          {"}"}
          {`"`}, question.prompt);{"\n"}
          {"\n"}
          {"        "}let correct_answer_index: u8 =
          thread_rng().gen_range(0..4);{" "}
          <a
            onClick={() => scrollTo("codeBlockBBulletA")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➀
          </a>
          {"\n"}
          {"\n"}
          {"        "}print_answers(question, correct_answer_index);{"\n"}
          {"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"\n"}
          {"    "}println!({`"`}\nCongratulations, You won Who Wants to Be a
          Millionaire! (Rustacean edition)\n{`"`});{"\n"}
          {"    "}Ok(()){"\n"}
          {"}"}
          {"\n"}
          {"\n"}fn print_answers(question: &amp;Question, correct_answer_index:
          u8) {"{"}
          {"\n"}
          {"    "}let incorrect_answers_index = |i: u8| if correct_answer_index
          &gt; i {"{"} i {"}"} else {"{"} i - 1 {"}"} as usize;{" "}
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
          {"\n"}
          {"    "}for i in 0..4 {"{"}
          {"\n"}
          {"        "}println!({"\n"}
          {"            "}
          {`"`}\n{"{"}
          {"}"})\t{"{"}
          {"}"}
          {`"`},{"\n"}
          {"            "}i + 1,{"\n"}
          {"            "}if i == correct_answer_index {"{"}
          {"\n"}
          {"                "}question.corrent_answer{"\n"}
          {"            "}
          {"}"} else {"{"}
          {"\n"}
          {"                "}
          question.incorrect_answers[incorrect_answers_index(i)]{"\n"}
          {"            "}
          {"}"}
          {"\n"}
          {"        "}){"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"}
        </code>
      </pre>
      <p id="129ee0f9-0f11-4263-b82b-66c8d3d56c2a" className />
      <div className="indented">
        <p id="d824b909-1aab-40b5-b0ea-13f9ae2b4de2">
          <strong ref={codeBlockBBulletA}>➀</strong> - Generating a random
          number in the range 0 to 3.
        </p>
        <p id="6cc821cc-8e80-467d-b547-e3b21cd284c6">
          <strong ref={codeBlockBBulletB}>➁</strong> - For any incorrect answers
          that appear after the correct answer, we need to decrement the number
          we’re using to index it. This fancy one-liner does just that.
        </p>
      </div>
      <p />
      <p id="4193e6ae-47d1-46cf-81fa-11dab87c227f"></p>
      <p id="7590dd75-0aa0-4d4e-b4d3-1dfebe4af483">
        Our next step is to get the answer from the user. Here’s some code, yo.
      </p>
      <pre id="5b7ea13c-6b77-4daf-a55b-39cb60c24836" className="code">
        <code>
          {"// "} lib.rs{"\n"}
          {"\n"}use std::io;{"\n"}
          {"\n"}pub fn run_game(settings: Settings) -&gt; Result&lt;(),
          io::Error&gt; {"{"}
          {"\n"}
          {"\t"}
          {"\t"}
          {"/*...*/"}
          {"\n"}
          {"    "}
          {"\n"}
          {"\t"}
          {"\t"}for (i, question) in questions.iter().enumerate() {"{"}
          {"\n"}
          {"\n"}
          {"\t"}
          {"\t"}
          {"\t"}
          {"\t"}
          {"/*...*/"}
          {"\n"}
          {"\n"}
          {"        "}let num_questions_left = questions.len() - i - 1;{"\n"}
          {"        "}get_answer(correct_answer_index, num_questions_left)?;
          {"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"\n"}
          {"\t"}
          {"\t"}
          {"/*...*/"}
          {"\n"}
          {"\n"}
          {"}"}
          {"\n"}
          {"\n"}fn get_answer(correct_answer_index: u8, num_questions_left:
          usize) -&gt; Result&lt;(), io::Error&gt; {"{"}
          {"\n"}
          {"\t"}
          {"\t"}let mut input = String::new();{"\n"}
          {"    "}let stdin = io::stdin();{" "}
          <a
            onClick={() => scrollTo("codeBlockCBulletA")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➀
          </a>
          {"\n"}
          {"    "}stdin.read_line(&amp;mut input)?;{" "}
          <a
            onClick={() => scrollTo("codeBlockCBulletB")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➁
          </a>
          {"\n"}
          {"\n"}
          {"    "}loop {"{ "}
          <a
            onClick={() => scrollTo("codeBlockCBulletC")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➂
          </a>
          {"\n"}
          {"        "}match input.trim().parse::&lt;u8&gt;() {"{ "}
          <a
            onClick={() => scrollTo("codeBlockCBulletD")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➃
          </a>
          {"\n"}
          {"            "}Ok(input) if input &gt;= 1 &amp;&amp; input &lt;= 4
          =&gt; {"{ "}
          <a
            onClick={() => scrollTo("codeBlockCBulletE")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➄
          </a>
          {"\n"}
          {"                "}handle_valid_input(input, correct_answer_index,
          num_questions_left);{"\n"}
          {"                "}break;{"\n"}
          {"            "}
          {"}"}
          {"\n"}
          {"            "}_ =&gt; {"{"}
          {"\n"}
          {"                "}println!({'"'}Sorry, I wasn{`'`}t able to
          understand that. Could you repeat your answer?{'"'});{"\n"}
          {"                "}input.clear();{" "}
          <a
            onClick={() => scrollTo("codeBlockCBulletF")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➅
          </a>
          {"\n"}
          {"                "}stdin.read_line(&amp;mut input)?;{"\n"}
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
          {"    "}Ok(()){"\n"}
          {"}"}
          {"\n"}
          {"\n"}fn handle_valid_input(input: u8, correct_answer_index: u8,
          num_questions_left: usize) {"{"}
          {"\n"}
          {"    "}let is_corrent_answer = input - 1 == correct_answer_index;
          {"\n"}
          {"    "}if is_corrent_answer {"{"}
          {"\n"}
          {"        "}if num_questions_left &gt; 0 {"{"}
          {"\n"}
          {"            "}println!({"\n"}
          {"                "}
          {`"`}\nCorrect, well done! {"{"}
          {"}"} more {"{"}
          {"}"} to go.\n{`"`},{"\n"}
          {"                "}num_questions_left,{"\n"}
          {"                "}if num_questions_left == 1 {"{ "}
          <a
            onClick={() => scrollTo("codeBlockCBulletG")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➆
          </a>
          {"\n"}
          {"                    "}
          {`"`}question{`"`}
          {"\n"}
          {"                "}
          {"}"} else {"{"}
          {"\n"}
          {"                    "}
          {`"`}questions{`"`}
          {"\n"}
          {"                "}
          {"}"}
          {"\n"}
          {"            "}){"\n"}
          {"        "}
          {"}"}
          {"\n"}
          {"    "}
          {"}"} else {"{"}
          {"\n"}
          {"        "}println!({`"`}\nIncorrect! Try again anytime.{`"`});{"\n"}
          {"        "}std::process::exit(0){" "}
          <a
            onClick={() => scrollTo("codeBlockCBulletH")}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ➇
          </a>
          {"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"}"}
        </code>
      </pre>
      <p id="66a740d4-9b88-498f-9356-77c338db3dff" className />
      <div className="indented">
        <p id="d9adda44-7b6b-4b39-9a65-4bd182257312">
          <strong ref={codeBlockCBulletA}>➀</strong> -{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doc.rust-lang.org/stable/std/io/fn.stdin.html"
          >
            <code>io::stdin()</code>
          </a>{" "}
          creates a new <code>Stdin</code> struct. That <code>Stdin</code>{" "}
          struct will allow us to tap into the standard input stream of our
          process - it’s a handle to the standard input stream [
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doc.rust-lang.org/stable/std/io/struct.Stdin.html#method.read_line"
          >
            4
          </a>
          ].
        </p>
        <p id="96fa1ef7-543e-45c7-bafe-d933d6fc3ce1">
          <strong ref={codeBlockCBulletB}>➁</strong> - The{" "}
          <code>read_line</code> method reads a line of input, and appends that
          line to a supplied buffer. In our case, the buffer is the{" "}
          <code>input</code> String. The method will also return the number of
          bytes it read (but we don’t need that in our application).{" "}
        </p>
        <p id="fdcbed0e-4c34-4878-a1ac-b33b4835e495">
          If any errors occur while reading input, our program will propagate
          the error up the callstack with the <code>?</code> operator.
        </p>
        <div className="indented">
          <p id="c3d4ae16-1898-4ff8-8ed1-5444866c73c4">
            <em>
              *Advanced note: each handle created by io::stdin() is a shared
              reference to a global buffer of input data{" "}
            </em>
            [
            <a
              target="_blank"
              rel="noreferrer"
              href="https://doc.rust-lang.org/stable/std/io/struct.Stdin.html#"
            >
              4
            </a>
            ]
            <em>
              . The read_line method will lock the handle it is called on.
            </em>
          </p>
        </div>
        <p />
        <p id="1ca78bb4-96a4-443c-a07d-bf960555f52e">
          <strong ref={codeBlockCBulletC}>➂</strong> - Loop until the user
          enters valid input.
        </p>
        <p id="b844a041-f086-40d1-a96a-0f6324580447">
          <strong ref={codeBlockCBulletD}>➃</strong> -{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doc.rust-lang.org/std/primitive.str.html#method.trim"
          >
            <code>trim</code>
          </a>{" "}
          removes the leading and trailing whitespaces of the string it is
          operating on. The <code>parse</code> method will convert a string into
          another type, the conversion is possible for the given string. We use
          the{" "}
          <a target="_blank" rel="noreferrer" href="https://turbo.fish/">
            turbofish
          </a>{" "}
          syntax to specify which type we want the string converted to.
        </p>
        <p id="95a49dc1-63aa-45a3-8ff5-bc01a79f91d1">
          <strong ref={codeBlockCBulletE}>➄</strong> - We expect that the user
          will type a number from 1 to 4 to answer a given question. But they
          could mess up and enter something else. If that happens, we’ll forgive
          them and ask them to repeat their answer.
        </p>
        <p id="92ab3bd5-d07e-498a-80d2-31b0eabdf681">
          <strong ref={codeBlockCBulletF}>➅</strong> -{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doc.rust-lang.org/std/string/struct.String.html#method.clear"
          >
            <code>clear</code>
          </a>{" "}
          is a method on the <code>String</code> type that razes the contents of
          the <code>String</code> it’s operating on. For example:
        </p>
        <pre id="7f5cb5ba-f9ff-4f2b-ab38-194759d2ad2c" className="code">
          <code>
            let mut s = String::from({`"`}Hey there{`"`});{"\n"}s.clear();{"\n"}
            assert_eq!(s, String::from({`""`}))
          </code>
        </pre>
        <p id="7407d494-39a1-48a8-883c-1697f2e5d3d4">
          <strong ref={codeBlockCBulletG}>➆</strong> - If there’s more than one
          question left, we’ll want to pluralize the word “question”. Rust is an
          expression language [
          <a
            target="_blank"
            rel="noreferrer"
            href="https://learning.oreilly.com/library/view/programming-rust-2nd/9781492052586/"
          >
            2
          </a>
          ], so we can directly use the value produced by the if-else block in
          the <code>println</code> macro.
        </p>
        <p id="5b3c4249-9663-44e5-af9b-da9563ab2254">
          <strong ref={codeBlockCBulletH}>➇</strong> - When the user enters an
          incorrect number, the game is over and we terminate the process with{" "}
          <code>std::process::exit(0)</code>. The <code>0</code> in{" "}
          <code>exit(0)</code> indicates that the program is exiting
          successfully. If we wanted to indicate that the program is existing
          with an error, we would use any number from <code>1</code> to{" "}
          <code>255</code> as an exit code [
          <a
            target="_blank"
            rel="noreferrer"
            href="https://learning.oreilly.com/library/view/command-line-rust/9781098109424/"
          >
            2
          </a>
          ]. All Rust programs exit with <code>0</code> by default.
        </p>
      </div>
      <p />
      <p id="42248f4b-16fd-492b-817c-cd78ba459054"></p>
      <p id="fe6a9cea-6fd3-44a4-8475-9556c62cad59">Sweet.</p>
      <p id="047235ba-6c96-48be-b379-5de160bcd011">
        Our final step is to run the game from <code>main.rs</code>. Here’s one
        way to do that [
        <a
          target="_blank"
          rel="noreferrer"
          href="https://learning.oreilly.com/library/view/command-line-rust/9781098109424/"
        >
          2
        </a>
        ]:
      </p>
      <pre id="dcfb22d6-b2e7-4724-91ac-5b0ec2346f9d" className="code">
        <code>
          {"// "} main.rs{"\n"}
          {"\n"}use rustis_philbin::{"{"}get_game_settings, run_game{"}"};{"\n"}
          {"\n"}fn main() {"{"}
          {"\n"}
          {"    "}if let Err(e) = run_game(get_game_settings()) {"{ "}
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
          {"        "}eprintln!({`"`}
          {"{"}
          {"}"}
          {`"`}, e);{" "}
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
          {"        "}std::process::exit(1){" "}
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
          {"    "}
          {"}"}
          {"\n"}
          {"}"}
        </code>
      </pre>
      <p id="d17ae8b3-495a-40db-840e-360ee583de62" className />
      <div className="indented">
        <p id="ea64cec1-2bdb-422c-8c8a-724a6f35c876">
          <strong ref={codeBlockDBulletA}>➀</strong> - The{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doc.rust-lang.org/rust-by-example/flow_control/if_let.html"
          >
            if-let syntax
          </a>{" "}
          allows us to concisely say: if the program encounters an error, we’ll
          handle it - otherwise, we’ll just continue on and exit the program
          normally.
        </p>
        <p id="dc734111-ef7b-435c-b799-d73cead96888">
          <strong ref={codeBlockDBulletB}>➁</strong> - The <code>eprintln</code>{" "}
          macro acts just like the <code>println</code> macro, except that the
          output goes to our process’{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)"
          >
            standard error
          </a>{" "}
          rather than its standard output [
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doc.rust-lang.org/std/macro.eprintln.html"
          >
            5
          </a>
          ].
        </p>
        <p id="05be2c7f-d068-4814-99f4-a07b0258655c">
          <strong ref={codeBlockDBulletC}>➂</strong> - Using a non-zero exit
          code to indicate an error.
        </p>
      </div>
      <p />
      <p id="2c8b337e-afaf-4910-ad96-ee84fba4536a"></p>
      <p id="b6e9e1ac-bccb-481e-85fe-6747bd5b685a">
        Nice, the game is ready. Give it a spin by entering{" "}
        <code>cargo run</code> in your command-line.{" "}
      </p>
      <p id="47bbaf23-6beb-4c1a-bebb-3fc7c024a75d">
        Cheers, I’ll see you in the next one!
      </p>
      <p id="409f42b1-c1cd-4636-a811-bcdcffc028a5"></p>
      <h3 id="a9d43154-c455-425b-88fb-5d50caba421d">Further Reading</h3>
      <hr id="4cc84280-da93-47eb-9013-9daee1d96fac" />
      <p id="c54c791c-13fc-4ca7-b327-c68bf7601bbc">
        If you want more practice creating command-line apps with Rust and{" "}
        <code>clap</code>, I recommend the book{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.amazon.com/Command-Line-Rust-Project-Based-Primer-Writing/dp/1098109430"
        >
          <em>Command-Line Rust</em>
        </a>
        <em> </em>by Ken Youens-Clark. I like that book a lot.
      </p>
      <p id="d801feb6-6fea-4c12-b475-e5c90ce751cf"></p>
      <h3 id="2c681f63-a839-4928-9248-e430d24853ca">References</h3>
      <hr id="55975d22-079d-4977-a4d4-09bc7745a7cc" />
      <p id="8a80f833-863b-4b5a-9f3a-6deb0dff2fb8">
        [1] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.rs/clap/latest/clap/type.Command.html"
        >
          Documentation for{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.rs/clap/latest/clap/type.Command.html"
        >
          <code>clap::Command</code>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.rs/clap/latest/clap/type.Command.html"
        >
          .
        </a>
      </p>
      <p id="d2cef726-6742-4182-82aa-93542c624a37">
        [2] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.oreilly.com/library/view/command-line-rust/9781098109424/"
        >
          Ken Youens-Clark. (2022).{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.oreilly.com/library/view/command-line-rust/9781098109424/"
        >
          <em>Command-Line Rust.</em>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.oreilly.com/library/view/command-line-rust/9781098109424/"
        >
          {" "}
          O’Reilly.
        </a>
      </p>
      <p id="ebf716f6-3e80-450e-acb8-e33fcac6bc58">
        [3] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.all"
        >
          Documentation for the{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.all"
        >
          <code>all</code>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.all"
        >
          {" "}
          method.
        </a>
      </p>
      <p id="1928a09a-8c22-419a-9252-7d0fc0870bb9">
        [4] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/stable/std/io/struct.Stdin.html#"
        >
          Documentation for{" "}
        </a>
        <code>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://doc.rust-lang.org/stable/std/io/struct.Stdin.html#"
          >
            Stdin
          </a>
        </code>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/stable/std/io/struct.Stdin.html#"
        >
          .
        </a>
      </p>
      <p id="599f5073-d618-46da-beba-6b4dd8a7c626">
        [5] -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/std/macro.eprintln.html"
        >
          Documentation for{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://doc.rust-lang.org/std/macro.eprintln.html"
        >
          <code>eprintln</code>
        </a>
        .
      </p>
      <p id="b8f946b7-1287-4595-b1ae-f4bc093ca012"></p>
    </div>
  );
};

export default CliGame;
