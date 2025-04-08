<h2 id="h_01JRBH1XHP02V86N1B0ZNE111Y">Introduction</h2>
<p>
  Privileged Intents provide access to sensitive user data. Using them
  responsibly is essential for maintaining user trust and complying with
  Discord's requirements.
</p>
<h4 id="h_01JRBH2D5BWGCZJZT9C8WRZ5RW">
  ⚠️ Please note:
  <strong
    >We cannot provide guidance on specific use cases for any Privileged
    Intent.</strong
  >
  This guide offers general principles instead.
</h4>
<h2 id="h_01JRBH1XHPXK0H3KHT4K9P9MZ9">Key Principles for Responsible Use</h2>
<h3 id="h_01JRBH1XHPR9XP093PQKK5JMNE">
  Practice Principles of Least Privilege
</h3>
<ul>
  <li>
    Request only the intents your application fundamentally needs. Learn more
    about the different types of Privileged Intents in the
    <a
      href="https://support-dev.discord.com/hc/en-us/articles/6207308062871"
      target="_blank"
      rel="noopener noreferrer"
      >What Are Privileged Intents article</a
    >.
  </li>
  <li>
    Consider alternative API endpoints that might accomplish your goals without
    privileged data. Please see our article on
    <a
      href="https://support-dev.discord.com/hc/en-us/articles/6383579033751"
      target="_blank"
      rel="noopener noreferrer"
      >Message Content Intent Alternatives</a
    >.
  </li>
</ul>
<h3 id="h_01JRBH1XHPA17DEMFBTB0Q399B">Be Sensitive to Information Handling</h3>
<ul>
  <li>
    <strong>For anonymous/aggregated data</strong>:
    <ul>
      <li>Limit access to only those who need it</li>
      <li>Implement proper access controls within your team</li>
      <li>Control visibility based on server roles and permissions</li>
    </ul>
  </li>
  <li>
    <strong>For individual user data</strong>:
    <ul>
      <li>Provide clear mechanisms for users to request data deletion</li>
      <li>
        Delete user data as soon as possible (30 days is our recommended
        maximum)
      </li>
      <li>
        Always encrypt personally identifiable information (email, phone,
        address, etc.)
      </li>
    </ul>
  </li>
</ul>
<h3 id="h_01JRBH1XHPB1B8YZHVRNPPTY7F">Control Access Carefully</h3>
<ul>
  <li>
    Remember that Discord servers are often considered private spaces by users
  </li>
  <li>Limit who on your team can access server data</li>
  <li>
    When showing server data to users:
    <ul>
      <li>
        Restrict visibility to server members with appropriate permissions
      </li>
      <li>Consider what level of detail is appropriate for different roles</li>
    </ul>
  </li>
</ul>
<h3 id="h_01JRBH1XHP7NJW1117GA6B3TJ7">Meet User Expectations</h3>
<ul>
  <li>
    Respect user expectations regarding data usage. Transparency builds trust.
  </li>
  <li>
    Ask yourself "Would users be concerned by how I'm using their data?"
    <ul>
      <li>If you can't confidently answer "no," reconsider your approach</li>
    </ul>
  </li>
</ul>
<h2 id="h_01JRBH1XHPRCJA7PCQDKCEHBSC">Need Help?</h2>
<p>
  After reviewing this guide and our
  <a
    href="https://discord.com/developers/docs/events/gateway#gateway-intents"
    target="_blank"
    rel="noopener noreferrer"
    >Developer Documentation</a
  >
  on Gateway Intents, if you have questions, please
  <a href="https://dis.gd/intents" target="_blank" rel="noopener noreferrer"
    >reach out to our Developer Support team</a
  >.
</p>
<p><!-- notionvc: b8e05efa-056b-4552-bd46-ec7e344bffb6 --></p>
<p> </p>
