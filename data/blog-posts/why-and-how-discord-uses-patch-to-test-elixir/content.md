<div class="column-4 w-col w-col-8 w-col-stack">
    <div id="heading-1" class="rich-wrapper">
        <div class="blog-post-content w-richtext">
            <p>Discord’s Realtime Infrastructure Team is responsible for delivering all the events that power Discord’s text chat.&nbsp; These systems are largely built in <a href="https://elixir-lang.org/">Elixir</a>, a dynamic, functional language for building scalable and maintainable applications.&nbsp; These services are improved and deployed every day.&nbsp; Tests allow us to develop and deploy these services with confidence.<br></p>
            <p>So let’s talk about testing Elixir code.<br></p>
            <p>Elixir comes with <a href="https://hexdocs.pm/ex_unit/ExUnit.html">ExUnit</a> and that’s what we use to test our code.&nbsp;ExUnit has all the normal features you would expect from a testing library, with one notable exception, mocking.&nbsp; Mocking is something Elixir developers have to figure out for themselves, and that’s what this post is all about.<br></p>
            <h2>Step 1: Make Discord<br></h2>
            <p>To test some code we need to have some code to test.</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/c332ab20f5b721a0828759d70a52b986.js"></script>
            </div>
            <h2>Step 2: Test Discord<br></h2>
            <p>Great, we have a nice looking Discord that’s all ready to test!&nbsp; Let’s write some tests for send_message/1.</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/42101c856fba73c8fe78b34303d24000.js"></script>
            </div>
            <p>Ok, so how should we write this first test?&nbsp; We <em>could</em> craft a message in our test that fails one of the validation checks.&nbsp; This would work, but it’s got a number of drawbacks.&nbsp; Which validation inside of validate_message/1 should we craft the message to fail?&nbsp; How much additional fixture data do we need to construct to cause this failure? Do we need a member list so the validate_author_is_member/1 check can fail?&nbsp; What happens when someone comes along and adds a new check before the validate_author_is_member/1 check and now our send_message/1 test fails because it’s returning {:error, :new_check_failed} instead of {:error, :not_a_member}?<br><br>We can take a step back and realize that we don’t even want to test the validate_message/1 function or any of the validate_* functions inside of it.&nbsp; We just want to have validate_message/1 return an error and assert that when that happens it gets returned by send_message/1.&nbsp; Mocking would be a good fit for this problem.</p>
            <p>It would be great if we could write some code that looked something like this.<br></p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/062d60f3c2b6292ab879f13d017d294f.js"></script>
            </div>
            <p>Let’s grab a mocking library and try this out.<br></p>
            <p>If you google Elixir Mock, you’ll probably end up at <a href="https://github.com/jjh42/mock">Mock</a>.&nbsp; Let’s install that and give it a try.</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/5a421c1d6391d972574c60f16cbdeab3.js"></script>
            </div>
            <p>Not so hard, let’s try running it.</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/c3bf12d39e816f67a844de9f6e558441.js"></script>
            </div>
            <p>Uh oh, why is the function undefined?&nbsp; Well it is a private function, so we can’t mock that.&nbsp; Ok, let’s make it public, not ideal, but it is what it is.</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/d2a5b91569f07e13889bdcd219c94316.js"></script>
            </div>
            <p>Ok, so now Discord is not available.&nbsp; Time to learn about partial mocking and the passthrough option.&nbsp; Let’s change our code slightly to partially mock the module.</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/5e315795e9efa12ee7c8db39c71bfb48.js"></script>
            </div>
            <p>One more try!</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/33b36ca2882c65c0f9f33dcfe333563a.js"></script>
            </div>
            <p>What’s wrong now?!&nbsp; Oh, the <a href="https://github.com/jjh42/mock#not-supported">NOT SUPPORTED</a> section of the documentation will enlighten you to the fact that this is an internal function call (also known as a local function call) and those can’t be mocked.&nbsp;</p>
            <h2>Step 3: Ask for help while gesturing broadly at everything</h2>
            <p>At this point a lot of our engineers, especially those that aren’t primarily working in Elixir, throw their hands up and ask for help.&nbsp; They normally end up at my virtual door, wondering why mocking is so much more difficult in Elixir than it is in their favorite language.&nbsp; For a while I would just try to help them refactor their code into something that could be tested and get them on their way with what Mock had to offer.&nbsp; This experience planted a seed, a small thought in the back of my mind, that this shouldn’t be so hard.</p>
            <p>It also provided the guiding principle for the project the rest of this post is about.&nbsp;&nbsp;</p>
            <p><strong>Patched functions should always return the mock value they are given.</strong></p>
            <h2>Step 4: Sand down the sharp edges<br></h2>
            <p>In part to make my colleagues more successful at testing and in part to prevent having to have yet-another-conversation-about-Mock, I wrote a small, simple library called <a href="https://github.com/ihumanable/patch">Patch</a>.&nbsp; This library started out with a relatively modest goal; make it easier to use the functionality that Mock provides.&nbsp;<br></p>
            <p>Engineers were consistently stumbling over things like partial mocks and were rarely using the expectations part of Mock, so I built a wrapper to set what I considered more sensible defaults.&nbsp; Another complaint was that tests using Mock were very noisy and mocking was difficult to compose.&nbsp; Mock thinks about mocking <strong>modules</strong> so if you wanted to mock a few functions in a module or multiple modules you end up with code like this.</p>
            <div class="w-embed"></div>
            <p>Can you see the test? It’s that one line surrounded by punctuation. This is a lot of mocking noise in the test itself and the way it’s structured makes abstracting and encapsulating this concern rather difficult.</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/74e893e110dd2fbe4744513727bf493a.js"></script>
            </div>
            <p>Here’s the equivalent mocking via Patch.</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/2c1db40bb8c0f8e926d39e2bc0244a6e.js"></script>
            </div>
            <p>Since patch calls are just normal function calls you can make a patch_module_a function that encapsulates this behavior, it can take arguments, the entire expressive power of the language is at your disposal.</p>
            <p>This was a much more pleasant experience for our engineers and the adoption of Patch grew and grew, and with that feature requests began to pour in.</p>
            <h2>Step 5: Devise a plan just crazy enough to work</h2>
            <p>Patch made the hammer easier to hold, but it was still just a hammer.&nbsp; When we started our journey we just wanted to patch a local function call and our engineers still wanted to do that. Now that they had a direct line to the person writing their testing library, they had all kinds of other neat stuff they wanted to do too.<br></p>
            <p>For uninteresting technical reasons Patch was originally built on <a href="https://github.com/eproxus/meck">Meck</a>, the Erlang library that powers Mock.&nbsp; Meck had the exact same limitations when it came to local function calls.&nbsp; Well when the tools you have can’t do the job you can either give up or make better tools, and I was never one to give up.<br></p>
            <p>Meck has a very nice and easy to read open source Erlang code base that allowed me to understand why the limitation exists and formulate a plan to replace it with a new strategy that didn’t have these limitations.&nbsp;&nbsp;<br></p>
            <p>Mock and Meck work by creating a copy of the module you are mocking and redirecting calls into a GenServer that can record the calls and respond with mock values for functions that are mocked.&nbsp; Patch takes a similar approach but with some key differences.<br></p>
            <p>Let’s continue to use our Discord module as an example and see what Patch does under the covers to allow local function calls to be mocked.<br></p>
            <p>When you mock a module with Patch, three new modules will be dynamically generated, the Facade, the Delegate, and the Original, along with a GenServer for the module.<br></p>
            <p>These modules are all generated off the BEAM file, and so no Elixir code is ever actually generated, but for the sake of simplicity we will look at the equivalent Elixir code instead of the BEAM abstract format.<br></p>
            <p>Here’s what our Facade module would look like for Discord.</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/1f3996406d4ba811eeeb3ed1b7505ab2.js"></script>
            </div>
            <p>Not very exciting, just wraps the Delegate module, so let’s look at that next.</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/4117edf6b8edb602c1fb72e62be3ac50.js"></script>
            </div>
            <p>Again, not super exciting, but a little different.&nbsp; The Delegate Module has all the functions, both public and private, and it just forwards the call to the GenServer for the module.&nbsp; That GenServer actually holds the patch values and call history and so we can see how someone calling Discord.send_message/1 would now end up actually calling the GenServer.</p>
            <p>Let’s peek into the delegate/3 function on Patch.Mock.Server to see what exactly it does (this is a simplified version of that function for clarity)</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/1ea833bc2b7fe93c1864f73dd549d134.js"></script>
            </div>
            <p>Pretty simple stuff, it calls the GenServer which either returns {:ok, reply} if the function has been mocked, or :error if it hasn’t.&nbsp; If it returns :error then it just calls the function on the Original module.&nbsp;&nbsp;<br></p>
            <p>So let’s look at the Original Module.<br></p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/17d24823add0cbcc6a380075b1166f43.js"></script>
            </div>
            <p>This looks really familiar, looks almost exactly like the Discord module we started with.&nbsp; There are two big differences though, all the functions are public now and every local function call has been transformed into a remote function call to the Delegate module we’ve already seen.<br></p>
            <p>This is where Patch becomes capable of doing something no other Elixir mocking library can do, mock local function calls.&nbsp; Now we can revisit our example and see if we can get our first test to work.</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/77ded9d3d2a7e9ef7633a286be65c0c4.js"></script>
            </div>
            <p>Let’s give this a run.</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/dea85b674c1a160bd798a91ba80f95de.js"></script>
            </div>
            <p>Nice.<br></p>
            <p>How did that just work?&nbsp; We can follow the call graph to see what exactly happened.</p>
            <div class="w-embed w-script">
                <script src="https://gist.github.com/DiscordBlog/34e4d73a100b4215237367d6ffa9db3d.js"></script>
            </div>
            <p>The call graph is a bit complicated, but the most important part is what happens in the Original module’s send_message/1.&nbsp; Since the local function call to validate_message/1 was transformed into a remote function call to the Delegate’s validate_message/1, the Delegate and Server can intercept that call and return the patched value.&nbsp;&nbsp;<br></p>
            <p>The strategy works, it allows the test author to patch a function and that function always returns the patched value. &nbsp; If it’s a remote function call the call path goes from Facade to Delegate to Server, which can return the mock value.&nbsp; If it’s a local function call, the call path goes from Delegate to Server, which can return the mock value.<br></p>
            <h2>Step 6: Exploit new found powers for good</h2>
            <p>Once you start dynamically generating modules, it’s hard to stop.&nbsp; The way that Patch works means that you can already patch private functions without any extra steps, that was a nice surprise.&nbsp; Having to change the visibility of your functions just for testing always felt like a hack.<br></p>
            <p>There is one other time that we change the visibility of a function for testing, testing private functions.&nbsp; This isn’t always a good idea, but from time to time some important logic or a bug is found in a private function and to prevent future regressions engineers want to test that function.&nbsp; This is often accompanied with a comment like “Function is only public for testing, do NOT call directly!!!”<br></p>
            <p>Since Patch is generating the Facade, it could just expose some private functions as public for the purpose of testing.&nbsp; This allows you to test important pieces of code directly while still enforcing that the non-test code in your project can’t call it directly.<br></p>
            <p>This new ability to expose private functions as public was also implemented in the aptly named expose/2 function in Patch.&nbsp;</p>
            <h2>Step 7: Use Patch</h2>
            <p>Once our engineers got a taste of being able to test things in a way that was ergonomic and powerful, they started testing more and more things.&nbsp; Many of our tests are still using Mock but new tests are being written with Patch and as tests get updated engineers are voluntarily converting from Mock to Patch.&nbsp; This is the best endorsement you can hope for when building a developer tool.<br></p>
            <p>Patch started from a simple idea, when you patch a function it should return the patched value.&nbsp; It has grown more capable, but at its heart is this simple idea.&nbsp; Just like Elixir itself, Patch strives to provide simple guarantees that are easy to reason about.&nbsp;<br></p>
            <p>There are more cool things inside of Patch that I could write a whole series of blog posts about. Call assertions that work like ExUnit’s assert_receive that have the capability of binding arguments for additional inspection. Functions for working with processes that allow you to listen to all the messages being sent to a process or easily change the state of a running GenServer.&nbsp; Mock values that go beyond functions and simple static return values, sequences, cycles, raising exceptions, throwing values.&nbsp; The <a href="https://hexdocs.pm/patch/readme.html#quickstart">Quickstart</a> provides a handy reference to all the features in Patch.<br></p>
            <p>Patch is open source, MIT licensed, and available right now on <a href="https://hex.pm/packages/patch">Hex</a>; it comes with a comprehensive test suite, <a href="https://hexdocs.pm/patch/readme.html">plenty of documentation</a> and a <a href="https://hexdocs.pm/patch/01-introduction.html">Guidebook</a>.&nbsp; Installation is as easy as adding the dependency to your mix.exs and from there you can enjoy writing unit tests in Elixir just that much more.</p>
            <p>‍<br></p>
            <p>If you want to work with people that are determined to make things like Unit Testing effective, easy, and fun, <a href="https://discord.com/jobs">we are hiring</a>.&nbsp; If you are the kind of person that sees something isn’t working well and wants to make it work better, <a href="https://discord.com/jobs">we are hiring</a>.&nbsp; If you just want to work somewhere with tests, <a href="https://discord.com/jobs">we are hiring</a>.<br></p>
        </div>
    </div>
    <div class="btn-wrapper w-condition-invisible"><a href="#" class="btn-blog w-dyn-bind-empty w-button"></a></div>
    <div id="heading-2" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-3" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-4" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-5" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-6" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-7" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-8" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-9" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
    <div id="heading-10" class="rich-wrapper">
        <div class="blog-post-content w-dyn-bind-empty w-richtext"></div>
    </div>
</div>