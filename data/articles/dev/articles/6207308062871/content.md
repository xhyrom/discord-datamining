<h2 id="h_01JRBEK65WWJRW016EYHTG015E">Privileged Intent Types</h2>
<p>
  Privileged Intents are
  <a
    href="https://docs.discord.com/developers/events/gateway#gateway-intents"
    tabindex="0"
    data-token-index="1"
    rel="noopener noreferrer"
    >gateway </a
  ><a
    href="https://docs.discord.com/developers/events/gateway#gateway-intents"
    tabindex="0"
    data-token-index="2"
    rel="noopener noreferrer"
    >intents</a
  >
  that have additional requirements for access due to the nature of their data.
  Currently, these include:
</p>
<h3 id="h_01JRBEHFXV4NB03635PTK48T0W">Guild Presences</h3>
<p>
  Controls access to presence update events, which include information about
  when users come online, go offline, or update their status.
</p>
<h3 id="h_01JRBEGY9MVRC71MXPSASKHSMZ">Guild Members</h3>
<p>
  Controls access to guild member events, like when members join, update their
  profile, or leave a server, as well as the ability to request guild member
  lists.
</p>
<h3 id="h_01JRBEGY9MHAVEC16MD9QEAP22">Message Content</h3>
<p>
  Unlike other intents, this doesn't correspond to specific events but instead
  controls access to message content data
  <span data-token-index="1">across our APIs</span>, including fields like
  content, embeds, attachments, and components in message objects.
</p>
<h2 id="h_01JRBEGY9MWQPGKVQAEA5N5QBZ">When To Use Privileged Intents</h2>
<div dir="auto" data-block-id="359f46fd-48aa-80aa-ba94-c8d2410cbfb2">
  <div>
    <div>
      <div>
        <div>
          <div id=":rt:" data-content-editable-leaf="true">
            Apps can offer most of their features on our platform without
            Privileged Intents, but some Gateway Events and API responses
            require them. You should only enable a privileged intent for your
            app if your use case requires it to function and is consistent with
            our
            <a
              href="https://support-dev.discord.com/hc/en-us/articles/8563934450327-Discord-Developer-Policy"
              tabindex="0"
              data-token-index="1"
              rel="noopener noreferrer"
              >Developer Policy</a
            >. If you're not sure whether your app needs these intents and their
            potential alternatives, please review our
            <span data-token-index="3">Privileged Intents </span>developer
            guide.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div dir="auto" data-block-id="35ff46fd-48aa-80d6-9bfb-e9a4433fad8a">
  <div>
    <div>
      <div>
        <div>
          <div id=":ru:" data-content-editable-leaf="true">
            <span data-token-index="0"
              >If your app has fewer than 10,000 users, you may access
              Privileged Intents by enabling them in the Developer Portal.
              However, once your app reaches 10,000 users, your app requires
              review for continued access.</span
            >
          </div>
          <h4 id="h_01KTA23WDQGVYKG7CDH8NKJW4C">
            <span data-token-index="0">How we count users for your app: </span
            ><span data-token-index="1"
              >We count the number of unique users who have access to your app
              across all the servers it's installed in. When your app reaches
              the 10,000-user threshold, the app or team owner will receive a
              notification via email and/or system DM. You will also see a
              message in the Developer Portal letting you know it's time to
              apply. You will have </span
            ><span data-token-index="2">90 days</span
            ><span data-token-index="3">
              to apply for Privileged Intents access.</span
            >
          </h4>
        </div>
      </div>
    </div>
  </div>
</div>
<div dir="auto" data-block-id="359f46fd-48aa-8015-bd71-dfe50e00f9f6">
  <div>
    <div>
      <div>
        <div>
          <div id=":r10:" data-content-editable-leaf="true">
            After reviewing this and other linked articles, if you have any
            questions, please <a
              href="https://dis.gd/intents"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="0"
              data-token-index="1"
              >reach out to our Developer Support team</a
            >!
          </div>
          <div id=":r10:" data-content-editable-leaf="true"> </div>
          <div dir="auto" data-block-id="359f46fd-48aa-80fe-b208-cbda7ea1603a">
            <div>
              <div>
                <div>
                  <div>
                    <h2 id="h_01KTA25BJYE6MDW4GJSWA1562A">Resources</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div dir="auto" data-block-id="359f46fd-48aa-8061-b4f0-d36213d0ca09">
            <div>
              <div>
                <div>
                  <div>
                    <div id=":r12:" data-content-editable-leaf="true">
                      <span data-token-index="0">- </span
                      ><a
                        href="https://support-dev.discord.com/hc/en-us/articles/6205754771351-How-do-I-get-Privileged-Intents-for-my-bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        tabindex="0"
                        data-token-index="1"
                        >How do I get Privileged Intents for my bot?</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div dir="auto" data-block-id="359f46fd-48aa-80e0-9f15-c5123a29155a">
            <div>
              <div>
                <div>
                  <div>
                    <div id=":r13:" data-content-editable-leaf="true">
                      - Guide:
                      <a
                        href="https://docs.discord.com/developers/gateway/you-might-not-need-a-privileged-intent"
                        target="_blank"
                        rel="noopener noreferrer"
                        tabindex="0"
                        data-token-index="1"
                        >You Might Not Need a Privileged Intent</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div dir="auto" data-block-id="359f46fd-48aa-80fb-819f-cefff9c59e3b">
            <div>
              <div>
                <div>
                  <div>
                    <div id=":r14:" data-content-editable-leaf="true">
                      - Guide:
                      <a
                        href="https://docs.discord.com/developers/gateway/getting-started-with-privileged-intent-review"
                        target="_blank"
                        rel="noopener noreferrer"
                        tabindex="0"
                        data-token-index="1"
                        >Getting Started with Privileged Intent Review</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
